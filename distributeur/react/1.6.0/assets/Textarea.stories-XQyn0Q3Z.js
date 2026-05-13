import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-De-9TtK1.js";import{K as a,n as o}from"./distributeur-Ct4qDp97.js";var s=t({TextareaStory:()=>f,__namedExportsOrder:()=>p,default:()=>d}),c,l,u,d,f,p,m=e((()=>{o(),r(),c=i(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=[``,`required`,`disabled`],d=n.type().meta({title:`Components/Form/Input/Textarea`,argTypes:{onChange:{action:`onChange`}},args:{onChange:l()}}),f=d.story({name:`Textarea`,render:({classModifier:e,onChange:t,...n})=>(0,c.jsx)(a,{classModifier:e.join(` `),onChange:t,...n}),args:{classModifier:[],value:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,placeholder:`Your comment`,name:`comment`,id:`TextareaStoryId`,readOnly:!1,disabled:!1,tabIndex:0,autoFocus:!1,className:``},argTypes:{classModifier:{options:u,control:{type:`multi-select`}}}}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Textarea",
  render: ({
    classModifier,
    onChange,
    ...args
  }) => <Textarea classModifier={classModifier.join(" ")} onChange={onChange} {...args} />,
  args: {
    classModifier: [] as string[],
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    placeholder: "Your comment",
    name: "comment",
    id: "TextareaStoryId",
    readOnly: false,
    disabled: false,
    tabIndex: 0,
    autoFocus: false,
    className: ""
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "multi-select"
      }
    }
  }
})`,...f.input.parameters?.docs?.source}}},p=[`TextareaStory`]}));m();export{f as TextareaStory,p as __namedExportsOrder,d as default,m as n,s as t};