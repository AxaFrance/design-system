import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BL8mseS1.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,r as a}from"./iframe-CjUrzS1v.js";import{Yn as o,et as s,ft as c,ot as l,t as u,ut as d}from"./distributeur-BzQs3Sl2.js";var f=t({DefaultModalStory:()=>_,__namedExportsOrder:()=>v,default:()=>g}),p,m,h,g,_,v;function y(){return(y=e((()=>{u(),p=n(),i(),m=r(),{fn:h}=__STORYBOOK_MODULE_TEST__,g=a.meta({title:`Components/Modal`,component:s,parameters:{options:{}},args:{onSubmit:h(),onCancel:h(),onOutsideTap:h()},argTypes:{size:{control:{type:`radio`,labels:{lg:`Large (lg)`,sm:`Small (sm)`,"":`Default`}},options:[{label:`Default`,value:``},{label:`Large (lg)`,value:`lg`},{label:`Small (sm)`,value:`sm`}].map(e=>e.value)},onClose:{table:{disable:!0}},open:{table:{disable:!0}},ref:{table:{disable:!0}}}}),_=g.story({name:`Default Modal`,render:({children:e,...t})=>{let n=(0,p.useRef)(null);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`button`,{type:`button`,onClick:()=>n.current?.showModal(),children:`Open the modal`}),(0,m.jsxs)(s,{...t,ref:n,onClose:e=>{t.onClose?.(e),n.current?.close()},onCancel:e=>{t.onCancel?.(e)},onOutsideTap:e=>{t.onOutsideTap(e),n.current?.close()},onSubmit:e=>t.onSubmit?.(e),children:[(0,m.jsx)(l,{title:t.title,onCancel:()=>{n.current?.close()}}),(0,m.jsx)(c,{children:(0,m.jsx)(`p`,{children:e})}),(0,m.jsxs)(d,{children:[t.size!==`sm`&&(0,m.jsx)(o,{variant:`secondary`,type:`button`,onClick:()=>{n.current?.close()},children:`Cancel`}),(0,m.jsx)(o,{variant:`validated`,type:`button`,onClick:()=>{n.current?.close()},children:`Save`})]})]})]})},args:{open:!1,title:`Modal title`,children:`Voici une version avec un header classique Modal.Header. La prop size="lg" permet d’afficher une modale plus large, et size="sm" une modale plus petite.`,size:void 0}}),_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,..._.input.parameters?.docs?.source}}},v=[`DefaultModalStory`]})))()}export{f as n,y as r,_ as t};