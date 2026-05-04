import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{O as n,n as r,t as i,w as a}from"./iframe-B6pS4pdr.js";import{D as o,n as s}from"./distributeur-DmtDXCQS.js";var c,l,u,d,f,p,m=t((()=>{s(),c=e(n(),1),i(),l=a(),{fn:u}=__STORYBOOK_MODULE_TEST__,d=r.meta({title:`Components/Modal`,component:o,args:{open:!1,title:`Boolean Modal title`,id:`boolean-modal`,children:(0,l.jsx)(`p`,{children:`Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo in aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea eu laborum culpa laboris. Labore labore irure ipsum consequat enim officia anim ipsum aliqua excepteur qui sint. Duis sint do culpa adipisicing dolor adipisicing ea dolore aute nisi quis ullamco aliquip occaecat. Aute ut mollit amet.`}),cancelTitle:`Cancel`,submitTitle:`Submit`,onSubmit:u(),onCancel:u(),size:void 0}}),f=d.story({name:`Boolean Modal`,render:({...e})=>{let t=(0,c.useRef)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`button`,{type:`button`,onClick:()=>t.current?.showModal(),children:`Open modal`}),(0,l.jsx)(o,{ref:t,...e,onCancel:n=>{e.onCancel?.(n),t.current?.close()},onSubmit:n=>{e.onSubmit?.(n),t.current?.close()},children:e.children})]})}}),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`booleanModalMeta.story({
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
})`,...f.parameters?.docs?.source}}},p=[`BooleanModalStory`]}));m();export{f as BooleanModalStory,p as __namedExportsOrder,m as t};