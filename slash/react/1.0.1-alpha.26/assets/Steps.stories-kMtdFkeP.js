import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{f as d}from"./index-C_FWhylE.js";import{S as p,c as n,d as m}from"./BooleanModal-pE4A6u79.js";const f={component:p,title:"Components/Steps",args:{mode:"link",onClick:d()},argTypes:{onClick:{action:"onClick"},mode:{options:["link","active","disabled"],control:{type:"select"}}}},u=s=>i=>{i.preventDefault(),s==null||s(i)},t={name:"New Design Steps",render:({classModifier:s,className:i,mode:c,onClick:a})=>e.jsxs(p,{classModifier:s,className:i,children:[e.jsx(n,{id:"id1",href:"/etape1",onClick:a,number:"1",mode:c,title:"Previous step"}),e.jsx(n,{id:"id2",href:"/etape2",number:"2",onClick:a,title:"Previous step",mode:"link"}),e.jsx(n,{id:"id3",number:"3",onClick:a,title:"Current step",mode:"active"}),e.jsx(m,{id:"idf4",title:"Un titre",children:e.jsxs("a",{className:"af-steps-list-step__label",href:"#/",onClick:u(a),children:[e.jsx("span",{className:"af-steps-list-step__number",children:e.jsx("i",{className:"glyphicon glyphicon-ok"})}),e.jsx("span",{className:"af-steps-list-step__title",children:"Custom"})]})}),e.jsx(n,{id:"id5",number:"5",title:"Final step",mode:"disabled"})]}),args:{classModifier:"",className:""}};var l,r,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const S=["NewStepsStory"],_=Object.freeze(Object.defineProperty({__proto__:null,NewStepsStory:t,__namedExportsOrder:S,default:f},Symbol.toStringTag,{value:"Module"}));export{t as N,_ as S};
