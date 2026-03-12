import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./EditorialMessage-BmsJa9B6.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{S as d,a as t}from"./Steps-BHnT90tk.js";import{f}from"./index-VGPHIPc6.js";const k={component:d,title:"Components/Steps/Step",args:{mode:"link",onClick:f()},argTypes:{onClick:{action:"onClick"},mode:{options:["link","active","disabled"],control:{type:"select"}}}},s={name:"Horizontal Stepper",render:({classModifier:n,className:o,mode:a,onClick:i})=>e.jsxs(d,{classModifier:n,className:o,children:[e.jsx(t,{id:"id1",href:"/etape1",onClick:i,number:"1",mode:a,title:"First Step"}),e.jsx(t,{id:"id2",href:"/etape2",number:"2",onClick:i,title:"Second step",mode:"link"}),e.jsx(t,{id:"id3",number:"3",onClick:i,title:"Current step",mode:"active"}),e.jsx(t,{id:"idf4",title:"Future Step",mode:"disabled"}),e.jsx(t,{id:"id5",title:"Final step",mode:"disabled"})]}),args:{classModifier:"",className:""}},r={name:"Final step is active",render:({classModifier:n,className:o,mode:a,onClick:i})=>e.jsxs(d,{classModifier:n,className:o,children:[e.jsx(t,{id:"id1",href:"/etape1",onClick:i,number:"1",mode:a,title:"Previous step"}),e.jsx(t,{id:"id2",href:"/etape2",number:"2",onClick:i,title:"Previous step",mode:"link"}),e.jsx(t,{id:"id3",href:"/etape3",number:"3",onClick:i,title:"Previous step",mode:"link"}),e.jsx(t,{id:"id3",href:"/etape3",number:"3",onClick:i,title:"Previous step",mode:"link"}),e.jsx(t,{id:"id5",title:"Final step",mode:"active"})]}),args:{classModifier:"",className:""}};var l,p,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,S,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(S=r.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};const b=["NewStepsStory","StepsValidated"],M=Object.freeze(Object.defineProperty({__proto__:null,NewStepsStory:s,StepsValidated:r,__namedExportsOrder:b,default:k},Symbol.toStringTag,{value:"Module"}));export{s as N,M as S};
