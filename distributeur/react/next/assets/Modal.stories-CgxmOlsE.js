import{a as e,n as t,r as n}from"./chunk-DnJy8xQt.js";import{O as r,n as i,t as a,w as o}from"./iframe-BgroMBfE.js";import{F as s,O as c,Ot as l,P as u,j as d,t as f}from"./distributeur-avOQdPsh.js";var p=n({DefaultModalStory:()=>v,__namedExportsOrder:()=>y,default:()=>_}),m,h,g,_,v,y,b=t((()=>{f(),m=e(r(),1),a(),h=o(),{fn:g}=__STORYBOOK_MODULE_TEST__,_=i.meta({title:`Components/Modal`,component:c,parameters:{options:{}},args:{onSubmit:g(),onCancel:g(),onOutsideTap:g()},argTypes:{size:{control:{type:`radio`,labels:{lg:`Large (lg)`,sm:`Small (sm)`,"":`Default`}},options:[{label:`Default`,value:``},{label:`Large (lg)`,value:`lg`},{label:`Small (sm)`,value:`sm`}].map(e=>e.value)},onClose:{table:{disable:!0}},open:{table:{disable:!0}},ref:{table:{disable:!0}}}}),v=_.story({name:`Default Modal`,render:({children:e,...t})=>{let n=(0,m.useRef)(null);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`button`,{type:`button`,onClick:()=>n.current?.showModal(),children:`Open the modal`}),(0,h.jsxs)(c,{...t,ref:n,onClose:e=>{t.onClose?.(e),n.current?.close()},onCancel:e=>{t.onCancel?.(e)},onOutsideTap:e=>{t.onOutsideTap(e),n.current?.close()},onSubmit:e=>t.onSubmit?.(e),children:[(0,h.jsx)(d,{title:t.title,onCancel:()=>{n.current?.close()}}),(0,h.jsx)(s,{children:(0,h.jsx)(`p`,{children:e})}),(0,h.jsxs)(u,{children:[t.size!==`sm`&&(0,h.jsx)(l,{variant:`secondary`,type:`button`,onClick:()=>{n.current?.close()},children:`Cancel`}),(0,h.jsx)(l,{variant:`validated`,type:`button`,onClick:()=>{n.current?.close()},children:`Save`})]})]})]})},args:{open:!1,title:`Modal title`,children:`Voici une version avec un header classique Modal.Header. La prop size="lg" permet d’afficher une modale plus large, et size="sm" une modale plus petite.`,size:void 0}}),v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
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
    children: 'Voici une version avec un header classique Modal.Header. La prop size="lg" permet d’afficher une modale plus large, et size="sm" une modale plus petite.',
    size: undefined
  }
})`,...v.input.parameters?.docs?.source}}},y=[`DefaultModalStory`]}));b();export{v as DefaultModalStory,y as __namedExportsOrder,_ as default,b as n,p as t};