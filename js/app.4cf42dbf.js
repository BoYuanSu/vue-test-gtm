(function(t){function e(e){for(var r,o,i=e[0],a=e[1],s=e[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&p.push(c[o][0]),c[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);d&&d(e);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,i=1;i<n.length;i++){var a=n[i];0!==c[a]&&(r=!1)}r&&(u.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},c={app:0},u=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vuejs-playground/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var d=a;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"10d3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4");var r=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Shopping Cart Example")]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("ProductList")]),t._v(" | "),n("router-link",{attrs:{to:"/shoppint-cart"}},[t._v("ShoppintCart")])],1),n("router-view")],1)},u=[],o=(n("5c0b"),n("2877")),i={},a=Object(o["a"])(i,c,u,!1,null,null,null),s=a.exports,d=n("8c4f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-list"},[n("ul",t._l(t.products,(function(e){return n("li",{key:e.id},[t._v(" "+t._s(e.title)+" - "+t._s(t._f("currency")(e.price))+" "),n("br"),n("button",{attrs:{disabled:!e.inventory},on:{click:function(n){return t.addProductToCart(e)}}},[t._v(" Add to cart ")])])})),0)])},p=[],f=n("2f62"),h={name:"ProductList",computed:Object(f["d"])({products:function(t){return t.products.all}}),methods:Object(f["b"])("cart",["addProductToCart"]),created:function(){this.$store.dispatch("products/getAllProducts")}},v=h,m=(n("60dc"),Object(o["a"])(v,l,p,!1,null,null,null)),b=m.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shoppint-cart"},[n("h2",[t._v("Your Cart")]),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.products.length,expression:"!products.length"}]},[n("i",[t._v("Please add some products to cart.")])]),n("ul",t._l(t.products,(function(e){return n("li",{key:e.id},[t._v(" "+t._s(e.title)+" - "+t._s(t._f("currency")(e.price))+" x "+t._s(e.quantity)+" ")])})),0),n("p",[t._v("Total: "+t._s(t._f("currency")(t.total)))]),n("p",[n("button",{attrs:{disabled:!t.products.length},on:{click:function(e){return t.checkout(t.products)}}},[t._v("Checkout")])]),n("p",{directives:[{name:"show",rawName:"v-show",value:t.checkoutStatus,expression:"checkoutStatus"}]},[t._v("Checkout "+t._s(t.checkoutStatus)+".")])])},_=[],P=n("5530"),g={name:"ShoppintCart",computed:Object(P["a"])(Object(P["a"])({},Object(f["d"])({checkoutStatus:function(t){return t.cart.checkoutStatus}})),Object(f["c"])("cart",{products:"cartProducts",total:"cartTotalPrice"})),methods:{checkout:function(t){this.$store.dispatch("cart/checkout",t)}}},k=g,C=(n("5912"),Object(o["a"])(k,y,_,!1,null,null,null)),S=C.exports;r["a"].use(d["a"]);var j=[{path:"/",name:"ProductList",component:b},{path:"/shoppint-cart",name:"ShoppintCart",component:S}],w=new d["a"]({base:"/vuejs-playground/",routes:j}),O=w,x=n("2909"),T=(n("d81d"),n("7db0"),[{id:1,title:"iPad 4 Mini",price:500.01,inventory:2},{id:2,title:"H&M T-Shirt White",price:10.99,inventory:10},{id:3,title:"Charli XCX - Sucker CD",price:19.99,inventory:5}]),M={getProducts:function(t){setTimeout((function(){return t(T)}),100)},buyProducts:function(t,e,n){setTimeout((function(){Math.random()>.5||navigator.webdriver?e():n()}),100)}},$=function(){return{items:[],checkoutStatus:null}},I={cartProducts:function(t,e,n){return t.items.map((function(t){var e=t.id,r=t.quantity,c=n.products.all.find((function(t){return t.id===e}));return{title:c.title,price:c.price,quantity:r}}))},cartTotalPrice:function(t,e){return e.cartProducts.reduce((function(t,e){return t+e.price*e.quantity}),0)}},q={checkout:function(t,e){var n=t.commit,r=t.state,c=Object(x["a"])(r.items);n("setCheckoutStatus",null),n("setCartItems",{items:[]}),M.buyProducts(e,(function(){return n("setCheckoutStatus","successful")}),(function(){n("setCheckoutStatus","failed"),n("setCartItems",{items:c})}))},addProductToCart:function(t,e){var n=t.state,r=t.commit;if(r("setCheckoutStatus",null),e.inventory>0){var c=n.items.find((function(t){return t.id===e.id}));c?r("incrementItemQuantity",c):r("pushProductToCart",{id:e.id}),r("products/decrementProductInventory",{id:e.id},{root:!0})}}},E={pushProductToCart:function(t,e){var n=e.id;t.items.push({id:n,quantity:1})},incrementItemQuantity:function(t,e){var n=e.id,r=t.items.find((function(t){return t.id===n}));r.quantity++},setCartItems:function(t,e){var n=e.items;t.items=n},setCheckoutStatus:function(t,e){t.checkoutStatus=e}},A={namespaced:!0,state:$,getters:I,actions:q,mutations:E},F=function(){return{all:[]}},L={},J={getAllProducts:function(t){var e=t.commit;M.getProducts((function(t){e("setProducts",t)}))}},N={setProducts:function(t,e){t.all=e},decrementProductInventory:function(t,e){var n=e.id,r=t.all.find((function(t){return t.id===n}));r.inventory--}},Q={namespaced:!0,state:F,getters:L,actions:J,mutations:N};r["a"].use(f["a"]);var X=!1,D=new f["a"].Store({modules:{cart:A,products:Q},strict:X,state:{},mutations:{},actions:{}}),H=(n("b680"),n("fb6a"),n("ac1f"),n("5319"),/(\d{3})(?=\d)/g);function W(t,e,n){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"$",n=null!=n?n:2;var r=Math.abs(t).toFixed(n),c=n?r.slice(0,-1-n):r,u=c.length%3,o=u>0?c.slice(0,u)+(c.length>3?",":""):"",i=n?r.slice(-1-n):"",a=t<0?"-":"";return a+e+o+c.slice(u).replace(H,"$1,")+i}r["a"].filter("currency",W),r["a"].config.productionTip=!1,new r["a"]({router:O,store:D,render:function(t){return t(s)}}).$mount("#app")},5912:function(t,e,n){"use strict";n("10d3")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"60dc":function(t,e,n){"use strict";n("8f01")},"8f01":function(t,e,n){},"9c0c":function(t,e,n){}});