import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-B6pS4pdr.js";import{St as i,n as a,o,tt as s}from"./distributeur-DmtDXCQS.js";var c,l,u,d,f,p=e((()=>{a(),n(),c=r(),l=t.type().meta({title:`Components/Form/Input/Number`,args:{required:!0,classModifier:[],value:5,placeholder:`Your name`,name:`name`,id:`nameid`,readOnly:!1,disabled:!1,autoFocus:!1,className:``,label:`Your name`,helpMessage:`Aide à la saisie`,forceDisplayMessage:!1,message:``,messageType:i.error,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`,"aria-disabled":!1},argTypes:{classModifier:{options:[``,`required`,`disabled`],control:{type:`inline-check`}}}}),u=l.story({name:`NumberInput`,render:({classModifier:e,...t})=>(0,c.jsx)(s,{classModifier:e.join(` `),...t})}),d=l.story({name:`NumberInput with help button`,render:({classModifier:e,...t})=>(0,c.jsx)(s,{classModifier:e.join(` `),...t,children:(0,c.jsx)(o,{mode:`hover`,children:`Help`})})}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "NumberInput",
  render: ({
    classModifier,
    ...args
  }) => <NumberInput classModifier={classModifier.join(" ")} {...args} />
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "NumberInput with help button",
  render: ({
    classModifier,
    ...args
  }) =>
  // Add a button as children to the NumberInput
  <NumberInput classModifier={classModifier.join(" ")} {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </NumberInput>
})`,...d.input.parameters?.docs?.source}}},f=[`NumberInputStory`,`NumberInputWithChildrenStory`]}));p();export{u as NumberInputStory,d as NumberInputWithChildrenStory,f as __namedExportsOrder,l as default,p as t};