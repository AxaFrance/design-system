import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-B6pS4pdr.js";import{_ as a,g as o,n as s}from"./distributeur-DmtDXCQS.js";var c=t({NewStepsStory:()=>f,StepsValidated:()=>p,__namedExportsOrder:()=>m,default:()=>d}),l,u,d,f,p,m,h=e((()=>{s(),r(),l=i(),{fn:u}=__STORYBOOK_MODULE_TEST__,d=n.meta({component:o,title:`Components/Steps/Step`,args:{mode:`link`,onClick:u()},argTypes:{onClick:{action:`onClick`},mode:{options:[`link`,`active`,`disabled`],control:{type:`select`}}}}),f=d.story({name:`Horizontal Stepper`,render:({classModifier:e,className:t,mode:n,onClick:r})=>(0,l.jsxs)(o,{classModifier:e,className:t,children:[(0,l.jsx)(a,{id:`id1`,href:`/etape1`,onClick:r,number:`1`,mode:n,title:`First Step`}),(0,l.jsx)(a,{id:`id2`,href:`/etape2`,number:`2`,onClick:r,title:`Second step`,mode:`link`}),(0,l.jsx)(a,{id:`id3`,number:`3`,onClick:r,title:`Current step`,mode:`active`}),(0,l.jsx)(a,{id:`idf4`,title:`Future Step`,mode:`disabled`}),(0,l.jsx)(a,{id:`id5`,title:`Final step`,mode:`disabled`})]}),args:{classModifier:``,className:``}}),p=d.story({name:`Final step is active`,render:({classModifier:e,className:t,mode:n,onClick:r})=>(0,l.jsxs)(o,{classModifier:e,className:t,children:[(0,l.jsx)(a,{id:`id1`,href:`/etape1`,onClick:r,number:`1`,mode:n,title:`Previous step`}),(0,l.jsx)(a,{id:`id2`,href:`/etape2`,number:`2`,onClick:r,title:`Previous step`,mode:`link`}),(0,l.jsx)(a,{id:`id3`,href:`/etape3`,number:`3`,onClick:r,title:`Previous step`,mode:`link`}),(0,l.jsx)(a,{id:`id3`,href:`/etape3`,number:`3`,onClick:r,title:`Previous step`,mode:`link`}),(0,l.jsx)(a,{id:`id5`,title:`Final step`,mode:`active`})]}),args:{classModifier:``,className:``}}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Horizontal Stepper",
  render: ({
    classModifier,
    className,
    mode,
    onClick
  }: StoryProps) => <Steps classModifier={classModifier} className={className}>
      <Step id="id1" href="/etape1" onClick={onClick} number="1" mode={mode} title="First Step" />
      <Step id="id2" href="/etape2" number="2" onClick={onClick} title="Second step" mode="link" />
      <Step id="id3" number="3" onClick={onClick} title="Current step" mode="active" />
      <Step id="idf4" title="Future Step" mode="disabled" />
      <Step id="id5" title="Final step" mode="disabled" />
    </Steps>,
  args: {
    classModifier: "",
    className: ""
  }
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Final step is active",
  render: ({
    classModifier,
    className,
    mode,
    onClick
  }: StoryProps) => <Steps classModifier={classModifier} className={className}>
      <Step id="id1" href="/etape1" onClick={onClick} number="1" mode={mode} title="Previous step" />
      <Step id="id2" href="/etape2" number="2" onClick={onClick} title="Previous step" mode="link" />
      <Step id="id3" href="/etape3" number="3" onClick={onClick} title="Previous step" mode="link" />
      <Step id="id3" href="/etape3" number="3" onClick={onClick} title="Previous step" mode="link" />
      <Step id="id5" title="Final step" mode="active" />
    </Steps>,
  args: {
    classModifier: "",
    className: ""
  }
})`,...p.input.parameters?.docs?.source}}},m=[`NewStepsStory`,`StepsValidated`]}));h();export{f as NewStepsStory,p as StepsValidated,m as __namedExportsOrder,d as default,h as n,c as t};