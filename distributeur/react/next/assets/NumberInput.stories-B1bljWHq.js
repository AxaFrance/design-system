import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-BgroMBfE.js";import{Tt as i,it as a,s as o,t as s}from"./distributeur-avOQdPsh.js";var c,l,u,d,f,p=e((()=>{s(),n(),c=r(),l=t.meta({title:`Components/Form/Input/Number`,component:a,args:{required:!0,value:5,placeholder:`Your name`,name:`name`,id:`nameid`,readOnly:!1,disabled:!1,autoFocus:!1,label:`Your name`,helpMessage:`Aide à la saisie`,forceDisplayMessage:!1,message:``,messageType:i.error,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`,"aria-disabled":!1}}),u=l.story({name:`NumberInput`,render:({...e})=>(0,c.jsx)(a,{...e})}),d=l.story({name:`NumberInput with help button`,render:({...e})=>(0,c.jsx)(a,{...e,hasInfobulle:!0,children:(0,c.jsx)(o,{mode:`hover`,children:`Help`})})}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "NumberInput",
  render: ({
    ...args
  }) => <NumberInput {...args} />
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "NumberInput with help button",
  render: ({
    ...args
  }) =>
  // Add a button as children to the NumberInput
  <NumberInput {...args} hasInfobulle>
      <HelpButton mode="hover">Help</HelpButton>
    </NumberInput>
})`,...d.input.parameters?.docs?.source}}},f=[`NumberInputStory`,`NumberInputWithChildrenStory`]}));p();export{u as NumberInputStory,d as NumberInputWithChildrenStory,f as __namedExportsOrder,l as default,p as t};