import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-PYnMZM5z.js";import{b as a,t as o,y as s}from"./distributeur-BiOr3XFa.js";var c=t({NewStepsStory:()=>f,StepsValidated:()=>p,__namedExportsOrder:()=>m,default:()=>d}),l,u,d,f,p,m,h=e((()=>{o(),r(),l=i(),{fn:u}=__STORYBOOK_MODULE_TEST__,d=n.type().meta({title:`Components/Steps/Step`,args:{mode:`link`,onClick:u()},argTypes:{onClick:{action:`onClick`},mode:{options:[`link`,`active`,`disabled`],control:{type:`select`}}}}),f=d.story({name:`Horizontal Stepper`,render:({className:e,mode:t,onClick:n})=>(0,l.jsxs)(s,{className:e,children:[(0,l.jsx)(a,{id:`id1`,href:`/etape1`,onClick:n,number:`1`,mode:t,title:`First Step`}),(0,l.jsx)(a,{id:`id2`,href:`/etape2`,number:`2`,onClick:n,title:`Second step`,mode:`link`}),(0,l.jsx)(a,{id:`id3`,number:`3`,onClick:n,title:`Current step`,mode:`active`}),(0,l.jsx)(a,{id:`idf4`,title:`Future Step`,mode:`disabled`}),(0,l.jsx)(a,{id:`id5`,title:`Final step`,mode:`disabled`})]}),args:{}}),p=d.story({name:`Final step is active`,render:({className:e,mode:t,onClick:n})=>(0,l.jsxs)(s,{className:e,children:[(0,l.jsx)(a,{id:`id1`,href:`/etape1`,onClick:n,number:`1`,mode:t,title:`Previous step`}),(0,l.jsx)(a,{id:`id2`,href:`/etape2`,number:`2`,onClick:n,title:`Previous step`,mode:`link`}),(0,l.jsx)(a,{id:`id3`,href:`/etape3`,number:`3`,onClick:n,title:`Previous step`,mode:`link`}),(0,l.jsx)(a,{id:`id3`,href:`/etape3`,number:`3`,onClick:n,title:`Previous step`,mode:`link`}),(0,l.jsx)(a,{id:`id5`,title:`Final step`,mode:`active`})]}),args:{}}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Horizontal Stepper",
  render: ({
    className,
    mode,
    onClick
  }: StoryProps) => <Steps className={className}>
      <Step id="id1" href="/etape1" onClick={onClick} number="1" mode={mode} title="First Step" />
      <Step id="id2" href="/etape2" number="2" onClick={onClick} title="Second step" mode="link" />
      <Step id="id3" number="3" onClick={onClick} title="Current step" mode="active" />
      <Step id="idf4" title="Future Step" mode="disabled" />
      <Step id="id5" title="Final step" mode="disabled" />
    </Steps>,
  args: {}
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Final step is active",
  render: ({
    className,
    mode,
    onClick
  }: StoryProps) => <Steps className={className}>
      <Step id="id1" href="/etape1" onClick={onClick} number="1" mode={mode} title="Previous step" />
      <Step id="id2" href="/etape2" number="2" onClick={onClick} title="Previous step" mode="link" />
      <Step id="id3" href="/etape3" number="3" onClick={onClick} title="Previous step" mode="link" />
      <Step id="id3" href="/etape3" number="3" onClick={onClick} title="Previous step" mode="link" />
      <Step id="id5" title="Final step" mode="active" />
    </Steps>,
  args: {}
})`,...p.input.parameters?.docs?.source}}},m=[`NewStepsStory`,`StepsValidated`]}));h();export{f as NewStepsStory,p as StepsValidated,m as __namedExportsOrder,d as default,h as n,c as t};