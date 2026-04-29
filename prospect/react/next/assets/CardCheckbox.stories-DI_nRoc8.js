import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{C as s,i as x}from"./LoaderApollo-CXqQjhZl.js";/* empty css               */import"./index-CtOEgLBf.js";import{h as a}from"./home-BuLaEOyh.js";const C=[{label:"option 1",description:"description 1",subtitle:"subtitle 1",value:"1",icon:a},{label:"option 2",description:"description 2",subtitle:"subtitle 2",value:"2",icon:a},{label:"option 3",description:"description 3",subtitle:"subtitle 3",value:"3",icon:a}],y={title:"Components/Form/Checkbox/CardCheckbox",component:s,argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"],table:{defaultValue:{summary:"vertical"},type:{summary:'"vertical" | "horizontal"'}}},label:{control:"text"},description:{control:"text"},options:{control:{type:"object"},description:"Radio card options"},required:{control:"boolean"},error:{control:"text"},labelGroup:{table:{disable:!0}},descriptionGroup:{table:{disable:!0}},isRequired:{table:{disable:!0}},value:{table:{disable:!0}},messageType:{options:Object.values(x),control:{type:"select"}}},args:{type:"vertical",label:"Label",description:"Description",name:"name",options:C,required:!1,messageType:"",message:""}},r={name:"Playground",render:({description:e,name:o,type:t,...i})=>m.jsx(s,{...i,description:e!==""?e:void 0,name:o!==""?o:void 0,type:t==="horizontal"?t:void 0})},h=[{label:"option 1",description:"description 1",subtitle:"subtitle 1",value:"1"},{label:"option 2",value:"2"},{label:"option 3",value:"3"}],n={name:"Card CheckboxText",render:({description:e,name:o,type:t,...i})=>m.jsx(s,{...i,description:e!==""?e:void 0,name:o!==""?o:void 0,type:t==="horizontal"?t:void 0,mode:"text",options:h})};var d,l,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Playground",
  render: ({
    description,
    name,
    type,
    ...args
  }) => <CardCheckbox {...args} description={description !== "" ? description : undefined} name={name !== "" ? name : undefined} type={type === "horizontal" ? type : undefined} />
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,u,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Card CheckboxText",
  render: ({
    description,
    name,
    type,
    ...args
  }) => <CardCheckbox {...args} description={description !== "" ? description : undefined} name={name !== "" ? name : undefined} type={type === "horizontal" ? type : undefined} mode="text" options={optionsCheckboxText} />
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const v=["CardCheckboxStory","CardCheckboxTextStory"],j=Object.freeze(Object.defineProperty({__proto__:null,CardCheckboxStory:r,CardCheckboxTextStory:n,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{j as C,r as a,n as b};
