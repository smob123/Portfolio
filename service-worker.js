"use strict";var precacheConfig=[["/Portfolio/index.html","b3ea088804ffbd7e8638af464e52e609"],["/Portfolio/static/css/main.e0605000.css","34023e7c4d935ec2a55396e76cd32761"],["/Portfolio/static/js/main.88c1837b.js","e7c15b48796ad0b79f07002dbd3abcaa"],["/Portfolio/static/media/CSS3.9c1431e3.png","9c1431e38a3e9d8b5bd6af8d7001aaf5"],["/Portfolio/static/media/FlappyBird.3529b1d6.png","3529b1d642dc70f146c77e746233d0e3"],["/Portfolio/static/media/Gatsby.a9dd2e93.png","a9dd2e9381f070cf74e796a37e7d5b0f"],["/Portfolio/static/media/HTML5.da3c36ab.png","da3c36ab7d12285e143e25c4741d3d3e"],["/Portfolio/static/media/JS.1f0f3724.png","1f0f3724598e4166fad36a2c2173fbe3"],["/Portfolio/static/media/Java.16aac88e.png","16aac88e1754612f4f5868fc6aee604a"],["/Portfolio/static/media/React.66657f5d.png","66657f5dc34703daceb62cb80cf2f7d4"],["/Portfolio/static/media/RestaurantFinder.e8e75a7e.png","e8e75a7e2ca5fe2c2c6f54290436648c"],["/Portfolio/static/media/VoiceRecorder.0fcc886e.png","0fcc886e578a132ad653b2fb8df394e5"],["/Portfolio/static/media/github.9e2f3c82.png","9e2f3c8282f7e7eabf0612872880cc4d"],["/Portfolio/static/media/groceristar.ef2f56f3.PNG","ef2f56f36278a72bb423ce60d0c13bf6"],["/Portfolio/static/media/profile-img.98d62553.jpg","98d625538c6e012c43134624a02366fa"],["/Portfolio/static/media/rdcsi.b26ac17b.jpg","b26ac17b36ae4a0838a1c31f038246dd"],["/Portfolio/static/media/twitter-logo.2451ce30.png","2451ce303795b690a648060a3d42d925"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/Portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});