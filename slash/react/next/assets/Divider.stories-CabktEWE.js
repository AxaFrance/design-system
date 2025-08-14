import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{u as l}from"./Loader-CmhshmuS.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";const t=({mode:n="horizontal",classModifier:o})=>{const d=l("af-divider",o,{"af-divider--horizontal":n==="horizontal","af-divider--vertical":n==="vertical"});return e.jsx("hr",{className:d})},m={title:"Components/Divider",component:t,args:{}},r={name:"Divider",render:({mode:n,...o})=>e.jsxs("div",{style:{display:"flex",flexDirection:n==="horizontal"||n===void 0?"column":"row",gap:"1rem"},children:[e.jsx("div",{children:e.jsx("span",{children:"Contenu 1"})}),e.jsx(t,{mode:n,...o}),e.jsx("div",{children:e.jsx("span",{children:"Contenu 2"})})]}),args:{mode:"horizontal"}};var i,a,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const c=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:c,default:m},Symbol.toStringTag,{value:"Module"}));export{h as D,r as a};
