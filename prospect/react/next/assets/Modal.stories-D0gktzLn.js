import{a as e,n as t,r as n}from"./chunk-DnJy8xQt.js";import{k as r}from"./iframe-D417mHAO.js";import{t as i}from"./jsx-runtime-CXZ2plg1.js";import{ht as a,t as o,y as s}from"./prospect-DFDSrotB.js";import{n as c,t as l}from"./account_balance-DCF0XqHL.js";import{t as u}from"./Modal.story-BlQDX_kj.js";var d=n({MobilePlayground:()=>y,ModalContent:()=>_,Playground:()=>v,__namedExportsOrder:()=>b,default:()=>g}),f,p,m,h,g,_,v,y,b,x=t((()=>{u(),o(),c(),f=e(r(),1),p=i(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Modal`,component:s,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`desktop`}},args:{onClose:h(),onCancel:h()}},_={name:`Modal`,decorators:[(e,{args:{open:t,...n}})=>{let r=(0,f.useRef)(null);return(0,f.useLayoutEffect)(()=>{if(t){r.current?.showModal();return}r.current?.close()},[t]),(0,p.jsx)(e,{args:{...n,ref:r}})}],args:{open:!0,title:`Modal title`,headingProps:{firstSubtitle:`Modal subtitle`,icon:l,iconProps:{variant:`primary`}},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris`,secondaryButtonProps:{children:`Cancel`,onClick:m(`[Cancel] onClick`)},primaryButtonProps:{children:`Submit`,onClick:m(`[Submit] onClick`)}}},v={decorators:[(e,{args:{secondaryButtonProps:t={},...n}})=>{let r=(0,f.useRef)(null),i=()=>{n.onClose?.(),r.current?.close()},o=e=>{t.onClick?.(e),r.current?.close()};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`button-wrapper`,children:(0,p.jsx)(a,{onClick:()=>r.current?.showModal(),children:`Open the Modal`})}),(0,p.jsx)(e,{args:{...n,ref:r,onClose:i,secondaryButtonProps:{...t,onClick:o}}})]})}],args:{..._.args,open:void 0}},y={...v,parameters:{viewport:{defaultViewport:`mobile1`}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
      firstSubtitle: "Modal subtitle",
      icon: bank,
      iconProps: {
        variant: "primary"
      }
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Playground,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`ModalContent`,`Playground`,`MobilePlayground`]}));x();export{y as MobilePlayground,_ as ModalContent,v as Playground,b as __namedExportsOrder,g as default,x as n,d as t};