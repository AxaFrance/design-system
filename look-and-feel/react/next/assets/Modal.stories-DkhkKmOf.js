import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{B as d}from"./ContentItemMonoLF-D0_1Lemi.js";import{M as c}from"./constants-Bav1AsHf.js";import{r as p}from"./index-DuZrfDUH.js";import{h as f}from"./home-fill-DE-f0Phy.js";import{f as r}from"./index-28pPPJTf.js";const b={title:"Components/Modal",component:c,parameters:{layout:"fullscreen"},args:{onSubmit:r(),onCancel:r()}},i={name:"Modal",render:({children:m,...e})=>{const a=p.useRef(null);return n.jsxs(n.Fragment,{children:[n.jsx(d,{onClick:()=>{var t;return(t=a.current)==null?void 0:t.showModal()},children:"Open the Modal"}),n.jsx(c,{...e,ref:a,onCancel:t=>{var o;e.onCancel(t),(o=a.current)==null||o.close()},onSubmit:t=>{var o;(o=e==null?void 0:e.onSubmit)==null||o.call(e,t)},children:m})]})},args:{open:!1,title:"Modal title",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris",cancelTitle:"Cancel",submitTitle:"Submit",subtitle:"Modal subtitle",iconTitle:f}};var l,u,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Modal",
  render: ({
    children,
    ...args
  }) => {
    const ref = useRef<HTMLDialogElement>(null);
    return <>
        <Button onClick={() => ref.current?.showModal()}>Open the Modal</Button>
        <Modal {...args} ref={ref} onCancel={e => {
        args.onCancel(e as React.MouseEvent | React.KeyboardEvent);
        ref.current?.close();
      }} onSubmit={e => {
        args?.onSubmit?.(e as React.MouseEvent | React.KeyboardEvent);
        // Submit the modal form
      }}>
          {children}
        </Modal>
      </>;
  },
  args: {
    open: false,
    title: "Modal title",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris",
    cancelTitle: "Cancel",
    submitTitle: "Submit",
    subtitle: "Modal subtitle",
    iconTitle: home
  }
}`,...(s=(u=i.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};const M=["DefaultModalStory"],q=Object.freeze(Object.defineProperty({__proto__:null,DefaultModalStory:i,__namedExportsOrder:M,default:b},Symbol.toStringTag,{value:"Module"}));export{i as D,q as M};
