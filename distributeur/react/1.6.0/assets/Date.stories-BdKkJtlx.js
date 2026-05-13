import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-De-9TtK1.js";import{n as i,ut as a}from"./distributeur-Ct4qDp97.js";var o,s,c,l,u,d,f,p=e((()=>{i(),n(),o=r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=[``,`required`,`disabled`],l={name:`birthDate`,id:`uniqueid`,value:new Date(`01/01/2024`)},u=t.type().meta({title:`Components/Form/Input/Date`,argTypes:{onChange:{action:`onChange`}},args:{onChange:s()}}),d=u.story({name:`Date`,tags:[`Form`,`Input`],render:({classModifier:e,onChange:t,...n})=>(0,o.jsx)(a,{classModifier:e.join(` `),onChange:t,...n}),args:{...l,classModifier:[]},argTypes:{classModifier:{options:c}}}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Date",
  tags: ["Form", "Input"],
  render: ({
    classModifier,
    onChange,
    ...args
  }) => <DateComponent classModifier={classModifier.join(" ")} onChange={onChange} {...args} />,
  args: {
    ...commonProps,
    classModifier: [] as string[]
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS
    }
  }
})`,...d.input.parameters?.docs?.source}}},f=[`DateStory`]}));p();export{d as DateStory,f as __namedExportsOrder,u as default,p as t};