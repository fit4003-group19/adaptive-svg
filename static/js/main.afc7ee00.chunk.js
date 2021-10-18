(this["webpackJsonpadaptive-svg"]=this["webpackJsonpadaptive-svg"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},125:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(19),s=n.n(r),o=(n(113),n.p,n(114),n(6)),i=n(1),l=Object(c.createContext)(),u=function(e){var t=Object(c.useState)(),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)("".concat("/adaptive-svg","/svg/campus_map_prototype--demo.svg")),u=Object(o.a)(s,2),d=u[0],j=u[1],b=Object(c.useRef)(null),f=Object(c.useState)(!1),p=Object(o.a)(f,2),O=p[0],h=p[1],m=Object(c.useState)("No map selected!"),g=Object(o.a)(m,2),x=g[0],y=g[1];return Object(i.jsx)(l.Provider,{value:{mapPanZoom:a,setMapPanZoom:r,rootFocus:b,focusRoot:function(){b.current&&b.current.focus()},svgPath:d,setSvgPath:j,patterns:O,setPatterns:h,mapTitle:x,setMapTitle:y},children:e.children})},d=n(9);var j=Object(c.createContext)(),b=function(e){var t=function(){var e=[{question:"Do you experience a mobility impairment?",response:null},{question:"Do you experience a colour impairment?",response:null},{question:"Do you have low vision?",response:null},{question:"Do you have difficulty reading?",response:null},{question:"Do you have difficulty operating doors?",response:null},{question:"Do obstacles disrupt your indoor navigation?",response:null},{question:"Do you have difficulty locating toilets in large buildings?",response:null}],t=Object(c.useState)(null),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(null),i=Object(o.a)(s,2),l=i[0],u=i[1],j="cachedResponse";Object(c.useEffect)((function(){var t=b()||e,n=t.map((function(e){return Object(d.a)({},e)})),c=t.map((function(e){return Object(d.a)({},e)}));return r(n),u(c),function(){}}),[]);var b=function(){if("undefined"!==typeof localStorage)try{return JSON.parse(localStorage.getItem(j))}catch(e){console.error(e)}return null},f=function(e){return"undefined"!==typeof localStorage&&(localStorage.setItem(j,JSON.stringify(e)),!0)};return{editableResponse:a,commitedResponse:l,makeEdits:function(e,t){r(a.map((function(n,c){return e==c&&(n.response=t),n})))},commitEdits:function(){var e=a.map((function(e){return Object(d.a)({},e)}));u(e),f(e)},resetEdits:function(){var e=l.map((function(e){return Object(d.a)({},e)}));r(e)}}}(),n=t.editableResponse,a=t.commitedResponse,r=t.makeEdits,s=t.commitEdits,l=t.resetEdits,u=Object(c.useMemo)((function(){return a?function(e){if(e){for(var t=0,n=0;n<e.length;)t+=("yes"==e[n].response?1:0)*Math.pow(2,n),n++;return t}return 0}(a):0}),[a]);return Object(i.jsx)(j.Provider,{value:{editableResponse:n,commitedResponse:a,makeEdits:r,commitEdits:s,resetEdits:l,questionnaireBitField:u},children:e.children})},f={obstacle:{fullName:"Obstacle",gradientKey:"gradient--obstacle",icon:"".concat("/adaptive-svg","/icons/obstacle.svg")},tactile:{fullName:"Tactile Flooring",gradientKey:"gradient--tactile",icon:"".concat("/adaptive-svg","/icons/tactile.svg")},entry:{fullName:"Accesible Entry",gradientKey:"gradient--entry",icon:"".concat("/adaptive-svg","/icons/entry.svg")},stairs:{fullName:"Stairs",gradientKey:"gradient--stairs",icon:"".concat("/adaptive-svg","/icons/stairs.svg")},lift:{fullName:"Lift",gradientKey:"gradient--lift",icon:"".concat("/adaptive-svg","/icons/lift.svg")},"support-center":{fullName:"Support Center",gradientKey:"gradient--support-center",icon:"".concat("/adaptive-svg","/icons/support-center.svg")},toilet:{fullName:"Toilet",gradientKey:"gradient--toilet",icon:"".concat("/adaptive-svg","/icons/toilet.svg")},"accessible-toilet":{fullName:"Accessible Toilet",gradientKey:"gradient--accessible-toilet",icon:"".concat("/adaptive-svg","/icons/accessible-toilet.svg")},unlisted:{fullName:"Unlisted",gradientKey:"gradient--unlisted",icon:"".concat("/adaptive-svg","/icons/unlisted.svg")},inactive:{fullName:"Point of Interest",gradientKey:"gradient--inactive",icon:"".concat("/adaptive-svg","/icons/poi.svg")},passage:{fullName:"Passage",gradientKey:"gradient--passage",icon:"".concat("/adaptive-svg","/icons/passage.svg")}},p=function(){return{getTranslation:function(e){return f[e]},getClassKeys:function(){return Object.keys(f)},getLayerClassIterator:function(e){Object.entries(f).forEach((function(t){var n=Object(o.a)(t,2),c=n[0],a=n[1];e(c,a)}))}}},O=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(c.useState)(null),a=Object(o.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(null),l=Object(o.a)(i,2),u=l[0],d=l[1],j=p(),b=j.getLayerClassIterator,f=j.getClassKeys;Object(c.useEffect)((function(){u&&e.current&&s(O(u))}),[u]);var O=function(t){var n={};return Object.entries(e.current).forEach((function(e){var c=Object(o.a)(e,2),a=c[0],r=c[1];a in n||(n[a]={primary:null,secondary:null}),n[a].primary=t[r.primary],n[a].secondary=t[r.secondary]})),n},h=function(e,t,n,c,a){if(!f().includes(e))throw new Error("Not a valid key; "+e);if("primary"!==t&&"secondary"!==t)throw new Error("Not a valid colorType; "+t);if(e in c||(c[e]={}),t in c[e]||(c[e][t]=null),n){var r=a.findIndex((function(e){return e===n}));r>-1?c[e][t]=r:(a.push(n),c[e][t]=a.length-1)}};return{layerColors:r,setLayerColors:s,colorPalette:u,setColorPallete:d,resetColorPalette:function(){d(t.current)},pullLayerStylesFromSVG:function(n){var c={},a=[];b((function(e,t){var r=t.gradientKey,s=n.getElementById(r);if(s){var o=s.querySelector("[offset='0%']"),i=s.querySelector("[offset='100%']"),l=o?o.getAttribute("stop-color"):null,u=i?i.getAttribute("stop-color"):null;h(e,"primary",l,c,a),h(e,"secondary",u,c,a)}})),e.current=c,t.current=a,d(a)},pushLayerStylesToSVG:function(e,t){b((function(n,c){var a=c.gradientKey,r=e.getElementById(a);if(r){var s=t[n].primary,o=t[n].secondary,i=r.querySelectorAll("stop");if(2==i.length)i[0].setAttribute("stop-color",s),i[1].setAttribute("stop-color",o);else{if(4!=i.length)throw new Error("Invalid Number of Color Stops (Should be 2 or 4); Number of Stops Provided "+i.length);i[0].setAttribute("stop-color",s),i[1].setAttribute("stop-color",s),i[2].setAttribute("stop-color",o),i[3].setAttribute("stop-color",o)}}}))}}},h=["Arial","Atkinson Hyperlegible","OpenDyslexic"],m=["bold","normal"],g=function(){var e=Object(c.useState)(h[0]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(m[0]),s=Object(o.a)(r,2),i=s[0],l=s[1];return{selectedFontFamily:n,setSelectedFontFamily:a,layerFontFamilies:h,selectedFontWeight:i,setSelectedFontWeight:l,layerFontWeights:m}},x=Object(c.createContext)(),y=function(e){var t=Object(c.useState)({label:null,description:null,class:null}),n=Object(o.a)(t,2),a=n[0],r=n[1],s=O(),l=s.layerColors,u=s.setLayerColors,d=s.colorPalette,j=s.setColorPallete,b=s.resetColorPalette,f=s.pullLayerStylesFromSVG,p=s.pushLayerStylesToSVG,h=g(),m=h.layerFontFamilies,y=h.selectedFontFamily,v=h.setSelectedFontFamily,C=h.layerFontWeights,S=h.selectedFontWeight,F=h.setSelectedFontWeight,N=h.layerStyleSheet;return Object(i.jsx)(x.Provider,{value:{layerInfo:a,setLayerInfo:r,layerColors:l,setLayerColors:u,layerFontWeights:C,selectedFontWeight:S,setSelectedFontWeight:F,colorPalette:d,setColorPallete:j,resetColorPalette:b,pullLayerStylesFromSVG:f,pushLayerStylesToSVG:p,layerFontFamilies:m,selectedFontFamily:y,setSelectedFontFamily:v,layerStyleSheet:N},children:e.children})},v=(n(116),n(117),n(73)),C=n(25),S=n.n(C),F=function(e){var t=e.mapPanZoom;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(S.a,{handleFocusableElements:!0,handleKeys:["shift+="],onKeyEvent:function(){return t.zoomIn()}}),Object(i.jsx)(S.a,{handleFocusableElements:!0,handleKeys:["shift+-"],onKeyEvent:function(){return t.zoomOut()}}),Object(i.jsx)(S.a,{handleFocusableElements:!0,handleKeys:["r"],onKeyEvent:function(){t.fit(),t.center()}}),Object(i.jsx)(S.a,{handleFocusableElements:!0,handleKeys:["shift+right"],onKeyEvent:function(){return t.panBy({x:-20,y:0})}}),Object(i.jsx)(S.a,{handleFocusableElements:!0,handleKeys:["shift+left"],onKeyEvent:function(){return t.panBy({x:20,y:0})}}),Object(i.jsx)(S.a,{handleFocusableElements:!0,handleKeys:["shift+up"],onKeyEvent:function(){return t.panBy({x:0,y:20})}}),Object(i.jsx)(S.a,{handleFocusableElements:!0,handleKeys:["shift+down"],onKeyEvent:function(){return t.panBy({x:0,y:-20})}})]})},N=n(162),P=n(120),k=function(e){var t=e.className,n=Object(c.useRef)(null),a=Object(c.useRef)(null),r=Object(c.useContext)(l),s=r.mapPanZoom,o=r.setMapPanZoom,u=r.focusRoot,d=r.svgPath,b=r.patterns,f=r.setMapTitle,p=Object(c.useContext)(j).questionnaireBitField,O=Object(c.useContext)(x),h=O.setLayerInfo,m=O.layerColors,g=O.pullLayerStylesFromSVG,y=O.pushLayerStylesToSVG,C=O.selectedFontWeight;Object(c.useEffect)((function(){E((function(e){L(p,e)}))}),[p]),Object(c.useEffect)((function(){w()}),[b]),Object(c.useEffect)((function(){n.current&&m&&y(n.current,m)}),[m]);var k=Object(N.a)((function(e){return{font:{"& [data-layer-type='txt']":{fontFamily:e.typography.fontFamily,fontWeight:C}}}}))(),E=function(e){n.current&&n.current.querySelectorAll("[data-layer-type='layer']").forEach((function(t){e(t)}))},w=function(){a.current&&(a.current.dataset.layerPattern=b?"1":"0")},R=function(e){var t=e.target,c=(t.dataset.layerBitField,t.getAttribute("aria-labelledby")),a=t.getAttribute("aria-describedby"),r=n.current.getElementById(c),s=n.current.getElementById(a);h({label:r?r.textContent:null,description:s?s.textContent:null,class:1===t.classList.length?t.classList[0]:null})},K=function(e){h({label:null,description:null,class:null})},L=function(e,t){var n=t.dataset,c=n.layerBitField,a=n.layerState;if(c=parseInt(c),a=parseInt(a),t.classList.contains("passage"))return t.tabIndex="-1",void(t.dataset.layerState="1");if(a>-1){var r=!1;c&&(r=(e&c)>0),t.tabIndex=r?"1":"2",t.dataset.layerState=r?"1":"0"}else t.tabIndex="-1",t.dataset.layerState="-1"};return Object(i.jsxs)("div",{className:"".concat(t," map"),children:[Object(i.jsx)(F,{mapPanZoom:s}),Object(i.jsx)(S.a,{handleKeys:["esc"],onKeyEvent:u,children:Object(i.jsx)(v.a,{className:"map-svg ".concat(k.font),src:d,onError:function(e){},onLoad:function(e){f(n.current.getElementById("svg--title")?n.current.getElementById("svg--title").textContent:"Untitled"),a.current=n.current.querySelector("[data-layer-type='root']");var t=P(n.current,{zoomEnabled:!0,dblClickZoomEnabled:!1,preventMouseEventsDefault:!1});t.zoomAtPoint(1,{x:447,y:183}),o(t),g(n.current),E((function(e){e.addEventListener("focus",R),e.addEventListener("blur",K),L(p,e)})),w()},innerRef:n})})]})};var E=function(e){var t=e.className,n=Object(c.useContext)(l).setSvgPath;return Object(i.jsx)("input",{className:t,type:"file",name:"Floor Plan",onChange:function(e){e.target.files[0];var t=new FileReader;t.onload=function(e){n(e.target.result)},t.readAsDataURL(e.target.files[0])}})},w=(n(125),n(91));var R=function(e){var t=Object(c.useRef)(),n=Object(w.a)(e,t).buttonProps,a=e.children;return Object(i.jsx)("button",Object(d.a)(Object(d.a)({},n),{},{ref:t,children:a}))},K=n(164),L=n(166),I=n(167),B=n(168),T=n(169),M=n(170),q=n(171),D=function(e){var t=e.className,n=Object(c.useContext)(l),a=n.mapPanZoom,r=n.rootFocus;return console.log(r),Object(i.jsxs)("div",{className:"".concat(t," controls"),children:[Object(i.jsx)("h1",{tabIndex:"0",ref:r,children:"Controls"}),a&&Object(i.jsxs)("div",{className:"controls-buttons",children:[Object(i.jsx)(R,{onPress:function(){return a.panBy({x:20,y:0})},"aria-label":"Pan Map Left",children:Object(i.jsx)(K.a,{})}),Object(i.jsx)(R,{onPress:function(){return a.panBy({x:0,y:20})},"aria-label":"Pan Map Up",children:Object(i.jsx)(L.a,{})}),Object(i.jsx)(R,{onPress:function(){return a.panBy({x:0,y:-20})},"aria-label":"Pan Map Down",children:Object(i.jsx)(I.a,{})}),Object(i.jsx)(R,{onPress:function(){return a.panBy({x:-20,y:0})},"aria-label":"Pan Map Right",children:Object(i.jsx)(B.a,{})}),Object(i.jsx)(R,{onPress:function(){return a.zoomIn()},"aria-label":"Zoom In on Map",children:Object(i.jsx)(T.a,{})}),Object(i.jsx)(R,{onPress:function(){return a.zoomOut()},"aria-label":"Zoom Out on Map",children:Object(i.jsx)(M.a,{})}),Object(i.jsx)(R,{onPress:function(){a.fit(),a.center()},"aria-label":"Restore Map Zoom",children:Object(i.jsx)(q.a,{})})]}),Object(i.jsx)("h1",{class:"u-margin-left-auto u-margin-right-md",children:"Change Floor Plan"}),Object(i.jsx)(E,{className:"controls-file-uploader"})]})},W=(n(128),n(143)),A=(n(129),function(e){var t=e.children,n=e.left,c=e.right,a=e.className,r="1rem",s=Object(W.a)((function(e){return{label:{borderLeft:"".concat(r," solid ").concat(n),borderRight:"".concat(r," solid ").concat(c)}}}))();return Object(i.jsx)("span",{tabIndex:"0",class:"".concat(s.label," dual-color-label ").concat(a),children:t})}),Z=function(e){var t=e.className,n=Object(c.useContext)(x),a=n.layerInfo,r=n.layerColors,s=p().getTranslation,l=Object(c.useState)("blue"),u=Object(o.a)(l,2),d=u[0];u[1],Object(W.a)((function(e){return{icon:{color:d}}}))();return Object(i.jsxs)("div",{className:"".concat(t," room-information"),children:[Object(i.jsxs)("div",{className:"room-information-meta-data",children:[Object(i.jsx)("h3",{className:"room-information-header",children:"Name "}),Object(i.jsx)("span",{className:"room-information-text",children:a.label||"Nothing Selected"}),Object(i.jsx)("h3",{className:"room-information-header",children:"Description "}),Object(i.jsx)("span",{className:"room-information-text",children:a.description||"Nothing Selected"})]}),a.class&&Object(i.jsxs)("div",{className:"room-information-icon",children:[Object(i.jsx)(v.a,{src:s(a.class).icon}),Object(i.jsx)(A,{left:r[a.class].primary,right:r[a.class].secondary,children:s(a.class).fullName})]})]})},V=n(172),z=Object(N.a)((function(e){return{header:{fontFamily:e.fontFamily}}})),G=function(){var e=z(),t=Object(c.useContext)(x),n=t.colorPalette,a=t.setColorPallete,r=t.resetColorPalette,s=Object(c.useRef)(null);return Object(c.useEffect)((function(){return function(){s.current&&(clearTimeout(s.current),s.current=null)}}),[]),Object(i.jsx)("div",{children:n&&Object(i.jsxs)(i.Fragment,{children:[n.map((function(t,n){return Object(i.jsxs)("label",{className:"input-group",children:[Object(i.jsxs)("span",{className:"u-margin-right-auto ".concat(e),children:["Color #",n]}),Object(i.jsx)("input",{type:"color",value:t,onChange:function(e){!function(e,t){s.current||(s.current=setTimeout((function(){s.current=null}),22.22222222222222),a((function(n){return n.map((function(n,c){return t==c?e.target.value:n}))})))}(e,n)}})]},"color-options-".concat(n))})),Object(i.jsx)(V.a,{variant:"contained",onClick:r,children:"Reset Colors"})]})})},U=(n(130),function(){var e=Object(c.useContext)(x).layerColors,t=p().getTranslation;return Object(i.jsx)("div",{class:"option-legend",children:e&&Object.keys(e).map((function(n,c){return Object(i.jsx)(A,{className:"option-legend-label-margin",left:e[n].primary,right:e[n].secondary,children:t(n).fullName})}))})}),J=(n(131),n(48)),H=n(41),_=n(15),Q=n(93);var Y=function(e){var t=Object(H.a)(e),n=a.a.useRef(),c=Object(Q.a)(e,t,n).inputProps,r=Object(_.c)(),s=r.isFocusVisible,o=r.focusProps;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(J.a,{children:Object(i.jsx)("input",Object(d.a)(Object(d.a)(Object(d.a)({},c),o),{},{ref:n}))}),Object(i.jsxs)("svg",{width:40,height:24,"aria-hidden":"true",style:{marginRight:4},children:[Object(i.jsx)("rect",{x:4,y:4,width:32,height:16,rx:8,fill:t.isSelected?"orange":"gray"}),Object(i.jsx)("circle",{cx:t.isSelected?28:12,cy:12,r:5,fill:"white"}),s&&Object(i.jsx)("rect",{x:1,y:1,width:38,height:22,rx:11,fill:"none",stroke:"orange",strokeWidth:2})]}),e.children]})},X=(n(132),function(){var e=Object(c.useContext)(l),t=e.patterns,n=e.setPatterns;return Object(i.jsx)("div",{className:"options-pattern",children:Object(i.jsxs)("label",{className:"input-group",children:[Object(i.jsx)("span",{className:"u-margin-right-auto",children:"Turn On Patterns"}),Object(i.jsx)(Y,{onChange:function(){n((function(e){return!e}))},isSelected:t})]})})}),$=n(173),ee=(n(133),function(){var e=Object(c.useContext)(x),t=e.layerFontFamilies,n=e.selectedFontFamily,a=e.setSelectedFontFamily,r=e.layerFontWeights,s=e.selectedFontWeight,o=e.setSelectedFontWeight;return Object(i.jsxs)("div",{class:"option-fonts",children:[Object(i.jsxs)("label",{className:"input-group",children:[Object(i.jsx)("span",{className:"u-margin-right-auto",children:"Font Family"}),Object(i.jsx)("select",{name:"font",onChange:function(e){a(e.target.value)},children:t.map((function(e){return Object(i.jsx)("option",{value:e,selected:e===n,children:e},"fonts-".concat(e))}))})]}),Object(i.jsxs)("label",{className:"input-group",children:[Object(i.jsx)("span",{className:"u-margin-right-auto",children:"Font Weight"}),Object(i.jsx)("select",{name:"font",onChange:function(e){o(e.target.value)},children:r.map((function(e){return Object(i.jsx)("option",{value:e,selected:e===s,children:e},"weight-".concat(e))}))})]})]})}),te=function(e){var t=e.className;return Object(i.jsxs)("div",{className:"".concat(t," options"),children:[Object(i.jsxs)("div",{className:"u-padding-bottom-xs",children:[Object(i.jsx)("h1",{className:"u-margin-top-0 u-text-align-center",children:"Legend"}),Object(i.jsx)(U,{})]}),Object(i.jsx)($.a,{}),Object(i.jsxs)("div",{className:"u-margin-top-sm",children:[Object(i.jsx)("h1",{className:"u-margin-top-0 u-text-align-center",children:"Fonts"}),Object(i.jsx)(ee,{})]}),Object(i.jsx)($.a,{}),Object(i.jsxs)("div",{className:"u-margin-top-sm",children:[Object(i.jsx)("h1",{className:"u-margin-top-0 u-text-align-center",children:"Options"}),Object(i.jsx)(X,{})]}),Object(i.jsx)($.a,{}),Object(i.jsxs)("div",{className:"u-margin-top-sm",children:[Object(i.jsx)("h1",{className:"u-margin-top-0 u-text-align-center",children:"Colors"}),Object(i.jsx)(G,{})]})]})},ne=(n(134),n(182)),ce=n(178),ae=n(179),re=n(180),se=n(175),oe=n(176),ie=n(177),le=n(75),ue=n(70),de=n.n(ue),je=n(174),be=n(94),fe=n(80),pe=Object(W.a)((function(e){return{questionRow:{display:"flex",fontSize:20,flexDirection:"row",justifyContent:"space-between",paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5},question:{display:"flex",flexDirection:"row"}}})),Oe=a.a.createContext(null);function he(e){var t=e.children,n=e.label,c=pe(),a=Object(be.a)(e),r=Object(fe.b)(e,a),s=r.radioGroupProps,o=r.labelProps;return Object(i.jsxs)("div",Object(d.a)(Object(d.a)({},s),{},{className:c.questionRow,children:[Object(i.jsx)("span",Object(d.a)(Object(d.a)({},o),{},{children:n})),Object(i.jsx)("div",{className:c.question,children:Object(i.jsx)(Oe.Provider,{value:a,children:t})})]}))}function me(e){var t=e.children,n=a.a.useContext(Oe),c=a.a.useRef(null),r=Object(fe.a)(e,n,c).inputProps;return Object(i.jsxs)("label",{style:{display:"block"},children:[Object(i.jsx)("input",Object(d.a)(Object(d.a)({},r),{},{ref:c})),t]})}var ge=function(e){var t=e.response,n=e.makeEdits;return t.map((function(e,t){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(he,{value:e.response,label:e.question,onChange:function(e){return function(e,t){n(t,e)}(e,t)},children:[Object(i.jsx)(me,{value:"yes",children:"Yes"}),Object(i.jsx)(me,{value:"no",children:"No"})]},t),Object(i.jsx)($.a,{})]})}))},xe=Object(N.a)((function(e){return{appBar:{position:"relative",backgroundColor:"black"},title:{marginLeft:e.spacing(2),flex:1},button:{backgroundColor:"black",color:"white",marginTop:2.5,marginBottom:2.5},card:{backgroundColor:"whitesmoke",width:"75%",alignSelf:"center"}}})),ye=a.a.forwardRef((function(e,t){return Object(i.jsx)(je.a,Object(d.a)({direction:"up",ref:t},e))}));function ve(){var e=Object(c.useContext)(j),t=e.editableResponse,n=e.makeEdits,a=e.commitEdits,r=e.resetEdits,s=xe(),l=Object(c.useState)(!1),u=Object(o.a)(l,2),d=u[0],b=u[1],f=function(){b(!0)},p=function(){r(),b(!1)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(S.a,{handleFocusableElements:!0,handleKeys:["q"],onKeyEvent:f}),Object(i.jsx)(V.a,{className:s.button,variant:"outlined",color:"black",onClick:f,fullWidth:!0,children:"Open User Profile"}),Object(i.jsxs)(ne.a,{fullScreen:!0,open:d,onClose:p,TransitionComponent:ye,children:[Object(i.jsx)(se.a,{className:s.appBar,children:Object(i.jsxs)(oe.a,{children:[Object(i.jsx)(ie.a,{edge:"start",color:"inherit",onClick:p,"aria-label":"close",children:Object(i.jsx)(de.a,{})}),Object(i.jsx)(le.a,{variant:"h6",className:s.title,children:"Map User Profile"}),Object(i.jsx)(V.a,{autoFocus:!0,color:"inherit",onClick:function(){a(),b(!1)},children:"save"})]})}),Object(i.jsxs)(ce.a,{sx:{width:275},className:s.card,children:[Object(i.jsx)(ae.a,{title:"Answer the following questions"}),Object(i.jsx)(re.a,{children:t&&Object(i.jsx)(ge,{response:t,makeEdits:n})})]})]})]})}var Ce=n(8),Se=n(32),Fe=n(38),Ne=n(29),Pe=n(4),ke=n(81);function Ee(e){var t=e.type,n=e.style,c=e.children,a=Object(Fe.e)().rowGroupProps;return Object(i.jsx)(t,Object(d.a)(Object(d.a)({},a),{},{style:n,children:c}))}function we(e){var t=e.item,n=e.state,a=e.children,r=Object(c.useRef)(),s=Object(Se.d)({node:t},n,r).rowProps;return Object(i.jsx)("tr",Object(d.a)(Object(d.a)({},s),{},{ref:r,children:a}))}function Re(e){var t,n,a=e.column,r=e.state,s=Object(c.useRef)(),o=Object(Se.c)({node:a},r,s).columnHeaderProps,l=Object(_.c)(),u=l.isFocusVisible,j=l.focusProps,b="ascending"===(null===(t=r.sortDescriptor)||void 0===t?void 0:t.direction)?"\u25b2":"\u25bc";return Object(i.jsxs)("th",Object(d.a)(Object(d.a)({},Object(Pe.f)(o,j)),{},{colSpan:a.colspan,style:{textAlign:a.colspan>1?"center":"left",padding:"5px 10px",outline:u?"2px solid orange":"none",cursor:"default"},ref:s,children:[a.rendered,a.props.allowsSorting&&Object(i.jsx)("span",{"aria-hidden":"true",style:{padding:"0 2px",visibility:(null===(n=r.sortDescriptor)||void 0===n?void 0:n.column)===a.key?"visible":"hidden"},children:b})]}))}function Ke(e){var t=e.item,n=e.children,a=e.state,r=Object(c.useRef)(),s=a.selectionManager.isSelected(t.key),o=Object(Se.e)({node:t},a,r).rowProps,l=Object(_.c)(),u=l.isFocusVisible,j=l.focusProps;return Object(i.jsx)("tr",Object(d.a)(Object(d.a)({style:{background:s?"blueviolet":t.index%2?"var(--spectrum-alias-highlight-hover)":"none",color:s?"white":null,outline:u?"2px solid orange":"none"}},Object(Pe.f)(o,j)),{},{ref:r,children:n}))}function Le(e){var t=e.cell,n=e.state,a=Object(c.useRef)(),r=Object(Se.b)({node:t},n,a).gridCellProps,s=Object(_.c)(),o=s.isFocusVisible,l=s.focusProps;return Object(i.jsx)("td",Object(d.a)(Object(d.a)({},Object(Pe.f)(r,l)),{},{style:{padding:"5px 10px",outline:o?"2px solid orange":"none",cursor:"default"},ref:a,children:t.rendered}))}function Ie(e){var t=e.cell,n=e.state,a=Object(c.useRef)(),r=Object(Se.b)({node:t},n,a).gridCellProps,s=Object(Se.g)({key:t.parentKey},n).checkboxProps,o=Object(c.useRef)(null),l=Object(ke.a)(s,Object(H.a)(s),o).inputProps;return Object(i.jsx)("td",Object(d.a)(Object(d.a)({},r),{},{ref:a,children:Object(i.jsx)("input",Object(d.a)({},l))}))}function Be(e){var t=e.column,n=e.state,a=Object(c.useRef)(),r=(n.selectionManager.selectionMode,Object(Se.c)({node:t},n,a).columnHeaderProps),s=Object(Se.f)(n).checkboxProps,o=Object(c.useRef)(null),l=Object(ke.a)(s,Object(H.a)(s),o).inputProps;return Object(i.jsx)("th",Object(d.a)(Object(d.a)({},r),{},{ref:a,children:"single"===n.selectionManager.selectionMode?Object(i.jsx)(J.a,{children:l["aria-label"]}):Object(i.jsx)("input",Object(d.a)(Object(d.a)({},l),{},{ref:o}))}))}var Te=function(e){var t=Object(Ne.f)(Object(d.a)(Object(d.a)({},e),{},{showSelectionCheckboxes:"multiple"===e.selectionMode})),n=Object(c.useRef)(),a=t.collection,r=Object(Se.a)(e,t,n).gridProps;return Object(i.jsxs)("table",Object(d.a)(Object(d.a)({},r),{},{ref:n,style:{borderCollapse:"collapse"},children:[Object(i.jsx)(Ee,{type:"thead",style:{borderBottom:"2px solid var(--spectrum-global-color-gray-800)"},children:a.headerRows.map((function(e){return Object(i.jsx)(we,{item:e,state:t,children:Object(Ce.a)(e.childNodes).map((function(e){return e.props.isSelectionCell?Object(i.jsx)(Be,{column:e,state:t},e.key):Object(i.jsx)(Re,{column:e,state:t},e.key)}))},e.key)}))}),Object(i.jsx)(Ee,{type:"tbody",children:Object(Ce.a)(a.body.childNodes).map((function(e){return Object(i.jsx)(Ke,{item:e,state:t,children:Object(Ce.a)(e.childNodes).map((function(e){return e.props.isSelectionCell?Object(i.jsx)(Ie,{cell:e,state:t},e.key):Object(i.jsx)(Le,{cell:e,state:t},e.key)}))},e.key)}))})]}))},Me=Object(N.a)((function(e){return{appBar:{position:"relative",backgroundColor:"black"},title:{marginLeft:e.spacing(2),flex:1},header:{display:"flex",fontSize:20,flexDirection:"row",justifyContent:"space-between",paddingTop:10,paddingBottom:10,paddingLeft:200,paddingRight:200},questionRow:{display:"flex",fontSize:20,flexDirection:"row",justifyContent:"space-between",paddingTop:10,paddingBottom:10,paddingLeft:10,paddingRight:10},question:{display:"flex",flexDirection:"row"},button:{backgroundColor:"white",color:"black",marginTop:2.5,marginBottom:2.5},card:{backgroundColor:"whitesmoke",alignSelf:"center",padding:50},cardContent:{display:"flex",justifyContent:"center",alignItems:"center"}}})),qe=function(e){var t=e.children;return Object(i.jsx)("div",{style:{backgroundColor:"white",boxShadow:"0 1px 1px",borderRadius:3,minWidth:30,display:"flex",justifyContent:"center",alignItems:"center",padding:4,marginLeft:8,marginRight:8},children:t})},De=a.a.forwardRef((function(e,t){return Object(i.jsx)(je.a,Object(d.a)({direction:"up",ref:t},e))}));function We(){var e=Object(c.useContext)(j),t=(e.editableResponse,e.makeEdits,e.commitEdits,e.resetEdits,Me()),n=Object(c.useState)(!1),a=Object(o.a)(n,2),r=a[0],s=a[1],l=function(){s(!0)},u=function(){s(!1)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(S.a,{handleFocusableElements:!0,handleKeys:["k"],onKeyEvent:l}),Object(i.jsx)(V.a,{variant:"outlined",color:"black",onClick:l,className:t.button,fullWidth:!0,children:"Open Keyboard Shortcuts"}),Object(i.jsxs)(ne.a,{fullScreen:!0,open:r,onClose:u,TransitionComponent:De,children:[Object(i.jsx)(se.a,{className:t.appBar,children:Object(i.jsxs)(oe.a,{children:[Object(i.jsx)(ie.a,{edge:"start",color:"inherit",onClick:u,"aria-label":"close",children:Object(i.jsx)(de.a,{})}),Object(i.jsx)(le.a,{variant:"h6",className:t.title,children:"Keyboard Shortcuts"})]})}),Object(i.jsx)(ce.a,{sx:{width:275},className:t.card,children:Object(i.jsx)(re.a,{className:t.cardContent,children:Object(i.jsxs)(Te,{"aria-label":"Keyboard Shortcuts for the Tool",style:{height:"500px",width:"100%"},children:[Object(i.jsxs)(Ne.e,{children:[Object(i.jsx)(Ne.b,{children:"Category"}),Object(i.jsx)(Ne.b,{children:"Shortcut"}),Object(i.jsx)(Ne.b,{children:"Description"})]}),Object(i.jsx)(Ne.d,{children:[{category:"Map Controls",keys:["shift","arrow"],description:"Pan Map in that direction"},{category:"",keys:["shift","+"],description:"Zoom in on map"},{category:"",keys:["shift","-"],description:"Zoom out on map"},{category:"",keys:["R"],description:"Reset Zoom on map"},{category:"",keys:["esc"],description:"Exit Map focus and return to controls menu"},{category:"",keys:[],description:""},{category:"Dialog Control",keys:["Q"],description:"Open the questionnaire dialog"},{category:"",keys:["K"],description:"Open the keyboard keys dialog"},{category:"",keys:["esc"],description:"Close dialog menu"}].map((function(e){var t=e.category,n=e.keys,c=e.description;return Object(i.jsxs)(Ne.c,{children:[Object(i.jsx)(Ne.a,{children:t}),Object(i.jsx)(Ne.a,{children:Object(i.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:n.map((function(e,t){return Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(i.jsx)(qe,{children:e}),t+1!=n.length&&" + "]})}))})}),Object(i.jsx)(Ne.a,{"aria-hidden":""==t,children:c})]})}))})]})})})]})]})}var Ae=function(e){var t=e.className;return Object(i.jsxs)("div",{className:"".concat(t," shortcuts"),children:[Object(i.jsx)(ve,{}),Object(i.jsx)(We,{})]})},Ze=(n(140),function(e){var t=e.className,n=Object(c.useContext)(l).mapTitle;return Object(i.jsx)("div",{className:"".concat(t," title"),children:Object(i.jsx)("h1",{children:n})})}),Ve=n(95),ze=n(181),Ge=function(){var e=Object(c.useContext)(x).selectedFontFamily,t=Object(Ve.a)({typography:{fontFamily:e,fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}});return Object(i.jsx)(ze.a,{theme:t,children:Object(i.jsxs)("div",{className:"dashboard",style:{fontFamily:e},children:[Object(i.jsx)(Ze,{className:"dashboard-title"}),Object(i.jsx)(k,{className:"dashboard-map"}),Object(i.jsx)(D,{className:"dashboard-controls"}),Object(i.jsx)(Z,{className:"dashboard-description"}),Object(i.jsx)(Ae,{className:"dashboard-shortcuts"}),Object(i.jsx)(te,{className:"dashboard-options"})]})})};var Ue=function(){return Object(i.jsx)(u,{children:Object(i.jsx)(b,{children:Object(i.jsx)(y,{children:Object(i.jsx)(Ge,{})})})})},Je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,183)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(Ue,{})}),document.getElementById("root")),Je()}},[[141,1,2]]]);
//# sourceMappingURL=main.afc7ee00.chunk.js.map