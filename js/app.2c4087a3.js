(function(t){function e(e){for(var r,c,s=e[0],o=e[1],u=e[2],f=0,b=[];f<s.length;f++)c=s[f],a[c]&&b.push(a[c][0]),a[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(b.length)b.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"29ba":function(t,e,n){"use strict";var r=n("b41f"),a=n.n(r);a.a},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(t,e,n){},b41f:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-secondary",attrs:{id:"app"}},[n("navbar"),n("router-view")],1)},i=[],c=n("d225"),s=n("308d"),o=n("6bb5"),u=n("4e2b"),l=n("9ab4"),f=n("60a3"),b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[n("a",{staticClass:"navbar-brand text-white"},[t._v("Your filtered RSS feeds")]),n("button",{staticClass:"btn btn-outline-success ml-auto",attrs:{type:"button"}},[t._v("+")])])}],d=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(f["b"]);d=l["a"]([Object(f["a"])({components:{}})],d);var h=d,v=h,m=n("2877"),g=Object(m["a"])(v,b,p,!1,null,"6ee958a9",null),w=g.exports,O=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(f["b"]);O=l["a"]([Object(f["a"])({components:{Navbar:w}})],O);var j=O,k=j,x=(n("5c0b"),Object(m["a"])(k,a,i,!1,null,null,null)),y=x.exports,_=n("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items&&t.items.length>0?n("div",{attrs:{id:"feeds-list"}},t._l(t.items,function(e){return n("div",{key:e.title,staticClass:"card",on:{click:function(n){return t.openLink(e.link)}}},[n("div",{staticClass:"card-body mr-auto"},[n("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),n("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(e.date))]),n("p",{staticClass:"card-text"},[t._v(t._s(e.feedName))])])])}),0):n("div",{staticClass:"mt-5 text-white"},[n("p",[t._v("You have no feeds configured :(")]),n("button",{staticClass:"btn btn-success"},[t._v("Add new feed")])])},E=[],S=(n("96cf"),n("3b8d")),N=n("b0b4");function P(){return[{name:"HorribleSubs 1080p feed",url:"http://www.horriblesubs.info/rss.php?res=1080"}]}n("1fa8"),n("b3f3"),n("1042"),n("0c04");var R=function t(){Object(c["a"])(this,t)},D=function t(){Object(c["a"])(this,t)};function M(t){var e=[];t.forEach(function(t){t.channel&&t.channel.items&&0!==t.channel.items.length&&t.channel.items.forEach(function(n){var r=!0;if(t.settings.filters&&t.settings.filters.length>0&&(r=!1,t.settings.filters.forEach(function(t){t(n)&&(r=!0)})),r){var a=new D;a.title=n.title,a.link=n.link,a.date=n.pubDate.toLocaleString(),a.feedName=t.settings.name,e.push(a)}})});var n=e.sort(function(t,e){return t.date<e.date?1:-1});return console.log(t),n}function $(t){return L.apply(this,arguments)}function L(){return L=Object(S["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=[],e.forEach(function(){var t=Object(S["a"])(regeneratorRuntime.mark(function t(e){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.url);case 2:if(r=t.sent,r&&200===r.status&&r.body){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,r.text();case 7:a=t.sent,console.log(a),n.push(T(a,e));case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",n);case 3:case"end":return t.stop()}},t)})),L.apply(this,arguments)}function T(t,e){var n={settings:e,channel:{items:[],title:"",link:"",description:""}},r=new DOMParser,a=r.parseFromString(t,"application/xml"),i=a.firstChild.firstChild.childNodes;return i.forEach(function(t){switch(t.nodeName){case"title":n.channel.title=t.textContent;break;case"description":n.channel.description=t.textContent;break;case"link":n.channel.link=t.textContent;break;case"item":n.channel.items.push(J(t));break}}),n}function J(t){var e=new R;return t.childNodes.forEach(function(t){switch(t.nodeName){case"title":e.title=t.textContent;break;case"description":e.description=t.textContent;break;case"link":e.link=t.textContent;break;case"guid":e.guid=t.textContent;break;case"pubDate":e.pubDate=new Date(t.textContent);break}}),e}var Y=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(o["a"])(e).call(this))}return Object(u["a"])(e,t),Object(N["a"])(e,[{key:"mounted",value:function(){var t=Object(S["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$(P());case 2:e=t.sent,this.items=M(e);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"openLink",value:function(t){window.open(t)}}]),e}(f["b"]);Y=l["a"]([Object(f["a"])({components:{}})],Y);var A=Y,F=A,H=(n("29ba"),Object(m["a"])(F,C,E,!1,null,"47ab6ac0",null)),q=H.exports;r["a"].use(_["a"]);var z=new _["a"]({routes:[{path:"/",name:"home",component:q}]});r["a"].config.productionTip=!1,new r["a"]({router:z,render:function(t){return t(y)}}).$mount("#app")}});
//# sourceMappingURL=app.2c4087a3.js.map