const CACHE_NAME = 'minite-stretch-v1';
const ASSETS = [
  './',
  './index.html',
  './app.html',
  './privacy.html',
  './terms.html',
  './manifest.webmanifest'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
