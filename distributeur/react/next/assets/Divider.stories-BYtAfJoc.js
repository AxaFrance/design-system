import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./CardData-ma-i57UJ.js";import"./index-ZnYipkzV.js";import{D as t}from"./Divider-CvMfwgZt.js";import"./index-63p0MazF.js";const d={title:"Components/Divider",component:t,args:{}},n={name:"Divider",render:({mode:r,...a})=>e.jsxs("div",{style:{display:"flex",flexDirection:r==="horizontal"||r===void 0?"column":"row",gap:"1rem"},children:[e.jsx("div",{children:e.jsx("span",{children:"Contenu 1"})}),e.jsx(t,{mode:r,...a}),e.jsx("div",{children:e.jsx("span",{children:"Contenu 2"})})]}),args:{mode:"horizontal"}};var o,i,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Divider",
  render: ({
    mode,
    ...args
  }) => <div style={{
    display: "flex",
    flexDirection: mode === "horizontal" || mode === undefined ? "column" : "row",
    gap: "1rem"
  }}>
      <div>
        <span>Contenu 1</span>
      </div>
      <Divider mode={mode} {...args} />
      <div>
        <span>Contenu 2</span>
      </div>
    </div>,
  args: {
    mode: "horizontal"
  }
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const l=["Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:l,default:d},Symbol.toStringTag,{value:"Module"}));export{x as D,n as a};
