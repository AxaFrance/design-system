import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-BgroMBfE.js";import{Tt as i,mt as a,s as o,t as s}from"./distributeur-avOQdPsh.js";var c,l,u,d,f,p,m=e((()=>{s(),n(),c=r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=t.type().meta({title:`Components/Form/Input/Choice`,args:{name:`placeName`,required:!0,label:`Place type`,placeholder:`Paris`,messageType:i.error,forceDisplayMessage:!1,classNameContainerInput:`col-md-10`,classNameContainerLabel:`col-md-2`,message:``,id:`uniqueid`,onChange:l(),isVisible:!0,readOnly:!1,disabled:!1,value:void 0},argTypes:{onChange:{action:`onChange`},value:{options:[void 0,!0,!1],control:{type:`inline-radio`}}}}),d=u.story({name:`ChoiceInput`,render:e=>(0,c.jsx)(a,{...e})}),f=u.story({name:`ChoiceInput with help button`,render:e=>(0,c.jsx)(a,{...e,children:(0,c.jsx)(o,{mode:`hover`,children:`Help`})})}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "ChoiceInput",
  render: args => <ChoiceInput {...args} />
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "ChoiceInput with help button",
  render: args => <ChoiceInput {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </ChoiceInput>
})`,...f.input.parameters?.docs?.source}}},p=[`ChoiceInputStory`,`ChoiceInputWithChildrenStory`]}));m();export{d as ChoiceInputStory,f as ChoiceInputWithChildrenStory,p as __namedExportsOrder,u as default,m as t};