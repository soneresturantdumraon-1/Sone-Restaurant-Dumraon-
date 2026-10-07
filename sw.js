const CACHE_NAME = 'sone-customer-v3';
const urlsToCache = [
  './index.html', './sonelogo.png', './sonefront1.png', 
  './sonein.png', './sonein1.png', './partyhall.png', './partyhall1.png', './qr.png',
  './menu1.png', './menu2.png', './menu3.png', './menu4.png', './menu5.png', './menu6.png', './menu7.png', './menu8.png',
  './manifest.json'
];

self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', event => { event.respondWith(caches.match(event.request).then(res => res || fetch(event.request))); });
