import{j as e}from"./index-C-iqcyhV.js";import{d as _}from"./ProgressBarCommon-9RdXjFip.js";import"./TimelineVerticalLF-Mc1isiu6.js";import{r as y}from"./index-ZnYipkzV.js";import{P as T}from"./ProgressBarGroupLF-Bhoy4e6u.js";const b=({currentStepProgress:r,currentTitle:l,nbSteps:m,currentStep:u,currentSubtitle:t,className:d,ProgressBarGroupComponent:g,helper:n,message:S,messageType:x="success",titleLevel:f=2,...h})=>{const o=y.useId(),j=`h${f}`;return e.jsxs("div",{className:"af-stepper",...h,tabIndex:void 0,children:[e.jsxs("div",{className:"af-stepper__header",children:[e.jsx(j,{id:o,className:"af-stepper__title",children:l}),!!t&&e.jsx("p",{className:"af-stepper__subtitle",children:t})]}),e.jsx(g,{className:d,currentStep:u,stepsCount:m,currentStepProgress:r,"aria-labelledby":o}),!!n&&e.jsx("span",{className:"af-stepper__helper",children:n}),e.jsx(_,{message:S,messageType:x})]})},i=r=>e.jsx(b,{...r,ProgressBarGroupComponent:T}),P={component:i,title:"Components/Stepper",parameters:{layout:"centered"}},s={name:"Stepper",render:r=>e.jsx("div",{style:{minWidth:"70vw"},children:e.jsx(i,{...r})}),args:{currentTitle:"Titre étape",currentStep:2,currentSubtitle:"Étape X sur X",currentStepProgress:50,message:"Titre message",helper:"Sauf mention du contraire, tous les champs sont obligatoires."},argTypes:{messageType:{control:"select",options:["error","success"]}}};var a,p,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      control: "select",
      options: ["error", "success"]
    }
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const v=["Playground"],E=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,__namedExportsOrder:v,default:P},Symbol.toStringTag,{value:"Module"}));export{s as P,E as S};
