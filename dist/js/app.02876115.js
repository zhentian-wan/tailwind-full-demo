(function(t){function e(e){for(var n,a,p=e[0],s=e[1],l=e[2],u=0,f=[];u<p.length;u++)a=p[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,p=1;p<r.length;p++){var s=r[p];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],s=p.push.bind(p);p.push=e,p=p.slice();for(var l=0;l<p.length;l++)e(p[l]);var c=s;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"21b1":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"antialiased text-gray-900",attrs:{id:"app"}},[r("div",{staticClass:"bg-gray-200 min-h-screen p-8 flex items-center justify-center"},[r("PropertyCard",{attrs:{property:t.property}})],1)])},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white border rounded-lg overflow-hidden"},[r("img",{attrs:{src:t.property.imageUrl,alt:t.property.imageAlt}}),r("div",{staticClass:"p-6"},[r("h4",{staticClass:"font-semibold text-lg"},[t._v("\n      "+t._s(t.property.title)+"\n    ")]),r("div",{},[t._v("\n      "+t._s(t.property.beds)+" beds • "+t._s(t.property.baths)+" baths\n    ")]),r("div",{},[t._v("\n      "+t._s(t.property.formattedPrice)+"\n      "),r("span",{},[t._v(" / wk")])]),r("div",{},[t._l(5,(function(e){return r("svg",{key:e,class:e<=t.property.rating?"text-teal-500":"text-gray-400",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M8.133 20.333c-1.147.628-2.488-.387-2.269-1.718l.739-4.488-3.13-3.178c-.927-.943-.415-2.585.867-2.78l4.324-.654 1.934-4.083a1.536 1.536 0 0 1 2.804 0l1.934 4.083 4.324.655c1.282.194 1.794 1.836.866 2.78l-3.129 3.177.739 4.488c.219 1.331-1.122 2.346-2.269 1.718L12 18.214l-3.867 2.119z","fill-rule":"evenodd"}})])})),r("span",{},[t._v(t._s(t.property.reviewCount)+" reviews")])],2)])])},p=[],s={props:["property"]},l=s,c=r("2877"),u=Object(c["a"])(l,a,p,!1,null,null,null),f=u.exports,d={name:"app",components:{PropertyCard:f},data:function(){return{property:{imageUrl:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",imageAlt:"Rear view of modern home with pool",beds:3,baths:2,title:"Modern home in city center",priceInCents:19e4,formattedPrice:"$1,900.00",reviewCount:34,rating:4}}}},v=d,y=(r("df3d"),Object(c["a"])(v,o,i,!1,null,null,null)),b=y.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(b)}}).$mount("#app")},df3d:function(t,e,r){"use strict";r("21b1")}});
//# sourceMappingURL=app.02876115.js.map