(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],f=0,l=[];f<o.length;f++)r=o[f],i[r]&&l.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(l.length)l.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0cf361":"d55c2999","chunk-44c7a29c":"dc2c2ec7","chunk-f4fb1d6a":"60a9a17f","chunk-2d0db0cf":"eb4000cd","chunk-2d0e5beb":"60f79340"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-44c7a29c":1,"chunk-f4fb1d6a":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d0cf361":"31d6cfe0","chunk-44c7a29c":"79055901","chunk-f4fb1d6a":"be920e2b","chunk-2d0db0cf":"31d6cfe0","chunk-2d0e5beb":"31d6cfe0"}[t]+".css",i=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===a||f===i))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],f=u.getAttribute("data-href");if(f===a||f===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],d.parentNode.removeChild(d),n(s)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){r[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=s);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=o(t),u=function(e){f.onerror=f.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");s.type=a,s.request=r,n[1](s)}i[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=f;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"01ee":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n("d225"),r=n("b0b4"),i=n("2b0e"),s=function(){function t(e,n){var r=this;Object(a["a"])(this,t),this.onStoredDataChanged=function(t){r.storageKey===t.key&&r.refreshStore()},this.storageKey=e,this.store=i["a"].observable({data:n})}return Object(r["a"])(t,[{key:"initialize",value:function(){window.addEventListener("storage",this.onStoredDataChanged),this.refreshStore()}},{key:"dispose",value:function(){window.removeEventListener("storage",this.onStoredDataChanged)}},{key:"data",get:function(){return this.store.data},set:function(t){t&&(localStorage.setItem(this.storageKey,JSON.stringify(t)),this.store.data=t)}},{key:"rawData",set:function(t){localStorage.setItem(this.storageKey,JSON.stringify(t)),this.refreshStore()}}]),t}()},"0685":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABBVBMVEVHcEz/ySj/yij/yyn/yij/yij/yij//wD/yij/qgD/yij/yij/yyb/zzD/zCn/yin/yij/yij/yij/ySf/yin/yij/ySn/ySn/ySj/yij/yij/yyj/wy3/yiv/yij/yij/yif/yyn/2yT/yij/yij/yij/yyj/vyD/ySj/yij/zif/yCT/yyj/ySn/yij/v0D/zCL/yif/ySn/yib/yij/yihtTEG3bAmddjnquCt1Uz90UkB3VT92VD+edjjwvSu3p6GcdTnvvCv49vXfoBq6cAv4wSV4VT/ptyz49/b39fW2pqC9rKL////JgxHIghHorB7nqx65bwq6cQv5wiXXlhfWlRaZycXoAAAANXRSTlMAq+iE+ff+ApED7VI2EBmQ0uGsNIOudlHgsXjuERj404+qB/bm69EIjnkaDpJQ6QQP4nc1rUHqVS8AAAGRSURBVEjH3VZXe4JAEBRBxYpdoyZRk6jpdQG7RjRdoyn//6ckms/zkL0D8+i88M0yAxzszeJybSN8oVw8mpekfFTIhXy28oh4DRRiYoQrL8geWINHDrP1wQtA4A4y5H4ZGFD8mL6aAiZSVeT6AnCwc2kxyMBF0bJevh68GbP+6tDGAO6CyXAGtpBp/e6BvcFzQhlEcACR6reYE0N21YkhcIQEMRyT2r3ebPbrOIM0McSJ4vWpp6qtLsYASsSwvyzpg7dnVVU7GAOIEkNgWWr2Bi+/kjbGAI6IQVqWGuoCbYwB7FkN/T+JjjHaQB7p8WGuaNUxRj8SWTR0O42GXscZtei4sw9XQj4cF+n/t8bGzWdp7+lkOBy/rxWT7A30rS3wxd5A5syYajNjNDJmmukeimlPn9IhMNGM+cHQxnQIrEVs0Ls6N9RG88On9kHFzPl6MCn8V1TbNCqROC5zwviujMZ90cuIyZqfMSEybjQkM+wRFEZGlhLmD8Wkqa+yyYj92L29ESoBSQpUhHTCt5V/Fj/X6AL16QqZLQAAAABJRU5ErkJggg=="},"0b1e":function(t,e,n){},"122f":function(t,e,n){},"1c39":function(t,e,n){},"325a":function(t,e,n){t.exports=n.p+"img/loading.dec1ec90.gif"},"396a":function(t,e,n){"use strict";var a=n("b0b4"),r=n("d225"),i=n("dcd0");n("6b54"),n("a481");function s(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})}n.d(e,"b",function(){return o}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return u}),n.d(e,"a",function(){return f});var o=function t(){Object(r["a"])(this,t)},c=function t(){Object(r["a"])(this,t),this.target=i["b"].Unknown,this.action=i["a"].Unknown,this.value=""},u=function(){function t(){Object(r["a"])(this,t),this.filters=[],this.id=s()}return Object(a["a"])(t,[{key:"linkHost",get:function(){return new URL(this.url).host}}]),t}(),f=function t(){Object(r["a"])(this,t),this.isNew=!1,this.isNotified=!1,this.id=s()}},5078:function(t,e,n){t.exports=n.p+"img/lemons.ae41a173.png"},"50aa":function(t,e,n){"use strict";n.d(e,"a",function(){return l});n("ac6a"),n("20d6"),n("7f7f"),n("7514");var a=n("d225"),r=n("b0b4"),i=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("396a"),u=n("01ee"),f=function(t){function e(){return Object(a["a"])(this,e),Object(i["a"])(this,Object(s["a"])(e).call(this,"configured-feeds",new Array))}return Object(o["a"])(e,t),Object(r["a"])(e,[{key:"get",value:function(t){var e=this.data.find(function(e){return e.id===t});return e||null}},{key:"add",value:function(t){if(!t)return"No feed details provider to add to the database";var e=this.data;return e.find(function(e){return e.name===t.name})?"You already have a feed with this name":e.find(function(e){return e.url===t.url})?"You already have a feed with this url":(e.push(t),this.data=e,null)}},{key:"update",value:function(t){if(!t)return"No feed details provider to updated";var e=this.data,n=e.findIndex(function(e){return e.id===t.id});return n<0?"This feed is not yet persisted, so it cannot be updated":(e.splice(n,1),e.push(t),this.data=e,null)}},{key:"delete",value:function(t){var e=this.data,n=e.findIndex(function(e){return e.id===t});return n<0?"This feed is not yet persisted, so it cannot be deleted":(e.splice(n,1),this.data=e,null)}},{key:"refreshStore",value:function(){var t=this,e=localStorage.getItem(this.storageKey);e?(this.store.data=[],JSON.parse(e).forEach(function(e){var n=new c["d"];n.id=e.id,n.name=e.name,n.url=e.url,n.filters=[],e.filters.forEach(function(t){var e=new c["c"];e.target=t.target,e.action=t.action,e.value=t.value,n.filters.push(e)}),t.store.data.push(n)})):this.store.data=[]}}]),e}(u["a"]),l=new f},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5de6":function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return c});n("ac4d"),n("8a81"),n("96cf"),n("ac6a");var a=n("3b8d"),r=n("396a"),i="https://vzir4xjww6.execute-api.eu-west-1.amazonaws.com/live/Fi-RSS-Reverse-Proxy";function s(t){return o.apply(this,arguments)}function o(){return o=Object(a["a"])(regeneratorRuntime.mark(function t(e){var n,a,r,i,s,o,u,f;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=[],a=!0,r=!1,i=void 0,t.prev=4,s=e[Symbol.iterator]();case 6:if(a=(o=s.next()).done){t.next=15;break}return u=o.value,t.next=10,c(u);case 10:f=t.sent,null!==f&&n.push(f);case 12:a=!0,t.next=6;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t["catch"](4),r=!0,i=t.t0;case 21:t.prev=21,t.prev=22,a||null==s.return||s.return();case 24:if(t.prev=24,!r){t.next=27;break}throw i;case 27:return t.finish(24);case 28:return t.finish(21);case 29:return t.abrupt("return",n);case 30:case"end":return t.stop()}},t,null,[[4,17,21,29],[22,,24,28]])})),o.apply(this,arguments)}function c(t){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i,"?feed=").concat(e.url));case 2:if(n=t.sent,n&&200===n.status&&n.body){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,n.text();case 7:return a=t.sent,t.abrupt("return",f(a,e));case 9:case"end":return t.stop()}},t)})),u.apply(this,arguments)}function f(t,e){var n={channel:{description:"",items:[],link:"",title:""},settings:e},a=new DOMParser,r=a.parseFromString(t,"application/xml"),i=r.getElementsByTagName("channel");return i&&1===i.length?(i[0].childNodes.forEach(function(t){switch(t.nodeName){case"title":n.channel.title=t.textContent;break;case"description":n.channel.description=t.textContent;break;case"link":n.channel.link=t.textContent;break;case"item":n.channel.items.push(l(t));break}}),n):n}function l(t){var e=new r["b"];return t.childNodes.forEach(function(t){switch(t.nodeName){case"title":e.title=t.textContent;break;case"description":e.description=t.textContent;break;case"link":e.link=t.textContent;break;case"guid":e.guid=t.textContent;break;case"pubDate":e.pubDate=new Date(t.textContent);break}}),e}},"5e27":function(t,e,n){},6273:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAANlBMVEUAAAAAAAAzerczercAAAAAAAAAAAAzerczerczerczerczercAAAAzerczercAAAAAAAAzercEJMoCAAAAEXRSTlMAZ93cZU9NpaS5u+xO/ttjTLSnCQcAAAAJcEhZcwAAAEgAAABIAEbJaz4AAACESURBVFjD7de9DoAgDATgU1DwF/v+L6ujaWCodTDxbm6/CS4p0EjXyy0hwphBVEYjkDSQjcCkgYkAAQIE/gAMaa5k0cBSm0rr1f/iSkTvAwI2H7DBty9CgMA7gPspOz/TjugDCjDm54WSj090IgECBAh8HcgasJ6+qwYOI4AY7ut7ac2dWpV845qk9vMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDctMjRUMDg6MDA6MjctMDU6MDCiJ7O1AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA3LTI0VDA4OjAwOjI3LTA1OjAw03oLCQAAAABJRU5ErkJggg=="},"70d4":function(t,e,n){"use strict";n.d(e,"a",function(){return f});var a=n("d225"),r=n("b0b4"),i=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("01ee"),u=function(t){function e(){return Object(a["a"])(this,e),Object(i["a"])(this,Object(s["a"])(e).call(this,"user-settings",{}))}return Object(o["a"])(e,t),Object(r["a"])(e,[{key:"refreshStore",value:function(){var t=localStorage.getItem(this.storageKey),e=t?JSON.parse(t):new l;this.store.data.notificationPopup=e.notificationPopup,this.store.data.notificationSound=e.notificationSound,this.store.data.refreshIntervalMinutes=e.refreshIntervalMinutes}}]),e}(c["a"]),f=new u,l=function t(){Object(a["a"])(this,t),this.notificationPopup=!0,this.notificationSound=!0,this.refreshIntervalMinutes=5}},7563:function(t,e,n){"use strict";n("b54a"),n("7514"),n("ac4d"),n("8a81"),n("ac6a"),n("96cf");var a=n("3b8d"),r=n("d225"),i=n("b0b4"),s=n("78fa"),o=n("5de6"),c=n("50aa"),u=(n("55dd"),n("7f7f"),n("396a")),f=n("dcd0");function l(t){var e=[];return t.forEach(function(t){t.channel&&t.channel.items&&0!==t.channel.items.length&&t.channel.items.forEach(function(n){var a=!0;if(t.settings.filters&&t.settings.filters.length>0){a=!1;var r=!0,i=!1,s=void 0;try{for(var o,c=t.settings.filters[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var f=o.value;if(d(n,f)){a=!0;break}}}catch(h){i=!0,s=h}finally{try{r||null==c.return||c.return()}finally{if(i)throw s}}}if(a){var l=new u["a"];l.title=n.title,l.link=n.link,l.date=n.pubDate.toLocaleString(),l.feedName=t.settings.name,e.push(l)}})}),e.sort(function(t,e){return Date.parse(t.date)<Date.parse(e.date)?1:-1})}function d(t,e){var n=Object(f["d"])(e.target,t),a=Object(f["c"])(e.action);return a(n,e.value)}var h=n("aa8f"),b=n("2b0e");n.d(e,"a",function(){return g});var p=function(){function t(){var e=this;Object(r["a"])(this,t),this.serviceState=b["a"].observable({isDataLoading:!1}),this.notificationClickedCallback=function(t){t.preventDefault();var n=s["a"].get(t.target.tag);n&&e.openItem(n)}}return Object(i["a"])(t,[{key:"refreshDashboardCache",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,n,a,r,i,o,c,u,f;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.serviceState.isDataLoading=!0,e=s["a"].data,t.next=5,this.getLiveDataAsync();case 5:for(n=t.sent,e||(e=[]),n||(n=[]),a=!0,r=!1,i=void 0,t.prev=11,o=function(){var t=u.value,n=e.find(function(e){return e.title===t.title});n?(t.id=n.id,t.isNew=n.isNew,t.isNotified=n.isNotified):t.isNew=!0},c=n[Symbol.iterator]();!(a=(u=c.next()).done);a=!0)o();t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](11),r=!0,i=t.t0;case 20:t.prev=20,t.prev=21,a||null==c.return||c.return();case 23:if(t.prev=23,!r){t.next=26;break}throw i;case 26:return t.finish(23);case 27:return t.finish(20);case 28:return s["a"].data=n,f=h["a"].notifyNewItems(n,this.notificationClickedCallback),f.length>0&&s["a"].markAsNotified(f.map(function(t){return t.id})),t.abrupt("return",n);case 32:return t.prev=32,this.serviceState.isDataLoading=!1,t.finish(32);case 35:case"end":return t.stop()}},t,this,[[0,,32,35],[11,16,20,28],[21,,23,27]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"openItem",value:function(t){s["a"].markAsNotNew(t.id);try{chrome.tabs.create({url:t.link,active:!1})}catch(e){window.open(t.link,"_blank")}}},{key:"getLiveDataAsync",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["b"])(c["a"].data);case 2:return e=t.sent,t.abrupt("return",l(e));case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"isDataLoading",get:function(){return this.serviceState.isDataLoading}}]),t}(),g=new p},"78fa":function(t,e,n){"use strict";n.d(e,"a",function(){return l});n("b54a"),n("ac4d"),n("8a81"),n("ac6a"),n("7514");var a=n("d225"),r=n("b0b4"),i=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("396a"),u=n("01ee"),f=function(t){function e(){return Object(a["a"])(this,e),Object(i["a"])(this,Object(s["a"])(e).call(this,"dashboard-items",new Array))}return Object(o["a"])(e,t),Object(r["a"])(e,[{key:"get",value:function(t){return this.data.find(function(e){return e.id===t})}},{key:"markAsNotNew",value:function(t){var e=this.data,n=!0,a=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var o=i.value;if(o.id===t){o.isNew=!1,o.isNotified=!0;break}}}catch(c){a=!0,r=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}this.data=e}},{key:"markAsNotified",value:function(t){var e=this.data,n=!0,a=!1,r=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var o=i.value,c=!0,u=!1,f=void 0;try{for(var l,d=e[Symbol.iterator]();!(c=(l=d.next()).done);c=!0){var h=l.value;if(h.id===o){h.isNotified=!0;break}}}catch(b){u=!0,f=b}finally{try{c||null==d.return||d.return()}finally{if(u)throw f}}}}catch(b){a=!0,r=b}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}this.data=e}},{key:"refreshStore",value:function(){var t=this,e=localStorage.getItem(this.storageKey);e?(this.store.data=[],JSON.parse(e).forEach(function(e){var n=new c["a"];n.id=e.id,n.title=e.title,n.link=e.link,n.date=e.date,n.feedName=e.feedName,n.isNew=e.isNew,n.isNotified=e.isNotified,t.store.data.push(n)})):this.store.data=[]}},{key:"newItems",get:function(){return this.data.filter(function(t){return t.isNew})}}]),e}(u["a"]),l=new f},"7f51":function(t,e,n){},"824a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-5 text-white text-center"},[t._m(0),n("button",{staticClass:"btn btn-success mr-2",on:{click:function(e){return t.goToAddFeedPage()}}},[t._v("Add new feed")])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid mb-2"},[a("p",{staticClass:"d-inline mr-2"},[t._v("You have no feeds configured")]),a("img",{attrs:{id:"img-sad-face",src:n("0685"),alt:"sad-face"}})])}],i=n("d225"),s=n("b0b4"),o=n("308d"),c=n("6bb5"),u=n("4e2b"),f=n("9ab4"),l=n("60a3"),d=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"goToAddFeedPage",value:function(){this.$router.push("/feeds/add")}}]),e}(l["d"]);d=f["a"]([Object(l["a"])({components:{}})],d);var h=d,b=h,p=(n("f82d"),n("2877")),g=Object(p["a"])(b,a,r,!1,null,"180b16b8",null);e["a"]=g.exports},"86a6":function(t,e,n){"use strict";var a=n("1c39"),r=n.n(a);r.a},"8eca":function(t,e,n){"use strict";var a=n("0b1e"),r=n.n(a);r.a},"9bae":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABTVBMVEVHcEz/mAD/mAD/mAD/mAD/lwD/mAD/mAD/mAD/mAD/mAD/mAD/mAD/mAD/mAD/lwD/////mAD///7/6cn/mgb/mQP/tUf/4rj/683/1Zb/oBT/6Mf/+vL/nhD/nAr/6cj/+/b/pB3/tUj/9+r/8Nv/+O7/zID/nQz//v3/tEb//Pj/8Nr//fn/nxH/nAv/7M//05L/+/X/u1b/tkr/ohr/1JX//Pf/qi3/vl7/5sD/47r/9+v/t0z/mwf/yn3/3Kj/xnH/2aL/qy7/vl//mAH/t03/y37/oRb/7tT/1JT/xGz/687/rTX/wWb/1Zf/qy//5b//+vP/4rb/oRf/xG3/wmf/pSD/1Zj//fr/+/T/qSr/pyT/pB7/8+L/tUn/7tb/2J//6sr/uVH/05P/58T/qSv/pyX/pR//uFD/9OP/ohn/ynv/xXD/4LP/79ddPWvrAAAAEHRSTlMAjU9UUlHB9L/zkMOK8cLA+nDKMQAAAY9JREFUSMftlUdzwjAQhSGhplpgIAm9BwIJkN577733Xv//MdpVYMaeyGvuvNMbzX6WtG/HslgaqkPNHU4mldNh09e3MEJW3fcZKbsGaKWBTg3gpAG3BsAl5SydmlhfvJIQ/wB/+pk5qQ9QlN7vrfoARfHMH9IAU4sXbyt7eYGkKzQgFN7uEki3ag7gSgwgEciaBZjvKwZEMGsWYGy3D/dQTQOsx4v3MGzreerpdDlSLcgiUSFzGNkZqu4Bp0qv0sGVMz5RMgo3vzOTdCAsauYg8wX5pfsvb0rXSKwJwgd5zBp3Sd1IAnEgTjUIk/hKtDWOk5FBv7TJ7SeVQwSI8gf6Y25vyeDicKphtMUCt3EZkPDuR/1gjnhVTCQ4zu2YBEh4oItAqO/cTeFihruSBMBRUKJgH2tj9ACxSIAQAqFqO+9x8Zm7lOEOQbAv3CTFQHE3KQH8eIccZs5dARenucvLuuSPhoI5VpsrndMAbvpX2a4BHDTg0gA2GmjSPhBWqr5N/wTZXUZPlqup8ajXo18hlGflrG8igwAAAABJRU5ErkJggg=="},"9c1e":function(t,e,n){"use strict";var a=n("ac98"),r=n.n(a);r.a},aa8f:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n("d225"),r=n("b0b4"),i=n("70d4"),s=function(){function t(){Object(a["a"])(this,t)}return Object(r["a"])(t,null,[{key:"notifyNewItems",value:function(e,n){if("granted"!==Notification.permission)return[];var a=i["a"].data;if(!a.notificationPopup)return[];var r=e.filter(function(t){return t.isNew&&!t.isNotified});return t.createNotifications(r,a,n),r}},{key:"requestPermission",value:function(){"default"===Notification.permission&&Notification.requestPermission()}},{key:"createNotifications",value:function(e,n,a){if(1!==e.length)e.length>1&&t.createNotification("no_id","New updates in your feeds","Multiple feeds",Date.now(),n.notificationSound,!1,a);else{var r=e[0];t.createNotification(r.id,r.title,r.feedName,new Date(r.date).getTime(),n.notificationSound,!0,a)}}},{key:"createNotification",value:function(t,e,n,a,r,i,s){var o={body:n,renotify:!0,silent:!r,tag:t,timestamp:a};try{o.icon=chrome.extension.getURL("favicon.png")}catch(u){}var c=new Notification(e,o);i&&(c.onclick=s)}}]),t}()},ac98:function(t,e,n){},ae1b:function(t,e,n){},bd8e:function(t,e,n){"use strict";var a=n("7f51"),r=n.n(a);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-secondary",attrs:{id:"app"}},[n("navbar"),t.displayToolbar?n("toolbar"):t._e(),n("div",{attrs:{id:"main-content"}},[n("router-view")],1)],1)},i=[],s=(n("7f7f"),n("d225")),o=n("b0b4"),c=n("308d"),u=n("6bb5"),f=n("4e2b"),l=n("9ab4"),d=n("60a3"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand text-white",attrs:{to:"/"}},[t._v("Fi.RSS")]),a("div",{staticClass:"ml-auto"},[a("router-link",{attrs:{to:"/settings"}},[a("img",{staticClass:"mr-2",attrs:{src:n("d5c0"),alt:"settings",title:"Manage settings"}})]),a("router-link",{attrs:{to:"/feeds"}},[a("img",{staticClass:"mr-2",attrs:{src:n("9bae"),alt:"manage rss",title:"Manage RSS feeds"}})]),a("router-link",{attrs:{to:"/feeds/add"}},[a("img",{staticClass:"p-1",attrs:{src:n("6273"),alt:"add rss",title:"Add RSS feed"}})])],1)],1)},b=[],p=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),e}(d["d"]);p=l["a"]([Object(d["a"])({components:{}})],p);var g=p,v=g,A=(n("86a6"),n("2877")),m=Object(A["a"])(v,h,b,!1,null,"26d2206c",null),y=m.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex p-1",attrs:{id:"toolbar"}},[n("button",{staticClass:"btn btn-outline-success",attrs:{id:"btn-refresh",title:"Refresh data from live sources"},on:{click:function(e){return t.refresh()}}},[t._v("Refresh")]),t.newCount>0?n("button",{staticClass:"btn btn-outline-success ml-2",attrs:{id:"btn-open-all",title:"Open all the new items"},on:{click:function(e){return t.openAllNewItems()}}},[t._v("Open all new")]):t._e(),n("button",{staticClass:"btn btn-outline-success ml-auto",attrs:{id:"btn-new-count",title:"Mark all as seen"},on:{click:function(e){return t.clearNotifications()}}},[t._v(t._s(t.newCount))])])},k=[],j=(n("ac4d"),n("8a81"),n("ac6a"),n("96cf"),n("3b8d")),x=n("7563"),O=n("78fa"),N=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),Object(o["a"])(e,[{key:"refresh",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x["a"].refreshDashboardCache();case 2:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"openAllNewItems",value:function(){var t=!0,e=!1,n=void 0;try{for(var a,r=O["a"].newItems[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){var i=a.value;x["a"].openItem(i)}}catch(s){e=!0,n=s}finally{try{t||null==r.return||r.return()}finally{if(e)throw n}}}},{key:"clearNotifications",value:function(){var t=!0,e=!1,n=void 0;try{for(var a,r=O["a"].newItems[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){var i=a.value;O["a"].markAsNotNew(i.id)}}catch(s){e=!0,n=s}finally{try{t||null==r.return||r.return()}finally{if(e)throw n}}}},{key:"newCount",get:function(){return O["a"].newItems.length}}]),e}(d["d"]);N=l["a"]([Object(d["a"])({components:{}})],N);var C=N,S=C,D=(n("9c1e"),Object(A["a"])(S,w,k,!1,null,"08cd6ef4",null)),E=D.exports,I=n("70d4"),Y=function(){function t(){Object(s["a"])(this,t),this.timerHandle=0}return Object(o["a"])(t,[{key:"restart",value:function(){0!==this.timerHandle&&this.stop();var t=I["a"].data;this.timerHandle=setTimeout(this.timerHandler.bind(this),6e4*t.refreshIntervalMinutes)}},{key:"stop",value:function(){clearTimeout(this.timerHandle),this.timerHandle=0}},{key:"timerHandler",value:function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x["a"].refreshDashboardCache();case 3:return t.prev=3,this.restart(),t.finish(3);case 6:case"end":return t.stop()}},t,this,[[0,,3,6]])}));function e(){return t.apply(this,arguments)}return e}()}]),t}(),R=new Y,W=n("aa8f"),M=n("50aa");function L(){I["a"].initialize(),M["a"].initialize(),O["a"].initialize()}function T(){O["a"].dispose(),M["a"].dispose(),I["a"].dispose()}var B=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){L(),R.restart()}},{key:"mounted",value:function(){W["a"].requestPermission()}},{key:"beforeDestroy",value:function(){R.stop(),T()}},{key:"displayToolbar",get:function(){return"Dashboard"===this.$route.name}}]),e}(d["d"]);B=l["a"]([Object(d["a"])({components:{Navbar:y,Toolbar:E}})],B);var G=B,P=G,z=(n("5c0b"),Object(A["a"])(P,r,i,!1,null,null,null)),V=z.exports,U=n("8c4f"),J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoading?n("loading-dashboard-placeholder"):t.items&&t.items.length>0?n("div",{attrs:{id:"feeds-list"}},t._l(t.items,function(e){return n("div",{key:e.feedName+e.title,staticClass:"card"},[n("div",{staticClass:"card-body mr-auto d-inline-flex p-0"},[e.isNew?n("div",{staticClass:"notification-sidebar bg-success",attrs:{title:"Mark as seen"},on:{click:function(n){return t.markItemAsNotNew(e.id)}}}):n("div",{staticClass:"notification-sidebar",attrs:{title:e.link},on:{click:function(n){return t.openItem(e)}}}),n("div",{staticClass:"p-3",attrs:{title:e.link},on:{click:function(n){return t.openItem(e)}}},[n("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),n("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(e.date))]),n("div",{staticClass:"d-flex"},[n("img",{staticClass:"feed-icon mr-2",attrs:{src:t.feedFaviconUrl(e.feedName),alt:"test"}}),n("p",{staticClass:"card-text"},[t._v(t._s(e.feedName))])])])])])}),0):t.feeds&&0!==t.feeds.length?n("no-new-items-message"):n("no-feeds-message")},q=[],H=(n("7514"),n("824a")),X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container d-flex h-100 pb-5"},[a("img",{staticClass:"mx-auto row justify-content-center align-self-center",attrs:{id:"img-lemons",src:n("5078"),alt:""}})])}],Q=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),e}(d["d"]);Q=l["a"]([Object(d["a"])({components:{}})],Q);var _=Q,Z=_,K=(n("bd8e"),Object(A["a"])(Z,X,F,!1,null,"291b9c9e",null)),$=K.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container d-flex h-100 pb-5"},[a("img",{staticClass:"mx-auto row justify-content-center align-self-center",attrs:{id:"loading-spinner",src:n("325a"),alt:"plop-plop"}})])}],nt=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),e}(d["d"]);nt=l["a"]([Object(d["a"])({components:{}})],nt);var at=nt,rt=at,it=(n("8eca"),Object(A["a"])(rt,tt,et,!1,null,"5f8eb26b",null)),st=it.exports,ot=function(t){function e(){return Object(s["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),Object(o["a"])(e,[{key:"openItem",value:function(t){x["a"].openItem(t)}},{key:"markItemAsNotNew",value:function(t){O["a"].markAsNotNew(t)}},{key:"feedFaviconUrl",value:function(t){var e=M["a"].data.find(function(e){return e.name===t});return e?"https://www.google.com/s2/favicons?domain_url=".concat(e.linkHost):""}},{key:"isLoading",get:function(){return x["a"].isDataLoading}},{key:"feeds",get:function(){return M["a"].data}},{key:"items",get:function(){return O["a"].data}}]),e}(d["d"]);ot=l["a"]([Object(d["a"])({components:{LoadingDashboardPlaceholder:st,NoFeedsMessage:H["a"],NoNewItemsMessage:$}})],ot);var ct=ot,ut=ct,ft=(n("e26f"),Object(A["a"])(ut,J,q,!1,null,"710d1d5d",null)),lt=ft.exports;a["a"].use(U["a"]);var dt=new U["a"]({routes:[{path:"/",name:"Dashboard",component:lt},{path:"/settings",name:"UserSettings",component:function(){return n.e("chunk-2d0cf361").then(n.bind(null,"636d"))}},{path:"/feeds",name:"ManageFeeds",component:function(){return n.e("chunk-44c7a29c").then(n.bind(null,"7f2a"))}},{path:"/feeds/add",name:"AddFeedView",component:function(){return Promise.all([n.e("chunk-f4fb1d6a"),n.e("chunk-2d0e5beb")]).then(n.bind(null,"9691"))}},{path:"/feeds/edit/:feedId",name:"EditFeedView",component:function(){return Promise.all([n.e("chunk-f4fb1d6a"),n.e("chunk-2d0db0cf")]).then(n.bind(null,"6de0"))},props:!0}]});a["a"].config.productionTip=!1,new a["a"]({router:dt,render:function(t){return t(V)}}).$mount("#app")},d5c0:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAB1FBMVEVHcExgfYsAAP9gfYthfIxjgI5gfotgfYpgfYtGXV1ggI9gfYtEXGRgfYtgfItffYthfYtffIpgfoxgfothfYpgfoxGWmNgfItaeIdmgIxgfYtgfYtGWmRFWWRee4lhfYtffYxgfYtAVWpgfYtgfYtbgJJFWWVgfYtgfYthfYpVVaptbZJgfYtge41ffYphfYpdgItFWWRgfYtgfIpdfIlffotgfItFWmRffYtgfYtegI1ffothfYtgfItffYpggIdegItgfYpJW1tgfYxFWmVgfotgfYpgfYthfYtffYhEWWZgfYthfYyAgIBffotffItgfopgfYxhfYtgfYtje4xVcY5gfophfYphfYtgfYtgfItggIBFWWVee45idolggIpgfYtffYpffYtHXGRffYyAgIBgfotgfYteeYZgfYtgfYtgfYxgfItdfItffYtgfIxhfoxGWWRffYtgfYthfYxhfYpgfYpgfopgfYtffYthfopffIxhgIxjgI5FWmRgfYtdeYdYc4BHXGZFWmVGW2RJYGpVb3tUb3tNZG9GXGdGW2ZdeodQaHReeodMZG9VbntNZXBHXGdJX2pSanZPaHRJX2lQaXRFW2VPZ3NQaXVeeohdeoh/cUojAAAAfnRSTlMA/gHCcSSI3f0LEPpA+KCLziNdgJnJPpoRFOfIsKs2rjP2DNzhDnKy9bEDB7c4Xj8WrtAlKWOcravuJpaRz3YgLj0OaG9Nhe1sKzz8fATDe8eqqewfCVV0N711CD8bDTDmg+s9swLBWhPl6mqiIW5QX3W7wGSB6JCw81dzKhJ71KH2AAACW0lEQVRIx92WZXfbMBSGnSZp4zYpr7wyw1bmjrHb2jEzMzNYjRsHy9s6+rNTI8n3yu7J0beds/vF0Xvfx7akq+to2n8ZuTM5PKYGlIDtxA6fEvARgGwl4CkA+UrAAQC6lYBhAAoz2F4XjLMfT/oBGKtnWu+byU6Hv9ZDAnU9mnZ/OI+g8Nwu0jT/RAMhj2R/VnU67/VVEUe0Hx0NbFwPVkrAc+yZi8atZNJaWp7Dain2X30Aid+/IoaIn4ugB84jIBv0cMJAkQhDZssd2+8P2eryvCHFfAyIIRvogPs7/DTgGQ8ruP8wTDfh8hsmTH0HB7qOC2XB2CQWRPbULvFKx0qOsAeI9dl6S9fLRvggkmL+C1fwGWjekKLcso+JrXyYnnfoU5Z8zN5TcYnfX4h9bLxCUznXnMW3jarfmWFaaJfZeI2mTriq9SJVTWbQhdbI14mm7rqAc1RNMkOj0Pbw7aapVy6gmKprzFAmtCAbWzR10umvbKNqnBlGhFjDxnGaahqU/fur8LK2MvEFXtYP95C9pZTIG9cX1PVgjdg4XhuPzwj/6eaMpbFu13cX2gIWi6bbv5qy0585cKlJrbw77Dk8g0MScx6gqJ0K+WHWL9ERld5qNbx5ox1EzejP1x/CHvmG+sbbFrwPk7ihpGJxyzStlajUZoqljau4me4ko7PtzkZ23edNX6vl46DtJaRhgs6qqM2D7XnlXzStpy5APLWOWup8V9LLftWPgb9/J9PGC4Yy9PFCAMqVvg/dANxQAvIBOKQEoEZ7VgnwAbBbCRiYEh92b+6/+GPxF/+D++gM98JhAAAAAElFTkSuQmCC"},dcd0:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return s}),n.d(e,"d",function(){return o}),n.d(e,"c",function(){return c});n("3b2b"),n("aef6"),n("f559"),n("6762"),n("2fdb"),n("b54a");var a=n("d225"),r=n("b0b4"),i=function(){function t(){Object(a["a"])(this,t)}return Object(r["a"])(t,null,[{key:"list",get:function(){return[t.Unknown,t.Title,t.Link,t.Description,t.Guid,t.PublishDate]}}]),t}();i.Unknown="Unknown",i.Title="Title",i.Link="Link",i.Description="Description",i.Guid="Guid",i.PublishDate="PublishDate";var s=function(){function t(){Object(a["a"])(this,t)}return Object(r["a"])(t,null,[{key:"list",get:function(){return[t.Unknown,t.Equals,t.NotEquals,t.Contains,t.NotContains,t.StartWith,t.NotStartsWith,t.EndsWith,t.NotEndsWith,t.Regex]}}]),t}();function o(t,e){switch(t){case i.Title:return e.title;case i.Link:return e.link;case i.Description:return e.description;case i.Guid:return e.guid;case i.PublishDate:return e.pubDate.toLocaleString();default:return""}}function c(t){switch(t){case s.Equals:return function(t,e){return t.toLowerCase()===e.toLowerCase()};case s.NotEquals:return function(t,e){return t.toLowerCase()!==e.toLowerCase()};case s.Contains:return function(t,e){return t.toLowerCase().includes(e.toLowerCase())};case s.NotContains:return function(t,e){return!t.toLowerCase().includes(e.toLowerCase())};case s.StartWith:return function(t,e){return t.toLowerCase().startsWith(e.toLowerCase())};case s.NotStartsWith:return function(t,e){return!t.toLowerCase().startsWith(e.toLowerCase())};case s.EndsWith:return function(t,e){return t.toLowerCase().endsWith(e.toLowerCase())};case s.NotEndsWith:return function(t,e){return!t.toLowerCase().endsWith(e.toLowerCase())};case s.Regex:return function(t,e){return new RegExp(e).test(t)};default:return function(){return!1}}}s.Unknown="Unknown",s.Equals="Equals",s.NotEquals="NotEquals",s.Contains="Contains",s.NotContains="NotContains",s.StartWith="StartsWith",s.NotStartsWith="NotStartsWith",s.EndsWith="EndsWith",s.NotEndsWith="NotEndsWIth",s.Regex="Regex"},e26f:function(t,e,n){"use strict";var a=n("ae1b"),r=n.n(a);r.a},f82d:function(t,e,n){"use strict";var a=n("122f"),r=n.n(a);r.a}});
//# sourceMappingURL=app.22553e15.js.map