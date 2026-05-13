import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-De-9TtK1.js";import{a,o,r as s,s as c,t as l}from"./distributeur-experimental-CBCB-5EC.js";var u=t({HorizontalStory:()=>p,VerticalStory:()=>m,WithoutUnitStory:()=>h,__namedExportsOrder:()=>g,default:()=>f}),d,f,p,m,h,g,_=e((()=>{l(),r(),d=i(),f=n.meta({title:`Experimental/Form/Atoms/InputContainer`,component:o,argTypes:{vertical:{control:`boolean`}}}),p=f.story({name:`Horizontal Layout`,render:e=>(0,d.jsxs)(o,{...e,children:[(0,d.jsx)(s,{htmlFor:`input-1`,children:`Label`}),(0,d.jsx)(c,{id:`input-1`,placeholder:`Enter text`}),(0,d.jsx)(a,{children:`€`})]}),args:{vertical:!1}}),m=f.story({name:`Vertical Layout`,render:e=>(0,d.jsxs)(o,{...e,children:[(0,d.jsx)(s,{htmlFor:`input-2`,children:`Label`}),(0,d.jsx)(c,{id:`input-2`,placeholder:`Enter text`}),(0,d.jsx)(a,{children:`€`})]}),args:{vertical:!0}}),h=f.story({name:`Without Unit`,render:e=>(0,d.jsxs)(o,{...e,children:[(0,d.jsx)(s,{htmlFor:`input-3`,children:`Label`}),(0,d.jsx)(c,{id:`input-3`,placeholder:`Enter text`})]}),args:{vertical:!1}}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Horizontal Layout",
  render: args => <InputContainer {...args}>
      <Label htmlFor="input-1">Label</Label>
      <Input id="input-1" placeholder="Enter text" />
      <InputUnit>€</InputUnit>
    </InputContainer>,
  args: {
    vertical: false
  }
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Vertical Layout",
  render: args => <InputContainer {...args}>
      <Label htmlFor="input-2">Label</Label>
      <Input id="input-2" placeholder="Enter text" />
      <InputUnit>€</InputUnit>
    </InputContainer>,
  args: {
    vertical: true
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Without Unit",
  render: args => <InputContainer {...args}>
      <Label htmlFor="input-3">Label</Label>
      <Input id="input-3" placeholder="Enter text" />
    </InputContainer>,
  args: {
    vertical: false
  }
})`,...h.input.parameters?.docs?.source}}},g=[`HorizontalStory`,`VerticalStory`,`WithoutUnitStory`]}));_();export{p as HorizontalStory,m as VerticalStory,h as WithoutUnitStory,g as __namedExportsOrder,f as default,_ as n,u as t};