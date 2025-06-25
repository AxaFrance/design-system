import{j as a}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import"./Loader-C6nTMx6t.js";import"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{N as n}from"./NavBarItem-B36M-9hC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const B={title:"Components/NavBar/NavBarItem",component:n,args:{hasFocus:!1},argTypes:{onClick:{action:"onClick"},classModifier:{control:{type:"select",options:["","active"]}}}},r=e=>s=>{s.preventDefault(),e==null||e(s)},k=({onClick:e,...s})=>a.jsx("ul",{style:{listStyle:"none"},children:a.jsx(n,{...s,onClick:r(e),style:{width:"100px"},actionElt:a.jsx("a",{className:"af-nav__link",href:"/home",onClick:r(e),children:"Home"})})}),i={name:"Default",render:k,args:{classModifier:""}},t={name:"Active",render:k,args:{classModifier:"active"}},o={name:"Active with children",render:({onClick:e,...s})=>a.jsx("div",{style:{height:"300px"},children:a.jsxs(n,{style:{width:"100px"},"aria-haspopup":"true","aria-expanded":"false",ariaLabel:"Table",className:"af-nav__item--haschild af-nav__item af-nav__item--open",...s,onClick:r(e),actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc",children:"Doc"}),children:[a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien",onClick:r(e),children:"Sous lien"})},"doc-1"),a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien2",onClick:r(e),children:"Sous lien2"})},"doc-2"),a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien3",onClick:r(e),children:"Sous lien3"})},"doc-3"),a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien4",onClick:r(e),children:"Sous lien4"})},"doc-4")]})}),args:{classModifier:""}};var l,c,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Default",
  render: template,
  args: {
    classModifier: ""
  }
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,f,v;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Active",
  render: template,
  args: {
    classModifier: "active"
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,p,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Active with children",
  render: ({
    onClick,
    ...args
  }) => <div style={{
    height: "300px"
  }}>\r
      <NavBarItem style={{
      width: "100px"
    }} aria-haspopup="true" aria-expanded="false" ariaLabel="Table" className="af-nav__item--haschild af-nav__item af-nav__item--open" {...args} onClick={withPreventDefaultClick(onClick)} actionElt={<a className="af-nav__link" href="/doc">\r
            Doc\r
          </a>}>\r
        <NavBarItem key="doc-1" actionElt={<a className="af-nav__link" href="/doc/sous-lien" onClick={withPreventDefaultClick(onClick)}>\r
              Sous lien\r
            </a>} />\r
        <NavBarItem key="doc-2" actionElt={<a className="af-nav__link" href="/doc/sous-lien2" onClick={withPreventDefaultClick(onClick)}>\r
              Sous lien2\r
            </a>} />\r
        <NavBarItem key="doc-3" actionElt={<a className="af-nav__link" href="/doc/sous-lien3" onClick={withPreventDefaultClick(onClick)}>\r
              Sous lien3\r
            </a>} />\r
        <NavBarItem key="doc-4" actionElt={<a className="af-nav__link" href="/doc/sous-lien4" onClick={withPreventDefaultClick(onClick)}>\r
              Sous lien4\r
            </a>} />\r
      </NavBarItem>\r
    </div>,
  args: {
    classModifier: ""
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const I=["NavBarItemDefaultStory","ActiveNavBarItemStory","NavBarItemWithChildrenStory"];export{t as ActiveNavBarItemStory,i as NavBarItemDefaultStory,o as NavBarItemWithChildrenStory,I as __namedExportsOrder,B as default};
