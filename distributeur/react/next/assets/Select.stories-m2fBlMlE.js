import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-De-9TtK1.js";import{Q as i,n as a}from"./distributeur-Ct4qDp97.js";var o,s,c,l,u,d,f=e((()=>{a(),n(),o=r(),s=[{value:`fun`,label:`For fun`},{value:`work`,label:`For work`},{value:`drink`,label:`For drink`}],c=t.type().meta({title:`Components/Form/Input/Select`,argTypes:{onChange:{action:`onChange`}}}),l=c.story({name:`Select`,tags:[`Form`,`Input`],render:({onChange:e,...t})=>(0,o.jsx)(i,{onChange:e,...t}),args:{mode:`default`,className:``,options:s,placeholder:`- Select -`,name:`name`,id:`nameid`,disabled:!1,required:!1},argTypes:{mode:{control:{type:`select`,options:[`default`,`base`]}}}}),u=c.story({...l.input,name:`Select With Children`,render:({onChange:e,...t})=>(0,o.jsxs)(i,{onChange:e,...t,children:[(0,o.jsxs)(`optgroup`,{label:`Groupe 1`,children:[(0,o.jsx)(`option`,{children:`Option 1`}),(0,o.jsx)(`option`,{children:`Option 2`})]}),(0,o.jsxs)(`optgroup`,{label:`Groupe 2`,children:[(0,o.jsx)(`option`,{children:`Option 3`}),(0,o.jsx)(`option`,{children:`Option 4`})]})]}),args:{mode:`default`,className:``,placeholder:`- Select -`,name:`name`,id:`nameid`,disabled:!1,required:!1}}),l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Select",
  tags: ["Form", "Input"],
  render: ({
    onChange,
    ...args
  }: ComponentProps<typeof Select>) => <Select onChange={onChange} {...args} />,
  args: {
    mode: "default",
    className: "",
    options,
    placeholder: "- Select -",
    name: "name",
    id: "nameid",
    disabled: false,
    required: false
  },
  argTypes: {
    mode: {
      control: {
        type: "select",
        options: ["default", "base"]
      }
    }
  }
})`,...l.input.parameters?.docs?.source}}},u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  ...SelectStory.input,
  name: "Select With Children",
  render: ({
    onChange,
    ...args
  }: ComponentProps<typeof Select>) => <Select onChange={onChange} {...args}>
      <optgroup label="Groupe 1">
        <option>Option 1</option>
        <option>Option 2</option>
      </optgroup>
      <optgroup label="Groupe 2">
        <option>Option 3</option>
        <option>Option 4</option>
      </optgroup>
    </Select>,
  args: {
    mode: "default",
    className: "",
    placeholder: "- Select -",
    name: "name",
    id: "nameid",
    disabled: false,
    required: false
  }
})`,...u.input.parameters?.docs?.source}}},d=[`SelectStory`,`SelectStoryWithChildren`]}));f();export{l as SelectStory,u as SelectStoryWithChildren,d as __namedExportsOrder,c as default,f as t};