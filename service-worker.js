"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","f4713e2596d50181f12e359a4a756ab6"],["static/css/main.ce280e87.css","bb0abaecc764eb03fa25203666eb8544"],["static/js/main.766875b2.js","d01d385a1cd5d61da91bd5badb4d62d1"],["static/media/1.c40201b5.jpg","c40201b50c48350e4edd3861655c70f6"],["static/media/10.0d6893a6.jpg","0d6893a6a0448078d714c50ed7303d76"],["static/media/11.49f87375.jpg","49f8737585579384cf9b4c1298223eaf"],["static/media/12.45354248.jpg","453542486e5896f884c6847a5a42aa2d"],["static/media/13.ab20084d.jpg","ab20084d315baf2b4cbbc5bc23e9a55a"],["static/media/14.5b64a0a3.jpg","5b64a0a3a58ba7eb60e9036581954ecf"],["static/media/15.9b618db3.jpg","9b618db36f11786eea32d4069b92345c"],["static/media/16.e34101b0.jpg","e34101b00c4f49f5c865bf0b0e39eb80"],["static/media/17.1e1ee380.jpg","1e1ee380b7766c51f21fc7aff77388a9"],["static/media/18.bf179324.jpg","bf179324ceec6a83fb601d544c5732b0"],["static/media/19.de9fb9d0.jpg","de9fb9d09736265ae23c7b1e7acc7919"],["static/media/2.204094e9.jpg","204094e96b1f6674f7768f5e9fbfac13"],["static/media/20.f20da0c7.jpg","f20da0c73f4a267a7003773816caeb99"],["static/media/21.c3e46746.jpg","c3e46746f506b576954e18b9b58d9265"],["static/media/22.00cfd850.jpg","00cfd850219e542e01923197aa32260f"],["static/media/23.22efd346.jpg","22efd3462baad7021aa503c4a54f8dcf"],["static/media/24.37b5ae86.jpg","37b5ae86cf0f2b49c10a27fa1fa19158"],["static/media/25.ae9dbf52.jpg","ae9dbf526ab282a58ad8d4a792b66b20"],["static/media/3.20ec9842.jpg","20ec984265fcae62d3fda1fd38124fea"],["static/media/4.c1e452be.jpg","c1e452be30a6f3a7e29b8e6e55dfce63"],["static/media/5.12e0371f.jpg","12e0371f3c25039cce12966b043844d3"],["static/media/6.bfa95893.jpg","bfa95893f0fce1c0634ccf52f16cbe3b"],["static/media/7.f1d7274e.jpg","f1d7274efd209dd33def1e9b47d76d23"],["static/media/8.4f1720cc.jpg","4f1720cc46ad59ee694c3328672176e3"],["static/media/9.1fa01e0b.jpg","1fa01e0bfead711b41acb591cdb459a4"],["static/media/badminton.b9da87d1.jpg","b9da87d174cee5f6cc8732950aa1df3a"],["static/media/badshah.e4dab133.jpg","e4dab13323fbbd8b4c266fc3b3ed4f73"],["static/media/basketball.4ae440a2.jpg","4ae440a212ed927901f76aff39225577"],["static/media/campus-ambassador.d574044a.jpg","d574044aac28de5ce75f0ce567df5e31"],["static/media/campus-bg.177e3516.png","177e3516b33d66b528144c64e31d334e"],["static/media/chess.43600322.jpg","4360032257320b016924e7c976083dcc"],["static/media/contact-bg.a2f20ccc.jpg","a2f20ccc6e1d293c7ecfa79eb2389f86"],["static/media/cricket.383431e2.jpg","383431e2aa4e6fee5c93134204a38752"],["static/media/cyber.103e49d5.jpg","103e49d5950874209c515506f0897345"],["static/media/dance.cdfeead1.jpg","cdfeead1ce7a9437b4ca2179a2b6c368"],["static/media/drama.951d872f.jpg","951d872f57e7040cb610460e5895e51a"],["static/media/english.b0e73868.jpg","b0e738687c65a6c4aab50212247b6161"],["static/media/events-bg.78407c67.jpg","78407c67f5db5476a8ac022230a71db4"],["static/media/events.388001bf.jpg","388001bf14f1e46f61926273d0f46011"],["static/media/football.b3a832cc.jpg","b3a832cc06add2f3b4e4d34585b4c0fa"],["static/media/handball.16dd61ce.jpg","16dd61ce7c9e4f8f9aa6aa27e32cbfa9"],["static/media/header-bg.bcdac453.jpeg","bcdac453edc43fa5f46660eb11966e48"],["static/media/hindi.2efa37d5.jpg","2efa37d52b63dd2b2acba7aaaa0fd8b2"],["static/media/hockey.a4fce169.jpg","a4fce169139aac84c36ae010179c17c2"],["static/media/humanbowling.848471d7.jpg","848471d79392b07f10a09fee89f3c1b0"],["static/media/informal.987b9513.jpg","987b951376993cd186fb40db67cba8c7"],["static/media/mrriviera.0b215ff5.jpg","0b215ff527195ce8cabd2eb51e9941e7"],["static/media/music.d6b86159.jpg","d6b861598cb8e9d8e0ca951a71781569"],["static/media/pre.17254662.jpg","172546623afb1e23be21abe6accaf171"],["static/media/premium.7e704288.jpg","7e704288cc0233ca2de2f9f8108258ea"],["static/media/proshows.5cc61a82.jpg","5cc61a82e2f0e919fb3b2f201d63d5e0"],["static/media/quiz.c1fd4bcc.jpeg","c1fd4bcc08f90892b4c1b3195c96178e"],["static/media/selena.45ff5e53.png","45ff5e53be08f4f201b416e1626afdcd"],["static/media/silklogo.ab3b13f9.png","ab3b13f955ee55cbfc6b992f59abe421"],["static/media/snooker.1e067ce5.jpg","1e067ce5f68ce94d832645d1dbc8e750"],["static/media/sponsors-bg.52c5a41a.jpg","52c5a41adbb734c0c510d267164de140"],["static/media/sports-bg.4f27da29.jpg","4f27da29d5a65fc91765fbef1dcb3682"],["static/media/sports.6d6e5e75.jpg","6d6e5e75b1a9a4a1d098a4fa9e0b2745"],["static/media/swimming.e6d7d696.jpg","e6d7d69684d17b6c9b888a538e4cf13b"],["static/media/talent.edd7e753.png","edd7e7536a8220c30499f5015b5fa4d1"],["static/media/tamil.bb685595.jpg","bb685595c08553e75f7e40d752abad62"],["static/media/team.52c5a41a.jpg","52c5a41adbb734c0c510d267164de140"],["static/media/telugu.5ced518c.jpg","5ced518c1e68087fbda9f561be503664"],["static/media/tennis.6e9c1032.jpg","6e9c1032d911c64999b4dc44b3ff1474"],["static/media/throwball.a82b5d32.jpg","a82b5d32e9dc454bd4ba9e176e83f6be"],["static/media/tt.45a2159e.jpg","45a2159e39da2fab3955683dc5c6b9f6"],["static/media/volleyball.b2cafd4a.jpg","b2cafd4a356d23a94035848571573c0a"],["static/media/workshop.e3813d6b.jpg","e3813d6b649bb5bb61c3c9c6ed234470"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(c);a||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});