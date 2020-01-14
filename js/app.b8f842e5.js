(function(t){function e(e){for(var n,o,r=e[0],u=e[1],l=e[2],p=0,d=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var u=a[r];0!==s[u]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/buefy-firebase-auth/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("c975"),a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),s=a("289d"),i=a("59ca"),o=a.n(i),r=(a("ea7b"),a("7bb1")),u=a("4c93"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("my-footer")],1)},c=[],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"content has-text-centered"},[a("p",[a("strong",[t._v("Buefy Firebase Auth")]),t._v(" by "),a("a",{attrs:{href:"https://www.berviantoleo.my.id"}},[t._v("Bervianto Leo Pratama")]),t._v(". The source code is licensed "),a("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(". The website content is licensed "),a("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[t._v("CC BY NC SA 4.0")]),t._v(". ")])])])}],f={name:"MyFooter"},h=f,m=a("2877"),b=Object(m["a"])(h,p,d,!1,null,null,null),v=b.exports,_={components:{MyFooter:v}},g=_,y=(a("9d14"),Object(m["a"])(g,l,c,!1,null,null,null)),E=y.exports,U=(a("45fc"),a("8c4f")),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[a("h1",{staticClass:"title"},[t._v(" Firebase Auth Demo ")]),a("section",{staticClass:"section"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-48x48"},[t.photoUrl?a("img",{attrs:{src:t.photoUrl}}):a("img",{attrs:{src:"https://bulma.io/images/placeholders/96x96.png",alt:"Placeholder image"}})])]),a("div",{staticClass:"media-content"},[t.name?a("p",{staticClass:"title is-4"},[t._v(t._s(t.name))]):a("p",{staticClass:"title is-4"},[t._v("User")]),a("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.email))])])])])])]),a("section",{staticClass:"section"},[a("h2",{staticClass:"title"},[t._v("Update Profile")]),a("b-field",{attrs:{label:"Name"}},[a("b-input",{attrs:{type:"text"},model:{value:t.input.name,callback:function(e){t.$set(t.input,"name",e)},expression:"input.name"}})],1),a("b-field",{attrs:{label:"Photo URL"}},[a("b-input",{attrs:{type:"url"},model:{value:t.input.photoURL,callback:function(e){t.$set(t.input,"photoURL",e)},expression:"input.photoURL"}})],1),a("div",{staticClass:"buttons"},[a("button",{staticClass:"button is-link",on:{click:t.update}},[t._v("Update")]),a("button",{staticClass:"button is-danger",on:{click:t.logout}},[t._v("Logout")])])],1)])])])},O=[],P=(a("b0c0"),a("ac1f"),a("5319"),{name:"home",data:function(){return{name:"",photoUrl:"",email:"",input:{name:"",photoURL:""}}},methods:{logout:function(){var t=this;o.a.auth().signOut().then((function(){t.$router.replace("login")}))},update:function(){var t=this,e=o.a.auth().currentUser;if(null!=e){var a=this.$buefy.loading.open({container:null});e.updateProfile({displayName:this.input.name,photoURL:this.input.photoURL}).then((function(){a.close(),t.updateProfile(o.a.auth().currentUser)})).catch((function(e){a.close(),t.$buefy.toast.open({message:"Error: ".concat(e.message),type:"is-danger",duration:5e3})}))}},updateProfile:function(t){this.email=t.email,this.name=t.displayName,this.photoUrl=t.photoURL}},mounted:function(){var t=o.a.auth().currentUser;t&&(this.updateProfile(t),this.input.name=t.displayName,this.input.photoURL=t.photoURL)}}),w=P,A=Object(m["a"])(w,C,O,!1,null,null,null),x=A.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title has-text-centered",attrs:{id:"title"}},[t._v(" Vue Bulma with Firebase Auth ")]),a("div",{staticClass:"card",attrs:{id:"login-box"}},[a("div",{staticClass:"card-content"},[a("h1",{staticClass:"title"},[t._v("Login")]),a("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit;return[a("form",{on:{submit:function(e){return e.preventDefault(),n(t.login)}}},[a("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors,s=e.failed,i=e.passed;return[a("b-field",{attrs:{label:"Email",type:{"is-danger":s,"is-success":i},message:n[0]}},[a("b-input",{attrs:{type:"email",maxlength:"30"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]}}],null,!0)}),a("ValidationProvider",{attrs:{name:"password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors,s=e.failed,i=e.passed;return[a("b-field",{attrs:{label:"Password",type:{"is-danger":s,"is-success":i},message:n[0]}},[a("b-input",{attrs:{type:"password","password-reveal":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)]}}],null,!0)}),a("section",{staticClass:"section"},[a("div",{staticClass:"content has-text-centered"},[a("button",{staticClass:"button is-primary"},[t._v("Login")])])])],1)]}}])})],1)])])])},j=[],R={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(){var t=this,e=this.$buefy.loading.open({container:null});o.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(a){e.close(),t.$router.replace("home"),t.$buefy.toast.open({message:"Welcome home ".concat(a.user.email),type:"is-success",duration:5e3})}),(function(a){e.close(),t.$buefy.toast.open({message:"Error: ".concat(a.message),type:"is-danger",duration:5e3})}))}}},S=R,N=Object(m["a"])(S,L,j,!1,null,null,null),V=N.exports;n["a"].use(U["a"]);var k=new U["a"]({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:V},{path:"/home",name:"Home",component:x,meta:{requiresAuth:!0}}]});k.beforeEach((function(t,e,a){var n=o.a.auth().currentUser,s=t.matched.some((function(t){return t.meta.requiresAuth}));s&&!n?a("login"):!s&&n?a("home"):a()}));var $=k,D=a("2f62");n["a"].use(D["a"]);var B=new D["a"].Store({state:{},mutations:{},actions:{}}),T="",I={apiKey:Object({NODE_ENV:"production",BASE_URL:"/buefy-firebase-auth/"}).VUE_APP_API_KEY,authDomain:Object({NODE_ENV:"production",BASE_URL:"/buefy-firebase-auth/"}).VUE_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",BASE_URL:"/buefy-firebase-auth/"}).VUE_APP_DB_URL,projectId:Object({NODE_ENV:"production",BASE_URL:"/buefy-firebase-auth/"}).VUE_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",BASE_URL:"/buefy-firebase-auth/"}).VUE_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",BASE_URL:"/buefy-firebase-auth/"}).VUE_APP_MSG_SENDER_ID};o.a.initializeApp(I),n["a"].config.productionTip=!1,n["a"].use(s["a"],{defaultIconPack:"fa"}),n["a"].component("ValidationObserver",r["a"]),n["a"].component("ValidationProvider",r["b"]),Object(r["c"])("email",u["a"]),Object(r["c"])("required",{validate:function(t){return{required:!0,valid:-1===["",null,void 0].indexOf(t)}},computesRequired:!0}),o.a.auth().onAuthStateChanged((function(){T||(T=new n["a"]({router:$,store:B,render:function(t){return t(E)}}).$mount("#app"))}))},"9d14":function(t,e,a){"use strict";var n=a("eaaa"),s=a.n(n);s.a},eaaa:function(t,e,a){}});
//# sourceMappingURL=app.b8f842e5.js.map