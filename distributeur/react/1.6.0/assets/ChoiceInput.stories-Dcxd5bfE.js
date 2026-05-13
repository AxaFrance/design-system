import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-De-9TtK1.js";import{St as i,dt as a,n as o,o as s}from"./distributeur-Ct4qDp97.js";var c,l,u,d,f,p,m=e((()=>{o(),n(),c=r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=t.type().meta({title:`Components/Form/Input/Choice`,args:{name:`placeName`,required:!0,label:`Place type`,placeholder:`Paris`,messageType:i.error,forceDisplayMessage:!1,classNameContainerInput:`col-md-10`,classNameContainerLabel:`col-md-2`,message:``,id:`uniqueid`,classModifier:[],onChange:l(),isVisible:!0,readOnly:!1,disabled:!1,value:void 0},argTypes:{onChange:{action:`onChange`},classModifier:{options:[`disabled`,`required`],control:{type:`inline-check`}},value:{options:[void 0,!0,!1],control:{type:`inline-radio`}}}}),d=u.story({name:`ChoiceInput`,render:({classModifier:e,...t})=>(0,c.jsx)(a,{classModifier:e?.join(` `),...t})}),f=u.story({name:`ChoiceInput with help button`,render:({classModifier:e,...t})=>(0,c.jsx)(a,{classModifier:e?.join(` `),...t,children:(0,c.jsx)(s,{mode:`hover`,children:`Help`})})}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "ChoiceInput",
  render: ({
    classModifier,
    ...args
  }) => <ChoiceInput classModifier={classModifier?.join(" ")} {...args} />
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "ChoiceInput with help button",
  render: ({
    classModifier,
    ...args
  }) => <ChoiceInput classModifier={classModifier?.join(" ")} {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </ChoiceInput>
})`,...f.input.parameters?.docs?.source}}},p=[`ChoiceInputStory`,`ChoiceInputWithChildrenStory`]}));m();export{d as ChoiceInputStory,f as ChoiceInputWithChildrenStory,p as __namedExportsOrder,u as default,m as t};