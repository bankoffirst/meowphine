(this.webpackJsonpmeowphine=this.webpackJsonpmeowphine||[]).push([[0],{30:function(e,c,s){},41:function(e,c,s){},42:function(e,c,s){},43:function(e,c,s){},54:function(e,c,s){},66:function(e,c,s){},67:function(e,c,s){},68:function(e,c,s){},69:function(e,c,s){"use strict";s.r(c);var t=s(9),a=s.n(t),n=s(44),i=s.n(n),r=(s(54),s(18)),l=s(13),j=s(15),o=s(45),d=(s(56),o.a.initializeApp({apiKey:"AIzaSyCBoxYJqsDR_YIIxvGhC86FMD4NKK7SWa8",authDomain:"meowphine-2eb73.firebaseapp.com",projectId:"meowphine-2eb73",storageBucket:"meowphine-2eb73.appspot.com",messagingSenderId:"45929749502",appId:"1:45929749502:web:5f93299fda63a75e57beaf",measurementId:"G-GM31RJN07P"})),b=s(4),h=a.a.createContext(),m=function(e){var c=e.children,s=Object(t.useState)(!0),a=Object(j.a)(s,2),n=a[0],i=a[1],r=Object(t.useState)(null),l=Object(j.a)(r,2),o=l[0],m=l[1];return Object(t.useEffect)((function(){d.auth().onAuthStateChanged((function(e){m(e),i(!1)}))}),[]),n?Object(b.jsx)("p",{children:"Loading. . ."}):Object(b.jsx)(h.Provider,{value:{currentUser:o},children:c})};var x=function(){var e=Object(t.useContext)(h).currentUser;return Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"Home"}),e?Object(b.jsxs)("p",{children:["You are logged in - ",Object(b.jsx)(r.b,{to:"/dashboard",children:"View Dashboard"})]}):Object(b.jsxs)("p",{children:[Object(b.jsx)(r.b,{to:"/login",className:"btn btn-primary",children:"Log In"})," or ",Object(b.jsx)(r.b,{to:"/signup",className:"btn btn-success",children:"Sign Up"})]})]})},O=s(19);s(30),s(41);var u=function(){return Object(t.useContext)(h).currentUser?Object(b.jsx)("div",{className:"header",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"header-con",children:[Object(b.jsx)("div",{className:"logo-container",children:Object(b.jsxs)("a",{href:"/",children:["MeowPhine ",Object(b.jsx)(O.a,{})," - Welcome "]})}),Object(b.jsx)("div",{className:"menu-logout",children:Object(b.jsxs)("a",{href:"/login",onClick:function(){return d.auth().signOut()},className:"logout",children:["Log out",Object(b.jsx)(O.c,{})]})})]}),Object(b.jsxs)("div",{className:"dashboard",children:[Object(b.jsx)("h1",{children:"Welcome User 1"}),Object(b.jsx)("p",{children:"This is dashboard "})]})]})}):Object(b.jsx)(l.a,{to:"/login"})};s(42);var p=function(){var e=Object(l.g)();return Object(t.useContext)(h).currentUser?Object(b.jsx)(l.a,{to:"/"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"header-log",children:Object(b.jsx)("div",{className:"container-log",children:Object(b.jsx)("div",{className:"header-con-log",children:Object(b.jsx)("div",{className:"logo-login",children:Object(b.jsxs)("a",{href:"/",children:["MeowPhine ",Object(b.jsx)(O.a,{})," - Log in"]})})})})}),Object(b.jsx)("div",{className:"bg",children:Object(b.jsx)("div",{className:"container mt-5",children:Object(b.jsxs)("div",{className:"login-container",children:[Object(b.jsx)("h1",{children:"Log In"}),Object(b.jsxs)("form",{onSubmit:function(c){var s=c.target.elements,t=s.email,a=s.password;c.preventDefault(),d.auth().signInWithEmailAndPassword(t.value,a.value).then((function(c){e.push("/")})).catch((function(e){return alert(e.message)}))},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(b.jsx)("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(b.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",className:"form-control",id:"exampleInputPassword1"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"}),"  -  ",Object(b.jsx)(r.b,{to:"/signup",className:"btn btn-primary",children:"Sign Up"})]})]})})})]})};var v=function(){var e=Object(l.g)(),c=Object(t.useState)(null),s=Object(j.a)(c,2),a=s[0],n=s[1];return a?Object(b.jsx)(l.a,{to:"/"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"header-log",children:Object(b.jsx)("div",{className:"container-log",children:Object(b.jsx)("div",{className:"header-con-log",children:Object(b.jsx)("div",{className:"logo-login",children:Object(b.jsxs)("a",{href:"/",children:["MeowPhine ",Object(b.jsx)(O.a,{})," - Sign in"]})})})})}),Object(b.jsx)("div",{className:"bg",children:Object(b.jsx)("div",{className:"container mt-5",children:Object(b.jsxs)("div",{className:"login-container",children:[Object(b.jsx)("h1",{children:"Sign Up"}),Object(b.jsxs)("form",{onSubmit:function(c){c.preventDefault();var s=c.target.elements,t=s.email,a=s.password;d.auth().createUserWithEmailAndPassword(t.value,a.value).then((function(c){e.push("/"),n(!0)})).catch((function(e){return alert(e.message)}))},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(b.jsx)("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(b.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",className:"form-control",id:"exampleInputPassword1"}),Object(b.jsx)("span",{id:"passwordHelpInline",class:"form-text"}),"Must be 6-20 characters long."]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success",children:"SignUp"})]})]})})})]})},N=(s(66),s(48));var f=function(){return Object(b.jsx)("div",{className:"container-pro",children:Object(b.jsxs)("div",{className:"contain-pro-grid",children:[Object(b.jsx)("div",{className:"gal-cat"}),Object(b.jsxs)("div",{className:"contain-pro-grid-text",children:[Object(b.jsx)("h1",{className:"name-pro",children:Object(b.jsx)("span",{children:"Scotish Fold Short Hair"})}),Object(b.jsx)("h1",{className:"price-pro",children:"239.99$"}),Object(b.jsxs)("div",{className:"info-grid",children:[Object(b.jsx)("span",{className:"info-pro-head",children:"Infomation"}),Object(b.jsx)("span",{className:"info-pro-p",children:"Scotish Fold Short Hair"}),Object(b.jsx)("span",{className:"info-pro-p",children:"Color - Grey, White"}),Object(b.jsx)("span",{className:"info-pro-p",children:"Eyes - Blue eyes"}),Object(b.jsx)("span",{className:"info-pro-p",children:"City - Bangkok Thailand"}),Object(b.jsx)("span",{className:"info-pro-p",children:"Age - 5 week"})]}),Object(b.jsx)("div",{className:"cart-pro",children:Object(b.jsxs)("button",{className:"cart",children:["Purchase",Object(b.jsx)(N.a,{})]})})]})]})})};var g=function(){return Object(b.jsx)("div",{className:"header",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"header-con",children:[Object(b.jsx)("div",{className:"logo-container",children:Object(b.jsxs)("a",{href:"/",children:["MeowPhine ",Object(b.jsx)(O.a,{})," - Cart "]})}),Object(b.jsx)("div",{className:"menu-logout",children:Object(b.jsx)("a",{className:"logout",children:"User 1"})})]}),Object(b.jsx)(f,{})]})})};var w=function(){return Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"header-con",children:[Object(b.jsx)("div",{className:"logo-container",children:Object(b.jsxs)("a",{href:"/",children:["MeowPhine ",Object(b.jsx)(O.a,{})]})}),Object(b.jsx)("div",{className:"search",children:Object(b.jsx)("input",{type:"text",placeholder:"Search.."})}),Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsxs)("a",{href:"/dashboard",children:["Login",Object(b.jsx)(O.c,{})]}),Object(b.jsxs)("a",{href:"/cart",children:["Cart",Object(b.jsx)(O.b,{})]})]})]})})})};s(67),s(43);var y=function(){var e=Object(t.useState)(!1),c=Object(j.a)(e,2),s=c[0],a=c[1],n=Object(t.useState)(!1),i=Object(j.a)(n,2),r=i[0],l=i[1];return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("section",{className:"contain-grid",children:[Object(b.jsx)("div",{className:s?"contain-item1 action":"contain-item1",children:Object(b.jsxs)("div",{className:"contain-inner",children:[Object(b.jsx)("a",{href:"#",className:"cat-btn",onClick:function(){return a(!s)},children:"CAT"}),!s]})}),Object(b.jsx)("div",{className:r?"contain-item2 action":"contain-item2",children:Object(b.jsxs)("div",{className:"contain-inner",children:[Object(b.jsx)("a",{href:"#",className:"dog-btn",onClick:function(){return l(!r)},children:"DOG"}),!r]})})]})})},S="MeowPhine",I="A creature that is more than a 'Pet' ";var P=function(){return Object(b.jsx)("div",{className:"banner-bg",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"banner-con",children:Object(b.jsxs)("div",{className:"banner-text",children:[Object(b.jsx)("h1",{children:S}),Object(b.jsx)("p",{children:I})]})})})})};s(68);var C=function(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)("p",{children:"Copyright 2021. All Rights Reserved."})})};var E=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(w,{}),Object(b.jsx)(P,{}),Object(b.jsx)(y,{}),Object(b.jsx)(C,{})]})};var U=function(){return Object(b.jsx)(m,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/",children:Object(b.jsx)(E,{})}),Object(b.jsx)(l.b,{exact:!0,path:"/home",component:x}),Object(b.jsx)(l.b,{exact:!0,path:"/dashboard",component:u}),Object(b.jsx)(l.b,{exact:!0,path:"/login",component:p}),Object(b.jsx)(l.b,{exact:!0,path:"/signup",component:v}),Object(b.jsx)(l.b,{exact:!0,path:"/cart",component:g})]})})})})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,70)).then((function(c){var s=c.getCLS,t=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;s(e),t(e),a(e),n(e),i(e)}))};i.a.render(Object(b.jsxs)(r.a,{children:[Object(b.jsx)(U,{})," "]}),document.getElementById("root")),A()}},[[69,1,2]]]);
//# sourceMappingURL=main.c99beddd.chunk.js.map