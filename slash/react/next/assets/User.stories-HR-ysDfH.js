import{p as C}from"./Loader-C1uJHYLx.js";/* empty css              */import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{f as N}from"./index-C2cC0QQF.js";const c=({name:a,profile:o})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"af-info-user__name",children:a},"1"),o&&e.jsxs("span",{className:"af-info-user__profile",children:["[",o,"]"]},"2")]}),l="af-info-user",W=({children:a,classModifier:o,className:j,href:n,name:t,path:k,profile:i,onClick:m,title:x="Voir mon profil"})=>{const U=C(j,o,l);return e.jsxs("div",{className:U,children:[n?e.jsx("a",{"aria-label":"user info link",className:`${l}__link`,href:n,title:x,onClick:g=>m&&m({path:k,event:g}),children:e.jsx(c,{name:t,profile:i})}):e.jsx(c,{name:t,profile:i}),a]})},b={args:{name:"Pierre Martin",profile:"profile",title:"Voir mon profil",onClick:N()},argTypes:{onClick:{action:"onClick"}},component:W,title:"Components/Header/User"},r={args:{href:"/#"}},s={name:"User Without link"};var p,f,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    href: "/#"
  }
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var d,h,_;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "User Without link"
}`,...(_=(h=s.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const S=["UserWithLink","UserWithoutLink"],P=Object.freeze(Object.defineProperty({__proto__:null,UserWithLink:r,UserWithoutLink:s,__namedExportsOrder:S,default:b},Symbol.toStringTag,{value:"Module"}));export{P as U,r as a,s as b};
