import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{nt as n}from"./iframe-Cnh8_n8z.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{P as i,t as a}from"./client-DZrBRInO.js";var o=t({Dialog:()=>d,Playground:()=>u,__namedExportsOrder:()=>f,default:()=>l}),s,c,l,u,d,f;function p(){return(p=e((()=>{a(),s=n(),c=r(),l={title:`Components/Loader`,component:i,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`desktop`}},argTypes:{title:{control:`text`,description:`Titre du loader (obligatoire)`},subtitle:{control:`text`,description:`Sous-titre du loader (optionnel)`},spinnerProps:{control:`object`,description:`Props à passer au Spinner`}}},u={args:{title:`Chargement en cours`,subtitle:`Veuillez patienter`}},d={decorators:[(e,{args:{isDialog:t=!0,...n}})=>{let r=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(t){r.current?.showModal();return}r.current?.close()},[t]),(0,c.jsx)(e,{args:{...n,isDialog:t,ref:r}})}],args:{title:`Chargement en cours`,subtitle:`Merci de patienter quelques instants`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Chargement en cours",
    subtitle: "Veuillez patienter"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: [(Story, {
    args: {
      isDialog = true,
      ...args
    }
  }) => {
    const modalRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
      if (isDialog) {
        modalRef.current?.showModal();
        return;
      }
      modalRef.current?.close();
    }, [isDialog]);
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
}`,...d.parameters?.docs?.source}}},f=[`Playground`,`Dialog`]})))()}export{u as n,p as r,o as t};