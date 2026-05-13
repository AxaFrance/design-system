import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-De-9TtK1.js";import{Ot as a,n as o}from"./distributeur-Ct4qDp97.js";var s=t({Default:()=>f,ErrorMessage:()=>g,InfoMessage:()=>m,SuccessMessage:()=>h,WarningMessage:()=>p,__namedExportsOrder:()=>_,default:()=>d}),c,l,u,d,f,p,m,h,g,_,v=e((()=>{o(),r(),c=i(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={options:[void 0,`success`,`info`,`warning`,`error`],control:{type:`inline-radio`},table:{type:{summary:`string`},category:`Style`},description:`Variant of the message. Used to determine the icon and style of the message.`},d=n.meta({title:`Components/Message`,component:a,args:{onClose:l()},argTypes:{classModifier:u,variant:u,onClose:{action:`close`,description:`Function called when the close button is clicked.`,table:{category:`Events`}},closeButtonAriaLabel:{control:{type:`text`},description:`Aria label for the close button.`,table:{category:`Accessibility`}},title:{control:{type:`text`},description:`Title of the message.`,table:{category:`Content`,type:{summary:`ReactNode`}}},children:{control:{type:`text`},table:{category:`Content`,type:{summary:`ReactNode`}},description:`Content of the message.`}}}),f=d.story({args:{title:`Error: some fields are invalid`,closeButtonAriaLabel:`close message`,children:(0,c.jsxs)(`ul`,{children:[(0,c.jsxs)(`li`,{children:[`Last name is `,(0,c.jsx)(`strong`,{children:`required`})]}),(0,c.jsxs)(`li`,{children:[`First name is `,(0,c.jsx)(`strong`,{children:`required`})]}),(0,c.jsxs)(`li`,{children:[`Email is `,(0,c.jsx)(`strong`,{children:`required`})]}),(0,c.jsxs)(`li`,{children:[`Date format is `,(0,c.jsx)(`strong`,{children:`invalid`})]})]})},argTypes:{classModifier:u,variant:u,title:{type:`string`}}}),p=d.story({args:{variant:`warning`,title:`Attention: des informations sont manquantes`,closeButtonAriaLabel:`close`}}),m=d.story({args:{variant:`info`,title:`Attention: des informations sont manquantes`,closeButtonAriaLabel:`close`}}),h=d.story({args:{variant:`success`,title:`Succès: votre demande a bien été enregistrée.`,closeButtonAriaLabel:`close alert`}}),g=d.story({args:{variant:`error`,title:`Erreur dans les champs suivants :`,closeButtonAriaLabel:`close`,children:(0,c.jsxs)(`ul`,{children:[(0,c.jsx)(`li`,{children:`Le nom est obligatoire`}),(0,c.jsx)(`li`,{children:`Le prénom est obligatoire`}),(0,c.jsx)(`li`,{children:`L'email est obligatoire`}),(0,c.jsx)(`li`,{children:`Le format de date est invalide`})]})}}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    variant: "warning",
    title: "Attention: des informations sont manquantes",
    closeButtonAriaLabel: "close"
  }
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    variant: "info",
    title: "Attention: des informations sont manquantes",
    closeButtonAriaLabel: "close"
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    variant: "success",
    title: "Succès: votre demande a bien été enregistrée.",
    closeButtonAriaLabel: "close alert"
  }
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...g.input.parameters?.docs?.source}}},_=[`Default`,`WarningMessage`,`InfoMessage`,`SuccessMessage`,`ErrorMessage`]}));v();export{f as Default,g as ErrorMessage,m as InfoMessage,h as SuccessMessage,p as WarningMessage,_ as __namedExportsOrder,d as default,v as n,s as t};