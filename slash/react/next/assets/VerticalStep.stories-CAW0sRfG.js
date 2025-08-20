import{j as t}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{u as m,o as l,J as f,t as J,B as N}from"./Loader-IvMrWptR.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";const S="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M121-120v-128l616-616%20128%20128-616%20616H121Zm618-577%2040-40-41-41-40%2040%2041%2041Z'/%3e%3c/svg%3e",P="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M160-80v-554h130v-96q0-78.85%2055.61-134.42Q401.21-920%20480.11-920q78.89%200%20134.39%2055.58Q670-808.85%20670-730v96h130v554H160Zm320.17-200q31.83%200%2054.33-22.03T557-355q0-30-22.67-54.5t-54.5-24.5q-31.83%200-54.33%2024.5t-22.5%2055q0%2030.5%2022.67%2052.5t54.5%2022ZM350-634h260v-96q0-54.17-37.88-92.08-37.88-37.92-92-37.92T388-822.08q-38%2037.91-38%2092.08v96Z'/%3e%3c/svg%3e",e="af-vertical-step",i=({title:g,id:_,stepMode:p,editButtonLabel:L="Modifier",editButtonAriaLabel:Z=`Modifier l'étape ${g}`,onEdit:O,form:H,restitution:I,showRestitution:Q=!0,contentRight:z})=>{const c=p==="edited",u=p==="validated",h=p==="locked";return t.jsxs("div",{className:m(e,{[`${e}--edition`]:c}),children:[t.jsxs("div",{className:m("af-vertical-step-icon",{[`${e}-icon--validated`]:u,[`${e}-icon--locked`]:h,[`${e}-icon--edited`]:c}),children:[u?t.jsx(l,{role:"presentation",src:f}):null,h?t.jsx(l,{role:"presentation",src:P}):null,c?t.jsx(l,{role:"presentation",src:S}):null]}),t.jsx(J,{id:_,contentLeft:u?t.jsxs(N,{"aria-label":Z,onClick:O,className:"af-vertical-step-title-button",children:[t.jsx(l,{role:"presentation",src:S}),L]}):void 0,contentRight:z,children:g}),c?t.jsx("section",{children:H}):null,u&&Q?t.jsx("section",{children:I}):null,c?t.jsx("div",{className:m(`${e}-icon ${e}-icon--lastIcon`),children:t.jsx(l,{role:"presentation",src:f})}):null]})},A={title:"Components/Steps/VerticalStep",component:i},o={name:"Test composant VerticalStep bloqué",args:{title:"Configuration",id:"configuration",stepMode:"locked",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},a={name:"Test composant VerticalStep en édition",args:{title:"Configuration",id:"configuration",stepMode:"edited",onEdit:()=>{},form:t.jsxs("section",{children:[t.jsx("h3",{children:"Formulaire de l'étape configuration"}),t.jsx(N,{type:"submit",classModifier:"success",children:"Valider l'étape"})]}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},r={name:"Test composant VerticalStep validé sans restitution",args:{title:"Configuration",id:"configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"}),showRestitution:!1}},n={name:"Test composant VerticalStep validé avec restitution",args:{title:"Configuration",id:"configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},s={name:"Test composant VerticalStep validé avec contenu à droite",args:{title:"Configuration",id:"configuration",stepMode:"validated",contentRight:"Contenu à droite",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},d={name:"Test composant avec plusieurs VerticalStep",render:()=>t.jsxs(t.Fragment,{children:[t.jsx(i,{...r.args}),t.jsx(i,{...n.args}),t.jsx(i,{...s.args}),t.jsx(i,{...a.args}),t.jsx(i,{...o.args})]})};var V,v,x;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Test composant VerticalStep bloqué",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "locked",
    onEdit: () => {},
    form: <h3>Formulaire de l'étape configuration</h3>,
    restitution: <h3>Resitution de l'étape configuration</h3>
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var j,R,y;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(y=(R=a.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var M,C,E;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(E=(C=r.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var T,w,k;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Test composant VerticalStep validé avec restitution",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l'étape configuration</h3>,
    restitution: <h3>Resitution de l'étape configuration</h3>
  }
}`,...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var F,q,b;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Test composant VerticalStep validé avec contenu à droite",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    contentRight: "Contenu à droite",
    onEdit: () => {},
    form: <h3>Formulaire de l'étape configuration</h3>,
    restitution: <h3>Resitution de l'étape configuration</h3>
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};var W,$,B;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Test composant avec plusieurs VerticalStep",
  render: () => <>
      <VerticalStep {...VerticalStepValidatedWithoutRestitutionStory.args} />
      <VerticalStep {...VerticalStepValidatedWithRestitutionStory.args} />
      <VerticalStep {...VerticalStepValidatedWithContentRightStory.args} />
      <VerticalStep {...VerticalStepEditedStory.args} />
      <VerticalStep {...VerticalStepLockedStory.args} />
    </>
}`,...(B=($=d.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const D=["VerticalStepLockedStory","VerticalStepEditedStory","VerticalStepValidatedWithoutRestitutionStory","VerticalStepValidatedWithRestitutionStory","VerticalStepValidatedWithContentRightStory","ManyVerticalStep"],tt=Object.freeze(Object.defineProperty({__proto__:null,ManyVerticalStep:d,VerticalStepEditedStory:a,VerticalStepLockedStory:o,VerticalStepValidatedWithContentRightStory:s,VerticalStepValidatedWithRestitutionStory:n,VerticalStepValidatedWithoutRestitutionStory:r,__namedExportsOrder:D,default:A},Symbol.toStringTag,{value:"Module"}));export{d as M,tt as V,o as a};
