import{j as e}from"./index-C-iqcyhV.js";import{l as j}from"./FileUploadApollo-mKF1Nije.js";import{r as _}from"./index-ZnYipkzV.js";import{P as T}from"./ProgressBarGroupApollo-6eb7iByS.js";const b=({currentStepProgress:s,currentTitle:l,nbSteps:m,currentStep:u,currentSubtitle:t,className:d,ProgressBarGroupComponent:g,helper:n,message:S,messageType:x="success",titleLevel:f=2,...y})=>{const o=_.useId(),h=`h${f}`;return e.jsxs("div",{className:"af-stepper",...y,tabIndex:void 0,children:[e.jsxs("div",{className:"af-stepper__header",children:[e.jsx(h,{id:o,className:"af-stepper__title",children:l}),!!t&&e.jsx("p",{className:"af-stepper__subtitle",children:t})]}),e.jsx(g,{className:d,currentStep:u,stepsCount:m,currentStepProgress:s,"aria-labelledby":o}),!!n&&e.jsx("span",{className:"af-stepper__helper",children:n}),e.jsx(j,{message:S,messageType:x})]})},i=s=>e.jsx(b,{...s,ProgressBarGroupComponent:T}),P={component:i,title:"Components/Stepper",parameters:{layout:"centered"}},r={name:"Playground",render:s=>e.jsx("div",{style:{minWidth:"70vw"},children:e.jsx(i,{...s})}),args:{nbSteps:8,currentTitle:"Titre étape",currentStep:2,currentSubtitle:"Étape X sur X",currentStepProgress:50,message:"Titre message",helper:"Sauf mention du contraire, tous les champs sont obligatoires."},argTypes:{messageType:{control:"select",options:["error","success"]}}};var a,p,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Playground",
  render: props => <div style={{
    minWidth: "70vw"
  }}>
      <Stepper {...props} />
    </div>,
  args: {
    nbSteps: 8,
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
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const v=["Playground"],X=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:v,default:P},Symbol.toStringTag,{value:"Module"}));export{r as P,X as S};
