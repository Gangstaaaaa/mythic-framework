"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[5740],{15740:(e,t,n)=>{n.r(t),n.d(t,{BumpAdvert:()=>p,CreateAdvert:()=>i,DeleteAdvert:()=>a,UpdateAdvert:()=>f});var r=n(21447);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(e,t,n){return function(e){r.Z.send("CreateAdvert",t).then((function(e){n()})).catch((function(e){}))}},f=function(e,t,n){return function(e){r.Z.send("UpdateAdvert",t).then((function(e){n()})).catch((function(e){}))}},a=function(e,t){return function(e){r.Z.send("DeleteAdvert").then((function(e){t()})).catch((function(e){}))}},p=function(e,t,n){return function(e){r.Z.send("UpdateAdvert",o(o({},t),{},{time:Date.now()})).then((function(e){n()})).catch((function(e){n()}))}}}}]);