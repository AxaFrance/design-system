import{j as i}from"./jsx-runtime-QvZ8i92b.js";import{a as m}from"./article-fill-B_-J39Ry.js";import{a,b as e}from"./Title-CkInkqf4.js";import{S as z}from"./Svg-C4poEASt.js";const b={title:"Components/Title",component:a},r={render:t=>i.jsx(a,{...t}),args:{children:"Titre de la page",size:e.XL},argTypes:{size:{options:Object.values(e),control:{type:"select"},defaultValue:e.XL},level:{options:[1,2,3,4,5,6],control:{type:"select"},defaultValue:1}}},s={render:t=>i.jsx(a,{...t}),args:{children:"Titre de la page",firstSubtitle:"Sous-titre 1",secondSubtitle:"Sous-titre 2",icon:i.jsx(z,{src:m,"aria-hidden":!0}),size:e.XL},argTypes:{size:{options:Object.values(e),control:{type:"select"},defaultValue:e.XL}}},n={render:t=>i.jsx(a,{...t}),args:{children:"Titre de la page",firstSubtitle:"Sous-titre 1",secondSubtitle:"Sous-titre 2",size:e.XL},argTypes:{size:{options:Object.values(e),control:{type:"select"},defaultValue:e.XL}}};var o,l,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const f=["TitleBasic","TitleWithIcon","TitleWithoutIcon"],X=Object.freeze(Object.defineProperty({__proto__:null,TitleBasic:r,TitleWithIcon:s,TitleWithoutIcon:n,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{X as T,r as a,s as b,n as c};
