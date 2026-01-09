import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{F as s}from"./CardData-CisLDHWb.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";const p={title:"Components/Footer",component:s,parameters:{options:{}}},e={name:"Default",render:({children:t,...l})=>r.jsx(s,{...l,children:t})},o={name:"Core with HTML children",render:({...t})=>r.jsxs(s,{...t,children:[r.jsx("a",{href:"https://www.axa.fr/",target:"blank",children:r.jsxs("strong",{children:["@ ",new Date().getFullYear()," AXA"]})}),r.jsx("em",{children:"Tous droits réservés"})]})};var n,a,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Default",
  render: ({
    children,
    ...args
  }) => <Footer {...args}>{children}</Footer>
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var m,i,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
