import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./CardData-HcEAgEId.js";import{M as j}from"./Message-BRQcRe2C.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{f as M}from"./index-VGPHIPc6.js";const A=[void 0,"success","info","warning","error"],o={options:A,control:{type:"inline-radio"},table:{type:{summary:"string"},category:"Style"},description:"Variant of the message. Used to determine the icon and style of the message."},S={title:"Components/Message",component:j,args:{onClose:M()},argTypes:{classModifier:o,variant:o,onClose:{action:"close",description:"Function called when the close button is clicked.",table:{category:"Events"}},closeButtonAriaLabel:{control:{type:"text"},description:"Aria label for the close button.",table:{category:"Accessibility"}},title:{control:{type:"text"},description:"Title of the message.",table:{category:"Content",type:{summary:"ReactNode"}}},children:{control:{type:"text"},table:{category:"Content",type:{summary:"ReactNode"}},description:"Content of the message."}}},s={args:{title:"Error: some fields are invalid",closeButtonAriaLabel:"close message",children:e.jsxs("ul",{children:[e.jsxs("li",{children:["Last name is ",e.jsx("strong",{children:"required"})]}),e.jsxs("li",{children:["First name is ",e.jsx("strong",{children:"required"})]}),e.jsxs("li",{children:["Email is ",e.jsx("strong",{children:"required"})]}),e.jsxs("li",{children:["Date format is ",e.jsx("strong",{children:"invalid"})]})]})},argTypes:{classModifier:o,variant:o,title:{type:"string"}}},t={args:{variant:"warning",title:"Attention: des informations sont manquantes",closeButtonAriaLabel:"close"}},r={args:{variant:"info",title:"Attention: des informations sont manquantes",closeButtonAriaLabel:"close"}},n={args:{variant:"success",title:"Succès: votre demande a bien été enregistrée.",closeButtonAriaLabel:"close alert"}},a={args:{variant:"error",title:"Erreur dans les champs suivants :",closeButtonAriaLabel:"close",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Le nom est obligatoire"}),e.jsx("li",{children:"Le prénom est obligatoire"}),e.jsx("li",{children:"L'email est obligatoire"}),e.jsx("li",{children:"Le format de date est invalide"})]})}};var i,l,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Attention: des informations sont manquantes",
    closeButtonAriaLabel: "close"
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,p,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Attention: des informations sont manquantes",
    closeButtonAriaLabel: "close"
  }
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,h,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Succès: votre demande a bien été enregistrée.",
    closeButtonAriaLabel: "close alert"
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,x,L;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(x=a.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const E=["Default","WarningMessage","InfoMessage","SuccessMessage","ErrorMessage"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:s,ErrorMessage:a,InfoMessage:r,SuccessMessage:n,WarningMessage:t,__namedExportsOrder:E,default:S},Symbol.toStringTag,{value:"Module"}));export{s as D,_ as M};
