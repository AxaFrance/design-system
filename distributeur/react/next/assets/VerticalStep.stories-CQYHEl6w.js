import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as b}from"./EditorialMessage-BmsJa9B6.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{V as e}from"./VerticalStep-JbIsHnCT.js";const _={title:"Components/Steps/VerticalStep",component:e},i={name:"Test composant VerticalStep bloqué",args:{title:"Configuration",id:"configuration",stepMode:"locked",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},o={name:"Test composant VerticalStep en édition",args:{title:"Configuration",stepMode:"edited",onEdit:()=>{},form:t.jsxs("section",{children:[t.jsx("h3",{children:"Formulaire de l'étape configuration"}),t.jsx(b,{type:"submit",variant:"validated",children:"Valider l'étape"})]}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},a={name:"Test composant VerticalStep validé sans restitution",args:{title:"Configuration",id:"configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"}),showRestitution:!1}},n={name:"Test composant VerticalStep validé avec restitution",args:{title:"Configuration",id:"configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},r={name:"Test composant VerticalStep validé avec contenu à droite",args:{title:"Configuration",id:"configuration",stepMode:"validated",contentRight:"Contenu à droite",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"})}},s={name:"Test composant VerticalStep validé en lecture seule",args:{title:"Configuration",stepMode:"validated",onEdit:()=>{},form:t.jsx("h3",{children:"Formulaire de l'étape configuration"}),restitution:t.jsx("h3",{children:"Resitution de l'étape configuration"}),readonly:!0}},c={name:"Test composant avec plusieurs VerticalStep",render:()=>t.jsxs(t.Fragment,{children:[t.jsx(e,{...a.args}),t.jsx(e,{...n.args}),t.jsx(e,{...r.args}),t.jsx(e,{...o.args}),t.jsx(e,{...i.args})]})};var d,l,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Test composant VerticalStep bloqué",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "locked",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>
  }
}`,...(p=(l=i.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,m,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var S,h,f;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var V,R,v;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Test composant VerticalStep validé avec restitution",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>
  }
}`,...(v=(R=n.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var y,j,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(j=r.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var C,E,M;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Test composant VerticalStep validé en lecture seule",
  args: {
    title: "Configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>,
    readonly: true
  }
}`,...(M=(E=s.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var T,F,W;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Test composant avec plusieurs VerticalStep",
  render: () => <>
      <VerticalStep {...VerticalStepValidatedWithoutRestitutionStory.args} />
      <VerticalStep {...VerticalStepValidatedWithRestitutionStory.args} />
      <VerticalStep {...VerticalStepValidatedWithContentRightStory.args} />
      <VerticalStep {...VerticalStepEditedStory.args} />
      <VerticalStep {...VerticalStepLockedStory.args} />
    </>
}`,...(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const k=["VerticalStepLockedStory","VerticalStepEditedStory","VerticalStepValidatedWithoutRestitutionStory","VerticalStepValidatedWithRestitutionStory","VerticalStepValidatedWithContentRightStory","VerticalStepValidatedReadOnlyStory","ManyVerticalStep"],z=Object.freeze(Object.defineProperty({__proto__:null,ManyVerticalStep:c,VerticalStepEditedStory:o,VerticalStepLockedStory:i,VerticalStepValidatedReadOnlyStory:s,VerticalStepValidatedWithContentRightStory:r,VerticalStepValidatedWithRestitutionStory:n,VerticalStepValidatedWithoutRestitutionStory:a,__namedExportsOrder:k,default:_},Symbol.toStringTag,{value:"Module"}));export{c as M,z as V,i as a};
