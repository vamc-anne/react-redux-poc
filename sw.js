var serviceWorkerOption = {"assets":["/606c93cf86048e1f52bfa0edce56bbd8.gif","/vendor.4aa3c41aee5b937d1ba3.js","/main.c9df7f44c4acbdde86fe.js","/normalize.2032f2b59425c224ad0d.js","/manifest.958e3ed217045e9d47af.js","/styles/main.cd865300e16454e927c9195ff3f1ce77.css"]};
        
        !function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="./",t(t.s=0)}([function(e,t){console.log("serviceWorkerOption:",serviceWorkerOption);var n=serviceWorkerOption.assets;self.addEventListener("install",function(e){e.waitUntil(caches.open("react-redux-poc_CACHE").then(function(e){return console.log("Opened cache"),e.addAll(n)}))}),self.addEventListener("activate",function(e){console.log("new worker activated: Ho Hooo!")}),self.addEventListener("message",function(e){console.log("SW Received Message: "+e.data),e.ports[0].postMessage("SW Says 'Hello back!'")}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(t){if(t)return t;var n=e.request.clone();return fetch(n).then(function(t){if(!t||200!==t.status)return t;var n=t.clone();return caches.open("react-redux-poc_CACHE").then(function(t){t.put(e.request,n)}),t})}))})}]);
//# sourceMappingURL=sw.js.map