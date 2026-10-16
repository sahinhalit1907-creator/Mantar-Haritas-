const VERSION = 'v1.0.0';
const CACHE_NAME = `mantar-haritasi-${VERSION}`;

const ASSETS = [
  './',
  './index.html',
  './config.js',
  './manifest.json'
];

// Yükleme (Install)
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Etkinleştirme ve Eski Önbellek Temizliği (Activate)
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// İstek Yönetimi (Fetch)
self.addEventListener('fetch', (e) => {
  // Supabase veritabanı isteklerini önbelleğe almayıp doğrudan ağa yönlendir
  if (e.request.url.includes('supabase.co')) {
    return;
  }

  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
