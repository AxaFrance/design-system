import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{a0 as s}from"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import"./index-CtOEgLBf.js";const p={title:"Components/Footer",component:s,parameters:{options:{}}},e={name:"Default",render:({children:t,...l})=>r.jsx(s,{...l,children:t})},o={name:"Core with HTML children",render:({...t})=>r.jsxs(s,{...t,children:[r.jsx("a",{href:"https://www.axa.fr/",target:"blank",children:r.jsxs("strong",{children:["@ ",new Date().getFullYear()," AXA"]})}),r.jsx("em",{children:"Tous droits réservés"})]})};var a,n,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Default",
  render: ({
    children,
    ...args
  }) => <Footer {...args}>{children}</Footer>
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,i,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Core with HTML children",
  render: ({
    ...args
  }) => <Footer {...args}>
      <a href="https://www.axa.fr/" target="blank">
        <strong>@ {new Date().getFullYear()} AXA</strong>
      </a>
      <em>Tous droits réservés</em>
    </Footer>
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const u=["FooterStory","FooterCoreStory"],x=Object.freeze(Object.defineProperty({__proto__:null,FooterCoreStory:o,FooterStory:e,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{x as F,e as a};
