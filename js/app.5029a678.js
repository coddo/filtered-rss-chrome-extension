(function(t){function e(e){for(var r,s,o=e[0],l=e[1],u=e[2],b=0,f=[];b<o.length;b++)s=o[b],i[s]&&f.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),i=n.n(r);i.a},"5e27":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-secondary",attrs:{id:"app"}},[n("navbar"),n("router-view")],1)},a=[],s=n("d225"),o=n("308d"),l=n("6bb5"),u=n("4e2b"),c=n("9ab4"),b=n("60a3"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[n("a",{staticClass:"navbar-brand text-white"},[t._v("Your filtered RSS feeds")]),n("button",{staticClass:"btn btn-outline-success ml-auto",attrs:{type:"button"}},[t._v("+")])])}],h=function(t){function e(){return Object(s["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(b["b"]);h=c["a"]([Object(b["a"])({components:{}})],h);var d=h,v=d,m=n("2877"),w=Object(m["a"])(v,f,p,!1,null,"6ee958a9",null),j=w.exports,g=function(t){function e(){return Object(s["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(b["b"]);g=c["a"]([Object(b["a"])({components:{Navbar:j}})],g);var O=g,_=O,k=(n("5c0b"),Object(m["a"])(_,i,a,!1,null,null,null)),y=k.exports,x=n("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items&&t.items.length>0?n("div",{attrs:{id:"feeds-list"}},t._l(t.items,function(e){return n("div",{key:e.title,staticClass:"card"},[n("div",{staticClass:"card-body mr-auto"},[n("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),n("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(e.link))]),n("p",{staticClass:"card-text"},[t._v(t._s(e.feedName))]),n("a",{staticClass:"card-link",attrs:{href:"#"}},[t._v("Card link")]),n("a",{staticClass:"card-link",attrs:{href:"#"}},[t._v("Another link")])])])}),0):n("div",{staticClass:"mt-5 text-white"},[n("p",[t._v("You have no feeds configured :(")]),n("button",{staticClass:"btn btn-success"},[t._v("Add new feed")])])},S=[];function K(){return[{channel:{title:"HorribleSubs 1080p",link:"http://www.horriblesubs.info/rss.php?res=1080",description:"1080p releases from Horriblesubs",item:[{title:"Jojo 1",link:"http://www.horriblesubs.info/magnet/jojo1",description:"Jojo's Kimyou na Bouken - 1"},{title:"Jojo 2",link:"http://www.horriblesubs.info/magnet/jojo2",description:"Jojo's Kimyou na Bouken - 2"},{title:"Jojo 3",link:"http://www.horriblesubs.info/magnet/jojo3",description:"Jojo's Kimyou na Bouken - 3"}]},settings:{name:"HorribleSubs 1080p",url:"http://www.horriblesubs.info/rss.php?res=1080"}},{channel:{title:"HorribleSubs 720p",link:"http://www.horriblesubs.info/rss.php?res=720",description:"720p releases from Horriblesubs",item:[{title:"Kimetsu no Yaiba 1",link:"http://www.horriblesubs.info/magnet/kny1",description:"Kimetsu no Yaiba - 1"},{title:"Kimetsu no Yaiba 2",link:"http://www.horriblesubs.info/magnet/kny2",description:"Kimetsu no Yaiba - 2"},{title:"Kimetsu no Yaiba 3",link:"http://www.horriblesubs.info/magnet/kny3",description:"Kimetsu no Yaiba - 3"}]},settings:{name:"HorribleSubs 720p",url:"http://www.horriblesubs.info/rss.php?res=720"}}]}n("7f7f"),n("b54a"),n("ac6a");var J=function t(){Object(s["a"])(this,t)};function Y(t){console.log(t);var e=[];return t.forEach(function(t){t.channel&&t.channel.item&&0!==t.channel.item.length&&t.channel.item.forEach(function(n){var r=!0;if(t.settings.filters&&t.settings.filters.length>0&&(r=!1,t.settings.filters.forEach(function(t){t(n)&&(r=!0)})),r){var i=new J;i.title=n.title,i.link=n.link,i.date=n.pubDate,i.feedName=t.settings.name,e.push(i)}})}),e}var E=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(l["a"])(e).call(this)),t.items=Y(K()),t}return Object(u["a"])(e,t),e}(b["b"]);E=c["a"]([Object(b["a"])({components:{}})],E);var H=E,P=H,$=Object(m["a"])(P,C,S,!1,null,null,null),M=$.exports;r["a"].use(x["a"]);var B=new x["a"]({routes:[{path:"/",name:"home",component:M}]});r["a"].config.productionTip=!1,new r["a"]({router:B,render:function(t){return t(y)}}).$mount("#app")}});
//# sourceMappingURL=app.5029a678.js.map