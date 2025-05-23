/*global UVServiceWorker,__uv$config*/
/*
 * Stock service worker script.
 * Users can provide their own sw.js if they need to extend the functionality of the service worker.
 * Ideally, this will be registered under the scope in uv.config.js so it will not need to be modified.
 * However, if a user changes the location of uv.bundle.js/uv.config.js or sw.js is not relative to them, they will need to modify this script locally.
 */
if ('undefined' === typeof window) {
	importScripts("/uv/uv.bundle.js?v=8-24-2024");
	importScripts("/uv/uv.config.js?v=8-24-2024");
	importScripts(__uv$config.sw || "/uv/uv.sw.js?v=8-24-2024");

	const sw = new UVServiceWorker();

	self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
}
