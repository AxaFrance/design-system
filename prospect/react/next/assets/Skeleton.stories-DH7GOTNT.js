import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{ft as r,ht as i,mt as a,t as o}from"./prospect-BKsE65zz.js";var s=t({Action:()=>_,Circle:()=>h,Playground:()=>g,Rectangle:()=>v,__namedExportsOrder:()=>y,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{o(),c=n(),l={title:`Components/Skeleton`,component:r,argTypes:{variant:{control:`select`,options:Object.values(i)},size:{control:`select`,options:Object.keys(a)},colSize:{control:{type:`number`,min:1,max:12,step:1}},rowSize:{control:{type:`number`,min:1,max:12,step:1}},className:{control:`text`}}},u=Object.keys(a),d=[`S`,`M`,`L`],f=()=>(0,c.jsx)(`div`,{className:`skeleton-variant-demo`,children:d.map(e=>(0,c.jsxs)(`section`,{className:`skeleton-demo-card`,children:[(0,c.jsxs)(`h4`,{className:`skeleton-demo-title`,children:[`Taille `,e]}),(0,c.jsx)(`div`,{className:`skeleton-story-grid`,children:(0,c.jsx)(r,{variant:i.circle,size:e,colSize:1})})]},e))}),p=()=>(0,c.jsx)(`div`,{className:`skeleton-variant-demo`,children:(0,c.jsxs)(`section`,{className:`skeleton-demo-card`,children:[(0,c.jsx)(`h4`,{className:`skeleton-demo-title`,children:`Taille M`}),(0,c.jsx)(`div`,{className:`skeleton-story-grid`,children:(0,c.jsx)(r,{variant:i.action,size:`M`,colSize:12})})]})}),m=()=>(0,c.jsx)(`div`,{className:`skeleton-variant-demo`,children:u.map(e=>(0,c.jsxs)(`section`,{className:`skeleton-demo-card`,children:[(0,c.jsxs)(`h4`,{className:`skeleton-demo-title`,children:[`Taille `,e]}),(0,c.jsx)(`div`,{className:`skeleton-story-grid`,children:(0,c.jsx)(r,{variant:i.rectangle,size:e,colSize:12})})]},e))}),h={render:()=>f()},g={args:{variant:i.rectangle,size:`M`,colSize:12,rowSize:1},render:e=>(0,c.jsx)(r,{...e})},_={render:()=>p()},v={render:()=>m()},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => renderCircle()
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: skeletonVariants.rectangle,
    size: "M",
    colSize: 12,
    rowSize: 1
  },
  render: args => <Skeleton {...args} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => renderAction()
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => renderRectangle()
}`,...v.parameters?.docs?.source}}},y=[`Circle`,`Playground`,`Action`,`Rectangle`]})))()}export{b as a,s as i,g as n,v as r,_ as t};