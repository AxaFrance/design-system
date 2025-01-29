import{j as a}from"./jsx-runtime-BjG_zV1W.js";/* empty css               */import{a as n}from"./NavBarItem-CCXfAJDV.js";import"./index-C33_amOP.js";import"./getComponentClassName-CfMiunrP.js";const S={title:"Components/NavBar/NavBarItem",component:n,args:{hasFocus:!1},argTypes:{onClick:{action:"onClick"},classModifier:{control:{type:"select",options:["","active"]}}}},s=e=>i=>{i.preventDefault(),e==null||e(i)},k=({onClick:e,...i})=>a.jsx("ul",{style:{listStyle:"none"},children:a.jsx(n,{...i,onClick:s(e),style:{width:"100px"},actionElt:a.jsx("a",{className:"af-nav__link",href:"/home",onClick:s(e),children:"Home"})})}),t={name:"Default",render:k,args:{classModifier:""}},r={name:"Active",render:k,args:{classModifier:"active"}},l={name:"Active with children",render:({onClick:e,...i})=>a.jsx("div",{style:{height:"300px"},children:a.jsxs(n,{style:{width:"100px"},"aria-haspopup":"true","aria-expanded":"false",ariaLabel:"Table",className:"af-nav__item--haschild af-nav__item af-nav__item--open",...i,onClick:s(e),actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc",children:"Doc"}),children:[a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien",onClick:s(e),children:"Sous lien"})},"doc-1"),a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien2",onClick:s(e),children:"Sous lien2"})},"doc-2"),a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien3",onClick:s(e),children:"Sous lien3"})},"doc-3"),a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien4",onClick:s(e),children:"Sous lien4"})},"doc-4")]})}),args:{classModifier:""}};var o,c,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Default",
  render: template,
  args: {
    classModifier: ""
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,f,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Active",
  render: template,
  args: {
    classModifier: "active"
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,p,u;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Active with children",
  render: ({
    onClick,
    ...args
  }) => <div style={{
    height: "300px"
  }}>
      <NavBarItem style={{
      width: "100px"
    }} aria-haspopup="true" aria-expanded="false" ariaLabel="Table" className="af-nav__item--haschild af-nav__item af-nav__item--open" {...args} onClick={withPreventDefaultClick(onClick)} actionElt={<a className="af-nav__link" href="/doc">
            Doc
          </a>}>
        <NavBarItem key="doc-1" actionElt={<a className="af-nav__link" href="/doc/sous-lien" onClick={withPreventDefaultClick(onClick)}>
              Sous lien
            </a>} />
        <NavBarItem key="doc-2" actionElt={<a className="af-nav__link" href="/doc/sous-lien2" onClick={withPreventDefaultClick(onClick)}>
              Sous lien2
            </a>} />
        <NavBarItem key="doc-3" actionElt={<a className="af-nav__link" href="/doc/sous-lien3" onClick={withPreventDefaultClick(onClick)}>
              Sous lien3
            </a>} />
        <NavBarItem key="doc-4" actionElt={<a className="af-nav__link" href="/doc/sous-lien4" onClick={withPreventDefaultClick(onClick)}>
              Sous lien4
            </a>} />
      </NavBarItem>
    </div>,
  args: {
    classModifier: ""
  }
}`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const j=["NavBarItemDefaultStory","ActiveNavBarItemStory","NavBarItemWithChildrenStory"];export{r as ActiveNavBarItemStory,t as NavBarItemDefaultStory,l as NavBarItemWithChildrenStory,j as __namedExportsOrder,S as default};
