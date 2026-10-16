import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BL8mseS1.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,r as a}from"./iframe-CUw-2XJG.js";import{it as o,t as s}from"./distributeur-BR8zYeHf.js";var c=t({BooleanModalStory:()=>p,__namedExportsOrder:()=>m}),l,u,d,f,p,m;function h(){return(h=e((()=>{s(),l=n(),i(),u=r(),{fn:d}=__STORYBOOK_MODULE_TEST__,f=a.meta({title:`Components/Modal`,component:o,args:{open:!1,title:`Boolean Modal title`,id:`boolean-modal`,children:(0,u.jsx)(`p`,{children:`Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo in aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea eu laborum culpa laboris. Labore labore irure ipsum consequat enim officia anim ipsum aliqua excepteur qui sint. Duis sint do culpa adipisicing dolor adipisicing ea dolore aute nisi quis ullamco aliquip occaecat. Aute ut mollit amet.`}),cancelTitle:`Cancel`,submitTitle:`Submit`,onSubmit:d(),onCancel:d(),size:void 0}}),p=f.story({name:`Boolean Modal`,render:({...e})=>{let t=(0,l.useRef)(null);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`button`,{type:`button`,onClick:()=>t.current?.showModal(),children:`Open modal`}),(0,u.jsx)(o,{ref:t,...e,onCancel:n=>{e.onCancel?.(n),t.current?.close()},onSubmit:n=>{e.onSubmit?.(n),t.current?.close()},children:e.children})]})}}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`booleanModalMeta.story({
  name: "Boolean Modal",
  render: ({
    ...args
  }) => {
    const ref = useRef<HTMLDialogElement>(null);
    return <>
        <button type="button" onClick={() => ref.current?.showModal()}>
          Open modal
        </button>
        <BooleanModal ref={ref} {...args} onCancel={e => {
        args.onCancel?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
        ref.current?.close();
      }} onSubmit={e => {
        args.onSubmit?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
        ref.current?.close();
      }}>
          {args.children}
        </BooleanModal>
      </>;
  }
})`,...p.parameters?.docs?.source}}},m=[`BooleanModalStory`]})))()}export{c as n,h as r,p as t};