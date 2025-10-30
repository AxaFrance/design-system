import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as j,c as x,r}from"./CardData-BOncjv5M.js";/* empty css               */import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{I as h}from"./Infos-Baq4uweT.js";import{N as s}from"./Name-o632F96L.js";import{U as H}from"./User-BjJ31b7T.js";const n="af-header",S=({classModifier:a,className:C,children:w})=>{const b=j(C,a,n);return e.jsx("div",{className:x("af-container",b),children:e.jsx("header",{className:`${n}__content`,role:"banner",children:w})})},W={component:S,title:"Components/Header"},o={args:{children:e.jsx(s,{alt:"Logo React",img:r,onClick:()=>{},subtitle:"Baseline",title:"Nom de l'application"})}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s,{alt:"Logo React",img:r,onClick:()=>{},subtitle:"Baseline",title:"Nom de l'application"}),e.jsx(h,{infos:[{word:"Customer :",definition:"0123456789 - NOM"},{word:"Wallet:",definition:"000123456789"},{word:"Status :",definition:"New business"}]})]})}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(s,{alt:"Logo React",img:r,onClick:()=>{},subtitle:"Baseline",title:"Nom de l'application"}),e.jsx(h,{infos:[{word:"Customer :",definition:"0123456789 - NOM"},{word:"Wallet:",definition:"000123456789"},{word:"Status :",definition:"New business"}]}),e.jsx(H,{name:"Pierre Martin",profile:"profile",title:"Voir mon profil",onClick:({event:a})=>{a.preventDefault()},href:"/#"})]})}};var l,d,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <Name alt="Logo React" img={logo} onClick={() => {}} subtitle="Baseline" title="Nom de l'application" />
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var u,g,N;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
        <User name="Pierre Martin" profile="profile" title="Voir mon profil" onClick={({
        event
      }) => {
        event.preventDefault();
      }} href="/#" />
      </>
  }
}`,...(N=(g=i.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};const k=["HeaderWithName","HeaderWithNameAndInfos","HeaderWithNameUserAndInfos"],A=Object.freeze(Object.defineProperty({__proto__:null,HeaderWithName:o,HeaderWithNameAndInfos:t,HeaderWithNameUserAndInfos:i,__namedExportsOrder:k,default:W},Symbol.toStringTag,{value:"Module"}));export{A as H,o as a,t as b};
