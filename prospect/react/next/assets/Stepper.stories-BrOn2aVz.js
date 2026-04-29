import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./LoaderApollo-D0xkpJcZ.js";/* empty css               */import"./index-CtOEgLBf.js";import{S as o}from"./StepperApollo-DGR-DRkd.js";const p={component:o,title:"Components/Stepper",parameters:{layout:"centered"}},e={name:"Playground",render:a=>r.jsx("div",{style:{minWidth:"70vw"},children:r.jsx(o,{...a})}),args:{nbSteps:8,currentTitle:"Titre étape",currentStep:2,currentSubtitle:"Étape X sur X",currentStepProgress:50,message:"Titre message",helper:"Sauf mention du contraire, tous les champs sont obligatoires."},argTypes:{messageType:{control:"select",options:["error","success"]}}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const i=["Playground"],g=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:i,default:p},Symbol.toStringTag,{value:"Module"}));export{e as P,g as S};
