import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{f as b}from"./index-C_FWhylE.js";import{A as j}from"./Alert-Bvh5wFmz.js";const x=["success","info","danger","error"],E={title:"Components/Alert",component:j,args:{onClose:b()}},n={args:{title:"Attention: Ceci est une alerte"},argTypes:{classModifier:{options:x,control:{type:"select"}}}},r={args:{classModifier:"danger",title:"Attention: des informations sont manquantes",icon:"glyphicon glyphicon-alert"}},s={args:{classModifier:"info",title:"Attention: des informations sont manquantes",icon:"glyphicon glyphicon-info-sign"}},o={args:{classModifier:"success",title:"Succès: votre demande a bien été enregistrée.",icon:"glyphicon glyphicon-ok"}},t={args:{classModifier:"error",title:"Erreur dans les champs suivants :",icon:"glyphicon glyphicon-minus-sign",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Le nom est obligatoire"}),e.jsx("li",{children:"Le prénom est obligatoire"}),e.jsx("li",{children:"L'email est obligatoire"}),e.jsx("li",{children:"Le format de date est invalide"})]})}};var i,a,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(a=n.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    classModifier: "danger",
    title: "Attention: des informations sont manquantes",
    icon: "glyphicon glyphicon-alert"
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    classModifier: "info",
    title: "Attention: des informations sont manquantes",
    icon: "glyphicon glyphicon-info-sign"
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,h,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    classModifier: "success",
    title: "Succès: votre demande a bien été enregistrée.",
    icon: "glyphicon glyphicon-ok"
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var A,S,M;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(M=(S=t.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};const L=["Default","DangerAlert","InfoAlert","SuccessAlert","ErrorAlert"],_=Object.freeze(Object.defineProperty({__proto__:null,DangerAlert:r,Default:n,ErrorAlert:t,InfoAlert:s,SuccessAlert:o,__namedExportsOrder:L,default:E},Symbol.toStringTag,{value:"Module"}));export{_ as A,n as D};
