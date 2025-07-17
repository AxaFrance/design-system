import{j as c}from"./index-C1mcBe1y.js";import{b as I}from"./account_balance-DtZWYhxz.js";import{M as K,B as N}from"./DropdownCommon-BbYE1zwe.js";import{r as _}from"./index-DbaA8R3S.js";import{v as V}from"./v4-CtRu48qb.js";import{f as C}from"./index-28pPPJTf.js";const{addons:q}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Y}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:R}=__STORYBOOK_MODULE_GLOBAL__;var U=Object.defineProperty,W=(n,e)=>{for(var t in e)U(n,t,{get:e[t],enumerable:!0})},F="storybook/actions",z=`${F}/action-event`,H={depth:10,clearOnStoryChange:!0,limit:50},A=(n,e)=>{let t=Object.getPrototypeOf(n);return!t||e(t)?t:A(t,e)},$=n=>!!(typeof n=="object"&&n&&A(n,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof n.persist=="function"),G=n=>{if($(n)){let e=Object.create(n.constructor.prototype,Object.getOwnPropertyDescriptors(n));e.persist();let t=Object.getOwnPropertyDescriptor(e,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...t,value:Object.create(r.constructor.prototype)}),e}return n},J=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?V():Date.now().toString(36)+Math.random().toString(36).substring(2);function g(n,e={}){let t={...H,...e},r=function(...a){var O,y;if(e.implicit){let b=(O="__STORYBOOK_PREVIEW__"in R?R.__STORYBOOK_PREVIEW__:void 0)==null?void 0:O.storyRenders.find(p=>p.phase==="playing"||p.phase==="rendering");if(b){let p=!((y=globalThis==null?void 0:globalThis.FEATURES)!=null&&y.disallowImplicitActionsInRenderV8),h=new Y({phase:b.phase,name:n,deprecated:p});if(p)console.warn(h);else throw h}}let o=q.getChannel(),i=J(),s=5,l=a.map(G),j=a.length>1?l:l[0],D={id:i,count:0,data:{name:n,args:j},options:{...t,maxDepth:s+(t.depth||3),allowFunction:t.allowFunction||!1}};o.emit(z,D)};return r.isAction=!0,r.implicit=e.implicit,r}const{definePreview:de}=__STORYBOOK_MODULE_PREVIEW_API__,{global:f}=__STORYBOOK_MODULE_GLOBAL__;var Q={};W(Q,{argsEnhancers:()=>ee,loaders:()=>ne});var L=(n,e)=>typeof e[n]>"u"&&!(n in e),X=n=>{let{initialArgs:e,argTypes:t,id:r,parameters:{actions:a}}=n;if(!a||a.disable||!a.argTypesRegex||!t)return{};let o=new RegExp(a.argTypesRegex);return Object.entries(t).filter(([i])=>!!o.test(i)).reduce((i,[s,l])=>(L(s,e)&&(i[s]=g(s,{implicit:!0,id:r})),i),{})},Z=n=>{let{initialArgs:e,argTypes:t,parameters:{actions:r}}=n;return r!=null&&r.disable||!t?{}:Object.entries(t).filter(([a,o])=>!!o.action).reduce((a,[o,i])=>(L(o,e)&&(a[o]=g(typeof i.action=="string"?i.action:o)),a),{})},ee=[Z,X],v=!1,te=n=>{let{parameters:{actions:e}}=n;if(!(e!=null&&e.disable)&&!v&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in f&&typeof f.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let t=f.__STORYBOOK_TEST_ON_MOCK_CALL__;t((r,a)=>{let o=r.getMockName();o!=="spy"&&(!/^next\/.*::/.test(o)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(i=>o.startsWith(i)))&&g(o)(a)}),v=!0}},ne=[te];const re={title:"Components/Modal",component:K,parameters:{layout:"fullscreen",viewport:{defaultViewport:"desktop"}},args:{onClose:C(),onCancel:C()}},u={name:"Modal",decorators:[(n,{args:{open:e,...t}})=>{const r=_.useRef(null);return _.useLayoutEffect(()=>{var a,o;if(e){(a=r.current)==null||a.showModal();return}(o=r.current)==null||o.close()},[e]),c.jsx(n,{args:{...t,ref:r}})}],args:{open:!0,title:"Modal title",headingProps:{firstSubtitle:"Modal subtitle"},icon:I,iconProps:{variant:"primary"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris",secondaryButtonProps:{children:"Cancel",onClick:g("[Cancel] onClick")},primaryButtonProps:{children:"Submit",onClick:g("[Submit] onClick")}}},d={decorators:[(n,{args:{secondaryButtonProps:e={},...t}})=>{const r=_.useRef(null),a=()=>{var i,s;(i=t.onClose)==null||i.call(t),(s=r.current)==null||s.close()},o=i=>{var s,l;(s=e.onClick)==null||s.call(e,i),(l=r.current)==null||l.close()};return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"button-wrapper",children:c.jsx(N,{onClick:()=>{var i;return(i=r.current)==null?void 0:i.showModal()},children:"Open the Modal"})}),c.jsx(n,{args:{...t,ref:r,onClose:a,secondaryButtonProps:{...e,onClick:o}}})]})}],args:{...u.args,open:void 0}},m={...d,parameters:{viewport:{defaultViewport:"mobile1"}}};var E,S,M;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(S=u.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var x,T,P;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(P=(T=d.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var k,w,B;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Playground,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(B=(w=m.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const oe=["ModalContent","Playground","MobilePlayground"],pe=Object.freeze(Object.defineProperty({__proto__:null,MobilePlayground:m,ModalContent:u,Playground:d,__namedExportsOrder:oe,default:re},Symbol.toStringTag,{value:"Module"}));export{pe as M,d as P};
