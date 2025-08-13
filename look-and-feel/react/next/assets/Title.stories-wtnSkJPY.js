import{j as n}from"./index-C1mcBe1y.js";import"./DropdownCommon-DPc8zOyi.js";import{T as e,S as m}from"./constants-BY3T3rt2.js";import"./index-DbaA8R3S.js";import{T as a}from"./Title-CRIDISpK.js";import{a as z}from"./article-fill-B_-J39Ry.js";const f={title:"Components/Title",component:a},r={render:t=>n.jsx(a,{...t}),args:{children:"Titre de la page",size:e.XL},argTypes:{size:{options:Object.values(e),control:{type:"select"},defaultValue:e.XL},level:{options:[1,2,3,4,5,6],control:{type:"select"},defaultValue:1}}},s={render:t=>n.jsx(a,{...t}),args:{children:"Titre de la page",firstSubtitle:"Sous-titre 1",secondSubtitle:"Sous-titre 2",icon:n.jsx(m,{src:z,"aria-hidden":!0}),size:e.XL},argTypes:{size:{options:Object.values(e),control:{type:"select"},defaultValue:e.XL}}},i={render:t=>n.jsx(a,{...t}),args:{children:"Titre de la page",firstSubtitle:"Sous-titre 1",secondSubtitle:"Sous-titre 2",size:e.XL},argTypes:{size:{options:Object.values(e),control:{type:"select"},defaultValue:e.XL}}};var o,l,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var T,S,g;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(g=(S=i.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const b=["TitleBasic","TitleWithIcon","TitleWithoutIcon"],O=Object.freeze(Object.defineProperty({__proto__:null,TitleBasic:r,TitleWithIcon:s,TitleWithoutIcon:i,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{O as T,r as a,s as b,i as c};
