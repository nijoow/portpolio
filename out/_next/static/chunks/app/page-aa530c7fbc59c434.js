(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9841:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(5904)},4201:function(e,t,r){Promise.resolve().then(r.t.bind(r,2664,23)),Promise.resolve().then(r.bind(r,498))},501:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},unstable_getImgProps:function(){return a}});let n=r(9266),o=r(2815),i=r(7082),s=r(6309),l=n._(r(1020)),a=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=s.Image},498:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5590),o=r(8655),i=r(5588),s=r.n(i),l=r(5293),a=r.n(l),u=r(6334),c=r(4571);let f=window.sessionStorage,{persistAtom:d}=(0,c.J)({key:"sessionStorage",storage:f}),p=(0,u.cn)({key:"musicAtom",default:null,effects_UNSTABLE:[d]});var m=()=>{let[e,t]=(0,u.FV)(p);return((0,o.useEffect)(()=>{let e=async()=>{try{var e;let r=await (await fetch("/api/spotify/currently-playing")).json(),n=await (await fetch("/api/spotify/recently-played")).json();t(null!==(e=r.payload)&&void 0!==e?e:n.payload)}catch(e){t(null)}};e();let r=setInterval(()=>e(),3e4);return()=>clearInterval(r)},[]),null===e)?(0,n.jsxs)("div",{className:"flex bg-gray-700 w-full items-center rounded-xl max-w-md p-2.5 gap-3",children:[(0,n.jsx)("div",{className:"rounded-md w-24 h-24 overflow-hidden relative shrink-0 flex items-center justify-center bg-gray-500",children:(0,n.jsx)("span",{className:"text-6xl",children:"\uD83D\uDE2D"})}),(0,n.jsx)("div",{className:"flex-auto",children:"현재 곡을 표시할 수 없습니다ㅠㅠ"})]}):(0,n.jsxs)(s(),{href:e.songUrl,target:"_blank",rel:"noopener noreferrer",className:"flex bg-gray-700 w-full items-center rounded-xl max-w-md p-2.5 gap-3",children:[(0,n.jsx)("div",{className:"rounded-md w-24 h-24 overflow-hidden relative shrink-0",children:(0,n.jsx)(a(),{src:e.albumImageUrl,fill:!0,unoptimized:!0,alt:e.title})}),(0,n.jsxs)("div",{className:"flex flex-col flex-auto truncate text-white",children:[(0,n.jsx)("div",{className:"text-base truncate",children:e.title}),(0,n.jsx)("div",{className:"text-sm text-gray-300 truncate",children:e.artist})]})]})}},5904:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a=[],u=!1,c=-1;function f(){u&&n&&(u=!1,n.length?a=n.concat(a):c=-1,a.length&&d())}function d(){if(!u){var e=l(f);u=!0;for(var t=a.length;t;){for(n=a,a=[];++c<t;)n&&n[c].run();c=-1,t=a.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new p(e,t)),1!==a.length||u||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},s=!0;try{t[e](i,i.exports,n),s=!1}finally{s&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},5747:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(8655),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},5590:function(e,t,r){"use strict";e.exports=r(5747)},5293:function(e,t,r){e.exports=r(501)},5588:function(e,t,r){e.exports=r(2664)},4571:function(e,t){"use strict";t.J=void 0,t.J=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:r=localStorage,converter:n=JSON}=e,o=(e,t,r,n)=>{n?delete t[r]:t[r]=e,l(t)},i=()=>{let e=r.getItem(t);return null==e?{}:"string"==typeof e?s(e):"function"==typeof e.then?e.then(s):{}},s=e=>{if(void 0===e)return{};try{return n.parse(e)}catch(e){return console.error(e),{}}},l=e=>{try{"function"==typeof r.mergeItem?r.mergeItem(t,n.stringify(e)):r.setItem(t,n.stringify(e))}catch(e){console.error(e)}};return{persistAtom:({onSet:e,node:t,trigger:r,setSelf:n})=>{if("get"===r){let e=i();"function"==typeof e.then&&e.then(e=>{e.hasOwnProperty(t.key)&&n(e[t.key])}),e.hasOwnProperty(t.key)&&n(e[t.key])}e(async(e,r,n)=>{let s=i();"function"==typeof s.then?s.then(r=>o(e,r,t.key,n)):o(e,s,t.key,n)})}}}}},function(e){e.O(0,[76,664,309,254,528,744],function(){return e(e.s=4201)}),_N_E=e.O()}]);