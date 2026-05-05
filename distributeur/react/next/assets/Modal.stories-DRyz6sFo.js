import{a as e,n as t,r as n}from"./chunk-DnJy8xQt.js";import{O as r,n as i,t as a,w as o}from"./iframe-De-9TtK1.js";import{A as s,O as c,T as l,Tt as u,k as d,n as f}from"./distributeur-Ct4qDp97.js";var p=n({DefaultModalStory:()=>y,__namedExportsOrder:()=>b,default:()=>v}),m,h,g,_,v,y,b,x=t((()=>{f(),m=e(r(),1),a(),h=o(),{fn:g}=__STORYBOOK_MODULE_TEST__,_=[{label:`Default`,value:``},{label:`Large (lg)`,value:`lg`},{label:`Small (sm)`,value:`sm`}],v=i.meta({title:`Components/Modal`,component:l,parameters:{options:{}},args:{onSubmit:g(),onCancel:g(),onOutsideTap:g()},argTypes:{size:{control:{type:`radio`,labels:{lg:`Large (lg)`,sm:`Small (sm)`,"":`Default`}},options:_.map(e=>e.value)},classModifier:{options:_.map(e=>e.value),control:{type:`radio`,labels:{"":`Default`,lg:`Large (lg)`,sm:`Small (sm)`}}},onClose:{table:{disable:!0}},open:{table:{disable:!0}},ref:{table:{disable:!0}}}}),y=v.story({name:`Default Modal`,render:({children:e,...t})=>{let n=(0,m.useRef)(null);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`button`,{type:`button`,onClick:()=>n.current?.showModal(),children:`Open the modal`}),(0,h.jsxs)(l,{...t,ref:n,onClose:e=>{t.onClose?.(e),n.current?.close()},onCancel:e=>{t.onCancel?.(e)},onOutsideTap:e=>{t.onOutsideTap(e),n.current?.close()},onSubmit:e=>t.onSubmit?.(e),children:[(0,h.jsx)(c,{title:t.title,onCancel:()=>{n.current?.close()}}),(0,h.jsx)(s,{children:(0,h.jsx)(`p`,{children:e})}),(0,h.jsxs)(d,{children:[t.size!==`sm`&&(0,h.jsx)(u,{variant:`secondary`,type:`button`,onClick:()=>{n.current?.close()},children:`Cancel`}),(0,h.jsx)(u,{variant:`validated`,type:`button`,onClick:()=>{n.current?.close()},children:`Save`})]})]})]})},args:{open:!1,title:`Modal title`,children:`Voici une version avec un header classique Modal.Header. Un classModifier "lg" a été mis pour montrer une version plus large d'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.`,size:void 0}}),y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Default Modal",
  render: ({
    children,
    ...args
  }) => {
    const ref = useRef<HTMLDialogElement>(null);
    return <>
        <button type="button" onClick={() => ref.current?.showModal()}>
          Open the modal
        </button>
        <Modal {...args} ref={ref} onClose={e => {
        args.onClose?.(e);
        ref.current?.close();
      }} onCancel={e => {
        args.onCancel?.(e);
      }} onOutsideTap={e => {
        args.onOutsideTap(e);
        ref.current?.close();
      }} onSubmit={e => args.onSubmit?.(e)}>
          <ModalHeader title={args.title} onCancel={() => {
          ref.current?.close();
        }} />
          <ModalBody>
            <p>{children}</p>
          </ModalBody>
          <ModalFooter>
            {args.size !== "sm" && <Button variant="secondary" type="button" onClick={() => {
            ref.current?.close();
          }}>
                Cancel
              </Button>}
            <Button variant="validated" type="button" onClick={() => {
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
    children: 'Voici une version avec un header classique Modal.Header. Un classModifier "lg" a été mis pour montrer une version plus large d\\'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d\\'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.',
    size: undefined
  }
})`,...y.input.parameters?.docs?.source}}},b=[`DefaultModalStory`]}));x();export{y as DefaultModalStory,b as __namedExportsOrder,v as default,x as n,p as t};