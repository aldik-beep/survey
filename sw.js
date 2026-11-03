self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('field-app-v1').then((cache) => {
      return cache.addAll([
        './1995.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});