import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i}from"./iframe-CjUrzS1v.js";import{Un as a,f as o,nn as s,t as c}from"./distributeur-BzQs3Sl2.js";var l=t({NumberInputStory:()=>f,NumberInputWithChildrenStory:()=>p,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m;function h(){return(h=e((()=>{c(),r(),u=n(),d=i.meta({title:`Components/Form/Input/Number`,component:s,args:{required:!0,value:5,placeholder:`Your name`,name:`name`,id:`nameid`,readOnly:!1,disabled:!1,autoFocus:!1,label:`Your name`,helpMessage:`Aide à la saisie`,forceDisplayMessage:!1,message:``,messageType:a.error,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`,"aria-disabled":!1}}),f=d.story({name:`NumberInput`,render:({...e})=>(0,u.jsx)(s,{...e})}),p=d.story({name:`NumberInput with help button`,render:({...e})=>(0,u.jsx)(s,{...e,hasInfobulle:!0,children:(0,u.jsx)(o,{mode:`hover`,children:`Help`})})}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "NumberInput",
  render: ({
    ...args
  }) => <NumberInput {...args} />
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "NumberInput with help button",
  render: ({
    ...args
  }) =>
  // Add a button as children to the NumberInput
  <NumberInput {...args} hasInfobulle>
      <HelpButton mode="hover">Help</HelpButton>
    </NumberInput>
})`,...p.input.parameters?.docs?.source}}},m=[`NumberInputStory`,`NumberInputWithChildrenStory`]})))()}export{l as n,h as r,f as t};