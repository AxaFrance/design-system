import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i}from"./iframe-DBecIi7S.js";import{en as a,t as o}from"./distributeur-wY98V-UD.js";var s=t({SelectStory:()=>d,SelectStoryWithChildren:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{o(),r(),c=n(),l=[{value:`fun`,label:`For fun`},{value:`work`,label:`For work`},{value:`drink`,label:`For drink`}].map(({value:e,label:t})=>(0,c.jsx)(`option`,{value:e,children:t},e)),u=i.type().meta({title:`Components/Form/Input/Select`,argTypes:{onChange:{action:`onChange`}}}),d=u.story({name:`Select`,tags:[`Form`,`Input`],render:({onChange:e,...t})=>(0,c.jsx)(a,{onChange:e,...t,children:l}),args:{mode:`default`,className:``,placeholder:`- Select -`,name:`name`,id:`nameid`,disabled:!1,required:!1},argTypes:{mode:{control:{type:`select`,options:[`default`,`base`]}}}}),f=u.story({...d.input,name:`Select With Children`,render:({onChange:e,...t})=>(0,c.jsxs)(a,{onChange:e,...t,children:[(0,c.jsxs)(`optgroup`,{label:`Groupe 1`,children:[(0,c.jsx)(`option`,{children:`Option 1`}),(0,c.jsx)(`option`,{children:`Option 2`})]}),(0,c.jsxs)(`optgroup`,{label:`Groupe 2`,children:[(0,c.jsx)(`option`,{children:`Option 3`}),(0,c.jsx)(`option`,{children:`Option 4`})]})]}),args:{mode:`default`,className:``,placeholder:`- Select -`,name:`name`,id:`nameid`,disabled:!1,required:!1}}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Select",
  tags: ["Form", "Input"],
  render: ({
    onChange,
    ...args
  }: ComponentProps<typeof Select>) => <Select onChange={onChange} {...args}>
      {optionsChildren}
    </Select>,
  args: {
    mode: "default",
    className: "",
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
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...f.input.parameters?.docs?.source}}},p=[`SelectStory`,`SelectStoryWithChildren`]})))()}export{m as i,f as n,s as r,d as t};