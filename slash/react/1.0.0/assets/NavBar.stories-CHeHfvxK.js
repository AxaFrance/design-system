import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{f as _}from"./index-C_FWhylE.js";/* empty css               */import{N as h,a as n}from"./NavBarItem-CQcEEDln.js";import"./index-CTjT7uj6.js";import"./getComponentClassName-C7V7Z2-u.js";import"./index-CCQ3W5xA.js";const C={title:"Components/NavBar",component:h,argTypes:{onClick:{action:"onClick"},positionInit:{control:{type:"number",min:0,max:3}}},args:{onClick:_()}},s=r=>e=>{e.preventDefault(),r==null||r(e)},f=({children:r,onClick:e,...u})=>a.jsxs(h,{onClick:s(e),...u,children:[a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/home",onClick:s(e),children:"Home"})}),r,a.jsxs(n,{className:"af-nav__item--haschild af-nav__item","aria-haspopup":"true","aria-expanded":"false",ariaLabel:"Table",actionElt:a.jsx("span",{className:"af-nav__link",children:"Table"}),children:[a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/table/sous-lien",onClick:s(e),children:"Sous lien"})},"table-1"),a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/table/sous-lien-2",onClick:s(e),children:"Sous lien 2"})},"table-2")]}),a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/collapse",onClick:s(e),children:"Accordions"})}),a.jsxs(n,{className:"af-nav__item--haschild af-nav__item","aria-haspopup":"true","aria-expanded":"false",ariaLabel:"Table",actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc",onClick:s(e),children:"Doc"}),children:[a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien",onClick:s(e),children:"Sous lien"})},"doc-1"),a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/doc/sous-lien-2",onClick:s(e),children:"Sous lien 2"})},"doc-2")]})]}),i={name:"NavBarBase",render:f,args:{positionInit:2}},o={name:"NavBarBase with customable children",render:f,args:{positionInit:2,children:a.jsx(n,{actionElt:a.jsx("a",{className:"af-nav__link",href:"/forms",onClick:s(),children:"Forms"})},1)},argTypes:{positionInit:{control:{type:"number",min:0,max:4}}}};var t,l,c;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const E=["NavBarBaseStory","NavBarBaseWithCustomableChildrenStory"];export{i as NavBarBaseStory,o as NavBarBaseWithCustomableChildrenStory,E as __namedExportsOrder,C as default};