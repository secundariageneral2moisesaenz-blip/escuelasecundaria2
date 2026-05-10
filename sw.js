const CACHE_NAME = 'moises-saenz-v1';
const assets = [
  './',
  './inicio.html',
  './ESCGM2.jpg',
  './ajustes.html',
  'https://unpkg.com/lucide@latest'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});