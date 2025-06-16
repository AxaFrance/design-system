import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./ToggleCommon-DHAoizrE.js";import{a as d,b as C,c as f,d as M}from"./constants-Ml-WVx_L.js";import{r as x}from"./index-DuZrfDUH.js";import{h as B}from"./home-fill-DE-f0Phy.js";import{f as n}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";const S={title:"Components/Modal/ModalCore",component:d,parameters:{layout:"fullscreen"},args:{onSubmit:n(),onCancel:n(),onOutsideTap:n(),onClose:n()}},s={name:"Default Modal",render:({bodyContent:c,cancelButtonText:p,saveButtonText:m,...t})=>{const r=x.useRef(null);return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:()=>{var e;return(e=r.current)==null?void 0:e.showModal()},children:"Open the modal"}),o.jsxs(d,{...t,ref:r,onClose:()=>{var e;return(e=r.current)==null?void 0:e.close()},onOutsideTap:()=>{var e;t.onOutsideTap(),(e=r.current)==null||e.close()},children:[o.jsx(C,{title:t.title,subtitle:"Modal subtitle",iconTitle:B,onCancel:()=>{var e;t.onCancel(),(e=r.current)==null||e.close()}}),o.jsx(f,{children:o.jsx("p",{children:c})}),o.jsxs(M,{children:[o.jsx(a,{variant:"secondary",onClick:()=>{var e;t.onCancel(),(e=r.current)==null||e.close()},children:p}),o.jsx(a,{variant:"primary",onClick:()=>{var e;t.onSubmit(),(e=r.current)==null||e.close()},children:m})]})]})]})},args:{open:!1,title:"Modal title",bodyContent:`Voici une version avec un header classique Modal.Header. Un classModifier "lg" a été mis pour montrer une version plus large d'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.`,cancelButtonText:"Annuler",saveButtonText:"Valider"}};var l,i,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Default Modal",
  render: ({
    bodyContent,
    cancelButtonText,
    saveButtonText,
    ...args
  }) => {
    const ref = useRef<HTMLDialogElement>(null);
    return <>
        <Button onClick={() => ref.current?.showModal()}>Open the modal</Button>
        <ModalCore {...args} ref={ref} onClose={() => ref.current?.close()} onOutsideTap={() => {
        args.onOutsideTap();
        ref.current?.close();
      }}>
          <ModalCoreHeader title={args.title} subtitle="Modal subtitle" iconTitle={home} onCancel={() => {
          args.onCancel();
          ref.current?.close();
        }} />
          <ModalCoreBody>
            <p>{bodyContent}</p>
          </ModalCoreBody>
          <ModalCoreFooter>
            <Button variant="secondary" onClick={() => {
            args.onCancel();
            ref.current?.close();
          }}>
              {cancelButtonText}
            </Button>

            <Button variant="primary" onClick={() => {
            args.onSubmit();
            ref.current?.close();
          }}>
              {saveButtonText}
            </Button>
          </ModalCoreFooter>
        </ModalCore>
      </>;
  },
  args: {
    open: false,
    title: "Modal title",
    bodyContent: 'Voici une version avec un header classique Modal.Header. Un classModifier "lg" a été mis pour montrer une version plus large d\\'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d\\'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.',
    cancelButtonText: "Annuler",
    saveButtonText: "Valider"
  }
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const O=["DefaultModalStory"];export{s as DefaultModalStory,O as __namedExportsOrder,S as default};
