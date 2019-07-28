(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65a4c5d1"],{"0103":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAP1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAADZU0/ZU0/ZU08AAAAAAADZU0/ZU0/ZU0/ZU0/ZU0/ZU0/ZU08AAADZU0/P/iVhAAAAFHRSTlMAARIdHxNsk56gamvg/N/U0/rSaVLpza0AAAAJcEhZcwAAAEgAAABIAEbJaz4AAABiSURBVFjD7dQxAoAgDAPACCJYBUH7/7eKX6AODLk9mdoAREQ0k8X5dZB3PR+2mPZBKUrAcWYdlovgMuR7Q0Wz5FUbbHlVFrDgnwLzKVfbM92QYnrnB0FMg/JtknHSiIhoIi8tFlWsRnZ2DwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNy0yNFQwODowMToyMy0wNTowMLmq/JgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDctMjRUMDg6MDE6MjMtMDU6MDDI90QkAAAAAElFTkSuQmCC"},"270d":function(e,t,r){},5721:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"feed-editor"}},[e.error||e.parentError?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[r("p",{staticClass:"text-center my-0"},[e._v(e._s(e.error)+" "+e._s(e.parentError))])]):e._e(),r("div",{staticClass:"d-flex mt-3 mb-2 px-3 bg-secondary",attrs:{id:"toolbar"}},[e.showDeleteButton?r("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.deleteFeed()}}},[e._v("Delete")]):e._e(),r("button",{staticClass:"btn btn-secondary ml-auto",on:{click:function(t){return e.cancel()}}},[e._v("Cancel")]),r("button",{staticClass:"btn btn-success ml-2",on:{click:function(t){return e.saveFeed()}}},[e._v("Save")])]),r("feed-details",{attrs:{feed:e.feed,"is-loading":e.isLoading},on:{save:function(t){return e.saveFeed()}}}),r("feed-filters",{attrs:{feed:e.feed},on:{save:function(t){return e.saveFeed()}}})],1)},a=[],i=(r("7f7f"),r("96cf"),r("3b8d")),s=r("d225"),c=r("b0b4"),u=r("308d"),o=r("6bb5"),l=r("4e2b"),f=r("9ab4"),d=r("60a3"),A=r("396a"),v=r("dcd0"),p=r("5de6"),b=r("50aa"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mx-3 p-3 bg-white",attrs:{id:"feed-details2"}},[n("div",{staticClass:"d-flex mb-2"},[n("h3",{staticClass:"pt-1"},[e._v("Details")]),e.isLoading?n("img",{staticClass:"ml-1",attrs:{id:"loading-spinner",src:r("325a"),alt:"plop-plop"}}):e._e()]),n("div",{staticClass:"input-group mb-3"},[e._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:e.feed.name,expression:"feed.name"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Feed display name","aria-describedby":"feed-name"},domProps:{value:e.feed.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveFeed()},input:function(t){t.target.composing||e.$set(e.feed,"name",t.target.value)}}})]),n("div",{staticClass:"input-group"},[e._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.feed.url,expression:"feed.url"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Feed URL","aria-describedby":"feed-url"},domProps:{value:e.feed.url},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveFeed()},input:function(t){t.target.composing||e.$set(e.feed,"url",t.target.value)}}})])])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-group-prepend"},[r("span",{staticClass:"input-group-text",attrs:{id:"feed-name"}},[e._v("Name")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-group-prepend"},[r("span",{staticClass:"input-group-text",attrs:{id:"feed-url"}},[e._v("URL")])])}],g=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(u["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.isLoading=!1,e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"saveFeed",value:function(){}}]),t}(d["d"]);f["a"]([Object(d["c"])(A["d"])],g.prototype,"feed",void 0),f["a"]([Object(d["c"])(Boolean)],g.prototype,"isLoading",void 0),f["a"]([Object(d["b"])("save")],g.prototype,"saveFeed",null),g=f["a"]([Object(d["a"])({components:{}})],g);var E=g,y=E,F=(r("88c4"),r("2877")),k=Object(F["a"])(y,m,h,!1,null,"5f77cba4",null),x=k.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-3 mx-3 p-3 bg-white",attrs:{id:"feed-filters"}},[n("div",{staticClass:"d-flex"},[n("h3",{staticClass:"pt-1"},[e._v("Filters")]),e.feed.filters&&0!==e.feed.filters.length?e._e():n("button",{staticClass:"btn btn-success ml-auto mb-2 mt-1",attrs:{id:"btn-add-filter",title:"Add new filter"},on:{click:function(t){return e.addFilter()}}},[e._v("Add filters")])]),e._l(e.feed.filters,function(t,a){return n("div",{key:a,staticClass:"mb-4"},[n("div",{staticClass:"input-group"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.feed.filters[a].target,expression:"feed.filters[filterIndex].target"}],staticClass:"custom-select",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.feed.filters[a],"target",t.target.multiple?r:r[0])}}},e._l(e.filterTargets,function(t){return n("option",{key:a+"-"+t,domProps:{value:t}},[e._v(e._s(t))])}),0),n("select",{directives:[{name:"model",rawName:"v-model",value:e.feed.filters[a].action,expression:"feed.filters[filterIndex].action"}],staticClass:"custom-select",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.feed.filters[a],"action",t.target.multiple?r:r[0])}}},e._l(e.filterActions,function(t){return n("option",{key:a+"-"+t,domProps:{value:t}},[e._v(e._s(e.getFilterActionText(t)))])}),0)]),n("div",{staticClass:"input-group mt-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.feed.filters[a].value,expression:"feed.filters[filterIndex].value"}],staticClass:"form-control mr-1",attrs:{type:"text"},domProps:{value:e.feed.filters[a].value},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveFeed()},input:function(t){t.target.composing||e.$set(e.feed.filters[a],"value",t.target.value)}}}),n("img",{staticClass:"img-btn img-btn-filter mt-1 mr-1",attrs:{src:r("0103"),alt:"remove-filter",title:"Remove this filter"},on:{click:function(t){return e.removeFilter(a)}}}),n("img",{staticClass:"img-btn img-btn-filter mt-1 mr-1",attrs:{src:r("6273"),alt:"add-filter",title:"Add new filter"},on:{click:function(t){return e.addFilter()}}}),n("img",{staticClass:"img-btn img-btn-filter mt-1",attrs:{src:r("9631"),alt:"clone-filter",title:"Clone current filter (without value)"},on:{click:function(t){return e.cloneFilter(e.feed.filters[a])}}})])])})],2)},z=[],w=function(e){function t(){return Object(s["a"])(this,t),Object(u["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"saveFeed",value:function(){}},{key:"getFilterActionText",value:function(e){switch(e){case v["a"].Equals:return"Is exactly";case v["a"].NotEquals:return"Is not exactly";case v["a"].Contains:return"Contains";case v["a"].NotContains:return"Does not contain";case v["a"].StartWith:return"Starts with";case v["a"].NotStartsWith:return"Does not start with";case v["a"].EndsWith:return"Ends with";case v["a"].NotEndsWith:return"Does not end with";case v["a"].Regex:return"Regex";default:return"Unknown"}}},{key:"cloneFilter",value:function(e){this.feed.filters.push({action:e.action,target:e.target})}},{key:"addFilter",value:function(){this.feed.filters.push(new A["c"])}},{key:"removeFilter",value:function(e){this.feed.filters.splice(e,1)}},{key:"filterTargets",get:function(){return v["b"].list.filter(function(e){return e!==v["b"].Unknown})}},{key:"filterActions",get:function(){return v["a"].list.filter(function(e){return e!==v["a"].Unknown})}}]),t}(d["d"]);f["a"]([Object(d["c"])(A["d"])],w.prototype,"feed",void 0),f["a"]([Object(d["b"])("save")],w.prototype,"saveFeed",null),w=f["a"]([Object(d["a"])({components:{}})],w);var D=w,j=D,O=(r("8095"),Object(F["a"])(j,C,z,!1,null,"bcf8648c",null)),R=O.exports,U=r("7563"),B=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(u["a"])(this,Object(o["a"])(t).call(this)),e.EVENT_SAVE="save",e.clearErrorTimeoutHandle=0,e.isLoading=!1,e.error=null,e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"cancel",value:function(){}},{key:"errorMessageChanged",value:function(e,t){var r=this;this.clearErrorTimeoutHandle>0&&(clearTimeout(this.clearErrorTimeoutHandle),this.clearErrorTimeoutHandle=0),e&&(this.clearErrorTimeoutHandle=setTimeout(function(){r.error=null},5e3))}},{key:"saveFeed",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.isLoading=!0,e.next=4,this.isDataValidAsync();case 4:if(e.sent){e.next=6;break}return e.abrupt("return");case 6:this.$emit(this.EVENT_SAVE);case 7:return e.prev=7,e.next=10,U["a"].refreshDashboardCache();case 10:return this.isLoading=!1,e.finish(7);case 12:case"end":return e.stop()}},e,this,[[0,,7,12]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"deleteFeed",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.error=b["a"].delete(this.feed.id),!this.error){e.next=4;break}return e.abrupt("return");case 4:this.$router.push("/feeds");case 5:return e.prev=5,e.next=8,U["a"].refreshDashboardCache();case 8:return e.finish(5);case 9:case"end":return e.stop()}},e,this,[[0,,5,9]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"isDataValidAsync",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.feed.name&&""!==this.feed.name){e.next=3;break}return this.error="You haven't specified the feed name",e.abrupt("return",!1);case 3:if(this.feed.url&&""!==this.feed.url){e.next=6;break}return this.error="You haven't specified the feed URL",e.abrupt("return",!1);case 6:t=0;case 7:if(!(t<this.feed.filters.length)){e.next=21;break}if(r=this.feed.filters[t],r.target&&""!==r.target&&r.target!==v["b"].Unknown){e.next=12;break}return this.error="You haven't specified the target field for filter ".concat(t+1),e.abrupt("return",!1);case 12:if(r.action&&""!==r.action&&r.action!==v["a"].Unknown){e.next=15;break}return this.error="You haven't specified the validation action for filter ".concat(t+1),e.abrupt("return",!1);case 15:if(r.value&&""!==r.value){e.next=18;break}return this.error="You haven't specified the validation value for filter ".concat(t+1),e.abrupt("return",!1);case 18:t++,e.next=7;break;case 21:return e.next=23,Object(p["a"])(this.feed);case 23:if(n=e.sent,null!==n){e.next=27;break}return this.error="This feed seems to be invalid or inexistent",e.abrupt("return",!1);case 27:return e.abrupt("return",!0);case 28:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(d["d"]);f["a"]([Object(d["c"])(String)],B.prototype,"parentError",void 0),f["a"]([Object(d["c"])(A["d"])],B.prototype,"feed",void 0),f["a"]([Object(d["c"])(Boolean)],B.prototype,"showDeleteButton",void 0),f["a"]([Object(d["b"])("cancel")],B.prototype,"cancel",null),f["a"]([Object(d["e"])("error")],B.prototype,"errorMessageChanged",null),B=f["a"]([Object(d["a"])({components:{FeedDetails:x,FeedFilters:R}})],B);var M=B,T=M,H=Object(F["a"])(T,n,a,!1,null,"6ffd2c59",null);t["a"]=H.exports},8095:function(e,t,r){"use strict";var n=r("270d"),a=r.n(n);a.a},"88c4":function(e,t,r){"use strict";var n=r("e332"),a=r.n(n);a.a},9631:function(e,t){e.exports="data:image/png;base64,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"},e332:function(e,t,r){}}]);
//# sourceMappingURL=chunk-65a4c5d1.ec0e5597.js.map