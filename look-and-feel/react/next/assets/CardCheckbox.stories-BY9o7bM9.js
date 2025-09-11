import{j as p}from"./index-C1mcBe1y.js";import{C as d}from"./ToggleCommon-DQghTiWI.js";import"./index-DbaA8R3S.js";import{h as o}from"./home-BuLaEOyh.js";const u=[{label:"option 1",description:"description 1",subtitle:"subtitle 1",value:"1",icon:o},{label:"option 2",description:"description 2",subtitle:"subtitle 2",value:"2",icon:o},{label:"option 3",description:"description 3",subtitle:"subtitle 3",value:"3",icon:o}],b={title:"Components/Form/Checkbox/CardCheckbox",component:d,argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"],table:{defaultValue:{summary:"vertical"},type:{summary:'"vertical" | "horizontal"'}}},label:{control:"text"},description:{control:"text"},options:{control:{type:"object"},description:"Radio card options"},required:{control:"boolean"},error:{control:"text"},labelGroup:{table:{disable:!0}},descriptionGroup:{table:{disable:!0}},isRequired:{table:{disable:!0}},value:{table:{disable:!0}}},args:{type:"vertical",label:"Label",description:"Description",name:"name",options:u,required:!1,error:""}},e={name:"Playground",render:({description:r,error:t,name:i,type:n,...c})=>p.jsx(d,{...c,description:r!==""?r:void 0,error:t!==""?t:void 0,name:i!==""?i:void 0,type:n==="horizontal"?n:void 0})};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Playground",
  render: ({
    description,
    error,
    name,
    type,
    ...args
  }) => <CardCheckbox {...args} description={description !== "" ? description : undefined} error={error !== "" ? error : undefined} name={name !== "" ? name : undefined} type={type === "horizontal" ? type : undefined} />
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const m=["CardCheckboxStory"],h=Object.freeze(Object.defineProperty({__proto__:null,CardCheckboxStory:e,__namedExportsOrder:m,default:b},Symbol.toStringTag,{value:"Module"}));export{h as C,e as a};
