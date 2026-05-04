import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-B6pS4pdr.js";import{s as a,t as o}from"./distributeur-experimental-Dx1A_-NC.js";var s=t({DefaultStory:()=>u,DisabledStory:()=>d,InvalidStory:()=>p,RequiredStory:()=>f,__namedExportsOrder:()=>m,default:()=>l}),c,l,u,d,f,p,m,h=e((()=>{o(),r(),c=i(),l=n.meta({title:`Experimental/Form/Atoms/Input`,component:a,argTypes:{placeholder:{control:`text`},disabled:{control:`boolean`},required:{control:`boolean`},type:{control:{type:`select`},options:[`text`,`email`,`password`,`number`,`tel`,`url`]},onChange:{action:`changed`,table:{disable:!0}}}}),u=l.story({name:`Default`,render:e=>(0,c.jsx)(a,{...e}),args:{placeholder:`Enter text...`}}),d=l.story({name:`Disabled`,render:e=>(0,c.jsx)(a,{...e}),args:{placeholder:`Disabled input`,disabled:!0,value:`Cannot edit this`}}),f=l.story({name:`Required`,render:e=>(0,c.jsx)(a,{...e}),args:{placeholder:`Required field`,required:!0}}),p=l.story({name:`Invalid`,render:e=>(0,c.jsx)(a,{...e}),args:{placeholder:`Invalid input`,"aria-invalid":!0,value:`Invalid value`}}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Default",
  render: args => <Input {...args} />,
  args: {
    placeholder: "Enter text..."
  }
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Disabled",
  render: args => <Input {...args} />,
  args: {
    placeholder: "Disabled input",
    disabled: true,
    value: "Cannot edit this"
  }
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Required",
  render: args => <Input {...args} />,
  args: {
    placeholder: "Required field",
    required: true
  }
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Invalid",
  render: args => <Input {...args} />,
  args: {
    placeholder: "Invalid input",
    "aria-invalid": true,
    value: "Invalid value"
  }
})`,...p.input.parameters?.docs?.source}}},m=[`DefaultStory`,`DisabledStory`,`RequiredStory`,`InvalidStory`]}));h();export{u as DefaultStory,d as DisabledStory,p as InvalidStory,f as RequiredStory,m as __namedExportsOrder,l as default,h as n,s as t};