import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-De-9TtK1.js";import{n as a,wt as o}from"./distributeur-Ct4qDp97.js";import{n as s,t as c}from"./villa-DChSwgyV.js";var l=t({Default:()=>p,Horizontal:()=>h,HorizontalWithoutIcon:()=>g,VerticalWithoutIcon:()=>m,__namedExportsOrder:()=>_,default:()=>f}),u,d,f,p,m,h,g,_,v=e((()=>{a(),c(),r(),u=i(),{fn:d}=__STORYBOOK_MODULE_TEST__,f=n.meta({component:o,title:`Components/Card`,parameters:{layout:`centered`},args:{onClick:d(),disabled:!1,error:!1,active:!1},argTypes:{orientation:{table:{disable:!0}},iconSrc:{table:{disable:!0}}}}),p=f.story({name:`Card Button with icon`,render:({...e})=>(0,u.jsx)(o,{...e,iconSrc:s,children:`Contenu`})}),m=f.story({name:`Card Button`,render:({...e})=>(0,u.jsx)(o,{...e,children:`Contenu`})}),h=f.story({name:`Card Button Horizontal with icon`,render:({...e})=>(0,u.jsx)(o,{...e,iconSrc:s,orientation:`horizontal`,children:`Contenu`})}),g=f.story({name:`Card Button Horizontal`,render:({...e})=>(0,u.jsx)(o,{...e,orientation:`horizontal`,children:`Contenu`})}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Card Button with icon",
  render: ({
    ...args
  }) => <Card {...args} iconSrc={villaIcon}>
      Contenu
    </Card>
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Card Button",
  render: ({
    ...args
  }) => <Card {...args}>Contenu</Card>
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Card Button Horizontal with icon",
  render: ({
    ...args
  }) => <Card {...args} iconSrc={villaIcon} orientation="horizontal">
      Contenu
    </Card>
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Card Button Horizontal",
  render: ({
    ...args
  }) => <Card {...args} orientation="horizontal">
      Contenu
    </Card>
})`,...g.input.parameters?.docs?.source}}},_=[`Default`,`VerticalWithoutIcon`,`Horizontal`,`HorizontalWithoutIcon`]}));v();export{p as Default,h as Horizontal,g as HorizontalWithoutIcon,m as VerticalWithoutIcon,_ as __namedExportsOrder,f as default,v as n,l as t};