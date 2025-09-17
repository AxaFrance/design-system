import{j as n}from"./index-C1mcBe1y.js";import{c as l}from"./ToggleCommon--wKkoZ1I.js";import"./index-DbaA8R3S.js";import{h as y}from"./home-BuLaEOyh.js";import{a as f}from"./account_balance-fill-CCsNGmBQ.js";const u={homeIcon:y,accountBalanceIcon:f,none:void 0},v={title:"Components/Form/Radio/CardRadioOption",component:l,parameters:{layout:"centered"},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},label:{control:"text"},description:{control:"text"},subtitle:{control:"text"},iconVariant:{control:{type:"inline-radio"},options:["icon","base picture"],if:{arg:"type",eq:"horizontal"}},icon:{control:"select",options:Object.keys(u),if:{arg:"iconVariant",eq:"icon"}},src:{if:{arg:"iconVariant",eq:"base picture"}}},args:{type:"vertical",label:"Titre",description:"Sous-titre 1",subtitle:"Sous-titre 2",name:"foo",value:"bar",isInvalid:!1,iconVariant:"icon",icon:"accountBalanceIcon",src:"https://picsum.photos/48"}},o={name:"Playground",render:({icon:t,type:e,description:i,subtitle:r,name:a,value:s,...m})=>n.jsx(l,{...m,icon:u[t??"none"],type:e==="horizontal"?e:void 0,value:s!==""?s:void 0,name:a!==""?a:void 0,description:i!==""?i:void 0,subtitle:r!==""?r:void 0}),decorators:[(t,{args:e})=>n.jsx("div",{style:{width:e.type==="horizontal"?500:300},children:n.jsx(t,{})})]};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const b=["CardRadioOptionStory"],x=Object.freeze(Object.defineProperty({__proto__:null,CardRadioOptionStory:o,__namedExportsOrder:b,default:v},Symbol.toStringTag,{value:"Module"}));export{x as C,o as a};
