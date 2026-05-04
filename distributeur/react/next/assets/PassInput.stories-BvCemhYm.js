import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{O as n,n as r,t as i,w as a}from"./iframe-B6pS4pdr.js";import{$ as o,St as s,n as c,o as l}from"./distributeur-DmtDXCQS.js";var u,d,f,p,m,h,g=t((()=>{c(),u=e(n(),1),i(),d=a(),f=r.meta({title:`Components/Form/Input/Pass`,component:o,args:{label:`Password`,helpMessage:`8 caractères minimum`,required:!0,messageType:s.error,forceDisplayMessage:!1,message:``,readOnly:!1,disabled:!1,isVisible:!0,classModifier:``,className:``,autoFocus:!0,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`,name:`password`,id:`pass-id`},argTypes:{messageType:{options:[s.error,s.success,s.warning,null],control:{type:`select`}},classModifier:{options:[`required`],control:{type:`inline-check`}},onChange:{action:`onChange`}}}),p=f.story({name:`PassInput`,render:({value:e,onChange:t,...n})=>{let[r,i]=(0,u.useState)(e),[a,s]=(0,u.useState)(0);return(0,d.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,d.jsx)(o,{...n,value:r,onChange:e=>{i(e.target.value),t&&t(e),s(Math.floor(Math.random()*5))},score:a.toString()})})}}),m=f.story({name:`PassInput with help button`,render:({value:e,onChange:t,...n})=>{let[r,i]=(0,u.useState)(e),[a,s]=(0,u.useState)(0);return(0,d.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,d.jsx)(o,{...n,value:r,onChange:e=>{i(e.target.value),t&&t(e),s(Math.floor(Math.random()*5))},score:a.toString(),children:(0,d.jsx)(l,{mode:`hover`,children:`Help`})})})}}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "PassInput",
  render: ({
    value: initValue,
    onChange,
    ...args
  }) => {
    const [value, setValue] = useState(initValue);
    const [score, setScore] = useState<number>(0);
    return <form className="af-form" name="myform">
        <PassInput {...args} value={value} onChange={e => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
        setScore(Math.floor(Math.random() * 5));
      }} score={score.toString()} />
      </form>;
  }
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "PassInput with help button",
  render: ({
    value: initValue,
    onChange,
    ...args
  }) => {
    const [value, setValue] = useState(initValue);
    const [score, setScore] = useState<number>(0);
    return <form className="af-form" name="myform">
        <PassInput {...args} value={value} onChange={e => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
        setScore(Math.floor(Math.random() * 5));
      }} score={score.toString()}>
          <HelpButton mode="hover">Help</HelpButton>
        </PassInput>
      </form>;
  }
})`,...m.input.parameters?.docs?.source}}},h=[`PassInputStory`,`PassInputWithChildrenStory`]}));g();export{p as PassInputStory,m as PassInputWithChildrenStory,h as __namedExportsOrder,f as default,g as t};