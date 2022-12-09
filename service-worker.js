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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f5deaaed7cf4ae63a6c5caec9149866d"
  },
  {
    "url": "assets/css/0.styles.aa2eba79.css",
    "revision": "b980ba7f3456262c59d29541701102c4"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "f359bec423f964ec6c97fcb1a6567a97"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e0efcc43.js",
    "revision": "e602ba60d8558def4c9b50d93d354b06"
  },
  {
    "url": "assets/js/11.d8344014.js",
    "revision": "ed0724d0e0420915d2ee451cdf58d36b"
  },
  {
    "url": "assets/js/12.a8779c65.js",
    "revision": "33896ca9e1460ff9540fee325af59c7b"
  },
  {
    "url": "assets/js/13.ff9d8c82.js",
    "revision": "aad8bbb796a7f9f24f0f42e5f270b58e"
  },
  {
    "url": "assets/js/14.78fe2c27.js",
    "revision": "abd1cef575eefed43fdb4c9322ff79c6"
  },
  {
    "url": "assets/js/15.35beb4b0.js",
    "revision": "3deb60201c885d81dad0b7c0ee28d4c3"
  },
  {
    "url": "assets/js/16.22f97a75.js",
    "revision": "9eb2611e690d3360cb5cb1e7f96bed7f"
  },
  {
    "url": "assets/js/17.42d61663.js",
    "revision": "842370f3748343768c4b50f629404289"
  },
  {
    "url": "assets/js/2.b5ceb8d8.js",
    "revision": "6b08bc2d75aeb10d497d9ae59b75da5b"
  },
  {
    "url": "assets/js/3.8826885a.js",
    "revision": "848a409e488351404e582cfa543a8053"
  },
  {
    "url": "assets/js/4.9f634cb8.js",
    "revision": "525e7839a0ad20f76a0bff6ce66e9258"
  },
  {
    "url": "assets/js/5.602e294e.js",
    "revision": "477fea2a8a2ebb4cdeac093883951108"
  },
  {
    "url": "assets/js/6.d235a73a.js",
    "revision": "0013cbb2cc6d74c2de7b898f5ccc8f53"
  },
  {
    "url": "assets/js/7.a2646908.js",
    "revision": "89b32284d1f34bf4f87976009ff28fca"
  },
  {
    "url": "assets/js/8.927085d7.js",
    "revision": "18fdc3053075e18f0f0f9ae3426947df"
  },
  {
    "url": "assets/js/9.5f907d65.js",
    "revision": "34e47c0c37382eaba55fd9c966eef039"
  },
  {
    "url": "assets/js/app.15f46be5.js",
    "revision": "54b2b001a53cd6d4f072dd394e761982"
  },
  {
    "url": "en/guide/index.html",
    "revision": "6ab43ddefd97b2f27cea5220ac49efc8"
  },
  {
    "url": "en/guide/install.html",
    "revision": "9869ac7bf8fbd45bf632d7fcbe3d16b9"
  },
  {
    "url": "en/guide/start.html",
    "revision": "d328f485e883247ae19bedf65968b6cf"
  },
  {
    "url": "en/guide/test.html",
    "revision": "779a8f35556e026bbe8c6d510a356f51"
  },
  {
    "url": "en/index.html",
    "revision": "c0181873882c55dc661c01f05e8fd6e6"
  },
  {
    "url": "guide/index.html",
    "revision": "dd8dee3fcd9adc2a1eb71aeec145141e"
  },
  {
    "url": "guide/install.html",
    "revision": "90161c19288b17c9273d9f7d1b3477d2"
  },
  {
    "url": "guide/start.html",
    "revision": "77147878a9a27dd1079caf8249b57b43"
  },
  {
    "url": "guide/test.html",
    "revision": "7a3745f4c82af03590af1a02574e8d55"
  },
  {
    "url": "index.html",
    "revision": "9af256f0071967c0486e3ef0df1906f0"
  }
].concat(self.__precacheManifest || []);
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
