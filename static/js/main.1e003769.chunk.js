(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{11:function(e,t,c){},30:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(20),s=c.n(a),l=(c(30),c(11),c(0)),i=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{class:"container-fluid",children:[Object(l.jsx)("a",{class:"navbar-brand",href:"#",children:"ICS2608"}),Object(l.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavSupportedContent",children:Object(l.jsxs)("div",{className:"navbar-nav",id:"navbarNavAltMarkup",children:[Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact",children:"Home"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/employees",children:"Employees"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/add",children:"Add Employees"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/employees",children:"Edit Employee"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/employees",children:"Delete Employee"}),Object(l.jsx)("a",{class:"nav-link disabled",href:"/",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})},o=c(6),j=c(2),d=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:[e.greeter," ",e.name,"!"]}),e.children]})},b=c(21),h=c(22),u=c(25),m=c(24),p=function(e){Object(u.a)(c,e);var t=Object(m.a)(c);function c(){var e;return Object(b.a)(this,c),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(h.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:this.addCounter,children:"Send Love"}),Object(l.jsxs)("p",{children:["Love to Send = ",this.state.count]})]})}}]),c}(r.a.Component),f=c(3),O=c(23),x=c.n(O).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"content-Type":"application/json"}}),y=function(){return x.get("/hello")},v=function(){var e=Object(n.useState)("Rewatch some MVs while the server is down!"),t=Object(f.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){y().then((function(e){r(e.data)})).catch((function(e){console.log("something went wrong!")}))})),c},g=function(){return Object(l.jsx)("p",{children:"You might like this MV!"})},w=function(){return x.get("/employees")},N=function(e){return x.post("/employees",e)},k=function(e){return x.put("/employees",e)},S=function(e){return x.get("/employees/".concat(e))},C=function(e){return x.delete("/employees/".concat(e))},E=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){a()}));var a=function(){w().then((function(e){r(e.data)})).catch((function(){console.log("Sorry, Lullet. The local server can't connect right now.")}))};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"List of Cherry Bullet Members\ud83c\udf52"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(o.b,{to:"/add",className:"btn btn-primary mb-2",children:"Add Employees"}),Object(l.jsxs)("table",{className:"table table-hover table-light  table-stripped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"table-danger",children:[Object(l.jsx)("td",{children:"Name"}),Object(l.jsx)("td",{children:"Nickname"}),Object(l.jsx)("td",{children:"Roles"}),Object(l.jsx)("td",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.nickname}),Object(l.jsx)("td",{children:e.roles}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{class:"d-grid gap-2 d-md-flex justify-content-md-center",children:[Object(l.jsx)(o.b,{className:"btn btn-primary",to:"/edit/".concat(e.employee_id),children:"Update"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(t){return c=e.employee_id,void C(c).then((function(e){console.log("Successfully deleted an employee"),a()})).catch((function(e){console.error("Something went wrong.",e)}));var c},children:"Delete"})]})})]},e.employee_id)}))})]})]})]})},L=function(){return Object(l.jsx)("div",{className:"Home",children:Object(l.jsxs)("header",{className:"App-header",children:["\xa0\xa0\xa0",Object(l.jsx)("img",{src:"https://ih1.redbubble.net/image.919133172.0514/st,small,507x507-pad,600x600,f8f8f8.jpg",className:"App-logo",alt:"logo"}),Object(l.jsxs)("p",{children:["\xa0",Object(l.jsx)(d,{greeter:"Greetings, ",name:"Visitor"}),Object(l.jsxs)("h2",{children:["Let's support",Object(l.jsx)("a",{className:"App-link",href:"https://www.youtube.com/c/CherryBulletofficial",target:"_blank",rel:"noopener noreferrer",children:" Cherry Bullet"}),"\ud83c\udf52"]})]}),"\xa0",Object(l.jsx)(d,{greeter:"Hello, ",name:"New Lullet"}),Object(l.jsx)(g,{}),Object(l.jsx)("iframe",{width:"852",height:"480",src:"https://www.youtube.com/embed/9OZPwJdl_4w",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\xa0",Object(l.jsx)(d,{greeter:"Hello, ",name:"Lullet"}),Object(l.jsx)(g,{}),Object(l.jsx)("iframe",{width:"852",height:"480",src:"https://www.youtube.com/embed/0It6vWbGOX0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\xa0",Object(l.jsx)("p",{children:v()}),Object(l.jsx)(p,{}),"\xa0"]})})},A=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(f.a)(a,2),i=s[0],o=s[1],d=Object(n.useState)(""),b=Object(f.a)(d,2),h=b[0],u=b[1],m=Object(j.f)(),p=Object(j.g)().employee_id;return Object(n.useEffect)((function(){p&&S(p).then((function(e){r(e.data.name),o(e.data.nickname),u(e.data.roles)})).catch((function(e){console.error("Something went wrong.",e)}))}),[]),Object(l.jsxs)("div",{className:"container mb-2",children:[Object(l.jsx)("h3",{children:"Add a new employee"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{class:"mb-3",children:[Object(l.jsx)("label",{for:"addName",class:"form-label",children:"Name"}),Object(l.jsx)("input",{type:"text",placeholder:"Enter the name of the employee",value:c,className:"form-control",id:"name","aria-describedby":"nameHelp",onChange:function(e){return r(e.target.value)}})]}),Object(l.jsxs)("div",{class:"mb-3",children:[Object(l.jsx)("label",{for:"addNickname",class:"form-label",children:"Nickname"}),Object(l.jsx)("input",{type:"text",placeholder:"Enter the nickname of the employee",value:i,className:"form-control",id:"nickname",onChange:function(e){return o(e.target.value)}})]}),Object(l.jsxs)("div",{class:"mb-3",children:[Object(l.jsx)("label",{for:"addRoles",class:"form-label",children:"Roles"}),Object(l.jsx)("input",{type:"text",placeholder:"Enter the roles of the employee",value:h,className:"form-control",id:"roles",onChange:function(e){return u(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault();var t={employee_id:p,name:c,nickname:i,roles:h};p?k(t).then((function(e){console.log("Employee updated!"),m("/employees")})).catch((function(e){console.log("Something went wrong!")})):N(t).then((function(e){console.log("Employee added!"),m("/employees")})).catch((function(e){console.log("Something went wrong!")}))}(e)},children:"Save"})]})]})},_=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Page not found!"})})},T=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(o.a,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/myfirstreact",element:Object(l.jsx)(L,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/myfirstreact/employees",element:Object(l.jsx)(E,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/myfirstreact/add",element:Object(l.jsx)(A,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/myfirstreact/edit/:employee_id",element:Object(l.jsx)(A,{})}),Object(l.jsx)(j.a,{exact:!0,path:"*",element:Object(l.jsx)(_,{})})]})})})};var B=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(i,{}),Object(l.jsx)(T,{})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};c(50);s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root")),D()}},[[51,1,2]]]);
//# sourceMappingURL=main.1e003769.chunk.js.map