import{j as t}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{t as p,u as n,I as h,s as I,a as F}from"./Loader-DKCOs5NC.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";const f="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M121-120v-128l616-616%20128%20128-616%20616H121Zm618-577%2040-40-41-41-40%2040%2041%2041Z'/%3e%3c/svg%3e",O="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M160-80v-554h130v-96q0-78.85%2055.61-134.42Q401.21-920%20480.11-920q78.89%200%20134.39%2055.58Q670-808.85%20670-730v96h130v554H160Zm320.17-200q31.83%200%2054.33-22.03T557-355q0-30-22.67-54.5t-54.5-24.5q-31.83%200-54.33%2024.5t-22.5%2055q0%2030.5%2022.67%2052.5t54.5%2022ZM350-634h260v-96q0-54.17-37.88-92.08-37.88-37.92-92-37.92T388-822.08q-38%2037.91-38%2092.08v96Z'/%3e%3c/svg%3e",e="af-vertical-step",c=({title:m,id:$,stepMode:u,editButtonLabel:N="Modifier",editButtonAriaLabel:W=`Modifier l'étape ${m}`,onEdit:_,form:B,restitution:L,showRestitution:Z=!0})=>{const s=u==="edited",d=u==="validated",g=u==="locked";return t.jsxs("div",{className:p(e,{[`${e}--edition`]:s}),children:[t.jsxs("div",{className:p("af-vertical-step-icon",{[`${e}-icon--validated`]:d,[`${e}-icon--locked`]:g,[`${e}-icon--edited`]:s}),children:[d?t.jsx(n,{role:"presentation",src:h}):null,g?t.jsx(n,{role:"presentation",src:O}):null,s?t.jsx(n,{role:"presentation",src:f}):null]}),t.jsx(I,{className:p("af-title",`${e}-title`),id:$,contentLeft:d?t.jsxs(F,{"aria-label":W,onClick:_,className:"af-vertical-step-title-button",children:[t.jsx(n,{role:"presentation",src:f}),N]}):void 0,children:m}),s?t.jsx("section",{children:B}):null,d&&Z?t.jsx("section",{children:L}):null,s?t.jsx("div",{className:p(`${e}-icon ${e}-icon--lastIcon`),children:t.jsx(n,{role:"presentation",src:h})}):null]})},H={title:"Components/Steps/VerticalStep",component:c},i={name:"Test composant VerticalStep bloqué",args:{title:"Configuration",id:"configuration",stepMode:"locked",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},o={name:"Test composant VerticalStep en édition",args:{title:"Configuration",id:"configuration",stepMode:"edited",onEdit:()=>{},form:t.jsxs("section",{children:[t.jsx("h3",{children:"Formulaire de l'étape configuration"}),t.jsx(F,{type:"submit",classModifier:"success",children:"Valider l'étape"})]}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},a={name:"Test composant VerticalStep validé sans restitution",args:{title:"Configuration",id:"configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"}),showRestitution:!1}},r={name:"Test composant VerticalStep validé avec restitution",args:{title:"Configuration",id:"configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},l={name:"Test composant avec plusieurs VerticalStep",render:()=>t.jsxs(t.Fragment,{children:[t.jsx(c,{...a.args}),t.jsx(c,{...r.args}),t.jsx(c,{...o.args}),t.jsx(c,{...i.args})]})};var S,V,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Test composant VerticalStep bloqué",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "locked",
    onEdit: () => {},
    form: <h3>Formulaire de l'étape configuration</h3>,
    restitution: <h3>Resitution de l'étape configuration</h3>
  }
}`,...(v=(V=i.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var x,j,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Test composant VerticalStep en édition",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "edited",
    onEdit: () => {},
    form: <section>
        <h3>Formulaire de l'étape configuration</h3>

        <Button type="submit" classModifier="success">
          Valider l'étape
        </Button>
      </section>,
    restitution: <h3>Resitution de l'étape configuration</h3>
  }
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var M,R,w;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Test composant VerticalStep validé sans restitution",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l'étape configuration</h3>,
    restitution: <h3>Resitution de l'étape configuration</h3>,
    showRestitution: false
  }
}`,...(w=(R=a.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var E,T,k;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Test composant VerticalStep validé avec restitution",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l'étape configuration</h3>,
    restitution: <h3>Resitution de l'étape configuration</h3>
  }
}`,...(k=(T=r.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var C,q,b;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Test composant avec plusieurs VerticalStep",
  render: () => <>
      <VerticalStep {...VerticalStepValidatedWithoutRestitutionStory.args} />
      <VerticalStep {...VerticalStepValidatedWithRestitutionStory.args} />
      <VerticalStep {...VerticalStepEditedStory.args} />
      <VerticalStep {...VerticalStepLockedStory.args} />
    </>
}`,...(b=(q=l.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Q=["VerticalStepLockedStory","VerticalStepEditedStory","VerticalStepValidatedWithoutRestitutionStory","VerticalStepValidatedWithRestitutionStory","ManyVerticalStep"],J=Object.freeze(Object.defineProperty({__proto__:null,ManyVerticalStep:l,VerticalStepEditedStory:o,VerticalStepLockedStory:i,VerticalStepValidatedWithRestitutionStory:r,VerticalStepValidatedWithoutRestitutionStory:a,__namedExportsOrder:Q,default:H},Symbol.toStringTag,{value:"Module"}));export{l as M,J as V,i as a};
