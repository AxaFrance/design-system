import{a as e,n as t,r as n}from"./chunk-DnJy8xQt.js";import{k as r}from"./iframe-BojXwg_C.js";import{t as i}from"./jsx-runtime-CXZ2plg1.js";import{n as a,t as o}from"./prospect-BkzNz-1t.js";var s=n({Dialog:()=>f,Playground:()=>d,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p,m=t((()=>{o(),c=e(r(),1),l=i(),u={title:`Components/Loader`,component:a,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`desktop`}},argTypes:{title:{control:`text`,description:`Titre du loader (obligatoire)`},subtitle:{control:`text`,description:`Sous-titre du loader (optionnel)`},spinnerProps:{control:`object`,description:`Props à passer au Spinner`}}},d={args:{title:`Chargement en cours`,subtitle:`Veuillez patienter`}},f={decorators:[(e,{args:{open:t=!0,isDialog:n=!0,...r}})=>{let i=(0,c.useRef)(null);return(0,c.useEffect)(()=>{if(t&&n){i.current?.showModal();return}i.current?.close()},[t,n]),(0,l.jsx)(e,{args:{...r,isDialog:n,ref:i}})}],args:{title:`Chargement en cours`,subtitle:`Merci de patienter quelques instants`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Chargement en cours",
    subtitle: "Veuillez patienter"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Dialog`]}));m();export{f as Dialog,d as Playground,p as __namedExportsOrder,u as default,m as n,s as t};