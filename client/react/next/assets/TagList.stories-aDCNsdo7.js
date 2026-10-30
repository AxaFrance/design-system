import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{o as r,t as i}from"./client-2r8I_y7l.js";import{yr as a}from"./MessageBarCommon-BVZFjmJf.js";var o=t({CustomThreshold:()=>d,Default:()=>l,WithOverflow:()=>u,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{i(),s=n(),c={title:`Components/TagList`,component:r,args:{hideThreshold:2}},l={name:`TagList`,render:e=>(0,s.jsxs)(r,{...e,children:[(0,s.jsx)(a,{children:`Remboursement`}),(0,s.jsx)(a,{children:`Santé`})]})},u={name:`TagList with overflow`,render:e=>(0,s.jsxs)(r,{...e,children:[(0,s.jsx)(a,{children:`Remboursement`}),(0,s.jsx)(a,{children:`Santé`}),(0,s.jsx)(a,{children:`Auto`}),(0,s.jsx)(a,{children:`Habitation`}),(0,s.jsx)(a,{children:`Prévoyance`})]})},d={name:`TagList with custom threshold`,render:e=>(0,s.jsxs)(r,{...e,hideThreshold:3,children:[(0,s.jsx)(a,{children:`Remboursement`}),(0,s.jsx)(a,{children:`Santé`}),(0,s.jsx)(a,{children:`Auto`}),(0,s.jsx)(a,{children:`Habitation`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "TagList",
  render: args => <TagList {...args}>
      <Tag>Remboursement</Tag>
      <Tag>Santé</Tag>
    </TagList>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "TagList with overflow",
  render: args => <TagList {...args}>
      <Tag>Remboursement</Tag>
      <Tag>Santé</Tag>
      <Tag>Auto</Tag>
      <Tag>Habitation</Tag>
      <Tag>Prévoyance</Tag>
    </TagList>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "TagList with custom threshold",
  render: args => <TagList {...args} hideThreshold={3}>
      <Tag>Remboursement</Tag>
      <Tag>Santé</Tag>
      <Tag>Auto</Tag>
      <Tag>Habitation</Tag>
    </TagList>
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithOverflow`,`CustomThreshold`]})))()}export{p as a,u as i,l as n,o as r,d as t};