import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{N as t}from"./NavBar-DFgCLS-S.js";import"./index-uubelm5h.js";const k={title:"Components/Header/NavBar",component:t,argTypes:{setActiveLink:{action:"active link changed"},activeLink:{control:{type:"number",min:0,max:3}}}},e={render:({activeLink:i,setActiveLink:c})=>a.jsxs(t,{activeLink:i,setActiveLink:c,children:[a.jsx("a",{className:"af-navbar-item__link",href:"/mes-contrats",children:"MES CONTRATS"},"MES CONTRATS link"),a.jsx("a",{className:"af-navbar-item__link",href:"/mes-avantages",children:"MES AVANTAGES"},"MES AVANTAGES link"),a.jsx("a",{className:"af-navbar-item__link",href:"/mes-documents",children:"MES DOCUMENTS"},"MES DOCUMENTS link")]}),args:{activeLink:0}};var n,r,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,k as default};
