import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-De-9TtK1.js";import{A as i,E as a,T as o,k as s,n as c}from"./distributeur-Ct4qDp97.js";var l,u,d,f,p,m=e((()=>{c(),n(),l=r(),u=[{label:`Default`,value:``},{label:`Large (lg)`,value:`lg`},{label:`Small (sm)`,value:`sm`}],d=t.type().meta({title:`Components/Modal`,argTypes:{classModifier:{options:u.map(e=>e.label),control:{type:`radio`}}}}),f=d.story({name:`Custom Title Modal`,render:({children:e,cancelButtonText:t,saveButtonText:n,...r})=>(0,l.jsx)(`div`,{children:(0,l.jsxs)(o,{...r,title:void 0,onOutsideTap:()=>{},children:[(0,l.jsx)(a,{id:`headerId`,children:r.title}),(0,l.jsx)(i,{children:(0,l.jsx)(`p`,{children:e})}),(0,l.jsxs)(s,{children:[r.size!==`sm`&&(0,l.jsx)(`button`,{className:`btn af-btn af-btn--reverse`,type:`button`,children:t}),(0,l.jsx)(`button`,{className:`btn af-btn`,type:`button`,children:n})]})]})}),args:{open:!0,title:(0,l.jsxs)(`p`,{children:[`Ici je contrôle complètement`,(0,l.jsx)(`strong`,{children:` le contenu`})]}),bodyContent:`Voici une version avec un header customisé à l'aide du composant Modal.HeaderBase. Un classModifier "lg" a été mis pour montrer une version plus large d'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.`,cancelButtonText:`Annuler`,saveButtonText:`Valider`,classModifier:u[0].label}}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Custom Title Modal",
  render: ({
    children,
    cancelButtonText,
    saveButtonText,
    ...args
  }) => {
    return <div>
        <Modal {...args} title={undefined} onOutsideTap={() => {}}>
          <ModalHeaderBase id="headerId">{args.title}</ModalHeaderBase>
          <ModalBody>
            <p>{children}</p>
          </ModalBody>
          <ModalFooter>
            {args.size !== "sm" && <button className="btn af-btn af-btn--reverse" type="button">
                {cancelButtonText}
              </button>}
            <button className="btn af-btn" type="button">
              {saveButtonText}
            </button>
          </ModalFooter>
        </Modal>
      </div>;
  },
  args: {
    open: true,
    title: <p>
        Ici je contrôle complètement
        <strong> le contenu</strong>
      </p>,
    bodyContent: 'Voici une version avec un header customisé à l\\'aide du composant Modal.HeaderBase. Un classModifier "lg" a été mis pour montrer une version plus large d\\'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d\\'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.',
    cancelButtonText: "Annuler",
    saveButtonText: "Valider",
    classModifier: MODIFIERS[0].label
  }
})`,...f.input.parameters?.docs?.source}}},p=[`CustomTitleModalStory`]}));m();export{f as CustomTitleModalStory,p as __namedExportsOrder,d as default,m as t};