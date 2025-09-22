import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as j,w as d,H as B,x as h,y as v,B as c,z as T}from"./CardData-BJfT8iU8.js";/* empty css               */import{r as S}from"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as u}from"./index-28pPPJTf.js";const q=({classModifier:a,className:t,...n})=>{const o=j(t,a,"af-modal__header");return e.jsx("header",{...n,className:o})},i=[{label:"Default",value:""},{label:"Large (lg)",value:"lg"},{label:"Small (sm)",value:"sm"}],O={title:"Components/Modal",component:d,parameters:{options:{}},args:{onSubmit:u(),onCancel:u(),onOutsideTap:u()},argTypes:{size:{control:{type:"radio",labels:{lg:"Large (lg)",sm:"Small (sm)","":"Default"}},options:i.map(a=>a.value)},classModifier:{options:i.map(a=>a.value),control:{type:"radio",labels:{"":"Default",lg:"Large (lg)",sm:"Small (sm)"}}},onClose:{table:{disable:!0}},open:{table:{disable:!0}},ref:{table:{disable:!0}}}},s={name:"Default Modal",render:({bodyContent:a,...t})=>{const n=S.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>{var o;return(o=n.current)==null?void 0:o.showModal()},children:"Open the modal"}),e.jsxs(d,{...t,ref:n,onClose:()=>{var o;return(o=n.current)==null?void 0:o.close()},onOutsideTap:()=>{var o;t.onOutsideTap(),(o=n.current)==null||o.close()},children:[e.jsx(B,{title:t.title,onCancel:()=>{var o;t.onCancel(),(o=n.current)==null||o.close()}}),e.jsx(h,{children:e.jsx("p",{children:a})}),e.jsxs(v,{children:[t.size!=="sm"&&e.jsx(c,{variant:"secondary",type:"button",onClick:()=>{var o;t.onCancel(),(o=n.current)==null||o.close()},children:"Cancel"}),e.jsx(c,{variant:"validated",type:"button",onClick:()=>{var o;t.onSubmit(),(o=n.current)==null||o.close()},children:"Save"})]})]})]})},args:{open:!1,title:"Modal title",bodyContent:`Voici une version avec un header classique Modal.Header. Un classModifier "lg" a été mis pour montrer une version plus large d'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.`,size:void 0}},l={name:"Custom Title Modal",render:({bodyContent:a,cancelButtonText:t,saveButtonText:n,...o})=>e.jsx("div",{children:e.jsxs(d,{...o,title:void 0,onOutsideTap:()=>{},children:[e.jsx(q,{id:"headerId",children:o.title}),e.jsx(h,{children:e.jsx("p",{children:a})}),e.jsxs(v,{children:[o.size!=="sm"&&e.jsx("button",{className:"btn af-btn af-btn--reverse",type:"button",children:t}),e.jsx("button",{className:"btn af-btn",type:"button",children:n})]})]})}),args:{open:!0,title:e.jsxs("p",{children:["Ici je contrôle complètement",e.jsx("b",{children:" le contenu"})]}),bodyContent:`Voici une version avec un header customisé à l'aide du composant Modal.HeaderBase. Un classModifier "lg" a été mis pour montrer une version plus large d'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.`,cancelButtonText:"Annuler",saveButtonText:"Valider",classModifier:i[0].label},argTypes:{classModifier:{options:i.map(a=>a.label),control:{type:"radio"}}}},r={name:"Boolean Modal",render:({...a})=>{const t=S.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>{var n;return(n=t.current)==null?void 0:n.showModal()},children:"Open modal"}),e.jsx(T,{ref:t,...a,onCancel:()=>{var n;(n=t.current)==null||n.close()},onSubmit:()=>{var n;(n=t.current)==null||n.close()},children:a.children})]})},args:{open:!1,title:"Boolean Modal title",children:e.jsx("p",{children:"Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo in aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea eu laborum culpa laboris. Labore labore irure ipsum consequat enim officia anim ipsum aliqua excepteur qui sint. Duis sint do culpa adipisicing dolor adipisicing ea dolore aute nisi quis ullamco aliquip occaecat. Aute ut mollit amet."}),cancelTitle:"Cancel",submitTitle:"Submit",size:void 0}};var m,p,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Default Modal",
  render: ({
    bodyContent,
    ...args
  }) => {
    const ref = useRef<HTMLDialogElement>(null);
    return <>
        <button type="button" onClick={() => ref.current?.showModal()}>
          Open the modal
        </button>
        <Modal {...args} ref={ref} onClose={() => ref.current?.close()} onOutsideTap={() => {
        args.onOutsideTap();
        ref.current?.close();
      }}>
          <ModalHeader title={args.title} onCancel={() => {
          args.onCancel();
          ref.current?.close();
        }} />
          <ModalBody>
            <p>{bodyContent}</p>
          </ModalBody>
          <ModalFooter>
            {args.size !== "sm" && <Button variant="secondary" type="button" onClick={() => {
            args.onCancel();
            ref.current?.close();
          }}>
                Cancel
              </Button>}
            <Button variant="validated" type="button" onClick={() => {
            args.onSubmit();
            ref.current?.close();
          }}>
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </>;
  },
  args: {
    open: false,
    title: "Modal title",
    bodyContent: 'Voici une version avec un header classique Modal.Header. Un classModifier "lg" a été mis pour montrer une version plus large d\\'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d\\'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.',
    size: undefined
  }
}`,...(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,M,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Custom Title Modal",
  render: ({
    bodyContent,
    cancelButtonText,
    saveButtonText,
    ...args
  }) => {
    return <div>
        <Modal {...args} title={undefined} onOutsideTap={() => {}}>
          <ModalHeaderBase id="headerId">{args.title}</ModalHeaderBase>
          <ModalBody>
            <p>{bodyContent}</p>
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
}`,...(g=(M=l.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};var C,x,y;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Boolean Modal",
  render: ({
    ...args
  }) => {
    const ref = useRef<HTMLDialogElement>(null);
    return <>
        <button type="button" onClick={() => ref.current?.showModal()}>
          Open modal
        </button>
        <BooleanModal ref={ref} {...args} onCancel={() => {
        ref.current?.close();
      }} onSubmit={() => {
        ref.current?.close();
      }}>
          {args.children}
        </BooleanModal>
      </>;
  },
  args: {
    open: false,
    title: "Boolean Modal title",
    children: <p>
        Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo in
        aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea eu
        laborum culpa laboris. Labore labore irure ipsum consequat enim officia
        anim ipsum aliqua excepteur qui sint. Duis sint do culpa adipisicing
        dolor adipisicing ea dolore aute nisi quis ullamco aliquip occaecat.
        Aute ut mollit amet.
      </p>,
    cancelTitle: "Cancel",
    submitTitle: "Submit",
    size: undefined
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const D=["DefaultModalStory","CustomTitleModalStory","BooleanModalStory"],E=Object.freeze(Object.defineProperty({__proto__:null,BooleanModalStory:r,CustomTitleModalStory:l,DefaultModalStory:s,__namedExportsOrder:D,default:O},Symbol.toStringTag,{value:"Module"}));export{r as B,l as C,s as D,E as M};
