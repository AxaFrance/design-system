import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import{g as k,p as u}from"./CardData-BlwwpXkm.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{f as b}from"./index-VGPHIPc6.js";const _="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M530-481%20332-679l43-43%20241%20241-241%20241-43-43%20198-198Z'/%3e%3c/svg%3e",w="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M378-246%20154-470l43-43%20181%20181%20384-384%2043%2043-427%20427Z'/%3e%3c/svg%3e",m=({children:s,id:t,title:a,className:i,classModifier:r})=>{const n=k(i,r,"af-steps-list-step");return e.jsxs("li",{className:n,title:a,children:[e.jsx(u,{src:w}),s,e.jsx(u,{src:_})]},t)},C=({number:s,title:t,className:a="af-steps-list-step",...i})=>e.jsx(m,{className:`${a} ${s?"number":""}`,title:t,...i,children:e.jsxs("div",{className:"af-steps-list-step__label",children:[!!s&&e.jsx("div",{className:"af-steps-list-step__number",children:s}),e.jsx("div",{className:"af-steps-list-step__title",children:t})]})}),P=({className:s="on af-steps-list-step",...t})=>e.jsx(C,{className:s,...t}),M=({className:s="disabled af-steps-list-step",...t})=>e.jsx(C,{className:s,...t}),y=({id:s,href:t,number:a,title:i,className:r="past af-steps-list-step",onClick:n,...c})=>e.jsx(m,{id:s,className:`${r} ${a?"number":""}`,title:i,...c,children:e.jsxs("a",{className:"af-steps-list-step__label",href:t,onClick:o=>{o.preventDefault(),n==null||n({href:t,id:s,title:i,number:a})},children:[!!a&&e.jsx("div",{className:"af-steps-list-step__number",children:a}),e.jsx("div",{className:"af-steps-list-step__title",children:i})]})}),l=({number:s,id:t,title:a,classModifier:i,href:r,onClick:n,mode:c="link",className:o})=>{switch(c){case"link":return e.jsx(y,{id:t,href:r??"#",number:s,classModifier:i,className:o,title:a,onClick:n});case"active":return e.jsx(P,{id:t,title:a,classModifier:i,className:o,number:s});default:return e.jsx(M,{id:t,title:a,classModifier:i,className:o,number:s})}},h="af-steps-new",f=({children:s,className:t=h,classModifier:a})=>{const i=k(t,a,h);return e.jsx("div",{className:i,children:e.jsx("ol",{className:"af-steps-list",children:s})})},B={component:f,title:"Components/Steps/Step",args:{mode:"link",onClick:b()},argTypes:{onClick:{action:"onClick"},mode:{options:["link","active","disabled"],control:{type:"select"}}}},D=s=>t=>{t.preventDefault(),s==null||s(t)},p={name:"New Design Steps",render:({classModifier:s,className:t,mode:a,onClick:i})=>e.jsxs(f,{classModifier:s,className:t,children:[e.jsx(l,{id:"id1",href:"/etape1",onClick:i,number:"1",mode:a,title:"Previous step"}),e.jsx(l,{id:"id2",href:"/etape2",number:"2",onClick:i,title:"Previous step",mode:"link"}),e.jsx(l,{id:"id3",number:"3",onClick:i,title:"Current step",mode:"active"}),e.jsx(m,{id:"idf4",title:"Un titre",children:e.jsx("a",{className:"af-steps-list-step__label",href:"#/",onClick:D(i),children:e.jsx("span",{className:"af-steps-list-step__title",children:"Custom"})})}),e.jsx(l,{id:"id5",title:"Final step",mode:"disabled"})]}),args:{classModifier:"",className:""}},d={render:({classModifier:s,className:t,mode:a,onClick:i})=>e.jsxs(f,{classModifier:s,className:t,children:[e.jsx(l,{id:"id1",href:"/etape1",onClick:i,number:"1",mode:a,title:"Previous step"}),e.jsx(l,{id:"id2",href:"/etape2",number:"2",onClick:i,title:"Previous step",mode:"link"}),e.jsx(l,{id:"id3",href:"/etape3",number:"3",onClick:i,title:"Previous step",mode:"link"}),e.jsx(l,{id:"id3",href:"/etape3",number:"3",onClick:i,title:"Previous step",mode:"link"}),e.jsx(l,{id:"id5",title:"Final step",mode:"active"})]}),args:{classModifier:"",className:""}};var S,v,x;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(v=p.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var N,j,g;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(g=(j=d.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};const F=["NewStepsStory","StepsValidated"],V=Object.freeze(Object.defineProperty({__proto__:null,NewStepsStory:p,StepsValidated:d,__namedExportsOrder:F,default:B},Symbol.toStringTag,{value:"Module"}));export{p as N,V as S};
