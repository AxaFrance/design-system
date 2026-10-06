import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-PYnMZM5z.js";import{F as i,O as a,P as o,k as s,t as c}from"./distributeur-BiOr3XFa.js";var l,u,d,f,p=e((()=>{c(),n(),l=r(),u=t.type().meta({title:`Components/Modal`,argTypes:{size:{options:[{label:`Default`,value:``},{label:`Large (lg)`,value:`lg`},{label:`Small (sm)`,value:`sm`}].map(e=>e.value),control:{type:`radio`}}}}),d=u.story({name:`Custom Title Modal`,render:({children:e,cancelButtonText:t,saveButtonText:n,...r})=>(0,l.jsx)(`div`,{children:(0,l.jsxs)(a,{...r,title:void 0,onOutsideTap:()=>{},children:[(0,l.jsx)(s,{id:`headerId`,children:r.title}),(0,l.jsx)(i,{children:(0,l.jsx)(`p`,{children:e})}),(0,l.jsxs)(o,{children:[r.size!==`sm`&&(0,l.jsx)(`button`,{className:`btn af-btn af-btn--reverse`,type:`button`,children:t}),(0,l.jsx)(`button`,{className:`btn af-btn`,type:`button`,children:n})]})]})}),args:{open:!0,title:(0,l.jsxs)(`p`,{children:[`Ici je contrôle complètement`,(0,l.jsx)(`strong`,{children:` le contenu`})]}),bodyContent:`Voici une version avec un header customisé à l'aide du composant Modal.HeaderBase. La prop size="lg" permet d’afficher une modale plus large, et size="sm" une modale plus petite.`,cancelButtonText:`Annuler`,saveButtonText:`Valider`,size:void 0}}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
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
    bodyContent: 'Voici une version avec un header customisé à l\\'aide du composant Modal.HeaderBase. La prop size="lg" permet d’afficher une modale plus large, et size="sm" une modale plus petite.',
    cancelButtonText: "Annuler",
    saveButtonText: "Valider",
    size: undefined
  }
})`,...d.input.parameters?.docs?.source}}},f=[`CustomTitleModalStory`]}));p();export{d as CustomTitleModalStory,f as __namedExportsOrder,u as default,p as t};