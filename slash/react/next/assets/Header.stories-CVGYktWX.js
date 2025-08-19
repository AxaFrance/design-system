import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{n as N,u as h,p as c}from"./Loader-Z_FMA2le.js";import"./index-DbaA8R3S.js";/* empty css              */import"./index-CG6JzWRx.js";import{I as b}from"./Infos-C6FAZehY.js";import{N as d}from"./Name-Bf1BQeK6.js";const a="af-header",C=({classModifier:p,className:u,children:f})=>{const g=N(u,p,a);return e.jsx("div",{className:h("af-container",g),children:e.jsx("header",{className:`${a}__content`,role:"banner",children:f})})},j={component:C,title:"Components/Header"},o={args:{children:e.jsx(d,{alt:"Logo React",img:c,onClick:()=>{},subtitle:"Baseline",title:"Nom de l'application"})}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(d,{alt:"Logo React",img:c,onClick:()=>{},subtitle:"Baseline",title:"Nom de l'application"}),e.jsx(b,{infos:[{word:"Customer :",definition:"0123456789 - NOM"},{word:"Wallet:",definition:"000123456789"},{word:"Status :",definition:"New business"}]})]})}};var s,r,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: <Name alt="Logo React" img={logo} onClick={() => {}} subtitle="Baseline" title="Nom de l'application" />
  }
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var n,l,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: <>
        <Name alt="Logo React" img={logo} onClick={() => {}} subtitle="Baseline" title="Nom de l'application" />
        <Infos infos={[{
        word: "Customer :",
        definition: "0123456789 - NOM"
      }, {
        word: "Wallet:",
        definition: "000123456789"
      }, {
        word: "Status :",
        definition: "New business"
      }]} />
      </>
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const x=["HeaderWithName","HeaderWithNameAndInfos"],R=Object.freeze(Object.defineProperty({__proto__:null,HeaderWithName:o,HeaderWithNameAndInfos:t,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{R as H,o as a,t as b};
