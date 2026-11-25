const CACHE='phd-cc-v1-1-4';
const ASSETS=['./','./index.html','./app.js?v=1.1.4','./manifest.webmanifest'];
self.addEventListener('install',event=>{event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(ASSETS);await self.skipWaiting();})());});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim();})());});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    const cached=await cache.match(event.request);
    if(cached)return cached;
    try{const response=await fetch(event.request);if(response&&response.ok)cache.put(event.request,response.clone());return response;}
    catch(error){return (await cache.match('./index.html'))||Response.error();}
  })());
});
