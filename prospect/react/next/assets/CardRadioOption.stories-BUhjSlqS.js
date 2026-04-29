import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./LoaderApollo-Bo1PAZ-b.js";/* empty css               */import"./index-CtOEgLBf.js";import{C as p}from"./CardRadioOptionApollo-DSODPupa.js";import{a as u}from"./account_balance-fill-CCsNGmBQ.js";import{h as f}from"./home-BuLaEOyh.js";const l={homeIcon:f,accountBalanceIcon:u,none:void 0},v={title:"Components/Form/Radio/CardRadioOption",component:p,parameters:{layout:"centered"},argTypes:{position:{control:{type:"inline-radio"},options:["vertical","horizontal"]},label:{control:"text"},description:{control:"text"},subtitle:{control:"text"},iconVariant:{control:{type:"inline-radio"},options:["icon","base picture"],if:{arg:"position",eq:"horizontal"}},icon:{control:"select",options:Object.keys(l),if:{arg:"iconVariant",eq:"icon"}},src:{if:{arg:"iconVariant",eq:"base picture"}}},args:{position:"vertical",label:"Titre",description:"Sous-titre 1",subtitle:"Sous-titre 2",name:"foo",value:"bar",isInvalid:!1,iconVariant:"icon",icon:"accountBalanceIcon",src:"https://picsum.photos/48"}},o={name:"Playground",render:({icon:t,description:n,subtitle:e,name:r,value:a,...m})=>i.jsx(p,{...m,icon:l[t??"none"],value:a!==""?a:void 0,name:r!==""?r:void 0,description:n!==""?n:void 0,subtitle:e!==""?e:void 0}),decorators:[(t,{args:n})=>i.jsx("div",{style:{width:n.position==="horizontal"?500:300},children:i.jsx(t,{})})]};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Playground",
  render: ({
    icon,
    description,
    subtitle,
    name,
    value,
    ...args
  }: ComponentProps<typeof CardRadioOption>) => <CardRadioOption {...args} icon={ICONS[icon ?? "none"]} value={value !== "" ? value : undefined} name={name !== "" ? name : undefined} description={description !== "" ? description : undefined} subtitle={subtitle !== "" ? subtitle : undefined} />,
  decorators: [(Story, {
    args
  }) => <div style={{
    width: args.position === "horizontal" ? 500 : 300
  }}>
        <Story />
      </div>]
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const y=["CardRadioOptionStory"],R=Object.freeze(Object.defineProperty({__proto__:null,CardRadioOptionStory:o,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{R as C,o as a};
