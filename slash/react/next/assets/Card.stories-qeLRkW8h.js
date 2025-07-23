import{j as o}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{t as v,u as I}from"./Loader-b3UvZa-v.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as y}from"./index-28pPPJTf.js";import{v as x}from"./villa-BhFUGjo6.js";const i="af-card",s=({children:r,className:H,iconSrc:c,orientation:d="vertical",error:B=!1,..._})=>o.jsxs("button",{type:"button",className:v(i,B&&`${i}--error`,d==="horizontal"&&`${i}--${d}`,H),..._,children:[c?o.jsx(I,{src:c}):null,r]}),w={component:s,title:"Components/Card",parameters:{layout:"centered"},args:{onClick:y(),disabled:!1},argTypes:{orientation:{table:{disable:!0}},iconSrc:{table:{disable:!0}}}},n={name:"Card Button with icon",render:({...r})=>o.jsx(s,{...r,iconSrc:x,children:"Contenu"})},a={name:"Card Button",render:({...r})=>o.jsx(s,{...r,children:"Contenu"})},e={name:"Card Button Horizontal with icon",render:({...r})=>o.jsx(s,{...r,iconSrc:x,orientation:"horizontal",children:"Contenu"})},t={name:"Card Button Horizontal",render:({...r})=>o.jsx(s,{...r,orientation:"horizontal",children:"Contenu"})};var l,u,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Card Button with icon",
  render: ({
    ...args
  }) => <Card {...args} iconSrc={villaIcon}>
      Contenu
    </Card>
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,C,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Card Button",
  render: ({
    ...args
  }) => <Card {...args}>Contenu</Card>
}`,...(h=(C=a.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var g,f,z;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Card Button Horizontal with icon",
  render: ({
    ...args
  }) => <Card {...args} iconSrc={villaIcon} orientation="horizontal">
      Contenu
    </Card>
}`,...(z=(f=e.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var S,b,j;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Card Button Horizontal",
  render: ({
    ...args
  }) => <Card {...args} orientation="horizontal">
      Contenu
    </Card>
}`,...(j=(b=t.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const D=["Default","VerticalWithoutIcon","Horizontal","HorizontalWithoutIcon"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Horizontal:e,HorizontalWithoutIcon:t,VerticalWithoutIcon:a,__namedExportsOrder:D,default:w},Symbol.toStringTag,{value:"Module"}));export{$ as C,n as D,e as H,a as V,t as a};
