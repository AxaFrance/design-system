import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{L as S}from"./LoaderLF-JQXF76to.js";/* empty css               */import"./LoaderCommon-DCg8_8er.js";import{r as i}from"./index-CtOEgLBf.js";const x={title:"Components/Loader",component:S,parameters:{layout:"fullscreen",viewport:{defaultViewport:"desktop"}},argTypes:{title:{control:"text",description:"Titre du loader (obligatoire)"},subtitle:{control:"text",description:"Sous-titre du loader (optionnel)"},spinnerProps:{control:"object",description:"Props à passer au Spinner"}}},e={args:{title:"Chargement en cours",subtitle:"Veuillez patienter"}},r={decorators:[(g,{args:{open:n=!0,isDialog:t=!0,...f}})=>{const o=i.useRef(null);return i.useEffect(()=>{var s,a;if(n&&t){(s=o.current)==null||s.showModal();return}(a=o.current)==null||a.close()},[n,t]),b.jsx(g,{args:{...f,isDialog:t,ref:o}})}],args:{title:"Chargement en cours",subtitle:"Merci de patienter quelques instants"}};var l,u,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "Chargement en cours",
    subtitle: "Veuillez patienter"
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [(Story, {
    args: {
      open = true,
      isDialog = true,
      ...args
    }
  }) => {
    const modalRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
      if (open && isDialog) {
        modalRef.current?.showModal();
        return;
      }
      modalRef.current?.close();
    }, [open, isDialog]);
    return <Story args={{
      ...args,
      isDialog,
      ref: modalRef
    }} />;
  }],
  args: {
    title: "Chargement en cours",
    subtitle: "Merci de patienter quelques instants"
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const y=["Playground","Dialog"],M=Object.freeze(Object.defineProperty({__proto__:null,Dialog:r,Playground:e,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{M as L,e as P};
