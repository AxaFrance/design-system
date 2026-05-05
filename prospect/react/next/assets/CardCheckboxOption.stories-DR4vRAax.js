import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./jsx-runtime-CXZ2plg1.js";import{X as r,t as i}from"./prospect-DFDSrotB.js";import{n as a,t as o}from"./home-DJROtIx_.js";import{n as s,t as c}from"./account_balance-fill-iUNrElyk.js";var l=t({CardCheckboxOptionStory:()=>p,__namedExportsOrder:()=>m,default:()=>f}),u,d,f,p,m,h=e((()=>{i(),a(),s(),u=n(),d={homeIcon:o,accountBalanceIcon:c,none:void 0},f={title:`Components/Form/Checkbox/CardCheckboxOption`,component:r,parameters:{layout:`centered`},argTypes:{type:{control:{type:`inline-radio`},options:[`vertical`,`horizontal`]},label:{control:`text`},description:{control:`text`},subtitle:{control:`text`},icon:{control:`select`,options:Object.keys(d)},errorId:{table:{disable:!0}},hasError:{table:{disable:!0}}},args:{type:`vertical`,label:`Titre`,description:`Sous-titre 1`,subtitle:`Sous-titre 2`,name:`foo`,value:`bar`,icon:`accountBalanceIcon`,"aria-invalid":!1}},p={name:`Playground`,render:({icon:e=`none`,type:t,description:n,subtitle:i,name:a,value:o,...s})=>(0,u.jsx)(r,{...s,icon:d[e],type:t===`horizontal`?t:void 0,value:o===``?void 0:o,name:a===``?void 0:a,description:n===``?void 0:n,subtitle:i===``?void 0:i}),decorators:[(e,{args:t})=>(0,u.jsx)(`div`,{style:{width:t.type===`horizontal`?500:300},children:(0,u.jsx)(e,{})})]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`CardCheckboxOptionStory`]}));h();export{p as CardCheckboxOptionStory,m as __namedExportsOrder,f as default,h as n,l as t};