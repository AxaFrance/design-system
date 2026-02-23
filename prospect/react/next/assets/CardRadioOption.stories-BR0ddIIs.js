import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./FieldsetApollo-BKmuo9C_.js";/* empty css               */import"./index-ZnYipkzV.js";import{C as l}from"./CardRadioOptionApollo-DT3PQgl9.js";import{h as y}from"./home-BuLaEOyh.js";import{a as f}from"./account_balance-fill-CCsNGmBQ.js";const m={homeIcon:y,accountBalanceIcon:f,none:void 0},v={title:"Components/Form/Radio/CardRadioOption",component:l,parameters:{layout:"centered"},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},label:{control:"text"},description:{control:"text"},subtitle:{control:"text"},iconVariant:{control:{type:"inline-radio"},options:["icon","base picture"],if:{arg:"type",eq:"horizontal"}},icon:{control:"select",options:Object.keys(m),if:{arg:"iconVariant",eq:"icon"}},src:{if:{arg:"iconVariant",eq:"base picture"}}},args:{type:"vertical",label:"Titre",description:"Sous-titre 1",subtitle:"Sous-titre 2",name:"foo",value:"bar",isInvalid:!1,iconVariant:"icon",icon:"accountBalanceIcon",src:"https://picsum.photos/48"}},o={name:"Playground",render:({icon:e,type:t,description:i,subtitle:r,name:a,value:s,...u})=>n.jsx(l,{...u,icon:m[e??"none"],type:t==="horizontal"?t:void 0,value:s!==""?s:void 0,name:a!==""?a:void 0,description:i!==""?i:void 0,subtitle:r!==""?r:void 0}),decorators:[(e,{args:t})=>n.jsx("div",{style:{width:t.type==="horizontal"?500:300},children:n.jsx(e,{})})]};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Playground",
  render: ({
    icon,
    type,
    description,
    subtitle,
    name,
    value,
    ...args
  }: ComponentProps<typeof CardRadioOption>) => <CardRadioOption {...args} icon={ICONS[icon ?? "none"]} type={type === "horizontal" ? type : undefined} value={value !== "" ? value : undefined} name={name !== "" ? name : undefined} description={description !== "" ? description : undefined} subtitle={subtitle !== "" ? subtitle : undefined} />,
  decorators: [(Story, {
    args
  }) => <div style={{
    width: args.type === "horizontal" ? 500 : 300
  }}>
        <Story />
      </div>]
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const b=["CardRadioOptionStory"],j=Object.freeze(Object.defineProperty({__proto__:null,CardRadioOptionStory:o,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{j as C,o as a};
