import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{O as n,n as r,t as i,w as a}from"./iframe-7f8DPMAL.js";import{Ct as o,gt as s,mt as c,n as l,o as u}from"./distributeur-CY_0rWpb.js";var d,f,p,m,h,g,_=t((()=>{l(),d=e(n(),1),i(),f=a(),p=r.meta({component:c,title:`Components/Form/Input/Radio`,args:{label:`Where are you ?`,required:!0,mode:s.classic,value:`paris`,classModifier:``,readOnly:!1,disabled:!1,name:`placeName`,forceDisplayMessage:!0,messageType:o.error,message:``,options:[{label:`Paris`,value:`paris`},{label:`Lille`,value:`lille`},{label:`Madrid`,value:`madrid`}]},argTypes:{onChange:{action:`onChange`},mode:{options:[s.classic,s.default,s.inline,s.cardRadio],control:{type:`inline-radio`}},value:{options:[`empty`,`paris`,`lille`,`madrid`],mapping:{empty:``},control:{type:`inline-radio`}}}}),m=p.story({name:`RadioInput`,render:({value:e,...t})=>{let[n,r]=(0,d.useState)(e);return(0,f.jsx)(c,{...t,value:n,onChange:e=>{r(e.target.value),t.onChange?.(e)}})}}),h=p.story({name:`RadioInput with help button`,render:({value:e,...t})=>{let[n,r]=(0,d.useState)(e);return(0,f.jsx)(c,{...t,value:n,onChange:e=>{r(e.target.value),t.onChange?.(e)},children:(0,f.jsx)(u,{mode:`hover`,children:`Help`})})}}),m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...h.input.parameters?.docs?.source}}},g=[`RadioInputStory`,`RadioInputWithChildrenStory`]}));_();export{m as RadioInputStory,h as RadioInputWithChildrenStory,g as __namedExportsOrder,p as default,_ as t};