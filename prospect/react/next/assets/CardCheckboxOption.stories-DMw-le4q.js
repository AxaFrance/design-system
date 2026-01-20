import{j as n}from"./index-C-iqcyhV.js";import{a as p}from"./FieldsetApollo-y-LFfrsI.js";import"./index-ZnYipkzV.js";import{h as b}from"./home-BuLaEOyh.js";import{a as y}from"./account_balance-fill-CCsNGmBQ.js";const u={homeIcon:b,accountBalanceIcon:y,none:void 0},h={title:"Components/Form/Checkbox/CardCheckboxOption",component:p,parameters:{layout:"centered"},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},label:{control:"text"},description:{control:"text"},subtitle:{control:"text"},icon:{control:"select",options:Object.keys(u)},errorId:{table:{disable:!0}},hasError:{table:{disable:!0}}},args:{type:"vertical",label:"Titre",description:"Sous-titre 1",subtitle:"Sous-titre 2",name:"foo",value:"bar",icon:"accountBalanceIcon","aria-invalid":!1}},e={name:"Playground",render:({icon:t="none",type:o,description:r,subtitle:a,name:i,value:s,...m})=>n.jsx(p,{...m,icon:u[t],type:o==="horizontal"?o:void 0,value:s!==""?s:void 0,name:i!==""?i:void 0,description:r!==""?r:void 0,subtitle:a!==""?a:void 0}),decorators:[(t,{args:o})=>n.jsx("div",{style:{width:o.type==="horizontal"?500:300},children:n.jsx(t,{})})]};var c,d,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Playground",
  render: ({
    icon = "none",
    type,
    description,
    subtitle,
    name,
    value,
    ...args
  }) => <CardCheckboxOption {...args} icon={ICONS[icon]} type={type === "horizontal" ? type : undefined} value={value !== "" ? value : undefined} name={name !== "" ? name : undefined} description={description !== "" ? description : undefined} subtitle={subtitle !== "" ? subtitle : undefined} />,
  decorators: [(Story, {
    args
  }) => <div style={{
    width: args.type === "horizontal" ? 500 : 300
  }}>
        <Story />
      </div>]
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const v=["CardCheckboxOptionStory"],g=Object.freeze(Object.defineProperty({__proto__:null,CardCheckboxOptionStory:e,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{g as C,e as a};
