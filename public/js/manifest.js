(()=>{"use strict";var e,r,t,o={},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}a.m=o,e=[],a.O=(r,t,o,n)=>{if(!t){var i=1/0;for(u=0;u<e.length;u++){for(var[t,o,n]=e[u],s=!0,l=0;l<t.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](t[l])))?t.splice(l--,1):(s=!1,n<i&&(i=n));if(s){e.splice(u--,1);var d=o();void 0!==d&&(r=d)}}return r}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[t,o,n]},a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((r,t)=>(a.f[t](e,r),r)),[])),a.u=e=>489===e?"js/home-chunk.js":680===e?"js/compose-chunk.js":214===e?"js/post-chunk.js":177===e?"js/profile-chunk.js":void 0,a.miniCssF=e=>({138:"css/spa",170:"css/app",242:"css/appdark",703:"css/admin",994:"css/landing"}[e]+".css"),a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="pixelfed:",a.l=(e,o,n,i)=>{if(r[e])r[e].push(o);else{var s,l;if(void 0!==n)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==t+n){s=c;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+n),s.src=e),r[e]=[o];var p=(t,o)=>{s.onerror=s.onload=null,clearTimeout(f);var n=r[e];if(delete r[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.p="/",(()=>{var e={929:0,242:0,170:0,138:0,703:0,994:0};a.f.j=(r,t)=>{var o=a.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(138|170|242|703|929|994)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var i=a.p+a.u(r),s=new Error;a.l(i,(t=>{if(a.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,o[1](s)}}),"chunk-"+r,r)}},a.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,[i,s,l]=t,d=0;if(i.some((r=>0!==e[r]))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var u=l(a)}for(r&&r(t);d<i.length;d++)n=i[d],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},t=self.webpackChunkpixelfed=self.webpackChunkpixelfed||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();