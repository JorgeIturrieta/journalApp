(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{162:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(35),c=n.n(r),o=n(8),i=n(9),s=n.n(i),u=n(14),l=n(20),d=n(24),j=n(23),p=n(10),b=n(21),O=n.n(b),h=(n(164),n(76),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/JorgeIturrieta/journalApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!1}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/JorgeIturrieta/journalApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!1}).REACT_APP_AUTHDOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/JorgeIturrieta/journalApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!1}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/JorgeIturrieta/journalApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!1}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/JorgeIturrieta/journalApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!1}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/JorgeIturrieta/journalApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!1}).REACT_APP_APP_ID});d.a.initializeApp(h);var m=d.a.firestore(),f=new d.a.auth.GoogleAuthProvider,_="[Auth] Login",v="[Auth] Logout",x="[UI] Set Error",g="[UI] Remove Error",y="[UI] Start loading",N="[UI] Finish loading",S="[Notes] New note",E="[Notes] Set active note",w="[Notes] Load notes",C="[Notes] Updated note",T="[Notes] Delete note",A="[Notes] Loguot Cleaning",P=n(6),R=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("mock"),"https://api.cloudinary.com/v1_1/dhklxujxz/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.next=8,fetch("https://api.cloudinary.com/v1_1/dhklxujxz/upload",{method:"POST",body:n});case 8:if(!(a=e.sent).ok){e.next=16;break}return e.next=12,a.json();case 12:return r=e.sent,e.abrupt("return",r.secure_url);case 16:return e.abrupt("return",null);case 17:e.next=22;break;case 19:throw e.prev=19,e.t0=e.catch(0),e.t0;case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("".concat(t,"/Journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(P.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e,t){return{type:E,payload:Object(P.a)({id:e},t)}},I=function(e,t){return{type:S,payload:Object(P.a)({id:e},t)}},L=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(e);case 2:a=t.sent,n(U(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return{type:w,payload:e}},K=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n,a){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.uid,e.url||delete e.url,delete(c=Object(P.a)({},e)).id,t.next=6,m.doc("".concat(r,"/Journal/notes/").concat(e.id)).update(c);case 6:n(W(e.id,c)),O.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},W=function(e,t){return{type:C,payload:{id:e,note:Object(P.a)({id:e},t)}}},H=function(e){return{type:T,payload:{id:e}}},F=function(e){return{type:x,payload:e}},J=function(){return{type:N}},B=function(e,t){return function(n){n({type:y}),d.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(V(t.uid,t.displayName)),n(J())})).catch((function(e){n(J()),O.a.fire("Error",e.message,"error")}))}},V=function(e,t){return{type:_,payload:{uid:e,displayName:t}}},G=function(){return{type:v}},z=n(37),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(l.a)(t,2),r=n[0],c=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},i=function(e){var t=e.target;c(Object(P.a)(Object(P.a)({},r),{},Object(z.a)({},t.name,t.value)))};return[r,i,o]},q=n(31),X=n.n(q),Y=(n(79),n(1)),Q=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active;return Object(Y.jsxs)("div",{className:"notes__appbar",children:[Object(Y.jsxs)("span",{children:[" ",X()(t.date).format("dddd, LL")]}),Object(Y.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n,a){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().notes.active,console.log(a().notes),console.log(e),O.a.fire({title:"Uploading...",text:"Please wait",allowOutsideClick:!1,didOpen:function(){O.a.showLoading()}}),t.next=6,R(e);case 6:c=t.sent,r.url=c,n(K(r)),O.a.close();case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(Y.jsx)("button",{className:"btn",onClick:function(){e(K(t))},children:"Save"})]})]})},Z=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active,n=M(t),r=Object(l.a)(n,3),c=r[0],i=r[1],d=r[2],j=c.body,p=c.title,b=c.id,h=Object(a.useRef)(t.id);Object(a.useEffect)((function(){h.current!==t.id&&(d(t),h.current=t.id)}),[t,d]),Object(a.useEffect)((function(){e(k(c.id,Object(P.a)({},c)))}),[e,c]);return Object(Y.jsxs)("div",{className:"notes__main-content",children:[Object(Y.jsx)(Q,{}),Object(Y.jsxs)("div",{className:"notes_content",children:[Object(Y.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",value:p,name:"title",onChange:i}),Object(Y.jsx)("textarea",{placeholder:"what do you do today",className:"notes__textarea",name:"body",value:j,onChange:i}),t.url&&Object(Y.jsx)("div",{className:"notes__image",children:Object(Y.jsx)("img",{src:t.url,alt:"imagen"})})]}),Object(Y.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n,a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.uid,t.next=3,m.doc("".concat(r,"/Journal/notes/").concat(e)).delete();case 3:n(H(e)),O.a.fire("Deleted","Note Deleted","success");case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(b))},children:"Delete Entry"})]})},$=function(){return Object(Y.jsxs)("div",{className:"nothing_main-content",children:[Object(Y.jsxs)("p",{children:["Select something ",Object(Y.jsx)("br",{}),"or create an entry!"]}),Object(Y.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},ee=function(e){var t=e.id,n=e.date,a=e.title,r=e.body,c=e.url,i=X()(n),s=Object(o.b)();return Object(Y.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn",onClick:function(){s(k(t,{title:a,body:r,date:n,url:c}))},children:[c&&Object(Y.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(c,")")}}),Object(Y.jsxs)("div",{className:"journal__entry-body",children:[Object(Y.jsx)("p",{className:"jouranl_entry-title",children:a}),Object(Y.jsx)("p",{className:"jouranl_entry-content",children:r})]}),Object(Y.jsxs)("div",{className:"journal__entry-date-box",children:[Object(Y.jsx)("span",{children:i.format("dddd")}),Object(Y.jsx)("h4",{children:i.format("Do")})]})]})},te=function(){var e=Object(o.c)((function(e){return e.notes})).notes;return Object(Y.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(Y.jsx)(ee,Object(P.a)({},e),e.id)}))})},ne=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(Y.jsxs)("aside",{className:"journal__sidebar",children:[Object(Y.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(Y.jsxs)("h3",{className:"mt-5",children:[Object(Y.jsx)("i",{className:"far fa-moon"}),Object(Y.jsxs)("span",{children:[" ",t," "]})]}),Object(Y.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.auth().signOut();case 2:t(G()),t({type:A});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(Y.jsxs)("div",{className:"journal__new-entry ",onClick:function(){e(function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,m.collection("".concat(a,"/Journal/notes")).add(r);case 4:c=e.sent,t(k(c.id,r)),t(I(c.id,r));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(Y.jsx)("i",{className:"far fa-calendar-plus fa-3x"}),Object(Y.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(Y.jsx)(te,{})]})},ae=function(){var e=Object(o.c)((function(e){return e.notes})).active;return Object(Y.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(Y.jsx)(ne,{}),Object(Y.jsx)("main",{children:e?Object(Y.jsx)(Z,{}):Object(Y.jsx)($,{})})]})},re=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).loading,n=M({email:"jorge1@gmail.com",password:"123456"}),a=Object(l.a)(n,2),r=a[0],c=a[1],i=r.email,s=r.password;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("h3",{className:"auth__title",children:"Login"}),Object(Y.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(B(i,s))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(Y.jsx)("input",{type:"text",autoComplete:"off",placeholder:"email",name:"email",className:"auth__input",value:i,onChange:c}),Object(Y.jsx)("input",{type:"password",placeholder:"password",name:"password",className:"auth__input",value:s,onChange:c}),Object(Y.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(Y.jsxs)("div",{className:"auth__social-networks",children:[Object(Y.jsx)("p",{children:"Login with social networks"}),Object(Y.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){d.a.auth().signInWithPopup(f).then((function(t){var n=t.user;e(V(n.uid,n.displayName))}))}))},children:[Object(Y.jsx)("div",{className:"google-icon-wrapper",children:Object(Y.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(Y.jsx)("p",{className:"btn-text",children:Object(Y.jsx)("b",{children:"Sign in with google"})})]})]}),Object(Y.jsx)(j.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},ce=n(61),oe=n.n(ce),ie=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).msgError,n=M({name:"Jorge Iturrieta",email:"jorge.10.iturrieta@gmail.com",password:123456,password2:123456}),a=Object(l.a)(n,2),r=a[0],c=a[1],i=r.name,p=r.email,b=r.password,h=r.password2,m=function(){return 0===i.trim().length?(e(F("Name is required")),!1):oe.a.isEmail(p)?b!==h||b.length<5?(e(F("Password should be at least 6 character and match each other")),!1):(e({type:g}),!0):(e(F("Email is not valid")),!1)};return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("h3",{className:"auth__title",children:"Register"}),Object(Y.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m()&&e(function(e,t,n){return function(a){d.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(u.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:n});case 3:console.log(r),a(V(r.uid,r.displayName));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return O.a.fire("Error",e.message,"error")}))}}(p,b,i))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(Y.jsx)("div",{className:"auth__alert-error",children:t}),Object(Y.jsx)("input",{type:"text",autoComplete:"off",placeholder:"Name",name:"name",className:"auth__input",onChange:c,value:i}),Object(Y.jsx)("input",{type:"text",autoComplete:"off",placeholder:"Email",name:"email",className:"auth__input",value:p,onChange:c}),Object(Y.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",onChange:c,value:b}),Object(Y.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:h,onChange:c}),Object(Y.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(Y.jsx)(j.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},se=function(){return Object(Y.jsx)("div",{className:"auth__main",children:Object(Y.jsx)("div",{className:"auth__box-container",children:Object(Y.jsxs)(p.Switch,{children:[Object(Y.jsx)(p.Route,{exact:!0,path:"/auth/login",component:re}),Object(Y.jsx)(p.Route,{exact:!0,path:"/auth/register",component:ie}),Object(Y.jsx)(p.Redirect,{to:"/auth/login"})]})})})},ue=n(38),le=n(27),de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ue.a)(e,["isAuthenticated","component"]);return Object(Y.jsx)(le.Route,Object(P.a)(Object(P.a)({},a),{},{component:function(e){return t?Object(Y.jsx)(n,Object(P.a)({},e)):Object(Y.jsx)(le.Redirect,{to:"/auth/login"})}}))},je=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ue.a)(e,["isAuthenticated","component"]);return Object(Y.jsx)(le.Route,Object(P.a)(Object(P.a)({},a),{},{component:function(e){return t?Object(Y.jsx)(le.Redirect,{to:"/"}):Object(Y.jsx)(n,Object(P.a)({},e))}}))},pe=function(){var e=Object(o.b)(),t=Object(a.useState)(!0),n=Object(l.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),b=Object(l.a)(i,2),O=b[0],h=b[1];return Object(a.useEffect)((function(){d.a.auth().onAuthStateChanged(function(){var t=Object(u.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(V(n.uid,n.displayName)),e(L(n.uid)),h(!0)):h(!1),c(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,c,h]),r?Object(Y.jsx)("h1",{children:"Please wait..."}):Object(Y.jsx)(j.a,{children:Object(Y.jsx)("div",{children:Object(Y.jsxs)(p.Switch,{children:[Object(Y.jsx)(je,{path:"/auth",component:se,isAuthenticated:O}),Object(Y.jsx)(de,{path:"/",component:ae,isAuthenticated:O})]})})})},be=n(25),Oe=n(62),he=n(63),me={notes:[],active:null},fe={loading:!1,msgError:null},_e="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,ve=Object(be.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return{uid:t.payload.uid,name:t.payload.displayName};case v:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(P.a)(Object(P.a)({},e),{},{msgError:t.payload});case g:return Object(P.a)(Object(P.a)({},e),{},{msgError:null});case y:return Object(P.a)(Object(P.a)({},e),{},{loading:!0});case N:return Object(P.a)(Object(P.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(P.a)(Object(P.a)({},e),{},{active:Object(P.a)({},t.payload)});case w:return Object(P.a)(Object(P.a)({},e),{},{notes:t.payload});case C:return Object(P.a)(Object(P.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case T:return Object(P.a)(Object(P.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload.id}))});case A:return{active:null,notes:[]};case S:return{active:null,notes:[t.payload].concat(Object(he.a)(e.notes))};default:return e}}}),xe=Object(be.e)(ve,_e(Object(be.a)(Oe.a))),ge=function(){return Object(Y.jsx)("div",{children:Object(Y.jsx)(o.a,{store:xe,children:Object(Y.jsx)(pe,{})})})};n(162);c.a.render(Object(Y.jsx)(ge,{}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.3e13b702.chunk.js.map