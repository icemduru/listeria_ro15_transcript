"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6148],{16148:function(t,e,a){a.r(e),a.d(e,{default:function(){return z},getPaginationUtilityClass:function(){return d},paginationClasses:function(){return p}});var o=a(7896),n=a(31461),i=a(30969),r=a(81856),s=a(26540),c=a(2441),l=a(2975);function d(t){return(0,l.Z)("MuiPagination",t)}var p=(0,a(62746).Z)("MuiPagination",["root","ul","outlined","text"]),u=a(68079),v=a(96234),g=a(70277),m=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var h=a(16146),b=a(62221),f=a(37574),Z=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],x=(0,b.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,e[a.variant]]}})({}),y=(0,b.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:function(t,e){return e.ul}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function C(t,e,a){return"page"===t?"".concat(a?"":"Go to ","page ").concat(e):"Go to ".concat(t," page")}var P=i.forwardRef((function(t,e){var a=(0,c.Z)({props:t,name:"MuiPagination"}),i=a.boundaryCount,l=void 0===i?1:i,p=a.className,b=a.color,P=void 0===b?"standard":b,z=a.count,w=void 0===z?1:z,k=a.defaultPage,N=void 0===k?1:k,B=a.disabled,M=void 0!==B&&B,R=a.getItemAriaLabel,L=void 0===R?C:R,S=a.hideNextButton,O=void 0!==S&&S,I=a.hidePrevButton,j=void 0!==I&&I,F=a.renderItem,W=void 0===F?function(t){return(0,f.jsx)(h.Z,(0,o.Z)({},t))}:F,q=a.shape,A=void 0===q?"circular":q,T=a.showFirstButton,V=void 0!==T&&T,_=a.showLastButton,G=void 0!==_&&_,U=a.siblingCount,H=void 0===U?1:U,D=a.size,E=void 0===D?"medium":D,J=a.variant,K=void 0===J?"text":J,Q=(0,n.Z)(a,Z),X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.boundaryCount,a=void 0===e?1:e,i=t.componentName,r=void 0===i?"usePagination":i,s=t.count,c=void 0===s?1:s,l=t.defaultPage,d=void 0===l?1:l,p=t.disabled,h=void 0!==p&&p,b=t.hideNextButton,f=void 0!==b&&b,Z=t.hidePrevButton,x=void 0!==Z&&Z,y=t.onChange,C=t.page,P=t.showFirstButton,z=void 0!==P&&P,w=t.showLastButton,k=void 0!==w&&w,N=t.siblingCount,B=void 0===N?1:N,M=(0,n.Z)(t,m),R=(0,g.Z)({controlled:C,default:d,name:r,state:"page"}),L=(0,v.Z)(R,2),S=L[0],O=L[1],I=function(t,e){C||O(e),y&&y(t,e)},j=function(t,e){var a=e-t+1;return Array.from({length:a},(function(e,a){return t+a}))},F=j(1,Math.min(a,c)),W=j(Math.max(c-a+1,a+1),c),q=Math.max(Math.min(S-B,c-a-2*B-1),a+2),A=Math.min(Math.max(S+B,a+2*B+2),W.length>0?W[0]-2:c-1),T=[].concat((0,u.Z)(z?["first"]:[]),(0,u.Z)(x?[]:["previous"]),(0,u.Z)(F),(0,u.Z)(q>a+2?["start-ellipsis"]:a+1<c-a?[a+1]:[]),(0,u.Z)(j(q,A)),(0,u.Z)(A<c-a-1?["end-ellipsis"]:c-a>a?[c-a]:[]),(0,u.Z)(W),(0,u.Z)(f?[]:["next"]),(0,u.Z)(k?["last"]:[])),V=function(t){switch(t){case"first":return 1;case"previous":return S-1;case"next":return S+1;case"last":return c;default:return null}},_=T.map((function(t){return"number"===typeof t?{onClick:function(e){I(e,t)},type:"page",page:t,selected:t===S,disabled:h,"aria-current":t===S?"true":void 0}:{onClick:function(e){I(e,V(t))},type:t,page:V(t),selected:!1,disabled:h||-1===t.indexOf("ellipsis")&&("next"===t||"last"===t?S>=c:S<=1)}}));return(0,o.Z)({items:_},M)}((0,o.Z)({},a,{componentName:"Pagination"})),Y=X.items,$=(0,o.Z)({},a,{boundaryCount:l,color:P,count:w,defaultPage:N,disabled:M,getItemAriaLabel:L,hideNextButton:O,hidePrevButton:j,renderItem:W,shape:A,showFirstButton:V,showLastButton:G,siblingCount:H,size:E,variant:K}),tt=function(t){var e=t.classes,a={root:["root",t.variant],ul:["ul"]};return(0,s.Z)(a,d,e)}($);return(0,f.jsx)(x,(0,o.Z)({"aria-label":"pagination navigation",className:(0,r.default)(tt.root,p),ownerState:$,ref:e},Q,{children:(0,f.jsx)(y,{className:tt.ul,ownerState:$,children:Y.map((function(t,e){return(0,f.jsx)("li",{children:W((0,o.Z)({},t,{color:P,"aria-label":L(t.type,t.page,t.selected),shape:A,size:E,variant:K}))},e)}))})}))})),z=P},16146:function(t,e,a){a.d(e,{Z:function(){return N}});var o=a(56666),n=a(31461),i=a(7896),r=a(30969),s=a(81856),c=a(26540),l=a(74262),d=a(2441),p=a(47533),u=a(73376),v=a(15556),g=a(99853),m=a(13794),h=a(6033),b=a(12104),f=a(37574),Z=(0,b.Z)((0,f.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),x=(0,b.Z)((0,f.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),y=a(62221),C=["className","color","component","components","disabled","page","selected","shape","size","type","variant"],P=function(t,e){var a=t.ownerState;return[e.root,e[a.variant],e["size".concat((0,g.Z)(a.size))],"text"===a.variant&&e["text".concat((0,g.Z)(a.color))],"outlined"===a.variant&&e["outlined".concat((0,g.Z)(a.color))],"rounded"===a.shape&&e.rounded,"page"===a.type&&e.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&e.ellipsis,("previous"===a.type||"next"===a.type)&&e.previousNext,("first"===a.type||"last"===a.type)&&e.firstLast]},z=(0,y.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:P})((function(t){var e=t.theme,a=t.ownerState;return(0,i.Z)({},e.typography.body2,(0,o.Z)({borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto"},"&.".concat(p.Z.disabled),{opacity:(e.vars||e).palette.action.disabledOpacity}),"small"===a.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===a.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15)})})),w=(0,y.ZP)(v.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:P})((function(t){var e,a,n=t.theme,r=t.ownerState;return(0,i.Z)({},n.typography.body2,(a={borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(n.vars||n).palette.text.primary},(0,o.Z)(a,"&.".concat(p.Z.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,o.Z)(a,"&.".concat(p.Z.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,o.Z)(a,"transition",n.transitions.create(["color","background-color"],{duration:n.transitions.duration.short})),(0,o.Z)(a,"&:hover",{backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}),(0,o.Z)(a,"&.".concat(p.Z.selected),(e={backgroundColor:(n.vars||n).palette.action.selected,"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.selected," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(n.palette.action.selected,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(n.vars||n).palette.action.selected}}},(0,o.Z)(e,"&.".concat(p.Z.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.selected," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(n.palette.action.selected,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}),(0,o.Z)(e,"&.".concat(p.Z.disabled),{opacity:1,color:(n.vars||n).palette.action.disabled,backgroundColor:(n.vars||n).palette.action.selected}),e)),a),"small"===r.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===r.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:n.typography.pxToRem(15)},"rounded"===r.shape&&{borderRadius:(n.vars||n).shape.borderRadius})}),(function(t){var e=t.theme,a=t.ownerState;return(0,i.Z)({},"text"===a.variant&&(0,o.Z)({},"&.".concat(p.Z.selected),(0,i.Z)({},"standard"!==a.color&&(0,o.Z)({color:(e.vars||e).palette[a.color].contrastText,backgroundColor:(e.vars||e).palette[a.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[a.color].main}}},"&.".concat(p.Z.focusVisible),{backgroundColor:(e.vars||e).palette[a.color].dark}),(0,o.Z)({},"&.".concat(p.Z.disabled),{color:(e.vars||e).palette.action.disabled}))),"outlined"===a.variant&&(0,o.Z)({border:e.vars?"1px solid rgba(".concat(e.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"&.".concat(p.Z.selected),(0,i.Z)({},"standard"!==a.color&&(0,o.Z)({color:(e.vars||e).palette[a.color].main,border:"1px solid ".concat(e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / 0.5)"):(0,l.Fq)(e.palette[a.color].main,.5)),backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / ").concat(e.vars.palette.action.activatedOpacity,")"):(0,l.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / calc(").concat(e.vars.palette.action.activatedOpacity," + ").concat(e.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(p.Z.focusVisible),{backgroundColor:e.vars?"rgba(".concat(e.vars.palette[a.color].mainChannel," / calc(").concat(e.vars.palette.action.activatedOpacity," + ").concat(e.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(e.palette[a.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}),(0,o.Z)({},"&.".concat(p.Z.disabled),{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}))))})),k=(0,y.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:function(t,e){return e.icon}})((function(t){var e=t.theme,a=t.ownerState;return(0,i.Z)({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},"small"===a.size&&{fontSize:e.typography.pxToRem(18)},"large"===a.size&&{fontSize:e.typography.pxToRem(22)})})),N=r.forwardRef((function(t,e){var a=(0,d.Z)({props:t,name:"MuiPaginationItem"}),o=a.className,r=a.color,l=void 0===r?"standard":r,v=a.component,b=a.components,y=void 0===b?{first:m.Z,last:h.Z,next:x,previous:Z}:b,P=a.disabled,N=void 0!==P&&P,B=a.page,M=a.selected,R=void 0!==M&&M,L=a.shape,S=void 0===L?"circular":L,O=a.size,I=void 0===O?"medium":O,j=a.type,F=void 0===j?"page":j,W=a.variant,q=void 0===W?"text":W,A=(0,n.Z)(a,C),T=(0,i.Z)({},a,{color:l,disabled:N,selected:R,shape:S,size:I,type:F,variant:q}),V=(0,u.Z)(),_=function(t){var e=t.classes,a=t.color,o=t.disabled,n=t.selected,i=t.size,r=t.shape,s=t.type,l=t.variant,d={root:["root","size".concat((0,g.Z)(i)),l,r,"standard"!==a&&"".concat(l).concat((0,g.Z)(a)),o&&"disabled",n&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[s]],icon:["icon"]};return(0,c.Z)(d,p.b,e)}(T),G=("rtl"===V.direction?{previous:y.next||x,next:y.previous||Z,last:y.first||m.Z,first:y.last||h.Z}:{previous:y.previous||Z,next:y.next||x,first:y.first||m.Z,last:y.last||h.Z})[F];return"start-ellipsis"===F||"end-ellipsis"===F?(0,f.jsx)(z,{ref:e,ownerState:T,className:(0,s.default)(_.root,o),children:"\u2026"}):(0,f.jsxs)(w,(0,i.Z)({ref:e,ownerState:T,component:v,disabled:N,className:(0,s.default)(_.root,o)},A,{children:["page"===F&&B,G?(0,f.jsx)(k,{as:G,ownerState:T,className:_.icon}):null]}))}))},47533:function(t,e,a){a.d(e,{b:function(){return n}});var o=a(2975);function n(t){return(0,o.Z)("MuiPaginationItem",t)}var i=(0,a(62746).Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]);e.Z=i},13794:function(t,e,a){a(30969);var o=a(12104),n=a(37574);e.Z=(0,o.Z)((0,n.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage")},6033:function(t,e,a){a(30969);var o=a(12104),n=a(37574);e.Z=(0,o.Z)((0,n.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage")}}]);
//# sourceMappingURL=6148.c72fcd1b.chunk.js.map