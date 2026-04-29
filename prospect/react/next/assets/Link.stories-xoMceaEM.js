import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{d as a}from"./LoaderApollo-D0xkpJcZ.js";/* empty css               */import"./index-CtOEgLBf.js";import{L as w}from"./LinkCommon-CwYuOJPc.js";import{a as x}from"./arrow_left_alt-BzLPLjyo.js";const M="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M480-481q-66%200-108-42t-42-108q0-66%2042-108t108-42q66%200%20108%2042t42%20108q0%2066-42%20108t-108%2042ZM160-220v-34q0-38%2019-65t49-41q67-30%20128.5-45T480-420q62%200%20123%2015.5T731-360q31%2014%2050%2041t19%2065v34q0%2025-17.5%2042.5T740-160H220q-25%200-42.5-17.5T160-220Z'/%3e%3c/svg%3e",q={title:"Components/Link 🚧",component:w},n={args:{href:"https://fakelink.com",children:"My link"}},e={args:{href:"https://fakelink.com",children:"My link",variant:"inverse"},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"var(--blue-1000)"}]}}},r={args:{href:"https://fakelink.com",children:"My link",openInNewTab:!0,rightIcon:o.jsx(a,{src:M})}},t={args:{href:"https://fakelink.com",children:"My link",leftIcon:o.jsx(a,{src:x}),rightIcon:o.jsx(a,{src:M})}},S=({classNameButton:c,...T})=>o.jsx(w,{...T,className:`af-btn-client ${c?`af-btn-client--${c}`:""}`}),s={name:"Link button 🚧",render:S,args:{href:"https://fakelink.com",children:"LinkButton",leftIcon:o.jsx(a,{src:x})},argTypes:{classNameButton:{options:["","secondary","tertiary"],control:{type:"multi-select"}}}};var i,l,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    href: "https://fakelink.com",
    children: "My link"
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,k,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    href: "https://fakelink.com",
    children: "My link",
    variant: "inverse"
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{
        name: "dark",
        value: "var(--blue-1000)"
      }]
    }
  }
}`,...(d=(k=e.parameters)==null?void 0:k.docs)==null?void 0:d.source}}};var u,h,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    href: "https://fakelink.com",
    children: "My link",
    openInNewTab: true,
    rightIcon: <Icon src={personFill} />
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,y,L;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    href: "https://fakelink.com",
    children: "My link",
    leftIcon: <Icon src={arrowLeftAlt} />,
    rightIcon: <Icon src={personFill} />
  }
}`,...(L=(y=t.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var I,v,b;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Link button 🚧",
  render: LinkButton,
  args: {
    href: "https://fakelink.com",
    children: "LinkButton",
    leftIcon: <Icon src={arrowLeftAlt} />
  },
  argTypes: {
    classNameButton: {
      options: ["", "secondary", "tertiary"],
      control: {
        type: "multi-select"
      }
    }
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const j=["Playground","LinkInverse","LinkOpenInNewTab","LinkWithIcons","LinkButtonStory"],F=Object.freeze(Object.defineProperty({__proto__:null,LinkButtonStory:s,LinkInverse:e,LinkOpenInNewTab:r,LinkWithIcons:t,Playground:n,__namedExportsOrder:j,default:q},Symbol.toStringTag,{value:"Module"}));export{F as L,n as P};
