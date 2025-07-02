import{j as s}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{p as S}from"./Loader-C3tQB3_-.js";import"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{f as h}from"./index-28pPPJTf.js";const d=({children:e,id:t,title:i,className:a,classModifier:n})=>{const l=S(a,n,"af-steps-list-step");return s.jsx("li",{className:l,title:i,children:e},t)},j=({number:e,title:t,className:i="af-steps-list-step",...a})=>s.jsx(d,{className:`${i} ${e?"number":""}`,title:t,...a,children:s.jsxs("div",{className:"af-steps-list-step__label",children:[!!e&&s.jsx("div",{className:"af-steps-list-step__number",children:e}),s.jsx("div",{className:"af-steps-list-step__title",children:t})]})}),x=({className:e="on af-steps-list-step",...t})=>s.jsx(j,{className:e,...t}),C=({className:e="disabled af-steps-list-step",...t})=>s.jsx(j,{className:e,...t}),v=({id:e,href:t,number:i,title:a,className:n="past af-steps-list-step",onClick:l,...c})=>s.jsx(d,{id:e,className:`${n} ${i?"number":""}`,title:a,...c,children:s.jsxs("a",{className:"af-steps-list-step__label",href:t,onClick:r=>{r.preventDefault(),l==null||l({href:t,id:e,title:a,number:i})},children:[!!i&&s.jsx("div",{className:"af-steps-list-step__number",children:i}),s.jsx("div",{className:"af-steps-list-step__title",children:a})]})}),p=({number:e,id:t,title:i,classModifier:a,href:n,onClick:l,mode:c="link",className:r})=>{switch(c){case"link":return s.jsx(v,{id:t,href:n??"#",number:e,classModifier:a,className:r,title:i,onClick:l});case"active":return s.jsx(x,{id:t,title:i,classModifier:a,className:r,number:e});default:return s.jsx(C,{id:t,title:i,classModifier:a,className:r,number:e})}},m="af-steps-new",_=({children:e,className:t=m,classModifier:i})=>{const a=S(t,i,m);return s.jsx("div",{className:a,children:s.jsx("ol",{className:"af-steps-list",children:e})})},b={component:_,title:"Components/Steps",args:{mode:"link",onClick:h()},argTypes:{onClick:{action:"onClick"},mode:{options:["link","active","disabled"],control:{type:"select"}}}},k=e=>t=>{t.preventDefault(),e==null||e(t)},o={name:"New Design Steps",render:({classModifier:e,className:t,mode:i,onClick:a})=>s.jsxs(_,{classModifier:e,className:t,children:[s.jsx(p,{id:"id1",href:"/etape1",onClick:a,number:"1",mode:i,title:"Previous step"}),s.jsx(p,{id:"id2",href:"/etape2",number:"2",onClick:a,title:"Previous step",mode:"link"}),s.jsx(p,{id:"id3",number:"3",onClick:a,title:"Current step",mode:"active"}),s.jsx(d,{id:"idf4",title:"Un titre",children:s.jsx("a",{className:"af-steps-list-step__label",href:"#/",onClick:k(a),children:s.jsx("span",{className:"af-steps-list-step__title",children:"Custom"})})}),s.jsx(p,{id:"id5",title:"Final step",mode:"disabled"})]}),args:{classModifier:"",className:""}};var f,u,N;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "New Design Steps",
  render: ({
    classModifier,
    className,
    mode,
    onClick
  }: StoryProps) => <Steps classModifier={classModifier} className={className}>
      <Step id="id1" href="/etape1" onClick={onClick} number="1" mode={mode} title="Previous step" />
      <Step id="id2" href="/etape2" number="2" onClick={onClick} title="Previous step" mode="link" />
      <Step id="id3" number="3" onClick={onClick} title="Current step" mode="active" />
      <StepBase id="idf4" title="Un titre">
        <a className="af-steps-list-step__label" href="#/" onClick={withPreventDefaultClick(onClick)}>
          <span className="af-steps-list-step__title">Custom</span>
        </a>
      </StepBase>
      <Step id="id5" title="Final step" mode="disabled" />
    </Steps>,
  args: {
    classModifier: "",
    className: ""
  }
}`,...(N=(u=o.parameters)==null?void 0:u.docs)==null?void 0:N.source}}};const g=["NewStepsStory"],$=Object.freeze(Object.defineProperty({__proto__:null,NewStepsStory:o,__namedExportsOrder:g,default:b},Symbol.toStringTag,{value:"Module"}));export{o as N,$ as S};
