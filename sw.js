self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Yeh app ko offline aur fast chalne me madad karta hai
});
