// Ronda: guarda o app para abrir sem internet e trata o toque nas notificações.
const CACHE = 'ronda-v3';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './logo.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Internet primeiro (pega sempre a versão nova); sem internet, usa a cópia guardada.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => {
    const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r;
  }).catch(() => caches.match(e.request, {ignoreSearch: true})));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type: 'window', includeUncontrolled: true}).then(cs => {
    const c = cs.find(x => x.url.includes('/rotinas/'));
    return c ? c.focus() : self.clients.openWindow('./');
  }));
});
// Pronto para receber avisos do servidor (próxima fase, com o app no ar para vários celulares).
self.addEventListener('push', e => {
  let d = {}; try { d = e.data.json(); } catch (_) { d = {title: 'Ronda', body: e.data ? e.data.text() : ''}; }
  e.waitUntil(self.registration.showNotification(d.title || 'Ronda', {body: d.body || '', icon: 'icon-192.png', badge: 'icon-192.png', tag: d.tag}));
});
