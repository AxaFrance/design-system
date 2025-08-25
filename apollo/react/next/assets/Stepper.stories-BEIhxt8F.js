import{j as e}from"./index-C1mcBe1y.js";import{k as _}from"./FooterApollo-C1lvlZhO.js";import{r as b}from"./index-DbaA8R3S.js";import{P as y}from"./ProgressBarGroupApollo-DOWhLIoV.js";const T=({currentStepProgress:s,currentTitle:t,nbSteps:l,currentStep:m,currentSubtitle:a,className:u,ProgressBarGroupComponent:d,helper:o,message:g,messageType:S="success",titleLevel:x=2,...f})=>{const h=b.useId(),j=`h${x}`;return e.jsxs("div",{className:"af-stepper",...f,children:[e.jsxs("div",{className:"af-stepper__header",children:[e.jsx(j,{className:"af-stepper__title","aria-describedby":h,children:t}),!!a&&e.jsx("p",{className:"af-stepper__subtitle",children:a})]}),e.jsx(d,{label:t,className:u,currentStep:m,nbSteps:l,currentStepProgress:s}),!!o&&e.jsx("span",{className:"af-stepper__helper",children:o}),e.jsx(_,{message:g,messageType:S})]})},i=s=>e.jsx(T,{...s,ProgressBarGroupComponent:y}),P={component:i,title:"Components/Stepper",parameters:{layout:"centered"}},r={name:"Stepper",render:s=>e.jsx("div",{style:{minWidth:"70vw"},children:e.jsx(i,{...s})}),args:{nbSteps:8,currentTitle:"Titre étape",currentStep:2,currentSubtitle:"Étape X sur X",currentStepProgress:50,message:"Titre message",helper:"Sauf mention du contraire, tous les champs sont obligatoires."},argTypes:{messageType:{control:"select",options:["error","success"]}}};var p,n,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Stepper",
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
      control: 'select',
      options: ['error', 'success']
    }
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const v=["Playground"],I=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:v,default:P},Symbol.toStringTag,{value:"Module"}));export{r as P,I as S};
