import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as g,p as l,t as A,B as Z}from"./CardData-CAT2AYPU.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";const S="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M378-246%20154-470l43-43%20181%20181%20384-384%2043%2043-427%20427Z'/%3e%3c/svg%3e",f="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M121-120v-128l616-616%20128%20128-616%20616H121Zm618-577%2040-40-41-41-40%2040%2041%2041Z'/%3e%3c/svg%3e",D="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M160-80v-554h130v-96q0-78.85%2055.61-134.42Q401.21-920%20480.11-920q78.89%200%20134.39%2055.58Q670-808.85%20670-730v96h130v554H160Zm320.17-200q31.83%200%2054.33-22.03T557-355q0-30-22.67-54.5t-54.5-24.5q-31.83%200-54.33%2024.5t-22.5%2055q0%2030.5%2022.67%2052.5t54.5%2022ZM350-634h260v-96q0-54.17-37.88-92.08-37.88-37.92-92-37.92T388-822.08q-38%2037.91-38%2092.08v96Z'/%3e%3c/svg%3e",e="af-vertical-step",i=({title:p,id:_,stepMode:m,editButtonLabel:L="Modifier",editButtonAriaLabel:N=`Modifier l'étape ${p}`,contentRightAriaLabel:I=`Contenu supplémentaire étape verticale ${p}`,onEdit:O,form:H,restitution:Q,showRestitution:z=!0,contentRight:P})=>{const c=m==="edited",u=m==="validated",h=m==="locked";return t.jsxs("section",{className:g(e,{[`${e}--edition`]:c}),"aria-label":`Étape verticale ${p}`,children:[t.jsxs("div",{className:g("af-vertical-step-icon",{[`${e}-icon--validated`]:u,[`${e}-icon--locked`]:h,[`${e}-icon--edited`]:c}),children:[u?t.jsx(l,{role:"presentation",src:S}):null,h?t.jsx(l,{role:"presentation",src:D}):null,c?t.jsx(l,{role:"presentation",src:f}):null]}),t.jsx(A,{id:_,contentLeft:u?t.jsx(Z,{"aria-label":N,onClick:O,variant:"ghost",leftIcon:t.jsx(l,{role:"presentation",src:f}),children:L}):void 0,contentRight:t.jsx("section",{"aria-label":I,children:P}),children:p}),c?t.jsx("section",{children:H}):null,u&&z?t.jsx("section",{children:Q}):null,c?t.jsx("div",{className:g(`${e}-icon ${e}-icon--lastIcon`),children:t.jsx(l,{role:"presentation",src:S})}):null]})},G={title:"Components/Steps/VerticalStep",component:i},o={name:"Test composant VerticalStep bloqué",args:{title:"Configuration",id:"configuration",stepMode:"locked",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},n={name:"Test composant VerticalStep en édition",args:{title:"Configuration",id:"configuration",stepMode:"edited",onEdit:()=>{},form:t.jsxs("section",{children:[t.jsx("h3",{children:"Formulaire de l'étape configuration"}),t.jsx(Z,{type:"submit",variant:"validated",children:"Valider l'étape"})]}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},a={name:"Test composant VerticalStep validé sans restitution",args:{title:"Configuration",id:"configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"}),showRestitution:!1}},r={name:"Test composant VerticalStep validé avec restitution",args:{title:"Configuration",id:"configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},s={name:"Test composant VerticalStep validé avec contenu à droite",args:{title:"Configuration",id:"configuration",stepMode:"validated",contentRight:"Contenu à droite",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},d={name:"Test composant avec plusieurs VerticalStep",render:()=>t.jsxs(t.Fragment,{children:[t.jsx(i,{...a.args}),t.jsx(i,{...r.args}),t.jsx(i,{...s.args}),t.jsx(i,{...n.args}),t.jsx(i,{...o.args})]})};var v,V,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Test composant VerticalStep bloqué",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "locked",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>
  }
}`,...(x=(V=o.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var j,R,y;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Test composant VerticalStep en édition",
  args: {
    title: "Configuration",
    id: "configuration",
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
}`,...(y=(R=n.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var w,C,M;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(M=(C=a.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var E,T,k;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Test composant VerticalStep validé avec restitution",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>
  }
}`,...(k=(T=r.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var F,b,q;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(b=s.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var W,$,B;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Test composant avec plusieurs VerticalStep",
  render: () => <>
      <VerticalStep {...VerticalStepValidatedWithoutRestitutionStory.args} />
      <VerticalStep {...VerticalStepValidatedWithRestitutionStory.args} />
      <VerticalStep {...VerticalStepValidatedWithContentRightStory.args} />
      <VerticalStep {...VerticalStepEditedStory.args} />
      <VerticalStep {...VerticalStepLockedStory.args} />
    </>
}`,...(B=($=d.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const J=["VerticalStepLockedStory","VerticalStepEditedStory","VerticalStepValidatedWithoutRestitutionStory","VerticalStepValidatedWithRestitutionStory","VerticalStepValidatedWithContentRightStory","ManyVerticalStep"],tt=Object.freeze(Object.defineProperty({__proto__:null,ManyVerticalStep:d,VerticalStepEditedStory:n,VerticalStepLockedStory:o,VerticalStepValidatedWithContentRightStory:s,VerticalStepValidatedWithRestitutionStory:r,VerticalStepValidatedWithoutRestitutionStory:a,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{d as M,tt as V,o as a};
