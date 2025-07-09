import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{o as f,p as c}from"./Loader-DkiB5NCh.js";/* empty css              */import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{I as h}from"./Infos-CUhhMoD2.js";import{N as d}from"./Name-DEPNd60K.js";const a="af-header",b=({classModifier:p,className:u,children:g})=>{const N=f(u,p,a);return e.jsx("div",{className:N,children:e.jsx("div",{className:`container ${a}__wrapper`,children:e.jsx("header",{className:`${a}__content`,role:"banner",children:g})})})},j={component:b,title:"Components/Header"},o={args:{children:e.jsx(d,{alt:"Logo React",img:c,onClick:()=>{},subtitle:"Baseline",title:"Nom de l'application"})}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(d,{alt:"Logo React",img:c,onClick:()=>{},subtitle:"Baseline",title:"Nom de l'application"}),e.jsx(h,{infos:[{word:"Customer :",definition:"0123456789 - NOM"},{word:"Wallet:",definition:"000123456789"},{word:"Status :",definition:"New business"}]})]})}};var s,r,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const x=["HeaderWithName","HeaderWithNameAndInfos"],O=Object.freeze(Object.defineProperty({__proto__:null,HeaderWithName:o,HeaderWithNameAndInfos:t,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{O as H,o as a,t as b};
