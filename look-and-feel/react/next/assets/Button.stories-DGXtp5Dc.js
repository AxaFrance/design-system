import{B as r,b as g,S as l}from"./Skeleton-BVKE6ZZK.js";import"./TimelineVerticalLF-DlSV4Enj.js";import{j as n}from"./index-C-iqcyhV.js";import"./index-ZnYipkzV.js";import{a as b}from"./arrow_back-DnyUknY1.js";const f="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M686-450H160v-60h526L438-758l42-42%20320%20320-320%20320-42-42%20248-248Z'/%3e%3c/svg%3e",_=({variant:e,modifier:t,...o})=>n.jsxs("div",{className:["af-btn-client-demo__bloc",t?`af-btn-client-demo__bloc--${t}`:""].filter(Boolean).join(" "),children:[n.jsx("h2",{className:"af-title",children:e}),n.jsx(r,{variant:e,...o,children:e}),n.jsx(r,{variant:e,disabled:!0,...o,children:e}),n.jsx(r,{variant:e,iconLeft:n.jsx(l,{src:b,...o}),children:e}),n.jsx(r,{variant:e,iconRight:n.jsx(l,{src:f,...o}),children:e})]},e),h=e=>n.jsx("div",{className:"af-btn-client-demo",children:Object.values(g).map(t=>n.jsx("div",{className:"af-btn-client-demo-variant",children:n.jsx(_,{variant:t,modifier:/inverse/.test(t)?"blue":void 0,...e})},t))}),x=({children:e,variant:t,disabled:o,iconLeft:j,iconRight:B,...y})=>n.jsxs(r,{variant:t,iconLeft:j,iconRight:B,disabled:o,...y,children:[e," ",t]});h.__docgenInfo={description:"",methods:[],displayName:"renderButtonAll"};x.__docgenInfo={description:"",methods:[],displayName:"renderButton"};const k={component:r,title:"Components/Button",parameters:{layout:"centered"},argTypes:{onClick:{action:"onClick"}}},s={name:"Button",render:x,args:{children:"Button"},argTypes:{variant:{options:Object.values(g),control:{type:"multi-select"}},iconLeft:{control:{type:"text"}},iconRight:{control:{type:"text"}},onClick:{action:"onClick"}}},c={render:h,argTypes:{onClick:{action:"onClick"}}};var i,a,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(a=s.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var m,p,u;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: renderButtonAll,
  argTypes: {
    onClick: {
      action: "onClick"
    }
  }
}`,...(u=(p=c.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const C=["Playground","All"],O=Object.freeze(Object.defineProperty({__proto__:null,All:c,Playground:s,__namedExportsOrder:C,default:k},Symbol.toStringTag,{value:"Module"}));export{c as A,O as B,s as P};
