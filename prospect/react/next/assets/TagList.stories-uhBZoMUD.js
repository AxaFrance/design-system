import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{fr as r,o as i,t as a}from"./prospect-DYhE5jXd.js";var o=t({CustomThreshold:()=>d,Default:()=>l,WithOverflow:()=>u,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{a(),s=n(),c={title:`Components/TagList`,component:i,args:{hideThreshold:2}},l={name:`TagList`,render:e=>(0,s.jsxs)(i,{...e,children:[(0,s.jsx)(r,{children:`Remboursement`}),(0,s.jsx)(r,{children:`Santé`})]})},u={name:`TagList with overflow`,render:e=>(0,s.jsxs)(i,{...e,children:[(0,s.jsx)(r,{children:`Remboursement`}),(0,s.jsx)(r,{children:`Santé`}),(0,s.jsx)(r,{children:`Auto`}),(0,s.jsx)(r,{children:`Habitation`}),(0,s.jsx)(r,{children:`Prévoyance`})]})},d={name:`TagList with custom threshold`,render:e=>(0,s.jsxs)(i,{...e,hideThreshold:3,children:[(0,s.jsx)(r,{children:`Remboursement`}),(0,s.jsx)(r,{children:`Santé`}),(0,s.jsx)(r,{children:`Auto`}),(0,s.jsx)(r,{children:`Habitation`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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