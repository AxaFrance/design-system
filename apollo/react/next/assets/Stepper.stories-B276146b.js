import{j as e}from"./index-DK-fRI8B.js";import{g as j}from"./DropdownCommon-BCApSqtN.js";import{r as _}from"./index-DbaA8R3S.js";import{P as b}from"./ProgressBarGroupApollo-DVj6atz4.js";const P=({currentStepProgress:r,currentTitle:t,nbSteps:m,currentStep:l,currentSubtitle:a,className:u,ProgressBarGroupComponent:d,helper:n,message:S,titleLevel:g=2,...x})=>{const f=_.useId(),h=`h${g}`;return e.jsxs("div",{className:"af-stepper",...x,children:[e.jsxs("div",{className:"af-stepper__header",children:[e.jsx(h,{className:"af-stepper__title","aria-describedby":f,children:t}),!!a&&e.jsx("p",{className:"af-stepper__subtitle",children:a})]}),e.jsx(d,{label:t,className:u,currentStep:l,nbSteps:m,currentStepProgress:r}),!!n&&e.jsx("span",{className:"af-stepper__helper",children:n}),e.jsx(j,{message:S,messageType:"success"})]})},i=r=>e.jsx(P,{...r,ProgressBarGroupComponent:b}),y={component:i,title:"Components/Stepper",parameters:{layout:"centered"}},s={name:"Stepper",render:r=>e.jsx("div",{style:{minWidth:"70vw"},children:e.jsx(i,{...r})}),args:{nbSteps:8,currentTitle:"Titre étape",currentStep:2,currentSubtitle:"Étape X sur X",currentStepProgress:50,message:"Titre message",helper:"Sauf mention du contraire, tous les champs sont obligatoires."}};var p,o,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const v=["Playground"],E=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,__namedExportsOrder:v,default:y},Symbol.toStringTag,{value:"Module"}));export{s as P,E as S};
