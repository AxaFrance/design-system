import{j as t}from"./index-C1mcBe1y.js";/* empty css                    */import{M as P,o as w}from"./ToggleCommon--wKkoZ1I.js";import{r as m}from"./index-DbaA8R3S.js";import{b as B}from"./account_balance-B8UiBJSK.js";import{a as f}from"./index-B-lxVbXh.js";import{f as g}from"./index-28pPPJTf.js";const E={title:"Components/Modal",component:P,parameters:{layout:"fullscreen",viewport:{defaultViewport:"desktop"}},args:{onClose:g(),onCancel:g()}},a={name:"Modal",decorators:[(d,{args:{open:e,...r}})=>{const n=m.useRef(null);return m.useLayoutEffect(()=>{var u,c;if(e){(u=n.current)==null||u.showModal();return}(c=n.current)==null||c.close()},[e]),t.jsx(d,{args:{...r,ref:n}})}],args:{open:!0,title:"Modal title",headingProps:{firstSubtitle:"Modal subtitle"},icon:B,iconProps:{variant:"primary"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris",secondaryButtonProps:{children:"Cancel",onClick:f("[Cancel] onClick")},primaryButtonProps:{children:"Submit",onClick:f("[Submit] onClick")}}},i={decorators:[(d,{args:{secondaryButtonProps:e={},...r}})=>{const n=m.useRef(null),u=()=>{var o,s;(o=r.onClose)==null||o.call(r),(s=n.current)==null||s.close()},c=o=>{var s,p;(s=e.onClick)==null||s.call(e,o),(p=n.current)==null||p.close()};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"button-wrapper",children:t.jsx(w,{onClick:()=>{var o;return(o=n.current)==null?void 0:o.showModal()},children:"Open the Modal"})}),t.jsx(d,{args:{...r,ref:n,onClose:u,secondaryButtonProps:{...e,onClick:c}}})]})}],args:{...a.args,open:void 0}},l={...i,parameters:{viewport:{defaultViewport:"mobile1"}}};var C,b,M;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Modal",
  decorators: [(Story, {
    args: {
      open,
      ...args
    }
  }) => {
    const modalRef = useRef<HTMLDialogElement>(null);
    useLayoutEffect(() => {
      if (open) {
        modalRef.current?.showModal();
        return;
      }
      modalRef.current?.close();
    }, [open]);
    return <Story args={{
      ...args,
      ref: modalRef
    }} />;
  }],
  args: {
    open: true,
    title: "Modal title",
    headingProps: {
      firstSubtitle: "Modal subtitle"
    },
    icon: bank,
    iconProps: {
      variant: "primary"
    },
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris",
    secondaryButtonProps: {
      children: "Cancel",
      onClick: action("[Cancel] onClick")
    },
    primaryButtonProps: {
      children: "Submit",
      onClick: action("[Submit] onClick")
    }
  }
}`,...(M=(b=a.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var y,h,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [(Story, {
    args: {
      secondaryButtonProps = {},
      ...args
    }
  }) => {
    const ref = useRef<HTMLDialogElement>(null);
    const onClose = () => {
      args.onClose?.();
      ref.current?.close();
    };
    const onClickSecondaryButton: React.MouseEventHandler<HTMLButtonElement> = e => {
      secondaryButtonProps.onClick?.(e);
      ref.current?.close();
    };
    return <>
          <div className="button-wrapper">
            <Button onClick={() => ref.current?.showModal()}>
              Open the Modal
            </Button>
          </div>
          <Story args={{
        ...args,
        ref,
        onClose,
        secondaryButtonProps: {
          ...secondaryButtonProps,
          onClick: onClickSecondaryButton
        }
      }} />
        </>;
  }],
  args: {
    ...ModalContent.args,
    open: undefined
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var S,k,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Playground,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const R=["ModalContent","Playground","MobilePlayground"],H=Object.freeze(Object.defineProperty({__proto__:null,MobilePlayground:l,ModalContent:a,Playground:i,__namedExportsOrder:R,default:E},Symbol.toStringTag,{value:"Module"}));export{H as M,i as P};
