import{j as a}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import"./CardData-DYdLQljx.js";import{r as s}from"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{H as N}from"./HeaderTitle-DtRYqDq5.js";import{N as k}from"./NavBar-CDgl3DUY.js";import{N as e}from"./NavBarItem-CtTw1Flc.js";const p=({children:r,menuVisible:c,subtitle:m,title:f,navBarProps:_})=>{const[d,u]=s.useState(c),l=s.useCallback(()=>{const{body:h}=document;h.classList.toggle("af-menu-open"),u(v=>!v)},[]);return a.jsxs(a.Fragment,{children:[a.jsx(k,{isVisible:d,onClick:l,..._,children:r}),a.jsx(N,{title:f,subtitle:m,toggleMenu:l})]})},x={component:p,title:"Components/Header/MenuTitleWrapper"},n={args:{children:[a.jsx(e,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/#",children:"Home"})},"home"),a.jsx(e,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/forms",children:"Forms"})},"forms"),a.jsx(e,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/fileupload",children:"Fileupload"})},"fileupload"),a.jsxs(e,{className:"af-nav__item af-nav__item--haschild","aria-haspopup":"true","aria-expanded":"false",ariaLabel:"Table",actionElt:a.jsx("a",{className:"af-nav__link",href:"/table",children:"Table"}),children:[a.jsx(e,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/table/sous-lien-1",children:"Sous lien 1"})},"table-1"),a.jsx(e,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/table/sous-lien-2",children:"Sous lien 2"})},"table-2"),a.jsx(e,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/table/sous-lien-3",children:"Sous lien 3"})},"table-3"),a.jsx(e,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/table/sous-lien-4",children:"Sous lien 4"})},"table-4")]},"table"),a.jsx(e,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/accordion",children:"Accordion"})},"accordions"),a.jsx(e,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/alerts",children:"Alerts"})},"alerts"),a.jsx(e,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/validation",children:"Validation"})},"validation"),a.jsxs(e,{className:"af-nav__item af-nav__item--haschild","aria-haspopup":"true","aria-expanded":"false",ariaLabel:"Table",actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc",children:"Doc"}),children:[a.jsx(e,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien-1",children:"Sous lien 1"})},"doc-1"),a.jsx(e,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien-2",children:"Sous lien 2"})},"doc-2"),a.jsx(e,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien-3",children:"Sous lien 3"})},"doc-3"),a.jsx(e,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien-4",children:"Sous lien 4"})},"doc-4")]},"doc")],menuVisible:!1,subtitle:"Sous titre",title:"Toolkit Axa"}};var i,t,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: [<NavBarItem actionElt={<a className="af-nav__link" href="/#">
            Home
          </a>} key="home" />, <NavBarItem actionElt={<a className="af-nav__link" href="/forms">
            Forms
          </a>} key="forms" />, <NavBarItem actionElt={<a className="af-nav__link" href="/fileupload">
            Fileupload
          </a>} key="fileupload" />, <NavBarItem className="af-nav__item af-nav__item--haschild" aria-haspopup="true" aria-expanded="false" ariaLabel="Table" actionElt={<a className="af-nav__link" href="/table">
            Table
          </a>} key="table">
        <NavBarItem key="table-1" actionElt={<a className="af-nav__link" href="/table/sous-lien-1">
              Sous lien 1
            </a>} />
        <NavBarItem key="table-2" actionElt={<a className="af-nav__link" href="/table/sous-lien-2">
              Sous lien 2
            </a>} />
        <NavBarItem key="table-3" actionElt={<a className="af-nav__link" href="/table/sous-lien-3">
              Sous lien 3
            </a>} />
        <NavBarItem key="table-4" actionElt={<a className="af-nav__link" href="/table/sous-lien-4">
              Sous lien 4
            </a>} />
      </NavBarItem>, <NavBarItem actionElt={<a className="af-nav__link" href="/accordion">
            Accordion
          </a>} key="accordions" />, <NavBarItem actionElt={<a className="af-nav__link" href="/alerts">
            Alerts
          </a>} key="alerts" />, <NavBarItem actionElt={<a className="af-nav__link" href="/validation">
            Validation
          </a>} key="validation" />, <NavBarItem className="af-nav__item af-nav__item--haschild" aria-haspopup="true" aria-expanded="false" ariaLabel="Table" actionElt={<a className="af-nav__link" href="/doc">
            Doc
          </a>} key="doc">
        <NavBarItem key="doc-1" actionElt={<a className="af-nav__link" href="/doc/sous-lien-1">
              Sous lien 1
            </a>} />
        <NavBarItem key="doc-2" actionElt={<a className="af-nav__link" href="/doc/sous-lien-2">
              Sous lien 2
            </a>} />
        <NavBarItem key="doc-3" actionElt={<a className="af-nav__link" href="/doc/sous-lien-3">
              Sous lien 3
            </a>} />
        <NavBarItem key="doc-4" actionElt={<a className="af-nav__link" href="/doc/sous-lien-4">
              Sous lien 4
            </a>} />
      </NavBarItem>],
    menuVisible: false,
    subtitle: "Sous titre",
    title: "Toolkit Axa"
  }
}`,...(o=(t=n.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const b=["Default"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:b,default:x},Symbol.toStringTag,{value:"Module"}));export{n as D,M};
