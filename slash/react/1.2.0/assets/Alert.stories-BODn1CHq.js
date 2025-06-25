import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{a as S}from"./Loader-C6nTMx6t.js";import"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{f as M}from"./index-28pPPJTf.js";const B=["success","info","danger","error"],j={title:"Components/Alert",component:S,args:{onClose:M()}},o={args:{title:"Attention: Ceci est une alerte",closeButtonAriaLabel:"close"},argTypes:{classModifier:{options:B,control:{type:"select"}}}},r={args:{classModifier:"danger",title:"Attention: des informations sont manquantes",icon:"glyphicon glyphicon-alert",closeButtonAriaLabel:"close"}},s={args:{classModifier:"info",title:"Attention: des informations sont manquantes",icon:"glyphicon glyphicon-info-sign",closeButtonAriaLabel:"close"}},n={args:{classModifier:"success",title:"Succès: votre demande a bien été enregistrée.",icon:"glyphicon glyphicon-ok",closeButtonAriaLabel:"close alert"}},t={args:{classModifier:"error",title:"Erreur dans les champs suivants :",icon:"glyphicon glyphicon-minus-sign",closeButtonAriaLabel:"close",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Le nom est obligatoire"}),e.jsx("li",{children:"Le prénom est obligatoire"}),e.jsx("li",{children:"L'email est obligatoire"}),e.jsx("li",{children:"Le format de date est invalide"})]})}};var i,a,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: "Attention: Ceci est une alerte",
    closeButtonAriaLabel: "close"
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "select"
      }
    }
  }
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    classModifier: "danger",
    title: "Attention: des informations sont manquantes",
    icon: "glyphicon glyphicon-alert",
    closeButtonAriaLabel: "close"
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    classModifier: "info",
    title: "Attention: des informations sont manquantes",
    icon: "glyphicon glyphicon-info-sign",
    closeButtonAriaLabel: "close"
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,A,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    classModifier: "success",
    title: "Succès: votre demande a bien été enregistrée.",
    icon: "glyphicon glyphicon-ok",
    closeButtonAriaLabel: "close alert"
  }
}`,...(h=(A=n.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var y,b,L;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    classModifier: "error",
    title: "Erreur dans les champs suivants :",
    icon: "glyphicon glyphicon-minus-sign",
    closeButtonAriaLabel: "close",
    children: <ul>\r
        <li>Le nom est obligatoire</li>\r
        <li>Le prénom est obligatoire</li>\r
        <li>L&apos;email est obligatoire</li>\r
        <li>Le format de date est invalide</li>\r
      </ul>
  }
}`,...(L=(b=t.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const x=["Default","DangerAlert","InfoAlert","SuccessAlert","ErrorAlert"],q=Object.freeze(Object.defineProperty({__proto__:null,DangerAlert:r,Default:o,ErrorAlert:t,InfoAlert:s,SuccessAlert:n,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{q as A,o as D};
