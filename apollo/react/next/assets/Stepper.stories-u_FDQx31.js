import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./DateInputCommon-DXxMvEFx.js";import{r as f}from"./index-DuZrfDUH.js";import{P as h}from"./ProgressBarGroupApollo-BKs-dc-I.js";import{I as j}from"./ItemMessageCommon-CcNOd1l3.js";const _=({currentStepProgress:r,currentTitle:t,nbSteps:m,currentStep:l,currentSubtitle:a,className:u,ProgressBarGroupComponent:d,helper:n,message:S,...g})=>{const x=f.useId();return e.jsxs("div",{className:"af-stepper",...g,children:[e.jsxs("div",{className:"af-stepper__header",children:[e.jsx("h2",{className:"af-stepper__title","aria-describedby":x,children:t}),!!a&&e.jsx("p",{className:"af-stepper__subtitle",children:a})]}),e.jsx(d,{label:t,className:u,currentStep:l,nbSteps:m,currentStepProgress:r}),!!n&&e.jsx("span",{className:"af-stepper__helper",children:n}),e.jsx(j,{message:S,messageType:"success"})]})},i=r=>e.jsx(_,{...r,ProgressBarGroupComponent:h}),b={component:i,title:"Components/Stepper",parameters:{layout:"centered"}},s={name:"Stepper",render:r=>e.jsx("div",{style:{minWidth:"70vw"},children:e.jsx(i,{...r})}),args:{nbSteps:8,currentTitle:"Titre étape",currentStep:2,currentSubtitle:"Étape X sur X",currentStepProgress:50,message:"Titre message",helper:"Sauf mention du contraire, tous les champs sont obligatoires."}};var p,o,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
  }
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const P=["Playground"],I=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,__namedExportsOrder:P,default:b},Symbol.toStringTag,{value:"Module"}));export{s as P,I as S};
