(this["webpackJsonpproject-three"]=this["webpackJsonpproject-three"]||[]).push([[0],{349:function(e,a,t){e.exports=t(653)},354:function(e,a,t){},427:function(e,a){},429:function(e,a){},45:function(e,a,t){},464:function(e,a){},465:function(e,a){},653:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(28),r=t.n(c),o=(t(45),t(85)),s=t(86),i=t(92),m=t(90),u=(t(204),t(354),t(21)),d=t(665),E=t(311),p=t(666),g=t(25),h=t.n(g),f=t(29),b=t(309),v=t.n(b),y=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v.a,{width:630,height:450,images:[{url:"https://cdn.dribbble.com/users/59947/screenshots/9553542/media/160e86cdc1d91877e4031b47b13de97c.jpg"},{url:"https://www.creativeboom.com/uploads/articles/41/41a7d04df4d17ad01d8d23a7b1b576ec2a69e632_1100.jpg"},{url:"https://cdn.dribbble.com/users/2390791/screenshots/6889596/1_3_.jpg"}]}))}}]),t}(l.a.Component);var j=function(e){return l.a.createElement("div",null,l.a.createElement(d.a,{className:"mt-0"},l.a.createElement(E.a,{className:"mt-0",md:6},l.a.createElement("h1",{className:"brheader"},"!WASTE"),l.a.createElement("p",{className:"pheader"}," !Waste connects neighbours with each other and with local businesses so surplus food can be shared, not thrown away. Here at !Waste we believe that small actions can lead to big change."),e.isLogin?l.a.createElement(f.c,{to:"/items/create",className:"hbutton"},"Create Item"):l.a.createElement(f.c,{to:"/signin",className:"hbutton"},"Create Item")),l.a.createElement(E.a,{md:6,className:"pr-4"},l.a.createElement(y,null))))},k=function(e){var a=Object(n.useState)([]),t=Object(u.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)(null),s=Object(u.a)(o,2),i=s[0];s[1];Object(n.useEffect)((function(){h.a.get("/api/home").then((function(e){r(e.data.items)})).catch((function(e){return console.log(e.response)}))}));var m=l.a.createElement(d.a,{className:"mt-5"},c.map((function(e){return l.a.createElement(E.a,{md:4,className:"my-5",key:e._id},l.a.createElement("div",{class:"item_card transition"},l.a.createElement("h2",{class:"transition"},e.name,l.a.createElement("br",null),l.a.createElement("small",null,e.expiration_date)),l.a.createElement("div",{class:"cta-container transition"},l.a.createElement("a",{href:"/items/".concat(e._id),class:"cta"},"Details")),l.a.createElement("div",{class:"card_circle transition",style:{backgroundImage:"url(".concat(e.image,")")}})))})));return l.a.createElement("div",null,i?l.a.createElement("div",null,i):null,l.a.createElement(j,{isLogin:e.isLogin}),l.a.createElement(p.a,{className:"mt-5",fluid:!0},l.a.createElement(d.a,{className:"sectionTitles justify-content-center"},l.a.createElement("h3",null,"All Items")),m))},N=t(36),O=t.n(N),w=(t(213),t(53)),C=t(54);var S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"sectionTitles justify-content-center"},l.a.createElement("h3",null,"Developed By")),l.a.createElement("div",{className:"profileCards"},l.a.createElement(d.a,null,l.a.createElement(E.a,{md:3},l.a.createElement(O.a,{flipOnHover:!0,flipOnClick:!1,flipDirection:"horizontal",ref:void 0,style:{width:"200px",height:"200px"}},l.a.createElement(N.FrontSide,{style:{backgroundColor:"unset"}},l.a.createElement("div",{className:"text-center"},l.a.createElement("h4",null,"Abdulaziz Althagafi"),l.a.createElement("p",null,"Full-Stack Developer"),l.a.createElement("p",null,l.a.createElement("span",null,">")))),l.a.createElement(N.BackSide,{style:{backgroundColor:"unset"}},l.a.createElement("div",{className:"backside"},l.a.createElement("a",{className:"linked-in",href:"https://www.linkedin.com/in/abdulaziz-al-thagafi"},l.a.createElement(w.a,{size:"2x",icon:C.b})),l.a.createElement("a",{className:"github",href:"https://git.generalassemb.ly/labdul2ziz"},l.a.createElement(w.a,{size:"2x",icon:C.a})))))),l.a.createElement(E.a,{md:3},l.a.createElement(O.a,{flipOnHover:!0,flipOnClick:!1,flipDirection:"vertical",ref:void 0,style:{width:"200px",height:"200px"}},l.a.createElement(N.FrontSide,{style:{backgroundColor:"unset"}},l.a.createElement("div",{className:"text-center"},l.a.createElement("h4",null,"Abdulhameed Alghamdi"),l.a.createElement("p",null,"Full-Stack Developer"),l.a.createElement("p",null,l.a.createElement("span",null,">")))),l.a.createElement(N.BackSide,{style:{backgroundColor:"unset"}},l.a.createElement("div",{className:"backside"},l.a.createElement("a",{className:"linked-in",href:"https://www.linkedin.com/in/abdulhameed-alghamdi/"},l.a.createElement(w.a,{size:"2x",icon:C.b})),l.a.createElement("a",{className:"github",href:"https://git.generalassemb.ly/i7medo"},l.a.createElement(w.a,{size:"2x",icon:C.a})))))),l.a.createElement(E.a,{md:3},l.a.createElement(O.a,{flipOnHover:!0,flipOnClick:!1,flipDirection:"vertical",ref:void 0,style:{width:"200px",height:"200px"}},l.a.createElement(N.FrontSide,{style:{backgroundColor:"unset"}},l.a.createElement("div",{className:"text-center"},l.a.createElement("h4",null,"Mohammed Alhaddad"),l.a.createElement("p",null,"Full-Stack Developer"),l.a.createElement("p",null,l.a.createElement("span",null,">")))),l.a.createElement(N.BackSide,{style:{backgroundColor:"unset"}},l.a.createElement("div",{className:"backside"},l.a.createElement("a",{className:"linked-in",href:"https://www.linkedin.com/in/mohammed-alhaddad/"},l.a.createElement(w.a,{size:"2x",icon:C.b})),l.a.createElement("a",{className:"github",href:"https://git.generalassemb.ly/alhaddad"},l.a.createElement(w.a,{size:"2x",icon:C.a})))))),l.a.createElement(E.a,{md:3},l.a.createElement(O.a,{flipOnHover:!0,flipOnClick:!1,flipDirection:"horizontal",ref:void 0,style:{width:"200px",height:"200px"}},l.a.createElement(N.FrontSide,{style:{backgroundColor:"unset"}},l.a.createElement("div",{className:"text-center"},l.a.createElement("h4",null,"Najlaa Alahamri"),l.a.createElement("p",null,"Full-Stack Developer"),l.a.createElement("p",null,l.a.createElement("span",null,">")))),l.a.createElement(N.BackSide,{style:{backgroundColor:"unset"}},l.a.createElement("div",{className:"backside"},l.a.createElement("a",{className:"linked-in",href:"https://www.linkedin.com/in/najlaaalahmari/"},l.a.createElement(w.a,{size:"2x",icon:C.b})),l.a.createElement("a",{className:"github",href:"https://git.generalassemb.ly/n2jlaa"},l.a.createElement(w.a,{size:"2x",icon:C.a})))))))))},L=function(e){var a=Object(n.useState)([]),t=Object(u.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)(null),s=Object(u.a)(o,2),i=s[0];s[1];Object(n.useEffect)((function(){h.a.get("/api/home").then((function(e){r(e.data.items)})).catch((function(e){return console.log(e.response)}))}));var m=l.a.createElement(d.a,{className:"mt-5"},c.slice(0,2).map((function(e){return l.a.createElement(E.a,{md:4,className:"my-5",key:e._id},l.a.createElement("div",{class:"item_card transition"},l.a.createElement("h2",{class:"transition"},e.name,l.a.createElement("br",null),l.a.createElement("small",null,e.expiration_date)),l.a.createElement("div",{class:"cta-container transition"},l.a.createElement("a",{href:"/items/".concat(e._id),class:"cta"},"Details")),l.a.createElement("div",{class:"card_circle transition",style:{backgroundImage:"url(".concat(e.image,")")}})))})));return l.a.createElement("div",null,i?l.a.createElement("div",null,i):null,l.a.createElement(j,{isLogin:e.isLogin}),l.a.createElement(p.a,{className:"mt-5",fluid:!0},l.a.createElement(d.a,{className:"sectionTitles justify-content-center"},l.a.createElement("h3",null,"Latest Items")),m,l.a.createElement(d.a,null,l.a.createElement(f.c,{to:"/items",className:"moreButton"},"See More...")),l.a.createElement(S,null)))},x=t(62),I=t(674),A=t(673),D=function(e){return l.a.createElement("div",null,l.a.createElement(I.a,{className:"color-nav",sticky:"top"},l.a.createElement(A.a,{className:"mr-auto"},l.a.createElement(I.a.Brand,{className:"color-nav"},"! Waste"),l.a.createElement(A.a.Link,{className:"color-nav",as:f.b,to:"/"},"Home"),l.a.createElement(A.a.Link,{className:"color-nav",as:f.b,to:"/items"},"All Items")),l.a.createElement(A.a,null," ",e.user?l.a.createElement(l.a.Fragment,null," ",l.a.createElement(A.a.Link,{className:"color-nav",as:f.b,to:"/profile/".concat(e.user._id)},e.user.name),l.a.createElement(A.a.Link,{className:"color-nav",as:f.b,to:"/logout",onClick:e.logOut},"Log out")):l.a.createElement(l.a.Fragment,null,l.a.createElement(A.a.Link,{className:"color-nav",as:f.b,to:"/signin"},"Login"),l.a.createElement(A.a.Link,{className:"color-nav",as:f.b,to:"/signup"},"Signup")))))},z=t(40),_=t(31),F=t(675),T=t(670),B=t(667),G=function(e){var a=Object(n.useState)({}),t=Object(u.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(u.a)(o,2),i=s[0],m=s[1],p=function(e){var a=e.target,t=a.name,n=a.value;r(Object(_.a)({},c,Object(z.a)({},t,n)))};return l.a.createElement("div",null,i&&l.a.createElement(F.a,{variant:"danger"},"the email used . plz change the email"),l.a.createElement(d.a,{className:"sectionTitles justify-content-center"},l.a.createElement("h3",null,"Sign up")),l.a.createElement(T.a,null,l.a.createElement(d.a,{className:"justify-content-center"},l.a.createElement(E.a,{md:4,className:"signMargin"},l.a.createElement(T.a.Row,{className:"my-4"},l.a.createElement(E.a,{md:12},l.a.createElement(T.a.Label,null,"Name"),l.a.createElement(T.a.Control,{placeholder:"Name",name:"name",onChange:function(e){return p(e)}}))),l.a.createElement(T.a.Row,{className:"my-3"},l.a.createElement(T.a.Group,{as:E.a,controlId:"formGridEmail"},l.a.createElement(T.a.Label,null,"Email"),l.a.createElement(T.a.Control,{type:"email",placeholder:"Enter email",name:"email",onChange:function(e){return p(e)}})),l.a.createElement(T.a.Group,{as:E.a,controlId:"formGridPassword"},l.a.createElement(T.a.Label,null,"Password"),l.a.createElement(T.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:function(e){return p(e)}}))),l.a.createElement(B.a,{className:"formButton",type:"submit",onClick:function(a){return function(a){a.preventDefault(),h.a.post("/api/signup",c).then((function(a){a.data.register?e.history.push("/signin"):(m(!0),setTimeout((function(){m(!1)}),4e3))})).catch((function(e){return console.log(e)}))}(a)}},"Sign up")))))},R=function(e){var a=Object(n.useState)({}),t=Object(u.a)(a,2),c=t[0],r=t[1],o=function(e){var a=e.target,t=a.name,n=a.value;r(Object(_.a)({},c,Object(z.a)({},t,n)))};Object(n.useEffect)((function(){}));return l.a.createElement("div",null,l.a.createElement(d.a,{className:"sectionTitles justify-content-center"},l.a.createElement("h3",null,"Sign in")),l.a.createElement(T.a,null,l.a.createElement(d.a,{className:"justify-content-center"},l.a.createElement(E.a,{md:4,className:"signMargin"},l.a.createElement(T.a.Row,null,l.a.createElement(T.a.Group,{as:E.a,controlId:"formGridEmail"},l.a.createElement(T.a.Label,null,"Email"),l.a.createElement(T.a.Control,{type:"email",placeholder:"Enter email",name:"email",onChange:function(e){return o(e)}}))),l.a.createElement(T.a.Row,null,l.a.createElement(T.a.Group,{as:E.a,controlId:"formGridPassword"},l.a.createElement(T.a.Label,null,"Password"),l.a.createElement(T.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:function(e){return o(e)}}))),l.a.createElement(B.a,{className:"formButton",type:"submit",onClick:function(a){return function(a){a.preventDefault(),h.a.post("/api/signin",c).then((function(a){a.data.token?(localStorage.setItem("token",a.data.token),e.userLogin(),e.history.push("/items")):console.log("email or password is not correct")})).catch((function(e){return console.log(e)}))}(a)}},"Sign in")))))},M=t(108),H=t.n(M),P=t(192),U=t(668),W=t(142),J=t.n(W);t(655);J.a.initializeApp({apiKey:"AIzaSyBYqBmLnPqRaKkaySQyRLZzHVzu6N-wRAU",authDomain:"waste-e300c.firebaseapp.com",databaseURL:"https://waste-e300c.firebaseio.com",projectId:"waste-e300c",storageBucket:"waste-e300c.appspot.com",messagingSenderId:"45352779679",appId:"1:45352779679:web:a873385560daa1d66987aa",measurementId:"G-QYTJ1R6Z24"});var q=J.a.storage(),K=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={user:null,image:""},e.getUser=function(){var a=Object(P.a)(H.a.mark((function a(t){var n;return H.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.a.get("/api/profile/".concat(e.props.match.params.id));case 3:n=a.sent,e.setState({user:n.data.user,image:n.data.user.image}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0.response);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}(),e.changeHandler=function(a){var t=Object(_.a)({},e.state);t[a.target.name]=a.target.value,e.setState(t),console.log(t)},e.updateHandler=Object(P.a)(H.a.mark((function a(){var t;return H.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e.state),a.prev=1,a.next=4,h.a.put("/api/profile/".concat(e.props.match.params.id),e.state);case 4:t=a.sent,console.log(t),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0.response);case 11:case"end":return a.stop()}}),a,null,[[1,8]])}))),e.handleImageAsFile=function(a){var t=a.target.files[0];console.log("start of upload");var n=t;""===n&&console.error("not an image, the image file is a ".concat(typeof n)),q.ref("/images/".concat(n.name)).put(t).on("state_changed",(function(e){console.log(e)}),(function(e){console.log(e)}),(function(){q.ref("images").child(n.name).getDownloadURL().then((function(a){e.setState(Object(_.a)({},e.state,{image:a}))}))}))},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this;return console.log(this.state),l.a.createElement("div",{id:"prof"},l.a.createElement(p.a,null,this.state.user&&l.a.createElement(U.a,{roundedCircle:!0,src:this.state.image}),l.a.createElement(T.a.Group,null,l.a.createElement(T.a.Label,null,"Name"),l.a.createElement(T.a.Control,{onChange:this.changeHandler,name:"name",value:this.state.user?this.state.user.name:""})),l.a.createElement(T.a.Group,null,l.a.createElement(T.a.Label,null,"prfile picture"),l.a.createElement(T.a.File,{id:"custom-file",label:"Custom file input",custom:!0,type:"file",onChange:function(a){return e.handleImageAsFile(a)}})),l.a.createElement(B.a,{variant:"primary",type:"submit",onClick:this.updateHandler,block:!0},"Update")))}}]),t}(n.Component),Q=t(193),V=t.n(Q),Z=t(318),Y=t.n(Z),$=function(e){var a=Object(n.useState)({}),t=Object(u.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),i=s[0],m=s[1],g=Object(n.useState)({imgUrl:""}),f=Object(u.a)(g,2),b=(f[0],f[1]),v=function(e){var a=e.target,t=a.name,n=a.value;r(Object(_.a)({},c,Object(z.a)({},t,n)))},y=function(e,a){r(Object(_.a)({},c,Object(z.a)({},e,a)))},j={center:{lat:23.8859,lng:45.0792},zoom:6};return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"sectionTitles justify-content-center"},l.a.createElement("h3",null,"Create Item")),l.a.createElement(p.a,{className:"signMargin"},l.a.createElement(d.a,{className:"mb-5 mx-0"},l.a.createElement(E.a,{md:8},l.a.createElement(T.a,{className:"mt-5 mr-0"},l.a.createElement(d.a,{className:"justify-content-center mt-5"},l.a.createElement(E.a,{md:8},l.a.createElement(T.a.Row,{className:"my-4"},l.a.createElement(E.a,{md:12},l.a.createElement(T.a.Label,null,"Name"),l.a.createElement(T.a.Control,{placeholder:"Name",name:"name",onChange:function(e){return v(e)}}))),l.a.createElement(T.a.Row,{className:"my-4"},l.a.createElement(E.a,{md:12},l.a.createElement(T.a.Label,null,"Image"),l.a.createElement(T.a.File,{id:"custom-file",label:"Custom file input",custom:!0,type:"file",onChange:function(e){return function(e){var a=e.target.files[0];m((function(e){return a})),console.log("start of upload"),""===i&&console.error("not an image, the image file is a ".concat(typeof i)),q.ref("/images/".concat(i.name)).put(a).on("state_changed",(function(e){console.log(e)}),(function(e){}),(function(){q.ref("images").child(i.name).getDownloadURL().then((function(e){console.log(e),b({image:e}),r(Object(_.a)({},c,{image:e}))}))}))}(e)}}))),l.a.createElement(T.a.Row,{className:"my-4"},l.a.createElement(E.a,{md:12},l.a.createElement(T.a.Group,{controlId:"date"},l.a.createElement(T.a.Label,null,"Exp Date"),l.a.createElement(T.a.Control,{type:"date",style:{width:"100%"},name:"expiration_date",onChange:function(e){return v(e)}})))),l.a.createElement(T.a.Group,{controlId:"formGridAddress"},l.a.createElement(T.a.Label,null,"Address"),l.a.createElement(T.a.Control,{placeholder:"1234 Main St",name:"address",onChange:function(e){return v(e)}})),l.a.createElement(T.a.Label,null,"Time-From"),l.a.createElement(V.a,{className:"form-control",clearAriaLabel:null,disableClock:!0,clockIcon:null,locale:"sv-sv",name:"time_from",onChange:function(e){return y("time_from",e)}}),l.a.createElement(T.a.Label,null,"Time-Till"),l.a.createElement(V.a,{className:"form-control",clearAriaLabel:null,disableClock:!0,clockIcon:null,locale:"sv-sv",name:"time_till",onChange:function(e){return y("time_till",e)}}),l.a.createElement(B.a,{className:"mt-5 mr-1 formButton",type:"submit",onClick:function(a){return function(a){a.preventDefault(),h.a.post("/api/home/create",c,{headers:{token:localStorage.getItem("token")}}).then((function(a){e.history.push("/items")})).catch((function(e){return console.log(e.response)}))}(a)}},"Create Item"))))),l.a.createElement(E.a,{md:4,id:"marginLeft"},l.a.createElement("div",{className:"mt-5",style:{height:"79%",width:"100%"}},l.a.createElement(Y.a,{bootstrapURLKeys:{key:"AIzaSyCVCIuwNO1D5Qr2qyD3fWycf97sJcTyTx8"},defaultCenter:j.center,defaultZoom:j.zoom,onClick:function(e){return function(e){var a=e.lat,t=e.lng;r(Object(_.a)({},c,{lat:a,lng:t})),console.log("lat: "+a),console.log("lng: "+t)}(e)}}))))))},X=t(319),ee=t.n(X),ae=t(147),te=t(672),ne=t(676),le=t(669),ce=t(320),re=t.n(ce),oe=t(321);var se=Object(ae.GoogleApiWrapper)({apiKey:"AIzaSyCVCIuwNO1D5Qr2qyD3fWycf97sJcTyTx8"})((function(e){var a=Object(n.useState)(null),t=Object(u.a)(a,2),c=t[0],r=t[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),i=s[0],m=s[1],g=Object(n.useState)({}),f=Object(u.a)(g,2),b=f[0],v=f[1],y=Object(n.useState)(parseFloat(23.8859)),j=Object(u.a)(y,2),k=j[0],N=j[1],O=Object(n.useState)(parseFloat(45.0792)),w=Object(u.a)(O,2),C=w[0],S=w[1],L=Object(n.useState)("true"),x=Object(u.a)(L,2),I=x[0],A=x[1];Object(n.useEffect)((function(){h.a.get("/api/home/".concat(e.match.params.id),{headers:{token:localStorage.getItem("token")}}).then((function(e){r(e.data.item),null!=e.data.item.lat&&null!=e.data.item.lng&&(N(e.data.item.lat),S(e.data.item.lng)),m(e.data.item.comments),A(e.data.item.isAvailble)})).catch((function(e){return console.log(e)}))}));var D=i.map((function(e){return l.a.createElement(te.a,{className:"comment replay"},l.a.createElement(te.a.Avatar,{src:e.user.image?e.user.image:"https://react.semantic-ui.com/images/avatar/small/matt.jpg"}),l.a.createElement(te.a.Content,null,l.a.createElement(te.a.Author,{as:"a"},e.user.name),l.a.createElement(te.a.Metadata,null,l.a.createElement("div",null,l.a.createElement(re.a,{interval:3e4,fromNow:!0},e.createdAt))),l.a.createElement(te.a.Text,null,e.comment)))}));return l.a.createElement("div",{id:"itemspage"},l.a.createElement(d.a,{className:"sectionTitles justify-content-center"},l.a.createElement("h3",null,"Item")),l.a.createElement(p.a,{className:"signMargin"},c&&l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"mb-5"},l.a.createElement(E.a,{xs:6,md:4},l.a.createElement(U.a,{className:"mb-3",width:200,height:200,src:c.image,rounded:!0}),l.a.createElement("div",{className:"itemInfoGrid"},l.a.createElement("h4",{className:"itemInfo"},"Name :"),l.a.createElement("h4",null,c.name),l.a.createElement("h4",{className:"itemInfo"},"Address:"),l.a.createElement("h4",null,c.address),l.a.createElement("h4",{className:"itemInfo"},"Expired Date:"),l.a.createElement("h4",null,c.expiration_date),l.a.createElement("h4",{className:"itemInfo"},"Time to Pick :"),l.a.createElement("h4",null," ",c.time_from," - ",c.time_till)),I?c.user===Object(oe.decode)(localStorage.token).user._id?"you can not pick your item !!":l.a.createElement(B.a,{className:"formButton",type:"submit",onClick:function(a){h.a.put("/api/home/".concat(e.match.params.id,"/availble"),{},{headers:{token:localStorage.getItem("token")}}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))}}," ","Pick it"," "):"not available for you"),l.a.createElement(E.a,{xs:6,md:8},l.a.createElement(ae.Map,{google:e.google,zoom:6,style:{width:"90%",height:"79%"},initialCenter:{lat:parseFloat(k),lng:parseFloat(C)}},l.a.createElement(ae.Marker,{position:{lat:k,lng:C}})))),l.a.createElement(d.a,null,l.a.createElement(ne.a,{className:"mt-5 ml-3",as:"h3",dividing:!0},"Comments")),l.a.createElement(d.a,{className:"my-5 justify-content-center"},l.a.createElement(E.a,{md:8},l.a.createElement(te.a.Group,null,D,l.a.createElement(le.a,null,l.a.createElement(le.a.TextArea,{className:"textArea",name:"comment",onChange:function(e){return function(e){var a=e.target,t=a.name,n=a.value;v(Object(_.a)({},b,Object(z.a)({},t,n)))}(e)}}),l.a.createElement(B.a,{labelPosition:"left",className:"formButton",primary:!0,onClick:function(a){return function(a){a.preventDefault(),h.a.post("/api/home/".concat(e.match.params.id,"/comment"),b,{headers:{token:localStorage.getItem("token")}}).then((function(a){e.history.push("/items/".concat(e.match.params.id))})).catch((function(e){return console.log(e)}))}(a)}},"Add Comment"))))))))})),ie=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={user:null,isLogin:!1,loading:!1},e.logoutHandler=function(a){a.preventDefault(),localStorage.removeItem("token"),e.setState({user:null,isLogin:!1})},e.userLogin=function(){if(localStorage.token){var a=localStorage.token,t=ee()(a,"SECRET").user;e.setState({user:t,isLogin:!0,loading:!0})}},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.userLogin()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(D,{user:this.state.user,isLogin:this.state.isLogin,userLogin:this.userLogin,logOut:this.logoutHandler}),l.a.createElement(x.d,null,l.a.createElement(x.b,{exact:!0,path:"/",render:function(a){return l.a.createElement(L,Object.assign({},a,{isLogin:e.state.isLogin}))}}),l.a.createElement(x.b,{exact:!0,path:"/items",render:function(a){return l.a.createElement(k,Object.assign({},a,{isLogin:e.state.isLogin}))}}),l.a.createElement(x.b,{path:"/signin",render:function(a){return l.a.createElement(R,Object.assign({},a,{userLogin:e.userLogin}))}}),l.a.createElement(x.b,{path:"/signup",component:G}),this.state.isLogin?l.a.createElement(l.a.Fragment,null,l.a.createElement(x.b,{exact:!0,path:"/items/create",render:function(a){return l.a.createElement($,Object.assign({},a,{user:e.state.user}))}}),l.a.createElement(x.b,{path:"/profile/:id",component:K}),l.a.createElement(x.b,{path:"/items/:id",component:se})," "):l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{to:"/signin"})," ")),l.a.createElement("footer",{id:"footer"}," \xa9 2020 , Made with ",l.a.createElement("span",null,"\ud83d\udda4")," by Venus Team ."))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f.a,null,l.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[349,1,2]]]);
//# sourceMappingURL=main.c4e4999c.chunk.js.map