import{j as a}from"./jsx-runtime-D_zvdyIk.js";import"./DividerLF-CGkXvTAL.js";import"./constants-CfWbtzFy.js";import"./index-DuZrfDUH.js";import{N as i}from"./NavBar-CKSQ4VZP.js";import"./_commonjsHelpers-CqkleIqs.js";const N={title:"Components/Header/NavBar",component:i,argTypes:{setActiveLink:{action:"active link changed"},activeLink:{control:{type:"number",min:0,max:3}}}},e={render:({activeLink:s,setActiveLink:m})=>a.jsxs(i,{activeLink:s,setActiveLink:m,children:[a.jsx("a",{className:"af-navbar-item__link",href:"/mes-contrats",children:"MES CONTRATS"},"MES CONTRATS link"),a.jsx("a",{className:"af-navbar-item__link",href:"/mes-avantages",children:"MES AVANTAGES"},"MES AVANTAGES link"),a.jsx("a",{className:"af-navbar-item__link",href:"/mes-documents",children:"MES DOCUMENTS"},"MES DOCUMENTS link")]}),args:{activeLink:0}};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: ({
    activeLink,
    setActiveLink
  }: StoryProps) => <NavBar activeLink={activeLink} setActiveLink={setActiveLink}>
      <a key="MES CONTRATS link" className="af-navbar-item__link" href="/mes-contrats">
        MES CONTRATS
      </a>
      <a key="MES AVANTAGES link" className="af-navbar-item__link" href="/mes-avantages">
        MES AVANTAGES
      </a>
      <a key="MES DOCUMENTS link" className="af-navbar-item__link" href="/mes-documents">
        MES DOCUMENTS
      </a>
    </NavBar>,
  args: {
    activeLink: 0
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const E=["Default"];export{e as Default,E as __namedExportsOrder,N as default};
