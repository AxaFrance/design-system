import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as h,p as l,u as Y,B as N}from"./CardData-CisLDHWb.js";import{r as tt}from"./index-ZnYipkzV.js";import"./index-63p0MazF.js";const S="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M378-246%20154-470l43-43%20181%20181%20384-384%2043%2043-427%20427Z'/%3e%3c/svg%3e",v="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M121-120v-128l616-616%20128%20128-616%20616H121Zm618-577%2040-40-41-41-40%2040%2041%2041Z'/%3e%3c/svg%3e",et="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M160-80v-554h130v-96q0-78.85%2055.61-134.42Q401.21-920%20480.11-920q78.89%200%20134.39%2055.58Q670-808.85%20670-730v96h130v554H160Zm320.17-200q31.83%200%2054.33-22.03T557-355q0-30-22.67-54.5t-54.5-24.5q-31.83%200-54.33%2024.5t-22.5%2055q0%2030.5%2022.67%2052.5t54.5%2022ZM350-634h260v-96q0-54.17-37.88-92.08-37.88-37.92-92-37.92T388-822.08q-38%2037.91-38%2092.08v96Z'/%3e%3c/svg%3e",e="af-vertical-step",i=({title:u,stepMode:g,editButtonLabel:O="Modifier",editButtonAriaLabel:H=`Modifier l'étape ${u}`,contentRightAriaLabel:Q=`Contenu supplémentaire étape verticale ${u}`,onEdit:z,id:P,form:A,restitution:D,showRestitution:G=!0,readonly:J=!1,contentRight:K})=>{const c=g==="edited",m=g==="validated",f=g==="locked",U=tt.useId(),X=P??U;return t.jsxs("section",{className:h(e,{[`${e}--edition`]:c}),"aria-label":`Étape verticale ${u}`,children:[t.jsxs("div",{className:h("af-vertical-step-icon",{[`${e}-icon--validated`]:m,[`${e}-icon--locked`]:f,[`${e}-icon--edited`]:c}),children:[m?t.jsx(l,{role:"presentation",src:S}):null,f?t.jsx(l,{role:"presentation",src:et}):null,c?t.jsx(l,{role:"presentation",src:v}):null]}),t.jsx(Y,{id:X,contentLeft:m&&!J?t.jsx(N,{"aria-label":H,onClick:z,variant:"ghost",leftIcon:t.jsx(l,{role:"presentation",src:v}),children:O}):void 0,contentRight:t.jsx("section",{"aria-label":Q,children:K}),children:u}),c?t.jsx("section",{children:A}):null,m&&G?t.jsx("section",{children:D}):null,c?t.jsx("div",{className:h(`${e}-icon ${e}-icon--lastIcon`),children:t.jsx(l,{role:"presentation",src:S})}):null]})},it={title:"Components/Steps/VerticalStep",component:i},a={name:"Test composant VerticalStep bloqué",args:{title:"Configuration",id:"configuration",stepMode:"locked",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},o={name:"Test composant VerticalStep en édition",args:{title:"Configuration",stepMode:"edited",onEdit:()=>{},form:t.jsxs("section",{children:[t.jsx("h3",{children:"Formulaire de l'étape configuration"}),t.jsx(N,{type:"submit",variant:"validated",children:"Valider l'étape"})]}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},n={name:"Test composant VerticalStep validé sans restitution",args:{title:"Configuration",id:"configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"}),showRestitution:!1}},r={name:"Test composant VerticalStep validé avec restitution",args:{title:"Configuration",id:"configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},s={name:"Test composant VerticalStep validé avec contenu à droite",args:{title:"Configuration",id:"configuration",stepMode:"validated",contentRight:"Contenu à droite",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},d={name:"Test composant VerticalStep validé en lecture seule",args:{title:"Configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"}),readonly:!0}},p={name:"Test composant avec plusieurs VerticalStep",render:()=>t.jsxs(t.Fragment,{children:[t.jsx(i,{...n.args}),t.jsx(i,{...r.args}),t.jsx(i,{...s.args}),t.jsx(i,{...o.args}),t.jsx(i,{...a.args})]})};var V,x,j;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Test composant VerticalStep bloqué",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "locked",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>
  }
}`,...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var R,y,C;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Test composant VerticalStep en édition",
  args: {
    title: "Configuration",
    stepMode: "edited",
    onEdit: () => {},
    form: <section>
        <h3>Formulaire de l&apos;étape configuration</h3>

        <Button type="submit" variant="validated">
          Valider l&apos;étape
        </Button>
      </section>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>
  }
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var w,M,E;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Test composant VerticalStep validé sans restitution",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>,
    showRestitution: false
  }
}`,...(E=(M=n.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var T,F,k;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Test composant VerticalStep validé avec restitution",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>
  }
}`,...(k=(F=r.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var b,q,W;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Test composant VerticalStep validé avec contenu à droite",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    contentRight: "Contenu à droite",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>
  }
}`,...(W=(q=s.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var $,B,I;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Test composant VerticalStep validé en lecture seule",
  args: {
    title: "Configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>,
    readonly: true
  }
}`,...(I=(B=d.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var Z,_,L;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Test composant avec plusieurs VerticalStep",
  render: () => <>
      <VerticalStep {...VerticalStepValidatedWithoutRestitutionStory.args} />
      <VerticalStep {...VerticalStepValidatedWithRestitutionStory.args} />
      <VerticalStep {...VerticalStepValidatedWithContentRightStory.args} />
      <VerticalStep {...VerticalStepEditedStory.args} />
      <VerticalStep {...VerticalStepLockedStory.args} />
    </>
}`,...(L=(_=p.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const at=["VerticalStepLockedStory","VerticalStepEditedStory","VerticalStepValidatedWithoutRestitutionStory","VerticalStepValidatedWithRestitutionStory","VerticalStepValidatedWithContentRightStory","VerticalStepValidatedReadOnlyStory","ManyVerticalStep"],ct=Object.freeze(Object.defineProperty({__proto__:null,ManyVerticalStep:p,VerticalStepEditedStory:o,VerticalStepLockedStory:a,VerticalStepValidatedReadOnlyStory:d,VerticalStepValidatedWithContentRightStory:s,VerticalStepValidatedWithRestitutionStory:r,VerticalStepValidatedWithoutRestitutionStory:n,__namedExportsOrder:at,default:it},Symbol.toStringTag,{value:"Module"}));export{p as M,ct as V,a};
