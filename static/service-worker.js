const CACHE_NAME = 'nondualize-v1';
const OFFLINE_URL = '/offline.html';

// Files to cache for offline functionality
const CORE_CACHE_FILES = [
  '/',
  '/offline.html',
  '/app.css',
  '/favicon.png'
];

// Install event - cache core files
self.addEventListener('install', event => {
  console.log('Service Worker: Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching core files');
        return cache.addAll(CORE_CACHE_FILES);
      })
      .then(() => self.skipWaiting())
      .catch(err => console.log('Service Worker: Cache failed', err))
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activate');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip chrome extensions and other protocols
  if (event.request.url.startsWith('chrome-extension://') || 
      event.request.url.startsWith('moz-extension://') ||
      !event.request.url.startsWith('http')) {
    return;
  }

  // Handle navigation requests (HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          console.log('Service Worker: Serving offline page for navigation');
          return caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  // Handle other requests (CSS, JS, images, etc.)
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        
        // Fetch from network and cache if successful
        return fetch(event.request)
          .then(fetchResponse => {
            // Only cache successful responses and same-origin requests
            if (fetchResponse && 
                fetchResponse.status === 200 && 
                event.request.url.startsWith(self.location.origin)) {
              const responseToCache = fetchResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }
            return fetchResponse;
          });
      })
      .catch(() => {
        // Return offline page for failed navigation requests
        if (event.request.destination === 'document') {
          return caches.match(OFFLINE_URL);
        }
      })
  );
});
