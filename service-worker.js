"use strict";var precacheConfig=[["/Portfolio/index.html","59aa7bf5e1ba03f44d0ffd0b036f35f7"],["/Portfolio/static/css/main.f25c60a4.css","819a105154bcf7d22087116a7a31a591"],["/Portfolio/static/js/main.e617ccbc.js","9c7738a587fef072bcc442b730063bf7"],["/Portfolio/static/media/CSS3.9c1431e3.png","9c1431e38a3e9d8b5bd6af8d7001aaf5"],["/Portfolio/static/media/FlappyBird.aac3940f.png","aac3940f14b1899f9e813cb5ad4af8dc"],["/Portfolio/static/media/Gatsby.a9dd2e93.png","a9dd2e9381f070cf74e796a37e7d5b0f"],["/Portfolio/static/media/HTML5.da3c36ab.png","da3c36ab7d12285e143e25c4741d3d3e"],["/Portfolio/static/media/JS.1f0f3724.png","1f0f3724598e4166fad36a2c2173fbe3"],["/Portfolio/static/media/Java.16aac88e.png","16aac88e1754612f4f5868fc6aee604a"],["/Portfolio/static/media/NewsApp.84ba5121.png","84ba512183172939ca9ae749e5307a8e"],["/Portfolio/static/media/React.66657f5d.png","66657f5dc34703daceb62cb80cf2f7d4"],["/Portfolio/static/media/RestaurantFinder.4e33c865.png","4e33c865e9d24a5bb5fde0abea4e0720"],["/Portfolio/static/media/SultansKitchen.72b7841d.PNG","72b7841d7b95bc268c1270de025c37a2"],["/Portfolio/static/media/groceristar.bd6e9433.PNG","bd6e9433baacd3670606178b8dda0dec"],["/Portfolio/static/media/rdcsi.b26ac17b.jpg","b26ac17b36ae4a0838a1c31f038246dd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/Portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});