import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{f as C}from"./index-C_FWhylE.js";import{A as b}from"./Alert-D2MQI0tE.js";const j=["success","info","danger","error"],x={title:"Components/Alert",component:b,args:{onClose:C()}},s={args:{title:"Attention: Ceci est une alerte"},argTypes:{classModifier:{options:j,control:{type:"select"}}}},n={args:{classModifier:"danger",title:"Attention: des informations sont manquantes",iconClassName:"glyphicon glyphicon-alert"}},r={args:{classModifier:"info",title:"Attention: des informations sont manquantes",iconClassName:"glyphicon glyphicon-info-sign"}},o={args:{classModifier:"success",title:"Succès: votre demande a bien été enregistrée.",iconClassName:"glyphicon glyphicon-ok"}},t={args:{classModifier:"error",title:"Erreur dans les champs suivants :",iconClassName:"glyphicon glyphicon-minus-sign",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Le nom est obligatoire"}),e.jsx("li",{children:"Le prénom est obligatoire"}),e.jsx("li",{children:"L'email est obligatoire"}),e.jsx("li",{children:"Le format de date est invalide"})]})}};var i,a,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(a=s.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    classModifier: "danger",
    title: "Attention: des informations sont manquantes",
    iconClassName: "glyphicon glyphicon-alert"
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    classModifier: "info",
    title: "Attention: des informations sont manquantes",
    iconClassName: "glyphicon glyphicon-info-sign"
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,h,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    classModifier: "success",
    title: "Succès: votre demande a bien été enregistrée.",
    iconClassName: "glyphicon glyphicon-ok"
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var A,S,M;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    classModifier: "error",
    title: "Erreur dans les champs suivants :",
    iconClassName: "glyphicon glyphicon-minus-sign",
    children: <ul>
        <li>Le nom est obligatoire</li>
        <li>Le prénom est obligatoire</li>
        <li>L&apos;email est obligatoire</li>
        <li>Le format de date est invalide</li>
      </ul>
  }
}`,...(M=(S=t.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};const E=["Default","DangerAlert","InfoAlert","SuccessAlert","ErrorAlert"],D=Object.freeze(Object.defineProperty({__proto__:null,DangerAlert:n,Default:s,ErrorAlert:t,InfoAlert:r,SuccessAlert:o,__namedExportsOrder:E,default:x},Symbol.toStringTag,{value:"Module"}));export{D as A,s as D};
