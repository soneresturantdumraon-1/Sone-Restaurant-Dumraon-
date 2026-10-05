const CACHE_NAME = 'sone-customer-v2';
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(['./index.html', './manifest (1).json', './sonelogo.png']))); });
self.addEventListener('fetch', event => { event.respondWith(fetch(event.request).catch(() => caches.match(event.request))); });
