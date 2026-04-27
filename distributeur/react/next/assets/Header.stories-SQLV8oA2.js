import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{z as h,B as r,E as a,I as g,U as w}from"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import"./index-CtOEgLBf.js";const b={component:h,title:"Components/Header"},o={args:{children:e.jsx(r,{alt:"Logo React",img:a,onClick:()=>{},subtitle:"Baseline",title:"Nom de l'application"})}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{alt:"Logo React",img:a,onClick:()=>{},subtitle:"Baseline",title:"Nom de l'application"}),e.jsx(g,{infos:[{word:"Customer :",definition:"0123456789 - NOM"},{word:"Wallet:",definition:"000123456789"},{word:"Status :",definition:"New business"}]})]})}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(r,{alt:"Logo React",img:a,onClick:()=>{},subtitle:"Baseline",title:"Nom de l'application"}),e.jsx(g,{infos:[{word:"Customer :",definition:"0123456789 - NOM"},{word:"Wallet:",definition:"000123456789"},{word:"Status :",definition:"New business"}]}),e.jsx(w,{name:"Pierre Martin",profile:"profile",title:"Voir mon profil",onClick:({event:N})=>{N.preventDefault()},href:"/#"})]})}};var s,n,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: <Name alt="Logo React" img={logo} onClick={() => {}} subtitle="Baseline" title="Nom de l'application" />
  }
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,m,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,f,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const C=["HeaderWithName","HeaderWithNameAndInfos","HeaderWithNameUserAndInfos"],W=Object.freeze(Object.defineProperty({__proto__:null,HeaderWithName:o,HeaderWithNameAndInfos:i,HeaderWithNameUserAndInfos:t,__namedExportsOrder:C,default:b},Symbol.toStringTag,{value:"Module"}));export{W as H,o as a,i as b};
