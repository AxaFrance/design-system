import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as t}from"./Loader-C1uJHYLx.js";/* empty css              */import"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";const p={title:"Components/Footer",component:t,parameters:{options:{}}},r={name:"Default",render:({children:d,...l})=>e.jsx(t,{...l,children:d})},o={name:"Core with HTML children",render:()=>e.jsxs(t,{children:[e.jsx("a",{href:"https://www.axa.fr/",target:"blank",children:e.jsxs("strong",{children:["@ ",new Date().getFullYear()," AXA"]})}),e.jsx("em",{children:"Tous droits réservés"})]})};var s,n,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Default",
  render: ({
    children,
    ...args
  }) => <Footer {...args}>{children}</Footer>
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var m,c,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Core with HTML children",
  render: () => <Footer>
      <a href="https://www.axa.fr/" target="blank">
        <strong>@ {new Date().getFullYear()} AXA</strong>
      </a>
      <em>Tous droits réservés</em>
    </Footer>
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const u=["FooterStory","FooterCoreStory"],w=Object.freeze(Object.defineProperty({__proto__:null,FooterCoreStory:o,FooterStory:r,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{w as F,r as a};
