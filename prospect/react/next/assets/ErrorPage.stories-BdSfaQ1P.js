import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{_ as g,E as v,d as P}from"./LoaderApollo-BOCy7keK.js";/* empty css               */import"./index-CtOEgLBf.js";import{L as x}from"./LinkCommon-f368NpbJ.js";import{a as j}from"./arrow_left_alt-BzLPLjyo.js";import{L as f}from"./LayoutDemo-YXAEJQTg.js";const E=({headingProps:e,children:t,linkProps:s,LinkComponent:h,ExitLayoutComponent:a})=>r.jsxs(a,{headingProps:e,iconProps:{src:g,hasBackground:!0,variant:"error"},children:[r.jsx(a.Content,{children:t}),s?r.jsx(a.Action,{children:r.jsx(h,{className:"af-btn-client",...s})}):null]}),b=e=>r.jsx(E,{...e,LinkComponent:x,ExitLayoutComponent:v}),L={title:"Pages/Error Page",parameters:{layout:"fullscreen"}},A=()=>r.jsxs(r.Fragment,{children:[r.jsx("p",{children:"Une erreur technique est survenue et nous nous en excusons."}),r.jsx("p",{children:"Nous vous invitons à vous rapprocher d'un conseiller AXA, qui vous recontactera rapidement pour vous proposer un devis."})]}),m=({headingProps:e,linkProps:t,children:s})=>r.jsx(f,{title:"Error Page Title",children:r.jsx(b,{headingProps:e,linkProps:t,children:s})}),o={render:m,args:{headingProps:{title:"Désolé, notre service est momentanément indisponible"},linkProps:{href:"/",children:"Trouver un conseiller"},children:r.jsx(A,{})}},_=()=>r.jsxs(r.Fragment,{children:[r.jsx("p",{children:"La page que vous recherchez est introuvable."}),r.jsx("p",{children:"Nous vous invitons à vous rapprocher d'un conseiller AXA, qui vous recontactera rapidement pour vous proposer un devis."})]}),n={render:m,args:{headingProps:{title:"Page introuvable",tag:"Erreur 404",tagProps:{variant:"error"}},linkProps:{href:"/",children:"Revenir à l'accueil",leftIcon:r.jsx(P,{src:j})},children:r.jsx(_,{})}};var i,c,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Demo,
  args: {
    headingProps: {
      title: "Désolé, notre service est momentanément indisponible"
    },
    linkProps: {
      href: "/",
      children: "Trouver un conseiller"
    },
    children: <Content />
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,p,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Demo,
  args: {
    headingProps: {
      title: "Page introuvable",
      tag: "Erreur 404",
      tagProps: {
        variant: "error"
      }
    },
    linkProps: {
      href: "/",
      children: "Revenir à l'accueil",
      leftIcon: <Icon src={arrowLeftAlt} />
    },
    children: <Content404 />
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const k=["Playground","Erreur404"],N=Object.freeze(Object.defineProperty({__proto__:null,Erreur404:n,Playground:o,__namedExportsOrder:k,default:L},Symbol.toStringTag,{value:"Module"}));export{N as E,o as P};
