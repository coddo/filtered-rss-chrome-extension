(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0db0cf"],{"6de0":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("feed-editor",{attrs:{feed:e.feed,"parent-error":e.error,"show-delete-button":""},on:{save:function(t){return e.editFeed()},cancel:function(t){return e.cancelEdit()}}})],1)},o=[],a=r("d225"),i=r("b0b4"),u=r("308d"),d=r("6bb5"),s=r("4e2b"),c=r("9ab4"),f=r("60a3"),l=r("5721"),h=r("50aa"),b=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(u["a"])(this,Object(d["a"])(t).call(this)),e.errorMessageTimeoutHandle=0,e.error=null,e.feed=h["a"].get(e.feedId),e}return Object(s["a"])(t,e),Object(i["a"])(t,[{key:"mounted",value:function(){this.feed||this.$router.push("/feeds")}},{key:"editFeed",value:function(){var e=this;this.feed?this.error=h["a"].update(this.feed):this.error="An unknown error has occured",this.error?this.errorMessageTimeoutHandle=setTimeout(function(){e.error=null,clearTimeout(e.errorMessageTimeoutHandle),e.errorMessageTimeoutHandle=0},5e3):this.$router.push("/feeds")}},{key:"cancelEdit",value:function(){this.$router.push("/feeds")}}]),t}(f["d"]);c["a"]([Object(f["c"])(String)],b.prototype,"feedId",void 0),b=c["a"]([Object(f["a"])({components:{FeedEditor:l["a"]}})],b);var p=b,v=p,m=r("2877"),j=Object(m["a"])(v,n,o,!1,null,"7ab17a03",null);t["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2d0db0cf.9cf36ea3.js.map