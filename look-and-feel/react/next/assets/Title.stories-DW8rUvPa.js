import{j as e}from"./index-C-iqcyhV.js";import{a as t,S as v}from"./Skeleton-CM5pNryo.js";import"./ClickIconApollo-dpo4GE3K.js";import{r as T}from"./index-ZnYipkzV.js";import{g as O}from"./getComponentClassName-Bvr8AkYL.js";import{I as V}from"./IconBg-D9452dxZ.js";import{a as I}from"./article-fill-B_-J39Ry.js";const N=({title:s,firstSubtitle:n,secondSubtitle:r,level:c=1})=>{const u=`h${c}`;return e.jsxs(e.Fragment,{children:[e.jsx(u,{className:"af-title__title",children:s}),n?e.jsx("span",{className:"af-title__subtitle",children:n}):null,r?e.jsx("span",{className:"af-title__subtitle",children:r}):null]})},p=({children:s,className:n,classModifier:r,firstSubtitle:c,icon:u,secondSubtitle:L,size:a=t.XL,level:d=a===t.L?2:1})=>{const X=T.useMemo(()=>O("af-title",n,r?`${r} ${a}`:a),[r,n,a]),m=T.useCallback(({..._})=>e.jsx(N,{title:s,firstSubtitle:c,level:d,..._}),[s,c,d]);return e.jsx("header",{className:X,children:u&&a===t.XL?e.jsxs(e.Fragment,{children:[e.jsx(V,{className:"af-title__icon af-icon-bg",children:u}),e.jsx(m,{secondSubtitle:L})]}):e.jsx(m,{})})},W={title:"Components/Title",component:p},i={render:s=>e.jsx(p,{...s}),args:{children:"Titre de la page",size:t.XL},argTypes:{size:{options:Object.values(t),control:{type:"select"},defaultValue:t.XL},level:{options:[1,2,3,4,5,6],control:{type:"select"},defaultValue:1}}},l={render:s=>e.jsx(p,{...s}),args:{children:"Titre de la page",firstSubtitle:"Sous-titre 1",secondSubtitle:"Sous-titre 2",icon:e.jsx(v,{src:I,"aria-hidden":!0}),size:t.XL},argTypes:{size:{options:Object.values(t),control:{type:"select"},defaultValue:t.XL}}},o={render:s=>e.jsx(p,{...s}),args:{children:"Titre de la page",firstSubtitle:"Sous-titre 1",secondSubtitle:"Sous-titre 2",size:t.XL},argTypes:{size:{options:Object.values(t),control:{type:"select"},defaultValue:t.XL}}};var g,S,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var h,j,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(j=l.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var x,z,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(z=o.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};const C=["TitleBasic","TitleWithIcon","TitleWithoutIcon"],R=Object.freeze(Object.defineProperty({__proto__:null,TitleBasic:i,TitleWithIcon:l,TitleWithoutIcon:o,__namedExportsOrder:C,default:W},Symbol.toStringTag,{value:"Module"}));export{R as T,i as a,l as b,o as c};
