import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{c as I,p as y}from"./CardData-3id96KGn.js";/* empty css               */import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{f as w}from"./index-VGPHIPc6.js";import{v as x}from"./villa-BhFUGjo6.js";const i="af-card",s=({children:r,className:v,iconSrc:c,orientation:l="vertical",error:H=!1,active:B=!1,..._})=>o.jsxs("button",{type:"button",className:I(i,B&&`${i}--active`,H&&`${i}--error`,l==="horizontal"&&`${i}--${l}`,v),..._,children:[c?o.jsx(y,{src:c}):null,r]}),D={component:s,title:"Components/Card",parameters:{layout:"centered"},args:{onClick:w(),disabled:!1,error:!1,active:!1},argTypes:{orientation:{table:{disable:!0}},iconSrc:{table:{disable:!0}}}},a={name:"Card Button with icon",render:({...r})=>o.jsx(s,{...r,iconSrc:x,children:"Contenu"})},e={name:"Card Button",render:({...r})=>o.jsx(s,{...r,children:"Contenu"})},n={name:"Card Button Horizontal with icon",render:({...r})=>o.jsx(s,{...r,iconSrc:x,orientation:"horizontal",children:"Contenu"})},t={name:"Card Button Horizontal",render:({...r})=>o.jsx(s,{...r,orientation:"horizontal",children:"Contenu"})};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Card Button with icon",
  render: ({
    ...args
  }) => <Card {...args} iconSrc={villaIcon}>
      Contenu
    </Card>
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,C,h;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Card Button",
  render: ({
    ...args
  }) => <Card {...args}>Contenu</Card>
}`,...(h=(C=e.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var f,g,z;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Card Button Horizontal with icon",
  render: ({
    ...args
  }) => <Card {...args} iconSrc={villaIcon} orientation="horizontal">
      Contenu
    </Card>
}`,...(z=(g=n.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var S,b,j;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Card Button Horizontal",
  render: ({
    ...args
  }) => <Card {...args} orientation="horizontal">
      Contenu
    </Card>
}`,...(j=(b=t.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const E=["Default","VerticalWithoutIcon","Horizontal","HorizontalWithoutIcon"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Horizontal:n,HorizontalWithoutIcon:t,VerticalWithoutIcon:e,__namedExportsOrder:E,default:D},Symbol.toStringTag,{value:"Module"}));export{L as C,a as D,n as H,e as V,t as a};
