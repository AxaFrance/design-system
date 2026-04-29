import{a0 as g,h as s,S as l}from"./LoaderApollo-Bo1PAZ-b.js";/* empty css               */import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./index-CtOEgLBf.js";const b="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='m274-450%20248%20248-42%2042-320-320%20320-320%2042%2042-248%20248h526v60H274Z'/%3e%3c/svg%3e",f="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M686-450H160v-60h526L438-758l42-42%20320%20320-320%20320-42-42%20248-248Z'/%3e%3c/svg%3e",w=({variant:e,modifier:t,...o})=>n.jsxs("div",{className:["af-btn-client-demo__bloc",t?`af-btn-client-demo__bloc--${t}`:""].filter(Boolean).join(" "),children:[n.jsx("h2",{className:"af-title",children:e}),n.jsx(s,{variant:e,...o,children:e}),n.jsx(s,{variant:e,disabled:!0,...o,children:e}),n.jsx(s,{variant:e,iconLeft:n.jsx(l,{src:b,...o}),children:e}),n.jsx(s,{variant:e,iconRight:n.jsx(l,{src:f,...o}),children:e})]},e),h=e=>n.jsx("div",{className:"af-btn-client-demo",children:Object.values(g).map(t=>n.jsx("div",{className:"af-btn-client-demo-variant",children:n.jsx(w,{variant:t,modifier:/inverse/.test(t)?"blue":void 0,...e})},t))}),x=({children:e,variant:t,disabled:o,iconLeft:j,iconRight:B,...y})=>n.jsxs(s,{variant:t,iconLeft:j,iconRight:B,disabled:o,...y,children:[e," ",t]});h.__docgenInfo={description:"",methods:[],displayName:"renderButtonAll"};x.__docgenInfo={description:"",methods:[],displayName:"renderButton"};const _={component:s,title:"Components/Button",parameters:{layout:"centered"},argTypes:{onClick:{action:"onClick"}}},r={name:"Button",render:x,args:{children:"Button"},argTypes:{variant:{options:Object.values(g),control:{type:"multi-select"}},iconLeft:{control:{type:"text"}},iconRight:{control:{type:"text"}},onClick:{action:"onClick"}}},c={render:h,argTypes:{onClick:{action:"onClick"}}};var i,a,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
    },
    onClick: {
      action: "onClick"
    }
  }
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var m,p,u;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: renderButtonAll,
  argTypes: {
    onClick: {
      action: "onClick"
    }
  }
}`,...(u=(p=c.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const v=["Playground","All"],N=Object.freeze(Object.defineProperty({__proto__:null,All:c,Playground:r,__namedExportsOrder:v,default:_},Symbol.toStringTag,{value:"Module"}));export{c as A,N as B,r as P};
