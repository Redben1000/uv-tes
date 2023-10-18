importScripts('/uv/uv.bundle.js');
importScripts('/uv/uv.config.js');
importScripts('/uv/uv.sw.js');
const sw = new UVServiceWorker();
self.addEventListener('fetch', (event)=>{
    if (__uv$config.decodeUrl(event.request.url.split('/')[4])) {
        if (__uv$config.decodeUrl(event.request.url.split('/')[4]).includes('google')) {
            return;
        } else {
            event.respondWith(sw.fetch(event));
        }
    }
}
);
