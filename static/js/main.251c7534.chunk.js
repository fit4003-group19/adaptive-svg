(this["webpackJsonpadaptive-svg"]=this["webpackJsonpadaptive-svg"]||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(10),i=n.n(r),s=(n(72),n.p,n(73),n(124)),a=n(91),l=n(24),u=n(3),j=Object(o.createContext)(),b=function(e){var t=Object(o.useState)(),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(o.useRef)(null);return Object(u.jsx)(j.Provider,{value:{mapPanZoom:c,setMapPanZoom:r,rootFocus:i,focusRoot:function(){i.current&&i.current.focus()}},children:e.children})},d=n(61),f=n(57),O=n.n(f),m=n(77);var x=function(){var e=Object(o.useRef)(null),t=Object(o.useContext)(j),n=(t.mapPanZoom,t.setMapPanZoom),c=t.focusRoot,r=Object(a.a)((function(e){return{map:{flex:3,margin:10,border:"8px black"},svg:{height:"100%",width:"100%"}}}))();return Object(u.jsx)(O.a,{className:r.map,handleKeys:["esc"],onKeyEvent:c,children:Object(u.jsx)(d.a,{className:r.svg,src:"".concat("/adaptive-svg","/svg/focus-test.svg"),onError:function(e){},onLoad:function(t){var o=m(e.current,{zoomEnabled:!0,dblClickZoomEnabled:!1});o.zoomAtPoint(1,{x:447,y:183}),n(o)},innerRef:e})})},p=n(26),h=n(129),v=n(136),g=n(134),y=n(133),C=n(132),k=n(135),E=n(130),R=n(131),S=n(127),N=n(36),w=n(60),D=n.n(w),F=n(128),P=n(137),Z=n(139),q=n(126),B=n(138);var I=Object(o.createContext)(),M=function(e){var t=function(){var e=[{question:"Do you experience a motor impairment?",response:null},{question:"Do you experience a colour impairment?",response:null},{question:"Do you have low vision?",response:null},{question:"Do you experience total blindness?",response:null},{question:"Do you have difficulty reading?",response:null},{question:"Do you have difficulties operating doors?",response:null},{question:"Do obstacles disrupt your indoor navigation?",response:null}],t=Object(o.useState)(null),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(o.useState)(null),s=Object(l.a)(i,2),a=s[0],u=s[1],j="cachedResponse";Object(o.useEffect)((function(){var t=b()||e,n=t.map((function(e){return Object(p.a)({},e)})),o=t.map((function(e){return Object(p.a)({},e)}));return r(n),u(o),function(){}}),[]);var b=function(){if("undefined"!==typeof localStorage)try{return JSON.parse(localStorage.getItem(j))}catch(e){console.error(e)}return null},d=function(e){return"undefined"!==typeof localStorage&&(localStorage.setItem(j,JSON.stringify(e)),!0)};return{editableResponse:c,commitedResponse:a,makeEdits:function(e,t){r(c.map((function(n,o){return e==o&&(n.response=t),n})))},commitEdits:function(){var e=c.map((function(e){return Object(p.a)({},e)}));u(e),d(e)},resetEdits:function(){var e=a.map((function(e){return Object(p.a)({},e)}));r(e)}}}(),n=t.editableResponse,c=t.commitedResponse,r=t.makeEdits,i=t.commitEdits,s=t.resetEdits;return Object(u.jsx)(I.Provider,{value:{editableResponse:n,commitedResponse:c,makeEdits:r,commitEdits:i,resetEdits:s,getBitFlag:function(e){if(e){for(var t=0,n=0;n<e.length;){t+=("yes"==e[n].response?1:0)*Math.pow(2,n),n++}return t}return 0}},children:e.children})},z=Object(s.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),J=function(e){var t=e.onChange,n=e.value;return Object(u.jsx)(B.a,{component:"fieldset",children:Object(u.jsxs)(Z.a,{"aria-label":"gender",name:"gender1",value:n,onChange:t,row:!0,children:[Object(u.jsx)(q.a,{value:"yes",control:Object(u.jsx)(P.a,{}),label:"Yes"}),Object(u.jsx)(q.a,{value:"no",control:Object(u.jsx)(P.a,{}),label:"No"})]})})},L=c.a.forwardRef((function(e,t){return Object(u.jsx)(F.a,Object(p.a)({direction:"up",ref:t},e))}));function Q(){var e=Object(o.useContext)(I),t=e.editableResponse,n=e.makeEdits,r=e.commitEdits,i=e.resetEdits,s=z(),a=Object(o.useState)(!1),j=Object(l.a)(a,2),b=j[0],d=j[1],f=function(){i(),d(!1)};return Object(u.jsxs)("div",{children:[Object(u.jsx)(h.a,{variant:"outlined",color:"primary",onClick:function(){d(!0)},children:"Open Questionnaire"}),Object(u.jsxs)(v.a,{fullScreen:!0,open:b,onClose:f,TransitionComponent:L,children:[Object(u.jsx)(E.a,{className:s.appBar,children:Object(u.jsxs)(R.a,{children:[Object(u.jsx)(S.a,{edge:"start",color:"inherit",onClick:f,"aria-label":"close",children:Object(u.jsx)(D.a,{})}),Object(u.jsx)(N.a,{variant:"h6",className:s.title,children:"Map Questionnaire"}),Object(u.jsx)(h.a,{autoFocus:!0,color:"inherit",onClick:function(){r(),d(!1)},children:"save"})]})}),Object(u.jsx)(C.a,{children:t&&t.map((function(e,t){return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsxs)(y.a,{children:[Object(u.jsx)(g.a,{primary:e.question}),Object(u.jsx)(J,{onChange:function(e){n(t,e.target.value)},value:e.response})]}),Object(u.jsx)(k.a,{})]},t)}))})]})]})}var T=Object(s.a)((function(e){return{attributes:{flex:1,margin:10,display:"flex",flexDirection:"column",backgroundColor:"whitesmoke"},attribute:{flex:4,margin:10,stroke:"black",strokeWidth:5},buttons:{flex:1,margin:10,display:"flex",justify:"space-between",flexDirection:"row"}}}));var K=function(){var e=T(),t=Object(o.useContext)(j),n=t.mapPanZoom,c=(t.setMapPanZoom,t.rootFocus),r=Object(o.useContext)(I),i=r.commitedResponse,s=r.getBitFlag;return Object(u.jsxs)("div",{className:e.attributes,children:[Object(u.jsx)("div",{className:e.attribute,children:Object(u.jsxs)("label",{ref:c,children:["Questionnaire",Object(u.jsx)(Q,{})]})}),Object(u.jsxs)("div",{className:e.attribute,children:[Object(u.jsx)("h1",{children:"Bit Stuffing"}),Object(u.jsx)("h1",{children:s(i)})]}),Object(u.jsx)("div",{className:e.attribute,children:Object(u.jsx)("h1",{children:"Example Controls"})}),Object(u.jsx)("div",{className:e.buttons,children:n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("label",{children:["Zoom In",Object(u.jsx)("button",{onClick:function(){return n.zoomIn()},children:"+"})]}),Object(u.jsxs)("label",{children:["Zoom Out",Object(u.jsx)("button",{onClick:function(){return n.zoomOut()},children:"-"})]}),Object(u.jsxs)("label",{children:["Reset",Object(u.jsx)("button",{onClick:function(){return n.resetZoom()},children:"x"})]})]})})]})},A=Object(s.a)((function(e){return{root:{minHeight:"90vh",width:"100%",display:"flex",flexDirection:"row"}}}));var H=function(){A();var e=A();return Object(u.jsx)(b,{children:Object(u.jsx)(M,{children:Object(u.jsxs)("div",{className:e.root,children:[Object(u.jsx)(x,{}),Object(u.jsx)(K,{})]})})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,140)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root")),W()}},[[88,1,2]]]);
//# sourceMappingURL=main.251c7534.chunk.js.map