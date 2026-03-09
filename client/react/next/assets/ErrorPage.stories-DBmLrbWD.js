import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{X as g,E as v,c as x}from"./FormLayout-Dpb6mS7Y.js";/* empty css               */import"./index-ZnYipkzV.js";import{L as P}from"./LinkCommon-C5GWuTwH.js";import{a as j}from"./arrow_left_alt-BzLPLjyo.js";import{L as f}from"./LayoutDemo-Cky49j71.js";import"./index-63p0MazF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./DebugGridLF-CP5kzWY8.js";import"./FooterCommon-ClchbWrJ.js";const E=({headingProps:e,children:t,linkProps:o,LinkComponent:h,ExitLayoutComponent:a})=>r.jsxs(a,{headingProps:e,iconProps:{src:g,hasBackground:!0,variant:"error"},children:[r.jsx(a.Content,{children:t}),o?r.jsx(a.Action,{children:r.jsx(h,{className:"af-btn-client",...o})}):null]}),L=e=>r.jsx(E,{...e,LinkComponent:P,ExitLayoutComponent:v}),S={title:"Pages/Error Page",parameters:{layout:"fullscreen"}},A=()=>r.jsxs(r.Fragment,{children:[r.jsx("p",{children:"Une erreur technique est survenue et nous nous en excusons."}),r.jsx("p",{children:"Nous vous invitons à vous rapprocher d'un conseiller AXA, qui vous recontactera rapidement pour vous proposer un devis."})]}),m=({headingProps:e,linkProps:t,children:o})=>r.jsx(f,{title:"Error Page Title",children:r.jsx(L,{headingProps:e,linkProps:t,children:o})}),n={render:m,args:{headingProps:{title:"Désolé, notre service est momentanément indisponible"},linkProps:{href:"/",children:"Trouver un conseiller"},children:r.jsx(A,{})}},b=()=>r.jsxs(r.Fragment,{children:[r.jsx("p",{children:"La page que vous recherchez est introuvable."}),r.jsx("p",{children:"Nous vous invitons à vous rapprocher d'un conseiller AXA, qui vous recontactera rapidement pour vous proposer un devis."})]}),s={render:m,args:{headingProps:{title:"Page introuvable",tag:"Erreur 404",tagProps:{variant:"error"}},linkProps:{href:"/",children:"Revenir à l'accueil",leftIcon:r.jsx(x,{src:j})},children:r.jsx(b,{})}};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,p,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const _=["Playground","Erreur404"];export{s as Erreur404,n as Playground,_ as __namedExportsOrder,S as default};
