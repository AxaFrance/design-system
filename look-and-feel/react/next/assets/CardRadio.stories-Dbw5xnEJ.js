import{j as c}from"./index-C1mcBe1y.js";import{a as l}from"./FooterLF-DE92ji95.js";import"./index-DbaA8R3S.js";import{h as o}from"./home-BuLaEOyh.js";const u=[{label:"option 1",description:"description 1",subtitle:"subtitle 1",value:"1",icon:o},{label:"option 2",description:"description 2",subtitle:"subtitle 2",value:"2",icon:o},{label:"option 3",description:"description 3",subtitle:"subtitle 3",value:"3",icon:o}],m={title:"Components/Form/Radio/CardRadio",component:l,argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"],table:{defaultValue:{summary:"vertical"},type:{summary:'"vertical" | "horizontal"'}}},label:{control:"text"},description:{control:"text"},options:{control:{type:"object"},description:"Radio card options"},required:{control:"boolean"},error:{control:"text"},labelGroup:{table:{disable:!0}},descriptionGroup:{table:{disable:!0}},isRequired:{table:{disable:!0}},value:{table:{disable:!0}}},args:{type:"vertical",label:"Label",description:"Description",name:"name",options:u,required:!1,error:""}},e={name:"Playground",render:({description:r,error:t,name:i,type:a,...p})=>c.jsx(l,{...p,description:r!==""?r:void 0,error:t!==""?t:void 0,name:i!==""?i:void 0,type:a==="horizontal"?a:void 0})};var n,s,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Playground",
  render: ({
    description,
    error,
    name,
    type,
    ...args
  }) => <CardRadio {...args} description={description !== "" ? description : undefined} error={error !== "" ? error : undefined} name={name !== "" ? name : undefined} type={type === "horizontal" ? type : undefined} />
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const b=["CardRadioStory"],g=Object.freeze(Object.defineProperty({__proto__:null,CardRadioStory:e,__namedExportsOrder:b,default:m},Symbol.toStringTag,{value:"Module"}));export{g as C,e as a};
