"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{157:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:c,className:l="",children:s,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...u,width:o,height:o,stroke:n,strokeWidth:c?24*Number(i)/Number(o):i,className:a("lucide",l),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(s)?s:[s]])}),c=(e,t)=>{let n=(0,r.forwardRef)((n,u)=>{let{className:c,...l}=n;return(0,r.createElement)(i,{ref:u,iconNode:t,className:a("lucide-".concat(o(e)),c),...l})});return n.displayName="".concat(e),n}},1285:(e,t,n)=>{n.d(t,{B:()=>c});var r,o=n(2115),a=n(2712),u=(r||(r=n.t(o,2)))[" useId ".trim().toString()]||(()=>void 0),i=0;function c(e){let[t,n]=o.useState(u());return(0,a.N)(()=>{e||n(e=>e??String(i++))},[e]),e||(t?`radix-${t}`:"")}},2293:(e,t,n)=>{n.d(t,{Oh:()=>a});var r=n(2115),o=0;function a(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!=(e=n[0])?e:u()),document.body.insertAdjacentElement("beforeend",null!=(t=n[1])?t:u()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function u(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}},2712:(e,t,n)=>{n.d(t,{N:()=>o});var r=n(2115),o=globalThis?.document?r.useLayoutEffect:()=>{}},3795:(e,t,n)=>{n.d(t,{A:()=>Y});var r,o,a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create;Object.create;var i=("function"==typeof SuppressedError&&SuppressedError,n(2115)),c="right-scroll-bar-position",l="width-before-scroll-bar";function s(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var d="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,f=new WeakMap;function v(e){return e}var m=function(e){void 0===e&&(e={});var t,n,r,o,u=(t=null,void 0===n&&(n=v),r=[],o=!1,{read:function(){if(o)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:null},useMedium:function(e){var t=n(e,o);return r.push(t),function(){r=r.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(o=!0;r.length;){var t=r;r=[],t.forEach(e)}r={push:function(t){return e(t)},filter:function(){return r}}},assignMedium:function(e){o=!0;var t=[];if(r.length){var n=r;r=[],n.forEach(e),t=r}var a=function(){var n=t;t=[],n.forEach(e)},u=function(){return Promise.resolve().then(a)};u(),r={push:function(e){t.push(e),u()},filter:function(e){return t=t.filter(e),r}}}});return u.options=a({async:!0,ssr:!1},e),u}(),p=function(){},h=i.forwardRef(function(e,t){var n,r,o,c,l=i.useRef(null),v=i.useState({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:p}),h=v[0],y=v[1],g=e.forwardProps,E=e.children,b=e.className,w=e.removeScrollBar,N=e.enabled,C=e.shards,S=e.sideCar,L=e.noIsolation,O=e.inert,T=e.allowPinchZoom,A=e.as,M=e.gapMode,k=u(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),P=(n=[l,t],r=function(e){return n.forEach(function(t){return s(t,e)})},(o=(0,i.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,c=o.facade,d(function(){var e=f.get(c);if(e){var t=new Set(e),r=new Set(n),o=c.current;t.forEach(function(e){r.has(e)||s(e,null)}),r.forEach(function(e){t.has(e)||s(e,o)})}f.set(c,n)},[n]),c),R=a(a({},k),h);return i.createElement(i.Fragment,null,N&&i.createElement(S,{sideCar:m,removeScrollBar:w,shards:C,noIsolation:L,inert:O,setCallbacks:y,allowPinchZoom:!!T,lockRef:l,gapMode:M}),g?i.cloneElement(i.Children.only(E),a(a({},R),{ref:P})):i.createElement(void 0===A?"div":A,a({},R,{className:b,ref:P}),E))});h.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},h.classNames={fullWidth:l,zeroRight:c};var y=function(e){var t=e.sideCar,n=u(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return i.createElement(r,a({},n))};y.isSideCarExport=!0;var g=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=o||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,u;(a=t).styleSheet?a.styleSheet.cssText=r:a.appendChild(document.createTextNode(r)),u=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(u)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},E=function(){var e=g();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},b=function(){var e=E();return function(t){return e(t.styles,t.dynamic),null}},w={left:0,top:0,right:0,gap:0},N=function(e){return parseInt(e||"",10)||0},C=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[N(n),N(r),N(o)]},S=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return w;var t=C(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},L=b(),O="data-scroll-locked",T=function(e,t,n,r){var o=e.left,a=e.top,u=e.right,i=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(i,"px ").concat(r,";\n  }\n  body[").concat(O,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(u,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(c," {\n    right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(l," {\n    margin-right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(c," .").concat(c," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(l," .").concat(l," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(O,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(i,"px;\n  }\n")},A=function(){var e=parseInt(document.body.getAttribute(O)||"0",10);return isFinite(e)?e:0},M=function(){i.useEffect(function(){return document.body.setAttribute(O,(A()+1).toString()),function(){var e=A()-1;e<=0?document.body.removeAttribute(O):document.body.setAttribute(O,e.toString())}},[])},k=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;M();var a=i.useMemo(function(){return S(o)},[o]);return i.createElement(L,{styles:T(a,!t,o,n?"":"!important")})},P=!1;if("undefined"!=typeof window)try{var R=Object.defineProperty({},"passive",{get:function(){return P=!0,!0}});window.addEventListener("test",R,R),window.removeEventListener("test",R,R)}catch(e){P=!1}var x=!!P&&{passive:!1},D=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&(n.overflowY!==n.overflowX||"TEXTAREA"===e.tagName||"visible"!==n[t])},W=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),I(e,r)){var o=j(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},I=function(e,t){return"v"===e?D(t,"overflowY"):D(t,"overflowX")},j=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},F=function(e,t,n,r,o){var a,u=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),i=u*r,c=n.target,l=t.contains(c),s=!1,d=i>0,f=0,v=0;do{var m=j(e,c),p=m[0],h=m[1]-m[2]-u*p;(p||h)&&I(e,c)&&(f+=h,v+=p),c=c instanceof ShadowRoot?c.host:c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&i>f)?s=!0:!d&&(o&&1>Math.abs(v)||!o&&-i>v)&&(s=!0),s},_=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},B=function(e){return[e.deltaX,e.deltaY]},U=function(e){return e&&"current"in e?e.current:e},$=0,K=[];let z=(r=function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState($++)[0],a=i.useState(b)[0],u=i.useRef(e);i.useEffect(function(){u.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(U),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var c=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!u.current.allowPinchZoom;var o,a=_(e),i=n.current,c="deltaX"in e?e.deltaX:i[0]-a[0],l="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=W(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=W(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var v=r.current||o;return F(v,t,e,"h"===v?c:l,!0)},[]),l=i.useCallback(function(e){if(K.length&&K[K.length-1]===a){var n="deltaY"in e?B(e):_(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta,r[0]===n[0]&&r[1]===n[1])})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(U).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?c(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=i.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=i.useCallback(function(e){n.current=_(e),r.current=void 0},[]),f=i.useCallback(function(t){s(t.type,B(t),t.target,c(t,e.lockRef.current))},[]),v=i.useCallback(function(t){s(t.type,_(t),t.target,c(t,e.lockRef.current))},[]);i.useEffect(function(){return K.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",l,x),document.addEventListener("touchmove",l,x),document.addEventListener("touchstart",d,x),function(){K=K.filter(function(e){return e!==a}),document.removeEventListener("wheel",l,x),document.removeEventListener("touchmove",l,x),document.removeEventListener("touchstart",d,x)}},[]);var m=e.removeScrollBar,p=e.inert;return i.createElement(i.Fragment,null,p?i.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,m?i.createElement(k,{gapMode:e.gapMode}):null)},m.useMedium(r),y);var X=i.forwardRef(function(e,t){return i.createElement(h,a({},e,{ref:t,sideCar:z}))});X.classNames=h.classNames;let Y=X},4378:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(2115),o=n(7650),a=n(3655),u=n(2712),i=n(5155),c=r.forwardRef((e,t)=>{var n,c;let{container:l,...s}=e,[d,f]=r.useState(!1);(0,u.N)(()=>f(!0),[]);let v=l||d&&(null==(c=globalThis)||null==(n=c.document)?void 0:n.body);return v?o.createPortal((0,i.jsx)(a.sG.div,{...s,ref:t}),v):null});c.displayName="Portal"},5185:(e,t,n)=>{n.d(t,{m:()=>r});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},5845:(e,t,n)=>{n.d(t,{i:()=>a});var r=n(2115),o=n(9033);function a({prop:e,defaultProp:t,onChange:n=()=>{}}){let[a,u]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[a]=n,u=r.useRef(a),i=(0,o.c)(t);return r.useEffect(()=>{u.current!==a&&(i(a),u.current=a)},[a,u,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,c=i?e:a,l=(0,o.c)(n);return[c,r.useCallback(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else u(t)},[i,e,u,l])]}},6081:(e,t,n)=>{n.d(t,{A:()=>u,q:()=>a});var r=n(2115),o=n(5155);function a(e,t){let n=r.createContext(t),a=e=>{let{children:t,...a}=e,u=r.useMemo(()=>a,Object.values(a));return(0,o.jsx)(n.Provider,{value:u,children:t})};return a.displayName=e+"Provider",[a,function(o){let a=r.useContext(n);if(a)return a;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function u(e,t=[]){let n=[],a=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return a.scopeName=e,[function(t,a){let u=r.createContext(a),i=n.length;n=[...n,a];let c=t=>{let{scope:n,children:a,...c}=t,l=n?.[e]?.[i]||u,s=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(l.Provider,{value:s,children:a})};return c.displayName=t+"Provider",[c,function(n,o){let c=o?.[e]?.[i]||u,l=r.useContext(c);if(l)return l;if(void 0!==a)return a;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(a,...t)]}},7900:(e,t,n)=>{n.d(t,{n:()=>d});var r=n(2115),o=n(6101),a=n(3655),u=n(9033),i=n(5155),c="focusScope.autoFocusOnMount",l="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},d=r.forwardRef((e,t)=>{let{loop:n=!1,trapped:d=!1,onMountAutoFocus:h,onUnmountAutoFocus:y,...g}=e,[E,b]=r.useState(null),w=(0,u.c)(h),N=(0,u.c)(y),C=r.useRef(null),S=(0,o.s)(t,e=>b(e)),L=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(d){let e=function(e){if(L.paused||!E)return;let t=e.target;E.contains(t)?C.current=t:m(C.current,{select:!0})},t=function(e){if(L.paused||!E)return;let t=e.relatedTarget;null!==t&&(E.contains(t)||m(C.current,{select:!0}))};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&m(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[d,E,L.paused]),r.useEffect(()=>{if(E){p.add(L);let e=document.activeElement;if(!E.contains(e)){let t=new CustomEvent(c,s);E.addEventListener(c,w),E.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(f(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(E))}return()=>{E.removeEventListener(c,w),setTimeout(()=>{let t=new CustomEvent(l,s);E.addEventListener(l,N),E.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),E.removeEventListener(l,N),p.remove(L)},0)}}},[E,w,N,L]);let O=r.useCallback(e=>{if(!n&&!d||L.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){let t=e.currentTarget,[o,a]=function(e){let t=f(e);return[v(t,e),v(t.reverse(),e)]}(t);o&&a?e.shiftKey||r!==a?e.shiftKey&&r===o&&(e.preventDefault(),n&&m(a,{select:!0})):(e.preventDefault(),n&&m(o,{select:!0})):r===t&&e.preventDefault()}},[n,d,L.paused]);return(0,i.jsx)(a.sG.div,{tabIndex:-1,...g,ref:S,onKeyDown:O})});function f(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function v(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}d.displayName="FocusScope";var p=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=h(e,t)).unshift(t)},remove(t){var n;null==(n=(e=h(e,t))[0])||n.resume()}}}();function h(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},8168:(e,t,n)=>{n.d(t,{Eq:()=>s});var r=function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},o=new WeakMap,a=new WeakMap,u={},i=0,c=function(e){return e&&(e.host||c(e.parentNode))},l=function(e,t,n,r){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=c(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});u[n]||(u[n]=new WeakMap);var s=u[n],d=[],f=new Set,v=new Set(l),m=function(e){!e||f.has(e)||(f.add(e),m(e.parentNode))};l.forEach(m);var p=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))p(e);else try{var t=e.getAttribute(r),u=null!==t&&"false"!==t,i=(o.get(e)||0)+1,c=(s.get(e)||0)+1;o.set(e,i),s.set(e,c),d.push(e),1===i&&u&&a.set(e,!0),1===c&&e.setAttribute(n,"true"),u||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return p(t),f.clear(),i++,function(){d.forEach(function(e){var t=o.get(e)-1,u=s.get(e)-1;o.set(e,t),s.set(e,u),t||(a.has(e)||e.removeAttribute(r),a.delete(e)),u||e.removeAttribute(n)}),--i||(o=new WeakMap,o=new WeakMap,a=new WeakMap,u={})}},s=function(e,t,n){void 0===n&&(n="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),a=t||r(e);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),l(o,a,n,"aria-hidden")):function(){return null}}},8905:(e,t,n)=>{n.d(t,{C:()=>u});var r=n(2115),o=n(6101),a=n(2712),u=e=>{let{present:t,children:n}=e,u=function(e){var t,n;let[o,u]=r.useState(),c=r.useRef({}),l=r.useRef(e),s=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=i(c.current);s.current="mounted"===d?e:"none"},[d]),(0,a.N)(()=>{let t=c.current,n=l.current;if(n!==e){let r=s.current,o=i(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),l.current=e}},[e,f]),(0,a.N)(()=>{if(o){var e;let t,n=null!=(e=o.ownerDocument.defaultView)?e:window,r=e=>{let r=i(c.current).includes(e.animationName);if(e.target===o&&r&&(f("ANIMATION_END"),!l.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},a=e=>{e.target===o&&(s.current=i(c.current))};return o.addEventListener("animationstart",a),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",a),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(c.current=getComputedStyle(e)),u(e)},[])}}(t),c="function"==typeof n?n({present:u.isPresent}):r.Children.only(n),l=(0,o.s)(u.ref,function(e){var t,n;let r=null==(t=Object.getOwnPropertyDescriptor(e.props,"ref"))?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null==(n=Object.getOwnPropertyDescriptor(e,"ref"))?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(c));return"function"==typeof n||u.isPresent?r.cloneElement(c,{ref:l}):null};function i(e){return(null==e?void 0:e.animationName)||"none"}u.displayName="Presence"},9033:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(2115);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},9178:(e,t,n)=>{n.d(t,{qW:()=>f});var r,o=n(2115),a=n(5185),u=n(3655),i=n(6101),c=n(9033),l=n(5155),s="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{var n,f;let{disableOutsidePointerEvents:p=!1,onEscapeKeyDown:h,onPointerDownOutside:y,onFocusOutside:g,onInteractOutside:E,onDismiss:b,...w}=e,N=o.useContext(d),[C,S]=o.useState(null),L=null!=(f=null==C?void 0:C.ownerDocument)?f:null==(n=globalThis)?void 0:n.document,[,O]=o.useState({}),T=(0,i.s)(t,e=>S(e)),A=Array.from(N.layers),[M]=[...N.layersWithOutsidePointerEventsDisabled].slice(-1),k=A.indexOf(M),P=C?A.indexOf(C):-1,R=N.layersWithOutsidePointerEventsDisabled.size>0,x=P>=k,D=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==(t=globalThis)?void 0:t.document,r=(0,c.c)(e),a=o.useRef(!1),u=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!a.current){let t=function(){m("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",u.current),u.current=t,n.addEventListener("click",u.current,{once:!0})):t()}else n.removeEventListener("click",u.current);a.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",u.current)}},[n,r]),{onPointerDownCapture:()=>a.current=!0}}(e=>{let t=e.target,n=[...N.branches].some(e=>e.contains(t));x&&!n&&(null==y||y(e),null==E||E(e),e.defaultPrevented||null==b||b())},L),W=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==(t=globalThis)?void 0:t.document,r=(0,c.c)(e),a=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!a.current&&m("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>a.current=!0,onBlurCapture:()=>a.current=!1}}(e=>{let t=e.target;![...N.branches].some(e=>e.contains(t))&&(null==g||g(e),null==E||E(e),e.defaultPrevented||null==b||b())},L);return!function(e,t=globalThis?.document){let n=(0,c.c)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{P===N.layers.size-1&&(null==h||h(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},L),o.useEffect(()=>{if(C)return p&&(0===N.layersWithOutsidePointerEventsDisabled.size&&(r=L.body.style.pointerEvents,L.body.style.pointerEvents="none"),N.layersWithOutsidePointerEventsDisabled.add(C)),N.layers.add(C),v(),()=>{p&&1===N.layersWithOutsidePointerEventsDisabled.size&&(L.body.style.pointerEvents=r)}},[C,L,p,N]),o.useEffect(()=>()=>{C&&(N.layers.delete(C),N.layersWithOutsidePointerEventsDisabled.delete(C),v())},[C,N]),o.useEffect(()=>{let e=()=>O({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,l.jsx)(u.sG.div,{...w,ref:T,style:{pointerEvents:R?x?"auto":"none":void 0,...e.style},onFocusCapture:(0,a.m)(e.onFocusCapture,W.onFocusCapture),onBlurCapture:(0,a.m)(e.onBlurCapture,W.onBlurCapture),onPointerDownCapture:(0,a.m)(e.onPointerDownCapture,D.onPointerDownCapture)})});function v(){let e=new CustomEvent(s);document.dispatchEvent(e)}function m(e,t,n,r){let{discrete:o}=r,a=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),o?(0,u.hO)(a,i):a.dispatchEvent(i)}f.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),a=(0,i.s)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(u.sG.div,{...e,ref:a})}).displayName="DismissableLayerBranch"}}]);