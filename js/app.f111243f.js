(function(e){function t(t){for(var r,o,i=t[0],s=t[1],c=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"28b4b47b"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"bd1acfa5"}[e]+".css",a=s.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("c79f")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=n("bc3a"),a=n.n(o);let u={};const i=a.a.create(u);i.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=i,window.axios=i,Object.defineProperties(e.prototype,{axios:{get(){return i}},$axios:{get(){return i}}})},r["a"].use(Plugin);Plugin;var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Главная")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("Поздравление")]),e._v(" | "),n("a",{attrs:{href:"https://github.com/onlyforak/"}},[e._v("Профиль")])],1),n("router-view")],1)},c=[],l={name:"App",metaInfo:{title:"Default Title",titleTemplate:"%s | My Awesome Webapp"},created(){document.title="onlyforak"}},f=l,p=(n("034f"),n("0c7c")),d=Object(p["a"])(f,s,c,!1,null,null,null),m=d.exports,h=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Main",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},b=[],g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center"},[e._v(" I "),n("div",{staticClass:"heart"},[e._v("💖")]),e._v(" U ")])}],_={name:"Main",props:{msg:String}},w=_,j=(n("e316"),Object(p["a"])(w,g,y,!1,null,"4974a57b",null)),O=j.exports,P={name:"Home",components:{Main:O},methods:{},created(){this.$axios.post("http://34.88.47.51/api/enter/main",{},{crossdomain:!0,headers:{"accept-language":11111998}}).then(e=>{console.log(e)})}},x=P,E=Object(p["a"])(x,v,b,!1,null,null,null),k=E.exports;r["a"].use(h["a"]);const A=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"eeee"))}}],C=new h["a"]({mode:"history",routes:A});var S=C;r["a"].config.productionTip=!1,new r["a"]({router:S,render:function(e){return e(m)}}).$mount("#app")},c79f:function(e,t,n){},d0cd:function(e,t,n){},e316:function(e,t,n){"use strict";n("d0cd")}});
//# sourceMappingURL=app.f111243f.js.map