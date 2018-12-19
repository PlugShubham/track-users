(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},33:function(e,t,a){e.exports=a(55)},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},48:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),c=a.n(l),i=(a(38),a(6)),o=a(7),u=a(9),m=a(8),s=a(10),h=(a(40),a(3)),d=(a(42),a(57)),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.k,{className:"header-container"},r.a.createElement(h.l,null,r.a.createElement(d.a,{to:"/",id:"logo"},"Track Users")),r.a.createElement(h.i,{navbar:!0},r.a.createElement(h.j,null,r.a.createElement(d.a,{to:"/add",id:"nav-item"},"ADD USER"))))}}]),t}(r.a.Component),E=(a(48),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.c,{className:"footer-container"},r.a.createElement("p",{className:"text-center brand"},"\xa9 Demo Project"))}}]),t}(r.a.Component)),b=a(16),p=a(14),j=a(32),O=a(27),v="FETCH_USERS",g="NEW_USER",y={items:[]},C=Object(p.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:case g:return Object(O.a)({},e,{items:t.payload});default:return e}}}),k=a(56);a(21);var w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchUsers()}},{key:"render",value:function(){var e=this.props.users.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},e.id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.gender),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.dob))});return r.a.createElement(h.c,{className:"main-container"},r.a.createElement(h.n,{responsive:!0,hover:!0,striped:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Gender"),r.a.createElement("th",null,"phone"),r.a.createElement("th",null,"DOB"))),r.a.createElement("tbody",null,e)))}}]),t}(r.a.Component),N=Object(b.b)(function(e){return{users:e.users.items}},{fetchUsers:function(){return function(e){fetch("https://gorest.co.in/public-api/users?_format=json&access-token=QeUtQCgdsAAeCdFbhUz1h6-HdVJ30zv8xMYR").then(function(e){return e.json()}).then(function(t){e({type:v,payload:t.result})})}}})(w),S=a(47),U=a(20),x=a(15),D=a(59),F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={fname:"",lname:"",email:"",gender:"male",redirect:!1},a.handleChange=a.handleChange.bind(Object(x.a)(Object(x.a)(a))),a.onSubmit=a.onSubmit.bind(Object(x.a)(Object(x.a)(a))),a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(U.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={first_name:this.state.fname,lastname:this.state.lname,email:this.state.email,gender:this.state.gender};this.props.addUsers(a),setTimeout(function(){t.setState({redirect:!0})},3e3)}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(D.a,{to:"/"}):r.a.createElement(h.c,{className:"card-container"},r.a.createElement(h.e,null,r.a.createElement(h.f,null,r.a.createElement(h.h,{for:"first name"},"First Name"),r.a.createElement(h.g,{type:"text",name:"fname",id:"fname",placeholder:"Enter First Name",value:this.state.fname,onChange:this.handleChange})),r.a.createElement(h.f,null,r.a.createElement(h.h,{for:"last name"},"Last Name"),r.a.createElement(h.g,{type:"text",name:"lname",id:"lname",placeholder:"Enter Last Name",value:this.state.lname,onChange:this.handleChange})),r.a.createElement(h.f,null,r.a.createElement(h.h,{for:"email"},"Email"),r.a.createElement(h.g,{type:"email",name:"email",id:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(h.f,null,r.a.createElement(h.h,{for:"name"},"Gender"),r.a.createElement("div",{onChange:this.handleChange},r.a.createElement(h.d,{type:"radio",id:"male",name:"gender",label:"Male",value:"male"}),r.a.createElement(h.d,{type:"radio",id:"female",name:"gender",label:"Female",value:"female"})))),r.a.createElement(h.a,{onClick:this.onSubmit},"Submit"))}}]),t}(r.a.Component),A=Object(b.b)(function(e){return{users:e.users.items}},{addUsers:function(e){return function(t){fetch("https://gorest.co.in/public-api/users?_format=json&access-token=QeUtQCgdsAAeCdFbhUz1h6-HdVJ30zv8xMYR",{method:"POST",body:e}).then(function(e){return e.json()}).then(function(e){t({type:g,payload:e.result})}).catch(function(e){console.log(e),alert("something went wrong")})}}})(F),R=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(h.c,{className:"main-container"},r.a.createElement(h.m,null,r.a.createElement(h.b,null,r.a.createElement(S.a,{to:"/"},"back"))),r.a.createElement("br",null),r.a.createElement(A,null))}}]),t}(r.a.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.a,{path:"/",exact:!0,component:N}),r.a.createElement(k.a,{path:"/add",exact:!0,component:R}))}}]),t}(r.a.Component),z=a(58),J=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=[j.a],t=Object(p.d)(C,{},p.a.apply(void 0,e));return r.a.createElement(b.a,{store:t},r.a.createElement(z.a,null,r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(_,null),r.a.createElement(E,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(53);c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.4db23ab1.chunk.js.map