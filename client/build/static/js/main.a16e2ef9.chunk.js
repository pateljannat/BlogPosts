(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,a){},31:function(e,t,a){},35:function(e,t,a){e.exports=a(65)},40:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(32),r=a.n(o),i=(a(40),a(7)),l=a(8),c=a(3),m=a(10),u=a(9),h=a(12),d=a(1),g=(a(41),a(21),a(11)),p=a.n(g),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleLogout=n.handleLogout.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"handleLogout",value:function(e){var t=this;e.preventDefault();var a=JSON.parse(sessionStorage.getItem("key")).token;p.a.get("/api/accounts/logout",a).then((function(e){!0===e.data.success&&(sessionStorage.removeItem("key"),sessionStorage.removeItem("isLoggedIn"),t.props.stateChange({isLoggedIn:!1}))}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light"},s.a.createElement(h.b,{to:"/",className:"navbar-brand"},s.a.createElement("img",{src:"./WebNote.png",className:"logo",alt:"Logo"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(h.b,{to:"/create",className:"nav-link"},"Create")),s.a.createElement("li",{className:"nav-item logout-link"},s.a.createElement("span",{className:"nav-link link-span",onClick:this.handleLogout},"Logout"))))))}}]),a}(n.Component),b=a(15),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={title:"",post:""},e.handleChange=e.handleChange.bind(Object(c.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(c.a)(e)),e}return Object(l.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(b.a)({},a,n))}},{key:"componentDidMount",value:function(){var e=this;this.props.match.params.id&&p.a.get("/api/".concat(this.props.match.params.id)).then((function(t){e.setState({title:t.data.title,post:t.data.post})})).catch((function(e){console.log(e)}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={title:this.state.title,post:this.state.post,user:JSON.parse(sessionStorage.getItem("key")).email},n=this.props.match.params.id?"/api/".concat(this.props.match.params.id):"/api/add";p.a.post(n,a).then((function(e){t.props.history.push("/")}))}},{key:"render",value:function(){return s.a.createElement("form",{className:"form-style mt-4",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",value:this.state.title,onChange:this.handleChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Note Content",name:"post",value:this.state.post,onChange:this.handleChange})),s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"))}}]),a}(n.Component),E=a(34),N=a.n(E),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={posts:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).baseURL),p.a.get("/api",{params:{email:JSON.parse(sessionStorage.getItem("key")).email},headers:{"Content-Type":"application/json"}}).then((function(t){var a=t.data.sort((function(e,t){return new Date(t.date)-new Date(e.date)}));e.setState({posts:a})})).catch((function(e){console.log(e)}))}},{key:"deletePost",value:function(e){var t=this;p.a.delete("/api/delete/".concat(e),{params:{email:JSON.parse(sessionStorage.getItem("key")).email}}).then((function(e){var a=e.data.sort((function(e,t){return new Date(t.date)-new Date(e.date)}));t.setState({posts:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.posts.length?s.a.createElement("div",null,s.a.createElement("h3",null,"All Notes"),s.a.createElement("div",null,this.displayPosts())):s.a.createElement("div",{className:"no-notes"},"You have no notes yet!!")}},{key:"displayPosts",value:function(){var e=this,t=this.state.posts;return t.length?t.map((function(t,a){return s.a.createElement("div",{key:a,className:"list-group-item"},s.a.createElement("div",{className:"d-flex w-100 justify-content-between"},s.a.createElement("h5",{className:"mb-1"},t.title),s.a.createElement("small",{className:"text-muted"},e.displayDate(t.date))),s.a.createElement("p",{className:"mb-1"},t.post),s.a.createElement(h.b,{className:"list-group-item-action",to:"/edit/"+t._id},"Edit"),s.a.createElement("span",{className:"list-group-item-action link-span",onClick:e.deletePost.bind(e,t._id)},"Delete"))})):null}},{key:"displayDate",value:function(e){return N()(e).format("Do MMMM YYYY")}}]),a}(n.Component),C=(a(31),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",isLoggedIn:sessionStorage.getItem("isLoggedIn")},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(b.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={email:this.state.email,password:this.state.password};p.a.post("/api/accounts/login",a).then((function(e){if(!0===e.data.success){var a={token:e.data.token,email:e.data.email};sessionStorage.setItem("key",JSON.stringify(a)),sessionStorage.setItem("isLoggedIn",!0),t.setState({isLoggedIn:!0}),t.props.stateChange({isLoggedIn:!0})}}))}},{key:"render",value:function(){return this.state.isLoggedIn?s.a.createElement(d.a,{from:"/login",to:"/"}):s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{className:"form-control",type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Email Address"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{className:"form-control",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password"})),s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Log In"),s.a.createElement("div",{className:"switch-section-login"},s.a.createElement("div",null,"Dont have an account? "),s.a.createElement(h.b,{to:"/register"},"Sign Up")))}}]),a}(n.Component)),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",password:"",password1:"",isLoggedIn:sessionStorage.getItem("isLoggedIn")},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(b.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={name:this.state.name,email:this.state.email,password:this.state.password,password1:this.state.password1};p.a.post("/api/accounts/register",a).then((function(e){if(!0===e.data.success){var a={token:e.data.token,email:e.data.email};sessionStorage.setItem("key",JSON.stringify(a)),sessionStorage.setItem("isLoggedIn",!0),t.setState({isLoggedIn:!0}),t.props.stateChange({isLoggedIn:!0})}})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.isLoggedIn?s.a.createElement(d.a,{from:"/login",to:"/"}):s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{placeholder:"Name",className:"form-control",type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{placeholder:"Email Address",className:"form-control",type:"email",name:"email",value:this.state.email,onChange:this.handleChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{placeholder:"Password",className:"form-control",type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{placeholder:"Confirm Password",className:"form-control",type:"password",name:"password1",value:this.state.password1,onChange:this.handleChange})),s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Sign Up"),s.a.createElement("div",{className:"switch-section-register"},s.a.createElement("div",null,"Already have an account. Log in instead!!!"),s.a.createElement(h.b,{to:"/login"},"Log In")))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={isLoggedIn:sessionStorage.getItem("isLoggedIn")},e.stateChange=e.stateChange.bind(Object(c.a)(e)),e}return Object(l.a)(a,[{key:"stateChange",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this;return this.state.isLoggedIn?s.a.createElement(h.a,null,s.a.createElement("div",{className:"container"},s.a.createElement(v,{stateChange:this.stateChange})),s.a.createElement(d.b,{className:"container",path:"/",exact:!0,component:y}),s.a.createElement(d.b,{path:"/edit/:id",exact:!0,render:function(e){return s.a.createElement(f,Object.assign({},e,{isNew:!1}))}}),s.a.createElement(d.b,{path:"/create",exact:!0,render:function(e){return s.a.createElement(f,Object.assign({},e,{isNew:!0}))}})):s.a.createElement(h.a,null,s.a.createElement("div",{className:"login-container"},s.a.createElement("div",{className:"login-form"},s.a.createElement("div",{className:"login-heading"},s.a.createElement("h2",null,"Webnote"),s.a.createElement("p",null,"Remember everything important.")),s.a.createElement(d.b,{exact:!0,path:"/register",render:function(t){return s.a.createElement(S,{stateChange:e.stateChange})}}),s.a.createElement(d.b,{exact:!0,path:"/login",render:function(t){return s.a.createElement(C,{stateChange:e.stateChange})}}),s.a.createElement(d.a,{from:"/",to:"login"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.a16e2ef9.chunk.js.map