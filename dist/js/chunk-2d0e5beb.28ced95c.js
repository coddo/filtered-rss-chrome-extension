(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5beb"],{9691:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("feed-editor",{attrs:{feed:e.feed,"parent-error":e.error},on:{save:function(r){return e.addFeed()},cancel:function(r){return e.cancelAdd()}}})],1)},n=[],o=t("d225"),u=t("b0b4"),d=t("308d"),c=t("6bb5"),i=t("4e2b"),s=t("9ab4"),l=t("60a3"),b=t("5721"),f=t("396a"),h=t("50aa"),p=function(e){function r(){var e;return Object(o["a"])(this,r),e=Object(d["a"])(this,Object(c["a"])(r).call(this)),e.errorMessageTimeoutHandle=0,e.error=null,e.feed=new f["d"],e}return Object(i["a"])(r,e),Object(u["a"])(r,[{key:"addFeed",value:function(){var e=this;this.error=h["a"].add(this.feed),this.error?this.errorMessageTimeoutHandle=setTimeout(function(){e.error=null,clearTimeout(e.errorMessageTimeoutHandle),e.errorMessageTimeoutHandle=0},5e3):this.$router.push("/")}},{key:"cancelAdd",value:function(){this.$router.push("/")}}]),r}(l["d"]);p=Object(s["a"])([Object(l["a"])({components:{FeedEditor:b["a"]}})],p);var v=p,j=v,m=t("2877"),O=Object(m["a"])(j,a,n,!1,null,"b3aef930",null);r["default"]=O.exports}}]);
//# sourceMappingURL=chunk-2d0e5beb.28ced95c.js.map