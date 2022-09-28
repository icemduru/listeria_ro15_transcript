/*! For license information please see 2098.694ad399.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2098],{42098:function(t,e,n){n.r(e),n.d(e,{BgzfFilehandle:function(){return V},unzip:function(){return c},unzipChunk:function(){return g},unzipChunkSlice:function(){return d}});var i=n(96234),r=n(32723),s=n(34795),h=n(9249),u=n(87371),o=n(26700),a=n(49882).lW;function c(t){return l.apply(this,arguments)}function l(){return(l=(0,s.Z)((0,r.Z)().mark((function t(e){var n,i,s,h,u,c,l,g,f,d;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,i=0,s=0,h=[],u=0;case 5:if(l=e.subarray(i),c=new o.Inflate,n=c.strm,c.push(l,o.Z_SYNC_FLUSH),!c.err){t.next=12;break}throw new Error(c.msg);case 12:i+=n.next_in,h[s]=c.result,u+=h[s].length,s+=1;case 16:if(n.avail_in){t.next=5;break}case 17:for(g=new Uint8Array(u),f=0,d=0;f<h.length;f++)g.set(h[f],d),d+=h[f].length;return t.abrupt("return",a.from(g));case 22:if(t.prev=22,t.t0=t.catch(0),!"".concat(t.t0).match(/incorrect header check/)){t.next=26;break}throw new Error("problem decompressing block: incorrect gzip header check");case 26:throw t.t0;case 27:case"end":return t.stop()}}),t,null,[[0,22]])})))).apply(this,arguments)}function g(t){return f.apply(this,arguments)}function f(){return(f=(0,s.Z)((0,r.Z)().mark((function t(e){var n,i,s,h,u,c,l,g,f,d;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,i=0,s=0,h=[],u=[],c=[];case 6:if(l=e.slice(i),g=new o.Inflate,n=g.strm,g.push(l,o.Z_SYNC_FLUSH),!g.err){t.next=12;break}throw new Error(g.msg);case 12:f=a.from(g.result),h.push(f),u.push(i),c.push(s),i+=n.next_in,s+=f.length;case 18:if(n.avail_in){t.next=6;break}case 19:return d=a.concat(h),t.abrupt("return",{buffer:d,cpositions:u,dpositions:c});case 23:if(t.prev=23,t.t0=t.catch(0),!"".concat(t.t0).match(/incorrect header check/)){t.next=27;break}throw new Error("problem decompressing block: incorrect gzip header check");case 27:throw t.t0;case 28:case"end":return t.stop()}}),t,null,[[0,23]])})))).apply(this,arguments)}function d(t,e){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)((0,r.Z)().mark((function t(e,n){var i,s,h,u,c,l,g,f,d,p,w,v,b,m,k,y,x,_,E;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,s=n.minv,h=n.maxv,u=s.blockPosition,c=s.dataPosition,l=[],g=[],f=[],d=0,p=0;case 9:if(w=e.subarray(u-s.blockPosition),v=new o.Inflate,i=v.strm,v.push(w,o.Z_SYNC_FLUSH),!v.err){t.next=15;break}throw new Error(v.msg);case 15:if(b=v.result,l.push(b),m=b.length,g.push(u),f.push(c),1===l.length&&s.dataPosition&&(l[0]=l[0].subarray(s.dataPosition),m=l[0].length),k=u,u+=i.next_in,c+=m,!(k>=h.blockPosition)){t.next=30;break}return l[p]=l[p].subarray(0,h.blockPosition===s.blockPosition?h.dataPosition-s.dataPosition+1:h.dataPosition+1),g.push(u),f.push(c),d+=l[p].length,t.abrupt("break",33);case 30:d+=l[p].length,p++;case 32:if(i.avail_in){t.next=9;break}case 33:for(y=new Uint8Array(d),x=0,_=0;x<l.length;x++)y.set(l[x],_),_+=l[x].length;return E=a.from(y),t.abrupt("return",{buffer:E,cpositions:g,dpositions:f});case 39:if(t.prev=39,t.t0=t.catch(0),!"".concat(t.t0).match(/incorrect header check/)){t.next=43;break}throw new Error("problem decompressing block: incorrect gzip header check");case 43:throw t.t0;case 44:case"end":return t.stop()}}),t,null,[[0,39]])})))).apply(this,arguments)}var w=null;try{w=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(X){}function v(t,e,n){this.low=0|t,this.high=0|e,this.unsigned=!!n}function b(t){return!0===(t&&t.__isLong__)}function m(t){var e=Math.clz32(t&-t);return t?31-e:e}v.prototype.__isLong__,Object.defineProperty(v.prototype,"__isLong__",{value:!0}),v.isLong=b;var k={},y={};function x(t,e){var n,i,r;return e?(r=0<=(t>>>=0)&&t<256)&&(i=y[t])?i:(n=E(t,0,!0),r&&(y[t]=n),n):(r=-128<=(t|=0)&&t<128)&&(i=k[t])?i:(n=E(t,t<0?-1:0,!1),r&&(k[t]=n),n)}function _(t,e){if(isNaN(t))return e?S:q;if(e){if(t<0)return S;if(t>=I)return R}else{if(t<=-z)return P;if(t+1>=z)return M}return t<0?_(-t,e).neg():E(t%B|0,t/B|0,e)}function E(t,e,n){return new v(t,e,n)}v.fromInt=x,v.fromNumber=_,v.fromBits=E;var Z=Math.pow;function N(t,e,n){if(0===t.length)throw Error("empty string");if("number"===typeof e?(n=e,e=!1):e=!!e,"NaN"===t||"Infinity"===t||"+Infinity"===t||"-Infinity"===t)return e?S:q;if((n=n||10)<2||36<n)throw RangeError("radix");var i;if((i=t.indexOf("-"))>0)throw Error("interior hyphen");if(0===i)return N(t.substring(1),e,n).neg();for(var r=_(Z(n,8)),s=q,h=0;h<t.length;h+=8){var u=Math.min(8,t.length-h),o=parseInt(t.substring(h,h+u),n);if(u<8){var a=_(Z(n,u));s=s.mul(a).add(_(o))}else s=(s=s.mul(r)).add(_(o))}return s.unsigned=e,s}function L(t,e){return"number"===typeof t?_(t,e):"string"===typeof t?N(t,e):E(t.low,t.high,"boolean"===typeof e?e:t.unsigned)}v.fromString=N,v.fromValue=L;var B=4294967296,I=B*B,z=I/2,U=x(1<<24),q=x(0);v.ZERO=q;var S=x(0,!0);v.UZERO=S;var T=x(1);v.ONE=T;var O=x(1,!0);v.UONE=O;var A=x(-1);v.NEG_ONE=A;var M=E(-1,2147483647,!1);v.MAX_VALUE=M;var R=E(-1,-1,!0);v.MAX_UNSIGNED_VALUE=R;var P=E(0,-2147483648,!1);v.MIN_VALUE=P;var F=v.prototype;F.toInt=function(){return this.unsigned?this.low>>>0:this.low},F.toNumber=function(){return this.unsigned?(this.high>>>0)*B+(this.low>>>0):this.high*B+(this.low>>>0)},F.toString=function(t){if((t=t||10)<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(P)){var e=_(t),n=this.div(e),i=n.mul(e).sub(this);return n.toString(t)+i.toInt().toString(t)}return"-"+this.neg().toString(t)}for(var r=_(Z(t,6),this.unsigned),s=this,h="";;){var u=s.div(r),o=(s.sub(u.mul(r)).toInt()>>>0).toString(t);if((s=u).isZero())return o+h;for(;o.length<6;)o="0"+o;h=""+o+h}},F.getHighBits=function(){return this.high},F.getHighBitsUnsigned=function(){return this.high>>>0},F.getLowBits=function(){return this.low},F.getLowBitsUnsigned=function(){return this.low>>>0},F.getNumBitsAbs=function(){if(this.isNegative())return this.eq(P)?64:this.neg().getNumBitsAbs();for(var t=0!=this.high?this.high:this.low,e=31;e>0&&0==(t&1<<e);e--);return 0!=this.high?e+33:e+1},F.isZero=function(){return 0===this.high&&0===this.low},F.eqz=F.isZero,F.isNegative=function(){return!this.unsigned&&this.high<0},F.isPositive=function(){return this.unsigned||this.high>=0},F.isOdd=function(){return 1===(1&this.low)},F.isEven=function(){return 0===(1&this.low)},F.equals=function(t){return b(t)||(t=L(t)),(this.unsigned===t.unsigned||this.high>>>31!==1||t.high>>>31!==1)&&(this.high===t.high&&this.low===t.low)},F.eq=F.equals,F.notEquals=function(t){return!this.eq(t)},F.neq=F.notEquals,F.ne=F.notEquals,F.lessThan=function(t){return this.comp(t)<0},F.lt=F.lessThan,F.lessThanOrEqual=function(t){return this.comp(t)<=0},F.lte=F.lessThanOrEqual,F.le=F.lessThanOrEqual,F.greaterThan=function(t){return this.comp(t)>0},F.gt=F.greaterThan,F.greaterThanOrEqual=function(t){return this.comp(t)>=0},F.gte=F.greaterThanOrEqual,F.ge=F.greaterThanOrEqual,F.compare=function(t){if(b(t)||(t=L(t)),this.eq(t))return 0;var e=this.isNegative(),n=t.isNegative();return e&&!n?-1:!e&&n?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1},F.comp=F.compare,F.negate=function(){return!this.unsigned&&this.eq(P)?P:this.not().add(T)},F.neg=F.negate,F.add=function(t){b(t)||(t=L(t));var e=this.high>>>16,n=65535&this.high,i=this.low>>>16,r=65535&this.low,s=t.high>>>16,h=65535&t.high,u=t.low>>>16,o=0,a=0,c=0,l=0;return c+=(l+=r+(65535&t.low))>>>16,a+=(c+=i+u)>>>16,o+=(a+=n+h)>>>16,o+=e+s,E((c&=65535)<<16|(l&=65535),(o&=65535)<<16|(a&=65535),this.unsigned)},F.subtract=function(t){return b(t)||(t=L(t)),this.add(t.neg())},F.sub=F.subtract,F.multiply=function(t){if(this.isZero())return this;if(b(t)||(t=L(t)),w)return E(w.mul(this.low,this.high,t.low,t.high),w.get_high(),this.unsigned);if(t.isZero())return this.unsigned?S:q;if(this.eq(P))return t.isOdd()?P:q;if(t.eq(P))return this.isOdd()?P:q;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(U)&&t.lt(U))return _(this.toNumber()*t.toNumber(),this.unsigned);var e=this.high>>>16,n=65535&this.high,i=this.low>>>16,r=65535&this.low,s=t.high>>>16,h=65535&t.high,u=t.low>>>16,o=65535&t.low,a=0,c=0,l=0,g=0;return l+=(g+=r*o)>>>16,c+=(l+=i*o)>>>16,l&=65535,c+=(l+=r*u)>>>16,a+=(c+=n*o)>>>16,c&=65535,a+=(c+=i*u)>>>16,c&=65535,a+=(c+=r*h)>>>16,a+=e*o+n*u+i*h+r*s,E((l&=65535)<<16|(g&=65535),(a&=65535)<<16|(c&=65535),this.unsigned)},F.mul=F.multiply,F.divide=function(t){if(b(t)||(t=L(t)),t.isZero())throw Error("division by zero");var e,n,i;if(w)return this.unsigned||-2147483648!==this.high||-1!==t.low||-1!==t.high?E((this.unsigned?w.div_u:w.div_s)(this.low,this.high,t.low,t.high),w.get_high(),this.unsigned):this;if(this.isZero())return this.unsigned?S:q;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return S;if(t.gt(this.shru(1)))return O;i=S}else{if(this.eq(P))return t.eq(T)||t.eq(A)?P:t.eq(P)?T:(e=this.shr(1).div(t).shl(1)).eq(q)?t.isNegative()?T:A:(n=this.sub(t.mul(e)),i=e.add(n.div(t)));if(t.eq(P))return this.unsigned?S:q;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();i=q}for(n=this;n.gte(t);){e=Math.max(1,Math.floor(n.toNumber()/t.toNumber()));for(var r=Math.ceil(Math.log(e)/Math.LN2),s=r<=48?1:Z(2,r-48),h=_(e),u=h.mul(t);u.isNegative()||u.gt(n);)u=(h=_(e-=s,this.unsigned)).mul(t);h.isZero()&&(h=T),i=i.add(h),n=n.sub(u)}return i},F.div=F.divide,F.modulo=function(t){return b(t)||(t=L(t)),w?E((this.unsigned?w.rem_u:w.rem_s)(this.low,this.high,t.low,t.high),w.get_high(),this.unsigned):this.sub(this.div(t).mul(t))},F.mod=F.modulo,F.rem=F.modulo,F.not=function(){return E(~this.low,~this.high,this.unsigned)},F.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32},F.clz=F.countLeadingZeros,F.countTrailingZeros=function(){return this.low?m(this.low):m(this.high)+32},F.ctz=F.countTrailingZeros,F.and=function(t){return b(t)||(t=L(t)),E(this.low&t.low,this.high&t.high,this.unsigned)},F.or=function(t){return b(t)||(t=L(t)),E(this.low|t.low,this.high|t.high,this.unsigned)},F.xor=function(t){return b(t)||(t=L(t)),E(this.low^t.low,this.high^t.high,this.unsigned)},F.shiftLeft=function(t){return b(t)&&(t=t.toInt()),0===(t&=63)?this:t<32?E(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):E(0,this.low<<t-32,this.unsigned)},F.shl=F.shiftLeft,F.shiftRight=function(t){return b(t)&&(t=t.toInt()),0===(t&=63)?this:t<32?E(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):E(this.high>>t-32,this.high>=0?0:-1,this.unsigned)},F.shr=F.shiftRight,F.shiftRightUnsigned=function(t){return b(t)&&(t=t.toInt()),0===(t&=63)?this:t<32?E(this.low>>>t|this.high<<32-t,this.high>>>t,this.unsigned):E(32===t?this.high:this.high>>>t-32,0,this.unsigned)},F.shru=F.shiftRightUnsigned,F.shr_u=F.shiftRightUnsigned,F.rotateLeft=function(t){var e;return b(t)&&(t=t.toInt()),0===(t&=63)?this:32===t?E(this.high,this.low,this.unsigned):t<32?(e=32-t,E(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned)):(e=32-(t-=32),E(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned))},F.rotl=F.rotateLeft,F.rotateRight=function(t){var e;return b(t)&&(t=t.toInt()),0===(t&=63)?this:32===t?E(this.high,this.low,this.unsigned):t<32?(e=32-t,E(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned)):(e=32-(t-=32),E(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned))},F.rotr=F.rotateRight,F.toSigned=function(){return this.unsigned?E(this.low,this.high,!1):this},F.toUnsigned=function(){return this.unsigned?this:E(this.low,this.high,!0)},F.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()},F.toBytesLE=function(){var t=this.high,e=this.low;return[255&e,e>>>8&255,e>>>16&255,e>>>24,255&t,t>>>8&255,t>>>16&255,t>>>24]},F.toBytesBE=function(){var t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,255&t,e>>>24,e>>>16&255,e>>>8&255,255&e]},v.fromBytes=function(t,e,n){return n?v.fromBytesLE(t,e):v.fromBytesBE(t,e)},v.fromBytesLE=function(t,e){return new v(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)},v.fromBytesBE=function(t,e){return new v(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)};var W=v,C=n(2877),G=n(49882).lW,H=function(){function t(e){var n=e.filehandle,i=e.path;if((0,h.Z)(this,t),n)this.filehandle=n;else{if(!i)throw new TypeError("either filehandle or path must be defined");this.filehandle=new C.S9(i)}}return(0,u.Z)(t,[{key:"_readLongWithOverflow",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=W.fromBytesLE(t.slice(e,e+8),n);if(i.greaterThan(Number.MAX_SAFE_INTEGER)||i.lessThan(Number.MIN_SAFE_INTEGER))throw new TypeError("integer overflow");return i.toNumber()}},{key:"_getIndex",value:function(){return this.index||(this.index=this._readIndex()),this.index}},{key:"_readIndex",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(){var e,n,i,s,h,u,o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=G.allocUnsafe(8),t.next=3,this.filehandle.read(e,0,8,0);case 3:if(n=this._readLongWithOverflow(e,0,!0)){t.next=6;break}return t.abrupt("return",[[0,0]]);case 6:if((i=new Array(n+1))[0]=[0,0],!((s=16*n)>Number.MAX_SAFE_INTEGER)){t.next=11;break}throw new TypeError("integer overflow");case 11:return e=G.allocUnsafe(s),t.next=14,this.filehandle.read(e,0,s,8);case 14:for(h=0;h<n;h+=1)u=this._readLongWithOverflow(e,16*h),o=this._readLongWithOverflow(e,16*h+8),i[h+1]=[u,o];return t.abrupt("return",i);case 16:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getLastBlock",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._getIndex();case 2:if((e=t.sent).length){t.next=5;break}return t.abrupt("return",void 0);case 5:return t.abrupt("return",e[e.length-1]);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getRelevantBlocksForRead",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e,n){var i,s,h,u,o,a,c,l,g;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=n+e,0!==e){t.next=3;break}return t.abrupt("return",[]);case 3:return t.next=5,this._getIndex();case 5:for(s=t.sent,h=[],u=function(t,e){var i=t[1],r=e?e[1]:1/0;return i<=n&&r>n?0:i<n?-1:1},o=0,a=s.length-1,c=Math.floor(s.length/2),l=u(s[c],s[c+1]);0!==l;)l>0?a=c-1:l<0&&(o=c+1),c=Math.ceil((a-o)/2)+o,l=u(s[c],s[c+1]);h.push(s[c]),g=c+1;case 15:if(!(g<s.length)){t.next=22;break}if(h.push(s[g]),!(s[g][1]>=i)){t.next=19;break}return t.abrupt("break",22);case 19:g+=1,t.next=15;break;case 22:return h[h.length-1][1]<i&&h.push([]),t.abrupt("return",h);case 24:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()}]),t}(),j=n(49882).lW,V=function(){function t(e){var n=e.filehandle,i=e.path,r=e.gziFilehandle,s=e.gziPath;if((0,h.Z)(this,t),n)this.filehandle=n;else{if(!i)throw new TypeError("either filehandle or path must be defined");this.filehandle=new C.S9(i)}if(!r&&!s&&!i)throw new TypeError("either gziFilehandle or gziPath must be defined");this.gzi=new H({filehandle:r,path:r||s||!i?"".concat(i,".gzi"):s})}return(0,u.Z)(t,[{key:"stat",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.filehandle.stat();case 2:return e=t.sent,t.t0=Object,t.t1=e,t.next=7,this.getUncompressedFileSize();case 7:return t.t2=t.sent,t.t3=void 0,t.t4=void 0,t.t5={size:t.t2,blocks:t.t3,blksize:t.t4},t.abrupt("return",t.t0.assign.call(t.t0,t.t1,t.t5));case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getUncompressedFileSize",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(){var e,n,s,h,u,o,a,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.gzi.getLastBlock();case 2:return e=t.sent,n=(0,i.Z)(e,2),s=n[1],t.next=7,this.filehandle.stat();case 7:return h=t.sent,u=h.size,o=j.allocUnsafe(4),t.next=12,this.filehandle.read(o,0,4,u-28-4);case 12:if(a=t.sent,4===a.bytesRead){t.next=16;break}throw new Error("read error");case 16:return c=o.readUInt32LE(0),t.abrupt("return",s+c);case 18:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"_readAndUncompressBlock",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e,n,s){var h,u,o,a,l,g,f;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h=(0,i.Z)(n,1),u=h[0],o=(0,i.Z)(s,1),a=o[0],l=a){t.next=7;break}return t.next=6,this.filehandle.stat();case 6:l=t.sent.size;case 7:return g=l-u,t.next=10,this.filehandle.read(e,0,g,u);case 10:return t.next=12,c(e.slice(0,g));case 12:return f=t.sent,t.abrupt("return",f);case 14:case"end":return t.stop()}}),t,this)})));return function(e,n,i){return t.apply(this,arguments)}}()},{key:"read",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e,n,s,h){var u,o,a,c,l,g,f,d,p,w;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.gzi.getRelevantBlocksForRead(s,h);case 2:u=t.sent,o=j.allocUnsafe(65536),a=n,c=0,l=0;case 7:if(!(l<u.length-1)){t.next=18;break}return t.next=10,this._readAndUncompressBlock(o,u[l],u[l+1]);case 10:g=t.sent,f=(0,i.Z)(u[l],2),d=f[1],p=d>=h?0:h-d,w=Math.min(h+s,d+g.length)-d,p>=0&&p<g.length&&(g.copy(e,a,p,w),a+=w-p,c+=w-p);case 15:l+=1,t.next=7;break;case 18:return t.abrupt("return",{bytesRead:c,buffer:e});case 19:case"end":return t.stop()}}),t,this)})));return function(e,n,i,r){return t.apply(this,arguments)}}()}]),t}()}}]);
//# sourceMappingURL=2098.694ad399.chunk.js.map