(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t){e.exports=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}},44:function(e){e.exports=[{id:1,name:"Strip Ribbion",price:9.99,description:"Wrap your gift with brown craft paper, and a pretty striped ribbon of your choice for the perfect gift.We think a cutely wrapped gift makes all the difference in making your gift look extra special. Your friends and family will appreciate the extra care you put into their gift!",image:"https://eighteen25.com/wp-content/uploads/2014/12/gift-wrap-ideas-1024x683.jpg"},{id:2,name:"White Christmas",price:14.99,description:"Whether you have snow this Christmas or not, Magic of Wrapping\u2019 elegant wrap is reminiscent of a white winter wonderland. Dress a simple white box up with various white ribbons and a balsa wood tag. This makes a small gift feel more substantial and elegant.",image:"http://www.twopinkcanaries.com/wp-content/uploads/2016/10/pretty_christmas_wrapping_ideas_14.jpg"},{id:3,name:"Knit Bag",price:17.99,description:"A gift bag is an ideal option for those who want to give a small thing, but at the same time emphasize its beauty. Most often these bags are used for gifts of a variety of accessories and costume jewelry. And what is most interesting, they are ideal for this role. ",image:"http://www.twopinkcanaries.com/wp-content/uploads/2016/10/pretty_christmas_wrapping_ideas_3.jpg"},{id:4,name:"Ornament Decoration",price:11.99,description:"Here at Magic of Wrapping, we love all things packaging. Ornaments can also be humorous and used as a casual stocking stuffer. We think a cutely wrapped gift makes all the difference in making your gift look extra special. Your friends and family will appreciate the extra care you put into their gift!",image:"http://www.twopinkcanaries.com/wp-content/uploads/2016/10/pretty_christmas_wrapping_ideas_7.jpg"},{id:5,name:"Joy Ornament",price:11.99,description:"Display a special moment with a \u201cJoy\u201d ornament. What a joyful way to celebrate this magical time of year. Makes a perfect addition to your thoughtful gift for a friend or family member.",image:"http://www.twopinkcanaries.com/wp-content/uploads/2016/10/pretty_christmas_wrapping_ideas_8.jpg"},{id:6,name:"Snowflake Ornament",price:11.99,description:"What a beautiful way to celebrate the holidays with a snowflake ornament that everyone will love and. Let us bring your dreams to life.",image:"http://www.twopinkcanaries.com/wp-content/uploads/2016/10/pretty_christmas_wrapping_ideas_9.jpg"},{id:7,name:"Gold Raindeer",price:19.99,description:"The gold reindeer is the perfect fun ornament to add to a special gift and take it over the top for your special person. It will put a smile on anyone\u2019s face.",image:"http://www.twopinkcanaries.com/wp-content/uploads/2016/10/pretty_christmas_wrapping_ideas_15.jpg"},{id:8,name:"Red Ribbion",price:9.99,description:"Going with a red ribbon gift package is a very elegant and classy touch to any gift that you want to give. You can add a red ribbon to  an anniversary, birthday, Christmas, and we can not forget valentine gift.",image:"https://i2-prod.mirror.co.uk/incoming/article7034700.ece/ALTERNATES/s615/Christmas-Gift.jpg"},{id:9,name:"Strip Ribbion",price:9.99,description:"Wrap your gift with brown craft paper, and a pretty striped ribbon of your choice for the perfect gift.Your friends and family will appreciate the extra care you put into their gift!",image:"https://eighteen25.com/wp-content/uploads/2014/12/gift-wrap-ideas-1024x683.jpg"}]},48:function(e,t,a){e.exports=a(95)},53:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(38),i=a.n(o),c=(a(53),a(5)),l=a(6),s=a(9),u=a(7),m=a(8),p=a(98),d=a(97),h=a(15),f=a(22),g=a.n(f),b=a(18),E=a.n(b),v=function(e){e?E.a.defaults.headers.common.Authorization=e:delete E.a.defaults.headers.common.Authorization},y=function(e){return{type:"SET_CURRENT_USER",payload:e}},w=a(12),k=a(47),j=a(40),O=a(19),N=a(41),C=a.n(N),S={isAuthenticated:!1,user:{}},_={isAuthenticated:!1,user:{}},T=a(20),R=function(e,t){return e.filter(function(e){return e.id!==t.id})},x=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD":return function(e,t){var a=function(e,t){return e.filter(function(e){return e.id===t.id})[0]}(e,t);return void 0===a?Object(T.a)(R(e,t)).concat([Object(O.a)({},t,{quantity:1})]):Object(T.a)(R(e,t)).concat([Object(O.a)({},a,{quantity:a.quantity+1})])}(a,n.payload);case"REMOVE":return e=a,1===(t=n.payload).quantity?Object(T.a)(R(e,t)):Object(T.a)(R(e,t)).concat([Object(O.a)({},t,{quantity:t.quantity-1})]);case"REMOVE_ALL":return function(e,t){return Object(T.a)(R(e,t))}(a,n.payload);default:return a}},W=Object(w.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(O.a)({},e,{isAuthenticated:!C()(t.payload),user:t.payload});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},cart:x}),A={},I=[j.a];var L=function(){try{var e=localStorage.getItem("state");return null===e?A:JSON.parse(e)}catch(t){return void console.log(t)}}(),U=Object(w.e)(W,L,Object(w.d)(w.a.apply(void 0,I),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Object(k.a)(U);var D=U,M=a(96),q=a(1),P=a.n(q),V=a(11),F=(a(82),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onLogoutClick",value:function(e){e.preventDefault(),this.props.logoutUser()}},{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,a=(e.user,r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(M.a,{className:"nav-link",to:"/services"},"Services")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:this.onLogoutClick.bind(this),className:"nav-link"},"Logout")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(M.a,{className:"nav-link",to:"/checkout"},r.a.createElement("i",{class:"fas fa-shopping-cart"},"Cart"))))),n=r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(M.a,{className:"nav-link",to:"/services"},"Services")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(M.a,{className:"nav-link",to:"/register"},"Sign Up")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(M.a,{className:"nav-link",to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(M.a,{className:"nav-link",to:"/checkout"},r.a.createElement("i",{class:"fas fa-shopping-cart"},"Cart"))));return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand navbar bg "},r.a.createElement(M.a,{className:"navbar-brand",to:"/"},"The Magic of Wrapping"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},t?a:n)))}}]),t}(n.Component));F.PropTypes={logoutUser:P.a.func.isRequired,auth:P.a.object.isRequired};var Y=Object(V.b)(function(e){return{auth:e.auth}},{logoutUser:function(){return function(e){localStorage.removeItem("jwtToken"),v(!1),e(y({}))}}})(F),G=(a(84),function(){return r.a.createElement("div",null,r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"\xa9 2018 Believe in the magic of WRAPPING")))}),z=a(14),X=a(4),B=a(16),J=a.n(B),$=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onChange=function(t){e.setState(Object(z.a)({},t.target.name,t.target.value))},e.state={email:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(X.a)(Object(X.a)(e))),e.onSubmit=e.onSubmit.bind(Object(X.a)(Object(X.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/checkout"),e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={email:this.state.email,password:this.state.password};this.props.loginUser(t)}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",null,r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 m-auto"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",{className:"display-4 text-center"},"Log In"),r.a.createElement("p",{className:"lead text-center"},"Sign in to your  account"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:J()("form-control form-control-lg",{"is-invalid":e.email}),placeholder:"Email Address",name:"email",value:this.state.email,onChange:this.onChange}),e.email&&r.a.createElement("div",{className:"invalid-feedback"},e.email)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:J()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&r.a.createElement("div",{className:"invalid-feedback"},e.password)),r.a.createElement("input",{type:"submit",className:"btn btn-success btn-block mt-4"})),r.a.createElement("br",null),r.a.createElement("br",null))))))}}]),t}(n.Component),K=Object(V.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){E.a.post("/api/users/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),v(a);var n=g()(a);t(y(n))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})($),Q=a(99),H=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onChange=function(t){e.setState(Object(z.a)({},t.target.name,t.target.value))},e.state={name:"",email:"",password:"",password2:"",errors:{}},e.onChange=e.onChange.bind(Object(X.a)(Object(X.a)(e))),e.onSubmit=e.onSubmit.bind(Object(X.a)(Object(X.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,email:this.state.email,password:this.state.password,password2:this.state.password2};this.props.registerUser(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",null,r.a.createElement("div",{className:"register"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 m-auto"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),r.a.createElement("p",{className:"lead text-center"},"Create your account"),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:J()("form-control form-control-lg",{"is-invalid":e.name}),placeholder:"Name",name:"name",value:this.state.name,onChange:this.onChange}),e.name&&r.a.createElement("div",{className:"invalid-feedback"},e.name)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:J()("form-control form-control-lg",{"is-invalid":e.email}),placeholder:"Email Address",name:"email",value:this.state.email,onChange:this.onChange}),e.email&&r.a.createElement("div",{className:"invalid-feedback"},e.email)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:J()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&r.a.createElement("div",{className:"invalid-feedback"},e.password)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:J()("form-control form-control-lg",{"is-invalid":e.password2}),placeholder:"Confirm Password",name:"password2",value:this.state.password2,onChange:this.onChange}),e.password2&&r.a.createElement("div",{className:"invalid-feedback"},e.password2)),r.a.createElement("input",{type:"submit",className:"btn btn-lg btn-success btn-block mt-4"})))))))}}]),t}(n.Component);H.PropTypes={registerUser:P.a.func.isRequired,auth:P.a.object.isRequired,errors:P.a.object.isRequired};var Z=Object(V.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){E.a.post("/api/users/register",e).then(function(e){return t.push("/login")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(Q.a)(H));function ee(e){return r.a.createElement("button",{type:"button",class:"btn btn-sm btn-outline-success",onClick:function(){return e.addToCart(e.product)}},"Add to cart (",e.cartItem&&e.cartItem.quantity||0,")")}function te(e){return r.a.createElement("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:function(){return e.removeFromCart(e.cartItem)}},"Remove")}function ae(e){return r.a.createElement("div",{className:"product-list-item"},r.a.createElement("h3",null,e.product.name),r.a.createElement("img",{className:"imgSize",title:e.product.name,src:e.product.image}),r.a.createElement("div",null,e.product.description),r.a.createElement("div",null,"$",e.product.price),r.a.createElement("div",null,r.a.createElement(ee,{cartItem:e.cartItem,product:e.product,addToCart:e.addToCart}),r.a.createElement("br",null),r.a.createElement("br",null),e.cartItem?r.a.createElement(te,{cartItem:e.cartItem,product:e.product,removeFromCart:e.removeFromCart}):null))}var ne=Object(V.b)(function(e){return{cart:e.cart}},function(e){return{addToCart:function(t){e({type:"ADD",payload:t})},removeFromCart:function(t){e({type:"REMOVE",payload:t})}}})(function(e){return r.a.createElement("div",{className:"product-listing"},e.products.map(function(t){return r.a.createElement(ae,{product:t,addToCart:e.addToCart,removeFromCart:e.removeFromCart,cartItem:e.cart.filter(function(e){return e.id===t.id})[0]})}))}),re=a(44),oe=(a(87),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ne,{products:re}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"buton"},r.a.createElement(M.a,{to:"/login",className:"btn btn-outline-success",style:{marginLeft:500}},"Log in to proceed"),r.a.createElement(M.a,{to:"/register",className:"btn btn-outline-success",style:{marginLeft:10}},"New Members? Register"),r.a.createElement(M.a,{to:"/checkout",className:"btn btn-outline-success",style:{marginLeft:10}},"Continue as guest")))}}]),t}(n.Component)),ie=(a(89),function(e){return r.a.createElement("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}},e.children)}),ce=function(e){return r.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))},le=function(e){return r.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))},se=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return r.a.createElement("div",Object.assign({className:t},e))},ue=function(){return r.a.createElement("div",null,r.a.createElement(ie,{backgroundImage:"http://longwallpapers.com/Desktop-Wallpaper/holiday-wallpaper-hd-resolution-For-Desktop-Wallpaper.jpg"},r.a.createElement("center",null,r.a.createElement("iframe",{width:"360",height:"480",src:"https://w2.countingdownto.com/2280547",frameborder:"0"}))),r.a.createElement(ce,{style:{marginTop:30}},r.a.createElement(le,null,r.a.createElement(se,{size:"md-12"},r.a.createElement("h1",null,"Believe In The Magic of Wrapping"))),r.a.createElement("br",null),r.a.createElement(le,null,r.a.createElement(se,{size:"md-12"},r.a.createElement("p",null,"With the holiday seasons right around the corner let us help you, and put your mind at easy.  Bring your gifts to us and we will wrap it up for you. We have been doing this for over 25 years. We are the best in the business."),r.a.createElement("p",null,"Our biggest goal is to help you take the stress and worry out of gift presentation so you can focus on the things in your life that really matter.  We are here to bring your ideas to life."),r.a.createElement("p",null,"That\u2019s a wrap!"),r.a.createElement(M.a,{to:"/services",className:"btn btn-outline-success"},"Check our Services")))))},me=a(29),pe=a.n(me),de=a(45),he=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).submit=a.submit.bind(Object(X.a)(Object(X.a)(a))),a.state={complete:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"submit",value:function(){var e=Object(de.a)(pe.a.mark(function e(t){var a,n,r;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.stripe.createToken({name:"Name"});case 2:return a=e.sent,n=a.token,e.next=6,fetch("/api/payment/charge",{method:"POST",headers:{"Content-Type":"text/plain"},body:n.id});case 6:(r=e.sent).ok&&this.setState({complete:!0}),r.ok&&console.log("Purchase Complete!");case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.complete?r.a.createElement("h1",null,"Purchase Complete"):r.a.createElement("div",{className:"checkout"},r.a.createElement("p",null,"Would you like to complete the purchase?"),r.a.createElement(h.CardElement,null),r.a.createElement(M.a,{to:"/ordercomplete",className:"btn btn-outline-success",onClick:this.submit},"Send"))}}]),t}(n.Component),fe=(Object(h.injectStripe)(he),a(46)),ge=a.n(fe);var be=Object(V.b)(function(e){return{cart:e.cart}},function(e){return{addToCart:function(t){e({type:"ADD",payload:t})},removeFromCart:function(t){e({type:"REMOVE",payload:t})},removeAllFromCart:function(t){e({type:"REMOVE_ALL",payload:t})}}})(function(e){return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null))),r.a.createElement("tbody",null,(t=e.cart,t.sort(function(e,t){return e.id<t.id})).map(function(t){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{className:"img-thumbnail",title:t.name,src:t.image})),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.quantity),r.a.createElement("td",null,"$",t.price*t.quantity),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-outline-success",onClick:function(){return e.addToCart(t)}},"+")),r.a.createElement("br",null),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-outline-danger",onClick:function(){return e.removeFromCart(t)}},"-")),r.a.createElement("td",null,r.a.createElement("button",{type:"button",class:"btn btn-outline-danger",onClick:function(){return e.removeAllFromCart(t)}},"Remove all from cart")))})));var t}),Ee=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onToken=function(e){fetch("/api/payment/charge",{method:"POST",body:JSON.stringify(e)}).then(function(e){e.json().then(function(e){alert("We are in business, ".concat(e.email))}).catch(function(e){console.log("Error "+e)}).catch(function(e){console.log("Error "+e)})})},e.state={stripe:null},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tableStyle"},r.a.createElement("br",null),r.a.createElement("h1",null,"Check Out"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(be,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ge.a,{token:this.onToken,amount:"2000",stripeKey:"pk_test_YYmTL5Vf3nhVg9Xp5jc6GU3M",billingAddress:!0,shippingAddress:!0,zipCode:!0,name:"The Magic of Wrapping"}))}}]),t}(n.Component),ve=(a(93),{margin:80}),ye={textAlign:"center"},we=function(){var e;return r.a.createElement("div",{style:ve},r.a.createElement("div",{class:"modal",tabindex:"-1",role:"dialog"}),r.a.createElement("div",{class:"modal-dialog",role:"document"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{className:"modal-body"},r.a.createElement("h5",{class:"modal-title"},"Order Complete"),r.a.createElement("hr",null),r.a.createElement("p",null," ",r.a.createElement("strong",null," Thanks for your order. You will recieve confirmation email shortly.")),r.a.createElement("p",null," Christmas season can result in longer wait times. In order to save the spot at your preferred time and date, we highly recommend to make an appointment by clicking the link below.We will contact you when your order is ready for pickup."),r.a.createElement("h1",{style:ye},r.a.createElement("a",(e={href:"#",class:"tooltip-test calendly-inline-widget"},Object(z.a)(e,"href","https://calendly.com/magicofwrapping-1/packages-dropoff"),Object(z.a)(e,"title","Schedule"),e),"Schedule Dropoff")," "),r.a.createElement("br",null),r.a.createElement("br",null)))))};if(localStorage.jwtToken){v(localStorage.jwtToken);var ke=g()(localStorage.jwtToken);D.dispatch(y(ke))}var je=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={stripe:null},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.Stripe?this.setState({stripe:window.Stripe("pk_test_YYmTL5Vf3nhVg9Xp5jc6GU3M")}):document.querySelector("#stripe-js").addEventListener("load",function(){e.setState({stripe:window.Stripe("pk_test_YYmTL5Vf3nhVg9Xp5jc6GU3M")})})}},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Y,null),r.a.createElement(d.a,{exact:!0,path:"/",component:ue}),r.a.createElement(d.a,{exact:!0,path:"/services",component:oe}),r.a.createElement(d.a,{exact:!0,path:"/register",component:Z}),r.a.createElement(d.a,{exact:!0,path:"/login",component:K}),r.a.createElement(d.a,{exact:!0,path:"/checkout",component:Ee}),r.a.createElement(d.a,{exact:!0,path:"/ordercomplete",component:we}),r.a.createElement(G,null)))}}]),t}(n.Component),Oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ne(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Ce=r.a.createElement(V.a,{store:D},r.a.createElement(je,null));i.a.render(Ce,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/final-project",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/final-project","/service-worker.js");Oe?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ne(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Ne(t,e)})}}()}},[[48,2,1]]]);
//# sourceMappingURL=main.c99f286b.chunk.js.map