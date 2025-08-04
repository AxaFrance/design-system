import{j as e}from"./index-C1mcBe1y.js";import{j as h}from"./DropdownCommon-D4v7v8fJ.js";import"./constants-NM_6GOSE.js";import{r as _}from"./index-DbaA8R3S.js";import{P as b}from"./ProgressBarGroupLF-CnFqONnZ.js";const P=({currentStepProgress:r,currentTitle:t,nbSteps:m,currentStep:l,currentSubtitle:a,className:u,ProgressBarGroupComponent:d,helper:n,message:S,titleLevel:g=2,...j})=>{const x=_.useId(),f=`h${g}`;return e.jsxs("div",{className:"af-stepper",...j,children:[e.jsxs("div",{className:"af-stepper__header",children:[e.jsx(f,{className:"af-stepper__title","aria-describedby":x,children:t}),!!a&&e.jsx("p",{className:"af-stepper__subtitle",children:a})]}),e.jsx(d,{label:t,className:u,currentStep:l,nbSteps:m,currentStepProgress:r}),!!n&&e.jsx("span",{className:"af-stepper__helper",children:n}),e.jsx(h,{message:S,messageType:"success"})]})},i=r=>e.jsx(P,{...r,ProgressBarGroupComponent:b}),y={component:i,title:"Components/Stepper",parameters:{layout:"centered"}},s={name:"Stepper",render:r=>e.jsx("div",{style:{minWidth:"70vw"},children:e.jsx(i,{...r})}),args:{currentTitle:"Titre étape",currentStep:2,currentSubtitle:"Étape X sur X",currentStepProgress:50,message:"Titre message",helper:"Sauf mention du contraire, tous les champs sont obligatoires."}};var o,p,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Stepper",
  render: props => <div style={{
    minWidth: "70vw"
  }}>
      <Stepper {...props} />
    </div>,
  args: {
    currentTitle: "Titre étape",
    currentStep: 2,
    currentSubtitle: "Étape X sur X",
    currentStepProgress: 50,
    message: "Titre message",
    helper: "Sauf mention du contraire, tous les champs sont obligatoires."
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const v=["Playground"],I=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{s as P,I as S};
