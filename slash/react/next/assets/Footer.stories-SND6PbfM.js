import{j as e}from"./index-DK-fRI8B.js";/* empty css              */import{F as t}from"./Loader-D6y4K9Ud.js";import"./index-DbaA8R3S.js";const p={title:"Components/Footer",component:t,parameters:{options:{}}},r={name:"Default",render:({children:d,...l})=>e.jsx(t,{...l,children:d})},o={name:"Core with HTML children",render:()=>e.jsxs(t,{children:[e.jsx("a",{href:"https://www.axa.fr/",target:"blank",children:e.jsxs("strong",{children:["@ ",new Date().getFullYear()," AXA"]})}),e.jsx("em",{children:"Tous droits réservés"})]})};var s,n,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Default",
  render: ({
    children,
    ...args
  }) => <Footer {...args}>{children}</Footer>
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var c,m,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Core with HTML children",
  render: () => <Footer>
      <a href="https://www.axa.fr/" target="blank">
        <strong>@ {new Date().getFullYear()} AXA</strong>
      </a>
      <em>Tous droits réservés</em>
    </Footer>
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const u=["FooterStory","FooterCoreStory"],x=Object.freeze(Object.defineProperty({__proto__:null,FooterCoreStory:o,FooterStory:r,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{x as F,r as a};
