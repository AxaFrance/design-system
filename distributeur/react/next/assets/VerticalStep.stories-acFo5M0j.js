import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i}from"./iframe-DBecIi7S.js";import{M as a,Yn as o,t as s}from"./distributeur-wY98V-UD.js";var c=t({ManyVerticalStep:()=>_,VerticalStepEditedStory:()=>f,VerticalStepLockedStory:()=>d,VerticalStepValidatedReadOnlyStory:()=>g,VerticalStepValidatedWithContentRightStory:()=>h,VerticalStepValidatedWithRestitutionStory:()=>m,VerticalStepValidatedWithoutRestitutionStory:()=>p,__namedExportsOrder:()=>v,default:()=>u}),l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{s(),r(),l=n(),u=i.meta({title:`Components/Steps/VerticalStep`,component:a}),d=u.story({name:`Test composant VerticalStep bloqué`,args:{title:`Configuration`,id:`configuration`,stepMode:`locked`,onEdit:()=>{},form:(0,l.jsx)(`h3`,{children:`Formulaire de l'étape configuration`}),restitution:(0,l.jsx)(`h3`,{children:`Resitution de l'étape configuration`})}}),f=u.story({name:`Test composant VerticalStep en édition`,args:{title:`Configuration`,stepMode:`edited`,onEdit:()=>{},form:(0,l.jsxs)(`section`,{children:[(0,l.jsx)(`h3`,{children:`Formulaire de l'étape configuration`}),(0,l.jsx)(o,{type:`submit`,variant:`validated`,children:`Valider l'étape`})]}),restitution:(0,l.jsx)(`h3`,{children:`Resitution de l'étape configuration`})}}),p=u.story({name:`Test composant VerticalStep validé sans restitution`,args:{title:`Configuration`,id:`configuration`,stepMode:`validated`,onEdit:()=>{},form:(0,l.jsx)(`h3`,{children:`Formulaire de l'étape configuration`}),restitution:(0,l.jsx)(`h3`,{children:`Resitution de l'étape configuration`}),showRestitution:!1}}),m=u.story({name:`Test composant VerticalStep validé avec restitution`,args:{title:`Configuration`,id:`configuration`,stepMode:`validated`,onEdit:()=>{},form:(0,l.jsx)(`h3`,{children:`Formulaire de l'étape configuration`}),restitution:(0,l.jsx)(`h3`,{children:`Resitution de l'étape configuration`})}}),h=u.story({name:`Test composant VerticalStep validé avec contenu à droite`,args:{title:`Configuration`,id:`configuration`,stepMode:`validated`,contentRight:`Contenu à droite`,onEdit:()=>{},form:(0,l.jsx)(`h3`,{children:`Formulaire de l'étape configuration`}),restitution:(0,l.jsx)(`h3`,{children:`Resitution de l'étape configuration`})}}),g=u.story({name:`Test composant VerticalStep validé en lecture seule`,args:{title:`Configuration`,stepMode:`validated`,onEdit:()=>{},form:(0,l.jsx)(`h3`,{children:`Formulaire de l'étape configuration`}),restitution:(0,l.jsx)(`h3`,{children:`Resitution de l'étape configuration`}),readonly:!0}}),_=u.story({name:`Test composant avec plusieurs VerticalStep`,render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{...p.input.args}),(0,l.jsx)(a,{...m.input.args}),(0,l.jsx)(a,{...h.input.args}),(0,l.jsx)(a,{...f.input.args}),(0,l.jsx)(a,{...d.input.args})]})}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Test composant VerticalStep bloqué",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "locked",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>
  }
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Test composant VerticalStep validé avec restitution",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Test composant VerticalStep validé en lecture seule",
  args: {
    title: "Configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>,
    readonly: true
  }
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Test composant avec plusieurs VerticalStep",
  render: () => <>
      <VerticalStep {...VerticalStepValidatedWithoutRestitutionStory.input.args} />
      <VerticalStep {...VerticalStepValidatedWithRestitutionStory.input.args} />
      <VerticalStep {...VerticalStepValidatedWithContentRightStory.input.args} />
      <VerticalStep {...VerticalStepEditedStory.input.args} />
      <VerticalStep {...VerticalStepLockedStory.input.args} />
    </>
})`,..._.input.parameters?.docs?.source}}},v=[`VerticalStepLockedStory`,`VerticalStepEditedStory`,`VerticalStepValidatedWithoutRestitutionStory`,`VerticalStepValidatedWithRestitutionStory`,`VerticalStepValidatedWithContentRightStory`,`VerticalStepValidatedReadOnlyStory`,`ManyVerticalStep`]})))()}export{y as i,d as n,c as r,_ as t};