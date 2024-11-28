import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{M as p,H as I,B as S,F as B,a as j,b as O}from"./BooleanModal-IUCLoIZ3.js";import{f as m}from"./index-C_FWhylE.js";import{r as h}from"./index-CTjT7uj6.js";const s=[{label:"Default",value:""},{label:"Large (lg)",value:"lg"},{label:"Small (sm)",value:"sm"}],D={title:"Components/Modal",component:p,parameters:{options:{}},args:{onSubmit:m(),onCancel:m(),onOutsideTap:m(),onClose:m()}},u={name:"Default Modal",render:({bodyContent:a,cancelButtonText:r,saveButtonText:i,...t})=>{const n=s.find(o=>o.label===t.classModifier)??s[0],l=h.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>{var o;return(o=l.current)==null?void 0:o.showModal()},children:"Open the modal"}),e.jsxs(p,{...t,classModifier:n.value,ref:l,onClose:()=>{var o;return(o=l.current)==null?void 0:o.close()},onOutsideTap:()=>{var o;t.onOutsideTap(),(o=l.current)==null||o.close()},children:[e.jsx(I,{title:t.title,onCancel:()=>{var o;t.onCancel(),(o=l.current)==null||o.close()}}),e.jsx(S,{children:e.jsx("p",{children:a})}),e.jsxs(B,{children:[n.value!=="sm"&&e.jsx("button",{className:"btn af-btn af-btn--reverse",type:"button",onClick:()=>{var o;t.onCancel(),(o=l.current)==null||o.close()},children:r}),e.jsx("button",{className:"btn af-btn",type:"button",onClick:()=>{var o;t.onSubmit(),(o=l.current)==null||o.close()},children:i})]})]})]})},args:{open:!1,title:"Modal title",bodyContent:`Voici une version avec un header classique Modal.Header. Un classModifier "lg" a été mis pour montrer une version plus large d'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.`,cancelButtonText:"Annuler",saveButtonText:"Valider",classModifier:s[0].label},argTypes:{classModifier:{options:s.map(a=>a.label),control:{type:"radio"}}}},c={name:"Custom Title Modal",render:({bodyContent:a,cancelButtonText:r,saveButtonText:i,...t})=>{const n=s.find(l=>l.label===t.classModifier)??s[0];return e.jsx("div",{children:e.jsxs(p,{...t,title:void 0,classModifier:n.value,onOutsideTap:()=>{},children:[e.jsx(j,{id:"headerId",children:t.title}),e.jsx(S,{children:e.jsx("p",{children:a})}),e.jsxs(B,{children:[n.value!=="sm"&&e.jsx("button",{className:"btn af-btn af-btn--reverse",type:"button",children:r}),e.jsx("button",{className:"btn af-btn",type:"button",children:i})]})]})})},args:{open:!0,title:e.jsxs("p",{children:["Ici je contrôle complètement",e.jsx("b",{children:" le contenu"})]}),bodyContent:`Voici une version avec un header customisé à l'aide du composant Modal.HeaderBase. Un classModifier "lg" a été mis pour montrer une version plus large d'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.`,cancelButtonText:"Annuler",saveButtonText:"Valider",classModifier:s[0].label},argTypes:{classModifier:{options:s.map(a=>a.label),control:{type:"radio"}}}},d={name:"Boolean Modal",render:({classModifier:a,...r})=>{const i=s.find(n=>n.label===a)??s[0],t=h.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>{var n;return(n=t.current)==null?void 0:n.showModal()},children:"Open modal"}),e.jsx(O,{classModifier:i.value,ref:t,...r,onCancel:()=>{var n;(n=t.current)==null||n.close()},onSubmit:()=>{var n;(n=t.current)==null||n.close()},children:r.bodyContent})]})},args:{open:!1,title:"Boolean Modal title",bodyContent:e.jsx("p",{children:"Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo in aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea eu laborum culpa laboris. Labore labore irure ipsum consequat enim officia anim ipsum aliqua excepteur qui sint. Duis sint do culpa adipisicing dolor adipisicing ea dolore aute nisi quis ullamco aliquip occaecat. Aute ut mollit amet."}),cancelTitle:"Annuler",submitTitle:"Valider",classModifier:s[0].label},argTypes:{classModifier:{options:s.map(a=>a.label),control:{type:"radio"}}}};var b,f,M;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Default Modal",
  render: ({
    bodyContent,
    cancelButtonText,
    saveButtonText,
    ...args
  }) => {
    const selectClassModifier = MODIFIERS.find(m => m.label === args.classModifier) ?? MODIFIERS[0];
    const ref = useRef<HTMLDialogElement>(null);
    return <>
        <button type="button" onClick={() => ref.current?.showModal()}>
          Open the modal
        </button>
        <Modal {...args} classModifier={selectClassModifier.value} ref={ref} onClose={() => ref.current?.close()} onOutsideTap={() => {
        args.onOutsideTap();
        ref.current?.close();
      }}>
          <Header title={args.title} onCancel={() => {
          args.onCancel();
          ref.current?.close();
        }} />
          <Body>
            <p>{bodyContent}</p>
          </Body>
          <Footer>
            {selectClassModifier.value !== "sm" && <button className="btn af-btn af-btn--reverse" type="button" onClick={() => {
            args.onCancel();
            ref.current?.close();
          }}>
                {cancelButtonText}
              </button>}
            <button className="btn af-btn" type="button" onClick={() => {
            args.onSubmit();
            ref.current?.close();
          }}>
              {saveButtonText}
            </button>
          </Footer>
        </Modal>
      </>;
  },
  args: {
    open: false,
    title: "Modal title",
    bodyContent: 'Voici une version avec un header classique Modal.Header. Un classModifier "lg" a été mis pour montrer une version plus large d\\'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d\\'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.',
    cancelButtonText: "Annuler",
    saveButtonText: "Valider",
    classModifier: MODIFIERS[0].label
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS.map(m => m.label),
      control: {
        type: "radio"
      }
    }
  }
}`,...(M=(f=u.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var C,x,y;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Custom Title Modal",
  render: ({
    bodyContent,
    cancelButtonText,
    saveButtonText,
    ...args
  }) => {
    const selectClassModifier = MODIFIERS.find(m => m.label === args.classModifier) ?? MODIFIERS[0];
    return <div>
        <Modal {...args} title={undefined} classModifier={selectClassModifier.value} onOutsideTap={() => {}}>
          <HeaderBase id="headerId">{args.title}</HeaderBase>
          <Body>
            <p>{bodyContent}</p>
          </Body>
          <Footer>
            {selectClassModifier.value !== "sm" && <button className="btn af-btn af-btn--reverse" type="button">
                {cancelButtonText}
              </button>}
            <button className="btn af-btn" type="button">
              {saveButtonText}
            </button>
          </Footer>
        </Modal>
      </div>;
  },
  args: {
    open: true,
    title: <p>
        Ici je contrôle complètement
        <b> le contenu</b>
      </p>,
    bodyContent: 'Voici une version avec un header customisé à l\\'aide du composant Modal.HeaderBase. Un classModifier "lg" a été mis pour montrer une version plus large d\\'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d\\'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.',
    cancelButtonText: "Annuler",
    saveButtonText: "Valider",
    classModifier: MODIFIERS[0].label
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS.map(m => m.label),
      control: {
        type: "radio"
      }
    }
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var g,v,T;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Boolean Modal",
  render: ({
    classModifier,
    ...args
  }) => {
    const selectClassModifier = MODIFIERS.find(m => m.label === classModifier) ?? MODIFIERS[0];
    const ref = useRef<HTMLDialogElement>(null);
    return <>
        <button type="button" onClick={() => ref.current?.showModal()}>
          Open modal
        </button>
        <BooleanModal classModifier={selectClassModifier.value} ref={ref} {...args} onCancel={() => {
        ref.current?.close();
      }} onSubmit={() => {
        ref.current?.close();
      }}>
          {args.bodyContent}
        </BooleanModal>
      </>;
  },
  args: {
    open: false,
    title: "Boolean Modal title",
    bodyContent: <p>
        Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo in
        aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea eu
        laborum culpa laboris. Labore labore irure ipsum consequat enim officia
        anim ipsum aliqua excepteur qui sint. Duis sint do culpa adipisicing
        dolor adipisicing ea dolore aute nisi quis ullamco aliquip occaecat.
        Aute ut mollit amet.
      </p>,
    cancelTitle: "Annuler",
    submitTitle: "Valider",
    classModifier: MODIFIERS[0].label
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS.map(m => m.label),
      control: {
        type: "radio"
      }
    }
  }
}`,...(T=(v=d.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const F=["DefaultModalStory","CustomTitleModalStory","BooleanModalStory"],V=Object.freeze(Object.defineProperty({__proto__:null,BooleanModalStory:d,CustomTitleModalStory:c,DefaultModalStory:u,__namedExportsOrder:F,default:D},Symbol.toStringTag,{value:"Module"}));export{d as B,c as C,u as D,V as M};
