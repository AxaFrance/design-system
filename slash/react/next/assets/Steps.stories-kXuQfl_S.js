import{j as e}from"./index-DK-fRI8B.js";import{p as h}from"./Loader-XaWoVSYB.js";/* empty css              */import"./index-DbaA8R3S.js";import{f as S}from"./index-C2cC0QQF.js";const d=({children:s,id:t,title:i,className:a,classModifier:n})=>{const l=h(a,n,"af-steps-list-step");return e.jsx("li",{className:l,title:i,children:s},t)},j=({number:s,title:t,className:i="af-steps-list-step",...a})=>e.jsx(d,{className:`${i} ${s?"number":""}`,title:t,...a,children:e.jsxs("div",{className:"af-steps-list-step__label",children:[!!s&&e.jsx("div",{className:"af-steps-list-step__number",children:s}),e.jsx("div",{className:"af-steps-list-step__title",children:t})]})}),x=({className:s="on af-steps-list-step",...t})=>e.jsx(j,{className:s,...t}),b=({className:s="disabled af-steps-list-step",...t})=>e.jsx(j,{className:s,...t}),C=({id:s,href:t,number:i,title:a,className:n="past af-steps-list-step",onClick:l,...c})=>e.jsx(d,{id:s,className:`${n} ${i?"number":""}`,title:a,...c,children:e.jsxs("a",{className:"af-steps-list-step__label",href:t,onClick:r=>{r.preventDefault(),l==null||l({href:t,id:s,title:a,number:i})},children:[!!i&&e.jsx("div",{className:"af-steps-list-step__number",children:i}),e.jsx("div",{className:"af-steps-list-step__title",children:a})]})}),o=({number:s,id:t,title:i,classModifier:a,href:n,onClick:l,mode:c="link",className:r})=>{switch(c){case"link":return e.jsx(C,{id:t,href:n??"#",number:s,classModifier:a,className:r,title:i,onClick:l});case"active":return e.jsx(x,{id:t,title:i,classModifier:a,className:r,number:s});default:return e.jsx(b,{id:t,title:i,classModifier:a,className:r,number:s})}},m="af-steps-new",_=({children:s,className:t=m,classModifier:i})=>{const a=h(t,i,m);return e.jsx("div",{className:a,children:e.jsx("ol",{className:"af-steps-list",children:s})})},k={component:_,title:"Components/Steps",args:{mode:"link",onClick:S()},argTypes:{onClick:{action:"onClick"},mode:{options:["link","active","disabled"],control:{type:"select"}}}},v=s=>t=>{t.preventDefault(),s==null||s(t)},p={name:"New Design Steps",render:({classModifier:s,className:t,mode:i,onClick:a})=>e.jsxs(_,{classModifier:s,className:t,children:[e.jsx(o,{id:"id1",href:"/etape1",onClick:a,number:"1",mode:i,title:"Previous step"}),e.jsx(o,{id:"id2",href:"/etape2",number:"2",onClick:a,title:"Previous step",mode:"link"}),e.jsx(o,{id:"id3",number:"3",onClick:a,title:"Current step",mode:"active"}),e.jsx(d,{id:"idf4",title:"Un titre",children:e.jsxs("a",{className:"af-steps-list-step__label",href:"#/",onClick:v(a),children:[e.jsx("span",{className:"af-steps-list-step__number",children:e.jsx("i",{className:"glyphicon glyphicon-ok"})}),e.jsx("span",{className:"af-steps-list-step__title",children:"Custom"})]})}),e.jsx(o,{id:"id5",number:"5",title:"Final step",mode:"disabled"})]}),args:{classModifier:"",className:""}};var f,u,N;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
          <span className="af-steps-list-step__number">
            <i className="glyphicon glyphicon-ok" />
          </span>
          <span className="af-steps-list-step__title">Custom</span>
        </a>
      </StepBase>
      <Step id="id5" number="5" title="Final step" mode="disabled" />
    </Steps>,
  args: {
    classModifier: "",
    className: ""
  }
}`,...(N=(u=p.parameters)==null?void 0:u.docs)==null?void 0:N.source}}};const g=["NewStepsStory"],B=Object.freeze(Object.defineProperty({__proto__:null,NewStepsStory:p,__namedExportsOrder:g,default:k},Symbol.toStringTag,{value:"Module"}));export{p as N,B as S};
