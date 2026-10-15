const CACHE_NAME = 'plipag-cache-v1';
const assets = ['./', './index.html', './manifest.json', './plipag-192x192.png', './plipag-512x512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});
