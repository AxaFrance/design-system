import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as k,p as u}from"./CardData-CisLDHWb.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{f as _}from"./index-VGPHIPc6.js";const w="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M378-246%20154-470l43-43%20181%20181%20384-384%2043%2043-427%20427Z'/%3e%3c/svg%3e",M="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M530-481%20332-679l43-43%20241%20241-241%20241-43-43%20198-198Z'/%3e%3c/svg%3e",b=({children:t,id:i,title:a,className:s,classModifier:r,stateLabel:l})=>{const d=k(s,r,"af-steps-list-step"),o=l?`${a} (${l})`:a;return e.jsxs("li",{className:d,title:o,children:[e.jsx(u,{src:w}),t,e.jsx(u,{src:M})]},i)},C=({number:t,title:i,className:a="af-steps-list-step",stateLabel:s,...r})=>e.jsx(b,{className:`${a} ${t?"number":""}`,title:i+(s?` (${s})`:""),...r,children:e.jsxs("div",{className:"af-steps-list-step__label",children:[!!t&&e.jsx("div",{className:"af-steps-list-step__number",children:t}),e.jsx("div",{className:"af-steps-list-step__title",children:i})]})}),P=({className:t="on af-steps-list-step",...i})=>e.jsx(C,{className:t,...i}),F=({className:t="disabled af-steps-list-step",...i})=>e.jsx(C,{className:t,...i}),y=({id:t,href:i,number:a,title:s,className:r="past af-steps-list-step",onClick:l,...d})=>e.jsx(b,{id:t,className:`${r} ${a?"number":""}`,title:s,...d,children:e.jsxs("a",{className:"af-steps-list-step__label",href:i,onClick:o=>{l&&(o.preventDefault(),l==null||l({href:i,id:t,title:s,number:a}))},children:[!!a&&e.jsx("div",{className:"af-steps-list-step__number",children:a}),e.jsx("div",{className:"af-steps-list-step__title",children:s})]})}),n=({number:t,id:i,title:a,classModifier:s,href:r,onClick:l,mode:d="link",className:o,stateLabel:m})=>{switch(d){case"link":return e.jsx(y,{id:i,href:r??"#",number:t,classModifier:s,className:o,title:a,onClick:l,stateLabel:m||"complété"});case"active":return e.jsx(P,{id:i,title:a,classModifier:s,className:o,number:t,stateLabel:m||"en cours"});default:return e.jsx(F,{id:i,title:a,classModifier:s,className:o,number:t,stateLabel:m||"à venir"})}},S="af-steps-new",f=({children:t,className:i=S,classModifier:a})=>{const s=k(i,a,S);return e.jsx("div",{className:s,children:e.jsx("ol",{className:"af-steps-list",children:t})})},$={component:f,title:"Components/Steps/Step",args:{mode:"link",onClick:_()},argTypes:{onClick:{action:"onClick"},mode:{options:["link","active","disabled"],control:{type:"select"}}}},p={name:"Horizontal Stepper",render:({classModifier:t,className:i,mode:a,onClick:s})=>e.jsxs(f,{classModifier:t,className:i,children:[e.jsx(n,{id:"id1",href:"/etape1",onClick:s,number:"1",mode:a,title:"First Step"}),e.jsx(n,{id:"id2",href:"/etape2",number:"2",onClick:s,title:"Second step",mode:"link"}),e.jsx(n,{id:"id3",number:"3",onClick:s,title:"Current step",mode:"active"}),e.jsx(n,{id:"idf4",title:"Future Step",mode:"disabled"}),e.jsx(n,{id:"id5",title:"Final step",mode:"disabled"})]}),args:{classModifier:"",className:""}},c={name:"Final step is active",render:({classModifier:t,className:i,mode:a,onClick:s})=>e.jsxs(f,{classModifier:t,className:i,children:[e.jsx(n,{id:"id1",href:"/etape1",onClick:s,number:"1",mode:a,title:"Previous step"}),e.jsx(n,{id:"id2",href:"/etape2",number:"2",onClick:s,title:"Previous step",mode:"link"}),e.jsx(n,{id:"id3",href:"/etape3",number:"3",onClick:s,title:"Previous step",mode:"link"}),e.jsx(n,{id:"id3",href:"/etape3",number:"3",onClick:s,title:"Previous step",mode:"link"}),e.jsx(n,{id:"id5",title:"Final step",mode:"active"})]}),args:{classModifier:"",className:""}};var x,h,v;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(h=p.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var j,N,g;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(g=(N=c.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};const B=["NewStepsStory","StepsValidated"],H=Object.freeze(Object.defineProperty({__proto__:null,NewStepsStory:p,StepsValidated:c,__namedExportsOrder:B,default:$},Symbol.toStringTag,{value:"Module"}));export{p as N,H as S};
