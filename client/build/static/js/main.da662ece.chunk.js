(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(32),o=a.n(r),l=(a(41),a(5)),i=a(6),c=a(3),m=a(8),h=a(7),u=a(9),d=a(13),p=(a(42),a(21),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},s.a.createElement(u.b,{to:"/",className:"navbar-brand"},s.a.createElement("img",{src:"./WebNote.png",className:"logo",alt:"Logo"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(u.b,{to:"/create",className:"nav-link"},"Create Posts"))))))}}]),a}(n.Component)),g=a(15),v=a(12),b=a.n(v),f=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={title:"",post:""},e.handleChange=e.handleChange.bind(Object(c.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(c.a)(e)),e}return Object(i.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(g.a)({},a,n))}},{key:"componentDidMount",value:function(){var e=this;this.props.match.params.id&&b.a.get("http://localhost:4000/api/".concat(this.props.match.params.id)).then((function(t){e.setState({title:t.data.title,post:t.data.post})})).catch((function(e){console.log(e)}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={title:this.state.title,post:this.state.post,user:JSON.parse(sessionStorage.getItem("key")).email},n=this.props.match.params.id?"http://localhost:4000/api/".concat(this.props.match.params.id):"http://localhost:4000/api/add";b.a.post(n,a).then((function(e){t.props.history.push("/")}))}},{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",value:this.state.title,onChange:this.handleChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Note Content",name:"post",value:this.state.post,onChange:this.handleChange})),s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"))}}]),a}(n.Component),E=a(35),y=a.n(E),N=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={posts:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://localhost:4000/api",{params:{email:JSON.parse(sessionStorage.getItem("key")).email},headers:{"Content-Type":"application/json"}}).then((function(t){var a=t.data.sort((function(e,t){return new Date(t.date)-new Date(e.date)}));e.setState({posts:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",null,"All Notes"),s.a.createElement("div",null,this.displayPosts()))}},{key:"displayPosts",value:function(){var e=this,t=this.state.posts;return t.length?t.map((function(t,a){return s.a.createElement("div",{key:a,className:"list-group-item"},s.a.createElement("div",{className:"d-flex w-100 justify-content-between"},s.a.createElement("h5",{className:"mb-1"},t.title),s.a.createElement("small",{className:"text-muted"},e.displayDate(t.date))),s.a.createElement("p",{className:"mb-1"},t.post),s.a.createElement(u.b,{className:"list-group-item-action",to:"/edit/"+t._id},"Edit"))})):null}},{key:"displayDate",value:function(e){return y()(e).format("Do MMMM YYYY")}}]),a}(n.Component),C=(a(31),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",isLoggedIn:sessionStorage.getItem("isLoggedIn")},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(g.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={email:this.state.email,password:this.state.password};b.a.post("http://localhost:4000/api/accounts/login",a).then((function(e){if(!0===e.data.success){var a={token:e.data.token,email:e.data.email};sessionStorage.setItem("key",JSON.stringify(a)),sessionStorage.setItem("isLoggedIn",!0),t.setState({isLoggedIn:!0}),t.props.stateChange({isLoggedIn:!0})}}))}},{key:"render",value:function(){return this.state.isLoggedIn?s.a.createElement(d.a,{from:"/login",to:"/"}):s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{className:"form-control",type:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"Email Address"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{className:"form-control",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"Password"})),s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Log In"),s.a.createElement("div",{className:"switch-section-login"},s.a.createElement("div",null,"Dont have an account? "),s.a.createElement(u.b,{to:"/register"},"Sign Up")))}}]),a}(n.Component)),O=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",password:"",password1:"",isLoggedIn:sessionStorage.getItem("isLoggedIn")},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(g.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={name:this.state.name,email:this.state.email,password:this.state.password,password1:this.state.password1};b.a.post("http://localhost:4000/api/accounts/register",a).then((function(e){if(!0===e.data.success){var a={token:e.data.token,email:e.data.email};sessionStorage.setItem("key",JSON.stringify(a)),sessionStorage.setItem("isLoggedIn",!0),t.setState({isLoggedIn:!0}),t.props.stateChange({isLoggedIn:!0})}})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.isLoggedIn?s.a.createElement(d.a,{from:"/login",to:"/"}):s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{placeholder:"Name",className:"form-control",type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{placeholder:"Email Address",className:"form-control",type:"email",name:"email",value:this.state.email,onChange:this.handleChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{placeholder:"Password",className:"form-control",type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{placeholder:"Confirm Password",className:"form-control",type:"password",name:"password1",value:this.state.password1,onChange:this.handleChange})),s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Sign Up"),s.a.createElement("div",{className:"switch-section-register"},s.a.createElement("div",null,"Already have an account. Log in instead!!!"),s.a.createElement(u.b,{to:"/login"},"Log In")))}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={isLoggedIn:sessionStorage.getItem("isLoggedIn")},e.stateChange=e.stateChange.bind(Object(c.a)(e)),e}return Object(i.a)(a,[{key:"stateChange",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this;return this.state.isLoggedIn?s.a.createElement(u.a,null,s.a.createElement("div",{className:"container"},s.a.createElement(p,null)),s.a.createElement(d.b,{className:"container",path:"/",exact:!0,component:N}),s.a.createElement(d.b,{path:"/edit/:id",exact:!0,render:function(e){return s.a.createElement(f,Object.assign({},e,{isNew:!1}))}}),s.a.createElement(d.b,{path:"/create",exact:!0,render:function(e){return s.a.createElement(f,Object.assign({},e,{isNew:!0}))}})):s.a.createElement(u.a,null,s.a.createElement("div",{className:"login-container"},s.a.createElement("div",{className:"login-form"},s.a.createElement("div",{className:"login-heading"},s.a.createElement("h2",null,"Webnote"),s.a.createElement("p",null,"Remember everything important.")),s.a.createElement(d.b,{exact:!0,path:"/register",render:function(t){return s.a.createElement(O,{stateChange:e.stateChange})}}),s.a.createElement(d.b,{exact:!0,path:"/login",render:function(t){return s.a.createElement(C,{stateChange:e.stateChange})}}),s.a.createElement(d.a,{from:"/",to:"login"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.da662ece.chunk.js.map