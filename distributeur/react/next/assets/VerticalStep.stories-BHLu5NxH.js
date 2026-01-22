import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as h,p,u as et,B as N}from"./CardData-CisLDHWb.js";import{r as it}from"./index-ZnYipkzV.js";import"./index-63p0MazF.js";const f="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M378-246%20154-470l43-43%20181%20181%20384-384%2043%2043-427%20427Z'/%3e%3c/svg%3e",v="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M121-120v-128l616-616%20128%20128-616%20616H121Zm618-577%2040-40-41-41-40%2040%2041%2041Z'/%3e%3c/svg%3e",at="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M160-80v-554h130v-96q0-78.85%2055.61-134.42Q401.21-920%20480.11-920q78.89%200%20134.39%2055.58Q670-808.85%20670-730v96h130v554H160Zm320.17-200q31.83%200%2054.33-22.03T557-355q0-30-22.67-54.5t-54.5-24.5q-31.83%200-54.33%2024.5t-22.5%2055q0%2030.5%2022.67%2052.5t54.5%2022ZM350-634h260v-96q0-54.17-37.88-92.08-37.88-37.92-92-37.92T388-822.08q-38%2037.91-38%2092.08v96Z'/%3e%3c/svg%3e",i="af-vertical-step",ot={validatedState:"validée",editState:"en cours de modification",lockedState:"verrouillée"},nt=(a,e)=>{switch(a){case"validated":return e.validatedState;case"edited":return e.editState;case"locked":return e.lockedState;default:return""}},o=({title:a,stepMode:e,editButtonLabel:O="Modifier",editButtonAriaLabel:H=`Modifier l'étape ${a}`,contentRightAriaLabel:Q=`Contenu supplémentaire étape verticale ${a}`,onEdit:z,id:P,form:A,restitution:D,showRestitution:G=!0,readonly:J=!1,contentRight:K,stateLabels:U=ot})=>{const d=e==="edited",g=e==="validated",S=e==="locked",X=it.useId(),Y=P??X,tt=nt(e,U);return t.jsxs("section",{className:h(i,{[`${i}--edition`]:d}),"aria-label":`Étape verticale ${a} (${tt})`,children:[t.jsxs("div",{className:h("af-vertical-step-icon",{[`${i}-icon--validated`]:g,[`${i}-icon--locked`]:S,[`${i}-icon--edited`]:d}),children:[g?t.jsx(p,{role:"presentation",src:f}):null,S?t.jsx(p,{role:"presentation",src:at}):null,d?t.jsx(p,{role:"presentation",src:v}):null]}),t.jsx(et,{id:Y,contentLeft:g&&!J?t.jsx(N,{"aria-label":H,onClick:z,variant:"ghost",leftIcon:t.jsx(p,{role:"presentation",src:v}),children:O}):void 0,contentRight:t.jsx("section",{"aria-label":Q,children:K}),children:a}),d?t.jsx("section",{children:A}):null,g&&G?t.jsx("section",{children:D}):null,d?t.jsx("div",{className:h(`${i}-icon ${i}-icon--lastIcon`),children:t.jsx(p,{role:"presentation",src:f})}):null]})},rt={title:"Components/Steps/VerticalStep",component:o},n={name:"Test composant VerticalStep bloqué",args:{title:"Configuration",id:"configuration",stepMode:"locked",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},r={name:"Test composant VerticalStep en édition",args:{title:"Configuration",stepMode:"edited",onEdit:()=>{},form:t.jsxs("section",{children:[t.jsx("h3",{children:"Formulaire de l'étape configuration"}),t.jsx(N,{type:"submit",variant:"validated",children:"Valider l'étape"})]}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},s={name:"Test composant VerticalStep validé sans restitution",args:{title:"Configuration",id:"configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"}),showRestitution:!1}},c={name:"Test composant VerticalStep validé avec restitution",args:{title:"Configuration",id:"configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},l={name:"Test composant VerticalStep validé avec contenu à droite",args:{title:"Configuration",id:"configuration",stepMode:"validated",contentRight:"Contenu à droite",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},u={name:"Test composant VerticalStep validé en lecture seule",args:{title:"Configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"}),readonly:!0}},m={name:"Test composant avec plusieurs VerticalStep",render:()=>t.jsxs(t.Fragment,{children:[t.jsx(o,{...s.args}),t.jsx(o,{...c.args}),t.jsx(o,{...l.args}),t.jsx(o,{...r.args}),t.jsx(o,{...n.args})]})};var V,x,j;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Test composant VerticalStep bloqué",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "locked",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>
  }
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var R,y,w;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var C,E,M;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(E=s.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var T,k,F;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Test composant VerticalStep validé avec restitution",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>
  }
}`,...(F=(k=c.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var b,q,$;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...($=(q=l.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var W,B,I;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Test composant VerticalStep validé en lecture seule",
  args: {
    title: "Configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>,
    readonly: true
  }
}`,...(I=(B=u.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var L,Z,_;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Test composant avec plusieurs VerticalStep",
  render: () => <>
      <VerticalStep {...VerticalStepValidatedWithoutRestitutionStory.args} />
      <VerticalStep {...VerticalStepValidatedWithRestitutionStory.args} />
      <VerticalStep {...VerticalStepValidatedWithContentRightStory.args} />
      <VerticalStep {...VerticalStepEditedStory.args} />
      <VerticalStep {...VerticalStepLockedStory.args} />
    </>
}`,...(_=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};const st=["VerticalStepLockedStory","VerticalStepEditedStory","VerticalStepValidatedWithoutRestitutionStory","VerticalStepValidatedWithRestitutionStory","VerticalStepValidatedWithContentRightStory","VerticalStepValidatedReadOnlyStory","ManyVerticalStep"],ut=Object.freeze(Object.defineProperty({__proto__:null,ManyVerticalStep:m,VerticalStepEditedStory:r,VerticalStepLockedStory:n,VerticalStepValidatedReadOnlyStory:u,VerticalStepValidatedWithContentRightStory:l,VerticalStepValidatedWithRestitutionStory:c,VerticalStepValidatedWithoutRestitutionStory:s,__namedExportsOrder:st,default:rt},Symbol.toStringTag,{value:"Module"}));export{m as M,ut as V,n as a};
