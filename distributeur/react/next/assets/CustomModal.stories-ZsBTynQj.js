import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i}from"./iframe-CUw-2XJG.js";import{et as a,ft as o,nt as s,t as c,ut as l}from"./distributeur-BR8zYeHf.js";var u=t({CustomTitleModalStory:()=>p,__namedExportsOrder:()=>m,default:()=>f}),d,f,p,m;function h(){return(h=e((()=>{c(),r(),d=n(),f=i.type().meta({title:`Components/Modal`,argTypes:{size:{options:[{label:`Default`,value:``},{label:`Large (lg)`,value:`lg`},{label:`Small (sm)`,value:`sm`}].map(e=>e.value),control:{type:`radio`}}}}),p=f.story({name:`Custom Title Modal`,render:({children:e,cancelButtonText:t,saveButtonText:n,...r})=>(0,d.jsx)(`div`,{children:(0,d.jsxs)(a,{...r,title:void 0,onOutsideTap:()=>{},children:[(0,d.jsx)(s,{id:`headerId`,children:r.title}),(0,d.jsx)(o,{children:(0,d.jsx)(`p`,{children:e})}),(0,d.jsxs)(l,{children:[r.size!==`sm`&&(0,d.jsx)(`button`,{className:`btn af-btn af-btn--reverse`,type:`button`,children:t}),(0,d.jsx)(`button`,{className:`btn af-btn`,type:`button`,children:n})]})]})}),args:{open:!0,title:(0,d.jsxs)(`p`,{children:[`Ici je contrôle complètement`,(0,d.jsx)(`strong`,{children:` le contenu`})]}),bodyContent:`Voici une version avec un header customisé à l'aide du composant Modal.HeaderBase. La prop size="lg" permet d’afficher une modale plus large, et size="sm" une modale plus petite.`,cancelButtonText:`Annuler`,saveButtonText:`Valider`,size:void 0}}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source}}},m=[`CustomTitleModalStory`]})))()}export{p as n,h as r,u as t};