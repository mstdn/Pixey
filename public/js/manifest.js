(()=>{"use strict";var e,r,t,n={},o={};function a(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}a.m=n,e=[],a.O=(r,t,n,o)=>{if(!t){var c=1/0;for(l=0;l<e.length;l++){for(var[t,n,o]=e[l],d=!0,i=0;i<t.length;i++)(!1&o||c>=o)&&Object.keys(a.O).every((e=>a.O[e](t[i])))?t.splice(i--,1):(d=!1,o<c&&(c=o));if(d){e.splice(l--,1);var s=n();void 0!==s&&(r=s)}}return r}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[t,n,o]},a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((r,t)=>(a.f[t](e,r),r)),[])),a.u=e=>"js/"+{1084:"profile~followers.bundle",1983:"kb.bundle",2470:"home.chunk",2521:"about.bundle",2530:"discover~myhashtags.chunk",2586:"compose.chunk",2732:"dms~message.chunk",3351:"discover~settings.chunk",3365:"dms.chunk",3623:"discover~findfriends.chunk",4028:"error404.bundle",4509:"static~privacy.bundle",4958:"discover.chunk",4965:"discover~memories.chunk",5865:"post.chunk",6053:"notifications.chunk",6869:"profile.chunk",7004:"help.bundle",7019:"discover~hashtag.bundle",8021:"contact.bundle",8250:"i18n.bundle",8517:"daci.chunk",8600:"changelog.bundle",8625:"profile~following.bundle",8900:"discover~serverfeed.chunk",9144:"static~tos.bundle"}[e]+"."+{1084:"54e01681585449b4",1983:"275433a4dc3ffda8",2470:"02577ae670229a49",2521:"bad10a127433fdef",2530:"e466a09b04298c01",2586:"377e944cece35cfa",2732:"a69815bfbd4d4598",3351:"1e950f423cfffdee",3365:"4fb5b1ec270b18a1",3623:"bc529a26035305c1",4028:"8aa1c24f3ce999a6",4509:"26054b5ae4c0bed4",4958:"185909b64f3f8f1d",4965:"a2a2d7bc32632a7c",5865:"bad88be5fc04f10b",6053:"ee310da155305164",6869:"d6cf0345664c2864",7004:"bed48f9410486673",7019:"31c30c11f6e84825",8021:"14773b169db68356",8250:"d69fe365e8c72323",8517:"48177e534fb8cf13",8600:"099f13cf06b3200a",8625:"f9d69ec593f3d011",8900:"deb26bf532866578",9144:"478ba7e3a3536a1b"}[e]+".js",a.miniCssF=e=>({138:"css/spa",703:"css/admin",1242:"css/appdark",6170:"css/app",8737:"css/portfolio",9994:"css/landing"}[e]+".css"),a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="pixelfed:",a.l=(e,n,o,c)=>{if(r[e])r[e].push(n);else{var d,i;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==t+o){d=f;break}}d||(i=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.setAttribute("data-webpack",t+o),d.src=e),r[e]=[n];var u=(t,n)=>{d.onerror=d.onload=null,clearTimeout(b);var o=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(n))),t)return t(n)},b=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),i&&document.head.appendChild(d)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.p="/",(()=>{var e={8929:0,1242:0,6170:0,8737:0,703:0,9994:0,138:0};a.f.j=(r,t)=>{var n=a.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(1242|138|6170|703|8737|8929|9994)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var c=a.p+a.u(r),d=new Error;a.l(c,(t=>{if(a.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+r+" failed.\n("+o+": "+c+")",d.name="ChunkLoadError",d.type=o,d.request=c,n[1](d)}}),"chunk-"+r,r)}},a.O.j=r=>0===e[r];var r=(r,t)=>{var n,o,[c,d,i]=t,s=0;if(c.some((r=>0!==e[r]))){for(n in d)a.o(d,n)&&(a.m[n]=d[n]);if(i)var l=i(a)}for(r&&r(t);s<c.length;s++)o=c[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},t=self.webpackChunkpixelfed=self.webpackChunkpixelfed||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),a.nc=void 0})();