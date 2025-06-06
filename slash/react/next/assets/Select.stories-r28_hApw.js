import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as a}from"./Loader-CimcINoe.js";/* empty css              */import"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{f as m}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const u=[{value:"fun",label:"For fun"},{value:"work",label:"For work"},{value:"drink",label:"For drink"}],j={component:a,title:"Components/Form/Input/Select",argTypes:{onChange:{action:"onChange"}},args:{onChange:m()}},n={name:"Select",tags:["Form","Input"],render:({onChange:r,...t})=>e.jsx(a,{onChange:r,...t}),args:{mode:"default",className:"",options:u,placeholder:"- Select -",name:"name",id:"nameid",disabled:!1,required:!1},argTypes:{mode:{control:{type:"select",options:["default","base"]}}}},o={...n,name:"Select With Children",render:({onChange:r,...t})=>e.jsxs(a,{onChange:r,...t,children:[e.jsxs("optgroup",{label:"Groupe 1",children:[e.jsx("option",{children:"Option 1"}),e.jsx("option",{children:"Option 2"})]}),e.jsxs("optgroup",{label:"Groupe 2",children:[e.jsx("option",{children:"Option 3"}),e.jsx("option",{children:"Option 4"})]})]}),args:{mode:"default",className:"",placeholder:"- Select -",name:"name",id:"nameid",disabled:!1,required:!1}};var l,s,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var i,d,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...SelectStory,
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
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const O=["SelectStory","SelectStoryWithChildren"];export{n as SelectStory,o as SelectStoryWithChildren,O as __namedExportsOrder,j as default};
