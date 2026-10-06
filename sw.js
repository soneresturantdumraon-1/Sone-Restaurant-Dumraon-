const CACHE_NAME = 'sone-customer-v3';
const URLS_TO_CACHE = [
  './index.html', './manifest (1).json', 
  './sonelogo1.png', './sonelogo.png', 
  './sonfront.png', './sonein.png', './sonein1.png', 
  './partyhall.png', './partyhall1.png', './qr.png'
];

self.addEventListener('install', event => { 
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))); 
    self.skipWaiting();
});
self.addEventListener('activate', event => { 
    event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => { if(k !== CACHE_NAME) return caches.delete(k); }))));
    self.clients.claim();
});
self.addEventListener('fetch', event => { 
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request))); 
});
