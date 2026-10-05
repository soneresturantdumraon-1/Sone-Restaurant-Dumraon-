const CACHE_NAME = 'sone-customer-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './sonelogo.png',
  './sonfront.png',
  './sonein.png',
  './sonein1.png',
  './partyhall.png',
  './partyhall1.png',
  './sonefront1.png',
  './qr.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
