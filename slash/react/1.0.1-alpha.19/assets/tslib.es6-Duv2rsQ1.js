function h(l,u,t,n){function a(e){return e instanceof t?e:new t(function(c){c(e)})}return new(t||(t=Promise))(function(e,c){function o(i){try{r(n.next(i))}catch(s){c(s)}}function f(i){try{r(n.throw(i))}catch(s){c(s)}}function r(i){i.done?e(i.value):a(i.value).then(o,f)}r((n=n.apply(l,u||[])).next())})}function b(l,u){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},n,a,e,c=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return c.next=o(0),c.throw=o(1),c.return=o(2),typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function o(r){return function(i){return f([r,i])}}function f(r){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,r[0]&&(t=0)),t;)try{if(n=1,a&&(e=r[0]&2?a.return:r[0]?a.throw||((e=a.return)&&e.call(a),0):a.next)&&!(e=e.call(a,r[1])).done)return e;switch(a=0,e&&(r=[r[0]&2,e.value]),r[0]){case 0:case 1:e=r;break;case 4:return t.label++,{value:r[1],done:!1};case 5:t.label++,a=r[1],r=[0];continue;case 7:r=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(r[0]===6||r[0]===2)){t=0;continue}if(r[0]===3&&(!e||r[1]>e[0]&&r[1]<e[3])){t.label=r[1];break}if(r[0]===6&&t.label<e[1]){t.label=e[1],e=r;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(r);break}e[2]&&t.ops.pop(),t.trys.pop();continue}r=u.call(l,t)}catch(i){r=[6,i],a=0}finally{n=e=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}}function y(l,u){var t=typeof Symbol=="function"&&l[Symbol.iterator];if(!t)return l;var n=t.call(l),a,e=[],c;try{for(;(u===void 0||u-- >0)&&!(a=n.next()).done;)e.push(a.value)}catch(o){c={error:o}}finally{try{a&&!a.done&&(t=n.return)&&t.call(n)}finally{if(c)throw c.error}}return e}function d(){for(var l=[],u=0;u<arguments.length;u++)l=l.concat(y(arguments[u]));return l}function p(l,u,t){if(t||arguments.length===2)for(var n=0,a=u.length,e;n<a;n++)(e||!(n in u))&&(e||(e=Array.prototype.slice.call(u,0,n)),e[n]=u[n]);return l.concat(e||Array.prototype.slice.call(u))}export{p as _,h as a,b,d as c};