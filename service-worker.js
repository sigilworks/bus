/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7dde06f983c2db0ba2dd5e475c7ea4c1"
  },
  {
    "url": "assets/css/0.styles.e5b324c2.css",
    "revision": "3d82ff75053826be14094b300834eee3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/workflow.b5a41b85.png",
    "revision": "b5a41b858c6664e7d8eae06cf35413c1"
  },
  {
    "url": "assets/js/10.df59cb5e.js",
    "revision": "68dcb0bf2185488f10ff8f9b2b83cf11"
  },
  {
    "url": "assets/js/11.053fff12.js",
    "revision": "dba3bafe3a2575eb97e73db00eae27ee"
  },
  {
    "url": "assets/js/12.e52461bd.js",
    "revision": "7f6d1f2b6cd0bed69ede7dd8d67fa2b7"
  },
  {
    "url": "assets/js/13.51605591.js",
    "revision": "76989761b14e69fc5c51e404578bc187"
  },
  {
    "url": "assets/js/14.3a9412cb.js",
    "revision": "2224425c688230ee3e7c121cf133db2b"
  },
  {
    "url": "assets/js/15.03c70588.js",
    "revision": "62ac24749753b39a791fdd7881257008"
  },
  {
    "url": "assets/js/16.1d8f5c30.js",
    "revision": "52d680bf4473db5231dce83f53a798b5"
  },
  {
    "url": "assets/js/17.dee4e52f.js",
    "revision": "f1f00e066539e77f65e8e2c6f38a7cd9"
  },
  {
    "url": "assets/js/18.aad36138.js",
    "revision": "36ea2da3a637bfb211e6361a31e026b2"
  },
  {
    "url": "assets/js/2.afc26b7e.js",
    "revision": "8f265611657e1a7af270952db67ef914"
  },
  {
    "url": "assets/js/3.961e5395.js",
    "revision": "3b0d3443c6cb560423f54cb1c9904c75"
  },
  {
    "url": "assets/js/4.55aa08a5.js",
    "revision": "6ee38e18a40bfb564a7139c327d7b947"
  },
  {
    "url": "assets/js/5.a22c922c.js",
    "revision": "2e7fd5b3862af050b172f81858468d27"
  },
  {
    "url": "assets/js/6.91a8c998.js",
    "revision": "a238ccff95e392180c22828111bc3b33"
  },
  {
    "url": "assets/js/7.40b6c714.js",
    "revision": "4e3f459fc75f75bc4ef5cce6e0bc33e5"
  },
  {
    "url": "assets/js/8.559dd821.js",
    "revision": "a028412837b215f370c1d4d3a4149c9e"
  },
  {
    "url": "assets/js/9.25fc9bcf.js",
    "revision": "4a3c783f95a3afcef11a692f8299857f"
  },
  {
    "url": "assets/js/app.740e6ffe.js",
    "revision": "93b4804c49f84f2c4e6748dec5d0ed78"
  },
  {
    "url": "index.html",
    "revision": "9b299fcb5c3dc022ed92343571a5f9ea"
  },
  {
    "url": "packages/bus-core/index.html",
    "revision": "39f4dbc7df16ad114188ce0fe527ab4e"
  },
  {
    "url": "packages/bus-core/src/handler/index.html",
    "revision": "61e75c9bf92c991f13e4e9824d2b04de"
  },
  {
    "url": "packages/bus-core/src/transport/index.html",
    "revision": "468716a1d8ef6945141fc5c00a68aaf9"
  },
  {
    "url": "packages/bus-messages/index.html",
    "revision": "903df2b9e32ab4cf4ab60377bc4332cf"
  },
  {
    "url": "packages/bus-postgres/index.html",
    "revision": "11d9db4819bd87edc612dc4c39548300"
  },
  {
    "url": "packages/bus-rabbitmq/index.html",
    "revision": "c7936b5fd004d891fce2f22066dc165f"
  },
  {
    "url": "packages/bus-sqs/index.html",
    "revision": "dd2599b6f3b9e3c84a4ace4ffe05aea6"
  },
  {
    "url": "packages/bus-workflow/index.html",
    "revision": "2ccaf93d16fade044b1435117a795484"
  },
  {
    "url": "packages/bus-workflow/src/workflow/persistence/index.html",
    "revision": "05cde3aa78fd00b923d397acd6b31a68"
  },
  {
    "url": "pages/service-integration/index.html",
    "revision": "37fbe8db0806c9a3406d0038d4c1fcf6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
