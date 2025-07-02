import{j as a}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import"./Loader-C3tQB3_-.js";import"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{N as h}from"./NavBar-f7H-_3l8.js";import{N as n}from"./NavBarItem-CSzxa-Qa.js";import{f as _}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const g={title:"Components/NavBar",component:h,argTypes:{onClick:{action:"onClick"},positionInit:{control:{type:"number",min:0,max:3}}},args:{onClick:_()}},s=r=>e=>{e.preventDefault(),r==null||r(e)},f=({children:r,onClick:e,...u})=>a.jsxs(h,{onClick:s(e),...u,children:[a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/home",onClick:s(e),children:"Home"})}),r,a.jsxs(n,{className:"af-nav__item--haschild af-nav__item","aria-haspopup":"true","aria-expanded":"false",ariaLabel:"Table",actionElt:a.jsx("span",{className:"af-nav__link",children:"Table"}),children:[a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/table/sous-lien",onClick:s(e),children:"Sous lien"})},"table-1"),a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/table/sous-lien-2",onClick:s(e),children:"Sous lien 2"})},"table-2")]}),a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/collapse",onClick:s(e),children:"Accordions"})}),a.jsxs(n,{className:"af-nav__item--haschild af-nav__item","aria-haspopup":"true","aria-expanded":"false",ariaLabel:"Table",actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc",onClick:s(e),children:"Doc"}),children:[a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien",onClick:s(e),children:"Sous lien"})},"doc-1"),a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien-2",onClick:s(e),children:"Sous lien 2"})},"doc-2")]})]}),i={name:"NavBarBase",render:f,args:{positionInit:2}},o={name:"NavBarBase with customable children",render:f,args:{positionInit:2,children:a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/forms",onClick:s(),children:"Forms"})},1)},argTypes:{positionInit:{control:{type:"number",min:0,max:4}}}};var t,l,c;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "NavBarBase",
  render: template,
  args: {
    positionInit: 2
  }
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "NavBarBase with customable children",
  render: template,
  args: {
    positionInit: 2,
    children: <NavBarItem key={1} actionElt={<a className="af-nav__link" href="/forms" onClick={withPreventDefaultClick()}>
            Forms
          </a>} />
  },
  argTypes: {
    positionInit: {
      control: {
        type: "number",
        min: 0,
        max: 4
      }
    }
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const S=["NavBarBaseStory","NavBarBaseWithCustomableChildrenStory"];export{i as NavBarBaseStory,o as NavBarBaseWithCustomableChildrenStory,S as __namedExportsOrder,g as default};
