if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>n(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"ca0d9962f55678e0aaf22a3e0a82e047"},{url:"/_next/static/chunks/596-800a272783b3d581.js",revision:"pECk2omU6Ybn5HogS84al"},{url:"/_next/static/chunks/807-05cf562523c26ff7.js",revision:"pECk2omU6Ybn5HogS84al"},{url:"/_next/static/chunks/app/about/page-aedaa20f8e0c2a9e.js",revision:"pECk2omU6Ybn5HogS84al"},{url:"/_next/static/chunks/app/layout-1ebd6f4d15155050.js",revision:"pECk2omU6Ybn5HogS84al"},{url:"/_next/static/chunks/app/page-579c3ed523c8ed40.js",revision:"pECk2omU6Ybn5HogS84al"},{url:"/_next/static/chunks/app/review/page-635124eaf47c62f5.js",revision:"pECk2omU6Ybn5HogS84al"},{url:"/_next/static/chunks/fd9d1056-9ef75db42c6ce98e.js",revision:"pECk2omU6Ybn5HogS84al"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"pECk2omU6Ybn5HogS84al"},{url:"/_next/static/chunks/main-86bd7af286cbd81d.js",revision:"pECk2omU6Ybn5HogS84al"},{url:"/_next/static/chunks/main-app-2181a67a5d8e9f03.js",revision:"pECk2omU6Ybn5HogS84al"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"pECk2omU6Ybn5HogS84al"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"pECk2omU6Ybn5HogS84al"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-11098d56163518f9.js",revision:"pECk2omU6Ybn5HogS84al"},{url:"/_next/static/css/53419cf98757e33f.css",revision:"53419cf98757e33f"},{url:"/_next/static/pECk2omU6Ybn5HogS84al/_buildManifest.js",revision:"9398e4c00894b940f12c9ee80d3484b4"},{url:"/_next/static/pECk2omU6Ybn5HogS84al/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icon-192x192.png",revision:"b32489b759cdcc18cce57ba9571d4cd4"},{url:"/icon-256x256.png",revision:"e07fc4623f0b8f6014fdd46aaf0706ec"},{url:"/icon-384x384.png",revision:"82acf99195c36fc526db5f6a4153d0dd"},{url:"/icon-512x512.png",revision:"9888ef61f7929829bb7d58856957cffd"},{url:"/manifest.json",revision:"622b129a288c744e6b45b3fc31253077"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));