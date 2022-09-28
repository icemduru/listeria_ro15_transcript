"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4859],{4859:function(e,n,t){t.r(n),t.d(n,{default:function(){return ee}});var o=t(96234),i=t(32723),r=t(33028),c=t(30969),s=t(77954),l=t(51981),a=t(28712),d=t(2374),u=t(3715),h=t(87695),f=t(81073),g=t(90550),m=t(26119),x=t(68079),v=t(66581),k=t(51817),C=t(35436),b=t(60516),p=t(44181),j=t(4109),Z=t(64698),y=t(22417),S=t(76770),W=t(9077),T=t(40909),w=t(37574),I=(0,c.lazy)((function(){return Promise.all([t.e(8136),t.e(8113)]).then(t.bind(t,28113))})),M=(0,c.lazy)((function(){return t.e(2092).then(t.bind(t,2092))})),A=(0,c.lazy)((function(){return t.e(7582).then(t.bind(t,47582))})),N=(0,c.lazy)((function(){return t.e(9145).then(t.bind(t,19145))})),B=(0,d.ZL)()((function(e){return{searchBox:{margin:e.spacing(2)},menuIcon:{marginRight:e.spacing(1),marginBottom:0}}}));var L=(0,g.observer)((function(e){var n=e.model,t=e.setHeaderHeight,i=e.setAssemblyIdx,s=e.assemblyIdx,l=B().classes,a=(0,f.getSession)(n),d=(0,c.useState)(),u=(0,o.Z)(d,2),h=u[0],g=u[1],m=(0,c.useState)(),L=(0,o.Z)(m,2),E=L[0],F=L[1],H=(0,c.useState)(),D=(0,o.Z)(H,2),P=D[0],O=D[1],R=(0,c.useState)(),_=(0,o.Z)(R,2),z=_[0],U=_[1],q=(0,c.useState)(),G=(0,o.Z)(q,2),J=G[0],K=G[1],Q=(0,c.useState)(!1),V=(0,o.Z)(Q,2),X=V[0],Y=V[1],$=(0,c.useState)(!1),ee=(0,o.Z)($,2),ne=ee[0],te=ee[1],oe=n.assemblyNames,ie=oe[s];function re(e,n){var t=(0,W.readConfObject)(e,"name"),i=a.prepareToBreakConnection(e);if(i){var r=(0,o.Z)(i,2),c=r[0],s=r[1];Object.keys(s).length>0?U({connectionConf:e,safelyBreakConnection:c,dereferenceTypeCount:s,name:t}):c()}n&&K({name:t,connectionConf:e})}var ce=[{label:"Turn on/off connections...",onClick:function(){return te(!0)}}];(0,f.isSessionModelWithConnections)(a)&&(ce.unshift({label:"Add connection",onClick:function(){(0,f.isSessionModelWithWidgets)(a)&&a.showWidget(a.addWidget("AddConnectionWidget","addConnectionWidget"))}}),ce.push({label:"Delete connections...",onClick:function(){return Y(!0)}}));var se=oe.length>1?[{label:"Select assembly...",subMenu:oe.map((function(e,n){return{label:e,onClick:function(){return i(n)}}}))}]:[],le=[{label:"Add track...",onClick:function(){(0,f.isSessionModelWithWidgets)(a)&&a.showWidget(a.addWidget("AddTrackWidget","addTrackWidget",{view:n.view.id}))}}].concat(se),ae=(0,T.getEnv)(n).pluginManager.evaluateExtensionPoint("TrackSelector-multiTrackMenuItems");return(0,w.jsxs)("div",{ref:function(e){return t((null===e||void 0===e?void 0:e.getBoundingClientRect().height)||0)},"data-testid":"hierarchical_track_selector",children:[(0,w.jsxs)("div",{style:{display:"flex"},children:[(0,f.isSessionWithAddTracks)(a)&&(0,w.jsx)(v.Z,{className:l.menuIcon,onClick:function(e){return O(e.currentTarget)},children:(0,w.jsx)(j.Z,{})}),a.makeConnection&&(0,w.jsx)(v.Z,{className:l.menuIcon,onClick:function(e){return g(e.currentTarget)},children:(0,w.jsx)(y.sB,{})}),n.selection.length?(0,w.jsx)(v.Z,{className:l.menuIcon,onClick:function(e){return F(e.currentTarget)},children:(0,w.jsx)(k.Z,{badgeContent:n.selection.length,color:"primary",children:(0,w.jsx)(Z.Z,{})})}):null,(0,w.jsx)(C.Z,{className:l.searchBox,label:"Filter tracks",value:n.filterText,onChange:function(e){return n.setFilterText(e.target.value)},fullWidth:!0,InputProps:{endAdornment:(0,w.jsx)(b.Z,{position:"end",children:(0,w.jsx)(v.Z,{color:"secondary",onClick:n.clearFilterText,children:(0,w.jsx)(p.Z,{})})})}})]}),(0,w.jsx)(S.Z,{anchorEl:h,open:Boolean(h),onMenuItemClick:function(e,n){n(),g(void 0)},onClose:function(){return g(void 0)},menuItems:ce}),(0,w.jsx)(S.Z,{anchorEl:P,open:Boolean(P),onMenuItemClick:function(e,n){n(),O(void 0)},onClose:function(){return O(void 0)},menuItems:le}),(0,w.jsx)(S.Z,{anchorEl:E,open:Boolean(E),onMenuItemClick:function(e,n){n(),F(void 0)},onClose:function(){return F(void 0)},menuItems:[{label:"Clear",onClick:function(){return n.clearSelection()}}].concat((0,x.Z)(ae.map((function(e){return(0,r.Z)((0,r.Z)({},e),"onClick"in e?{onClick:function(){return e.onClick(n)}}:{})}))))}),(0,w.jsxs)(c.Suspense,{fallback:(0,w.jsx)("div",{}),children:[z?(0,w.jsx)(I,{modalInfo:z,setModalInfo:U}):null,J?(0,w.jsx)(M,{handleClose:function(){return K(void 0)},deleteDialogDetails:J,session:a}):null,X?(0,w.jsx)(A,{handleClose:function(){return Y(!1)},breakConnection:re,session:a}):null,ne?(0,w.jsx)(N,{handleClose:function(){return te(!1)},session:a,breakConnection:re,assemblyName:ie}):null]})]})})),E=t(70054),F=t(21777),H=t(78742),D=t(21268),P=t(97475),O=t(5713),R=t(28722);function _(e){return((null===e||void 0===e?void 0:e.children.map((function(e){return e.children.length?_(e):e.conf})))||[]).flat(1/0)}var z=(0,d.ZL)()((function(e){return{compactCheckbox:{padding:0},checkboxLabel:{marginRight:0,"&:hover":{backgroundColor:"#eee"}},contrastColor:{color:e.palette.secondary.contrastText},accordionBase:{display:"flex"},accordionCard:{padding:3,cursor:"pointer",display:"flex"},nestingLevelMarker:{position:"absolute",borderLeft:"1.5px solid #555"},accordionColor:{background:e.palette.tertiary.main,color:e.palette.tertiary.contrastText,width:"100%",display:"flex",paddingLeft:5},accordionText:{margin:"auto 0"}}}));function U(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;e.id&&e.children.length&&n.set(e.id,e);for(var t=0;t<e.children.length;t++){var o=e.children[t];U(o,n)}return n}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.endsWith("(Unsupported)")||e.endsWith("(Unknown)")}function G(e){var n,t,i=e.data,r=e.isOpen,s=e.style,l=e.setOpen,a=i.checked,d=i.conf,u=i.drawerPosition,h=i.id,g=i.isLeaf,m=i.model,k=i.name,C=i.nestingLevel,b=i.onChange,p=i.selected,j=i.toggleCollapse,Z=i.tree,y=z().classes,T=(0,c.useState)(null),I=(0,o.Z)(T,2),M=I[0],A=I[1],N=(0,c.useState)(),B=(0,o.Z)(N,2),L=B[0],G=B[1],J=10*C+(g?10:0),K=d&&(0,W.readConfObject)(d,["description"])||"";return(0,w.jsxs)("div",{style:s,className:g?void 0:y.accordionBase,children:[new Array(C).fill(0).map((function(e,n){return(0,w.jsx)("div",{style:{left:10*n+4,height:null===s||void 0===s?void 0:s.height},className:y.nestingLevelMarker},"mark-".concat(n))})),(0,w.jsx)("div",{className:g?void 0:y.accordionCard,onClick:function(){M||(j(h),l(!r))},style:{marginLeft:J,whiteSpace:"nowrap",width:"100%"},children:(0,w.jsxs)("div",{className:g?void 0:y.accordionColor,children:[g?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(F.Z,{title:K+(p?" (in selection)":""),placement:"left"===u?"right":"left",children:(0,w.jsx)(H.Z,{className:y.checkboxLabel,control:(0,w.jsx)(D.Z,{className:y.compactCheckbox,checked:a,onChange:function(){return b(h)},disabled:q(k),inputProps:{"data-testid":"htsTrackEntry-".concat(h)}}),label:(0,w.jsx)("div",{style:{background:p?"#cccc":void 0,padding:1},children:k})})}),(0,w.jsx)(v.Z,{onClick:function(e){return G({target:e.currentTarget,id:h,conf:d})},style:{padding:0},color:"secondary","data-testid":"htsTrackEntryMenu-".concat(h),children:(0,w.jsx)(R.Z,{})})]}):(0,w.jsx)("div",{className:y.accordionText,children:(0,w.jsxs)(E.Z,{children:[r?(0,w.jsx)(P.Z,{}):(0,w.jsx)(O.Z,{}),k,(0,w.jsx)(v.Z,{onClick:function(e){A(e.currentTarget),e.stopPropagation()},className:y.contrastColor,children:(0,w.jsx)(R.Z,{})})]})}),M?(0,w.jsx)(S.Z,{anchorEl:M,menuItems:[{label:"Add to selection",onClick:function(){return m.addToSelection(_(U(Z).get(h)))}},{label:"Remove from selection",onClick:function(){return m.removeFromSelection(_(U(Z).get(h)))}}],onMenuItemClick:function(e,n){n(),A(null)},open:Boolean(M),onClose:function(){return A(null)}}):null,L?(0,w.jsx)(S.Z,{anchorEl:null===L||void 0===L?void 0:L.target,menuItems:[].concat((0,x.Z)((null===(n=(t=(0,f.getSession)(m)).getTrackActionMenuItems)||void 0===n?void 0:n.call(t,L.conf))||[]),[{label:"Add to selection",onClick:function(){return m.addToSelection([L.conf])}}],(0,x.Z)(p?[{label:"Remove from selection",onClick:function(){return m.removeFromSelection([L.conf])}}]:[])),onMenuItemClick:function(e,n){n(),G(void 0)},open:Boolean(L),onClose:function(){return G(void 0)}}):null]})})]})}var J=(0,d.ZL)()((function(e){return{fab:{position:"absolute",bottom:e.spacing(6),right:e.spacing(6)}}}));function K(e,n,t,o){var i=!!e.conf,c=!!o[e.id];return{data:(0,r.Z)((0,r.Z)({defaultHeight:i?22:40,isLeaf:i,isOpenByDefault:!0,nestingLevel:n,selected:c},e),t),nestingLevel:n,node:e}}var Q=(0,g.observer)((function(e){var n=e.height,t=e.tree,o=e.model,r=o.filterText,s=o.selection,l=o.view,a=(0,c.useRef)(null),d=(0,f.getSession)(o).drawerPosition,u=(0,c.useMemo)((function(){return Object.fromEntries(s.map((function(e){return[e.trackId,e]})))}),[s]),h=(0,c.useMemo)((function(){return{onChange:function(e){return l.toggleTrack(e)},toggleCollapse:function(e){return o.toggleCategory(e)},tree:t,model:o,drawerPosition:d}}),[l,o,d,t]),g=(0,c.useCallback)((0,i.Z)().mark((function e(){var n,o,r,c,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.children.length)){e.next=8;break}return o=t.children[n],e.next=5,K(o,0,h,u);case 5:n++,e.next=1;break;case 8:return void(e.next=11);case 11:r=e.sent,c=0;case 13:if(!(c<r.node.children.length)){e.next=20;break}return s=r.node.children[c],e.next=17,K(s,r.nestingLevel+1,h,u);case 17:c++,e.next=13;break;case 20:e.next=8;break;case 22:case"end":return e.stop()}}),e)})),[t,h,u]);return(0,c.useEffect)((function(){a.current.recomputeTree({refreshNodes:!0,useDefaultHeight:!0})}),[t,r]),(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(m.qF,{ref:a,treeWalker:g,height:n,children:G})})})),V=function(e){var n=e.tree,t=e.model,o=e.offset;return"undefined"===typeof jest?(0,w.jsx)(h.Z,{disableWidth:!0,children:function(e){var i=e.height;return(0,w.jsx)(Q,{height:i-o,model:t,tree:n})}}):(0,w.jsx)(Q,{height:9e3,model:t,tree:n})},X=function(e){var n=e.overrideDimensions,t=e.children;return n?(0,w.jsx)("div",{style:(0,r.Z)({},n),children:t}):(0,w.jsx)(w.Fragment,{children:t})},Y=(0,g.observer)((function(e){var n=e.model,t=e.toolbarHeight,i=e.overrideDimensions,r=J().classes,d=(0,f.getSession)(n),h=(0,c.useState)(null),g=(0,o.Z)(h,2),m=g[0],x=g[1];function v(){x(null)}var k=(0,f.isSessionModelWithConnections)(d),C=(0,f.isSessionWithAddTracks)(d);return(0,w.jsxs)(X,{overrideDimensions:i,children:[(0,w.jsx)($,{model:n,toolbarHeight:t}),C||k?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(s.Z,{color:"secondary",className:r.fab,onClick:function(e){return x(e.currentTarget)},children:(0,w.jsx)(u.Z,{})}),(0,w.jsxs)(l.Z,{anchorEl:m,open:Boolean(m),onClose:function(){return x(null)},children:[k?(0,w.jsx)(a.Z,{onClick:function(){v(),(0,f.isSessionModelWithWidgets)(d)&&d.showWidget(d.addWidget("AddConnectionWidget","addConnectionWidget"))},children:"Add connection"}):null,C?(0,w.jsx)(a.Z,{onClick:function(){v(),(0,f.isSessionModelWithWidgets)(d)&&d.showWidget(d.addWidget("AddTrackWidget","addTrackWidget",{view:n.view.id}))},children:"Add track"}):null]})]}):null]})})),$=(0,g.observer)((function(e){var n=e.model,t=e.toolbarHeight,i=void 0===t?0:t,r=(0,c.useState)(0),s=(0,o.Z)(r,2),l=s[0],a=s[1],d=(0,c.useState)(0),u=(0,o.Z)(d,2),h=u[0],f=u[1],g=n.assemblyNames[l];return g?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(L,{model:n,setHeaderHeight:f,setAssemblyIdx:a,assemblyIdx:l}),(0,w.jsx)(V,{tree:n.hierarchy(g),model:n,offset:i+h})]}):null})),ee=Y}}]);
//# sourceMappingURL=4859.59ab17dc.chunk.js.map