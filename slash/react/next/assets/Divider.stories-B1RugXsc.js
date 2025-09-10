import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import"./CardData-Dqmws-JC.js";import"./index-DbaA8R3S.js";import{D as s}from"./Divider-BWP3yPgD.js";import"./index-CG6JzWRx.js";const d={title:"Components/Divider",component:s,args:{}},n={name:"Divider",render:({mode:r,...a})=>e.jsxs("div",{style:{display:"flex",flexDirection:r==="horizontal"||r===void 0?"column":"row",gap:"1rem"},children:[e.jsx("div",{children:e.jsx("span",{children:"Contenu 1"})}),e.jsx(s,{mode:r,...a}),e.jsx("div",{children:e.jsx("span",{children:"Contenu 2"})})]}),args:{mode:"horizontal"}};var o,i,t;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(t=(i=n.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};const l=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:l,default:d},Symbol.toStringTag,{value:"Module"}));export{f as D,n as a};
