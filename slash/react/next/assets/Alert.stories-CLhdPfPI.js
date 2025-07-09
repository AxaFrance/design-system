import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{a as S}from"./Loader-DJJU5oiI.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as M}from"./index-28pPPJTf.js";const B=["success","info","danger","error"],j={title:"Components/Alert",component:S,args:{onClose:M()}},o={args:{title:"Attention: Ceci est une alerte",closeButtonAriaLabel:"close"},argTypes:{classModifier:{options:B,control:{type:"select"}}}},s={args:{classModifier:"danger",title:"Attention: des informations sont manquantes",icon:"glyphicon glyphicon-alert",closeButtonAriaLabel:"close"}},n={args:{classModifier:"info",title:"Attention: des informations sont manquantes",icon:"glyphicon glyphicon-info-sign",closeButtonAriaLabel:"close"}},r={args:{classModifier:"success",title:"Succès: votre demande a bien été enregistrée.",icon:"glyphicon glyphicon-ok",closeButtonAriaLabel:"close alert"}},t={args:{classModifier:"error",title:"Erreur dans les champs suivants :",icon:"glyphicon glyphicon-minus-sign",closeButtonAriaLabel:"close",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Le nom est obligatoire"}),e.jsx("li",{children:"Le prénom est obligatoire"}),e.jsx("li",{children:"L'email est obligatoire"}),e.jsx("li",{children:"Le format de date est invalide"})]})}};var i,a,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    classModifier: "danger",
    title: "Attention: des informations sont manquantes",
    icon: "glyphicon glyphicon-alert",
    closeButtonAriaLabel: "close"
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    classModifier: "info",
    title: "Attention: des informations sont manquantes",
    icon: "glyphicon glyphicon-info-sign",
    closeButtonAriaLabel: "close"
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,A,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    classModifier: "success",
    title: "Succès: votre demande a bien été enregistrée.",
    icon: "glyphicon glyphicon-ok",
    closeButtonAriaLabel: "close alert"
  }
}`,...(h=(A=r.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var y,b,L;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    classModifier: "error",
    title: "Erreur dans les champs suivants :",
    icon: "glyphicon glyphicon-minus-sign",
    closeButtonAriaLabel: "close",
    children: <ul>
        <li>Le nom est obligatoire</li>
        <li>Le prénom est obligatoire</li>
        <li>L&apos;email est obligatoire</li>
        <li>Le format de date est invalide</li>
      </ul>
  }
}`,...(L=(b=t.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const x=["Default","DangerAlert","InfoAlert","SuccessAlert","ErrorAlert"],q=Object.freeze(Object.defineProperty({__proto__:null,DangerAlert:s,Default:o,ErrorAlert:t,InfoAlert:n,SuccessAlert:r,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{q as A,o as D};
