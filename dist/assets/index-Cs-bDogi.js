(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Dh={exports:{}},pa={},xh={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function g0(){if(wm)return Ae;wm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.iterator;function L(x){return x===null||typeof x!="object"?null:(x=R&&x[R]||x["@@iterator"],typeof x=="function"?x:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,j={};function B(x,q,le){this.props=x,this.context=q,this.refs=j,this.updater=le||F}B.prototype.isReactComponent={},B.prototype.setState=function(x,q){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,q,"setState")},B.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function me(){}me.prototype=B.prototype;function ne(x,q,le){this.props=x,this.context=q,this.refs=j,this.updater=le||F}var ue=ne.prototype=new me;ue.constructor=ne,K(ue,B.prototype),ue.isPureReactComponent=!0;var pe=Array.isArray,Fe=Object.prototype.hasOwnProperty,we={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(x,q,le){var Ie,Se={},Ne=null,Le=null;if(q!=null)for(Ie in q.ref!==void 0&&(Le=q.ref),q.key!==void 0&&(Ne=""+q.key),q)Fe.call(q,Ie)&&!N.hasOwnProperty(Ie)&&(Se[Ie]=q[Ie]);var Me=arguments.length-2;if(Me===1)Se.children=le;else if(1<Me){for(var Be=Array(Me),mt=0;mt<Me;mt++)Be[mt]=arguments[mt+2];Se.children=Be}if(x&&x.defaultProps)for(Ie in Me=x.defaultProps,Me)Se[Ie]===void 0&&(Se[Ie]=Me[Ie]);return{$$typeof:i,type:x,key:Ne,ref:Le,props:Se,_owner:we.current}}function A(x,q){return{$$typeof:i,type:x.type,key:q,ref:x.ref,props:x.props,_owner:x._owner}}function k(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function D(x){var q={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(le){return q[le]})}var V=/\/+/g;function S(x,q){return typeof x=="object"&&x!==null&&x.key!=null?D(""+x.key):q.toString(36)}function et(x,q,le,Ie,Se){var Ne=typeof x;(Ne==="undefined"||Ne==="boolean")&&(x=null);var Le=!1;if(x===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(x.$$typeof){case i:case e:Le=!0}}if(Le)return Le=x,Se=Se(Le),x=Ie===""?"."+S(Le,0):Ie,pe(Se)?(le="",x!=null&&(le=x.replace(V,"$&/")+"/"),et(Se,q,le,"",function(mt){return mt})):Se!=null&&(k(Se)&&(Se=A(Se,le+(!Se.key||Le&&Le.key===Se.key?"":(""+Se.key).replace(V,"$&/")+"/")+x)),q.push(Se)),1;if(Le=0,Ie=Ie===""?".":Ie+":",pe(x))for(var Me=0;Me<x.length;Me++){Ne=x[Me];var Be=Ie+S(Ne,Me);Le+=et(Ne,q,le,Be,Se)}else if(Be=L(x),typeof Be=="function")for(x=Be.call(x),Me=0;!(Ne=x.next()).done;)Ne=Ne.value,Be=Ie+S(Ne,Me++),Le+=et(Ne,q,le,Be,Se);else if(Ne==="object")throw q=String(x),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Le}function kt(x,q,le){if(x==null)return x;var Ie=[],Se=0;return et(x,Ie,"","",function(Ne){return q.call(le,Ne,Se++)}),Ie}function Pt(x){if(x._status===-1){var q=x._result;q=q(),q.then(function(le){(x._status===0||x._status===-1)&&(x._status=1,x._result=le)},function(le){(x._status===0||x._status===-1)&&(x._status=2,x._result=le)}),x._status===-1&&(x._status=0,x._result=q)}if(x._status===1)return x._result.default;throw x._result}var ze={current:null},J={transition:null},he={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:J,ReactCurrentOwner:we};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:kt,forEach:function(x,q,le){kt(x,function(){q.apply(this,arguments)},le)},count:function(x){var q=0;return kt(x,function(){q++}),q},toArray:function(x){return kt(x,function(q){return q})||[]},only:function(x){if(!k(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Ae.Component=B,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=ne,Ae.StrictMode=s,Ae.Suspense=y,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Ae.act=ee,Ae.cloneElement=function(x,q,le){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Ie=K({},x.props),Se=x.key,Ne=x.ref,Le=x._owner;if(q!=null){if(q.ref!==void 0&&(Ne=q.ref,Le=we.current),q.key!==void 0&&(Se=""+q.key),x.type&&x.type.defaultProps)var Me=x.type.defaultProps;for(Be in q)Fe.call(q,Be)&&!N.hasOwnProperty(Be)&&(Ie[Be]=q[Be]===void 0&&Me!==void 0?Me[Be]:q[Be])}var Be=arguments.length-2;if(Be===1)Ie.children=le;else if(1<Be){Me=Array(Be);for(var mt=0;mt<Be;mt++)Me[mt]=arguments[mt+2];Ie.children=Me}return{$$typeof:i,type:x.type,key:Se,ref:Ne,props:Ie,_owner:Le}},Ae.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:u,_context:x},x.Consumer=x},Ae.createElement=T,Ae.createFactory=function(x){var q=T.bind(null,x);return q.type=x,q},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(x){return{$$typeof:m,render:x}},Ae.isValidElement=k,Ae.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:Pt}},Ae.memo=function(x,q){return{$$typeof:v,type:x,compare:q===void 0?null:q}},Ae.startTransition=function(x){var q=J.transition;J.transition={};try{x()}finally{J.transition=q}},Ae.unstable_act=ee,Ae.useCallback=function(x,q){return ze.current.useCallback(x,q)},Ae.useContext=function(x){return ze.current.useContext(x)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(x){return ze.current.useDeferredValue(x)},Ae.useEffect=function(x,q){return ze.current.useEffect(x,q)},Ae.useId=function(){return ze.current.useId()},Ae.useImperativeHandle=function(x,q,le){return ze.current.useImperativeHandle(x,q,le)},Ae.useInsertionEffect=function(x,q){return ze.current.useInsertionEffect(x,q)},Ae.useLayoutEffect=function(x,q){return ze.current.useLayoutEffect(x,q)},Ae.useMemo=function(x,q){return ze.current.useMemo(x,q)},Ae.useReducer=function(x,q,le){return ze.current.useReducer(x,q,le)},Ae.useRef=function(x){return ze.current.useRef(x)},Ae.useState=function(x){return ze.current.useState(x)},Ae.useSyncExternalStore=function(x,q,le){return ze.current.useSyncExternalStore(x,q,le)},Ae.useTransition=function(){return ze.current.useTransition()},Ae.version="18.3.1",Ae}var Tm;function vd(){return Tm||(Tm=1,xh.exports=g0()),xh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function y0(){if(Im)return pa;Im=1;var i=vd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,R={},L=null,F=null;v!==void 0&&(L=""+v),y.key!==void 0&&(L=""+y.key),y.ref!==void 0&&(F=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(R[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)R[w]===void 0&&(R[w]=y[w]);return{$$typeof:e,type:m,key:L,ref:F,props:R,_owner:o.current}}return pa.Fragment=t,pa.jsx=h,pa.jsxs=h,pa}var Sm;function _0(){return Sm||(Sm=1,Dh.exports=y0()),Dh.exports}var Te=_0(),Gn=vd(),iu={},Vh={exports:{}},Qt={},Oh={exports:{}},Lh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function v0(){return Am||(Am=1,function(i){function e(J,he){var ee=J.length;J.push(he);e:for(;0<ee;){var x=ee-1>>>1,q=J[x];if(0<o(q,he))J[x]=he,J[ee]=q,ee=x;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var he=J[0],ee=J.pop();if(ee!==he){J[0]=ee;e:for(var x=0,q=J.length,le=q>>>1;x<le;){var Ie=2*(x+1)-1,Se=J[Ie],Ne=Ie+1,Le=J[Ne];if(0>o(Se,ee))Ne<q&&0>o(Le,Se)?(J[x]=Le,J[Ne]=ee,x=Ne):(J[x]=Se,J[Ie]=ee,x=Ie);else if(Ne<q&&0>o(Le,ee))J[x]=Le,J[Ne]=ee,x=Ne;else break e}}return he}function o(J,he){var ee=J.sortIndex-he.sortIndex;return ee!==0?ee:J.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,R=null,L=3,F=!1,K=!1,j=!1,B=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ue(J){for(var he=t(v);he!==null;){if(he.callback===null)s(v);else if(he.startTime<=J)s(v),he.sortIndex=he.expirationTime,e(y,he);else break;he=t(v)}}function pe(J){if(j=!1,ue(J),!K)if(t(y)!==null)K=!0,Pt(Fe);else{var he=t(v);he!==null&&ze(pe,he.startTime-J)}}function Fe(J,he){K=!1,j&&(j=!1,me(T),T=-1),F=!0;var ee=L;try{for(ue(he),R=t(y);R!==null&&(!(R.expirationTime>he)||J&&!D());){var x=R.callback;if(typeof x=="function"){R.callback=null,L=R.priorityLevel;var q=x(R.expirationTime<=he);he=i.unstable_now(),typeof q=="function"?R.callback=q:R===t(y)&&s(y),ue(he)}else s(y);R=t(y)}if(R!==null)var le=!0;else{var Ie=t(v);Ie!==null&&ze(pe,Ie.startTime-he),le=!1}return le}finally{R=null,L=ee,F=!1}}var we=!1,N=null,T=-1,A=5,k=-1;function D(){return!(i.unstable_now()-k<A)}function V(){if(N!==null){var J=i.unstable_now();k=J;var he=!0;try{he=N(!0,J)}finally{he?S():(we=!1,N=null)}}else we=!1}var S;if(typeof ne=="function")S=function(){ne(V)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,kt=et.port2;et.port1.onmessage=V,S=function(){kt.postMessage(null)}}else S=function(){B(V,0)};function Pt(J){N=J,we||(we=!0,S())}function ze(J,he){T=B(function(){J(i.unstable_now())},he)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){K||F||(K=!0,Pt(Fe))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return L},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(J){switch(L){case 1:case 2:case 3:var he=3;break;default:he=L}var ee=L;L=he;try{return J()}finally{L=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,he){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=L;L=J;try{return he()}finally{L=ee}},i.unstable_scheduleCallback=function(J,he,ee){var x=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?x+ee:x):ee=x,J){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ee+q,J={id:w++,callback:he,priorityLevel:J,startTime:ee,expirationTime:q,sortIndex:-1},ee>x?(J.sortIndex=ee,e(v,J),t(y)===null&&J===t(v)&&(j?(me(T),T=-1):j=!0,ze(pe,ee-x))):(J.sortIndex=q,e(y,J),K||F||(K=!0,Pt(Fe))),J},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(J){var he=L;return function(){var ee=L;L=he;try{return J.apply(this,arguments)}finally{L=ee}}}}(Lh)),Lh}var Rm;function E0(){return Rm||(Rm=1,Oh.exports=v0()),Oh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function w0(){if(Cm)return Qt;Cm=1;var i=vd(),e=E0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},R={};function L(n){return y.call(R,n)?!0:y.call(w,n)?!1:v.test(n)?R[n]=!0:(w[n]=!0,!1)}function F(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function K(n,r,a,c){if(r===null||typeof r>"u"||F(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function j(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new j(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];B[r]=new j(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new j(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new j(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new j(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new j(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new j(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new j(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new j(n,5,!1,n.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ne(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(me,ne);B[r]=new j(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(me,ne);B[r]=new j(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(me,ne);B[r]=new j(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new j(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new j(n,1,!1,n.toLowerCase(),null,!0,!0)});function ue(n,r,a,c){var d=B.hasOwnProperty(r)?B[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(K(r,a,d,c)&&(a=null),c||d===null?L(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var pe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fe=Symbol.for("react.element"),we=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),J=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,x;function q(n){if(x===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+n}var le=!1;function Ie(n,r){if(!n||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,I=p.length-1;1<=_&&0<=I&&d[_]!==p[I];)I--;for(;1<=_&&0<=I;_--,I--)if(d[_]!==p[I]){if(_!==1||I!==1)do if(_--,I--,0>I||d[_]!==p[I]){var C=`
`+d[_].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=_&&0<=I);break}}}finally{le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Se(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case we:return"Portal";case A:return"Profiler";case T:return"StrictMode";case S:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case V:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Pt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(n){var r=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function er(n){n._valueTracker||(n._valueTracker=mt(n))}function ns(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function kr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gi(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function rs(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Eo(n,r){r=r.checked,r!=null&&ue(n,"checked",r,!1)}function wo(n,r){Eo(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?is(n,r.type,a):r.hasOwnProperty("defaultValue")&&is(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function $a(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function is(n,r,a){(r!=="number"||kr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var tr=Array.isArray;function nr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function To(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ss(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(tr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function os(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Io(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var rr,So=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(rr=rr||document.createElement("div"),rr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=rr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Pr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_i=["Webkit","ms","Moz","O"];Object.keys(yi).forEach(function(n){_i.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),yi[r]=yi[n]})});function Ao(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||yi.hasOwnProperty(n)&&yi[n]?(""+r).trim():r+"px"}function Ro(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Ao(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Co=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ko(n,r){if(r){if(Co[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Po(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vi=null;function as(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ls=null,an=null,Mn=null;function us(n){if(n=Zo(n)){if(typeof ls!="function")throw Error(t(280));var r=n.stateNode;r&&(r=vl(r),ls(n.stateNode,n.type,r))}}function bn(n){an?Mn?Mn.push(n):Mn=[n]:an=n}function No(){if(an){var n=an,r=Mn;if(Mn=an=null,us(n),r)for(n=0;n<r.length;n++)us(r[n])}}function Ei(n,r){return n(r)}function Do(){}var ir=!1;function xo(n,r,a){if(ir)return n(r,a);ir=!0;try{return Ei(n,r,a)}finally{ir=!1,(an!==null||Mn!==null)&&(Do(),No())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=vl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var cs=!1;if(m)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){cs=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{cs=!1}function wi(n,r,a,c,d,p,_,I,C){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(G){this.onError(G)}}var Ti=!1,hs=null,vn=!1,Vo=null,sc={onError:function(n){Ti=!0,hs=n}};function ds(n,r,a,c,d,p,_,I,C){Ti=!1,hs=null,wi.apply(sc,arguments)}function qa(n,r,a,c,d,p,_,I,C){if(ds.apply(this,arguments),Ti){if(Ti){var U=hs;Ti=!1,hs=null}else throw Error(t(198));vn||(vn=!0,Vo=U)}}function En(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ii(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function wn(n){if(En(n)!==n)throw Error(t(188))}function Ha(n){var r=n.alternate;if(!r){if(r=En(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return wn(d),n;if(p===c)return wn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,I=d.child;I;){if(I===a){_=!0,a=d,c=p;break}if(I===c){_=!0,c=d,a=p;break}I=I.sibling}if(!_){for(I=p.child;I;){if(I===a){_=!0,a=p,c=d;break}if(I===c){_=!0,c=p,a=d;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Oo(n){return n=Ha(n),n!==null?fs(n):null}function fs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=fs(n);if(r!==null)return r;n=n.sibling}return null}var ps=e.unstable_scheduleCallback,Lo=e.unstable_cancelCallback,Wa=e.unstable_shouldYield,oc=e.unstable_requestPaint,$e=e.unstable_now,Ga=e.unstable_getCurrentPriorityLevel,Si=e.unstable_ImmediatePriority,Nr=e.unstable_UserBlockingPriority,ln=e.unstable_NormalPriority,Mo=e.unstable_LowPriority,Ka=e.unstable_IdlePriority,Ai=null,Jt=null;function Qa(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ai,n,void 0,(n.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:Ya,bo=Math.log,Xa=Math.LN2;function Ya(n){return n>>>=0,n===0?32:31-(bo(n)/Xa|0)|0}var ms=64,gs=4194304;function Dr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ri(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var I=_&~d;I!==0?c=Dr(I):(p&=_,p!==0&&(c=Dr(p)))}else _=a&~d,_!==0?c=Dr(_):p!==0&&(c=Dr(p));if(c===0)return 0;if(r!==0&&r!==c&&!(r&d)&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if(c&4&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ft(r),d=1<<a,c|=n[a],r&=~d;return c}function ac(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Ft(p),I=1<<_,C=d[_];C===-1?(!(I&a)||I&c)&&(d[_]=ac(I,r)):C<=r&&(n.expiredLanes|=I),p&=~I}}function Zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ci(){var n=ms;return ms<<=1,!(ms&4194240)&&(ms=64),n}function xr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Vr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ft(r),n[r]=a}function je(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ft(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Or(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ft(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var ke=0;function Lr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ja,ys,Za,el,tl,Fo=!1,Fn=[],wt=null,Tn=null,In=null,Mr=new Map,un=new Map,Un=[],lc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nl(n,r){switch(n){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Mr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":un.delete(r.pointerId)}}function Bt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Zo(r),r!==null&&ys(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function uc(n,r,a,c,d){switch(r){case"focusin":return wt=Bt(wt,n,r,a,c,d),!0;case"dragenter":return Tn=Bt(Tn,n,r,a,c,d),!0;case"mouseover":return In=Bt(In,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Mr.set(p,Bt(Mr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,un.set(p,Bt(un.get(p)||null,n,r,a,c,d)),!0}return!1}function rl(n){var r=xi(n.target);if(r!==null){var a=En(r);if(a!==null){if(r=a.tag,r===13){if(r=Ii(a),r!==null){n.blockedOn=r,tl(n.priority,function(){Za(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function or(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=_s(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);vi=c,a.target.dispatchEvent(c),vi=null}else return r=Zo(a),r!==null&&ys(r),n.blockedOn=a,!1;r.shift()}return!0}function ki(n,r,a){or(n)&&a.delete(r)}function il(){Fo=!1,wt!==null&&or(wt)&&(wt=null),Tn!==null&&or(Tn)&&(Tn=null),In!==null&&or(In)&&(In=null),Mr.forEach(ki),un.forEach(ki)}function Sn(n,r){n.blockedOn===r&&(n.blockedOn=null,Fo||(Fo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,il)))}function An(n){function r(d){return Sn(d,n)}if(0<Fn.length){Sn(Fn[0],n);for(var a=1;a<Fn.length;a++){var c=Fn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(wt!==null&&Sn(wt,n),Tn!==null&&Sn(Tn,n),In!==null&&Sn(In,n),Mr.forEach(r),un.forEach(r),a=0;a<Un.length;a++)c=Un[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Un.length&&(a=Un[0],a.blockedOn===null);)rl(a),a.blockedOn===null&&Un.shift()}var ar=pe.ReactCurrentBatchConfig,br=!0;function Ke(n,r,a,c){var d=ke,p=ar.transition;ar.transition=null;try{ke=1,Uo(n,r,a,c)}finally{ke=d,ar.transition=p}}function cc(n,r,a,c){var d=ke,p=ar.transition;ar.transition=null;try{ke=4,Uo(n,r,a,c)}finally{ke=d,ar.transition=p}}function Uo(n,r,a,c){if(br){var d=_s(n,r,a,c);if(d===null)wc(n,r,c,Pi,a),nl(n,c);else if(uc(d,n,r,a,c))c.stopPropagation();else if(nl(n,c),r&4&&-1<lc.indexOf(n)){for(;d!==null;){var p=Zo(d);if(p!==null&&Ja(p),p=_s(n,r,a,c),p===null&&wc(n,r,c,Pi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else wc(n,r,c,null,a)}}var Pi=null;function _s(n,r,a,c){if(Pi=null,n=as(c),n=xi(n),n!==null)if(r=En(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ii(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Pi=n,null}function zo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ga()){case Si:return 1;case Nr:return 4;case ln:case Mo:return 16;case Ka:return 536870912;default:return 16}default:return 16}}var en=null,vs=null,$t=null;function jo(){if($t)return $t;var n,r=vs,a=r.length,c,d="value"in en?en.value:en.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return $t=d.slice(n,1<c?1-c:void 0)}function Es(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function zn(){return!0}function Bo(){return!1}function Tt(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?zn:Bo,this.isPropagationStopped=Bo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),r}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ws=Tt(Rn),jn=ee({},Rn,{view:0,detail:0}),hc=Tt(jn),Ts,lr,Fr,Ni=ee({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fr&&(Fr&&n.type==="mousemove"?(Ts=n.screenX-Fr.screenX,lr=n.screenY-Fr.screenY):lr=Ts=0,Fr=n),Ts)},movementY:function(n){return"movementY"in n?n.movementY:lr}}),Is=Tt(Ni),$o=ee({},Ni,{dataTransfer:0}),sl=Tt($o),Ss=ee({},jn,{relatedTarget:0}),As=Tt(Ss),ol=ee({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),ur=Tt(ol),al=ee({},Rn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ll=Tt(al),ul=ee({},Rn,{data:0}),qo=Tt(ul),Rs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ut={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=cl[n])?!!r[n]:!1}function Bn(){return hl}var l=ee({},jn,{key:function(n){if(n.key){var r=Rs[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Es(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ut[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bn,charCode:function(n){return n.type==="keypress"?Es(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Es(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Tt(l),g=ee({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Tt(g),O=ee({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bn}),z=Tt(O),Y=ee({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=Tt(Y),ct=ee({},Ni,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=Tt(ct),gt=[9,13,27,32],it=m&&"CompositionEvent"in window,cn=null;m&&"documentMode"in document&&(cn=document.documentMode);var tn=m&&"TextEvent"in window&&!cn,Di=m&&(!it||cn&&8<cn&&11>=cn),Cs=" ",mf=!1;function gf(n,r){switch(n){case"keyup":return gt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ks=!1;function fv(n,r){switch(n){case"compositionend":return yf(r);case"keypress":return r.which!==32?null:(mf=!0,Cs);case"textInput":return n=r.data,n===Cs&&mf?null:n;default:return null}}function pv(n,r){if(ks)return n==="compositionend"||!it&&gf(n,r)?(n=jo(),$t=vs=en=null,ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Di&&r.locale!=="ko"?null:r.data;default:return null}}var mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _f(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!mv[n.type]:r==="textarea"}function vf(n,r,a,c){bn(c),r=gl(r,"onChange"),0<r.length&&(a=new ws("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Ho=null,Wo=null;function gv(n){bf(n,0)}function dl(n){var r=Vs(n);if(ns(r))return n}function yv(n,r){if(n==="change")return r}var Ef=!1;if(m){var dc;if(m){var fc="oninput"in document;if(!fc){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),fc=typeof wf.oninput=="function"}dc=fc}else dc=!1;Ef=dc&&(!document.documentMode||9<document.documentMode)}function Tf(){Ho&&(Ho.detachEvent("onpropertychange",If),Wo=Ho=null)}function If(n){if(n.propertyName==="value"&&dl(Wo)){var r=[];vf(r,Wo,n,as(n)),xo(gv,r)}}function _v(n,r,a){n==="focusin"?(Tf(),Ho=r,Wo=a,Ho.attachEvent("onpropertychange",If)):n==="focusout"&&Tf()}function vv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return dl(Wo)}function Ev(n,r){if(n==="click")return dl(r)}function wv(n,r){if(n==="input"||n==="change")return dl(r)}function Tv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Cn=typeof Object.is=="function"?Object.is:Tv;function Go(n,r){if(Cn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Cn(n[d],r[d]))return!1}return!0}function Sf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Af(n,r){var a=Sf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sf(a)}}function Rf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Rf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Cf(){for(var n=window,r=kr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=kr(n.document)}return r}function pc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Iv(n){var r=Cf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Rf(a.ownerDocument.documentElement,a)){if(c!==null&&pc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Af(a,p);var _=Af(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Sv=m&&"documentMode"in document&&11>=document.documentMode,Ps=null,mc=null,Ko=null,gc=!1;function kf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gc||Ps==null||Ps!==kr(c)||(c=Ps,"selectionStart"in c&&pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ko&&Go(Ko,c)||(Ko=c,c=gl(mc,"onSelect"),0<c.length&&(r=new ws("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ps)))}function fl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ns={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},yc={},Pf={};m&&(Pf=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function pl(n){if(yc[n])return yc[n];if(!Ns[n])return n;var r=Ns[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Pf)return yc[n]=r[a];return n}var Nf=pl("animationend"),Df=pl("animationiteration"),xf=pl("animationstart"),Vf=pl("transitionend"),Of=new Map,Lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,r){Of.set(n,r),u(r,[n])}for(var _c=0;_c<Lf.length;_c++){var vc=Lf[_c],Av=vc.toLowerCase(),Rv=vc[0].toUpperCase()+vc.slice(1);Ur(Av,"on"+Rv)}Ur(Nf,"onAnimationEnd"),Ur(Df,"onAnimationIteration"),Ur(xf,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(Vf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function Mf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,qa(c,r,void 0,n),n.currentTarget=null}function bf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var I=c[_],C=I.instance,U=I.currentTarget;if(I=I.listener,C!==p&&d.isPropagationStopped())break e;Mf(d,I,U),p=C}else for(_=0;_<c.length;_++){if(I=c[_],C=I.instance,U=I.currentTarget,I=I.listener,C!==p&&d.isPropagationStopped())break e;Mf(d,I,U),p=C}}}if(vn)throw n=Vo,vn=!1,Vo=null,n}function He(n,r){var a=r[Cc];a===void 0&&(a=r[Cc]=new Set);var c=n+"__bubble";a.has(c)||(Ff(r,n,2,!1),a.add(c))}function Ec(n,r,a){var c=0;r&&(c|=4),Ff(a,n,c,r)}var ml="_reactListening"+Math.random().toString(36).slice(2);function Xo(n){if(!n[ml]){n[ml]=!0,s.forEach(function(a){a!=="selectionchange"&&(Cv.has(a)||Ec(a,!1,n),Ec(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ml]||(r[ml]=!0,Ec("selectionchange",!1,r))}}function Ff(n,r,a,c){switch(zo(r)){case 1:var d=Ke;break;case 4:d=cc;break;default:d=Uo}a=d.bind(null,r,a,n),d=void 0,!cs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function wc(n,r,a,c,d){var p=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;_=_.return}for(;I!==null;){if(_=xi(I),_===null)return;if(C=_.tag,C===5||C===6){c=p=_;continue e}I=I.parentNode}}c=c.return}xo(function(){var U=p,G=as(a),Q=[];e:{var W=Of.get(n);if(W!==void 0){var Z=ws,se=n;switch(n){case"keypress":if(Es(a)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":se="focus",Z=As;break;case"focusout":se="blur",Z=As;break;case"beforeblur":case"afterblur":Z=As;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=sl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=z;break;case Nf:case Df:case xf:Z=ur;break;case Vf:Z=Ue;break;case"scroll":Z=hc;break;case"wheel":Z=De;break;case"copy":case"cut":case"paste":Z=ll;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var oe=(r&4)!==0,nt=!oe&&n==="scroll",M=oe?W!==null?W+"Capture":null:W;oe=[];for(var P=U,b;P!==null;){b=P;var X=b.stateNode;if(b.tag===5&&X!==null&&(b=X,M!==null&&(X=tt(P,M),X!=null&&oe.push(Yo(P,X,b)))),nt)break;P=P.return}0<oe.length&&(W=new Z(W,se,null,a,G),Q.push({event:W,listeners:oe}))}}if(!(r&7)){e:{if(W=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",W&&a!==vi&&(se=a.relatedTarget||a.fromElement)&&(xi(se)||se[cr]))break e;if((Z||W)&&(W=G.window===G?G:(W=G.ownerDocument)?W.defaultView||W.parentWindow:window,Z?(se=a.relatedTarget||a.toElement,Z=U,se=se?xi(se):null,se!==null&&(nt=En(se),se!==nt||se.tag!==5&&se.tag!==6)&&(se=null)):(Z=null,se=U),Z!==se)){if(oe=Is,X="onMouseLeave",M="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(oe=E,X="onPointerLeave",M="onPointerEnter",P="pointer"),nt=Z==null?W:Vs(Z),b=se==null?W:Vs(se),W=new oe(X,P+"leave",Z,a,G),W.target=nt,W.relatedTarget=b,X=null,xi(G)===U&&(oe=new oe(M,P+"enter",se,a,G),oe.target=b,oe.relatedTarget=nt,X=oe),nt=X,Z&&se)t:{for(oe=Z,M=se,P=0,b=oe;b;b=Ds(b))P++;for(b=0,X=M;X;X=Ds(X))b++;for(;0<P-b;)oe=Ds(oe),P--;for(;0<b-P;)M=Ds(M),b--;for(;P--;){if(oe===M||M!==null&&oe===M.alternate)break t;oe=Ds(oe),M=Ds(M)}oe=null}else oe=null;Z!==null&&Uf(Q,W,Z,oe,!1),se!==null&&nt!==null&&Uf(Q,nt,se,oe,!0)}}e:{if(W=U?Vs(U):window,Z=W.nodeName&&W.nodeName.toLowerCase(),Z==="select"||Z==="input"&&W.type==="file")var ae=yv;else if(_f(W))if(Ef)ae=wv;else{ae=vv;var de=_v}else(Z=W.nodeName)&&Z.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(ae=Ev);if(ae&&(ae=ae(n,U))){vf(Q,ae,a,G);break e}de&&de(n,W,U),n==="focusout"&&(de=W._wrapperState)&&de.controlled&&W.type==="number"&&is(W,"number",W.value)}switch(de=U?Vs(U):window,n){case"focusin":(_f(de)||de.contentEditable==="true")&&(Ps=de,mc=U,Ko=null);break;case"focusout":Ko=mc=Ps=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,kf(Q,a,G);break;case"selectionchange":if(Sv)break;case"keydown":case"keyup":kf(Q,a,G)}var fe;if(it)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else ks?gf(n,a)&&(ge="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Di&&a.locale!=="ko"&&(ks||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&ks&&(fe=jo()):(en=G,vs="value"in en?en.value:en.textContent,ks=!0)),de=gl(U,ge),0<de.length&&(ge=new qo(ge,n,null,a,G),Q.push({event:ge,listeners:de}),fe?ge.data=fe:(fe=yf(a),fe!==null&&(ge.data=fe)))),(fe=tn?fv(n,a):pv(n,a))&&(U=gl(U,"onBeforeInput"),0<U.length&&(G=new qo("onBeforeInput","beforeinput",null,a,G),Q.push({event:G,listeners:U}),G.data=fe))}bf(Q,r)})}function Yo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function gl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(Yo(n,p,d)),p=tt(n,r),p!=null&&c.push(Yo(n,p,d))),n=n.return}return c}function Ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Uf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var I=a,C=I.alternate,U=I.stateNode;if(C!==null&&C===c)break;I.tag===5&&U!==null&&(I=U,d?(C=tt(a,p),C!=null&&_.unshift(Yo(a,C,I))):d||(C=tt(a,p),C!=null&&_.push(Yo(a,C,I)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var kv=/\r\n?/g,Pv=/\u0000|\uFFFD/g;function zf(n){return(typeof n=="string"?n:""+n).replace(kv,`
`).replace(Pv,"")}function yl(n,r,a){if(r=zf(r),zf(n)!==r&&a)throw Error(t(425))}function _l(){}var Tc=null,Ic=null;function Sc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,Nv=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,Dv=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(n){return jf.resolve(null).then(n).catch(xv)}:Ac;function xv(n){setTimeout(function(){throw n})}function Rc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),An(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);An(r)}function zr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Bf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),$n="__reactFiber$"+xs,Jo="__reactProps$"+xs,cr="__reactContainer$"+xs,Cc="__reactEvents$"+xs,Vv="__reactListeners$"+xs,Ov="__reactHandles$"+xs;function xi(n){var r=n[$n];if(r)return r;for(var a=n.parentNode;a;){if(r=a[cr]||a[$n]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Bf(n);n!==null;){if(a=n[$n])return a;n=Bf(n)}return r}n=a,a=n.parentNode}return null}function Zo(n){return n=n[$n]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function vl(n){return n[Jo]||null}var kc=[],Os=-1;function jr(n){return{current:n}}function We(n){0>Os||(n.current=kc[Os],kc[Os]=null,Os--)}function qe(n,r){Os++,kc[Os]=n.current,n.current=r}var Br={},Nt=jr(Br),qt=jr(!1),Vi=Br;function Ls(n,r){var a=n.type.contextTypes;if(!a)return Br;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function El(){We(qt),We(Nt)}function $f(n,r,a){if(Nt.current!==Br)throw Error(t(168));qe(Nt,r),qe(qt,a)}function qf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return ee({},a,c)}function wl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,Vi=Nt.current,qe(Nt,n),qe(qt,qt.current),!0}function Hf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=qf(n,r,Vi),c.__reactInternalMemoizedMergedChildContext=n,We(qt),We(Nt),qe(Nt,n)):We(qt),qe(qt,a)}var hr=null,Tl=!1,Pc=!1;function Wf(n){hr===null?hr=[n]:hr.push(n)}function Lv(n){Tl=!0,Wf(n)}function $r(){if(!Pc&&hr!==null){Pc=!0;var n=0,r=ke;try{var a=hr;for(ke=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}hr=null,Tl=!1}catch(d){throw hr!==null&&(hr=hr.slice(n+1)),ps(Si,$r),d}finally{ke=r,Pc=!1}}return null}var Ms=[],bs=0,Il=null,Sl=0,hn=[],dn=0,Oi=null,dr=1,fr="";function Li(n,r){Ms[bs++]=Sl,Ms[bs++]=Il,Il=n,Sl=r}function Gf(n,r,a){hn[dn++]=dr,hn[dn++]=fr,hn[dn++]=Oi,Oi=n;var c=dr;n=fr;var d=32-Ft(c)-1;c&=~(1<<d),a+=1;var p=32-Ft(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,dr=1<<32-Ft(r)+d|a<<d|c,fr=p+n}else dr=1<<p|a<<d|c,fr=n}function Nc(n){n.return!==null&&(Li(n,1),Gf(n,1,0))}function Dc(n){for(;n===Il;)Il=Ms[--bs],Ms[bs]=null,Sl=Ms[--bs],Ms[bs]=null;for(;n===Oi;)Oi=hn[--dn],hn[dn]=null,fr=hn[--dn],hn[dn]=null,dr=hn[--dn],hn[dn]=null}var nn=null,rn=null,Qe=!1,kn=null;function Kf(n,r){var a=gn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Qf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,nn=n,rn=zr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,nn=n,rn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Oi!==null?{id:dr,overflow:fr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=gn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,nn=n,rn=null,!0):!1;default:return!1}}function xc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vc(n){if(Qe){var r=rn;if(r){var a=r;if(!Qf(n,r)){if(xc(n))throw Error(t(418));r=zr(a.nextSibling);var c=nn;r&&Qf(n,r)?Kf(c,a):(n.flags=n.flags&-4097|2,Qe=!1,nn=n)}}else{if(xc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,nn=n}}}function Xf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function Al(n){if(n!==nn)return!1;if(!Qe)return Xf(n),Qe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Sc(n.type,n.memoizedProps)),r&&(r=rn)){if(xc(n))throw Yf(),Error(t(418));for(;r;)Kf(n,r),r=zr(r.nextSibling)}if(Xf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){rn=zr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}rn=null}}else rn=nn?zr(n.stateNode.nextSibling):null;return!0}function Yf(){for(var n=rn;n;)n=zr(n.nextSibling)}function Fs(){rn=nn=null,Qe=!1}function Oc(n){kn===null?kn=[n]:kn.push(n)}var Mv=pe.ReactCurrentBatchConfig;function ea(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var I=d.refs;_===null?delete I[p]:I[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Rl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Jf(n){var r=n._init;return r(n._payload)}function Zf(n){function r(M,P){if(n){var b=M.deletions;b===null?(M.deletions=[P],M.flags|=16):b.push(P)}}function a(M,P){if(!n)return null;for(;P!==null;)r(M,P),P=P.sibling;return null}function c(M,P){for(M=new Map;P!==null;)P.key!==null?M.set(P.key,P):M.set(P.index,P),P=P.sibling;return M}function d(M,P){return M=Yr(M,P),M.index=0,M.sibling=null,M}function p(M,P,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<P?(M.flags|=2,P):b):(M.flags|=2,P)):(M.flags|=1048576,P)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function I(M,P,b,X){return P===null||P.tag!==6?(P=Ah(b,M.mode,X),P.return=M,P):(P=d(P,b),P.return=M,P)}function C(M,P,b,X){var ae=b.type;return ae===N?G(M,P,b.props.children,X,b.key):P!==null&&(P.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Pt&&Jf(ae)===P.type)?(X=d(P,b.props),X.ref=ea(M,P,b),X.return=M,X):(X=Xl(b.type,b.key,b.props,null,M.mode,X),X.ref=ea(M,P,b),X.return=M,X)}function U(M,P,b,X){return P===null||P.tag!==4||P.stateNode.containerInfo!==b.containerInfo||P.stateNode.implementation!==b.implementation?(P=Rh(b,M.mode,X),P.return=M,P):(P=d(P,b.children||[]),P.return=M,P)}function G(M,P,b,X,ae){return P===null||P.tag!==7?(P=$i(b,M.mode,X,ae),P.return=M,P):(P=d(P,b),P.return=M,P)}function Q(M,P,b){if(typeof P=="string"&&P!==""||typeof P=="number")return P=Ah(""+P,M.mode,b),P.return=M,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Fe:return b=Xl(P.type,P.key,P.props,null,M.mode,b),b.ref=ea(M,null,P),b.return=M,b;case we:return P=Rh(P,M.mode,b),P.return=M,P;case Pt:var X=P._init;return Q(M,X(P._payload),b)}if(tr(P)||he(P))return P=$i(P,M.mode,b,null),P.return=M,P;Rl(M,P)}return null}function W(M,P,b,X){var ae=P!==null?P.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ae!==null?null:I(M,P,""+b,X);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Fe:return b.key===ae?C(M,P,b,X):null;case we:return b.key===ae?U(M,P,b,X):null;case Pt:return ae=b._init,W(M,P,ae(b._payload),X)}if(tr(b)||he(b))return ae!==null?null:G(M,P,b,X,null);Rl(M,b)}return null}function Z(M,P,b,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(b)||null,I(P,M,""+X,ae);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Fe:return M=M.get(X.key===null?b:X.key)||null,C(P,M,X,ae);case we:return M=M.get(X.key===null?b:X.key)||null,U(P,M,X,ae);case Pt:var de=X._init;return Z(M,P,b,de(X._payload),ae)}if(tr(X)||he(X))return M=M.get(b)||null,G(P,M,X,ae,null);Rl(P,X)}return null}function se(M,P,b,X){for(var ae=null,de=null,fe=P,ge=P=0,vt=null;fe!==null&&ge<b.length;ge++){fe.index>ge?(vt=fe,fe=null):vt=fe.sibling;var Oe=W(M,fe,b[ge],X);if(Oe===null){fe===null&&(fe=vt);break}n&&fe&&Oe.alternate===null&&r(M,fe),P=p(Oe,P,ge),de===null?ae=Oe:de.sibling=Oe,de=Oe,fe=vt}if(ge===b.length)return a(M,fe),Qe&&Li(M,ge),ae;if(fe===null){for(;ge<b.length;ge++)fe=Q(M,b[ge],X),fe!==null&&(P=p(fe,P,ge),de===null?ae=fe:de.sibling=fe,de=fe);return Qe&&Li(M,ge),ae}for(fe=c(M,fe);ge<b.length;ge++)vt=Z(fe,M,ge,b[ge],X),vt!==null&&(n&&vt.alternate!==null&&fe.delete(vt.key===null?ge:vt.key),P=p(vt,P,ge),de===null?ae=vt:de.sibling=vt,de=vt);return n&&fe.forEach(function(Jr){return r(M,Jr)}),Qe&&Li(M,ge),ae}function oe(M,P,b,X){var ae=he(b);if(typeof ae!="function")throw Error(t(150));if(b=ae.call(b),b==null)throw Error(t(151));for(var de=ae=null,fe=P,ge=P=0,vt=null,Oe=b.next();fe!==null&&!Oe.done;ge++,Oe=b.next()){fe.index>ge?(vt=fe,fe=null):vt=fe.sibling;var Jr=W(M,fe,Oe.value,X);if(Jr===null){fe===null&&(fe=vt);break}n&&fe&&Jr.alternate===null&&r(M,fe),P=p(Jr,P,ge),de===null?ae=Jr:de.sibling=Jr,de=Jr,fe=vt}if(Oe.done)return a(M,fe),Qe&&Li(M,ge),ae;if(fe===null){for(;!Oe.done;ge++,Oe=b.next())Oe=Q(M,Oe.value,X),Oe!==null&&(P=p(Oe,P,ge),de===null?ae=Oe:de.sibling=Oe,de=Oe);return Qe&&Li(M,ge),ae}for(fe=c(M,fe);!Oe.done;ge++,Oe=b.next())Oe=Z(fe,M,ge,Oe.value,X),Oe!==null&&(n&&Oe.alternate!==null&&fe.delete(Oe.key===null?ge:Oe.key),P=p(Oe,P,ge),de===null?ae=Oe:de.sibling=Oe,de=Oe);return n&&fe.forEach(function(m0){return r(M,m0)}),Qe&&Li(M,ge),ae}function nt(M,P,b,X){if(typeof b=="object"&&b!==null&&b.type===N&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Fe:e:{for(var ae=b.key,de=P;de!==null;){if(de.key===ae){if(ae=b.type,ae===N){if(de.tag===7){a(M,de.sibling),P=d(de,b.props.children),P.return=M,M=P;break e}}else if(de.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Pt&&Jf(ae)===de.type){a(M,de.sibling),P=d(de,b.props),P.ref=ea(M,de,b),P.return=M,M=P;break e}a(M,de);break}else r(M,de);de=de.sibling}b.type===N?(P=$i(b.props.children,M.mode,X,b.key),P.return=M,M=P):(X=Xl(b.type,b.key,b.props,null,M.mode,X),X.ref=ea(M,P,b),X.return=M,M=X)}return _(M);case we:e:{for(de=b.key;P!==null;){if(P.key===de)if(P.tag===4&&P.stateNode.containerInfo===b.containerInfo&&P.stateNode.implementation===b.implementation){a(M,P.sibling),P=d(P,b.children||[]),P.return=M,M=P;break e}else{a(M,P);break}else r(M,P);P=P.sibling}P=Rh(b,M.mode,X),P.return=M,M=P}return _(M);case Pt:return de=b._init,nt(M,P,de(b._payload),X)}if(tr(b))return se(M,P,b,X);if(he(b))return oe(M,P,b,X);Rl(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,P!==null&&P.tag===6?(a(M,P.sibling),P=d(P,b),P.return=M,M=P):(a(M,P),P=Ah(b,M.mode,X),P.return=M,M=P),_(M)):a(M,P)}return nt}var Us=Zf(!0),ep=Zf(!1),Cl=jr(null),kl=null,zs=null,Lc=null;function Mc(){Lc=zs=kl=null}function bc(n){var r=Cl.current;We(Cl),n._currentValue=r}function Fc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function js(n,r){kl=n,Lc=zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Wt=!0),n.firstContext=null)}function fn(n){var r=n._currentValue;if(Lc!==n)if(n={context:n,memoizedValue:r,next:null},zs===null){if(kl===null)throw Error(t(308));zs=n,kl.dependencies={lanes:0,firstContext:n}}else zs=zs.next=n;return r}var Mi=null;function Uc(n){Mi===null?Mi=[n]:Mi.push(n)}function tp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Uc(r)):(a.next=d.next,d.next=a),r.interleaved=a,pr(n,c)}function pr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var qr=!1;function zc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function np(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function mr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Hr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,pr(n,a)}return d=c.interleaved,d===null?(r.next=r,Uc(c)):(r.next=d.next,d.next=r),c.interleaved=r,pr(n,a)}function Pl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}function rp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Nl(n,r,a,c){var d=n.updateQueue;qr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var C=I,U=C.next;C.next=null,_===null?p=U:_.next=U,_=C;var G=n.alternate;G!==null&&(G=G.updateQueue,I=G.lastBaseUpdate,I!==_&&(I===null?G.firstBaseUpdate=U:I.next=U,G.lastBaseUpdate=C))}if(p!==null){var Q=d.baseState;_=0,G=U=C=null,I=p;do{var W=I.lane,Z=I.eventTime;if((c&W)===W){G!==null&&(G=G.next={eventTime:Z,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var se=n,oe=I;switch(W=r,Z=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){Q=se.call(Z,Q,W);break e}Q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,W=typeof se=="function"?se.call(Z,Q,W):se,W==null)break e;Q=ee({},Q,W);break e;case 2:qr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[I]:W.push(I))}else Z={eventTime:Z,lane:W,tag:I.tag,payload:I.payload,callback:I.callback,next:null},G===null?(U=G=Z,C=Q):G=G.next=Z,_|=W;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;W=I,I=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(G===null&&(C=Q),d.baseState=C,d.firstBaseUpdate=U,d.lastBaseUpdate=G,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Ui|=_,n.lanes=_,n.memoizedState=Q}}function ip(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ta={},qn=jr(ta),na=jr(ta),ra=jr(ta);function bi(n){if(n===ta)throw Error(t(174));return n}function jc(n,r){switch(qe(ra,r),qe(na,n),qe(qn,ta),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}We(qn),qe(qn,r)}function Bs(){We(qn),We(na),We(ra)}function sp(n){bi(ra.current);var r=bi(qn.current),a=ut(r,n.type);r!==a&&(qe(na,n),qe(qn,a))}function Bc(n){na.current===n&&(We(qn),We(na))}var Xe=jr(0);function Dl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var $c=[];function qc(){for(var n=0;n<$c.length;n++)$c[n]._workInProgressVersionPrimary=null;$c.length=0}var xl=pe.ReactCurrentDispatcher,Hc=pe.ReactCurrentBatchConfig,Fi=0,Ye=null,ht=null,yt=null,Vl=!1,ia=!1,sa=0,bv=0;function Dt(){throw Error(t(321))}function Wc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Cn(n[a],r[a]))return!1;return!0}function Gc(n,r,a,c,d,p){if(Fi=p,Ye=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,xl.current=n===null||n.memoizedState===null?jv:Bv,n=a(c,d),ia){p=0;do{if(ia=!1,sa=0,25<=p)throw Error(t(301));p+=1,yt=ht=null,r.updateQueue=null,xl.current=$v,n=a(c,d)}while(ia)}if(xl.current=Ml,r=ht!==null&&ht.next!==null,Fi=0,yt=ht=Ye=null,Vl=!1,r)throw Error(t(300));return n}function Kc(){var n=sa!==0;return sa=0,n}function Hn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Ye.memoizedState=yt=n:yt=yt.next=n,yt}function pn(){if(ht===null){var n=Ye.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=yt===null?Ye.memoizedState:yt.next;if(r!==null)yt=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},yt===null?Ye.memoizedState=yt=n:yt=yt.next=n}return yt}function oa(n,r){return typeof r=="function"?r(n):r}function Qc(n){var r=pn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=_=null,C=null,U=p;do{var G=U.lane;if((Fi&G)===G)C!==null&&(C=C.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var Q={lane:G,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};C===null?(I=C=Q,_=c):C=C.next=Q,Ye.lanes|=G,Ui|=G}U=U.next}while(U!==null&&U!==p);C===null?_=c:C.next=I,Cn(c,r.memoizedState)||(Wt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Ye.lanes|=p,Ui|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Xc(n){var r=pn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Cn(p,r.memoizedState)||(Wt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function op(){}function ap(n,r){var a=Ye,c=pn(),d=r(),p=!Cn(c.memoizedState,d);if(p&&(c.memoizedState=d,Wt=!0),c=c.queue,Yc(cp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,aa(9,up.bind(null,a,c,d,r),void 0,null),_t===null)throw Error(t(349));Fi&30||lp(a,r,d)}return d}function lp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function up(n,r,a,c){r.value=a,r.getSnapshot=c,hp(r)&&dp(n)}function cp(n,r,a){return a(function(){hp(r)&&dp(n)})}function hp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Cn(n,a)}catch{return!0}}function dp(n){var r=pr(n,1);r!==null&&xn(r,n,1,-1)}function fp(n){var r=Hn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:n},r.queue=n,n=n.dispatch=zv.bind(null,Ye,n),[r.memoizedState,n]}function aa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function pp(){return pn().memoizedState}function Ol(n,r,a,c){var d=Hn();Ye.flags|=n,d.memoizedState=aa(1|r,a,void 0,c===void 0?null:c)}function Ll(n,r,a,c){var d=pn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var _=ht.memoizedState;if(p=_.destroy,c!==null&&Wc(c,_.deps)){d.memoizedState=aa(r,a,p,c);return}}Ye.flags|=n,d.memoizedState=aa(1|r,a,p,c)}function mp(n,r){return Ol(8390656,8,n,r)}function Yc(n,r){return Ll(2048,8,n,r)}function gp(n,r){return Ll(4,2,n,r)}function yp(n,r){return Ll(4,4,n,r)}function _p(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function vp(n,r,a){return a=a!=null?a.concat([n]):null,Ll(4,4,_p.bind(null,r,n),a)}function Jc(){}function Ep(n,r){var a=pn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Wc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function wp(n,r){var a=pn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Wc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Tp(n,r,a){return Fi&21?(Cn(a,r)||(a=Ci(),Ye.lanes|=a,Ui|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Wt=!0),n.memoizedState=a)}function Fv(n,r){var a=ke;ke=a!==0&&4>a?a:4,n(!0);var c=Hc.transition;Hc.transition={};try{n(!1),r()}finally{ke=a,Hc.transition=c}}function Ip(){return pn().memoizedState}function Uv(n,r,a){var c=Qr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Sp(n))Ap(r,a);else if(a=tp(n,r,a,c),a!==null){var d=jt();xn(a,n,c,d),Rp(a,r,c)}}function zv(n,r,a){var c=Qr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sp(n))Ap(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,I=p(_,a);if(d.hasEagerState=!0,d.eagerState=I,Cn(I,_)){var C=r.interleaved;C===null?(d.next=d,Uc(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=tp(n,r,d,c),a!==null&&(d=jt(),xn(a,n,c,d),Rp(a,r,c))}}function Sp(n){var r=n.alternate;return n===Ye||r!==null&&r===Ye}function Ap(n,r){ia=Vl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Rp(n,r,a){if(a&4194240){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}var Ml={readContext:fn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},jv={readContext:fn,useCallback:function(n,r){return Hn().memoizedState=[n,r===void 0?null:r],n},useContext:fn,useEffect:mp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ol(4194308,4,_p.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ol(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ol(4,2,n,r)},useMemo:function(n,r){var a=Hn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Hn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=Uv.bind(null,Ye,n),[c.memoizedState,n]},useRef:function(n){var r=Hn();return n={current:n},r.memoizedState=n},useState:fp,useDebugValue:Jc,useDeferredValue:function(n){return Hn().memoizedState=n},useTransition:function(){var n=fp(!1),r=n[0];return n=Fv.bind(null,n[1]),Hn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ye,d=Hn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),_t===null)throw Error(t(349));Fi&30||lp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,mp(cp.bind(null,c,p,n),[n]),c.flags|=2048,aa(9,up.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Hn(),r=_t.identifierPrefix;if(Qe){var a=fr,c=dr;a=(c&~(1<<32-Ft(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=sa++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=bv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Bv={readContext:fn,useCallback:Ep,useContext:fn,useEffect:Yc,useImperativeHandle:vp,useInsertionEffect:gp,useLayoutEffect:yp,useMemo:wp,useReducer:Qc,useRef:pp,useState:function(){return Qc(oa)},useDebugValue:Jc,useDeferredValue:function(n){var r=pn();return Tp(r,ht.memoizedState,n)},useTransition:function(){var n=Qc(oa)[0],r=pn().memoizedState;return[n,r]},useMutableSource:op,useSyncExternalStore:ap,useId:Ip,unstable_isNewReconciler:!1},$v={readContext:fn,useCallback:Ep,useContext:fn,useEffect:Yc,useImperativeHandle:vp,useInsertionEffect:gp,useLayoutEffect:yp,useMemo:wp,useReducer:Xc,useRef:pp,useState:function(){return Xc(oa)},useDebugValue:Jc,useDeferredValue:function(n){var r=pn();return ht===null?r.memoizedState=n:Tp(r,ht.memoizedState,n)},useTransition:function(){var n=Xc(oa)[0],r=pn().memoizedState;return[n,r]},useMutableSource:op,useSyncExternalStore:ap,useId:Ip,unstable_isNewReconciler:!1};function Pn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Zc(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var bl={isMounted:function(n){return(n=n._reactInternals)?En(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=jt(),d=Qr(n),p=mr(c,d);p.payload=r,a!=null&&(p.callback=a),r=Hr(n,p,d),r!==null&&(xn(r,n,d,c),Pl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=jt(),d=Qr(n),p=mr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Hr(n,p,d),r!==null&&(xn(r,n,d,c),Pl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=jt(),c=Qr(n),d=mr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Hr(n,d,c),r!==null&&(xn(r,n,c,a),Pl(r,n,c))}};function Cp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Go(a,c)||!Go(d,p):!0}function kp(n,r,a){var c=!1,d=Br,p=r.contextType;return typeof p=="object"&&p!==null?p=fn(p):(d=Ht(r)?Vi:Nt.current,c=r.contextTypes,p=(c=c!=null)?Ls(n,d):Br),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=bl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Pp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&bl.enqueueReplaceState(r,r.state,null)}function eh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},zc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=fn(p):(p=Ht(r)?Vi:Nt.current,d.context=Ls(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Zc(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&bl.enqueueReplaceState(d,d.state,null),Nl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function $s(n,r){try{var a="",c=r;do a+=Se(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function th(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function nh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var qv=typeof WeakMap=="function"?WeakMap:Map;function Np(n,r,a){a=mr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){ql||(ql=!0,yh=c),nh(n,r)},a}function Dp(n,r,a){a=mr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){nh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){nh(n,r),typeof c!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function xp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new qv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=i0.bind(null,n,r,a),r.then(n,n))}function Vp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Op(n,r,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=mr(-1,1),r.tag=2,Hr(a,r,1))),a.lanes|=1),n)}var Hv=pe.ReactCurrentOwner,Wt=!1;function zt(n,r,a,c){r.child=n===null?ep(r,null,a,c):Us(r,n.child,a,c)}function Lp(n,r,a,c,d){a=a.render;var p=r.ref;return js(r,d),c=Gc(n,r,a,c,p,d),a=Kc(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,gr(n,r,d)):(Qe&&a&&Nc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Mp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Sh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,bp(n,r,p,c,d)):(n=Xl(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!(n.lanes&d)){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Go,a(_,c)&&n.ref===r.ref)return gr(n,r,d)}return r.flags|=1,n=Yr(p,c),n.ref=r.ref,n.return=r,r.child=n}function bp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Go(p,c)&&n.ref===r.ref)if(Wt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)n.flags&131072&&(Wt=!0);else return r.lanes=n.lanes,gr(n,r,d)}return rh(n,r,a,c,d)}function Fp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(Hs,sn),sn|=a;else{if(!(a&1073741824))return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qe(Hs,sn),sn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,qe(Hs,sn),sn|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,qe(Hs,sn),sn|=c;return zt(n,r,d,a),r.child}function Up(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function rh(n,r,a,c,d){var p=Ht(a)?Vi:Nt.current;return p=Ls(r,p),js(r,d),a=Gc(n,r,a,c,p,d),c=Kc(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,gr(n,r,d)):(Qe&&c&&Nc(r),r.flags|=1,zt(n,r,a,d),r.child)}function zp(n,r,a,c,d){if(Ht(a)){var p=!0;wl(r)}else p=!1;if(js(r,d),r.stateNode===null)Ul(n,r),kp(r,a,c),eh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,I=r.memoizedProps;_.props=I;var C=_.context,U=a.contextType;typeof U=="object"&&U!==null?U=fn(U):(U=Ht(a)?Vi:Nt.current,U=Ls(r,U));var G=a.getDerivedStateFromProps,Q=typeof G=="function"||typeof _.getSnapshotBeforeUpdate=="function";Q||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||C!==U)&&Pp(r,_,c,U),qr=!1;var W=r.memoizedState;_.state=W,Nl(r,c,_,d),C=r.memoizedState,I!==c||W!==C||qt.current||qr?(typeof G=="function"&&(Zc(r,a,G,c),C=r.memoizedState),(I=qr||Cp(r,a,I,c,W,C,U))?(Q||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),_.props=c,_.state=C,_.context=U,c=I):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,np(n,r),I=r.memoizedProps,U=r.type===r.elementType?I:Pn(r.type,I),_.props=U,Q=r.pendingProps,W=_.context,C=a.contextType,typeof C=="object"&&C!==null?C=fn(C):(C=Ht(a)?Vi:Nt.current,C=Ls(r,C));var Z=a.getDerivedStateFromProps;(G=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==Q||W!==C)&&Pp(r,_,c,C),qr=!1,W=r.memoizedState,_.state=W,Nl(r,c,_,d);var se=r.memoizedState;I!==Q||W!==se||qt.current||qr?(typeof Z=="function"&&(Zc(r,a,Z,c),se=r.memoizedState),(U=qr||Cp(r,a,U,c,W,se,C)||!1)?(G||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,se,C),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,se,C)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=se),_.props=c,_.state=se,_.context=C,c=U):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),c=!1)}return ih(n,r,a,c,p,d)}function ih(n,r,a,c,d,p){Up(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Hf(r,a,!1),gr(n,r,p);c=r.stateNode,Hv.current=r;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Us(r,n.child,null,p),r.child=Us(r,null,I,p)):zt(n,r,I,p),r.memoizedState=c.state,d&&Hf(r,a,!0),r.child}function jp(n){var r=n.stateNode;r.pendingContext?$f(n,r.pendingContext,r.pendingContext!==r.context):r.context&&$f(n,r.context,!1),jc(n,r.containerInfo)}function Bp(n,r,a,c,d){return Fs(),Oc(d),r.flags|=256,zt(n,r,a,c),r.child}var sh={dehydrated:null,treeContext:null,retryLane:0};function oh(n){return{baseLanes:n,cachePool:null,transitions:null}}function $p(n,r,a){var c=r.pendingProps,d=Xe.current,p=!1,_=(r.flags&128)!==0,I;if((I=_)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Xe,d&1),n===null)return Vc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},!(c&1)&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Yl(_,c,0,null),n=$i(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=oh(a),r.memoizedState=sh,n):ah(r,_));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Wv(n,r,_,c,I,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,I=d.sibling;var C={mode:"hidden",children:c.children};return!(_&1)&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=Yr(d,C),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=Yr(I,p):(p=$i(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?oh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=sh,c}return p=n.child,n=p.sibling,c=Yr(p,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function ah(n,r){return r=Yl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Fl(n,r,a,c){return c!==null&&Oc(c),Us(r,n.child,null,a),n=ah(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Wv(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=th(Error(t(422))),Fl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Yl({mode:"visible",children:c.children},d,0,null),p=$i(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,r.mode&1&&Us(r,n.child,null,_),r.child.memoizedState=oh(_),r.memoizedState=sh,p);if(!(r.mode&1))return Fl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=th(p,c,void 0),Fl(n,r,_,c)}if(I=(_&n.childLanes)!==0,Wt||I){if(c=_t,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|_)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,pr(n,d),xn(c,n,d,-1))}return Ih(),c=th(Error(t(421))),Fl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=s0.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,rn=zr(d.nextSibling),nn=r,Qe=!0,kn=null,n!==null&&(hn[dn++]=dr,hn[dn++]=fr,hn[dn++]=Oi,dr=n.id,fr=n.overflow,Oi=r),r=ah(r,c.children),r.flags|=4096,r)}function qp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Fc(n.return,r,a)}function lh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Hp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(zt(n,r,c.children,a),c=Xe.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&qp(n,a,r);else if(n.tag===19)qp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Xe,c),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Dl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),lh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Dl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}lh(r,!0,a,null,p);break;case"together":lh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ul(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function gr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Ui|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Yr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Yr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Gv(n,r,a){switch(r.tag){case 3:jp(r),Fs();break;case 5:sp(r);break;case 1:Ht(r.type)&&wl(r);break;case 4:jc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;qe(Cl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(qe(Xe,Xe.current&1),r.flags|=128,null):a&r.child.childLanes?$p(n,r,a):(qe(Xe,Xe.current&1),n=gr(n,r,a),n!==null?n.sibling:null);qe(Xe,Xe.current&1);break;case 19:if(c=(a&r.childLanes)!==0,n.flags&128){if(c)return Hp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Xe,Xe.current),c)break;return null;case 22:case 23:return r.lanes=0,Fp(n,r,a)}return gr(n,r,a)}var Wp,uh,Gp,Kp;Wp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},uh=function(){},Gp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,bi(qn.current);var p=null;switch(a){case"input":d=gi(n,d),c=gi(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=To(n,d),c=To(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=_l)}ko(a,c);var _;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var I=d[U];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var C=c[U];if(I=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&C!==I&&(C!=null||I!=null))if(U==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||C&&C.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in C)C.hasOwnProperty(_)&&I[_]!==C[_]&&(a||(a={}),a[_]=C[_])}else a||(p||(p=[]),p.push(U,a)),a=C;else U==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,I=I?I.__html:void 0,C!=null&&I!==C&&(p=p||[]).push(U,C)):U==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(U,""+C):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(C!=null&&U==="onScroll"&&He("scroll",n),p||I===C||(p=[])):(p=p||[]).push(U,C))}a&&(p=p||[]).push("style",a);var U=p;(r.updateQueue=U)&&(r.flags|=4)}},Kp=function(n,r,a,c){a!==c&&(r.flags|=4)};function la(n,r){if(!Qe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function xt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function Kv(n,r,a){var c=r.pendingProps;switch(Dc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(r),null;case 1:return Ht(r.type)&&El(),xt(r),null;case 3:return c=r.stateNode,Bs(),We(qt),We(Nt),qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Al(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,kn!==null&&(Eh(kn),kn=null))),uh(n,r),xt(r),null;case 5:Bc(r);var d=bi(ra.current);if(a=r.type,n!==null&&r.stateNode!=null)Gp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return xt(r),null}if(n=bi(qn.current),Al(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[$n]=r,c[Jo]=p,n=(r.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<Qo.length;d++)He(Qo[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":rs(c,p),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},He("invalid",c);break;case"textarea":ss(c,p),He("invalid",c)}ko(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var I=p[_];_==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&yl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&yl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&He("scroll",c)}switch(a){case"input":er(c),$a(c,p,!0);break;case"textarea":er(c),Io(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=_l)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[$n]=r,n[Jo]=c,Wp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Po(a,c),a){case"dialog":He("cancel",n),He("close",n),d=c;break;case"iframe":case"object":case"embed":He("load",n),d=c;break;case"video":case"audio":for(d=0;d<Qo.length;d++)He(Qo[d],n);d=c;break;case"source":He("error",n),d=c;break;case"img":case"image":case"link":He("error",n),He("load",n),d=c;break;case"details":He("toggle",n),d=c;break;case"input":rs(n,c),d=gi(n,c),He("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),He("invalid",n);break;case"textarea":ss(n,c),d=To(n,c),He("invalid",n);break;default:d=c}ko(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var C=I[p];p==="style"?Ro(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&So(n,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Pr(n,C):typeof C=="number"&&Pr(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&He("scroll",n):C!=null&&ue(n,p,C,_))}switch(a){case"input":er(n),$a(n,c,!1);break;case"textarea":er(n),Io(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?nr(n,!!c.multiple,p,!1):c.defaultValue!=null&&nr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=_l)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return xt(r),null;case 6:if(n&&r.stateNode!=null)Kp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=bi(ra.current),bi(qn.current),Al(r)){if(c=r.stateNode,a=r.memoizedProps,c[$n]=r,(p=c.nodeValue!==a)&&(n=nn,n!==null))switch(n.tag){case 3:yl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&yl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[$n]=r,r.stateNode=c}return xt(r),null;case 13:if(We(Xe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&rn!==null&&r.mode&1&&!(r.flags&128))Yf(),Fs(),r.flags|=98560,p=!1;else if(p=Al(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[$n]=r}else Fs(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;xt(r),p=!1}else kn!==null&&(Eh(kn),kn=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Xe.current&1?dt===0&&(dt=3):Ih())),r.updateQueue!==null&&(r.flags|=4),xt(r),null);case 4:return Bs(),uh(n,r),n===null&&Xo(r.stateNode.containerInfo),xt(r),null;case 10:return bc(r.type._context),xt(r),null;case 17:return Ht(r.type)&&El(),xt(r),null;case 19:if(We(Xe),p=r.memoizedState,p===null)return xt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)la(p,!1);else{if(dt!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(_=Dl(n),_!==null){for(r.flags|=128,la(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Xe,Xe.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>Ws&&(r.flags|=128,c=!0,la(p,!1),r.lanes=4194304)}else{if(!c)if(n=Dl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),la(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Qe)return xt(r),null}else 2*$e()-p.renderingStartTime>Ws&&a!==1073741824&&(r.flags|=128,c=!0,la(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,a=Xe.current,qe(Xe,c?a&1|2:a&1),r):(xt(r),null);case 22:case 23:return Th(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?sn&1073741824&&(xt(r),r.subtreeFlags&6&&(r.flags|=8192)):xt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Qv(n,r){switch(Dc(r),r.tag){case 1:return Ht(r.type)&&El(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Bs(),We(qt),We(Nt),qc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Bc(r),null;case 13:if(We(Xe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Fs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return We(Xe),null;case 4:return Bs(),null;case 10:return bc(r.type._context),null;case 22:case 23:return Th(),null;case 24:return null;default:return null}}var zl=!1,Vt=!1,Xv=typeof WeakSet=="function"?WeakSet:Set,re=null;function qs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,r,c)}else a.current=null}function ch(n,r,a){try{a()}catch(c){Ze(n,r,c)}}var Qp=!1;function Yv(n,r){if(Tc=br,n=Cf(),pc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,I=-1,C=-1,U=0,G=0,Q=n,W=null;t:for(;;){for(var Z;Q!==a||d!==0&&Q.nodeType!==3||(I=_+d),Q!==p||c!==0&&Q.nodeType!==3||(C=_+c),Q.nodeType===3&&(_+=Q.nodeValue.length),(Z=Q.firstChild)!==null;)W=Q,Q=Z;for(;;){if(Q===n)break t;if(W===a&&++U===d&&(I=_),W===p&&++G===c&&(C=_),(Z=Q.nextSibling)!==null)break;Q=W,W=Q.parentNode}Q=Z}a=I===-1||C===-1?null:{start:I,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ic={focusedElem:n,selectionRange:a},br=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var se=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,nt=se.memoizedState,M=r.stateNode,P=M.getSnapshotBeforeUpdate(r.elementType===r.type?oe:Pn(r.type,oe),nt);M.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){Ze(r,r.return,X)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return se=Qp,Qp=!1,se}function ua(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&ch(r,a,p)}d=d.next}while(d!==c)}}function jl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function hh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Xp(n){var r=n.alternate;r!==null&&(n.alternate=null,Xp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[$n],delete r[Jo],delete r[Cc],delete r[Vv],delete r[Ov])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Yp(n){return n.tag===5||n.tag===3||n.tag===4}function Jp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Yp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function dh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=_l));else if(c!==4&&(n=n.child,n!==null))for(dh(n,r,a),n=n.sibling;n!==null;)dh(n,r,a),n=n.sibling}function fh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(fh(n,r,a),n=n.sibling;n!==null;)fh(n,r,a),n=n.sibling}var It=null,Nn=!1;function Wr(n,r,a){for(a=a.child;a!==null;)Zp(n,r,a),a=a.sibling}function Zp(n,r,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ai,a)}catch{}switch(a.tag){case 5:Vt||qs(a,r);case 6:var c=It,d=Nn;It=null,Wr(n,r,a),It=c,Nn=d,It!==null&&(Nn?(n=It,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):It.removeChild(a.stateNode));break;case 18:It!==null&&(Nn?(n=It,a=a.stateNode,n.nodeType===8?Rc(n.parentNode,a):n.nodeType===1&&Rc(n,a),An(n)):Rc(It,a.stateNode));break;case 4:c=It,d=Nn,It=a.stateNode.containerInfo,Nn=!0,Wr(n,r,a),It=c,Nn=d;break;case 0:case 11:case 14:case 15:if(!Vt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&(p&2||p&4)&&ch(a,r,_),d=d.next}while(d!==c)}Wr(n,r,a);break;case 1:if(!Vt&&(qs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Ze(a,r,I)}Wr(n,r,a);break;case 21:Wr(n,r,a);break;case 22:a.mode&1?(Vt=(c=Vt)||a.memoizedState!==null,Wr(n,r,a),Vt=c):Wr(n,r,a);break;default:Wr(n,r,a)}}function em(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Xv),r.forEach(function(c){var d=o0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Dn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,I=_;e:for(;I!==null;){switch(I.tag){case 5:It=I.stateNode,Nn=!1;break e;case 3:It=I.stateNode.containerInfo,Nn=!0;break e;case 4:It=I.stateNode.containerInfo,Nn=!0;break e}I=I.return}if(It===null)throw Error(t(160));Zp(p,_,d),It=null,Nn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(U){Ze(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)tm(r,n),r=r.sibling}function tm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Dn(r,n),Wn(n),c&4){try{ua(3,n,n.return),jl(3,n)}catch(oe){Ze(n,n.return,oe)}try{ua(5,n,n.return)}catch(oe){Ze(n,n.return,oe)}}break;case 1:Dn(r,n),Wn(n),c&512&&a!==null&&qs(a,a.return);break;case 5:if(Dn(r,n),Wn(n),c&512&&a!==null&&qs(a,a.return),n.flags&32){var d=n.stateNode;try{Pr(d,"")}catch(oe){Ze(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,I=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Eo(d,p),Po(I,_);var U=Po(I,p);for(_=0;_<C.length;_+=2){var G=C[_],Q=C[_+1];G==="style"?Ro(d,Q):G==="dangerouslySetInnerHTML"?So(d,Q):G==="children"?Pr(d,Q):ue(d,G,Q,U)}switch(I){case"input":wo(d,p);break;case"textarea":os(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?nr(d,!!p.multiple,Z,!1):W!==!!p.multiple&&(p.defaultValue!=null?nr(d,!!p.multiple,p.defaultValue,!0):nr(d,!!p.multiple,p.multiple?[]:"",!1))}d[Jo]=p}catch(oe){Ze(n,n.return,oe)}}break;case 6:if(Dn(r,n),Wn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(oe){Ze(n,n.return,oe)}}break;case 3:if(Dn(r,n),Wn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{An(r.containerInfo)}catch(oe){Ze(n,n.return,oe)}break;case 4:Dn(r,n),Wn(n);break;case 13:Dn(r,n),Wn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(gh=$e())),c&4&&em(n);break;case 22:if(G=a!==null&&a.memoizedState!==null,n.mode&1?(Vt=(U=Vt)||G,Dn(r,n),Vt=U):Dn(r,n),Wn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!G&&n.mode&1)for(re=n,G=n.child;G!==null;){for(Q=re=G;re!==null;){switch(W=re,Z=W.child,W.tag){case 0:case 11:case 14:case 15:ua(4,W,W.return);break;case 1:qs(W,W.return);var se=W.stateNode;if(typeof se.componentWillUnmount=="function"){c=W,a=W.return;try{r=c,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(oe){Ze(c,a,oe)}}break;case 5:qs(W,W.return);break;case 22:if(W.memoizedState!==null){im(Q);continue}}Z!==null?(Z.return=W,re=Z):im(Q)}G=G.sibling}e:for(G=null,Q=n;;){if(Q.tag===5){if(G===null){G=Q;try{d=Q.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Q.stateNode,C=Q.memoizedProps.style,_=C!=null&&C.hasOwnProperty("display")?C.display:null,I.style.display=Ao("display",_))}catch(oe){Ze(n,n.return,oe)}}}else if(Q.tag===6){if(G===null)try{Q.stateNode.nodeValue=U?"":Q.memoizedProps}catch(oe){Ze(n,n.return,oe)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;G===Q&&(G=null),Q=Q.return}G===Q&&(G=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Dn(r,n),Wn(n),c&4&&em(n);break;case 21:break;default:Dn(r,n),Wn(n)}}function Wn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Yp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Pr(d,""),c.flags&=-33);var p=Jp(n);fh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,I=Jp(n);dh(n,I,_);break;default:throw Error(t(161))}}catch(C){Ze(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Jv(n,r,a){re=n,nm(n)}function nm(n,r,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||zl;if(!_){var I=d.alternate,C=I!==null&&I.memoizedState!==null||Vt;I=zl;var U=Vt;if(zl=_,(Vt=C)&&!U)for(re=d;re!==null;)_=re,C=_.child,_.tag===22&&_.memoizedState!==null?sm(d):C!==null?(C.return=_,re=C):sm(d);for(;p!==null;)re=p,nm(p),p=p.sibling;re=d,zl=I,Vt=U}rm(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,re=p):rm(n)}}function rm(n){for(;re!==null;){var r=re;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Vt||jl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Vt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Pn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&ip(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}ip(r,_,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var G=U.memoizedState;if(G!==null){var Q=G.dehydrated;Q!==null&&An(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vt||r.flags&512&&hh(r)}catch(W){Ze(r,r.return,W)}}if(r===n){re=null;break}if(a=r.sibling,a!==null){a.return=r.return,re=a;break}re=r.return}}function im(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var a=r.sibling;if(a!==null){a.return=r.return,re=a;break}re=r.return}}function sm(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{jl(4,r)}catch(C){Ze(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){Ze(r,d,C)}}var p=r.return;try{hh(r)}catch(C){Ze(r,p,C)}break;case 5:var _=r.return;try{hh(r)}catch(C){Ze(r,_,C)}}}catch(C){Ze(r,r.return,C)}if(r===n){re=null;break}var I=r.sibling;if(I!==null){I.return=r.return,re=I;break}re=r.return}}var Zv=Math.ceil,Bl=pe.ReactCurrentDispatcher,ph=pe.ReactCurrentOwner,mn=pe.ReactCurrentBatchConfig,Ve=0,_t=null,st=null,St=0,sn=0,Hs=jr(0),dt=0,ca=null,Ui=0,$l=0,mh=0,ha=null,Gt=null,gh=0,Ws=1/0,yr=null,ql=!1,yh=null,Gr=null,Hl=!1,Kr=null,Wl=0,da=0,_h=null,Gl=-1,Kl=0;function jt(){return Ve&6?$e():Gl!==-1?Gl:Gl=$e()}function Qr(n){return n.mode&1?Ve&2&&St!==0?St&-St:Mv.transition!==null?(Kl===0&&(Kl=Ci()),Kl):(n=ke,n!==0||(n=window.event,n=n===void 0?16:zo(n.type)),n):1}function xn(n,r,a,c){if(50<da)throw da=0,_h=null,Error(t(185));Vr(n,a,c),(!(Ve&2)||n!==_t)&&(n===_t&&(!(Ve&2)&&($l|=a),dt===4&&Xr(n,St)),Kt(n,c),a===1&&Ve===0&&!(r.mode&1)&&(Ws=$e()+500,Tl&&$r()))}function Kt(n,r){var a=n.callbackNode;sr(n,r);var c=Ri(n,n===_t?St:0);if(c===0)a!==null&&Lo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Lo(a),r===1)n.tag===0?Lv(am.bind(null,n)):Wf(am.bind(null,n)),Dv(function(){!(Ve&6)&&$r()}),a=null;else{switch(Lr(c)){case 1:a=Si;break;case 4:a=Nr;break;case 16:a=ln;break;case 536870912:a=Ka;break;default:a=ln}a=mm(a,om.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function om(n,r){if(Gl=-1,Kl=0,Ve&6)throw Error(t(327));var a=n.callbackNode;if(Gs()&&n.callbackNode!==a)return null;var c=Ri(n,n===_t?St:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=Ql(n,c);else{r=c;var d=Ve;Ve|=2;var p=um();(_t!==n||St!==r)&&(yr=null,Ws=$e()+500,ji(n,r));do try{n0();break}catch(I){lm(n,I)}while(!0);Mc(),Bl.current=p,Ve=d,st!==null?r=0:(_t=null,St=0,r=dt)}if(r!==0){if(r===2&&(d=Zt(n),d!==0&&(c=d,r=vh(n,d))),r===1)throw a=ca,ji(n,0),Xr(n,c),Kt(n,$e()),a;if(r===6)Xr(n,c);else{if(d=n.current.alternate,!(c&30)&&!e0(d)&&(r=Ql(n,c),r===2&&(p=Zt(n),p!==0&&(c=p,r=vh(n,p))),r===1))throw a=ca,ji(n,0),Xr(n,c),Kt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Bi(n,Gt,yr);break;case 3:if(Xr(n,c),(c&130023424)===c&&(r=gh+500-$e(),10<r)){if(Ri(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){jt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ac(Bi.bind(null,n,Gt,yr),r);break}Bi(n,Gt,yr);break;case 4:if(Xr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ft(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Zv(c/1960))-c,10<c){n.timeoutHandle=Ac(Bi.bind(null,n,Gt,yr),c);break}Bi(n,Gt,yr);break;case 5:Bi(n,Gt,yr);break;default:throw Error(t(329))}}}return Kt(n,$e()),n.callbackNode===a?om.bind(null,n):null}function vh(n,r){var a=ha;return n.current.memoizedState.isDehydrated&&(ji(n,r).flags|=256),n=Ql(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&Eh(r)),n}function Eh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function e0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Cn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Xr(n,r){for(r&=~mh,r&=~$l,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ft(r),c=1<<a;n[a]=-1,r&=~c}}function am(n){if(Ve&6)throw Error(t(327));Gs();var r=Ri(n,0);if(!(r&1))return Kt(n,$e()),null;var a=Ql(n,r);if(n.tag!==0&&a===2){var c=Zt(n);c!==0&&(r=c,a=vh(n,c))}if(a===1)throw a=ca,ji(n,0),Xr(n,r),Kt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Bi(n,Gt,yr),Kt(n,$e()),null}function wh(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(Ws=$e()+500,Tl&&$r())}}function zi(n){Kr!==null&&Kr.tag===0&&!(Ve&6)&&Gs();var r=Ve;Ve|=1;var a=mn.transition,c=ke;try{if(mn.transition=null,ke=1,n)return n()}finally{ke=c,mn.transition=a,Ve=r,!(Ve&6)&&$r()}}function Th(){sn=Hs.current,We(Hs)}function ji(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Nv(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Dc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&El();break;case 3:Bs(),We(qt),We(Nt),qc();break;case 5:Bc(c);break;case 4:Bs();break;case 13:We(Xe);break;case 19:We(Xe);break;case 10:bc(c.type._context);break;case 22:case 23:Th()}a=a.return}if(_t=n,st=n=Yr(n.current,null),St=sn=r,dt=0,ca=null,mh=$l=Ui=0,Gt=ha=null,Mi!==null){for(r=0;r<Mi.length;r++)if(a=Mi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Mi=null}return n}function lm(n,r){do{var a=st;try{if(Mc(),xl.current=Ml,Vl){for(var c=Ye.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Vl=!1}if(Fi=0,yt=ht=Ye=null,ia=!1,sa=0,ph.current=null,a===null||a.return===null){dt=1,ca=r,st=null;break}e:{var p=n,_=a.return,I=a,C=r;if(r=St,I.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var U=C,G=I,Q=G.tag;if(!(G.mode&1)&&(Q===0||Q===11||Q===15)){var W=G.alternate;W?(G.updateQueue=W.updateQueue,G.memoizedState=W.memoizedState,G.lanes=W.lanes):(G.updateQueue=null,G.memoizedState=null)}var Z=Vp(_);if(Z!==null){Z.flags&=-257,Op(Z,_,I,p,r),Z.mode&1&&xp(p,U,r),r=Z,C=U;var se=r.updateQueue;if(se===null){var oe=new Set;oe.add(C),r.updateQueue=oe}else se.add(C);break e}else{if(!(r&1)){xp(p,U,r),Ih();break e}C=Error(t(426))}}else if(Qe&&I.mode&1){var nt=Vp(_);if(nt!==null){!(nt.flags&65536)&&(nt.flags|=256),Op(nt,_,I,p,r),Oc($s(C,I));break e}}p=C=$s(C,I),dt!==4&&(dt=2),ha===null?ha=[p]:ha.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=Np(p,C,r);rp(p,M);break e;case 1:I=C;var P=p.type,b=p.stateNode;if(!(p.flags&128)&&(typeof P.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Gr===null||!Gr.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var X=Dp(p,I,r);rp(p,X);break e}}p=p.return}while(p!==null)}hm(a)}catch(ae){r=ae,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function um(){var n=Bl.current;return Bl.current=Ml,n===null?Ml:n}function Ih(){(dt===0||dt===3||dt===2)&&(dt=4),_t===null||!(Ui&268435455)&&!($l&268435455)||Xr(_t,St)}function Ql(n,r){var a=Ve;Ve|=2;var c=um();(_t!==n||St!==r)&&(yr=null,ji(n,r));do try{t0();break}catch(d){lm(n,d)}while(!0);if(Mc(),Ve=a,Bl.current=c,st!==null)throw Error(t(261));return _t=null,St=0,dt}function t0(){for(;st!==null;)cm(st)}function n0(){for(;st!==null&&!Wa();)cm(st)}function cm(n){var r=pm(n.alternate,n,sn);n.memoizedProps=n.pendingProps,r===null?hm(n):st=r,ph.current=null}function hm(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=Qv(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,st=null;return}}else if(a=Kv(a,r,sn),a!==null){st=a;return}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);dt===0&&(dt=5)}function Bi(n,r,a){var c=ke,d=mn.transition;try{mn.transition=null,ke=1,r0(n,r,a,c)}finally{mn.transition=d,ke=c}return null}function r0(n,r,a,c){do Gs();while(Kr!==null);if(Ve&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(je(n,p),n===_t&&(st=_t=null,St=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Hl||(Hl=!0,mm(ln,function(){return Gs(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=mn.transition,mn.transition=null;var _=ke;ke=1;var I=Ve;Ve|=4,ph.current=null,Yv(n,a),tm(a,n),Iv(Ic),br=!!Tc,Ic=Tc=null,n.current=a,Jv(a),oc(),Ve=I,ke=_,mn.transition=p}else n.current=a;if(Hl&&(Hl=!1,Kr=n,Wl=d),p=n.pendingLanes,p===0&&(Gr=null),Qa(a.stateNode),Kt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ql)throw ql=!1,n=yh,yh=null,n;return Wl&1&&n.tag!==0&&Gs(),p=n.pendingLanes,p&1?n===_h?da++:(da=0,_h=n):da=0,$r(),null}function Gs(){if(Kr!==null){var n=Lr(Wl),r=mn.transition,a=ke;try{if(mn.transition=null,ke=16>n?16:n,Kr===null)var c=!1;else{if(n=Kr,Kr=null,Wl=0,Ve&6)throw Error(t(331));var d=Ve;for(Ve|=4,re=n.current;re!==null;){var p=re,_=p.child;if(re.flags&16){var I=p.deletions;if(I!==null){for(var C=0;C<I.length;C++){var U=I[C];for(re=U;re!==null;){var G=re;switch(G.tag){case 0:case 11:case 15:ua(8,G,p)}var Q=G.child;if(Q!==null)Q.return=G,re=Q;else for(;re!==null;){G=re;var W=G.sibling,Z=G.return;if(Xp(G),G===U){re=null;break}if(W!==null){W.return=Z,re=W;break}re=Z}}}var se=p.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var nt=oe.sibling;oe.sibling=null,oe=nt}while(oe!==null)}}re=p}}if(p.subtreeFlags&2064&&_!==null)_.return=p,re=_;else e:for(;re!==null;){if(p=re,p.flags&2048)switch(p.tag){case 0:case 11:case 15:ua(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,re=M;break e}re=p.return}}var P=n.current;for(re=P;re!==null;){_=re;var b=_.child;if(_.subtreeFlags&2064&&b!==null)b.return=_,re=b;else e:for(_=P;re!==null;){if(I=re,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:jl(9,I)}}catch(ae){Ze(I,I.return,ae)}if(I===_){re=null;break e}var X=I.sibling;if(X!==null){X.return=I.return,re=X;break e}re=I.return}}if(Ve=d,$r(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Ai,n)}catch{}c=!0}return c}finally{ke=a,mn.transition=r}}return!1}function dm(n,r,a){r=$s(a,r),r=Np(n,r,1),n=Hr(n,r,1),r=jt(),n!==null&&(Vr(n,1,r),Kt(n,r))}function Ze(n,r,a){if(n.tag===3)dm(n,n,a);else for(;r!==null;){if(r.tag===3){dm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Gr===null||!Gr.has(c))){n=$s(a,n),n=Dp(r,n,1),r=Hr(r,n,1),n=jt(),r!==null&&(Vr(r,1,n),Kt(r,n));break}}r=r.return}}function i0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=jt(),n.pingedLanes|=n.suspendedLanes&a,_t===n&&(St&a)===a&&(dt===4||dt===3&&(St&130023424)===St&&500>$e()-gh?ji(n,0):mh|=a),Kt(n,r)}function fm(n,r){r===0&&(n.mode&1?(r=gs,gs<<=1,!(gs&130023424)&&(gs=4194304)):r=1);var a=jt();n=pr(n,r),n!==null&&(Vr(n,r,a),Kt(n,a))}function s0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),fm(n,a)}function o0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),fm(n,a)}var pm;pm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||qt.current)Wt=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Wt=!1,Gv(n,r,a);Wt=!!(n.flags&131072)}else Wt=!1,Qe&&r.flags&1048576&&Gf(r,Sl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Ul(n,r),n=r.pendingProps;var d=Ls(r,Nt.current);js(r,a),d=Gc(null,r,c,n,d,a);var p=Kc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(c)?(p=!0,wl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,zc(r),d.updater=bl,r.stateNode=d,d._reactInternals=r,eh(r,c,n,a),r=ih(null,r,c,!0,p,a)):(r.tag=0,Qe&&p&&Nc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Ul(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=l0(c),n=Pn(c,n),d){case 0:r=rh(null,r,c,n,a);break e;case 1:r=zp(null,r,c,n,a);break e;case 11:r=Lp(null,r,c,n,a);break e;case 14:r=Mp(null,r,c,Pn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Pn(c,d),rh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Pn(c,d),zp(n,r,c,d,a);case 3:e:{if(jp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,np(n,r),Nl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=$s(Error(t(423)),r),r=Bp(n,r,c,a,d);break e}else if(c!==d){d=$s(Error(t(424)),r),r=Bp(n,r,c,a,d);break e}else for(rn=zr(r.stateNode.containerInfo.firstChild),nn=r,Qe=!0,kn=null,a=ep(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),c===d){r=gr(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return sp(r),n===null&&Vc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Sc(c,d)?_=null:p!==null&&Sc(c,p)&&(r.flags|=32),Up(n,r),zt(n,r,_,a),r.child;case 6:return n===null&&Vc(r),null;case 13:return $p(n,r,a);case 4:return jc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Us(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Pn(c,d),Lp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,qe(Cl,c._currentValue),c._currentValue=_,p!==null)if(Cn(p.value,_)){if(p.children===d.children&&!qt.current){r=gr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){_=p.child;for(var C=I.firstContext;C!==null;){if(C.context===c){if(p.tag===1){C=mr(-1,a&-a),C.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var G=U.pending;G===null?C.next=C:(C.next=G.next,G.next=C),U.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),Fc(p.return,a,r),I.lanes|=a;break}C=C.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),Fc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,js(r,a),d=fn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=Pn(c,r.pendingProps),d=Pn(c.type,d),Mp(n,r,c,d,a);case 15:return bp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Pn(c,d),Ul(n,r),r.tag=1,Ht(c)?(n=!0,wl(r)):n=!1,js(r,a),kp(r,c,d),eh(r,c,d,a),ih(null,r,c,!0,n,a);case 19:return Hp(n,r,a);case 22:return Fp(n,r,a)}throw Error(t(156,r.tag))};function mm(n,r){return ps(n,r)}function a0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(n,r,a,c){return new a0(n,r,a,c)}function Sh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function l0(n){if(typeof n=="function")return Sh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===kt)return 14}return 2}function Yr(n,r){var a=n.alternate;return a===null?(a=gn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Xl(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Sh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return $i(a.children,d,p,r);case T:_=8,d|=8;break;case A:return n=gn(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=gn(13,a,r,d),n.elementType=S,n.lanes=p,n;case et:return n=gn(19,a,r,d),n.elementType=et,n.lanes=p,n;case ze:return Yl(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:_=10;break e;case D:_=9;break e;case V:_=11;break e;case kt:_=14;break e;case Pt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=gn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function $i(n,r,a,c){return n=gn(7,n,c,r),n.lanes=a,n}function Yl(n,r,a,c){return n=gn(22,n,c,r),n.elementType=ze,n.lanes=a,n.stateNode={isHidden:!1},n}function Ah(n,r,a){return n=gn(6,n,null,r),n.lanes=a,n}function Rh(n,r,a){return r=gn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function u0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xr(0),this.expirationTimes=xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ch(n,r,a,c,d,p,_,I,C){return n=new u0(n,r,a,I,C),r===1?(r=1,p===!0&&(r|=8)):r=0,p=gn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(p),n}function c0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function gm(n){if(!n)return Br;n=n._reactInternals;e:{if(En(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return qf(n,a,r)}return r}function ym(n,r,a,c,d,p,_,I,C){return n=Ch(a,c,!0,n,d,p,_,I,C),n.context=gm(null),a=n.current,c=jt(),d=Qr(a),p=mr(c,d),p.callback=r??null,Hr(a,p,d),n.current.lanes=d,Vr(n,d,c),Kt(n,c),n}function Jl(n,r,a,c){var d=r.current,p=jt(),_=Qr(d);return a=gm(a),r.context===null?r.context=a:r.pendingContext=a,r=mr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Hr(d,r,_),n!==null&&(xn(n,d,_,p),Pl(n,d,_)),_}function Zl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _m(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function kh(n,r){_m(n,r),(n=n.alternate)&&_m(n,r)}function h0(){return null}var vm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ph(n){this._internalRoot=n}eu.prototype.render=Ph.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Jl(n,r,null,null)},eu.prototype.unmount=Ph.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;zi(function(){Jl(null,n,null,null)}),r[cr]=null}};function eu(n){this._internalRoot=n}eu.prototype.unstable_scheduleHydration=function(n){if(n){var r=el();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Un.length&&r!==0&&r<Un[a].priority;a++);Un.splice(a,0,n),a===0&&rl(n)}};function Nh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function tu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Em(){}function d0(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=Zl(_);p.call(U)}}var _=ym(r,c,n,0,null,!1,!1,"",Em);return n._reactRootContainer=_,n[cr]=_.current,Xo(n.nodeType===8?n.parentNode:n),zi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var U=Zl(C);I.call(U)}}var C=Ch(n,0,!1,null,null,!1,!1,"",Em);return n._reactRootContainer=C,n[cr]=C.current,Xo(n.nodeType===8?n.parentNode:n),zi(function(){Jl(r,C,a,c)}),C}function nu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var I=d;d=function(){var C=Zl(_);I.call(C)}}Jl(r,_,n,d)}else _=d0(a,r,n,d,c);return Zl(_)}Ja=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Dr(r.pendingLanes);a!==0&&(Or(r,a|1),Kt(r,$e()),!(Ve&6)&&(Ws=$e()+500,$r()))}break;case 13:zi(function(){var c=pr(n,1);if(c!==null){var d=jt();xn(c,n,1,d)}}),kh(n,1)}},ys=function(n){if(n.tag===13){var r=pr(n,134217728);if(r!==null){var a=jt();xn(r,n,134217728,a)}kh(n,134217728)}},Za=function(n){if(n.tag===13){var r=Qr(n),a=pr(n,r);if(a!==null){var c=jt();xn(a,n,r,c)}kh(n,r)}},el=function(){return ke},tl=function(n,r){var a=ke;try{return ke=n,r()}finally{ke=a}},ls=function(n,r,a){switch(r){case"input":if(wo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=vl(c);if(!d)throw Error(t(90));ns(c),wo(c,d)}}}break;case"textarea":os(n,a);break;case"select":r=a.value,r!=null&&nr(n,!!a.multiple,r,!1)}},Ei=wh,Do=zi;var f0={usingClientEntryPoint:!1,Events:[Zo,Vs,vl,bn,No,wh]},fa={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p0={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Oo(n),n===null?null:n.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||h0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{Ai=ru.inject(p0),Jt=ru}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f0,Qt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nh(r))throw Error(t(200));return c0(n,r,null,a)},Qt.createRoot=function(n,r){if(!Nh(n))throw Error(t(299));var a=!1,c="",d=vm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Ch(n,1,!1,null,null,a,!1,c,d),n[cr]=r.current,Xo(n.nodeType===8?n.parentNode:n),new Ph(r)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Oo(r),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return zi(n)},Qt.hydrate=function(n,r,a){if(!tu(r))throw Error(t(200));return nu(null,n,r,!0,a)},Qt.hydrateRoot=function(n,r,a){if(!Nh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=vm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=ym(r,null,n,1,a??null,d,!1,p,_),n[cr]=r.current,Xo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new eu(r)},Qt.render=function(n,r,a){if(!tu(r))throw Error(t(200));return nu(null,n,r,!1,a)},Qt.unmountComponentAtNode=function(n){if(!tu(n))throw Error(t(40));return n._reactRootContainer?(zi(function(){nu(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},Qt.unstable_batchedUpdates=wh,Qt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!tu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return nu(n,r,a,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var km;function T0(){if(km)return Vh.exports;km=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Vh.exports=w0(),Vh.exports}var Pm;function I0(){if(Pm)return iu;Pm=1;var i=T0();return iu.createRoot=i.createRoot,iu.hydrateRoot=i.hydrateRoot,iu}var S0=I0(),Nm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},A0=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Yg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,w=u>>2,R=(u&3)<<4|m>>4;let L=(m&15)<<2|v>>6,F=v&63;y||(F=64,h||(L=64)),s.push(t[w],t[R],t[L],t[F])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Xg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):A0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const R=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||R==null)throw new R0;const L=u<<2|m>>4;if(s.push(L),v!==64){const F=m<<4&240|v>>2;if(s.push(F),R!==64){const K=v<<6&192|R;s.push(K)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class R0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const C0=function(i){const e=Xg(i);return Yg.encodeByteArray(e,!0)},Iu=function(i){return C0(i).replace(/\./g,"")},Jg=function(i){try{return Yg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=()=>k0().__FIREBASE_DEFAULTS__,N0=()=>{if(typeof process>"u"||typeof Nm>"u")return;const i=Nm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},D0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Jg(i[1]);return e&&JSON.parse(e)},zu=()=>{try{return P0()||N0()||D0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Zg=i=>{var e,t;return(t=(e=zu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},x0=i=>{const e=Zg(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ey=()=>{var i;return(i=zu())===null||i===void 0?void 0:i.config},ty=i=>{var e;return(e=zu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Iu(JSON.stringify(t)),Iu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function L0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function M0(){var i;const e=(i=zu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function b0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function F0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function U0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function z0(){const i=bt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function j0(){return!M0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function B0(){try{return typeof indexedDB=="object"}catch{return!1}}function $0(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="FirebaseError";class Cr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=q0,Object.setPrototypeOf(this,Cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oa.prototype.create)}}class Oa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?H0(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Cr(o,m,s)}}function H0(i,e){return i.replace(W0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const W0=/\{\$([^}]+)}/g;function G0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Su(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Dm(u)&&Dm(h)){if(!Su(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Dm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function K0(i,e){const t=new Q0(i,e);return t.subscribe.bind(t)}class Q0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");X0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Mh),o.error===void 0&&(o.error=Mh),o.complete===void 0&&(o.complete=Mh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function X0(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Mh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(i){return i&&i._delegate?i._delegate:i}class Qi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new V0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Z0(e))try{this.getOrInitializeService({instanceIdentifier:qi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qi){return this.instances.has(e)}getOptions(e=qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:J0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qi){return this.component?this.component.multipleInstances?e:qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J0(i){return i===qi?void 0:i}function Z0(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Y0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Re||(Re={}));const tE={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},nE=Re.INFO,rE={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},iE=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=rE[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ed{constructor(e){this.name=e,this._logLevel=nE,this._logHandler=iE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const sE=(i,e)=>e.some(t=>i instanceof t);let xm,Vm;function oE(){return xm||(xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aE(){return Vm||(Vm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ny=new WeakMap,Qh=new WeakMap,ry=new WeakMap,bh=new WeakMap,wd=new WeakMap;function lE(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ii(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&ny.set(t,i)}).catch(()=>{}),wd.set(e,i),e}function uE(i){if(Qh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Qh.set(i,e)}let Xh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Qh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ry.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ii(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function cE(i){Xh=i(Xh)}function hE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Fh(this),e,...t);return ry.set(s,e.sort?e.sort():[e]),ii(s)}:aE().includes(i)?function(...e){return i.apply(Fh(this),e),ii(ny.get(this))}:function(...e){return ii(i.apply(Fh(this),e))}}function dE(i){return typeof i=="function"?hE(i):(i instanceof IDBTransaction&&uE(i),sE(i,oE())?new Proxy(i,Xh):i)}function ii(i){if(i instanceof IDBRequest)return lE(i);if(bh.has(i))return bh.get(i);const e=dE(i);return e!==i&&(bh.set(i,e),wd.set(e,i)),e}const Fh=i=>wd.get(i);function fE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=ii(h);return s&&h.addEventListener("upgradeneeded",y=>{s(ii(h.result),y.oldVersion,y.newVersion,ii(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const pE=["get","getKey","getAll","getAllKeys","count"],mE=["put","add","delete","clear"],Uh=new Map;function Om(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Uh.get(e))return Uh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=mE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||pE.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return Uh.set(e,u),u}cE(i=>({...i,get:(e,t,s)=>Om(e,t)||i.get(e,t,s),has:(e,t)=>!!Om(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function yE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yh="@firebase/app",Lm="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Ed("@firebase/app"),_E="@firebase/app-compat",vE="@firebase/analytics-compat",EE="@firebase/analytics",wE="@firebase/app-check-compat",TE="@firebase/app-check",IE="@firebase/auth",SE="@firebase/auth-compat",AE="@firebase/database",RE="@firebase/data-connect",CE="@firebase/database-compat",kE="@firebase/functions",PE="@firebase/functions-compat",NE="@firebase/installations",DE="@firebase/installations-compat",xE="@firebase/messaging",VE="@firebase/messaging-compat",OE="@firebase/performance",LE="@firebase/performance-compat",ME="@firebase/remote-config",bE="@firebase/remote-config-compat",FE="@firebase/storage",UE="@firebase/storage-compat",zE="@firebase/firestore",jE="@firebase/vertexai",BE="@firebase/firestore-compat",$E="firebase",qE="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="[DEFAULT]",HE={[Yh]:"fire-core",[_E]:"fire-core-compat",[EE]:"fire-analytics",[vE]:"fire-analytics-compat",[TE]:"fire-app-check",[wE]:"fire-app-check-compat",[IE]:"fire-auth",[SE]:"fire-auth-compat",[AE]:"fire-rtdb",[RE]:"fire-data-connect",[CE]:"fire-rtdb-compat",[kE]:"fire-fn",[PE]:"fire-fn-compat",[NE]:"fire-iid",[DE]:"fire-iid-compat",[xE]:"fire-fcm",[VE]:"fire-fcm-compat",[OE]:"fire-perf",[LE]:"fire-perf-compat",[ME]:"fire-rc",[bE]:"fire-rc-compat",[FE]:"fire-gcs",[UE]:"fire-gcs-compat",[zE]:"fire-fst",[BE]:"fire-fst-compat",[jE]:"fire-vertex","fire-js":"fire-js",[$E]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Map,WE=new Map,Zh=new Map;function Mm(i,e){try{i.container.addComponent(e)}catch(t){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function no(i){const e=i.name;if(Zh.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;Zh.set(e,i);for(const t of Au.values())Mm(t,i);for(const t of WE.values())Mm(t,i);return!0}function Td(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function vr(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},si=new Oa("app","Firebase",GE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=qE;function iy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Jh,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw si.create("bad-app-name",{appName:String(o)});if(t||(t=ey()),!t)throw si.create("no-options");const u=Au.get(o);if(u){if(Su(t,u.options)&&Su(s,u.config))return u;throw si.create("duplicate-app",{appName:o})}const h=new eE(o);for(const y of Zh.values())h.addComponent(y);const m=new KE(t,s,h);return Au.set(o,m),m}function sy(i=Jh){const e=Au.get(i);if(!e&&i===Jh&&ey())return iy();if(!e)throw si.create("no-app",{appName:i});return e}function oi(i,e,t){var s;let o=(s=HE[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(m.join(" "));return}no(new Qi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="firebase-heartbeat-database",XE=1,Sa="firebase-heartbeat-store";let zh=null;function oy(){return zh||(zh=fE(QE,XE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Sa)}catch(t){console.warn(t)}}}}).catch(i=>{throw si.create("idb-open",{originalErrorMessage:i.message})})),zh}async function YE(i){try{const t=(await oy()).transaction(Sa),s=await t.objectStore(Sa).get(ay(i));return await t.done,s}catch(e){if(e instanceof Cr)Ir.warn(e.message);else{const t=si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(t.message)}}}async function bm(i,e){try{const s=(await oy()).transaction(Sa,"readwrite");await s.objectStore(Sa).put(e,ay(i)),await s.done}catch(t){if(t instanceof Cr)Ir.warn(t.message);else{const s=si.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ir.warn(s.message)}}}function ay(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=1024,ZE=30*24*60*60*1e3;class ew{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nw(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Fm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=ZE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Ir.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fm(),{heartbeatsToSend:s,unsentEntries:o}=tw(this._heartbeatsCache.heartbeats),u=Iu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ir.warn(t),""}}}function Fm(){return new Date().toISOString().substring(0,10)}function tw(i,e=JE){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Um(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Um(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class nw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return B0()?$0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await YE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return bm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return bm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Um(i){return Iu(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(i){no(new Qi("platform-logger",e=>new gE(e),"PRIVATE")),no(new Qi("heartbeat",e=>new ew(e),"PRIVATE")),oi(Yh,Lm,i),oi(Yh,Lm,"esm2017"),oi("fire-js","")}rw("");var iw="firebase",sw="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oi(iw,sw,"app");function Id(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function ly(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ow=ly,uy=new Oa("auth","Firebase",ly());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new Ed("@firebase/auth");function aw(i,...e){Ru.logLevel<=Re.WARN&&Ru.warn(`Auth (${fo}): ${i}`,...e)}function du(i,...e){Ru.logLevel<=Re.ERROR&&Ru.error(`Auth (${fo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(i,...e){throw Ad(i,...e)}function On(i,...e){return Ad(i,...e)}function Sd(i,e,t){const s=Object.assign(Object.assign({},ow()),{[e]:t});return new Oa("auth","Firebase",s).create(e,{appName:i.name})}function Gi(i){return Sd(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lw(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Jn(i,"argument-error"),Sd(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ad(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return uy.create(i,...e)}function _e(i,e,...t){if(!i)throw Ad(e,...t)}function Er(i){const e="INTERNAL ASSERTION FAILED: "+i;throw du(e),new Error(e)}function Sr(i,e){i||Er(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function uw(){return zm()==="http:"||zm()==="https:"}function zm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uw()||F0()||"connection"in navigator)?navigator.onLine:!0}function hw(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t){this.shortDelay=e,this.longDelay=t,Sr(t>e,"Short delay should be less than long delay!"),this.isMobile=L0()||U0()}get(){return cw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(i,e){Sr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=new Ma(3e4,6e4);function Cd(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function po(i,e,t,s,o={}){return hy(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=La(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:y},u);return b0()||(v.referrerPolicy="no-referrer"),cy.fetch()(dy(i,i.config.apiHost,t,m),v)})}async function hy(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},dw),e);try{const o=new mw(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw su(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw su(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw su(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw su(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Sd(i,w,v);Jn(i,w)}}catch(o){if(o instanceof Cr)throw o;Jn(i,"network-request-failed",{message:String(o)})}}async function pw(i,e,t,s,o={}){const u=await po(i,e,t,s,o);return"mfaPendingCredential"in u&&Jn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function dy(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?Rd(i.config,o):`${i.config.apiScheme}://${o}`}class mw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(On(this.auth,"network-request-failed")),fw.get())})}}function su(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=On(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(i,e){return po(i,"POST","/v1/accounts:delete",e)}async function fy(i,e){return po(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yw(i,e=!1){const t=Yt(i),s=await t.getIdToken(e),o=kd(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:va(jh(o.auth_time)),issuedAtTime:va(jh(o.iat)),expirationTime:va(jh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function jh(i){return Number(i)*1e3}function kd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return du("JWT malformed, contained fewer than 3 sections"),null;try{const o=Jg(t);return o?JSON.parse(o):(du("Failed to decode base64 JWT payload"),null)}catch(o){return du("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function jm(i){const e=kd(i);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Cr&&_w(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function _w({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=va(this.lastLoginAt),this.creationTime=va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Aa(i,fy(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?py(u.providerUserInfo):[],m=ww(i.providerData,h),y=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=y?v:!1,R={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new td(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,R)}async function Ew(i){const e=Yt(i);await Cu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ww(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function py(i){return i.map(e=>{var{providerId:t}=e,s=Id(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(i,e){const t=await hy(i,{},async()=>{const s=La({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=dy(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",cy.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Iw(i,e){return po(i,"POST","/v2/accounts:revokeToken",Cd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=jm(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await Tw(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Js;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Js,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(i,e){_e(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class wr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Id(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new td(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Aa(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yw(this,e)}reload(){return Ew(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Cu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vr(this.auth.app))return Promise.reject(Gi(this.auth));const e=await this.getIdToken();return await Aa(this,gw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,y,v,w;const R=(s=t.displayName)!==null&&s!==void 0?s:void 0,L=(o=t.email)!==null&&o!==void 0?o:void 0,F=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,K=(h=t.photoURL)!==null&&h!==void 0?h:void 0,j=(m=t.tenantId)!==null&&m!==void 0?m:void 0,B=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,me=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ne=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ue,emailVerified:pe,isAnonymous:Fe,providerData:we,stsTokenManager:N}=t;_e(ue&&N,e,"internal-error");const T=Js.fromJSON(this.name,N);_e(typeof ue=="string",e,"internal-error"),Zr(R,e.name),Zr(L,e.name),_e(typeof pe=="boolean",e,"internal-error"),_e(typeof Fe=="boolean",e,"internal-error"),Zr(F,e.name),Zr(K,e.name),Zr(j,e.name),Zr(B,e.name),Zr(me,e.name),Zr(ne,e.name);const A=new wr({uid:ue,auth:e,email:L,emailVerified:pe,displayName:R,isAnonymous:Fe,photoURL:K,phoneNumber:F,tenantId:j,stsTokenManager:T,createdAt:me,lastLoginAt:ne});return we&&Array.isArray(we)&&(A.providerData=we.map(k=>Object.assign({},k))),B&&(A._redirectEventId=B),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new Js;o.updateFromServerResponse(t);const u=new wr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Cu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?py(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Js;m.updateFromIdToken(s);const y=new wr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new td(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=new Map;function Tr(i){Sr(i instanceof Function,"Expected a class definition");let e=Bm.get(i);return e?(Sr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Bm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}my.type="NONE";const $m=my;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(i,e,t){return`firebase:${i}:${e}:${t}`}class Zs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=fu(this.userKey,o.apiKey,u),this.fullPersistenceKey=fu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Zs(Tr($m),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Tr($m);const h=fu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){const R=wr._fromJSON(e,w);v!==u&&(m=R),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new Zs(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new Zs(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wy(e))return"Blackberry";if(Ty(e))return"Webos";if(yy(e))return"Safari";if((e.includes("chrome/")||_y(e))&&!e.includes("edge/"))return"Chrome";if(Ey(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function gy(i=bt()){return/firefox\//i.test(i)}function yy(i=bt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _y(i=bt()){return/crios\//i.test(i)}function vy(i=bt()){return/iemobile/i.test(i)}function Ey(i=bt()){return/android/i.test(i)}function wy(i=bt()){return/blackberry/i.test(i)}function Ty(i=bt()){return/webos/i.test(i)}function Pd(i=bt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Sw(i=bt()){var e;return Pd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Aw(){return z0()&&document.documentMode===10}function Iy(i=bt()){return Pd(i)||Ey(i)||Ty(i)||wy(i)||/windows phone/i.test(i)||vy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(i,e=[]){let t;switch(i){case"Browser":t=qm(bt());break;case"Worker":t=`${qm(bt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${fo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(i,e={}){return po(i,"GET","/v2/passwordPolicy",Cd(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=6;class Pw{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:kw,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hm(this),this.idTokenSubscription=new Hm(this),this.beforeStateQueue=new Rw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fy(this,{idToken:e}),s=await wr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(o=y.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Cu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vr(this.app))return Promise.reject(Gi(this));const t=e?Yt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vr(this.app)?Promise.reject(Gi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vr(this.app)?Promise.reject(Gi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cw(this),t=new Pw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Iw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[Tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&aw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ju(i){return Yt(i)}class Hm{constructor(e){this.auth=e,this.observer=null,this.addObserver=K0(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dw(i){Nd=i}function xw(i){return Nd.loadJS(i)}function Vw(){return Nd.gapiScript}function Ow(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(i,e){const t=Td(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Su(u,e??{}))return o;Jn(o,"already-initialized")}return t.initialize({options:e})}function Mw(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Tr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function bw(i,e,t){const s=ju(i);_e(s._canInitEmulator,s,"emulator-config-failed"),_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Ay(e),{host:h,port:m}=Fw(e),y=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${y}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),Uw()}function Ay(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Fw(i){const e=Ay(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Wm(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Wm(h)}}}function Wm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Uw(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,t){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(i,e){return pw(i,"POST","/v1/accounts:signInWithIdp",Cd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="http://localhost";class Xi extends Ry{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Id(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Xi(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return eo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,eo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,eo(e,t)}buildRequest(){const e={requestUri:zw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=La(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends Dd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends ba{constructor(){super("facebook.com")}static credential(e){return Xi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xi._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return _r.credential(t,s)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends ba{constructor(){super("github.com")}static credential(e){return Xi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.GITHUB_SIGN_IN_METHOD="github.com";ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends ba{constructor(){super("twitter.com")}static credential(e,t){return Xi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ni.credential(t,s)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await wr._fromIdTokenResponse(e,s,o),h=Gm(s);return new ro({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Gm(s);return new ro({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Gm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends Cr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ku.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new ku(e,t,s,o)}}function Cy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ku._fromErrorAndOperation(i,u,e,s):u})}async function jw(i,e,t=!1){const s=await Aa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ro._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(i,e,t=!1){const{auth:s}=i;if(vr(s.app))return Promise.reject(Gi(s));const o="reauthenticate";try{const u=await Aa(i,Cy(s,o,e,i),t);_e(u.idToken,s,"internal-error");const h=kd(u.idToken);_e(h,s,"internal-error");const{sub:m}=h;return _e(i.uid===m,s,"user-mismatch"),ro._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Jn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w(i,e,t=!1){if(vr(i.app))return Promise.reject(Gi(i));const s="signIn",o=await Cy(i,s,e),u=await ro._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function qw(i,e,t,s){return Yt(i).onIdTokenChanged(e,t,s)}function Hw(i,e,t){return Yt(i).beforeAuthStateChanged(e,t)}function Ww(i){return Yt(i).signOut()}const Pu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pu,"1"),this.storage.removeItem(Pu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=1e3,Kw=10;class Py extends ky{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);Aw()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Kw):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Gw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Py.type="LOCAL";const Qw=Py;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny extends ky{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ny.type="SESSION";const Dy=Ny;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Bu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await Xw(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=xd("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(R){const L=R;if(L.data.eventId===v)switch(L.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(L.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function Jw(i){Kn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function Zw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function tT(){return xy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="firebaseLocalStorageDb",nT=1,Nu="firebaseLocalStorage",Oy="fbase_key";class Fa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $u(i,e){return i.transaction([Nu],e?"readwrite":"readonly").objectStore(Nu)}function rT(){const i=indexedDB.deleteDatabase(Vy);return new Fa(i).toPromise()}function nd(){const i=indexedDB.open(Vy,nT);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Nu,{keyPath:Oy})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Nu)?e(s):(s.close(),await rT(),e(await nd()))})})}async function Km(i,e,t){const s=$u(i,!0).put({[Oy]:e,value:t});return new Fa(s).toPromise()}async function iT(i,e){const t=$u(i,!1).get(e),s=await new Fa(t).toPromise();return s===void 0?null:s.value}function Qm(i,e){const t=$u(i,!0).delete(e);return new Fa(t).toPromise()}const sT=800,oT=3;class Ly{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>oT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bu._getInstance(tT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Zw(),!this.activeServiceWorker)return;this.sender=new Yw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nd();return await Km(e,Pu,"1"),await Qm(e,Pu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Km(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>iT(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=$u(o,!1).getAll();return new Fa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ly.type="LOCAL";const aT=Ly;new Ma(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(i,e){return e?Tr(e):(_e(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd extends Ry{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lT(i){return $w(i.auth,new Vd(i),i.bypassAuthState)}function uT(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),Bw(t,new Vd(i),i.bypassAuthState)}async function cT(i){const{auth:e,user:t}=i;return _e(t,e,"internal-error"),jw(t,new Vd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lT;case"linkViaPopup":case"linkViaRedirect":return cT;case"reauthViaPopup":case"reauthViaRedirect":return uT;default:Jn(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=new Ma(2e3,1e4);async function dT(i,e,t){if(vr(i.app))return Promise.reject(On(i,"operation-not-supported-in-this-environment"));const s=ju(i);lw(i,e,Dd);const o=My(s,t);return new Hi(s,"signInViaPopup",e,o).executeNotNull()}class Hi extends by{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=xd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hT.get())};e()}}Hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="pendingRedirect",pu=new Map;class pT extends by{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=pu.get(this.auth._key());if(!e){try{const s=await mT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}pu.set(this.auth._key(),e)}return this.bypassAuthState||pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mT(i,e){const t=_T(e),s=yT(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function gT(i,e){pu.set(i._key(),e)}function yT(i){return Tr(i._redirectPersistence)}function _T(i){return fu(fT,i.config.apiKey,i.name)}async function vT(i,e,t=!1){if(vr(i.app))return Promise.reject(Gi(i));const s=ju(i),o=My(s,e),h=await new pT(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=10*60*1e3;class wT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Fy(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(On(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ET&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xm(e))}saveEventToCache(e){this.cachedEventUids.add(Xm(e)),this.lastProcessedEventTime=Date.now()}}function Xm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Fy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fy(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IT(i,e={}){return po(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AT=/^https?/;async function RT(i){if(i.config.emulator)return;const{authorizedDomains:e}=await IT(i);for(const t of e)try{if(CT(t))return}catch{}Jn(i,"unauthorized-domain")}function CT(i){const e=ed(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!AT.test(t))return!1;if(ST.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=new Ma(3e4,6e4);function Ym(){const i=Kn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function PT(i){return new Promise((e,t)=>{var s,o,u;function h(){Ym(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ym(),t(On(i,"network-request-failed"))},timeout:kT.get()})}if(!((o=(s=Kn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Kn().gapi)===null||u===void 0)&&u.load)h();else{const m=Ow("iframefcb");return Kn()[m]=()=>{gapi.load?h():t(On(i,"network-request-failed"))},xw(`${Vw()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw mu=null,e})}let mu=null;function NT(i){return mu=mu||PT(i),mu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=new Ma(5e3,15e3),xT="__/auth/iframe",VT="emulator/auth/iframe",OT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MT(i){const e=i.config;_e(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Rd(e,VT):`https://${i.config.authDomain}/${xT}`,s={apiKey:e.apiKey,appName:i.name,v:fo},o=LT.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${La(s).slice(1)}`}async function bT(i){const e=await NT(i),t=Kn().gapi;return _e(t,i,"internal-error"),e.open({where:document.body,url:MT(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OT,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=On(i,"network-request-failed"),m=Kn().setTimeout(()=>{u(h)},DT.get());function y(){Kn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UT=500,zT=600,jT="_blank",BT="http://localhost";class Jm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $T(i,e,t,s=UT,o=zT){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},FT),{width:s.toString(),height:o.toString(),top:u,left:h}),v=bt().toLowerCase();t&&(m=_y(v)?jT:t),gy(v)&&(e=e||BT,y.scrollbars="yes");const w=Object.entries(y).reduce((L,[F,K])=>`${L}${F}=${K},`,"");if(Sw(v)&&m!=="_self")return qT(e||"",m),new Jm(null);const R=window.open(e||"",m,w);_e(R,i,"popup-blocked");try{R.focus()}catch{}return new Jm(R)}function qT(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="__/auth/handler",WT="emulator/auth/handler",GT=encodeURIComponent("fac");async function Zm(i,e,t,s,o,u){_e(i.config.authDomain,i,"auth-domain-config-required"),_e(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:fo,eventId:o};if(e instanceof Dd){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",G0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,R]of Object.entries({}))h[w]=R}if(e instanceof ba){const w=e.getScopes().filter(R=>R!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${GT}=${encodeURIComponent(y)}`:"";return`${KT(i)}?${La(m).slice(1)}${v}`}function KT({config:i}){return i.emulator?Rd(i,WT):`https://${i.authDomain}/${HT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="webStorageSupport";class QT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dy,this._completeRedirectFn=vT,this._overrideRedirectResult=gT}async _openPopup(e,t,s,o){var u;Sr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Zm(e,t,s,ed(),o);return $T(e,h,xd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Zm(e,t,s,ed(),o);return Jw(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Sr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await bT(e),s=new wT(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bh,{type:Bh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Bh];h!==void 0&&t(!!h),Jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=RT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Iy()||yy()||Pd()}}const XT=QT;var eg="@firebase/auth",tg="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZT(i){no(new Qi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sy(i)},v=new Nw(s,o,u,y);return Mw(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),no(new Qi("auth-internal",e=>{const t=ju(e.getProvider("auth").getImmediate());return(s=>new YT(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),oi(eg,tg,JT(i)),oi(eg,tg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=5*60,tI=ty("authIdTokenMaxAge")||eI;let ng=null;const nI=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>tI)return;const o=t==null?void 0:t.token;ng!==o&&(ng=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function rI(i=sy()){const e=Td(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Lw(i,{popupRedirectResolver:XT,persistence:[aT,Qw,Dy]}),s=ty("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=nI(u.toString());Hw(t,h,()=>h(t.currentUser)),qw(t,m=>h(m))}}const o=Zg("auth");return o&&bw(t,`http://${o}`),t}function iI(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Dw({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=On("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",iI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZT("Browser");var rg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ki,Uy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,T){function A(){}A.prototype=T.prototype,N.D=T.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(k,D,V){for(var S=Array(arguments.length-2),et=2;et<arguments.length;et++)S[et-2]=arguments[et];return T.prototype[D].apply(k,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,T,A){A||(A=0);var k=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)k[D]=T.charCodeAt(A++)|T.charCodeAt(A++)<<8|T.charCodeAt(A++)<<16|T.charCodeAt(A++)<<24;else for(D=0;16>D;++D)k[D]=T[A++]|T[A++]<<8|T[A++]<<16|T[A++]<<24;T=N.g[0],A=N.g[1],D=N.g[2];var V=N.g[3],S=T+(V^A&(D^V))+k[0]+3614090360&4294967295;T=A+(S<<7&4294967295|S>>>25),S=V+(D^T&(A^D))+k[1]+3905402710&4294967295,V=T+(S<<12&4294967295|S>>>20),S=D+(A^V&(T^A))+k[2]+606105819&4294967295,D=V+(S<<17&4294967295|S>>>15),S=A+(T^D&(V^T))+k[3]+3250441966&4294967295,A=D+(S<<22&4294967295|S>>>10),S=T+(V^A&(D^V))+k[4]+4118548399&4294967295,T=A+(S<<7&4294967295|S>>>25),S=V+(D^T&(A^D))+k[5]+1200080426&4294967295,V=T+(S<<12&4294967295|S>>>20),S=D+(A^V&(T^A))+k[6]+2821735955&4294967295,D=V+(S<<17&4294967295|S>>>15),S=A+(T^D&(V^T))+k[7]+4249261313&4294967295,A=D+(S<<22&4294967295|S>>>10),S=T+(V^A&(D^V))+k[8]+1770035416&4294967295,T=A+(S<<7&4294967295|S>>>25),S=V+(D^T&(A^D))+k[9]+2336552879&4294967295,V=T+(S<<12&4294967295|S>>>20),S=D+(A^V&(T^A))+k[10]+4294925233&4294967295,D=V+(S<<17&4294967295|S>>>15),S=A+(T^D&(V^T))+k[11]+2304563134&4294967295,A=D+(S<<22&4294967295|S>>>10),S=T+(V^A&(D^V))+k[12]+1804603682&4294967295,T=A+(S<<7&4294967295|S>>>25),S=V+(D^T&(A^D))+k[13]+4254626195&4294967295,V=T+(S<<12&4294967295|S>>>20),S=D+(A^V&(T^A))+k[14]+2792965006&4294967295,D=V+(S<<17&4294967295|S>>>15),S=A+(T^D&(V^T))+k[15]+1236535329&4294967295,A=D+(S<<22&4294967295|S>>>10),S=T+(D^V&(A^D))+k[1]+4129170786&4294967295,T=A+(S<<5&4294967295|S>>>27),S=V+(A^D&(T^A))+k[6]+3225465664&4294967295,V=T+(S<<9&4294967295|S>>>23),S=D+(T^A&(V^T))+k[11]+643717713&4294967295,D=V+(S<<14&4294967295|S>>>18),S=A+(V^T&(D^V))+k[0]+3921069994&4294967295,A=D+(S<<20&4294967295|S>>>12),S=T+(D^V&(A^D))+k[5]+3593408605&4294967295,T=A+(S<<5&4294967295|S>>>27),S=V+(A^D&(T^A))+k[10]+38016083&4294967295,V=T+(S<<9&4294967295|S>>>23),S=D+(T^A&(V^T))+k[15]+3634488961&4294967295,D=V+(S<<14&4294967295|S>>>18),S=A+(V^T&(D^V))+k[4]+3889429448&4294967295,A=D+(S<<20&4294967295|S>>>12),S=T+(D^V&(A^D))+k[9]+568446438&4294967295,T=A+(S<<5&4294967295|S>>>27),S=V+(A^D&(T^A))+k[14]+3275163606&4294967295,V=T+(S<<9&4294967295|S>>>23),S=D+(T^A&(V^T))+k[3]+4107603335&4294967295,D=V+(S<<14&4294967295|S>>>18),S=A+(V^T&(D^V))+k[8]+1163531501&4294967295,A=D+(S<<20&4294967295|S>>>12),S=T+(D^V&(A^D))+k[13]+2850285829&4294967295,T=A+(S<<5&4294967295|S>>>27),S=V+(A^D&(T^A))+k[2]+4243563512&4294967295,V=T+(S<<9&4294967295|S>>>23),S=D+(T^A&(V^T))+k[7]+1735328473&4294967295,D=V+(S<<14&4294967295|S>>>18),S=A+(V^T&(D^V))+k[12]+2368359562&4294967295,A=D+(S<<20&4294967295|S>>>12),S=T+(A^D^V)+k[5]+4294588738&4294967295,T=A+(S<<4&4294967295|S>>>28),S=V+(T^A^D)+k[8]+2272392833&4294967295,V=T+(S<<11&4294967295|S>>>21),S=D+(V^T^A)+k[11]+1839030562&4294967295,D=V+(S<<16&4294967295|S>>>16),S=A+(D^V^T)+k[14]+4259657740&4294967295,A=D+(S<<23&4294967295|S>>>9),S=T+(A^D^V)+k[1]+2763975236&4294967295,T=A+(S<<4&4294967295|S>>>28),S=V+(T^A^D)+k[4]+1272893353&4294967295,V=T+(S<<11&4294967295|S>>>21),S=D+(V^T^A)+k[7]+4139469664&4294967295,D=V+(S<<16&4294967295|S>>>16),S=A+(D^V^T)+k[10]+3200236656&4294967295,A=D+(S<<23&4294967295|S>>>9),S=T+(A^D^V)+k[13]+681279174&4294967295,T=A+(S<<4&4294967295|S>>>28),S=V+(T^A^D)+k[0]+3936430074&4294967295,V=T+(S<<11&4294967295|S>>>21),S=D+(V^T^A)+k[3]+3572445317&4294967295,D=V+(S<<16&4294967295|S>>>16),S=A+(D^V^T)+k[6]+76029189&4294967295,A=D+(S<<23&4294967295|S>>>9),S=T+(A^D^V)+k[9]+3654602809&4294967295,T=A+(S<<4&4294967295|S>>>28),S=V+(T^A^D)+k[12]+3873151461&4294967295,V=T+(S<<11&4294967295|S>>>21),S=D+(V^T^A)+k[15]+530742520&4294967295,D=V+(S<<16&4294967295|S>>>16),S=A+(D^V^T)+k[2]+3299628645&4294967295,A=D+(S<<23&4294967295|S>>>9),S=T+(D^(A|~V))+k[0]+4096336452&4294967295,T=A+(S<<6&4294967295|S>>>26),S=V+(A^(T|~D))+k[7]+1126891415&4294967295,V=T+(S<<10&4294967295|S>>>22),S=D+(T^(V|~A))+k[14]+2878612391&4294967295,D=V+(S<<15&4294967295|S>>>17),S=A+(V^(D|~T))+k[5]+4237533241&4294967295,A=D+(S<<21&4294967295|S>>>11),S=T+(D^(A|~V))+k[12]+1700485571&4294967295,T=A+(S<<6&4294967295|S>>>26),S=V+(A^(T|~D))+k[3]+2399980690&4294967295,V=T+(S<<10&4294967295|S>>>22),S=D+(T^(V|~A))+k[10]+4293915773&4294967295,D=V+(S<<15&4294967295|S>>>17),S=A+(V^(D|~T))+k[1]+2240044497&4294967295,A=D+(S<<21&4294967295|S>>>11),S=T+(D^(A|~V))+k[8]+1873313359&4294967295,T=A+(S<<6&4294967295|S>>>26),S=V+(A^(T|~D))+k[15]+4264355552&4294967295,V=T+(S<<10&4294967295|S>>>22),S=D+(T^(V|~A))+k[6]+2734768916&4294967295,D=V+(S<<15&4294967295|S>>>17),S=A+(V^(D|~T))+k[13]+1309151649&4294967295,A=D+(S<<21&4294967295|S>>>11),S=T+(D^(A|~V))+k[4]+4149444226&4294967295,T=A+(S<<6&4294967295|S>>>26),S=V+(A^(T|~D))+k[11]+3174756917&4294967295,V=T+(S<<10&4294967295|S>>>22),S=D+(T^(V|~A))+k[2]+718787259&4294967295,D=V+(S<<15&4294967295|S>>>17),S=A+(V^(D|~T))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+T&4294967295,N.g[1]=N.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+V&4294967295}s.prototype.u=function(N,T){T===void 0&&(T=N.length);for(var A=T-this.blockSize,k=this.B,D=this.h,V=0;V<T;){if(D==0)for(;V<=A;)o(this,N,V),V+=this.blockSize;if(typeof N=="string"){for(;V<T;)if(k[D++]=N.charCodeAt(V++),D==this.blockSize){o(this,k),D=0;break}}else for(;V<T;)if(k[D++]=N[V++],D==this.blockSize){o(this,k),D=0;break}}this.h=D,this.o+=T},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var T=1;T<N.length-8;++T)N[T]=0;var A=8*this.o;for(T=N.length-8;T<N.length;++T)N[T]=A&255,A/=256;for(this.u(N),N=Array(16),T=A=0;4>T;++T)for(var k=0;32>k;k+=8)N[A++]=this.g[T]>>>k&255;return N};function u(N,T){var A=m;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=T(N)}function h(N,T){this.h=T;for(var A=[],k=!0,D=N.length-1;0<=D;D--){var V=N[D]|0;k&&V==T||(A[D]=V,k=!1)}this.g=A}var m={};function y(N){return-128<=N&&128>N?u(N,function(T){return new h([T|0],0>T?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return R;if(0>N)return B(v(-N));for(var T=[],A=1,k=0;N>=A;k++)T[k]=N/A|0,A*=4294967296;return new h(T,0)}function w(N,T){if(N.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N.charAt(0)=="-")return B(w(N.substring(1),T));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(T,8)),k=R,D=0;D<N.length;D+=8){var V=Math.min(8,N.length-D),S=parseInt(N.substring(D,D+V),T);8>V?(V=v(Math.pow(T,V)),k=k.j(V).add(v(S))):(k=k.j(A),k=k.add(v(S)))}return k}var R=y(0),L=y(1),F=y(16777216);i=h.prototype,i.m=function(){if(j(this))return-B(this).m();for(var N=0,T=1,A=0;A<this.g.length;A++){var k=this.i(A);N+=(0<=k?k:4294967296+k)*T,T*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(K(this))return"0";if(j(this))return"-"+B(this).toString(N);for(var T=v(Math.pow(N,6)),A=this,k="";;){var D=pe(A,T).g;A=me(A,D.j(T));var V=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=D,K(A))return V+k;for(;6>V.length;)V="0"+V;k=V+k}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function K(N){if(N.h!=0)return!1;for(var T=0;T<N.g.length;T++)if(N.g[T]!=0)return!1;return!0}function j(N){return N.h==-1}i.l=function(N){return N=me(this,N),j(N)?-1:K(N)?0:1};function B(N){for(var T=N.g.length,A=[],k=0;k<T;k++)A[k]=~N.g[k];return new h(A,~N.h).add(L)}i.abs=function(){return j(this)?B(this):this},i.add=function(N){for(var T=Math.max(this.g.length,N.g.length),A=[],k=0,D=0;D<=T;D++){var V=k+(this.i(D)&65535)+(N.i(D)&65535),S=(V>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);k=S>>>16,V&=65535,S&=65535,A[D]=S<<16|V}return new h(A,A[A.length-1]&-2147483648?-1:0)};function me(N,T){return N.add(B(T))}i.j=function(N){if(K(this)||K(N))return R;if(j(this))return j(N)?B(this).j(B(N)):B(B(this).j(N));if(j(N))return B(this.j(B(N)));if(0>this.l(F)&&0>N.l(F))return v(this.m()*N.m());for(var T=this.g.length+N.g.length,A=[],k=0;k<2*T;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<N.g.length;D++){var V=this.i(k)>>>16,S=this.i(k)&65535,et=N.i(D)>>>16,kt=N.i(D)&65535;A[2*k+2*D]+=S*kt,ne(A,2*k+2*D),A[2*k+2*D+1]+=V*kt,ne(A,2*k+2*D+1),A[2*k+2*D+1]+=S*et,ne(A,2*k+2*D+1),A[2*k+2*D+2]+=V*et,ne(A,2*k+2*D+2)}for(k=0;k<T;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=T;k<2*T;k++)A[k]=0;return new h(A,0)};function ne(N,T){for(;(N[T]&65535)!=N[T];)N[T+1]+=N[T]>>>16,N[T]&=65535,T++}function ue(N,T){this.g=N,this.h=T}function pe(N,T){if(K(T))throw Error("division by zero");if(K(N))return new ue(R,R);if(j(N))return T=pe(B(N),T),new ue(B(T.g),B(T.h));if(j(T))return T=pe(N,B(T)),new ue(B(T.g),T.h);if(30<N.g.length){if(j(N)||j(T))throw Error("slowDivide_ only works with positive integers.");for(var A=L,k=T;0>=k.l(N);)A=Fe(A),k=Fe(k);var D=we(A,1),V=we(k,1);for(k=we(k,2),A=we(A,2);!K(k);){var S=V.add(k);0>=S.l(N)&&(D=D.add(A),V=S),k=we(k,1),A=we(A,1)}return T=me(N,D.j(T)),new ue(D,T)}for(D=R;0<=N.l(T);){for(A=Math.max(1,Math.floor(N.m()/T.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),V=v(A),S=V.j(T);j(S)||0<S.l(N);)A-=k,V=v(A),S=V.j(T);K(V)&&(V=L),D=D.add(V),N=me(N,S)}return new ue(D,N)}i.A=function(N){return pe(this,N).h},i.and=function(N){for(var T=Math.max(this.g.length,N.g.length),A=[],k=0;k<T;k++)A[k]=this.i(k)&N.i(k);return new h(A,this.h&N.h)},i.or=function(N){for(var T=Math.max(this.g.length,N.g.length),A=[],k=0;k<T;k++)A[k]=this.i(k)|N.i(k);return new h(A,this.h|N.h)},i.xor=function(N){for(var T=Math.max(this.g.length,N.g.length),A=[],k=0;k<T;k++)A[k]=this.i(k)^N.i(k);return new h(A,this.h^N.h)};function Fe(N){for(var T=N.g.length+1,A=[],k=0;k<T;k++)A[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(A,N.h)}function we(N,T){var A=T>>5;T%=32;for(var k=N.g.length-A,D=[],V=0;V<k;V++)D[V]=0<T?N.i(V+A)>>>T|N.i(V+A+1)<<32-T:N.i(V+A);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Uy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,Ki=h}).apply(typeof rg<"u"?rg:typeof self<"u"?self:typeof window<"u"?window:{});var ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zy,ma,jy,gu,rd,By,$y,qy;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ou=="object"&&ou];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var O=l[E];if(!(O in g))break e;g=g[O]}l=l[l.length-1],E=g[l],f=f(E),f!=E&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,E=!1,O={next:function(){if(!E&&g<l.length){var z=g++;return{value:f(z,l[z]),done:!1}}return E=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,g){return l.call.apply(l.bind,arguments)}function R(l,f,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,E),l.apply(f,O)}}return function(){return l.apply(f,arguments)}}function L(l,f,g){return L=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:R,L.apply(null,arguments)}function F(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function K(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,O,z){for(var Y=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)Y[Ue-2]=arguments[Ue];return f.prototype[O].apply(E,Y)}}function j(l){const f=l.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=l[E];return g}return[]}function B(l,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const O=l.length||0,z=E.length||0;l.length=O+z;for(let Y=0;Y<z;Y++)l[O+Y]=E[Y]}else l.push(E)}}class me{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ne(l){return/^[\s\xa0]*$/.test(l)}function ue(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function pe(l){return pe[" "](l),l}pe[" "]=function(){};var Fe=ue().indexOf("Gecko")!=-1&&!(ue().toLowerCase().indexOf("webkit")!=-1&&ue().indexOf("Edge")==-1)&&!(ue().indexOf("Trident")!=-1||ue().indexOf("MSIE")!=-1)&&ue().indexOf("Edge")==-1;function we(l,f,g){for(const E in l)f.call(g,l[E],E,l)}function N(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function T(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let g,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(g in E)l[g]=E[g];for(let z=0;z<A.length;z++)g=A[z],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function D(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function V(l){m.setTimeout(()=>{throw l},0)}function S(){var l=he;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,g){const E=kt.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var kt=new me(()=>new Pt,l=>l.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,J=!1,he=new et,ee=()=>{const l=m.Promise.resolve(void 0);ze=()=>{l.then(x)}};var x=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){V(g)}var f=kt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var Ie=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l}();function Se(l,f){if(le.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Fe){e:{try{pe(f.nodeName);var O=!0;break e}catch{}O=!1}O||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Se.aa.h.call(this)}}K(Se,le);var Ne={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(l,f,g,E,O){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=O,this.key=++Me,this.da=this.fa=!1}function mt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function er(l){this.src=l,this.g={},this.h=0}er.prototype.add=function(l,f,g,E,O){var z=l.toString();l=this.g[z],l||(l=this.g[z]=[],this.h++);var Y=kr(l,f,E,O);return-1<Y?(f=l[Y],g||(f.fa=!1)):(f=new Be(f,this.src,z,!!E,O),f.fa=g,l.push(f)),f};function ns(l,f){var g=f.type;if(g in l.g){var E=l.g[g],O=Array.prototype.indexOf.call(E,f,void 0),z;(z=0<=O)&&Array.prototype.splice.call(E,O,1),z&&(mt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function kr(l,f,g,E){for(var O=0;O<l.length;++O){var z=l[O];if(!z.da&&z.listener==f&&z.capture==!!g&&z.ha==E)return O}return-1}var gi="closure_lm_"+(1e6*Math.random()|0),rs={};function Eo(l,f,g,E,O){if(Array.isArray(f)){for(var z=0;z<f.length;z++)Eo(l,f[z],g,E,O);return null}return g=Io(g),l&&l[Le]?l.K(f,g,v(E)?!!E.capture:!!E,O):wo(l,f,g,!1,E,O)}function wo(l,f,g,E,O,z){if(!f)throw Error("Invalid event type");var Y=v(O)?!!O.capture:!!O,Ue=ss(l);if(Ue||(l[gi]=Ue=new er(l)),g=Ue.add(f,g,E,Y,z),g.proxy)return g;if(E=$a(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)Ie||(O=Y),O===void 0&&(O=!1),l.addEventListener(f.toString(),E,O);else if(l.attachEvent)l.attachEvent(nr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function $a(){function l(g){return f.call(l.src,l.listener,g)}const f=To;return l}function is(l,f,g,E,O){if(Array.isArray(f))for(var z=0;z<f.length;z++)is(l,f[z],g,E,O);else E=v(E)?!!E.capture:!!E,g=Io(g),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(z=l.g[f],g=kr(z,g,E,O),-1<g&&(mt(z[g]),Array.prototype.splice.call(z,g,1),z.length==0&&(delete l.g[f],l.h--)))):l&&(l=ss(l))&&(f=l.g[f.toString()],l=-1,f&&(l=kr(f,g,E,O)),(g=-1<l?f[l]:null)&&tr(g))}function tr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])ns(f.i,l);else{var g=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(g,E,l.capture):f.detachEvent?f.detachEvent(nr(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=ss(f))?(ns(g,l),g.h==0&&(g.src=null,f[gi]=null)):mt(l)}}}function nr(l){return l in rs?rs[l]:rs[l]="on"+l}function To(l,f){if(l.da)l=!0;else{f=new Se(f,this);var g=l.listener,E=l.ha||l.src;l.fa&&tr(l),l=g.call(E,f)}return l}function ss(l){return l=l[gi],l instanceof er?l:null}var os="__closure_events_fn_"+(1e9*Math.random()>>>0);function Io(l){return typeof l=="function"?l:(l[os]||(l[os]=function(f){return l.handleEvent(f)}),l[os])}function lt(){q.call(this),this.i=new er(this),this.M=this,this.F=null}K(lt,q),lt.prototype[Le]=!0,lt.prototype.removeEventListener=function(l,f,g,E){is(this,l,f,g,E)};function ut(l,f){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new le(f,l);else if(f instanceof le)f.target=f.target||l;else{var O=f;f=new le(E,l),k(f,O)}if(O=!0,g)for(var z=g.length-1;0<=z;z--){var Y=f.g=g[z];O=rr(Y,E,!0,f)&&O}if(Y=f.g=l,O=rr(Y,E,!0,f)&&O,O=rr(Y,E,!1,f)&&O,g)for(z=0;z<g.length;z++)Y=f.g=g[z],O=rr(Y,E,!1,f)&&O}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],E=0;E<g.length;E++)mt(g[E]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,g,E){return this.i.add(String(l),f,!1,g,E)},lt.prototype.L=function(l,f,g,E){return this.i.add(String(l),f,!0,g,E)};function rr(l,f,g,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var O=!0,z=0;z<f.length;++z){var Y=f[z];if(Y&&!Y.da&&Y.capture==g){var Ue=Y.listener,ct=Y.ha||Y.src;Y.fa&&ns(l.i,Y),O=Ue.call(ct,E)!==!1&&O}}return O&&!E.defaultPrevented}function So(l,f,g){if(typeof l=="function")g&&(l=L(l,g));else if(l&&typeof l.handleEvent=="function")l=L(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Pr(l){l.g=So(()=>{l.g=null,l.i&&(l.i=!1,Pr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class yi extends q{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Pr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _i(l){q.call(this),this.h=l,this.g={}}K(_i,q);var Ao=[];function Ro(l){we(l.g,function(f,g){this.g.hasOwnProperty(g)&&tr(f)},l),l.g={}}_i.prototype.N=function(){_i.aa.N.call(this),Ro(this)},_i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Co=m.JSON.stringify,ko=m.JSON.parse,Po=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function vi(){}vi.prototype.h=null;function as(l){return l.h||(l.h=l.i())}function ls(){}var an={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mn(){le.call(this,"d")}K(Mn,le);function us(){le.call(this,"c")}K(us,le);var bn={},No=null;function Ei(){return No=No||new lt}bn.La="serverreachability";function Do(l){le.call(this,bn.La,l)}K(Do,le);function ir(l){const f=Ei();ut(f,new Do(f))}bn.STAT_EVENT="statevent";function xo(l,f){le.call(this,bn.STAT_EVENT,l),this.stat=f}K(xo,le);function tt(l){const f=Ei();ut(f,new xo(f,l))}bn.Ma="timingevent";function cs(l,f){le.call(this,bn.Ma,l),this.size=f}K(cs,le);function _n(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function wi(){this.g=!0}wi.prototype.xa=function(){this.g=!1};function Ti(l,f,g,E,O,z){l.info(function(){if(l.g)if(z)for(var Y="",Ue=z.split("&"),ct=0;ct<Ue.length;ct++){var De=Ue[ct].split("=");if(1<De.length){var gt=De[0];De=De[1];var it=gt.split("_");Y=2<=it.length&&it[1]=="type"?Y+(gt+"="+De+"&"):Y+(gt+"=redacted&")}}else Y=null;else Y=z;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+f+`
`+g+`
`+Y})}function hs(l,f,g,E,O,z,Y){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+f+`
`+g+`
`+z+" "+Y})}function vn(l,f,g,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+sc(l,g)+(E?" "+E:"")})}function Vo(l,f){l.info(function(){return"TIMEOUT: "+f})}wi.prototype.info=function(){};function sc(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var O=E[1];if(Array.isArray(O)&&!(1>O.length)){var z=O[0];if(z!="noop"&&z!="stop"&&z!="close")for(var Y=1;Y<O.length;Y++)O[Y]=""}}}}return Co(g)}catch{return f}}var ds={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},En;function Ii(){}K(Ii,vi),Ii.prototype.g=function(){return new XMLHttpRequest},Ii.prototype.i=function(){return{}},En=new Ii;function wn(l,f,g,E){this.j=l,this.i=f,this.l=g,this.R=E||1,this.U=new _i(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ha}function Ha(){this.i=null,this.g="",this.h=!1}var Oo={},fs={};function ps(l,f,g){l.L=1,l.v=Or(Zt(f)),l.m=g,l.P=!0,Lo(l,null)}function Lo(l,f){l.F=Date.now(),$e(l),l.A=Zt(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Mr(g.i,"t",E),l.C=0,g=l.j.J,l.h=new Ha,l.g=ul(l.j,g?f:null,!l.m),0<l.O&&(l.M=new yi(L(l.Y,l,l.g),l.O)),f=l.U,g=l.g,E=l.ca;var O="readystatechange";Array.isArray(O)||(O&&(Ao[0]=O.toString()),O=Ao);for(var z=0;z<O.length;z++){var Y=Eo(g,O[z],E||f.handleEvent,!1,f.h||f);if(!Y)break;f.g[Y.key]=Y}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ir(),Ti(l.i,l.u,l.A,l.l,l.R,l.m)}wn.prototype.ca=function(l){l=l.target;const f=this.M;f&&$t(l)==3?f.j():this.Y(l)},wn.prototype.Y=function(l){try{if(l==this.g)e:{const it=$t(this.g);var f=this.g.Ba();const cn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||jo(this.g)))){this.J||it!=4||f==7||(f==8||0>=cn?ir(3):ir(2)),Si(this);var g=this.g.Z();this.X=g;t:if(Wa(this)){var E=jo(this.g);l="";var O=E.length,z=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),Nr(this);var Y="";break t}this.h.i=new m.TextDecoder}for(f=0;f<O;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(z&&f==O-1)});E.length=0,this.h.g+=l,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=g==200,hs(this.i,this.u,this.A,this.l,this.R,it,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,ct=this.g;if((Ue=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(Ue)){var De=Ue;break t}}De=null}if(g=De)vn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mo(this,g);else{this.o=!1,this.s=3,tt(12),ln(this),Nr(this);break e}}if(this.P){g=!0;let tn;for(;!this.J&&this.C<Y.length;)if(tn=oc(this,Y),tn==fs){it==4&&(this.s=4,tt(14),g=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Oo){this.s=4,tt(15),vn(this.i,this.l,Y,"[Invalid Chunk]"),g=!1;break}else vn(this.i,this.l,tn,null),Mo(this,tn);if(Wa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||Y.length!=0||this.h.h||(this.s=1,tt(16),g=!1),this.o=this.o&&g,!g)vn(this.i,this.l,Y,"[Invalid Chunked Response]"),ln(this),Nr(this);else if(0<Y.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),$o(gt),gt.M=!0,tt(11))}}else vn(this.i,this.l,Y,null),Mo(this,Y);it==4&&ln(this),this.o&&!this.J&&(it==4?As(this.j,this):(this.o=!1,$e(this)))}else Es(this.g),g==400&&0<Y.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),ln(this),Nr(this)}}}catch{}finally{}};function Wa(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function oc(l,f){var g=l.C,E=f.indexOf(`
`,g);return E==-1?fs:(g=Number(f.substring(g,E)),isNaN(g)?Oo:(E+=1,E+g>f.length?fs:(f=f.slice(E,E+g),l.C=E+g,f)))}wn.prototype.cancel=function(){this.J=!0,ln(this)};function $e(l){l.S=Date.now()+l.I,Ga(l,l.I)}function Ga(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_n(L(l.ba,l),f)}function Si(l){l.B&&(m.clearTimeout(l.B),l.B=null)}wn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Vo(this.i,this.A),this.L!=2&&(ir(),tt(17)),ln(this),this.s=2,Nr(this)):Ga(this,this.S-l)};function Nr(l){l.j.G==0||l.J||As(l.j,l)}function ln(l){Si(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Ro(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Mo(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Ft(g.h,l))){if(!l.K&&Ft(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Ss(g),Rn(g);else break e;Is(g),tt(18)}}else g.za=O[1],0<g.za-g.T&&37500>O[2]&&g.F&&g.v==0&&!g.C&&(g.C=_n(L(g.Za,g),6e3));if(1>=Qa(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else ur(g,11)}else if((l.K||g.g==l)&&Ss(g),!ne(f))for(O=g.Da.g.parse(f),f=0;f<O.length;f++){let De=O[f];if(g.T=De[0],De=De[1],g.G==2)if(De[0]=="c"){g.K=De[1],g.ia=De[2];const gt=De[3];gt!=null&&(g.la=gt,g.j.info("VER="+g.la));const it=De[4];it!=null&&(g.Aa=it,g.j.info("SVER="+g.Aa));const cn=De[5];cn!=null&&typeof cn=="number"&&0<cn&&(E=1.5*cn,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const tn=l.g;if(tn){const Di=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Di){var z=E.h;z.g||Di.indexOf("spdy")==-1&&Di.indexOf("quic")==-1&&Di.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(bo(z,z.h),z.h=null))}if(E.D){const Cs=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Cs&&(E.ya=Cs,je(E.I,E.D,Cs))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var Y=l;if(E.qa=ll(E,E.J?E.ia:null,E.W),Y.K){Xa(E.h,Y);var Ue=Y,ct=E.L;ct&&(Ue.I=ct),Ue.B&&(Si(Ue),$e(Ue)),E.g=Y}else Ni(E);0<g.i.length&&jn(g)}else De[0]!="stop"&&De[0]!="close"||ur(g,7);else g.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?ur(g,7):Tt(g):De[0]!="noop"&&g.l&&g.l.ta(De),g.v=0)}}ir(4)}catch{}}var Ka=class{constructor(l,f){this.g=l,this.map=f}};function Ai(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Qa(l){return l.h?1:l.g?l.g.size:0}function Ft(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function bo(l,f){l.g?l.g.add(f):l.h=f}function Xa(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ai.prototype.cancel=function(){if(this.i=Ya(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ya(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return j(l.i)}function ms(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,E=0;E<g;E++)f.push(l[E]);return f}f=[],g=0;for(E in l)f[g++]=l[E];return f}function gs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const E in l)f[g++]=E;return f}}}function Dr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=gs(l),E=ms(l),O=E.length,z=0;z<O;z++)f.call(void 0,E[z],g&&g[z],l)}var Ri=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),O=null;if(0<=E){var z=l[g].substring(0,E);O=l[g].substring(E+1)}else z=l[g];f(z,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function sr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof sr){this.h=l.h,Ci(this,l.j),this.o=l.o,this.g=l.g,xr(this,l.s),this.l=l.l;var f=l.i,g=new Fn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Vr(this,g),this.m=l.m}else l&&(f=String(l).match(Ri))?(this.h=!1,Ci(this,f[1]||"",!0),this.o=ke(f[2]||""),this.g=ke(f[3]||"",!0),xr(this,f[4]),this.l=ke(f[5]||"",!0),Vr(this,f[6]||"",!0),this.m=ke(f[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}sr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Lr(f,ys,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Lr(f,ys,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Lr(g,g.charAt(0)=="/"?el:Za,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Lr(g,Fo)),l.join("")};function Zt(l){return new sr(l)}function Ci(l,f,g){l.j=g?ke(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function xr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Vr(l,f,g){f instanceof Fn?(l.i=f,Un(l.i,l.h)):(g||(f=Lr(f,tl)),l.i=new Fn(f,l.h))}function je(l,f,g){l.i.set(f,g)}function Or(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ke(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Lr(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,Ja),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ja(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ys=/[#\/\?@]/g,Za=/[#\?:]/g,el=/[#\?]/g,tl=/[#\?@]/g,Fo=/#/g;function Fn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function wt(l){l.g||(l.g=new Map,l.h=0,l.i&&ac(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=Fn.prototype,i.add=function(l,f){wt(this),this.i=null,l=un(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function Tn(l,f){wt(l),f=un(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function In(l,f){return wt(l),f=un(l,f),l.g.has(f)}i.forEach=function(l,f){wt(this),this.g.forEach(function(g,E){g.forEach(function(O){l.call(f,O,E,this)},this)},this)},i.na=function(){wt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const O=l[E];for(let z=0;z<O.length;z++)g.push(f[E])}return g},i.V=function(l){wt(this);let f=[];if(typeof l=="string")In(this,l)&&(f=f.concat(this.g.get(un(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return wt(this),this.i=null,l=un(this,l),In(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Mr(l,f,g){Tn(l,f),0<g.length&&(l.i=null,l.g.set(un(l,f),j(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const z=encodeURIComponent(String(E)),Y=this.V(E);for(E=0;E<Y.length;E++){var O=z;Y[E]!==""&&(O+="="+encodeURIComponent(String(Y[E]))),l.push(O)}}return this.i=l.join("&")};function un(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Un(l,f){f&&!l.j&&(wt(l),l.i=null,l.g.forEach(function(g,E){var O=E.toLowerCase();E!=O&&(Tn(this,E),Mr(this,O,g))},l)),l.j=f}function lc(l,f){const g=new wi;if(m.Image){const E=new Image;E.onload=F(Bt,g,"TestLoadImage: loaded",!0,f,E),E.onerror=F(Bt,g,"TestLoadImage: error",!1,f,E),E.onabort=F(Bt,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=F(Bt,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function nl(l,f){const g=new wi,E=new AbortController,O=setTimeout(()=>{E.abort(),Bt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(z=>{clearTimeout(O),z.ok?Bt(g,"TestPingServer: ok",!0,f):Bt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),Bt(g,"TestPingServer: error",!1,f)})}function Bt(l,f,g,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(g)}catch{}}function uc(){this.g=new Po}function rl(l,f,g){const E=g||"";try{Dr(l,function(O,z){let Y=O;v(O)&&(Y=Co(O)),f.push(E+z+"="+encodeURIComponent(Y))})}catch(O){throw f.push(E+"type="+encodeURIComponent("_badmap")),O}}function or(l){this.l=l.Ub||null,this.j=l.eb||!1}K(or,vi),or.prototype.g=function(){return new ki(this.l,this.j)},or.prototype.i=function(l){return function(){return l}}({});function ki(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}K(ki,lt),i=ki.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,An(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;il(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function il(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Sn(this):An(this),this.readyState==3&&il(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Sn(this))},i.Qa=function(l){this.g&&(this.response=l,Sn(this))},i.ga=function(){this.g&&Sn(this)};function Sn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,An(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function An(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ar(l){let f="";return we(l,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function br(l,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=ar(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):je(l,f,g))}function Ke(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}K(Ke,lt);var cc=/^https?$/i,Uo=["POST","PUT"];i=Ke.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():En.g(),this.v=this.o?as(this.o):as(En),this.g.onreadystatechange=L(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(z){Pi(this,z);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)g.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const z of E.keys())g.set(z,E.get(z));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(z=>z.toLowerCase()=="content-type"),O=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Uo,f,void 0))||E||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Y]of g)this.g.setRequestHeader(z,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vs(this),this.u=!0,this.g.send(l),this.u=!1}catch(z){Pi(this,z)}};function Pi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,_s(l),en(l)}function _s(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),en(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),en(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?zo(this):this.bb())},i.bb=function(){zo(this)};function zo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||$t(l)!=4||l.Z()!=2)){if(l.u&&$t(l)==4)So(l.Ea,0,l);else if(ut(l,"readystatechange"),$t(l)==4){l.h=!1;try{const Y=l.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=Y===0){var O=String(l.D).match(Ri)[1]||null;!O&&m.self&&m.self.location&&(O=m.self.location.protocol.slice(0,-1)),E=!cc.test(O?O.toLowerCase():"")}g=E}if(g)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var z=2<$t(l)?l.g.statusText:""}catch{z=""}l.l=z+" ["+l.Z()+"]",_s(l)}}finally{en(l)}}}}function en(l,f){if(l.g){vs(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{g.onreadystatechange=E}catch{}}}function vs(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function $t(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),ko(f)}};function jo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Es(l){const f={};l=(l.g&&2<=$t(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ne(l[E]))continue;var g=D(l[E]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const z=f[O]||[];f[O]=z,z.push(g)}N(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Bo(l){this.Aa=0,this.i=[],this.j=new wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zn("baseRetryDelayMs",5e3,l),this.cb=zn("retryDelaySeedMs",1e4,l),this.Wa=zn("forwardChannelMaxRetries",2,l),this.wa=zn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ai(l&&l.concurrentRequestLimit),this.Da=new uc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Bo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,E){tt(0),this.W=l,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=ll(this,null,this.W),jn(this)};function Tt(l){if(ws(l),l.G==3){var f=l.U++,g=Zt(l.I);if(je(g,"SID",l.K),je(g,"RID",f),je(g,"TYPE","terminate"),lr(l,g),f=new wn(l,l.j,f),f.L=2,f.v=Or(Zt(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=ul(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}al(l)}function Rn(l){l.g&&($o(l),l.g.cancel(),l.g=null)}function ws(l){Rn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ss(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function jn(l){if(!Jt(l.h)&&!l.s){l.s=!0;var f=l.Ga;ze||ee(),J||(ze(),J=!0),he.add(f,l),l.B=0}}function hc(l,f){return Qa(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_n(L(l.Ga,l,f),ol(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const O=new wn(this,this.j,l);let z=this.o;if(this.S&&(z?(z=T(z),k(z,this.S)):z=this.S),this.m!==null||this.O||(O.H=z,z=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Fr(this,O,f),g=Zt(this.I),je(g,"RID",l),je(g,"CVER",22),this.D&&je(g,"X-HTTP-Session-Id",this.D),lr(this,g),z&&(this.O?f="headers="+encodeURIComponent(String(ar(z)))+"&"+f:this.m&&br(g,this.m,z)),bo(this.h,O),this.Ua&&je(g,"TYPE","init"),this.P?(je(g,"$req",f),je(g,"SID","null"),O.T=!0,ps(O,g,null)):ps(O,g,f),this.G=2}}else this.G==3&&(l?Ts(this,l):this.i.length==0||Jt(this.h)||Ts(this))};function Ts(l,f){var g;f?g=f.l:g=l.U++;const E=Zt(l.I);je(E,"SID",l.K),je(E,"RID",g),je(E,"AID",l.T),lr(l,E),l.m&&l.o&&br(E,l.m,l.o),g=new wn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Fr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),bo(l.h,g),ps(g,E,f)}function lr(l,f){l.H&&we(l.H,function(g,E){je(f,E,g)}),l.l&&Dr({},function(g,E){je(f,E,g)})}function Fr(l,f,g){g=Math.min(l.i.length,g);var E=l.l?L(l.l.Na,l.l,l):null;e:{var O=l.i;let z=-1;for(;;){const Y=["count="+g];z==-1?0<g?(z=O[0].g,Y.push("ofs="+z)):z=0:Y.push("ofs="+z);let Ue=!0;for(let ct=0;ct<g;ct++){let De=O[ct].g;const gt=O[ct].map;if(De-=z,0>De)z=Math.max(0,O[ct].g-100),Ue=!1;else try{rl(gt,Y,"req"+De+"_")}catch{E&&E(gt)}}if(Ue){E=Y.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,E}function Ni(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;ze||ee(),J||(ze(),J=!0),he.add(f,l),l.v=0}}function Is(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_n(L(l.Fa,l),ol(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,sl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_n(L(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Rn(this),sl(this))};function $o(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function sl(l){l.g=new wn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Zt(l.qa);je(f,"RID","rpc"),je(f,"SID",l.K),je(f,"AID",l.T),je(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(f,"TO",l.ja),je(f,"TYPE","xmlhttp"),lr(l,f),l.m&&l.o&&br(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Or(Zt(f)),g.m=null,g.P=!0,Lo(g,l)}i.Za=function(){this.C!=null&&(this.C=null,Rn(this),Is(this),tt(19))};function Ss(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function As(l,f){var g=null;if(l.g==f){Ss(l),$o(l),l.g=null;var E=2}else if(Ft(l.h,f))g=f.D,Xa(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var O=l.B;E=Ei(),ut(E,new cs(E,g)),jn(l)}else Ni(l);else if(O=f.s,O==3||O==0&&0<f.X||!(E==1&&hc(l,f)||E==2&&Is(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),O){case 1:ur(l,5);break;case 4:ur(l,10);break;case 3:ur(l,6);break;default:ur(l,2)}}}function ol(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function ur(l,f){if(l.j.info("Error code "+f),f==2){var g=L(l.fb,l),E=l.Xa;const O=!E;E=new sr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ci(E,"https"),Or(E),O?lc(E.toString(),g):nl(E.toString(),g)}else tt(2);l.G=0,l.l&&l.l.sa(f),al(l),ws(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function al(l){if(l.G=0,l.ka=[],l.l){const f=Ya(l.h);(f.length!=0||l.i.length!=0)&&(B(l.ka,f),B(l.ka,l.i),l.h.i.length=0,j(l.i),l.i.length=0),l.l.ra()}}function ll(l,f,g){var E=g instanceof sr?Zt(g):new sr(g);if(E.g!="")f&&(E.g=f+"."+E.g),xr(E,E.s);else{var O=m.location;E=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;var z=new sr(null);E&&Ci(z,E),f&&(z.g=f),O&&xr(z,O),g&&(z.l=g),E=z}return g=l.D,f=l.ya,g&&f&&je(E,g,f),je(E,"VER",l.la),lr(l,E),E}function ul(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ke(new or({eb:g})):new Ke(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function qo(){}i=qo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Rs(){}Rs.prototype.g=function(l,f){return new Ut(l,f)};function Ut(l,f){lt.call(this),this.g=new Bo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ne(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ne(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Bn(this)}K(Ut,lt),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Tt(this.g)},Ut.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Co(l),l=g);f.i.push(new Ka(f.Ya++,l)),f.G==3&&jn(f)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Tt(this.g),delete this.g,Ut.aa.N.call(this)};function cl(l){Mn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}K(cl,Mn);function hl(){us.call(this),this.status=1}K(hl,us);function Bn(l){this.g=l}K(Bn,qo),Bn.prototype.ua=function(){ut(this.g,"a")},Bn.prototype.ta=function(l){ut(this.g,new cl(l))},Bn.prototype.sa=function(l){ut(this.g,new hl)},Bn.prototype.ra=function(){ut(this.g,"b")},Rs.prototype.createWebChannel=Rs.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,qy=function(){return new Rs},$y=function(){return Ei()},By=bn,rd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ds.NO_ERROR=0,ds.TIMEOUT=8,ds.HTTP_ERROR=6,gu=ds,qa.COMPLETE="complete",jy=qa,ls.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",lt.prototype.listen=lt.prototype.K,ma=ls,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,zy=Ke}).apply(typeof ou<"u"?ou:typeof self<"u"?self:typeof window<"u"?window:{});const ig="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new Ed("@firebase/firestore");function Ks(){return Yi.logLevel}function te(i,...e){if(Yi.logLevel<=Re.DEBUG){const t=e.map(Od);Yi.debug(`Firestore (${mo}): ${i}`,...t)}}function Ar(i,...e){if(Yi.logLevel<=Re.ERROR){const t=e.map(Od);Yi.error(`Firestore (${mo}): ${i}`,...t)}}function io(i,...e){if(Yi.logLevel<=Re.WARN){const t=e.map(Od);Yi.warn(`Firestore (${mo}): ${i}`,...t)}}function Od(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(i="Unexpected state"){const e=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: `+i;throw Ar(e),new Error(e)}function be(i,e){i||ye()}function Ee(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Cr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Lt.UNAUTHENTICATED))}shutdown(){}}class oI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class aI{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new ai;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ai,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await o(this.currentUser)})},m=y=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ai)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new Hy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Lt(e)}}class lI{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class uI{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new lI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){be(this.o===void 0);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(be(typeof t.token=="string"),this.R=t.token,new cI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=dI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function Pe(i,e){return i<e?-1:i>e?1:0}function so(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new ft(0,0))}static max(){return new ve(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t,s){t===void 0?t=0:t>e.length&&ye(),s===void 0?s=e.length-t:s>e.length-t&&ye(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ra.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ra?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ge extends Ra{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const fI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Ra{construct(e,t,s){return new Rt(e,t,s)}static isValidIdentifier(e){return fI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ie(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ie(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ie(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Ge.fromString(e))}static fromName(e){return new ce(Ge.fromString(e).popFirst(5))}static empty(){return new ce(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Ge(e.slice()))}}function pI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new ci(o,ce.empty(),e)}function mI(i){return new ci(i.readTime,i.key,-1)}class ci{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ci(ve.min(),ce.empty(),-1)}static max(){return new ci(ve.max(),ce.empty(),-1)}}function gI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(i.documentKey,e.documentKey),t!==0?t:Pe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _I{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(i){if(i.code!==H.FAILED_PRECONDITION||i.message!==yI)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,s)=>{t(e)})}static reject(e){return new $((t,s)=>{s(e)})}static waitFor(e){return new $((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},y=>s(y))}),h=!0,u===o&&t()})}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next(o=>o?$.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new $((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new $((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function vI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qu.oe=-1;function Hu(i){return i==null}function Du(i){return i===0&&1/i==-1/0}function EI(i){return typeof i=="number"&&Number.isInteger(i)&&!Du(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=sg(e)),e=TI(i.get(t),e);return sg(e)}function TI(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function sg(i){return i+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ji(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Gy(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new au(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new au(this.root,e,this.comparator,!1)}getReverseIterator(){return new au(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new au(this.root,e,this.comparator,!0)}}class au{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??At.RED,this.left=o??At.EMPTY,this.right=u??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new At(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return At.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();const e=this.left.check();if(e!==this.right.check())throw ye();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw ye()}get value(){throw ye()}get color(){throw ye()}get left(){throw ye()}get right(){throw ye()}copy(e,t,s,o,u){return this}insert(e,t,s){return new At(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ag(this.data.getIterator())}getIteratorFrom(e){return new ag(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pt(this.comparator);return t.data=e,t}}class ag{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new Vn([])}unionWith(e){let t=new pt(Rt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return so(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Ky("Invalid base64 string: "+u):u}}(e);return new Ct(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const II=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hi(i){if(be(!!i),typeof i=="string"){let e=0;const t=II.exec(i);if(be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function di(i){return typeof i=="string"?Ct.fromBase64String(i):Ct.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Wu(i){const e=i.mapValue.fields.__previous_value__;return Ld(e)?Wu(e):e}function Ca(i){const e=hi(i.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,t,s,o,u,h,m,y,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v}}class ka{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ka("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ka&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ld(i)?4:RI(i)?9007199254740991:AI(i)?10:11:ye()}function Zn(i,e){if(i===e)return!0;const t=fi(i);if(t!==fi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ca(i).isEqual(Ca(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=hi(o.timestampValue),m=hi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return di(o.bytesValue).isEqual(di(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?Du(h)===Du(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return so(i.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(og(h)!==og(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!Zn(h[y],m[y])))return!1;return!0}(i,e);default:return ye()}}function Pa(i,e){return(i.values||[]).find(t=>Zn(t,e))!==void 0}function oo(i,e){if(i===e)return 0;const t=fi(i),s=fi(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),y=rt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return lg(i.timestampValue,e.timestampValue);case 4:return lg(Ca(i),Ca(e));case 5:return Pe(i.stringValue,e.stringValue);case 6:return function(u,h){const m=di(u),y=di(h);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=Pe(m[v],y[v]);if(w!==0)return w}return Pe(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Pe(rt(u.latitude),rt(h.latitude));return m!==0?m:Pe(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return ug(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,y,v,w;const R=u.fields||{},L=h.fields||{},F=(m=R.value)===null||m===void 0?void 0:m.arrayValue,K=(y=L.value)===null||y===void 0?void 0:y.arrayValue,j=Pe(((v=F==null?void 0:F.values)===null||v===void 0?void 0:v.length)||0,((w=K==null?void 0:K.values)===null||w===void 0?void 0:w.length)||0);return j!==0?j:ug(F,K)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===lu.mapValue&&h===lu.mapValue)return 0;if(u===lu.mapValue)return 1;if(h===lu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let R=0;R<y.length&&R<w.length;++R){const L=Pe(y[R],w[R]);if(L!==0)return L;const F=oo(m[y[R]],v[w[R]]);if(F!==0)return F}return Pe(y.length,w.length)}(i.mapValue,e.mapValue);default:throw ye()}}function lg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Pe(i,e);const t=hi(i),s=hi(e),o=Pe(t.seconds,s.seconds);return o!==0?o:Pe(t.nanos,s.nanos)}function ug(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=oo(t[o],s[o]);if(u)return u}return Pe(t.length,s.length)}function ao(i){return id(i)}function id(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=hi(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return di(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ce.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=id(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${id(t.fields[h])}`;return o+"}"}(i.mapValue):ye()}function yu(i){switch(fi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wu(i);return e?16+yu(e):16;case 5:return 2*i.stringValue.length;case 6:return di(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+yu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return Ji(s.fields,(u,h)=>{o+=u.length+yu(h)}),o}(i.mapValue);default:throw ye()}}function cg(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function sd(i){return!!i&&"integerValue"in i}function Md(i){return!!i&&"arrayValue"in i}function hg(i){return!!i&&"nullValue"in i}function dg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function _u(i){return!!i&&"mapValue"in i}function AI(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ea(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Ji(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ea(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ea(i.arrayValue.values[t]);return e}return Object.assign({},i)}function RI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!_u(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ea(t)}setAll(e){let t=Rt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ea(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());_u(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];_u(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ji(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new yn(Ea(this.value))}}function Qy(i){const e=[];return Ji(i.fields,(t,s)=>{const o=new Rt([t]);if(_u(s)){const u=Qy(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Mt(e,0,ve.min(),ve.min(),ve.min(),yn.empty(),0)}static newFoundDocument(e,t,s,o){return new Mt(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new Mt(e,2,t,ve.min(),ve.min(),yn.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,ve.min(),ve.min(),yn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t){this.position=e,this.inclusive=t}}function fg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ce.comparator(ce.fromName(h.referenceValue),t.key):s=oo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function pg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Zn(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t="asc"){this.field=e,this.dir=t}}function CI(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{}class at extends Xy{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new PI(e,t,s):t==="array-contains"?new xI(e,s):t==="in"?new VI(e,s):t==="not-in"?new OI(e,s):t==="array-contains-any"?new LI(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new NI(e,s):new DI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(oo(t,this.value)):t!==null&&fi(this.value)===fi(t)&&this.matchesComparison(oo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends Xy{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ln(e,t)}matches(e){return Yy(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Yy(i){return i.op==="and"}function Jy(i){return kI(i)&&Yy(i)}function kI(i){for(const e of i.filters)if(e instanceof Ln)return!1;return!0}function od(i){if(i instanceof at)return i.field.canonicalString()+i.op.toString()+ao(i.value);if(Jy(i))return i.filters.map(e=>od(e)).join(",");{const e=i.filters.map(t=>od(t)).join(",");return`${i.op}(${e})`}}function Zy(i,e){return i instanceof at?function(s,o){return o instanceof at&&s.op===o.op&&s.field.isEqual(o.field)&&Zn(s.value,o.value)}(i,e):i instanceof Ln?function(s,o){return o instanceof Ln&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&Zy(h,o.filters[m]),!0):!1}(i,e):void ye()}function e_(i){return i instanceof at?function(t){return`${t.field.canonicalString()} ${t.op} ${ao(t.value)}`}(i):i instanceof Ln?function(t){return t.op.toString()+" {"+t.getFilters().map(e_).join(" ,")+"}"}(i):"Filter"}class PI extends at{constructor(e,t,s){super(e,t,s),this.key=ce.fromName(s.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class NI extends at{constructor(e,t){super(e,"in",t),this.keys=t_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class DI extends at{constructor(e,t){super(e,"not-in",t),this.keys=t_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function t_(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ce.fromName(s.referenceValue))}class xI extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Md(t)&&Pa(t.arrayValue,this.value)}}class VI extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Pa(this.value.arrayValue,t)}}class OI extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Pa(this.value.arrayValue,t)}}class LI extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Md(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Pa(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function mg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new MI(i,e,t,s,o,u,h)}function bd(i){const e=Ee(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>od(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Hu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>ao(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>ao(s)).join(",")),e.ue=t}return e.ue}function Fd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!CI(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Zy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!pg(i.startAt,e.startAt)&&pg(i.endAt,e.endAt)}function ad(i){return ce.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bI(i,e,t,s,o,u,h,m){return new _o(i,e,t,s,o,u,h,m)}function Ud(i){return new _o(i)}function gg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function n_(i){return i.collectionGroup!==null}function wa(i){const e=Ee(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new pt(Rt.comparator);return h.filters.forEach(y=>{y.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Na(u,s))}),t.has(Rt.keyField().canonicalString())||e.ce.push(new Na(Rt.keyField(),s))}return e.ce}function Qn(i){const e=Ee(i);return e.le||(e.le=FI(e,wa(i))),e.le}function FI(i,e){if(i.limitType==="F")return mg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Na(o.field,u)});const t=i.endAt?new xu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new xu(i.startAt.position,i.startAt.inclusive):null;return mg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function ld(i,e){const t=i.filters.concat([e]);return new _o(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function ud(i,e,t){return new _o(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Gu(i,e){return Fd(Qn(i),Qn(e))&&i.limitType===e.limitType}function r_(i){return`${bd(Qn(i))}|lt:${i.limitType}`}function Qs(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>e_(o)).join(", ")}]`),Hu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>ao(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>ao(o)).join(",")),`Target(${s})`}(Qn(i))}; limitType=${i.limitType})`}function Ku(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ce.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of wa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,y){const v=fg(h,m,y);return h.inclusive?v<=0:v<0}(s.startAt,wa(s),o)||s.endAt&&!function(h,m,y){const v=fg(h,m,y);return h.inclusive?v>=0:v>0}(s.endAt,wa(s),o))}(i,e)}function UI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function i_(i){return(e,t)=>{let s=!1;for(const o of wa(i)){const u=zI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function zI(i,e,t){const s=i.field.isKeyField()?ce.comparator(e.key,t.key):function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?oo(y,v):ye()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ye()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ji(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return Gy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=new Je(ce.comparator);function Rr(){return jI}const s_=new Je(ce.comparator);function ga(...i){let e=s_;for(const t of i)e=e.insert(t.key,t);return e}function o_(i){let e=s_;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Wi(){return Ta()}function a_(){return Ta()}function Ta(){return new Zi(i=>i.toString(),(i,e)=>i.isEqual(e))}const BI=new Je(ce.comparator),$I=new pt(ce.comparator);function Ce(...i){let e=$I;for(const t of i)e=e.add(t);return e}const qI=new pt(Pe);function HI(){return qI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Du(e)?"-0":e}}function l_(i){return{integerValue:""+i}}function WI(i,e){return EI(e)?l_(e):zd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this._=void 0}}function GI(i,e,t){return i instanceof Da?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Ld(u)&&(u=Wu(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof xa?c_(i,e):i instanceof Va?h_(i,e):function(o,u){const h=u_(o,u),m=yg(h)+yg(o.Pe);return sd(h)&&sd(o.Pe)?l_(m):zd(o.serializer,m)}(i,e)}function KI(i,e,t){return i instanceof xa?c_(i,e):i instanceof Va?h_(i,e):t}function u_(i,e){return i instanceof Vu?function(s){return sd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Da extends Qu{}class xa extends Qu{constructor(e){super(),this.elements=e}}function c_(i,e){const t=d_(e);for(const s of i.elements)t.some(o=>Zn(o,s))||t.push(s);return{arrayValue:{values:t}}}class Va extends Qu{constructor(e){super(),this.elements=e}}function h_(i,e){let t=d_(e);for(const s of i.elements)t=t.filter(o=>!Zn(o,s));return{arrayValue:{values:t}}}class Vu extends Qu{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function yg(i){return rt(i.integerValue||i.doubleValue)}function d_(i){return Md(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,t){this.field=e,this.transform=t}}function XI(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof xa&&o instanceof xa||s instanceof Va&&o instanceof Va?so(s.elements,o.elements,Zn):s instanceof Vu&&o instanceof Vu?Zn(s.Pe,o.Pe):s instanceof Da&&o instanceof Da}(i.transform,e.transform)}class YI{constructor(e,t){this.version=e,this.transformResults=t}}class Xn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xn}static exists(e){return new Xn(void 0,e)}static updateTime(e){return new Xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Xu{}function f_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new jd(i.key,Xn.none()):new Ua(i.key,i.data,Xn.none());{const t=i.data,s=yn.empty();let o=new pt(Rt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new es(i.key,s,new Vn(o.toArray()),Xn.none())}}function JI(i,e,t){i instanceof Ua?function(o,u,h){const m=o.value.clone(),y=vg(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof es?function(o,u,h){if(!vu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=vg(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(p_(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ia(i,e,t,s){return i instanceof Ua?function(u,h,m,y){if(!vu(u.precondition,h))return m;const v=u.value.clone(),w=Eg(u.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof es?function(u,h,m,y){if(!vu(u.precondition,h))return m;const v=Eg(u.fieldTransforms,y,h),w=h.data;return w.setAll(p_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(R=>R.field))}(i,e,t,s):function(u,h,m){return vu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function ZI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=u_(s.transform,o||null);u!=null&&(t===null&&(t=yn.empty()),t.set(s.field,u))}return t||null}function _g(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&so(s,o,(u,h)=>XI(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Ua extends Xu{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class es extends Xu{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function p_(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function vg(i,e,t){const s=new Map;be(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,KI(h,m,t[o]))}return s}function Eg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,GI(u,h,e))}return s}class jd extends Xu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class e1 extends Xu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&JI(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ia(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ia(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=a_();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=f_(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(ve.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ce())}isEqual(e){return this.batchId===e.batchId&&so(this.mutations,e.mutations,(t,s)=>_g(t,s))&&so(this.baseMutations,e.baseMutations,(t,s)=>_g(t,s))}}class Bd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length);let o=function(){return BI}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Bd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,xe;function i1(i){switch(i){default:return ye();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function m_(i){if(i===void 0)return Ar("GRPC error has no .code"),H.UNKNOWN;switch(i){case ot.OK:return H.OK;case ot.CANCELLED:return H.CANCELLED;case ot.UNKNOWN:return H.UNKNOWN;case ot.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ot.INTERNAL:return H.INTERNAL;case ot.UNAVAILABLE:return H.UNAVAILABLE;case ot.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ot.NOT_FOUND:return H.NOT_FOUND;case ot.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ot.ABORTED:return H.ABORTED;case ot.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ot.DATA_LOSS:return H.DATA_LOSS;default:return ye()}}(xe=ot||(ot={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=new Ki([4294967295,4294967295],0);function wg(i){const e=s1().encode(i),t=new Uy;return t.update(e),new Uint8Array(t.digest())}function Tg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Ki([t,s],0),new Ki([o,u],0)]}class $d{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new ya(`Invalid padding: ${t}`);if(s<0)throw new ya(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ya(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new ya(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Ki.fromNumber(this.Te)}Ee(e,t,s){let o=e.add(t.multiply(Ki.fromNumber(s)));return o.compare(o1)===1&&(o=new Ki([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=wg(e),[s,o]=Tg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new $d(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Te===0)return;const t=wg(e),[s,o]=Tg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,za.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Yu(ve.min(),o,new Je(Pe),Rr(),Ce())}}class za{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new za(s,t,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class g_{constructor(e,t){this.targetId=e,this.me=t}}class y_{constructor(e,t,s=Ct.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Ig{constructor(){this.fe=0,this.ge=Sg(),this.pe=Ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),t=Ce(),s=Ce();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ye()}}),new za(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=Sg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class a1{constructor(e){this.Le=e,this.Be=new Map,this.ke=Rr(),this.qe=uu(),this.Qe=uu(),this.Ke=new Je(Pe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:ye()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const u=o.target;if(ad(u))if(s===0){const h=new ce(u.path);this.We(t,h,Mt.newNoDocument(h,ve.min()))}else be(s===1);else{const h=this.Ze(t);if(h!==s){const m=this.Xe(e),y=m?this.et(m,e,h):1;if(y!==0){this.He(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=di(s).toUint8Array()}catch(y){if(y instanceof Ky)return io("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new $d(h,o,u)}catch(y){return io(y instanceof ya?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.Te===0?null:m}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Le.nt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.We(t,u,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((u,h)=>{const m=this.Ye(h);if(m){if(u.current&&ad(m.target)){const y=new ce(m.target.path);this.st(y).has(h)||this.ot(h,y)||this.We(h,y,Mt.newNoDocument(y,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Ce();this.Qe.forEach((u,h)=>{let m=!0;h.forEachWhile(y=>{const v=this.Ye(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new Yu(e,t,this.Ke,this.ke,s);return this.ke=Rr(),this.qe=uu(),this.Qe=uu(),this.Ke=new Je(Pe),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Ig,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new pt(Pe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pt(Pe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Ig),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function uu(){return new Je(ce.comparator)}function Sg(){return new Je(ce.comparator)}const l1={asc:"ASCENDING",desc:"DESCENDING"},u1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},c1={and:"AND",or:"OR"};class h1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function cd(i,e){return i.useProto3Json||Hu(e)?e:{value:e}}function Ou(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function __(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function d1(i,e){return Ou(i,e.toTimestamp())}function Yn(i){return be(!!i),ve.fromTimestamp(function(t){const s=hi(t);return new ft(s.seconds,s.nanos)}(i))}function qd(i,e){return hd(i,e).canonicalString()}function hd(i,e){const t=function(o){return new Ge(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function v_(i){const e=Ge.fromString(i);return be(S_(e)),e}function dd(i,e){return qd(i.databaseId,e.path)}function $h(i,e){const t=v_(e);if(t.get(1)!==i.databaseId.projectId)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ce(w_(t))}function E_(i,e){return qd(i.databaseId,e)}function f1(i){const e=v_(i);return e.length===4?Ge.emptyPath():w_(e)}function fd(i){return new Ge(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function w_(i){return be(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Ag(i,e,t){return{name:dd(i,e),fields:t.value.mapValue.fields}}function p1(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ye()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(be(w===void 0||typeof w=="string"),Ct.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Ct.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?H.UNKNOWN:m_(v.code);return new ie(w,v.message||"")}(h);t=new y_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=$h(i,s.document.name),u=Yn(s.document.updateTime),h=s.document.createTime?Yn(s.document.createTime):ve.min(),m=new yn({mapValue:{fields:s.document.fields}}),y=Mt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Eu(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=$h(i,s.document),u=s.readTime?Yn(s.readTime):ve.min(),h=Mt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Eu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=$h(i,s.document),u=s.removedTargetIds||[];t=new Eu([],u,o,null)}else{if(!("filter"in e))return ye();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new r1(o,u),m=s.targetId;t=new g_(m,h)}}return t}function m1(i,e){let t;if(e instanceof Ua)t={update:Ag(i,e.key,e.value)};else if(e instanceof jd)t={delete:dd(i,e.key)};else if(e instanceof es)t={update:Ag(i,e.key,e.data),updateMask:S1(e.fieldMask)};else{if(!(e instanceof e1))return ye();t={verify:dd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Da)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof xa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Va)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Vu)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw ye()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:d1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ye()}(i,e.precondition)),t}function g1(i,e){return i&&i.length>0?(be(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Yn(o.updateTime):Yn(u);return h.isEqual(ve.min())&&(h=Yn(u)),new YI(h,o.transformResults||[])}(t,e))):[]}function y1(i,e){return{documents:[E_(i,e.path)]}}function _1(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=E_(i,o);const u=function(v){if(v.length!==0)return I_(Ln.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(L){return{field:Xs(L.field),direction:w1(L.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=cd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ct:t,parent:o}}function v1(i){let e=f1(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(R){const L=T_(R);return L instanceof Ln&&Jy(L)?L.getFilters():[L]}(t.where));let h=[];t.orderBy&&(h=function(R){return R.map(L=>function(K){return new Na(Ys(K.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(K.direction))}(L))}(t.orderBy));let m=null;t.limit&&(m=function(R){let L;return L=typeof R=="object"?R.value:R,Hu(L)?null:L}(t.limit));let y=null;t.startAt&&(y=function(R){const L=!!R.before,F=R.values||[];return new xu(F,L)}(t.startAt));let v=null;return t.endAt&&(v=function(R){const L=!R.before,F=R.values||[];return new xu(F,L)}(t.endAt)),bI(e,o,h,u,m,"F",y,v)}function E1(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function T_(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ys(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ys(t.unaryFilter.field);return at.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ys(t.unaryFilter.field);return at.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ys(t.unaryFilter.field);return at.create(h,"!=",{nullValue:"NULL_VALUE"});default:return ye()}}(i):i.fieldFilter!==void 0?function(t){return at.create(Ys(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ye()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Ln.create(t.compositeFilter.filters.map(s=>T_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ye()}}(t.compositeFilter.op))}(i):ye()}function w1(i){return l1[i]}function T1(i){return u1[i]}function I1(i){return c1[i]}function Xs(i){return{fieldPath:i.canonicalString()}}function Ys(i){return Rt.fromServerFormat(i.fieldPath)}function I_(i){return i instanceof at?function(t){if(t.op==="=="){if(dg(t.value))return{unaryFilter:{field:Xs(t.field),op:"IS_NAN"}};if(hg(t.value))return{unaryFilter:{field:Xs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dg(t.value))return{unaryFilter:{field:Xs(t.field),op:"IS_NOT_NAN"}};if(hg(t.value))return{unaryFilter:{field:Xs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xs(t.field),op:T1(t.op),value:t.value}}}(i):i instanceof Ln?function(t){const s=t.getFilters().map(o=>I_(o));return s.length===1?s[0]:{compositeFilter:{op:I1(t.op),filters:s}}}(i):ye()}function S1(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function S_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,s,o,u=ve.min(),h=ve.min(),m=Ct.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.ht=e}}function R1(i){const e=v1({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?ud(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(){this.ln=new k1}addToCollectionParentIndex(e,t){return this.ln.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(ci.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class k1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new pt(Ge.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new pt(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new lo(0)}static Qn(){return new lo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg([i,e],[t,s]){const o=Pe(i,t);return o===0?Pe(e,s):o}class P1{constructor(e){this.Gn=e,this.buffer=new pt(Cg),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Cg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class N1{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yo(t)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await go(t)}await this.Yn(3e5)})}}class D1{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return $.resolve(qu.oe);const s=new P1(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Rg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rg):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,u,h,m,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(R=>(R>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,h=Date.now(),this.nthSequenceNumber(e,o))).next(R=>(s=R,m=Date.now(),this.removeTargets(e,s,t))).next(R=>(u=R,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(R=>(v=Date.now(),Ks()<=Re.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${R} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:R})))}}function x1(i,e){return new D1(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(){this.changes=new Zi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Ia(s.mutation,o,Vn.empty(),ft.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ce()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ce()){const o=Wi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=ga();return u.forEach((m,y)=>{h=h.insert(m,y.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Wi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ce()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Rr();const h=Ta(),m=function(){return Ta()}();return t.forEach((y,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof es)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Ia(w.mutation,v,w.mutation.getFieldMask(),ft.now())):h.set(v.key,Vn.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var R;return m.set(v,new O1(w,(R=h.get(v))!==null&&R!==void 0?R:null))}),m))}recalculateAndSaveOverlays(e,t){const s=Ta();let o=new Je((h,m)=>h-m),u=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||Vn.empty();w=m.applyToLocalView(v,w),s.set(y,w);const R=(o.get(m.batchId)||Ce()).add(y);o=o.insert(m.batchId,R)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,R=a_();w.forEach(L=>{if(!u.has(L)){const F=f_(t.get(L),s.get(L));F!==null&&R.set(L,F),u=u.add(L)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,R))}return $.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ce.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):n_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(Wi());let m=-1,y=u;return h.next(v=>$.forEach(v,(w,R)=>(m<R.largestBatchId&&(m=R.largestBatchId),u.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next(L=>{y=y.insert(w,L)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,y,v,Ce())).next(w=>({batchId:m,changes:o_(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next(s=>{let o=ga();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=ga();return this.indexManager.getCollectionParents(e,u).next(m=>$.forEach(m,y=>{const v=function(R,L){return new _o(L,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)}(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((R,L)=>{h=h.insert(R,L)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Mt.newInvalidDocument(w)))});let m=ga();return h.forEach((y,v)=>{const w=u.get(y);w!==void 0&&Ia(w.mutation,v,Vn.empty(),ft.now()),Ku(t,v)&&(m=m.insert(y,v))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return $.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Yn(o.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:R1(o.bundledQuery),readTime:Yn(o.readTime)}}(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(){this.overlays=new Je(ce.comparator),this.Er=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Wi();return $.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Tt(e,t,u)}),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Er.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Er.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=Wi(),u=t.length+1,h=new ce(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Je((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Wi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=Wi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=o)););return $.resolve(m)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new n1(t,s));let u=this.Er.get(t);u===void 0&&(u=Ce(),this.Er.set(t,u)),this.Er.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.dr=new pt(Et.Ar),this.Rr=new pt(Et.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new Et(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new Et(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new ce(new Ge([])),s=new Et(t,e),o=new Et(t,e+1),u=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ce(new Ge([])),s=new Et(t,e),o=new Et(t,e+1);let u=Ce();return this.Rr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Et(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ce.comparator(e.key,t.key)||Pe(e.br,t.br)}static Vr(e,t){return Pe(e.br,t.br)||ce.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new pt(Et.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new t1(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.vr=this.vr.add(new Et(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),o=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],h=>{const m=this.Cr(h.br);u.push(m)}),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new pt(Pe);return t.forEach(o=>{const u=new Et(o,0),h=new Et(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],m=>{s=s.add(m.br)})}),$.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ce.isDocumentKey(u)||(u=u.child(""));const h=new Et(new ce(u),0);let m=new pt(Pe);return this.vr.forEachWhile(y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.br)),!0)},h),$.resolve(this.Mr(m))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){be(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return $.forEach(t.mutations,o=>{const u=new Et(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new Et(t,0),o=this.vr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.Nr=e,this.docs=function(){return new Je(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=Rr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Mt.newInvalidDocument(o))}),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Rr();const h=t.path,m=new ce(h.child("")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||gI(mI(w),s)<=0||(o.has(w.key)||Ku(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ye()}Lr(e,t){return $.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new j1(this)}getSize(e){return $.resolve(this.size)}}class j1 extends V1{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),$.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.persistence=e,this.Br=new Zi(t=>bd(t),Fd),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.kr=0,this.qr=new Hd,this.targetCount=0,this.Qr=lo.qn()}forEachTarget(e,t){return this.Br.forEach((s,o)=>t(o)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),$.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new lo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Un(t),$.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Br.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Br.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),$.waitFor(u).next(()=>o)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t){this.Kr={},this.overlays={},this.$r=new qu(0),this.Ur=!1,this.Ur=!0,this.Wr=new F1,this.referenceDelegate=e(this),this.Gr=new B1(this),this.indexManager=new C1,this.remoteDocumentCache=function(o){return new z1(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new A1(t),this.jr=new M1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new b1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new U1(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new $1(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,t){return $.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class $1 extends _I{constructor(e){super(),this.currentSequenceNumber=e}}class Wd{constructor(e){this.persistence=e,this.Zr=new Hd,this.Xr=null}static ei(e){return new Wd(e)}get ti(){if(this.Xr)return this.Xr;throw ye()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),$.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,s=>{const o=ce.fromPath(s);return this.ni(e,o).next(u=>{u||t.removeEntry(o,ve.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return $.or([()=>$.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Lu{constructor(e,t){this.persistence=e,this.ri=new Zi(s=>wI(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=x1(this,t)}static ei(e,t){return new Lu(e,t)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return $.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?$.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(m=>{m||(s++,u.removeEntry(h,ve.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=yu(e.data.value)),t}ir(e,t,s){return $.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Ce(),o=Ce();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Gd(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return j0()?8:vI(bt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new q1;return this.ts(e,t,h).next(m=>{if(u.result=m,this.Hi)return this.ns(e,t,h,m.size)})}).next(()=>u.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(Ks()<=Re.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Qs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(Ks()<=Re.DEBUG&&te("QueryEngine","Query:",Qs(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(Ks()<=Re.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Qs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(t))):$.resolve())}Xi(e,t){if(gg(t))return $.resolve(null);let s=Qn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=ud(t,null,"F"),s=Qn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ce(...u);return this.Zi.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const v=this.rs(t,m);return this.ss(t,v,h,y.readTime)?this.Xi(e,ud(t,null,"F")):this.os(e,v,t,y)}))})))}es(e,t,s,o){return gg(t)||o.isEqual(ve.min())?$.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,o)?$.resolve(null):(Ks()<=Re.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Qs(t)),this.os(e,h,t,pI(o,-1)).next(m=>m))})}rs(e,t){let s=new pt(i_(e));return t.forEach((o,u)=>{Ku(e,u)&&(s=s.add(u))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,t,s){return Ks()<=Re.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Qs(t)),this.Zi.getDocumentsMatchingQuery(e,t,ci.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Je(Pe),this.cs=new Zi(u=>bd(u),Fd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new L1(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function G1(i,e,t,s){return new W1(i,e,t,s)}async function R_(i,e){const t=Ee(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let y=Ce();for(const v of o){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next(v=>({Ts:v,removedBatchIds:h,addedBatchIds:m}))})})}function K1(i,e){const t=Ee(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.hs.newChangeBuffer({trackRemovals:!0});return function(m,y,v,w){const R=v.batch,L=R.keys();let F=$.resolve();return L.forEach(K=>{F=F.next(()=>w.getEntry(y,K)).next(j=>{const B=v.docVersions.get(K);be(B!==null),j.version.compareTo(B)<0&&(R.applyToRemoteDocument(j,v),j.isValidDocument()&&(j.setReadTime(v.commitVersion),w.addEntry(j)))})}),F.next(()=>m.mutationQueue.removeMutationBatch(y,R))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let y=Ce();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function C_(i){const e=Ee(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function Q1(i,e){const t=Ee(i),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const m=[];e.targetChanges.forEach((w,R)=>{const L=o.get(R);if(!L)return;m.push(t.Gr.removeMatchingKeys(u,w.removedDocuments,R).next(()=>t.Gr.addMatchingKeys(u,w.addedDocuments,R)));let F=L.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(R)!==null?F=F.withResumeToken(Ct.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):w.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(w.resumeToken,s)),o=o.insert(R,F),function(j,B,me){return j.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=3e8?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0}(L,F,w)&&m.push(t.Gr.updateTargetData(u,F))});let y=Rr(),v=Ce();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(X1(u,h,e.documentUpdates).next(w=>{y=w.Is,v=w.Es})),!s.isEqual(ve.min())){const w=t.Gr.getLastRemoteSnapshotVersion(u).next(R=>t.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return $.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,y,v)).next(()=>y)}).then(u=>(t.us=o,u))}function X1(i,e,t){let s=Ce(),o=Ce();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Rr();return t.forEach((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(ve.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):te("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)}),{Is:h,Es:o}})}function Y1(i,e){const t=Ee(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function J1(i,e){const t=Ee(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(u=>u?(o=u,$.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new ri(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function pd(i,e,t){const s=Ee(i),o=s.us.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!yo(h))throw h;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function kg(i,e,t){const s=Ee(i);let o=ve.min(),u=Ce();return s.persistence.runTransaction("Execute query","readwrite",h=>function(y,v,w){const R=Ee(y),L=R.cs.get(w);return L!==void 0?$.resolve(R.us.get(L)):R.Gr.getTargetData(v,w)}(s,h,Qn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,m.targetId).next(y=>{u=y})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?u:Ce())).next(m=>(Z1(s,UI(e),m),{documents:m,ds:u})))}function Z1(i,e,t){let s=i.ls.get(e)||ve.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.ls.set(e,s)}class Pg{constructor(){this.activeTargetIds=HI()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eS{constructor(){this._o=new Pg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Pg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu=null;function qh(){return cu===null?cu=function(){return 268435456+Math.round(2147483648*Math.random())}():cu++,"0x"+cu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="WebChannelConnection";class iS extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(t,s,o,u,h){const m=qh(),y=this.No(t,s.toUriEncodedString());te("RestConnection",`Sending RPC '${t}' ${m}:`,y,o);const v={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(v,u,h),this.Bo(t,y,v,o).then(w=>(te("RestConnection",`Received RPC '${t}' ${m}: `,w),w),w=>{throw io("RestConnection",`RPC '${t}' ${m} failed with error: `,w,"url: ",y,"request:",o),w})}ko(t,s,o,u,h,m){return this.Oo(t,s,o,u,h)}Lo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}No(t,s){const o=nS[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,o){const u=qh();return new Promise((h,m)=>{const y=new zy;y.setWithCredentials(!0),y.listenOnce(jy.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case gu.NO_ERROR:const w=y.getResponseJson();te(Ot,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case gu.TIMEOUT:te(Ot,`RPC '${e}' ${u} timed out`),m(new ie(H.DEADLINE_EXCEEDED,"Request time out"));break;case gu.HTTP_ERROR:const R=y.getStatus();if(te(Ot,`RPC '${e}' ${u} failed with status:`,R,"response text:",y.getResponseText()),R>0){let L=y.getResponseJson();Array.isArray(L)&&(L=L[0]);const F=L==null?void 0:L.error;if(F&&F.status&&F.message){const K=function(B){const me=B.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(me)>=0?me:H.UNKNOWN}(F.status);m(new ie(K,F.message))}else m(new ie(H.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new ie(H.UNAVAILABLE,"Connection failed."));break;default:ye()}}finally{te(Ot,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);te(Ot,`RPC '${e}' ${u} sending request:`,o),y.send(t,"POST",v,s,15)})}qo(e,t,s){const o=qh(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=qy(),m=$y(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Lo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");te(Ot,`Creating RPC '${e}' stream ${o}: ${w}`,y);const R=h.createWebChannel(w,y);let L=!1,F=!1;const K=new rS({Eo:B=>{F?te(Ot,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(L||(te(Ot,`Opening RPC '${e}' stream ${o} transport.`),R.open(),L=!0),te(Ot,`RPC '${e}' stream ${o} sending:`,B),R.send(B))},Ao:()=>R.close()}),j=(B,me,ne)=>{B.listen(me,ue=>{try{ne(ue)}catch(pe){setTimeout(()=>{throw pe},0)}})};return j(R,ma.EventType.OPEN,()=>{F||(te(Ot,`RPC '${e}' stream ${o} transport opened.`),K.So())}),j(R,ma.EventType.CLOSE,()=>{F||(F=!0,te(Ot,`RPC '${e}' stream ${o} transport closed`),K.Do())}),j(R,ma.EventType.ERROR,B=>{F||(F=!0,io(Ot,`RPC '${e}' stream ${o} transport errored:`,B),K.Do(new ie(H.UNAVAILABLE,"The operation could not be completed")))}),j(R,ma.EventType.MESSAGE,B=>{var me;if(!F){const ne=B.data[0];be(!!ne);const ue=ne,pe=(ue==null?void 0:ue.error)||((me=ue[0])===null||me===void 0?void 0:me.error);if(pe){te(Ot,`RPC '${e}' stream ${o} received error:`,pe);const Fe=pe.status;let we=function(A){const k=ot[A];if(k!==void 0)return m_(k)}(Fe),N=pe.message;we===void 0&&(we=H.INTERNAL,N="Unknown error status: "+Fe+" with message "+pe.message),F=!0,K.Do(new ie(we,N)),R.close()}else te(Ot,`RPC '${e}' stream ${o} received:`,ne),K.vo(ne)}}),j(m,By.STAT_EVENT,B=>{B.stat===rd.PROXY?te(Ot,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===rd.NOPROXY&&te(Ot,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{K.bo()},0),K}}function Hh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(i){return new h1(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t,s,o,u,h,m,y){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new k_(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Ar(t.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new ie(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.E_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sS extends P_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=p1(this.serializer,e),s=function(u){if(!("targetChange"in u))return ve.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?Yn(h.readTime):ve.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=fd(this.serializer),t.addTarget=function(u,h){let m;const y=h.target;if(m=ad(y)?{documents:y1(u,y)}:{query:_1(u,y).ct},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=__(u,h.resumeToken);const v=cd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(ve.min())>0){m.readTime=Ou(u,h.snapshotVersion.toTimestamp());const v=cd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=E1(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=fd(this.serializer),t.removeTarget=e,this.c_(t)}}class oS extends P_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=g1(e.writeResults,e.commitTime),s=Yn(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=fd(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>m1(this.serializer,s))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,hd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie(H.UNKNOWN,u.toString())})}ko(e,t,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.ko(e,hd(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie(H.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class lS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ar(t),this.C_=!1):te("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{ts(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(y){const v=Ee(y);v.k_.add(4),await ja(v),v.K_.set("Unknown"),v.k_.delete(4),await Zu(v)}(this))})}),this.K_=new lS(s,o)}}async function Zu(i){if(ts(i))for(const e of i.q_)await e(!0)}async function ja(i){for(const e of i.q_)await e(!1)}function N_(i,e){const t=Ee(i);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Yd(t)?Xd(t):vo(t).s_()&&Qd(t,e))}function Kd(i,e){const t=Ee(i),s=vo(t);t.B_.delete(e),s.s_()&&D_(t,e),t.B_.size===0&&(s.s_()?s.a_():ts(t)&&t.K_.set("Unknown"))}function Qd(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}vo(i).V_(e)}function D_(i,e){i.U_.xe(e),vo(i).m_(e)}function Xd(i){i.U_=new a1({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.B_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),vo(i).start(),i.K_.F_()}function Yd(i){return ts(i)&&!vo(i).i_()&&i.B_.size>0}function ts(i){return Ee(i).k_.size===0}function x_(i){i.U_=void 0}async function cS(i){i.K_.set("Online")}async function hS(i){i.B_.forEach((e,t)=>{Qd(i,e)})}async function dS(i,e){x_(i),Yd(i)?(i.K_.O_(e),Xd(i)):i.K_.set("Unknown")}async function fS(i,e,t){if(i.K_.set("Online"),e instanceof y_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.B_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.B_.delete(m),o.U_.removeTarget(m))}(i,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mu(i,s)}else if(e instanceof Eu?i.U_.$e(e):e instanceof g_?i.U_.Je(e):i.U_.Ge(e),!t.isEqual(ve.min()))try{const s=await C_(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.U_.it(h);return m.targetChanges.forEach((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.B_.get(v);w&&u.B_.set(v,w.withResumeToken(y.resumeToken,h))}}),m.targetMismatches.forEach((y,v)=>{const w=u.B_.get(y);if(!w)return;u.B_.set(y,w.withResumeToken(Ct.EMPTY_BYTE_STRING,w.snapshotVersion)),D_(u,y);const R=new ri(w.target,y,v,w.sequenceNumber);Qd(u,R)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await Mu(i,s)}}async function Mu(i,e,t){if(!yo(e))throw e;i.k_.add(1),await ja(i),i.K_.set("Offline"),t||(t=()=>C_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await t(),i.k_.delete(1),await Zu(i)})}function V_(i,e){return e().catch(t=>Mu(i,t,e))}async function ec(i){const e=Ee(i),t=pi(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;pS(e);)try{const o=await Y1(e.localStore,s);if(o===null){e.L_.length===0&&t.a_();break}s=o.batchId,mS(e,o)}catch(o){await Mu(e,o)}O_(e)&&L_(e)}function pS(i){return ts(i)&&i.L_.length<10}function mS(i,e){i.L_.push(e);const t=pi(i);t.s_()&&t.f_&&t.g_(e.mutations)}function O_(i){return ts(i)&&!pi(i).i_()&&i.L_.length>0}function L_(i){pi(i).start()}async function gS(i){pi(i).w_()}async function yS(i){const e=pi(i);for(const t of i.L_)e.g_(t.mutations)}async function _S(i,e,t){const s=i.L_.shift(),o=Bd.from(s,e,t);await V_(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await ec(i)}async function vS(i,e){e&&pi(i).f_&&await async function(s,o){if(function(h){return i1(h)&&h!==H.ABORTED}(o.code)){const u=s.L_.shift();pi(s).__(),await V_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await ec(s)}}(i,e),O_(i)&&L_(i)}async function Dg(i,e){const t=Ee(i);t.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=ts(t);t.k_.add(3),await ja(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Zu(t)}async function ES(i,e){const t=Ee(i);e?(t.k_.delete(2),await Zu(t)):e||(t.k_.add(2),await ja(t),t.K_.set("Unknown"))}function vo(i){return i.W_||(i.W_=function(t,s,o){const u=Ee(t);return u.b_(),new sS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:cS.bind(null,i),mo:hS.bind(null,i),po:dS.bind(null,i),R_:fS.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),Yd(i)?Xd(i):i.K_.set("Unknown")):(await i.W_.stop(),x_(i))})),i.W_}function pi(i){return i.G_||(i.G_=function(t,s,o){const u=Ee(t);return u.b_(),new oS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:()=>Promise.resolve(),mo:gS.bind(null,i),po:vS.bind(null,i),p_:yS.bind(null,i),y_:_S.bind(null,i)}),i.q_.push(async e=>{e?(i.G_.__(),await ec(i)):(await i.G_.stop(),i.L_.length>0&&(te("RemoteStore",`Stopping write stream with ${i.L_.length} pending writes`),i.L_=[]))})),i.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Jd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zd(i,e){if(Ar("AsyncQueue",`${e}: ${i}`),yo(i))return new ie(H.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{static emptySet(e){return new to(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ce.comparator(t.key,s.key):(t,s)=>ce.comparator(t.key,s.key),this.keyedMap=ga(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof to)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new to;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.z_=new Je(ce.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ye():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class uo{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new uo(e,t,to.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class TS{constructor(){this.queries=Vg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=Ee(t),u=o.queries;o.queries=Vg(),u.forEach((h,m)=>{for(const y of m.J_)y.onError(s)})})(this,new ie(H.ABORTED,"Firestore shutting down"))}}function Vg(){return new Zi(i=>r_(i),Gu)}async function M_(i,e){const t=Ee(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Y_()&&e.Z_()&&(s=2):(u=new wS,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await t.onListen(o,!0);break;case 1:u.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Zd(h,`Initialization of query '${Qs(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.J_.push(e),e.ea(t.onlineState),u.H_&&e.ta(u.H_)&&ef(t)}async function b_(i,e){const t=Ee(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.J_.indexOf(e);h>=0&&(u.J_.splice(h,1),u.J_.length===0?o=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function IS(i,e){const t=Ee(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.J_)m.ta(o)&&(s=!0);h.H_=o}}s&&ef(t)}function SS(i,e,t){const s=Ee(i),o=s.queries.get(e);if(o)for(const u of o.J_)u.onError(t);s.queries.delete(e)}function ef(i){i.X_.forEach(e=>{e.next()})}var md,Og;(Og=md||(md={})).na="default",Og.Cache="cache";class F_{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new uo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==md.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.key=e}}class z_{constructor(e){this.key=e}}class AS{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ce(),this.mutatedKeys=Ce(),this.Va=i_(e),this.ma=new to(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new xg,o=t?t.ma:this.ma;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,R)=>{const L=o.get(w),F=Ku(this.query,R)?R:null,K=!!L&&this.mutatedKeys.has(L.key),j=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let B=!1;L&&F?L.data.isEqual(F.data)?K!==j&&(s.track({type:3,doc:F}),B=!0):this.ya(L,F)||(s.track({type:2,doc:F}),B=!0,(y&&this.Va(F,y)>0||v&&this.Va(F,v)<0)&&(m=!0)):!L&&F?(s.track({type:0,doc:F}),B=!0):L&&!F&&(s.track({type:1,doc:L}),B=!0,(y||v)&&(m=!0)),B&&(F?(h=h.add(F),u=j?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:m,mutatedKeys:u}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,R)=>function(F,K){const j=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye()}};return j(F)-j(K)}(w.type,R.type)||this.Va(w.doc,R.doc)),this.wa(s),o=o!=null&&o;const m=t&&!o?this.Sa():[],y=this.Ra.size===0&&this.current&&!o?1:0,v=y!==this.Aa;return this.Aa=y,h.length!==0||v?{snapshot:new uo(this.query,e.ma,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:m}:{ba:m}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new xg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ce(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new z_(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new U_(s))}),t}va(e){this.da=e.ds,this.Ra=Ce();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return uo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class RS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class CS{constructor(e){this.key=e,this.Fa=!1}}class kS{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Zi(m=>r_(m),Gu),this.Oa=new Map,this.Na=new Set,this.La=new Je(ce.comparator),this.Ba=new Map,this.ka=new Hd,this.qa={},this.Qa=new Map,this.Ka=lo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function PS(i,e,t=!0){const s=W_(i);let o;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Ca()):o=await j_(s,e,t,!0),o}async function NS(i,e){const t=W_(i);await j_(t,e,!0,!1)}async function j_(i,e,t,s){const o=await J1(i.localStore,Qn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await DS(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&N_(i.remoteStore,o),m}async function DS(i,e,t,s,o){i.Ua=(R,L,F)=>async function(j,B,me,ne){let ue=B.view.ga(me);ue.ss&&(ue=await kg(j.localStore,B.query,!1).then(({documents:N})=>B.view.ga(N,ue)));const pe=ne&&ne.targetChanges.get(B.targetId),Fe=ne&&ne.targetMismatches.get(B.targetId)!=null,we=B.view.applyChanges(ue,j.isPrimaryClient,pe,Fe);return Mg(j,B.targetId,we.ba),we.snapshot}(i,R,L,F);const u=await kg(i.localStore,e,!0),h=new AS(e,u.ds),m=h.ga(u.documents),y=za.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);Mg(i,t,v.ba);const w=new RS(e,t,h);return i.xa.set(e,w),i.Oa.has(t)?i.Oa.get(t).push(e):i.Oa.set(t,[e]),v.snapshot}async function xS(i,e,t){const s=Ee(i),o=s.xa.get(e),u=s.Oa.get(o.targetId);if(u.length>1)return s.Oa.set(o.targetId,u.filter(h=>!Gu(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await pd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Kd(s.remoteStore,o.targetId),gd(s,o.targetId)}).catch(go)):(gd(s,o.targetId),await pd(s.localStore,o.targetId,!0))}async function VS(i,e){const t=Ee(i),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Kd(t.remoteStore,s.targetId))}async function OS(i,e,t){const s=jS(i);try{const o=await function(h,m){const y=Ee(h),v=ft.now(),w=m.reduce((F,K)=>F.add(K.key),Ce());let R,L;return y.persistence.runTransaction("Locally write mutations","readwrite",F=>{let K=Rr(),j=Ce();return y.hs.getEntries(F,w).next(B=>{K=B,K.forEach((me,ne)=>{ne.isValidDocument()||(j=j.add(me))})}).next(()=>y.localDocuments.getOverlayedDocuments(F,K)).next(B=>{R=B;const me=[];for(const ne of m){const ue=ZI(ne,R.get(ne.key).overlayedDocument);ue!=null&&me.push(new es(ne.key,ue,Qy(ue.value.mapValue),Xn.exists(!0)))}return y.mutationQueue.addMutationBatch(F,v,me,m)}).next(B=>{L=B;const me=B.applyToLocalDocumentSet(R,j);return y.documentOverlayCache.saveOverlays(F,B.batchId,me)})}).then(()=>({batchId:L.batchId,changes:o_(R)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,y){let v=h.qa[h.currentUser.toKey()];v||(v=new Je(Pe)),v=v.insert(m,y),h.qa[h.currentUser.toKey()]=v}(s,o.batchId,t),await Ba(s,o.changes),await ec(s.remoteStore)}catch(o){const u=Zd(o,"Failed to persist write");t.reject(u)}}async function B_(i,e){const t=Ee(i);try{const s=await Q1(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ba.get(u);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?be(h.Fa):o.removedDocuments.size>0&&(be(h.Fa),h.Fa=!1))}),await Ba(t,s,e)}catch(s){await go(s)}}function Lg(i,e,t){const s=Ee(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((u,h)=>{const m=h.view.ea(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const y=Ee(h);y.onlineState=m;let v=!1;y.queries.forEach((w,R)=>{for(const L of R.J_)L.ea(m)&&(v=!0)}),v&&ef(y)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function LS(i,e,t){const s=Ee(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ba.get(e),u=o&&o.key;if(u){let h=new Je(ce.comparator);h=h.insert(u,Mt.newNoDocument(u,ve.min()));const m=Ce().add(u),y=new Yu(ve.min(),new Map,new Je(Pe),h,m);await B_(s,y),s.La=s.La.remove(u),s.Ba.delete(e),tf(s)}else await pd(s.localStore,e,!1).then(()=>gd(s,e,t)).catch(go)}async function MS(i,e){const t=Ee(i),s=e.batch.batchId;try{const o=await K1(t.localStore,e);q_(t,s,null),$_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ba(t,o)}catch(o){await go(o)}}async function bS(i,e,t){const s=Ee(i);try{const o=await function(h,m){const y=Ee(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return y.mutationQueue.lookupMutationBatch(v,m).next(R=>(be(R!==null),w=R.keys(),y.mutationQueue.removeMutationBatch(v,R))).next(()=>y.mutationQueue.performConsistencyCheck(v)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>y.localDocuments.getDocuments(v,w))})}(s.localStore,e);q_(s,e,t),$_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ba(s,o)}catch(o){await go(o)}}function $_(i,e){(i.Qa.get(e)||[]).forEach(t=>{t.resolve()}),i.Qa.delete(e)}function q_(i,e,t){const s=Ee(i);let o=s.qa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function gd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Oa.get(e))i.xa.delete(s),t&&i.Ma.Wa(s,t);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(s=>{i.ka.containsKey(s)||H_(i,s)})}function H_(i,e){i.Na.delete(e.path.canonicalString());const t=i.La.get(e);t!==null&&(Kd(i.remoteStore,t),i.La=i.La.remove(e),i.Ba.delete(t),tf(i))}function Mg(i,e,t){for(const s of t)s instanceof U_?(i.ka.addReference(s.key,e),FS(i,s)):s instanceof z_?(te("SyncEngine","Document no longer in limbo: "+s.key),i.ka.removeReference(s.key,e),i.ka.containsKey(s.key)||H_(i,s.key)):ye()}function FS(i,e){const t=e.key,s=t.path.canonicalString();i.La.get(t)||i.Na.has(s)||(te("SyncEngine","New document in limbo: "+t),i.Na.add(s),tf(i))}function tf(i){for(;i.Na.size>0&&i.La.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const t=new ce(Ge.fromString(e)),s=i.Ka.next();i.Ba.set(s,new CS(t)),i.La=i.La.insert(t,s),N_(i.remoteStore,new ri(Qn(Ud(t.path)),s,"TargetPurposeLimboResolution",qu.oe))}}async function Ba(i,e,t){const s=Ee(i),o=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((m,y)=>{h.push(s.Ua(y,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const R=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,R?"current":"not-current")}if(v){o.push(v);const R=Gd.zi(y.targetId,v);u.push(R)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(y,v){const w=Ee(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",R=>$.forEach(v,L=>$.forEach(L.Wi,F=>w.persistence.referenceDelegate.addReference(R,L.targetId,F)).next(()=>$.forEach(L.Gi,F=>w.persistence.referenceDelegate.removeReference(R,L.targetId,F)))))}catch(R){if(!yo(R))throw R;te("LocalStore","Failed to update sequence numbers: "+R)}for(const R of v){const L=R.targetId;if(!R.fromCache){const F=w.us.get(L),K=F.snapshotVersion,j=F.withLastLimboFreeSnapshotVersion(K);w.us=w.us.insert(L,j)}}}(s.localStore,u))}async function US(i,e){const t=Ee(i);if(!t.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await R_(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(m=>{m.forEach(y=>{y.reject(new ie(H.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ba(t,s.Ts)}}function zS(i,e){const t=Ee(i),s=t.Ba.get(e);if(s&&s.Fa)return Ce().add(s.key);{let o=Ce();const u=t.Oa.get(e);if(!u)return o;for(const h of u){const m=t.xa.get(h);o=o.unionWith(m.view.fa)}return o}}function W_(i){const e=Ee(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=B_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LS.bind(null,e),e.Ma.R_=IS.bind(null,e.eventManager),e.Ma.Wa=SS.bind(null,e.eventManager),e}function jS(i){const e=Ee(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bS.bind(null,e),e}class bu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ju(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return G1(this.persistence,new H1,e.initialUser,this.serializer)}ja(e){return new A_(Wd.ei,this.serializer)}za(e){return new eS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bu.provider={build:()=>new bu};class BS extends bu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){be(this.persistence.referenceDelegate instanceof Lu);const s=this.persistence.referenceDelegate.garbageCollector;return new N1(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new A_(s=>Lu.ei(s,t),this.serializer)}}class yd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Lg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=US.bind(null,this.syncEngine),await ES(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TS}()}createDatastore(e){const t=Ju(e.databaseInfo.databaseId),s=function(u){return new iS(u)}(e.databaseInfo);return function(u,h,m,y){return new aS(u,h,m,y)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new uS(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>Lg(this.syncEngine,t,0),function(){return Ng.p()?new Ng:new tS}())}createSyncEngine(e,t){return function(o,u,h,m,y,v,w){const R=new kS(o,u,h,m,y,v);return w&&(R.$a=!0),R}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Ee(o);te("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await ja(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}yd.provider={build:()=>new yd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=Wy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{te("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(te("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Zd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Wh(i,e){i.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await R_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function bg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await qS(i);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Dg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>Dg(e.remoteStore,o)),i._onlineComponents=e}async function qS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;io("Error using user provided cache. Falling back to memory cache: "+t),await Wh(i,new bu)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Wh(i,new BS(void 0));return i._offlineComponents}async function K_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await bg(i,i._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await bg(i,new yd))),i._onlineComponents}function HS(i){return K_(i).then(e=>e.syncEngine)}async function _d(i){const e=await K_(i),t=e.eventManager;return t.onListen=PS.bind(null,e.syncEngine),t.onUnlisten=xS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=NS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=VS.bind(null,e.syncEngine),t}function WS(i,e,t={}){const s=new ai;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,y,v){const w=new G_({next:L=>{w.eu(),h.enqueueAndForget(()=>b_(u,R)),L.fromCache&&y.source==="server"?v.reject(new ie(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(L)},error:L=>v.reject(L)}),R=new F_(m,w,{includeMetadataChanges:!0,ua:!0});return M_(u,R)}(await _d(i),i.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(i,e,t){if(!t)throw new ie(H.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function GS(i,e,t,s){if(e===!0&&s===!0)throw new ie(H.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Ug(i){if(!ce.isDocumentKey(i))throw new ie(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function zg(i){if(ce.isDocumentKey(i))throw new ie(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function tc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ye()}function li(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ie(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=tc(i);throw new ie(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new sI;switch(s.type){case"firstParty":return new uI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Fg.get(t);s&&(te("ComponentProvider","Removing Datastore"),Fg.delete(t),s.terminate())}(this),Promise.resolve()}}function KS(i,e,t,s={}){var o;const u=(i=li(i,nc))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,y;if(typeof s.mockUserToken=="string")m=s.mockUserToken,y=Lt.MOCK_USER;else{m=O0(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ie(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Lt(v)}i._authCredentials=new oI(new Hy(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new mi(this.firestore,e,this._query)}}class on{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new on(this.firestore,e,this._key)}}class ui extends mi{constructor(e,t,s){super(e,t,Ud(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new on(this.firestore,null,new ce(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function Bg(i,e,...t){if(i=Yt(i),X_("collection","path",e),i instanceof nc){const s=Ge.fromString(e,...t);return zg(s),new ui(i,null,s)}{if(!(i instanceof on||i instanceof ui))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return zg(s),new ui(i.firestore,null,s)}}function Y_(i,e,...t){if(i=Yt(i),arguments.length===1&&(e=Wy.newId()),X_("doc","path",e),i instanceof nc){const s=Ge.fromString(e,...t);return Ug(s),new on(i,null,new ce(s))}{if(!(i instanceof on||i instanceof ui))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ge.fromString(e,...t));return Ug(s),new on(i.firestore,i instanceof ui?i.converter:null,new ce(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new k_(this,"async_queue_retry"),this.fu=()=>{const s=Hh();s&&te("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=Hh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Hh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new ai;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!yo(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Ar("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Jd.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.du.push(o),o}pu(){this.Au&&ye()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function qg(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(i,["next","error","complete"])}class co extends nc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new $g,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $g(e),this._firestoreClient=void 0,await e}}}function QS(i,e){const t=typeof i=="object"?i:sy(),s=typeof i=="string"?i:"(default)",o=Td(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=x0("firestore");u&&KS(o,...u)}return o}function nf(i){if(i._terminated)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||XS(i),i._firestoreClient}function XS(i){var e,t,s;const o=i._freezeSettings(),u=function(m,y,v,w){return new SI(m,y,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Q_(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new $S(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ho(Ct.fromBase64String(e))}catch(t){throw new ie(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ho(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=/^__.*__$/;class JS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new es(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ua(e,this.data,t,this.fieldTransforms)}}function J_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye()}}class lf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new lf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Lu(e),o}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Fu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(J_(this.Mu)&&YS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class ZS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ju(e)}$u(e,t,s,o=!1){return new lf({Mu:e,methodName:t,Ku:s,path:Rt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Z_(i){const e=i._freezeSettings(),t=Ju(i._databaseId);return new ZS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function eA(i,e,t,s,o,u={}){const h=i.$u(u.merge||u.mergeFields?2:0,e,t,o);nv("Data must be an object, but it was:",h,s);const m=ev(s,h);let y,v;if(u.merge)y=new Vn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const R of u.mergeFields){const L=nA(e,R,t);if(!h.contains(L))throw new ie(H.INVALID_ARGUMENT,`Field '${L}' is specified in your field mask but missing from your input data.`);iA(w,L)||w.push(L)}y=new Vn(w),v=h.fieldTransforms.filter(R=>y.covers(R.field))}else y=null,v=h.fieldTransforms;return new JS(new yn(m),y,v)}class uf extends sf{_toFieldTransform(e){return new QI(e.path,new Da)}isEqual(e){return e instanceof uf}}function tA(i,e,t,s=!1){return cf(t,i.$u(s?4:3,e))}function cf(i,e){if(tv(i=Yt(i)))return nv("Unsupported field value:",e,i),ev(i,e);if(i instanceof sf)return function(s,o){if(!J_(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let y=cf(m,o.ku(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=Yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return WI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:Ou(o.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ou(o.serializer,u)}}if(s instanceof of)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ho)return{bytesValue:__(o.serializer,s._byteString)};if(s instanceof on){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:qd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof af)return function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(y=>{if(typeof y!="number")throw m.qu("VectorValues must only contain numeric values.");return zd(m.serializer,y)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${tc(s)}`)}(i,e)}function ev(i,e){const t={};return Gy(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ji(i,(s,o)=>{const u=cf(o,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function tv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ft||i instanceof of||i instanceof ho||i instanceof on||i instanceof sf||i instanceof af)}function nv(i,e,t){if(!tv(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=tc(t);throw s==="an object"?e.qu(i+" a custom object"):e.qu(i+" "+s)}}function nA(i,e,t){if((e=Yt(e))instanceof rf)return e._internalPath;if(typeof e=="string")return rv(i,e);throw Fu("Field path arguments must be of type string or ",i,!1,void 0,t)}const rA=new RegExp("[~\\*/\\[\\]]");function rv(i,e,t){if(e.search(rA)>=0)throw Fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new rf(...e.split("."))._internalPath}catch{throw Fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Fu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new ie(H.INVALID_ARGUMENT,m+i+y)}function iA(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new on(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sA extends iv{data(){return super.data()}}function rc(i,e){return typeof e=="string"?rv(i,e):e instanceof rf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ie(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hf{}class ov extends hf{}function oA(i,e,...t){let s=[];e instanceof hf&&s.push(e),s=s.concat(t),function(u){const h=u.filter(y=>y instanceof df).length,m=u.filter(y=>y instanceof ic).length;if(h>1||h>0&&m>0)throw new ie(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class ic extends ov{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ic(e,t,s)}_apply(e){const t=this._parse(e);return av(e._query,t),new mi(e.firestore,e.converter,ld(e._query,t))}_parse(e){const t=Z_(e.firestore);return function(u,h,m,y,v,w,R){let L;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ie(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Wg(R,w);const F=[];for(const K of R)F.push(Hg(y,u,K));L={arrayValue:{values:F}}}else L=Hg(y,u,R)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Wg(R,w),L=tA(m,h,R,w==="in"||w==="not-in");return at.create(v,w,L)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function aA(i,e,t){const s=e,o=rc("where",i);return ic._create(o,s,t)}class df extends hf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new df(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Ln.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)av(h,y),h=ld(h,y)}(e._query,t),new mi(e.firestore,e.converter,ld(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ff extends ov{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ff(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Na(u,h)}(e._query,this._field,this._direction);return new mi(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new _o(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function lA(i,e="asc"){const t=e,s=rc("orderBy",i);return ff._create(s,t)}function Hg(i,e,t){if(typeof(t=Yt(t))=="string"){if(t==="")throw new ie(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!n_(e)&&t.indexOf("/")!==-1)throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!ce.isDocumentKey(s))throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return cg(i,new ce(s))}if(t instanceof on)return cg(i,t._key);throw new ie(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tc(t)}.`)}function Wg(i,e){if(!Array.isArray(i)||i.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function av(i,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class uA{convertValue(e,t="none"){switch(fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ji(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new af(u)}convertGeoPoint(e){return new of(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Wu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ca(e));default:return null}}convertTimestamp(e){const t=hi(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);be(S_(s));const o=new ka(s.get(1),s.get(3)),u=new ce(s.popFirst(5));return o.isEqual(t)||Ar(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lv extends iv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(rc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class wu extends lv{data(e={}){return super.data(e)}}class uv{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new _a(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new wu(this._firestore,this._userDataWriter,s.key,s,new _a(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const y=new wu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new _a(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const y=new wu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new _a(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:hA(m.type),doc:y,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function hA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye()}}class pf extends uA{constructor(e){super(),this.firestore=e}convertBytes(e){return new ho(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new on(this.firestore,null,t)}}function dA(i){i=li(i,mi);const e=li(i.firestore,co),t=nf(e),s=new pf(e);return sv(i._query),WS(t,i._query).then(o=>new uv(e,s,i,o))}function fA(i){return cv(li(i.firestore,co),[new jd(i._key,Xn.none())])}function pA(i,e){const t=li(i.firestore,co),s=Y_(i),o=cA(i.converter,e);return cv(t,[eA(Z_(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Xn.exists(!1))]).then(()=>s)}function mA(i,...e){var t,s,o;i=Yt(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||qg(e[h])||(u=e[h],h++);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(qg(e[h])){const R=e[h];e[h]=(t=R.next)===null||t===void 0?void 0:t.bind(R),e[h+1]=(s=R.error)===null||s===void 0?void 0:s.bind(R),e[h+2]=(o=R.complete)===null||o===void 0?void 0:o.bind(R)}let y,v,w;if(i instanceof on)v=li(i.firestore,co),w=Ud(i._key.path),y={next:R=>{e[h]&&e[h](gA(v,i,R))},error:e[h+1],complete:e[h+2]};else{const R=li(i,mi);v=li(R.firestore,co),w=R._query;const L=new pf(v);y={next:F=>{e[h]&&e[h](new uv(v,L,R,F))},error:e[h+1],complete:e[h+2]},sv(i._query)}return function(L,F,K,j){const B=new G_(j),me=new F_(F,B,K);return L.asyncQueue.enqueueAndForget(async()=>M_(await _d(L),me)),()=>{B.eu(),L.asyncQueue.enqueueAndForget(async()=>b_(await _d(L),me))}}(nf(v),w,m,y)}function cv(i,e){return function(s,o){const u=new ai;return s.asyncQueue.enqueueAndForget(async()=>OS(await HS(s),o,u)),u.promise}(nf(i),e)}function gA(i,e,t){const s=t.docs.get(e._key),o=new pf(i);return new lv(i,o,e._key,s,new _a(t.hasPendingWrites,t.fromCache),e.converter)}function yA(){return new uf("serverTimestamp")}(function(e,t=!0){(function(o){mo=o})(fo),no(new Qi("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new co(new aI(s.getProvider("auth-internal")),new hI(s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ie(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ka(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),oi(ig,"4.7.5",e),oi(ig,"4.7.5","esm2017")})();const _A={apiKey:"AIzaSyAbbKdCPiRfnIidLdPfcIOsp_PzYFzjHOY",authDomain:"gossipgrid-d5173.firebaseapp.com",projectId:"gossipgrid-d5173",storageBucket:"gossipgrid-d5173.firebasestorage.app",messagingSenderId:"121882441252",appId:"1:121882441252:web:b7538754f225f613a74ab1",measurementId:"G-57ETC11PXR"},hv=iy(_A),Uu=rI(hv),vA=new _r,Gh=QS(hv);var hu={};/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var Gg;function EA(){if(Gg)return hu;Gg=1,hu.parse=h,hu.serialize=v;var i=Object.prototype.toString,e=Object.prototype.hasOwnProperty,t=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,s=/^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,u=/^[\u0020-\u003A\u003D-\u007E]*$/;function h(F,K){if(typeof F!="string")throw new TypeError("argument str must be a string");var j={},B=F.length;if(B<2)return j;var me=K&&K.decode||w,ne=0,ue=0,pe=0;do{if(ue=F.indexOf("=",ne),ue===-1)break;if(pe=F.indexOf(";",ne),pe===-1)pe=B;else if(ue>pe){ne=F.lastIndexOf(";",ue-1)+1;continue}var Fe=m(F,ne,ue),we=y(F,ue,Fe),N=F.slice(Fe,we);if(!e.call(j,N)){var T=m(F,ue+1,pe),A=y(F,pe,T);F.charCodeAt(T)===34&&F.charCodeAt(A-1)===34&&(T++,A--);var k=F.slice(T,A);j[N]=L(k,me)}ne=pe+1}while(ne<B);return j}function m(F,K,j){do{var B=F.charCodeAt(K);if(B!==32&&B!==9)return K}while(++K<j);return j}function y(F,K,j){for(;K>j;){var B=F.charCodeAt(--K);if(B!==32&&B!==9)return K+1}return j}function v(F,K,j){var B=j&&j.encode||encodeURIComponent;if(typeof B!="function")throw new TypeError("option encode is invalid");if(!t.test(F))throw new TypeError("argument name is invalid");var me=B(K);if(!s.test(me))throw new TypeError("argument val is invalid");var ne=F+"="+me;if(!j)return ne;if(j.maxAge!=null){var ue=Math.floor(j.maxAge);if(!isFinite(ue))throw new TypeError("option maxAge is invalid");ne+="; Max-Age="+ue}if(j.domain){if(!o.test(j.domain))throw new TypeError("option domain is invalid");ne+="; Domain="+j.domain}if(j.path){if(!u.test(j.path))throw new TypeError("option path is invalid");ne+="; Path="+j.path}if(j.expires){var pe=j.expires;if(!R(pe)||isNaN(pe.valueOf()))throw new TypeError("option expires is invalid");ne+="; Expires="+pe.toUTCString()}if(j.httpOnly&&(ne+="; HttpOnly"),j.secure&&(ne+="; Secure"),j.partitioned&&(ne+="; Partitioned"),j.priority){var Fe=typeof j.priority=="string"?j.priority.toLowerCase():j.priority;switch(Fe){case"low":ne+="; Priority=Low";break;case"medium":ne+="; Priority=Medium";break;case"high":ne+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(j.sameSite){var we=typeof j.sameSite=="string"?j.sameSite.toLowerCase():j.sameSite;switch(we){case!0:ne+="; SameSite=Strict";break;case"lax":ne+="; SameSite=Lax";break;case"strict":ne+="; SameSite=Strict";break;case"none":ne+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return ne}function w(F){return F.indexOf("%")!==-1?decodeURIComponent(F):F}function R(F){return i.call(F)==="[object Date]"}function L(F,K){try{return K(F)}catch{return F}}return hu}var Tu=EA();function wA(){const i=typeof global>"u"?void 0:global.TEST_HAS_DOCUMENT_COOKIE;return typeof i=="boolean"?i:typeof document=="object"&&typeof document.cookie=="string"}function TA(i){return typeof i=="string"?Tu.parse(i):typeof i=="object"&&i!==null?i:{}}function Kh(i,e={}){const t=IA(i);if(!e.doNotParse)try{return JSON.parse(t)}catch{}return i}function IA(i){return i&&i[0]==="j"&&i[1]===":"?i.substr(2):i}class dv{constructor(e,t={}){this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.update=()=>{if(!this.HAS_DOCUMENT_COOKIE)return;const o=this.cookies;this.cookies=Tu.parse(document.cookie),this._checkChanges(o)};const s=typeof document>"u"?"":document.cookie;this.cookies=TA(e||s),this.defaultSetOptions=t,this.HAS_DOCUMENT_COOKIE=wA()}_emitChange(e){for(let t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)}_checkChanges(e){new Set(Object.keys(e).concat(Object.keys(this.cookies))).forEach(s=>{e[s]!==this.cookies[s]&&this._emitChange({name:s,value:Kh(this.cookies[s])})})}_startPolling(){this.pollingInterval=setInterval(this.update,300)}_stopPolling(){this.pollingInterval&&clearInterval(this.pollingInterval)}get(e,t={}){return t.doNotUpdate||this.update(),Kh(this.cookies[e],t)}getAll(e={}){e.doNotUpdate||this.update();const t={};for(let s in this.cookies)t[s]=Kh(this.cookies[s],e);return t}set(e,t,s){s?s=Object.assign(Object.assign({},this.defaultSetOptions),s):s=this.defaultSetOptions;const o=typeof t=="string"?t:JSON.stringify(t);this.cookies=Object.assign(Object.assign({},this.cookies),{[e]:o}),this.HAS_DOCUMENT_COOKIE&&(document.cookie=Tu.serialize(e,o,s)),this._emitChange({name:e,value:t,options:s})}remove(e,t){const s=t=Object.assign(Object.assign(Object.assign({},this.defaultSetOptions),t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=Object.assign({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=Tu.serialize(e,"",s)),this._emitChange({name:e,value:void 0,options:t})}addChangeListener(e){this.changeListeners.push(e),this.HAS_DOCUMENT_COOKIE&&this.changeListeners.length===1&&(typeof window=="object"&&"cookieStore"in window?window.cookieStore.addEventListener("change",this.update):this._startPolling())}removeChangeListener(e){const t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1),this.HAS_DOCUMENT_COOKIE&&this.changeListeners.length===0&&(typeof window=="object"&&"cookieStore"in window?window.cookieStore.removeEventListener("change",this.update):this._stopPolling())}}const SA=new dv,AA=i=>{const{setIsAuth:e}=i,t=async()=>{try{const s=await dT(Uu,vA);SA.set("auth-token",s.user.refreshToken),e(!0)}catch(s){console.err(s)}};return Te.jsx("div",{className:"flex flex-col justify-center items-center",children:Te.jsx("button",{onClick:t,className:"border-4 border-blue-400 rounded-md p-2",children:"Sign in With Google"})})};function Kg({isAuth:i,logout:e,auth:t}){var s;return Te.jsxs("div",{className:"relative flex items-center border-b-2 border-black bg-blue-400 h-16",children:[Te.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 text-5xl text-white",children:"GossipGrid"}),i&&Te.jsxs("div",{className:"ml-auto flex items-center space-x-4 mr-4",children:[Te.jsx("div",{className:"text-white text-lg font-medium",children:(s=t.currentUser)==null?void 0:s.displayName}),Te.jsx("button",{onClick:e,className:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600",children:"Logout"})]})]})}function RA({room:i}){const[e,t]=Gn.useState(""),[s,o]=Gn.useState([]),u=Bg(Gh,"messages"),h=Gn.useRef(null),m=async v=>{try{const R=(await dA(Bg(Gh,v))).docs.map(L=>fA(Y_(Gh,v,L.id)));await Promise.all(R),console.log(`All documents in "${v}" deleted successfully!`)}catch(w){console.error("Error deleting documents: ",w)}};Gn.useEffect(()=>{const v=oA(u,aA("room","==",i),lA("createdAt")),w=mA(v,R=>{let L=[];R.forEach(F=>{L.push({...F.data(),id:F.id})}),o(L)});return()=>w()},[i]),Gn.useEffect(()=>{var v;(v=h.current)==null||v.scrollIntoView({behavior:"smooth"})},[s]);const y=async v=>{var w;if(v.preventDefault(),e.trim()!=="")try{await pA(u,{text:e,createdAt:yA(),user:((w=Uu.currentUser)==null?void 0:w.displayName)||"Anonymous",room:i}),t("")}catch(R){console.error(R)}};return Te.jsxs("div",{className:"flex flex-col h-screen max-w-full p-4 border-2 border-gray-400 rounded-lg",children:[Te.jsxs("div",{className:"flex items-center justify-between border-b-2 border-gray-400 mb-2 p-2",children:[Te.jsx("button",{onClick:()=>m("messages"),className:"bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600",children:"Clear Chat"}),Te.jsx("div",{className:"text-center font-bold text-lg",children:i})]}),Te.jsxs("div",{className:"flex-1 overflow-y-auto space-y-2 p-2",children:[s.map(v=>{var R;const w=v.user===((R=Uu.currentUser)==null?void 0:R.displayName);return Te.jsx("div",{className:`flex ${w?"justify-end":"justify-start"}`,children:Te.jsxs("div",{className:`p-3 rounded-lg shadow max-w-full break-words ${w?"bg-blue-500 text-white":"bg-gray-100 text-gray-800"}`,children:[Te.jsx("h2",{className:"font-bold mb-1",children:v.user}),Te.jsx("p",{children:v.text})]})},v.id)}),Te.jsx("div",{ref:h})]}),Te.jsxs("form",{onSubmit:y,className:"flex mt-4 space-x-2",children:[Te.jsx("input",{placeholder:"Message",onChange:v=>t(v.target.value),value:e,className:"flex-1 border p-2 rounded-md"}),Te.jsx("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600",children:"Send"})]})]})}const Qg=new dv;function CA(){const[i,e]=Gn.useState(Qg.get("auth-token")),[t,s]=Gn.useState(null),[o,u]=Gn.useState(!1),h=Gn.useRef(null),m=async()=>{await Ww(Uu),Qg.remove("auth-token"),e(!1),s(null)};return i?Te.jsxs("div",{className:"flex h-screen",children:[Te.jsxs("div",{className:`fixed inset-y-0 left-0 z-50 w-64 bg-blue-500 text-white transform ${o?"translate-x-0":"-translate-x-full"} transition-transform duration-300 lg:static lg:translate-x-0`,children:[Te.jsx("div",{className:"p-4 font-bold text-lg border-b border-blue-400",children:"GossipGrid"}),Te.jsx("nav",{className:"p-4 space-y-2",children:Te.jsx("button",{onClick:m,className:"w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded",children:"Logout"})})]}),Te.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[Te.jsx(Kg,{}),Te.jsx("div",{className:"flex flex-1 items-center justify-center p-4",children:t?Te.jsx("div",{className:"w-full max-w-lg h-full border-2 border-gray-400 rounded-lg",children:Te.jsx(RA,{room:t})}):Te.jsxs("div",{className:"flex flex-col items-center w-full max-w-md space-y-4",children:[Te.jsx("label",{className:"text-2xl font-bold text-center",children:"Room Name"}),Te.jsx("input",{ref:h,className:"w-full border-2 border-blue-400 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-400"}),Te.jsx("button",{onClick:()=>s(h.current.value),className:"w-full p-2 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600",children:"Enter"})]})})]}),Te.jsx("button",{onClick:()=>u(!o),className:"fixed bottom-4 left-4 z-50 bg-blue-500 text-white p-3 rounded-full lg:hidden",children:o?"Close":"Menu"})]}):Te.jsxs("div",{className:"flex flex-col h-screen",children:[Te.jsx(Kg,{}),Te.jsx("div",{className:"flex flex-1 items-center justify-center",children:Te.jsx(AA,{setIsAuth:e})})]})}S0.createRoot(document.getElementById("root")).render(Te.jsx(Gn.StrictMode,{children:Te.jsx(CA,{})}));
