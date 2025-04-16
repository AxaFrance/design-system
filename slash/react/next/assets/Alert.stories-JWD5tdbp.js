import{j as e}from"./index-DK-fRI8B.js";import{a as M}from"./Loader-XaWoVSYB.js";/* empty css              */import"./index-DbaA8R3S.js";import{f as L}from"./index-C2cC0QQF.js";const j=["success","info","danger","error"],x={title:"Components/Alert",component:M,args:{onClose:L()}},r={args:{title:"Attention: Ceci est une alerte"},argTypes:{classModifier:{options:j,control:{type:"select"}}}},n={args:{classModifier:"danger",title:"Attention: des informations sont manquantes",icon:"glyphicon glyphicon-alert"}},s={args:{classModifier:"info",title:"Attention: des informations sont manquantes",icon:"glyphicon glyphicon-info-sign"}},o={args:{classModifier:"success",title:"Succès: votre demande a bien été enregistrée.",icon:"glyphicon glyphicon-ok",ariaLabel:"Tata"}},t={args:{classModifier:"error",title:"Erreur dans les champs suivants :",icon:"glyphicon glyphicon-minus-sign",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Le nom est obligatoire"}),e.jsx("li",{children:"Le prénom est obligatoire"}),e.jsx("li",{children:"L'email est obligatoire"}),e.jsx("li",{children:"Le format de date est invalide"})]})}};var i,a,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: "Attention: Ceci est une alerte"
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "select"
      }
    }
  }
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    classModifier: "danger",
    title: "Attention: des informations sont manquantes",
    icon: "glyphicon glyphicon-alert"
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    classModifier: "info",
    title: "Attention: des informations sont manquantes",
    icon: "glyphicon glyphicon-info-sign"
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,h,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    classModifier: "success",
    title: "Succès: votre demande a bien été enregistrée.",
    icon: "glyphicon glyphicon-ok",
    ariaLabel: "Tata"
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var A,S,b;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    classModifier: "error",
    title: "Erreur dans les champs suivants :",
    icon: "glyphicon glyphicon-minus-sign",
    children: <ul>
        <li>Le nom est obligatoire</li>
        <li>Le prénom est obligatoire</li>
        <li>L&apos;email est obligatoire</li>
        <li>Le format de date est invalide</li>
      </ul>
  }
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const E=["Default","DangerAlert","InfoAlert","SuccessAlert","ErrorAlert"],T=Object.freeze(Object.defineProperty({__proto__:null,DangerAlert:n,Default:r,ErrorAlert:t,InfoAlert:s,SuccessAlert:o,__namedExportsOrder:E,default:x},Symbol.toStringTag,{value:"Module"}));export{T as A,r as D};
