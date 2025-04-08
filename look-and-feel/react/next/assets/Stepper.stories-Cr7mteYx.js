import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as h}from"./ToggleCommon-CsfqBD2H.js";import"./constants-CvfbQXzb.js";import{r as o}from"./index-DuZrfDUH.js";const c=10,v=100,S=({currentStepProgress:r=c,currentTitle:i,nbSteps:b,currentStep:s,currentSubtitle:l,isTitleVisible:_=!0,isSubtitleVisible:f=!0,className:j,...g})=>{const n=o.useId(),p=o.useCallback(t=>t<s?v:t===s?r===0?c:r:0,[s,r]);return e.jsxs("div",{className:"af-stepper-client",...g,children:[e.jsxs("div",{children:[_&&i&&e.jsx("h2",{className:"af-stepper-client__title","aria-describedby":n,children:i}),f&&l&&e.jsx("p",{className:"af-stepper-client__subtitle",children:l})]}),e.jsx("div",{id:n,role:"group","aria-label":i,className:h("af-stepper-client__content",j),children:[...Array(b).keys()].map(t=>e.jsx("div",{className:"af-stepper-client__progressbar","aria-current":t===s,"aria-hidden":t!==s,"aria-label":`${p(t)}%`,children:e.jsx("div",{className:"af-stepper-client__progress",style:{width:`${p(t)}%`}})},`${n}-${t}`))})]})},y={component:S,title:"Components/Stepper",parameters:{layout:"centered"}},a={name:"Stepper",render:r=>e.jsx("div",{style:{minWidth:"70vw"},children:e.jsx(S,{...r})}),args:{nbSteps:3,currentTitle:"Step title",currentStep:2,currentSubtitle:"Step subtitle",currentStepProgress:50,isTitleVisible:!0,isSubtitleVisible:!0}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Stepper",
  render: props => <div style={{
    minWidth: "70vw"
  }}>
      <Stepper {...props} />
    </div>,
  args: {
    nbSteps: 3,
    currentTitle: "Step title",
    currentStep: 2,
    currentSubtitle: "Step subtitle",
    currentStepProgress: 50,
    isTitleVisible: true,
    isSubtitleVisible: true
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const P=["Playground"],T=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,__namedExportsOrder:P,default:y},Symbol.toStringTag,{value:"Module"}));export{a as P,T as S};
