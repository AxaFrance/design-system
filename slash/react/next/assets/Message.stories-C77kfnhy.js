import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import"./CardData---QWWqDB.js";import{M as L}from"./Message-BI_xweSw.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as j}from"./index-28pPPJTf.js";const S=[void 0,"success","info","warning","error"],o={options:S,control:{type:"inline-radio"},table:{type:{summary:"string"},category:"Style"},description:"Variant of the message. Used to determine the icon and style of the message."},E={title:"Components/Message",component:L,args:{onClose:j()},argTypes:{classModifier:o,variant:o,onClose:{action:"close",description:"Function called when the close button is clicked.",table:{category:"Events"}},closeButtonAriaLabel:{control:{type:"text"},description:"Aria label for the close button.",table:{category:"Accessibility"}},title:{control:{type:"text"},description:"Title of the message.",table:{category:"Content",type:{summary:"ReactNode"}}},children:{control:{type:"text"},table:{category:"Content",type:{summary:"ReactNode"}},description:"Content of the message."}}},t={args:{title:"Error: some fields are invalid",closeButtonAriaLabel:"close message",children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Last name is ",e.jsx("strong",{children:"required"})]}),e.jsxs("li",{children:["First name is ",e.jsx("strong",{children:"required"})]}),e.jsxs("li",{children:["Email is ",e.jsx("strong",{children:"required"})]}),e.jsxs("li",{children:["Date format is ",e.jsx("strong",{children:"invalid"})]})]})},argTypes:{classModifier:o,variant:o,title:{type:"string"}}},r={args:{variant:"danger",title:"Attention: des informations sont manquantes",closeButtonAriaLabel:"close"}},s={args:{variant:"info",title:"Attention: des informations sont manquantes",closeButtonAriaLabel:"close"}},n={args:{variant:"success",title:"Succès: votre demande a bien été enregistrée.",closeButtonAriaLabel:"close alert"}},a={args:{variant:"error",title:"Erreur dans les champs suivants :",closeButtonAriaLabel:"close",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Le nom est obligatoire"}),e.jsx("li",{children:"Le prénom est obligatoire"}),e.jsx("li",{children:"L'email est obligatoire"}),e.jsx("li",{children:"Le format de date est invalide"})]})}};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: "Error: some fields are invalid",
    closeButtonAriaLabel: "close message",
    children: <ul>
        <li>
          Last name is <strong>required</strong>
        </li>
        <li>
          First name is <strong>required</strong>
        </li>
        <li>
          Email is <strong>required</strong>
        </li>
        <li>
          Date format is <strong>invalid</strong>
        </li>
      </ul>
  },
  argTypes: {
    classModifier: variantInputType,
    variant: variantInputType,
    title: {
      type: "string"
    }
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    title: "Attention: des informations sont manquantes",
    closeButtonAriaLabel: "close"
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,p,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Attention: des informations sont manquantes",
    closeButtonAriaLabel: "close"
  }
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,h,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Succès: votre demande a bien été enregistrée.",
    closeButtonAriaLabel: "close alert"
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,A,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "error",
    title: "Erreur dans les champs suivants :",
    closeButtonAriaLabel: "close",
    children: <ul>
        <li>Le nom est obligatoire</li>
        <li>Le prénom est obligatoire</li>
        <li>L&apos;email est obligatoire</li>
        <li>Le format de date est invalide</li>
      </ul>
  }
}`,...(x=(A=a.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};const B=["Default","DangerAlert","InfoAlert","SuccessAlert","ErrorAlert"],F=Object.freeze(Object.defineProperty({__proto__:null,DangerAlert:r,Default:t,ErrorAlert:a,InfoAlert:s,SuccessAlert:n,__namedExportsOrder:B,default:E},Symbol.toStringTag,{value:"Module"}));export{t as D,F as M};
