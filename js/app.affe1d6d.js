(function(e){function t(t){for(var a,i,s=t[0],u=t[1],l=t[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/buefy-firebase-auth/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"28d6":function(e,t,n){},"3f61":function(e,t,n){"use strict";var a=n("b136"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("c975"),n("e623"),n("e379"),n("5dc8"),n("37e1");var a=n("2b0e"),r=n("289d"),o=n("59ca"),i=n.n(o),s=(n("ea7b"),n("7bb1")),u=n("4c93"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],f=(n("5c0b"),n("2877")),d={},p=Object(f["a"])(d,l,c,!1,null,null,null),b=p.exports,m=(n("45fc"),n("8c4f")),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("HelloWorld",{attrs:{msg:"Hello "+this.email}}),a("p",{staticClass:"content"},[e._v("Email: "+e._s(e.email))]),a("button",{staticClass:"button is-danger",on:{click:e.logout}},[e._v("Logout")])],1)])])},v=[],_=(n("ac1f"),n("5319"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])}),g=[],E={name:"HelloWorld",props:{msg:String}},y=E,O=(n("67eb"),Object(f["a"])(y,_,g,!1,null,"7809147a",null)),P=O.exports,w={name:"home",data:function(){return{email:""}},components:{HelloWorld:P},methods:{logout:function(){var e=this;i.a.auth().signOut().then((function(){e.$router.replace("login")}))}},mounted:function(){var e=i.a.auth().currentUser;e&&(this.email=e.email)}},j=w,A=Object(f["a"])(j,h,v,!1,null,null,null),S=A.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"container"},[n("h1",{staticClass:"title has-text-centered",attrs:{id:"title"}},[e._v(" Vue Bulma with Firebase Auth ")]),n("div",{staticClass:"box",attrs:{id:"login-box"}},[n("h1",{staticClass:"title"},[e._v("Login")]),n("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[n("form",{on:{submit:function(t){return t.preventDefault(),a(e.login)}}},[n("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors,r=t.failed;return[n("b-field",{attrs:{label:"Email",type:{"is-danger":r},message:a[0]}},[n("b-input",{attrs:{type:"email",maxlength:"30"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)]}}],null,!0)}),n("ValidationProvider",{attrs:{name:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors,r=t.failed;return[n("b-field",{attrs:{label:"Password",type:{"is-danger":r},message:a[0]}},[n("b-input",{attrs:{type:"password","password-reveal":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)]}}],null,!0)}),n("button",{staticClass:"button is-primary"},[e._v("Login")])],1)]}}])})],1)])])},V=[],U={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;i.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(t){e.$router.replace("home"),e.$buefy.toast.open({message:"Welcome home ".concat(t.user.displayName),type:"is-success",duration:5e3})}),(function(t){e.$buefy.toast.open({message:"Error: ".concat(t.message),type:"is-danger",duration:5e3})}))}}},N=U,C=(n("3f61"),Object(f["a"])(N,x,V,!1,null,"2f243f6e",null)),D=C.exports;a["a"].use(m["a"]);var L=new m["a"]({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:D},{path:"/home",name:"Home",component:S,meta:{requiresAuth:!0}}]});L.beforeEach((function(e,t,n){var a=i.a.auth().currentUser,r=e.matched.some((function(e){return e.meta.requiresAuth}));r&&!a?n("login"):!r&&a?n("home"):n()}));var R=L,k=n("2f62");a["a"].use(k["a"]);var B=new k["a"].Store({state:{},mutations:{},actions:{}}),$="",I={apiKey:Object({NODE_ENV:"production",BASE_URL:"/buefy-firebase-auth/"}).VUE_APP_API_KEY,authDomain:Object({NODE_ENV:"production",BASE_URL:"/buefy-firebase-auth/"}).VUE_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",BASE_URL:"/buefy-firebase-auth/"}).VUE_APP_DB_URL,projectId:Object({NODE_ENV:"production",BASE_URL:"/buefy-firebase-auth/"}).VUE_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",BASE_URL:"/buefy-firebase-auth/"}).VUE_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",BASE_URL:"/buefy-firebase-auth/"}).VUE_APP_MSG_SENDER_ID};i.a.initializeApp(I),a["a"].config.productionTip=!1,a["a"].use(r["a"],{defaultIconPack:"fa"}),a["a"].component("ValidationObserver",s["a"]),a["a"].component("ValidationProvider",s["b"]),Object(s["c"])("email",u["a"]),Object(s["c"])("required",{validate:function(e){return{required:!0,valid:-1===["",null,void 0].indexOf(e)}},computesRequired:!0}),i.a.auth().onAuthStateChanged((function(){$||($=new a["a"]({router:R,store:B,render:function(e){return e(b)}}).$mount("#app"))}))},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"67eb":function(e,t,n){"use strict";var a=n("28d6"),r=n.n(a);r.a},"9c0c":function(e,t,n){},b136:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.affe1d6d.js.map