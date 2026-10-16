import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{nt as n}from"./iframe-VlrpEgMj.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{A as i,Yn as a,t as o}from"./prospect-BKsE65zz.js";import{n as s,t as c}from"./account_balance-Y4catGI9.js";import"./Modal.story-C9GyEGyU.js";var l=t({MobilePlayground:()=>_,ModalContent:()=>h,Playground:()=>g,__namedExportsOrder:()=>v,default:()=>m}),u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{o(),s(),u=n(),d=r(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Modal`,component:i,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`desktop`}},args:{onClose:p(),onCancel:p()}},h={name:`Modal`,decorators:[(e,{args:{open:t,...n}})=>{let r=(0,u.useRef)(null);return(0,u.useLayoutEffect)(()=>{if(t){r.current?.showModal();return}r.current?.close()},[t]),(0,d.jsx)(e,{args:{...n,ref:r}})}],args:{open:!0,title:`Modal title`,headingProps:{firstSubtitle:`Modal subtitle`,icon:c,iconProps:{variant:`primary`}},children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris`,secondaryButtonProps:{children:`Cancel`,onClick:f(`[Cancel] onClick`)},primaryButtonProps:{children:`Submit`,onClick:f(`[Submit] onClick`)}}},g={decorators:[(e,{args:{secondaryButtonProps:t={},...n}})=>{let r=(0,u.useRef)(null),i=()=>{n.onClose?.(),r.current?.close()},o=e=>{t.onClick?.(e),r.current?.close()};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{className:`button-wrapper`,children:(0,d.jsx)(a,{onClick:()=>r.current?.showModal(),children:`Open the Modal`})}),(0,d.jsx)(e,{args:{...n,ref:r,onClose:i,secondaryButtonProps:{...t,onClick:o}}})]})}],args:{...h.args,open:void 0}},_={...g,parameters:{viewport:{defaultViewport:`mobile1`}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  ...Playground,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`ModalContent`,`Playground`,`MobilePlayground`]})))()}export{g as n,y as r,l as t};