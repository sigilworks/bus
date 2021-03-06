import { IMock, It, Mock, Times } from 'typemoq'
import { StartedByProxy } from './started-by-proxy'
import { completeWorkflow } from '../complete-workflow'
import { Persistence } from '../persistence'
import { WorkflowHandlerFn } from './workflow-handler-fn'
import { TestCommand, TestWorkflowData } from '../../test'
import { Logger } from '@node-ts/logger-core'
import { WorkflowStatus } from '../workflow-data'

describe('StartedByProxy', () => {
  let persistence: IMock<Persistence>
  let handler: IMock<WorkflowHandlerFn<TestCommand, TestWorkflowData>>
  let logger: IMock<Logger>
  let sut: StartedByProxy<TestCommand, TestWorkflowData>

  beforeEach(() => {
    persistence = Mock.ofType<Persistence>()
    logger = Mock.ofType<Logger>()

    handler = Mock.ofType<WorkflowHandlerFn<TestCommand, TestWorkflowData>>()
    handler.setup(x => x.name).returns(() => 'handler-name')

    sut = new StartedByProxy<TestCommand, TestWorkflowData>(
      TestWorkflowData,
      handler.object,
      persistence.object,
      logger.object
    )
  })

  describe('when handling messages', () => {
    let command: TestCommand
    let dataOutput: Partial<TestWorkflowData>

    beforeEach(async () => {
      command = new TestCommand('abc')

      dataOutput = { property1: command.property1 }
      handler
        // tslint:disable-next-line:no-unsafe-any
        .setup(x => x(command, It.isAny()))
        .returns(async () => dataOutput)

      await sut.handle(command)
    })

    it('should dispatch the message to the handler', () => {
      handler.verify(
        x => x(
          command,
          It.is((data: TestWorkflowData) => !!data && data.$version === 0 && data.$status === WorkflowStatus.Running)
        ),
        Times.once())
    })

    it('should save the workflow data', () => {
      persistence.verify(
        async x => x.saveWorkflowData(It.isObjectWith<TestWorkflowData>({
          ...dataOutput,
          $version: 0
        })),
        Times.once()
      )
    })
  })

  describe('when the workflow is completed', () => {
    let command: TestCommand

    beforeEach(async () => {
      command = new TestCommand('abc')

      let dataOutput: TestWorkflowData
      handler
        // tslint:disable-next-line:no-unsafe-any
        .setup(x => x(command, It.isAny()))
        .callback(() => {
          dataOutput = completeWorkflow(dataOutput)
        })
        .returns(async () => dataOutput)

      await sut.handle(command)
    })

    it('should mark the workflow as complete', () => {
      persistence.verify(
        async x =>
          x.saveWorkflowData(It.isObjectWith<TestWorkflowData>({ $status: WorkflowStatus.Complete })),
        Times.once()
      )
    })
  })
})
