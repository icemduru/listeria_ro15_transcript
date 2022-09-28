"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[5406],{78105:function(e,t,n){var r=n(56666),o=n(31461),a=n(7896),i=n(30969),l=n(81856),c=n(64022),s=n(26540),d=n(62221),u=n(2441),p=n(35683),v=n(75207),f=n(73376),m=n(63970),Z=n(45846),h=n(37574),x=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],b=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({height:0,overflow:"hidden",transition:t.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:t.transitions.create("width")},"entered"===n.state&&(0,a.Z)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),S=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,t){return t.wrapper}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex",width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),w=(0,d.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,t){return t.wrapperInner}})((function(e){var t=e.ownerState;return(0,a.Z)({width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),g=i.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiCollapse"}),d=n.addEndListener,g=n.children,L=n.className,y=n.collapsedSize,C=void 0===y?"0px":y,M=n.component,R=n.easing,N=n.in,j=n.onEnter,z=n.onEntered,E=n.onEntering,P=n.onExit,I=n.onExited,T=n.onExiting,D=n.orientation,k=void 0===D?"vertical":D,W=n.style,A=n.timeout,H=void 0===A?p.x9.standard:A,F=n.TransitionComponent,_=void 0===F?c.ZP:F,B=(0,o.Z)(n,x),$=(0,a.Z)({},n,{orientation:k,collapsedSize:C}),O=function(e){var t=e.orientation,n=e.classes,r={root:["root","".concat(t)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(t)],wrapperInner:["wrapperInner","".concat(t)]};return(0,s.Z)(r,Z.d,n)}($),V=(0,f.Z)(),q=i.useRef(),G=i.useRef(null),J=i.useRef(),K="number"===typeof C?"".concat(C,"px"):C,Q="horizontal"===k,U=Q?"width":"height";i.useEffect((function(){return function(){clearTimeout(q.current)}}),[]);var X=i.useRef(null),Y=(0,m.Z)(t,X),ee=function(e){return function(t){if(e){var n=X.current;void 0===t?e(n):e(n,t)}}},te=function(){return G.current?G.current[Q?"clientWidth":"clientHeight"]:0},ne=ee((function(e,t){G.current&&Q&&(G.current.style.position="absolute"),e.style[U]=K,j&&j(e,t)})),re=ee((function(e,t){var n=te();G.current&&Q&&(G.current.style.position="");var r=(0,v.C)({style:W,timeout:H,easing:R},{mode:"enter"}),o=r.duration,a=r.easing;if("auto"===H){var i=V.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),J.current=i}else e.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");e.style[U]="".concat(n,"px"),e.style.transitionTimingFunction=a,E&&E(e,t)})),oe=ee((function(e,t){e.style[U]="auto",z&&z(e,t)})),ae=ee((function(e){e.style[U]="".concat(te(),"px"),P&&P(e)})),ie=ee(I),le=ee((function(e){var t=te(),n=(0,v.C)({style:W,timeout:H,easing:R},{mode:"exit"}),r=n.duration,o=n.easing;if("auto"===H){var a=V.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),J.current=a}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style[U]=K,e.style.transitionTimingFunction=o,T&&T(e)}));return(0,h.jsx)(_,(0,a.Z)({in:N,onEnter:ne,onEntered:oe,onEntering:re,onExit:ae,onExited:ie,onExiting:le,addEndListener:function(e){"auto"===H&&(q.current=setTimeout(e,J.current||0)),d&&d(X.current,e)},nodeRef:X,timeout:"auto"===H?null:H},B,{children:function(e,t){return(0,h.jsx)(b,(0,a.Z)({as:M,className:(0,l.default)(O.root,L,{entered:O.entered,exited:!N&&"0px"===K&&O.hidden}[e]),style:(0,a.Z)((0,r.Z)({},Q?"minWidth":"minHeight",K),W),ownerState:(0,a.Z)({},$,{state:e}),ref:Y},t,{children:(0,h.jsx)(S,{ownerState:(0,a.Z)({},$,{state:e}),className:O.wrapper,ref:G,children:(0,h.jsx)(w,{ownerState:(0,a.Z)({},$,{state:e}),className:O.wrapperInner,children:g})})}))}}))}));g.muiSupportAuto=!0,t.Z=g},45846:function(e,t,n){n.d(t,{d:function(){return o}});var r=n(2975);function o(e){return(0,r.Z)("MuiCollapse",e)}var a=(0,n(62746).Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);t.Z=a},165:function(e,t,n){var r=n(31461),o=n(7896),a=n(30969),i=n(81856),l=n(26540),c=n(38101),s=n(90310),d=n(2441),u=n(62221),p=n(54087),v=n(37574),f=["active","children","className","component","completed","disabled","expanded","index","last"],m=(0,u.ZP)("div",{name:"MuiStep",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.completed&&t.completed]}})((function(e){var t=e.ownerState;return(0,o.Z)({},"horizontal"===t.orientation&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})})),Z=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiStep"}),u=n.active,Z=n.children,h=n.className,x=n.component,b=void 0===x?"div":x,S=n.completed,w=n.disabled,g=n.expanded,L=void 0!==g&&g,y=n.index,C=n.last,M=(0,r.Z)(n,f),R=a.useContext(c.Z),N=R.activeStep,j=R.connector,z=R.alternativeLabel,E=R.orientation,P=R.nonLinear,I=void 0!==u&&u,T=void 0!==S&&S,D=void 0!==w&&w;N===y?I=void 0===u||u:!P&&N>y?T=void 0===S||S:!P&&N<y&&(D=void 0===w||w);var k=a.useMemo((function(){return{index:y,last:C,expanded:L,icon:y+1,active:I,completed:T,disabled:D}}),[y,C,L,I,T,D]),W=(0,o.Z)({},n,{active:I,orientation:E,alternativeLabel:z,completed:T,disabled:D,expanded:L,component:b}),A=function(e){var t=e.classes,n={root:["root",e.orientation,e.alternativeLabel&&"alternativeLabel",e.completed&&"completed"]};return(0,l.Z)(n,p.$,t)}(W),H=(0,v.jsxs)(m,(0,o.Z)({as:b,className:(0,i.default)(A.root,h),ref:t,ownerState:W},M,{children:[j&&z&&0!==y?j:null,Z]}));return(0,v.jsx)(s.Z.Provider,{value:k,children:j&&!z&&0!==y?(0,v.jsxs)(a.Fragment,{children:[j,H]}):H})}));t.Z=Z},90310:function(e,t,n){n.d(t,{s:function(){return a}});var r=n(30969),o=r.createContext({});function a(){return r.useContext(o)}t.Z=o},54087:function(e,t,n){n.d(t,{$:function(){return o}});var r=n(2975);function o(e){return(0,r.Z)("MuiStep",e)}var a=(0,n(62746).Z)("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);t.Z=a},4823:function(e,t,n){var r=n(31461),o=n(7896),a=n(30969),i=n(81856),l=n(26540),c=n(99853),s=n(62221),d=n(2441),u=n(38101),p=n(90310),v=n(31197),f=n(37574),m=["className"],Z=(0,s.ZP)("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.completed&&t.completed]}})((function(e){var t=e.ownerState;return(0,o.Z)({flex:"1 1 auto"},"vertical"===t.orientation&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})})),h=(0,s.ZP)("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:function(e,t){var n=e.ownerState;return[t.line,t["line".concat((0,c.Z)(n.orientation))]]}})((function(e){var t=e.ownerState,n=e.theme,r="light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600];return(0,o.Z)({display:"block",borderColor:n.vars?n.vars.palette.StepConnector.border:r},"horizontal"===t.orientation&&{borderTopStyle:"solid",borderTopWidth:1},"vertical"===t.orientation&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})})),x=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiStepConnector"}),s=n.className,x=(0,r.Z)(n,m),b=a.useContext(u.Z),S=b.alternativeLabel,w=b.orientation,g=void 0===w?"horizontal":w,L=a.useContext(p.Z),y=L.active,C=L.disabled,M=L.completed,R=(0,o.Z)({},n,{alternativeLabel:S,orientation:g,active:y,completed:M,disabled:C}),N=function(e){var t=e.classes,n=e.orientation,r={root:["root",n,e.alternativeLabel&&"alternativeLabel",e.active&&"active",e.completed&&"completed",e.disabled&&"disabled"],line:["line","line".concat((0,c.Z)(n))]};return(0,l.Z)(r,v.M,t)}(R);return(0,f.jsx)(Z,(0,o.Z)({className:(0,i.default)(N.root,s),ref:t,ownerState:R},x,{children:(0,f.jsx)(h,{className:N.line,ownerState:R})}))}));t.Z=x},31197:function(e,t,n){n.d(t,{M:function(){return o}});var r=n(2975);function o(e){return(0,r.Z)("MuiStepConnector",e)}var a=(0,n(62746).Z)("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);t.Z=a},89053:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(31461),o=n(7896),a=n(30969),i=n(81856),l=n(26540),c=n(62221),s=n(2441),d=n(78105),u=n(38101),p=n(90310),v=n(2975);function f(e){return(0,v.Z)("MuiStepContent",e)}(0,n(62746).Z)("MuiStepContent",["root","last","transition"]);var m=n(37574),Z=["children","className","TransitionComponent","transitionDuration","TransitionProps"],h=(0,c.ZP)("div",{name:"MuiStepContent",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.last&&t.last]}})((function(e){var t=e.ownerState,n=e.theme;return(0,o.Z)({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:n.vars?"1px solid ".concat(n.vars.palette.StepContent.border):"1px solid ".concat("light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600])},t.last&&{borderLeft:"none"})})),x=(0,c.ZP)(d.Z,{name:"MuiStepContent",slot:"Transition",overridesResolver:function(e,t){return t.transition}})({}),b=a.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiStepContent"}),c=n.children,v=n.className,b=n.TransitionComponent,S=void 0===b?d.Z:b,w=n.transitionDuration,g=void 0===w?"auto":w,L=n.TransitionProps,y=(0,r.Z)(n,Z),C=(a.useContext(u.Z).orientation,a.useContext(p.Z)),M=C.active,R=C.last,N=C.expanded,j=(0,o.Z)({},n,{last:R}),z=function(e){var t=e.classes,n={root:["root",e.last&&"last"],transition:["transition"]};return(0,l.Z)(n,f,t)}(j);var E=g;return"auto"!==g||S.muiSupportAuto||(E=void 0),(0,m.jsx)(h,(0,o.Z)({className:(0,i.default)(z.root,v),ref:t,ownerState:j},y,{children:(0,m.jsx)(x,(0,o.Z)({as:S,in:M||N,className:z.transition,ownerState:j,timeout:E,unmountOnExit:!0},L,{children:c}))}))}))},29260:function(e,t,n){n.d(t,{Z:function(){return w}});var r,o=n(56666),a=n(7896),i=n(31461),l=n(30969),c=n(81856),s=n(26540),d=n(62221),u=n(2441),p=n(12104),v=n(37574),f=(0,p.Z)((0,v.jsx)("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),m=(0,p.Z)((0,v.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),Z=n(30878),h=n(8369),x=["active","className","completed","error","icon"],b=(0,d.ZP)(Z.Z,{name:"MuiStepIcon",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,n=e.theme;return t={display:"block",transition:n.transitions.create("color",{duration:n.transitions.duration.shortest}),color:(n.vars||n).palette.text.disabled},(0,o.Z)(t,"&.".concat(h.Z.completed),{color:(n.vars||n).palette.primary.main}),(0,o.Z)(t,"&.".concat(h.Z.active),{color:(n.vars||n).palette.primary.main}),(0,o.Z)(t,"&.".concat(h.Z.error),{color:(n.vars||n).palette.error.main}),t})),S=(0,d.ZP)("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:function(e,t){return t.text}})((function(e){var t=e.theme;return{fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}})),w=l.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiStepIcon"}),o=n.active,l=void 0!==o&&o,d=n.className,p=n.completed,Z=void 0!==p&&p,w=n.error,g=void 0!==w&&w,L=n.icon,y=(0,i.Z)(n,x),C=(0,a.Z)({},n,{active:l,completed:Z,error:g}),M=function(e){var t=e.classes,n={root:["root",e.active&&"active",e.completed&&"completed",e.error&&"error"],text:["text"]};return(0,s.Z)(n,h.M,t)}(C);if("number"===typeof L||"string"===typeof L){var R=(0,c.default)(d,M.root);return g?(0,v.jsx)(b,(0,a.Z)({as:m,className:R,ref:t,ownerState:C},y)):Z?(0,v.jsx)(b,(0,a.Z)({as:f,className:R,ref:t,ownerState:C},y)):(0,v.jsxs)(b,(0,a.Z)({className:R,ref:t,ownerState:C},y,{children:[r||(r=(0,v.jsx)("circle",{cx:"12",cy:"12",r:"12"})),(0,v.jsx)(S,{className:M.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:C,children:L})]}))}return L}))},8369:function(e,t,n){n.d(t,{M:function(){return o}});var r=n(2975);function o(e){return(0,r.Z)("MuiStepIcon",e)}var a=(0,n(62746).Z)("MuiStepIcon",["root","active","completed","error","text"]);t.Z=a},68595:function(e,t,n){var r=n(56666),o=n(31461),a=n(7896),i=n(30969),l=n(81856),c=n(26540),s=n(62221),d=n(2441),u=n(29260),p=n(38101),v=n(90310),f=n(20874),m=n(37574),Z=["children","className","componentsProps","error","icon","optional","StepIconComponent","StepIconProps"],h=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation]]}})((function(e){var t,n=e.ownerState;return(0,a.Z)((t={display:"flex",alignItems:"center"},(0,r.Z)(t,"&.".concat(f.Z.alternativeLabel),{flexDirection:"column"}),(0,r.Z)(t,"&.".concat(f.Z.disabled),{cursor:"default"}),t),"vertical"===n.orientation&&{textAlign:"left",padding:"8px 0"})})),x=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:function(e,t){return t.label}})((function(e){var t,n=e.theme;return(0,a.Z)({},n.typography.body2,(t={display:"block",transition:n.transitions.create("color",{duration:n.transitions.duration.shortest})},(0,r.Z)(t,"&.".concat(f.Z.active),{color:(n.vars||n).palette.text.primary,fontWeight:500}),(0,r.Z)(t,"&.".concat(f.Z.completed),{color:(n.vars||n).palette.text.primary,fontWeight:500}),(0,r.Z)(t,"&.".concat(f.Z.alternativeLabel),{textAlign:"center",marginTop:16}),(0,r.Z)(t,"&.".concat(f.Z.error),{color:(n.vars||n).palette.error.main}),t))})),b=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:function(e,t){return t.iconContainer}})((function(){return(0,r.Z)({flexShrink:0,display:"flex",paddingRight:8},"&.".concat(f.Z.alternativeLabel),{paddingRight:0})})),S=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:function(e,t){return t.labelContainer}})((function(e){var t=e.theme;return{width:"100%",color:(t.vars||t).palette.text.secondary}})),w=i.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiStepLabel"}),r=n.children,s=n.className,w=n.componentsProps,g=void 0===w?{}:w,L=n.error,y=void 0!==L&&L,C=n.icon,M=n.optional,R=n.StepIconComponent,N=n.StepIconProps,j=(0,o.Z)(n,Z),z=i.useContext(p.Z),E=z.alternativeLabel,P=z.orientation,I=i.useContext(v.Z),T=I.active,D=I.disabled,k=I.completed,W=I.icon,A=C||W,H=R;A&&!H&&(H=u.Z);var F=(0,a.Z)({},n,{active:T,alternativeLabel:E,completed:k,disabled:D,error:y,orientation:P}),_=function(e){var t=e.classes,n=e.orientation,r=e.active,o=e.completed,a=e.error,i=e.disabled,l=e.alternativeLabel,s={root:["root",n,a&&"error",i&&"disabled",l&&"alternativeLabel"],label:["label",r&&"active",o&&"completed",a&&"error",i&&"disabled",l&&"alternativeLabel"],iconContainer:["iconContainer",r&&"active",o&&"completed",a&&"error",i&&"disabled",l&&"alternativeLabel"],labelContainer:["labelContainer"]};return(0,c.Z)(s,f.H,t)}(F);return(0,m.jsxs)(h,(0,a.Z)({className:(0,l.default)(_.root,s),ref:t,ownerState:F},j,{children:[A||H?(0,m.jsx)(b,{className:_.iconContainer,ownerState:F,children:(0,m.jsx)(H,(0,a.Z)({completed:k,active:T,error:y,icon:A},N))}):null,(0,m.jsxs)(S,{className:_.labelContainer,ownerState:F,children:[r?(0,m.jsx)(x,(0,a.Z)({className:_.label,ownerState:F},g.label,{children:r})):null,M]})]}))}));w.muiName="StepLabel",t.Z=w},20874:function(e,t,n){n.d(t,{H:function(){return o}});var r=n(2975);function o(e){return(0,r.Z)("MuiStepLabel",e)}var a=(0,n(62746).Z)("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]);t.Z=a},75041:function(e,t,n){var r=n(31461),o=n(7896),a=n(30969),i=n(81856),l=n(26540),c=n(2441),s=n(62221),d=n(64253),u=n(4823),p=n(38101),v=n(37574),f=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],m=(0,s.ZP)("div",{name:"MuiStepper",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"flex"},"horizontal"===t.orientation&&{flexDirection:"row",alignItems:"center"},"vertical"===t.orientation&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})})),Z=(0,v.jsx)(u.Z,{}),h=a.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiStepper"}),s=n.activeStep,u=void 0===s?0:s,h=n.alternativeLabel,x=void 0!==h&&h,b=n.children,S=n.className,w=n.component,g=void 0===w?"div":w,L=n.connector,y=void 0===L?Z:L,C=n.nonLinear,M=void 0!==C&&C,R=n.orientation,N=void 0===R?"horizontal":R,j=(0,r.Z)(n,f),z=(0,o.Z)({},n,{alternativeLabel:x,orientation:N,component:g}),E=function(e){var t=e.orientation,n=e.alternativeLabel,r=e.classes,o={root:["root",t,n&&"alternativeLabel"]};return(0,l.Z)(o,d.c,r)}(z),P=a.Children.toArray(b).filter(Boolean),I=P.map((function(e,t){return a.cloneElement(e,(0,o.Z)({index:t,last:t+1===P.length},e.props))})),T=a.useMemo((function(){return{activeStep:u,alternativeLabel:x,connector:y,nonLinear:M,orientation:N}}),[u,x,y,M,N]);return(0,v.jsx)(p.Z.Provider,{value:T,children:(0,v.jsx)(m,(0,o.Z)({as:g,ownerState:z,className:(0,i.default)(E.root,S),ref:t},j,{children:I}))})}));t.Z=h},38101:function(e,t,n){n.d(t,{s:function(){return a}});var r=n(30969),o=r.createContext({});function a(){return r.useContext(o)}t.Z=o},64253:function(e,t,n){n.d(t,{c:function(){return o}});var r=n(2975);function o(e){return(0,r.Z)("MuiStepper",e)}var a=(0,n(62746).Z)("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);t.Z=a}}]);
//# sourceMappingURL=5406.f51b5b0a.chunk.js.map