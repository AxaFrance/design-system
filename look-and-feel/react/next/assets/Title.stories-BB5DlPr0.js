import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./ToggleCommon-CYdO7kJC.js";import{n as e,S as m}from"./constants-CfTcsyJm.js";import"./index-DuZrfDUH.js";import{T as a}from"./Title-CKGSGquH.js";import{a as z}from"./article-fill-B_-J39Ry.js";const f={title:"Components/Title",component:a},r={render:t=>i.jsx(a,{...t}),args:{children:"Titre de la page",size:e.XL},argTypes:{size:{options:Object.values(e),control:{type:"select"},defaultValue:e.XL},level:{options:[1,2,3,4,5,6],control:{type:"select"},defaultValue:1}}},s={render:t=>i.jsx(a,{...t}),args:{children:"Titre de la page",firstSubtitle:"Sous-titre 1",secondSubtitle:"Sous-titre 2",icon:i.jsx(m,{src:z,"aria-hidden":!0}),size:e.XL},argTypes:{size:{options:Object.values(e),control:{type:"select"},defaultValue:e.XL}}},n={render:t=>i.jsx(a,{...t}),args:{children:"Titre de la page",firstSubtitle:"Sous-titre 1",secondSubtitle:"Sous-titre 2",size:e.XL},argTypes:{size:{options:Object.values(e),control:{type:"select"},defaultValue:e.XL}}};var o,l,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Title {...args} />,
  args: {
    children: "Titre de la page",
    size: TitleSize.XL
  },
  argTypes: {
    size: {
      options: Object.values(TitleSize),
      control: {
        type: "select"
      },
      defaultValue: TitleSize.XL
    },
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: {
        type: "select"
      },
      defaultValue: 1
    }
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,p,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Title {...args} />,
  args: {
    children: "Titre de la page",
    firstSubtitle: "Sous-titre 1",
    secondSubtitle: "Sous-titre 2",
    icon: <Svg src={article} aria-hidden />,
    size: TitleSize.XL
  },
  argTypes: {
    size: {
      options: Object.values(TitleSize),
      control: {
        type: "select"
      },
      defaultValue: TitleSize.XL
    }
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var T,S,g;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Title {...args} />,
  args: {
    children: "Titre de la page",
    firstSubtitle: "Sous-titre 1",
    secondSubtitle: "Sous-titre 2",
    size: TitleSize.XL
  },
  argTypes: {
    size: {
      options: Object.values(TitleSize),
      control: {
        type: "select"
      },
      defaultValue: TitleSize.XL
    }
  }
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const b=["TitleBasic","TitleWithIcon","TitleWithoutIcon"],O=Object.freeze(Object.defineProperty({__proto__:null,TitleBasic:r,TitleWithIcon:s,TitleWithoutIcon:n,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{O as T,r as a,s as b,n as c};
