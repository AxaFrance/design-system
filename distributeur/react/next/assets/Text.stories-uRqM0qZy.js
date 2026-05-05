import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-De-9TtK1.js";import{J as a,n as o}from"./distributeur-Ct4qDp97.js";import{n as s,t as c}from"./inputTypes-IHEh6vSN.js";var l=t({TextStory:()=>m,__namedExportsOrder:()=>h,default:()=>p}),u,d,f,p,m,h,g=e((()=>{o(),r(),c(),u=i(),{fn:d}=__STORYBOOK_MODULE_TEST__,f=[``,`required`,`disabled`],p=n.type().meta({title:`Components/Form/Input/Text`,argTypes:{onChange:{action:`onChange`}},args:{onChange:d()}}),m=p.story({name:`Text`,render:({classModifier:e,onChange:t,...n})=>(0,u.jsx)(a,{classModifier:e.join(` `),onChange:t,...n}),args:{classModifier:[],value:`John Doe`,placeholder:`Your name`,name:`name`,id:`nameid`,readOnly:!1,disabled:!1,autoFocus:!1,className:``,type:`text`},argTypes:{classModifier:{options:f,control:{type:`multi-select`}},type:{options:s,control:{type:`select`}}}}),m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Text",
  render: ({
    classModifier,
    onChange,
    ...args
  }) => <Text classModifier={classModifier.join(" ")} onChange={onChange} {...args} />,
  args: {
    classModifier: [] as string[],
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    type: "text"
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "multi-select"
      }
    },
    type: {
      options: inputTypes,
      control: {
        type: "select"
      }
    }
  }
})`,...m.input.parameters?.docs?.source}}},h=[`TextStory`]}));g();export{m as TextStory,h as __namedExportsOrder,p as default,g as n,l as t};