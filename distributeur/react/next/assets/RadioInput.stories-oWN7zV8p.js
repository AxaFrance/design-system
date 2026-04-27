import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{R as t,M as y,r as p,H as C}from"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import{r as R}from"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";const H={component:p,title:"Components/Form/Input/Radio",args:{label:"Where are you ?",required:!0,mode:t.classic,value:"paris",classModifier:"",readOnly:!1,disabled:!1,name:"placeName",forceDisplayMessage:!0,messageType:y.error,message:"",options:[{label:"Paris",value:"paris"},{label:"Lille",value:"lille"},{label:"Madrid",value:"madrid"}]},argTypes:{onChange:{action:"onChange"},mode:{options:[t.classic,t.default,t.inline,t.cardRadio],control:{type:"inline-radio"}},value:{options:["empty","paris","lille","madrid"],mapping:{empty:""},control:{type:"inline-radio"}}}},o={name:"RadioInput",render:({value:s,...e})=>{const[l,u]=R.useState(s);return i.jsx(p,{...e,value:l,onChange:a=>{var n;u(a.target.value),(n=e.onChange)==null||n.call(e,a)}})}},r={name:"RadioInput with help button",render:({value:s,...e})=>{const[l,u]=R.useState(s);return i.jsx(p,{...e,value:l,onChange:a=>{var n;u(a.target.value),(n=e.onChange)==null||n.call(e,a)},children:i.jsx(C,{mode:"hover",children:"Help"})})}};var d,m,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "RadioInput",
  render: ({
    value,
    ...args
  }) => {
    const [newValue, setValue] = useState(value);
    return <RadioInput {...args} value={newValue} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var h,g,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "RadioInput with help button",
  render: ({
    value,
    ...args
  }) => {
    const [newValue, setValue] = useState(value);
    return <RadioInput {...args} value={newValue} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }}>
        <HelpButton mode="hover">Help</HelpButton>
      </RadioInput>;
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const M=["RadioInputStory","RadioInputWithChildrenStory"];export{o as RadioInputStory,r as RadioInputWithChildrenStory,M as __namedExportsOrder,H as default};
