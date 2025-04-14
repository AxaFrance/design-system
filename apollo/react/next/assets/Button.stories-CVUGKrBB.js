import"./MessageApollo-Cxr4QzYe.js";import{B as n,b as g}from"./ButtonCommon-t_JWqHmp.js";import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./index-DuZrfDUH.js";import{S as c}from"./Svg-ERz0tW2l.js";const w="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='m274-450%20248%20248-42%2042-320-320%20320-320%2042%2042-248%20248h526v60H274Z'/%3e%3c/svg%3e",_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M686-450H160v-60h526L438-758l42-42%20320%20320-320%20320-42-42%20248-248Z'/%3e%3c/svg%3e",l=({variant:e,modifier:o})=>t.jsxs("div",{className:["af-btn-client-demo__bloc",o?`af-btn-client-demo__bloc--${o}`:""].filter(Boolean).join(" "),children:[t.jsx("h2",{className:"af-title",children:e}),t.jsx(n,{variant:e,children:e}),t.jsx(n,{variant:e,disabled:!0,children:e}),t.jsx(n,{variant:e,iconLeft:t.jsx(c,{src:w}),children:e}),t.jsx(n,{variant:e,iconRight:t.jsx(c,{src:_}),children:e})]},e),h=()=>t.jsx("div",{className:"af-btn-client-demo",children:Object.values(g).map(e=>t.jsxs("div",{className:"af-btn-client-demo-variant",children:[t.jsx(l,{variant:e}),t.jsx(l,{variant:e,modifier:"blue"})]},e))}),x=({children:e,variant:o,disabled:j,iconLeft:B,iconRight:b,onClick:f,...y})=>t.jsxs(n,{variant:o,iconLeft:B,iconRight:b,disabled:j,onClick:f,...y,children:[e," ",o]});h.__docgenInfo={description:"",methods:[],displayName:"renderButtonAll"};x.__docgenInfo={description:"",methods:[],displayName:"renderButton"};const v={component:n,title:"Components/Button",parameters:{layout:"centered"},argTypes:{onClick:{action:"clicked"}}},s={name:"Button",render:x,args:{children:"Button"},argTypes:{variant:{options:Object.values(g),control:{type:"multi-select"}},iconLeft:{control:{type:"text"}},iconRight:{control:{type:"text"}}}},r={render:h};var a,d,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Button",
  render: renderButton,
  args: {
    children: "Button"
  },
  argTypes: {
    variant: {
      options: Object.values(buttonVariants),
      control: {
        type: "multi-select"
      }
    },
    iconLeft: {
      control: {
        type: "text"
      }
    },
    iconRight: {
      control: {
        type: "text"
      }
    }
  }
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: renderButtonAll
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const S=["Playground","All"],P=Object.freeze(Object.defineProperty({__proto__:null,All:r,Playground:s,__namedExportsOrder:S,default:v},Symbol.toStringTag,{value:"Module"}));export{r as A,P as B,s as P};
