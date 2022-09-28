"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6068],{52849:function(e,t,n){n.d(t,{Z:function(){return z}});var r=n(56666),o=n(31461),a=n(7896),i=n(30969),c=n(26540),l=n(74262),s=n(56844),u=n(2441),f=n(12104),d=n(37574),h=(0,f.Z)((0,d.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),v=(0,f.Z)((0,d.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),g=n(62221),p=(0,g.ZP)("span")({position:"relative",display:"flex"}),m=(0,g.ZP)(h)({transform:"scale(1)"}),C=(0,g.ZP)(v)((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})})}));var Z=function(e){var t=e.checked,n=void 0!==t&&t,r=e.classes,o=void 0===r?{}:r,i=e.fontSize,c=(0,a.Z)({},e,{checked:n});return(0,d.jsxs)(p,{className:o.root,ownerState:c,children:[(0,d.jsx)(m,{fontSize:i,className:o.background,ownerState:c}),(0,d.jsx)(C,{fontSize:i,className:o.dot,ownerState:c})]})},b=n(99853),k=n(74223),w=n(67889),x=n(5318),A=["checked","checkedIcon","color","icon","name","onChange","size"],y=(0,g.ZP)(s.Z,{shouldForwardProp:function(e){return(0,g.FO)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["color".concat((0,b.Z)(n.color))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({color:(t.vars||t).palette.text.secondary,"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===n.color?t.vars.palette.action.activeChannel:t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===n.color?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(0,r.Z)({},"&.".concat(x.Z.checked),{color:(t.vars||t).palette[n.color].main}),(0,r.Z)({},"&.".concat(x.Z.disabled),{color:(t.vars||t).palette.action.disabled}))}));var S=(0,d.jsx)(Z,{checked:!0}),j=(0,d.jsx)(Z,{}),z=i.forwardRef((function(e,t){var n,r,l,s,f=(0,u.Z)({props:e,name:"MuiRadio"}),h=f.checked,v=f.checkedIcon,g=void 0===v?S:v,p=f.color,m=void 0===p?"primary":p,C=f.icon,Z=void 0===C?j:C,z=f.name,R=f.onChange,O=f.size,P=void 0===O?"medium":O,I=(0,o.Z)(f,A),M=(0,a.Z)({},f,{color:m,size:P}),E=function(e){var t=e.classes,n=e.color,r={root:["root","color".concat((0,b.Z)(n))]};return(0,a.Z)({},t,(0,c.Z)(r,x.l,t))}(M),_=(0,w.Z)(),N=h,T=(0,k.Z)(R,_&&_.onChange),q=z;return _&&("undefined"===typeof N&&(l=_.value,N="object"===typeof(s=f.value)&&null!==s?l===s:String(l)===String(s)),"undefined"===typeof q&&(q=_.name)),(0,d.jsx)(y,(0,a.Z)({type:"radio",icon:i.cloneElement(Z,{fontSize:null!=(n=j.props.fontSize)?n:P}),checkedIcon:i.cloneElement(g,{fontSize:null!=(r=S.props.fontSize)?r:P}),ownerState:M,classes:E,name:q,checked:N,onChange:T,ref:t},I))}))},5318:function(e,t,n){n.d(t,{l:function(){return o}});var r=n(2975);function o(e){return(0,r.Z)("MuiRadio",e)}var a=(0,n(62746).Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]);t.Z=a},72243:function(e,t,n){var r=n(96234),o=n(7896),a=n(31461),i=n(30969),c=n(20098),l=n(63970),s=n(61506),u=n(72038),f=n(41806),d=n(37574),h=["actions","children","defaultValue","name","onChange","value"],v=i.forwardRef((function(e,t){var n=e.actions,v=e.children,g=e.defaultValue,p=e.name,m=e.onChange,C=e.value,Z=(0,a.Z)(e,h),b=i.useRef(null),k=(0,s.Z)({controlled:C,default:g,name:"RadioGroup"}),w=(0,r.Z)(k,2),x=w[0],A=w[1];i.useImperativeHandle(n,(function(){return{focus:function(){var e=b.current.querySelector("input:not(:disabled):checked");e||(e=b.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var y=(0,l.Z)(t,b),S=(0,f.Z)(p);return(0,d.jsx)(u.Z.Provider,{value:{name:S,onChange:function(e){A(e.target.value),m&&m(e,e.target.value)},value:x},children:(0,d.jsx)(c.Z,(0,o.Z)({role:"radiogroup",ref:y},Z,{children:v}))})}));t.Z=v},72038:function(e,t,n){var r=n(30969).createContext(void 0);t.Z=r},67889:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(30969),o=n(72038);function a(){return r.useContext(o.Z)}},22523:function(e,t,n){var r=n(40475);function o(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function a(e,t){for(var n,r="",o=0,a=-1,i=0,c=0;c<=e.length;++c){if(c<e.length)n=e.charCodeAt(c);else{if(47===n)break;n=47}if(47===n){if(a===c-1||1===i);else if(a!==c-1&&2===i){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){-1===l?(r="",o=0):o=(r=r.slice(0,l)).length-1-r.lastIndexOf("/"),a=c,i=0;continue}}else if(2===r.length||1===r.length){r="",o=0,a=c,i=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(a+1,c):r=e.slice(a+1,c),o=c-a-1;a=c,i=0}else 46===n&&-1!==i?++i:i=-1}return r}var i={resolve:function(){for(var e,t="",n=!1,i=arguments.length-1;i>=-1&&!n;i--){var c;i>=0?c=arguments[i]:(void 0===e&&(e=r.cwd()),c=e),o(c),0!==c.length&&(t=c+"/"+t,n=47===c.charCodeAt(0))}return t=a(t,!n),n?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(o(e),0===e.length)return".";var t=47===e.charCodeAt(0),n=47===e.charCodeAt(e.length-1);return 0!==(e=a(e,!t)).length||t||(e="."),e.length>0&&n&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return o(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var n=arguments[t];o(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":i.normalize(e)},relative:function(e,t){if(o(e),o(t),e===t)return"";if((e=i.resolve(e))===(t=i.resolve(t)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var r=e.length,a=r-n,c=1;c<t.length&&47===t.charCodeAt(c);++c);for(var l=t.length-c,s=a<l?a:l,u=-1,f=0;f<=s;++f){if(f===s){if(l>s){if(47===t.charCodeAt(c+f))return t.slice(c+f+1);if(0===f)return t.slice(c+f)}else a>s&&(47===e.charCodeAt(n+f)?u=f:0===f&&(u=0));break}var d=e.charCodeAt(n+f);if(d!==t.charCodeAt(c+f))break;47===d&&(u=f)}var h="";for(f=n+u+1;f<=r;++f)f!==r&&47!==e.charCodeAt(f)||(0===h.length?h+="..":h+="/..");return h.length>0?h+t.slice(c+u):(c+=u,47===t.charCodeAt(c)&&++c,t.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(o(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,a=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!a){r=i;break}}else a=!1;return-1===r?n?"/":".":n&&1===r?"//":e.slice(0,r)},basename:function(e,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');o(e);var n,r=0,a=-1,i=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var c=t.length-1,l=-1;for(n=e.length-1;n>=0;--n){var s=e.charCodeAt(n);if(47===s){if(!i){r=n+1;break}}else-1===l&&(i=!1,l=n+1),c>=0&&(s===t.charCodeAt(c)?-1===--c&&(a=n):(c=-1,a=l))}return r===a?a=l:-1===a&&(a=e.length),e.slice(r,a)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!i){r=n+1;break}}else-1===a&&(i=!1,a=n+1);return-1===a?"":e.slice(r,a)},extname:function(e){o(e);for(var t=-1,n=0,r=-1,a=!0,i=0,c=e.length-1;c>=0;--c){var l=e.charCodeAt(c);if(47!==l)-1===r&&(a=!1,r=c+1),46===l?-1===t?t=c:1!==i&&(i=1):-1!==t&&(i=-1);else if(!a){n=c+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){o(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,r=e.charCodeAt(0),a=47===r;a?(t.root="/",n=1):n=0;for(var i=-1,c=0,l=-1,s=!0,u=e.length-1,f=0;u>=n;--u)if(47!==(r=e.charCodeAt(u)))-1===l&&(s=!1,l=u+1),46===r?-1===i?i=u:1!==f&&(f=1):-1!==i&&(f=-1);else if(!s){c=u+1;break}return-1===i||-1===l||0===f||1===f&&i===l-1&&i===c+1?-1!==l&&(t.base=t.name=0===c&&a?e.slice(1,l):e.slice(c,l)):(0===c&&a?(t.name=e.slice(1,i),t.base=e.slice(1,l)):(t.name=e.slice(c,i),t.base=e.slice(c,l)),t.ext=e.slice(i,l)),c>0?t.dir=e.slice(0,c-1):a&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i}}]);
//# sourceMappingURL=6068.51a17480.chunk.js.map