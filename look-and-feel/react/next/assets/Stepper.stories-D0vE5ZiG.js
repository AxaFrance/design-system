import{j as e}from"./index-C1mcBe1y.js";import{j as _}from"./ToggleCommon-U5V52PRy.js";import"./constants-C3zkB7CW.js";import{r as y}from"./index-DbaA8R3S.js";import{P as T}from"./ProgressBarGroupLF-CdjniUkq.js";const b=({currentStepProgress:r,currentTitle:t,nbSteps:l,currentStep:m,currentSubtitle:a,className:u,ProgressBarGroupComponent:d,helper:o,message:g,messageType:S="success",titleLevel:j=2,...x})=>{const f=y.useId(),h=`h${j}`;return e.jsxs("div",{className:"af-stepper",...x,children:[e.jsxs("div",{className:"af-stepper__header",children:[e.jsx(h,{className:"af-stepper__title","aria-describedby":f,children:t}),!!a&&e.jsx("p",{className:"af-stepper__subtitle",children:a})]}),e.jsx(d,{label:t,className:u,currentStep:m,nbSteps:l,currentStepProgress:r}),!!o&&e.jsx("span",{className:"af-stepper__helper",children:o}),e.jsx(_,{message:g,messageType:S})]})},i=r=>e.jsx(b,{...r,ProgressBarGroupComponent:T}),P={component:i,title:"Components/Stepper",parameters:{layout:"centered"}},s={name:"Stepper",render:r=>e.jsx("div",{style:{minWidth:"70vw"},children:e.jsx(i,{...r})}),args:{currentTitle:"Titre étape",currentStep:2,currentSubtitle:"Étape X sur X",currentStepProgress:50,message:"Titre message",helper:"Sauf mention du contraire, tous les champs sont obligatoires."},argTypes:{messageType:{control:"select",options:["error","success"]}}};var p,n,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
  },
  argTypes: {
    messageType: {
      control: 'select',
      options: ['error', 'success']
    }
  }
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const v=["Playground"],O=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,__namedExportsOrder:v,default:P},Symbol.toStringTag,{value:"Module"}));export{s as P,O as S};
