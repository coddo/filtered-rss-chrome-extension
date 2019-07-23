(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24060563"],{3566:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"feed-editor"}},[e.error||e.parentError?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[n("p",{staticClass:"text-center my-0"},[e._v(e._s(e.error)+" "+e._s(e.parentError))])]):e._e(),n("div",{staticClass:"mt-3 mx-3 p-3 bg-white",attrs:{id:"feed-details"}},[n("div",{staticClass:"d-flex mb-2"},[n("h3",{staticClass:"pt-1"},[e._v("Details")]),e.isLoading?n("img",{staticClass:"ml-1",attrs:{id:"loading-spinner",src:r("325a"),alt:"plop-plop"}}):e._e(),e.showDeleteButton?n("button",{staticClass:"btn btn-danger ml-auto",on:{click:function(t){return e.deleteFeed()}}},[e._v("Delete")]):e._e(),n("button",{staticClass:"btn btn-secondary",class:e.showDeleteButton?"ml-1":"ml-auto",on:{click:function(t){return e.cancel()}}},[e._v("Cancel")]),n("button",{staticClass:"btn btn-success ml-1",on:{click:function(t){return e.saveFeed()}}},[e._v("Save")])]),n("div",{staticClass:"input-group mb-3"},[e._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:e.feed.name,expression:"feed.name"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Feed display name","aria-describedby":"feed-name"},domProps:{value:e.feed.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveFeed()},input:function(t){t.target.composing||e.$set(e.feed,"name",t.target.value)}}})]),n("div",{staticClass:"input-group"},[e._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.feed.url,expression:"feed.url"}],staticClass:"form-control",attrs:{type:"text","aria-label":"Feed URL","aria-describedby":"feed-url"},domProps:{value:e.feed.url},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveFeed()},input:function(t){t.target.composing||e.$set(e.feed,"url",t.target.value)}}})])]),n("div",{staticClass:"mt-3 mx-3 p-3 bg-white",attrs:{id:"feed-filters"}},[n("div",{staticClass:"d-flex"},[n("h3",{staticClass:"pt-1"},[e._v("Filters")]),e.feed.filters&&0!==e.feed.filters.length?e._e():n("button",{staticClass:"btn btn-success ml-auto mb-2",attrs:{id:"btn-add-filter",title:"Add new filter"},on:{click:function(t){return e.addFilter()}}},[e._v("Add filters")])]),e._l(e.feed.filters,function(t,r){return n("div",{key:r,staticClass:"mb-3"},[n("div",{staticClass:"input-group"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.feed.filters[r].target,expression:"feed.filters[filterIndex].target"}],staticClass:"custom-select",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.feed.filters[r],"target",t.target.multiple?n:n[0])}}},e._l(e.filterTargets,function(t){return n("option",{key:r+"-"+t,domProps:{value:t}},[e._v(e._s(t))])}),0),n("select",{directives:[{name:"model",rawName:"v-model",value:e.feed.filters[r].action,expression:"feed.filters[filterIndex].action"}],staticClass:"custom-select",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.feed.filters[r],"action",t.target.multiple?n:n[0])}}},e._l(e.filterActions,function(t){return n("option",{key:r+"-"+t,domProps:{value:t}},[e._v(e._s(t))])}),0)]),n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.feed.filters[r].value,expression:"feed.filters[filterIndex].value"}],staticClass:"form-control mr-1",attrs:{type:"text"},domProps:{value:e.feed.filters[r].value},on:{input:function(t){t.target.composing||e.$set(e.feed.filters[r],"value",t.target.value)}}}),n("button",{staticClass:"btn btn-danger mr-1",attrs:{title:"Delete this filter"},on:{click:function(t){return e.removeFilter(r)}}},[e._v("-")]),n("button",{staticClass:"btn btn-success",attrs:{title:"Add new filter"},on:{click:function(t){return e.addFilter()}}},[e._v("+")])])])})],2)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-group-prepend"},[r("span",{staticClass:"input-group-text",attrs:{id:"feed-name"}},[e._v("Name")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-group-prepend"},[r("span",{staticClass:"input-group-text",attrs:{id:"feed-url"}},[e._v("URL")])])}],i=(r("7f7f"),r("96cf"),r("3b8d")),s=r("d225"),o=r("b0b4"),l=r("308d"),u=r("6bb5"),c=r("4e2b"),d=r("9ab4"),f=r("60a3"),p=r("396a"),v=r("dcd0"),m=r("5de6"),b=r("50aa"),h=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(l["a"])(this,Object(u["a"])(t).call(this)),e.EVENT_SAVE="save",e.clearErrorTimeoutHandle=0,e.isLoading=!1,e.error=null,e}return Object(c["a"])(t,e),Object(o["a"])(t,[{key:"errorMessageChanged",value:function(e,t){var r=this;this.clearErrorTimeoutHandle>0&&(clearTimeout(this.clearErrorTimeoutHandle),this.clearErrorTimeoutHandle=0),e&&(this.clearErrorTimeoutHandle=setTimeout(function(){r.error=null},5e3))}},{key:"addFilter",value:function(){this.feed.filters.push(new p["c"])}},{key:"removeFilter",value:function(e){this.feed.filters.splice(e,1)}},{key:"saveFeed",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.isLoading=!0,e.next=4,this.isDataValidAsync();case 4:if(e.sent){e.next=6;break}return e.abrupt("return");case 6:this.$emit(this.EVENT_SAVE);case 7:return e.prev=7,this.isLoading=!1,e.finish(7);case 10:case"end":return e.stop()}},e,this,[[0,,7,10]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"deleteFeed",value:function(){this.error=b["a"].delete(this.feed.id),this.error||this.$router.push("/feeds")}},{key:"cancel",value:function(){}},{key:"isDataValidAsync",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.feed.name){e.next=3;break}return this.error="You haven't specified the feed name",e.abrupt("return",!1);case 3:if(this.feed.url){e.next=6;break}return this.error="You haven't specified the feed URL",e.abrupt("return",!1);case 6:t=0;case 7:if(!(t<this.feed.filters.length)){e.next=21;break}if(r=this.feed.filters[t],r.action!==v["b"].Unknown){e.next=12;break}return this.error="You haven't specified the target field for filter ".concat(t+1),e.abrupt("return",!1);case 12:if(r.target!==v["a"].Unknown){e.next=15;break}return this.error="You haven't specified the validation action for filter ".concat(t+1),e.abrupt("return",!1);case 15:if(r.value){e.next=18;break}return this.error="You haven't specified the validation value for filter ".concat(t+1),e.abrupt("return",!1);case 18:t++,e.next=7;break;case 21:return e.next=23,Object(m["a"])(this.feed);case 23:if(n=e.sent,null!==n){e.next=27;break}return this.error="This feed seems to be invalid or inexistent",e.abrupt("return",!1);case 27:return e.abrupt("return",!0);case 28:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"filterTargets",get:function(){return v["b"].list.filter(function(e){return e!==v["b"].Unknown})}},{key:"filterActions",get:function(){return v["a"].list.filter(function(e){return e!==v["a"].Unknown})}}]),t}(f["d"]);d["a"]([Object(f["c"])(String)],h.prototype,"parentError",void 0),d["a"]([Object(f["c"])(p["d"])],h.prototype,"feed",void 0),d["a"]([Object(f["c"])(Boolean)],h.prototype,"showDeleteButton",void 0),d["a"]([Object(f["e"])("error")],h.prototype,"errorMessageChanged",null),d["a"]([Object(f["b"])("cancel")],h.prototype,"cancel",null),h=d["a"]([Object(f["a"])({components:{}})],h);var g=h,k=g,y=(r("5c84"),r("2877")),_=Object(y["a"])(k,n,a,!1,null,"0cbfb06d",null);t["a"]=_.exports},"5c84":function(e,t,r){"use strict";var n=r("645e"),a=r.n(n);a.a},"645e":function(e,t,r){},"6de0":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("feed-details",{attrs:{feed:e.feed,"parent-error":e.error,"show-delete-button":""},on:{save:function(t){return e.editFeed()},cancel:function(t){return e.cancelEdit()}}})],1)},a=[],i=r("d225"),s=r("b0b4"),o=r("308d"),l=r("6bb5"),u=r("4e2b"),c=r("9ab4"),d=r("60a3"),f=r("3566"),p=r("50aa"),v=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(o["a"])(this,Object(l["a"])(t).call(this)),e.errorMessageTimeoutHandle=0,e.error=null,e.feed=p["a"].get(e.feedId),e}return Object(u["a"])(t,e),Object(s["a"])(t,[{key:"mounted",value:function(){this.feed||this.$router.push("/feeds")}},{key:"editFeed",value:function(){var e=this;this.feed?this.error=p["a"].update(this.feed):this.error="An unknown error has occured",this.error?this.errorMessageTimeoutHandle=setTimeout(function(){e.error=null,clearTimeout(e.errorMessageTimeoutHandle),e.errorMessageTimeoutHandle=0},5e3):this.$router.push("/feeds")}},{key:"cancelEdit",value:function(){this.$router.push("/feeds")}}]),t}(d["d"]);c["a"]([Object(d["c"])(String)],v.prototype,"feedId",void 0),v=c["a"]([Object(d["a"])({components:{FeedDetails:f["a"]}})],v);var m=v,b=m,h=r("2877"),g=Object(h["a"])(b,n,a,!1,null,"39bf407a",null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-24060563.7cb40802.js.map