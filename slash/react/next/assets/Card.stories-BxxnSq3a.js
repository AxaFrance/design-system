import{j as n}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{E as B,u as _}from"./Loader-DK5J0_UK.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as I}from"./index-28pPPJTf.js";const i="af-card",s=({children:r,className:b,iconSrc:c,orientation:d="vertical",error:j=!1,...w})=>n.jsxs("button",{type:"button",className:B(i,j&&`${i}--error`,d==="horizontal"&&`${i}--${d}`,b),...w,children:[c?n.jsx(_,{src:c}):null,r]}),H="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M120-120v-522l515-198v360h85q0-24.75%2017.68-42.38Q755.35-540%20780.18-540q24.82%200%2042.32%2017.62Q840-504.75%20840-480v360H120Zm60-60h190v-300h205v-273L180-601v421Zm250%200h145v-110h60v110h145v-240H430v240ZM310-540Zm295%20360Zm0-25Z'/%3e%3c/svg%3e",Z={component:s,title:"Components/Card",parameters:{layout:"centered"},args:{onClick:I(),disabled:!1},argTypes:{orientation:{table:{disable:!0}},iconSrc:{table:{disable:!0}}}},o={name:"Card Button with icon",render:({...r})=>n.jsx(s,{...r,iconSrc:H,children:"Contenu"})},e={name:"Card Button",render:({...r})=>n.jsx(s,{...r,children:"Contenu"})},a={name:"Card Button Horizontal with icon",render:({...r})=>n.jsx(s,{...r,iconSrc:H,orientation:"horizontal",children:"Contenu"})},t={name:"Card Button Horizontal",render:({...r})=>n.jsx(s,{...r,orientation:"horizontal",children:"Contenu"})};var l,m,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Card Button with icon",
  render: ({
    ...args
  }) => <Card {...args} iconSrc={villaIcon}>
      Contenu
    </Card>
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,C,h;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Card Button",
  render: ({
    ...args
  }) => <Card {...args}>Contenu</Card>
}`,...(h=(C=e.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var g,v,z;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Card Button Horizontal with icon",
  render: ({
    ...args
  }) => <Card {...args} iconSrc={villaIcon} orientation="horizontal">
      Contenu
    </Card>
}`,...(z=(v=a.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var S,f,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Card Button Horizontal",
  render: ({
    ...args
  }) => <Card {...args} orientation="horizontal">
      Contenu
    </Card>
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const y=["Default","VerticalWithoutIcon","Horizontal","HorizontalWithoutIcon"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Horizontal:a,HorizontalWithoutIcon:t,VerticalWithoutIcon:e,__namedExportsOrder:y,default:Z},Symbol.toStringTag,{value:"Module"}));export{N as C,o as D,a as H,e as V,t as a};
