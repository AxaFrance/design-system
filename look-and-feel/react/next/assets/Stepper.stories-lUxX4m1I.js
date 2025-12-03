import{j as r}from"./index-C-iqcyhV.js";import"./ClickIconApollo-DAzyCCdM.js";import"./index-ZnYipkzV.js";import{S as o}from"./StepperLF-DykheNRb.js";const a={component:o,title:"Components/Stepper",parameters:{layout:"centered"}},e={name:"Stepper",render:p=>r.jsx("div",{style:{minWidth:"70vw"},children:r.jsx(o,{...p})}),args:{currentTitle:"Titre étape",currentStep:2,currentSubtitle:"Étape X sur X",currentStepProgress:50,message:"Titre message",helper:"Sauf mention du contraire, tous les champs sont obligatoires."},argTypes:{messageType:{control:"select",options:["error","success"]}}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const i=["Playground"],d=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:i,default:a},Symbol.toStringTag,{value:"Module"}));export{e as P,d as S};
