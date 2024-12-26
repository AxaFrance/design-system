import{g as c}from"./index-CTjT7uj6.js";var a={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(s){(function(){var f={}.hasOwnProperty;function n(){for(var t="",r=0;r<arguments.length;r++){var e=arguments[r];e&&(t=i(t,o(e)))}return t}function o(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var e in t)f.call(t,e)&&t[e]&&(r=i(r,e));return r}function i(t,r){return r?t?t+" "+r:t+r:t}s.exports?(n.default=n,s.exports=n):window.classNames=n})()})(a);var u=a.exports;const l=c(u),p=s=>s?s.split(" ").filter(Boolean).at(-1):null,m=s=>s?s.split(" "):[],x=(s,f,n)=>{const o=s||n;if(!o)return"";const i=p(o),r=m(f).filter(e=>/\S/.test(e)).map(e=>`${i}--${e}`);return l(o,r)};export{l as c,x as g};
