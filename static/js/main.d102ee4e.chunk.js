(this["webpackJsonpautomobile-frontend"]=this["webpackJsonpautomobile-frontend"]||[]).push([[0],{53:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),s=a.n(n),r=a(15),o=a.n(r),i=a(17),j=a(12),l=a(37),d={brands:[]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BRAND":return Object.assign({},e,{brands:t.payload});default:return e}},h=Object(j.c)({brandReducer:b}),O=a(7),u=a(21),x=(a(53),function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("div",{className:"content-container",children:Object(c.jsx)("div",{className:"header__content",children:Object(c.jsx)(u.a,{className:"header__title",to:"/",children:Object(c.jsx)("h1",{children:"Automobile"})})})})})}),p=(a(55),a(38)),m=a(39),f=a(43),N=a(42),v=a(78),g=a(79),L=a(80),y=a(81),_=a(82),w=a(90),S=a(83),D=a(41),R=a(84),T=a(85),C=a(86),E=a(87),A=a(89),U=a(14),k=a.n(U),P=a(25),I=a(40),B=a.n(I);a(35).config();var F=B.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/automobile-frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_PUBLIC_PATH:"http://localhost:8000/upload/"}).API_URL||"http://localhost:8000/api/"});a(35).config();var G={baseURL:"http://localhost:8000/upload/"},H=a(88),K=function(e){Object(f.a)(a,e);var t=Object(N.a)(a);function a(e){var c;return Object(p.a)(this,a),(c=t.call(this,e)).getLocation=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(c.getCoordinates,c.handleLocation):alert("hello")},c.handleLocation=function(e){switch(e.code){case e.PERMISSION_DENIED:alert("The Request For Geolocation is denied");break;case e.POSITION_UNAVAILABLE:alert("Showroom Location is not available.");break;case e.TIMEOUT:alert("user location was timed out.");break;case e.UNKNOWN_ERROR:alert("Unknown error access")}},c.getCoordinates=function(e){var t=e.coords.latitude+" , "+e.coords.longitude;c.setState({searchLocation:t})},c.onSearchChange=function(e){var t;c.props.dispatch((t=e,function(){var e=Object(P.a)(k.a.mark((function e(a){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("/search/".concat(t));case 2:return(c=e.sent)&&a({type:"GET_BRAND",payload:c.data}),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){var t=e.data.brandData;c.setState({rowData:t})}))},c.componentDidMount=function(){c.props.dispatch(function(){var e=Object(P.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("/brand");case 2:return(a=e.sent)&&t({type:"GET_BRAND",payload:a.data}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){var t=e.data;c.setState({rowData:t})}))},c.state={latitude:null,longitude:null,rowData:[],searchLocation:[],searchData:[]},c}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsx)(v.a,{children:Object(c.jsx)(g.a,{sm:"12",children:Object(c.jsx)(L.a,{className:"pt-1",children:Object(c.jsx)(y.a,{children:Object(c.jsxs)(g.a,{sm:"12",children:[Object(c.jsx)(g.a,{sm:"12",md:{size:4,offset:4},style:{paddingTop:20},children:Object(c.jsxs)(_.a,{children:[Object(c.jsx)(w.a,{type:"text",id:"brand",placeholder:"Search showroom",onChange:function(t){return e.onSearchChange(t.target.value)}}),Object(c.jsx)("p",{children:this.state.searchLocation}),Object(c.jsx)(S.a,{addonType:"append",children:Object(c.jsx)(D.a,{children:"Search"})})]})}),Object(c.jsx)(v.a,{className:"pt-4",children:this.state.rowData?this.state.rowData&&this.state.rowData.map((function(e,t){return Object(c.jsx)(g.a,{lg:"4",sm:"12",children:Object(c.jsxs)(L.a,{body:!0,outline:!0,style:{borderColor:"#333"},className:"mt-4",children:[Object(c.jsx)(R.a,{className:"justify-content-between",children:Object(c.jsxs)("div",{className:"card-heading",children:[Object(c.jsx)(T.a,{children:Object(c.jsx)("h6",{children:Object(c.jsx)("strong",{children:e.brandName})})}),Object(c.jsx)(C.a,{children:Object(c.jsxs)(E.a,{href:e.locationLink,children:[Object(c.jsx)(H.a,{size:"15"})," ","\xa0 Find Location"]})})]})}),Object(c.jsxs)(y.a,{children:[Object(c.jsx)(A.a,{variant:"bottom",src:G.baseURL+""+e.branchLogo}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"justify-content-between",children:[Object(c.jsx)("i",{children:"Branch Name:\xa0\xa0"}),Object(c.jsx)("span",{className:"text-success",children:e.branchName}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("i",{children:"Location:\xa0\xa0"}),Object(c.jsx)("span",{className:"text-secondary",children:e.location}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("i",{children:"Contact:\xa0\xa0"}),Object(c.jsx)("span",{className:"text-info",children:e.contact})]})]})]})},t)})):this.state.searchData&&this.state.searchData.map((function(e,t){return Object(c.jsx)(g.a,{lg:"4",sm:"12",children:Object(c.jsxs)(L.a,{body:!0,outline:!0,style:{borderColor:"#333"},className:"mt-4",children:[Object(c.jsx)(R.a,{className:"justify-content-between",children:Object(c.jsxs)("div",{className:"card-heading",children:[Object(c.jsx)(T.a,{children:Object(c.jsx)("h6",{children:Object(c.jsx)("strong",{children:e.brandName})})}),Object(c.jsx)(C.a,{children:Object(c.jsxs)(E.a,{href:e.locationLink,children:[Object(c.jsx)(H.a,{size:"15"})," ","\xa0 Find Location"]})})]})}),Object(c.jsxs)(y.a,{children:[Object(c.jsx)(A.a,{variant:"bottom",src:G.baseURL+""+e.branchLogo}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"justify-content-between",children:[Object(c.jsx)("i",{children:"Branch Name:\xa0\xa0"}),Object(c.jsx)("span",{className:"text-success",children:e.branchName}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("i",{children:"Location:\xa0\xa0"}),Object(c.jsx)("span",{className:"text-secondary",children:e.location}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("i",{children:"Contact:\xa0\xa0"}),Object(c.jsx)("span",{className:"text-info",children:e.contact})]})]})]})},t)}))})]})})})})})}}]),a}(s.a.Component),W=Object(i.b)((function(e){return{}}))(K),z=a(9),M=Object(z.b)(),q=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(O.b,{history:M,children:Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{}),Object(c.jsx)(O.a,{path:"/",exact:!0,component:W})]})})})},J=Object(j.d)(h,Object(j.a)(l.a));o.a.render(Object(c.jsx)(i.a,{store:J,children:Object(c.jsx)(q,{})}),document.querySelector("#root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.d102ee4e.chunk.js.map