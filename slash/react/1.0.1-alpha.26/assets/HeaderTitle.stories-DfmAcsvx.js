import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{f as d}from"./index-C_FWhylE.js";import{A as f}from"./Action-fIeEoHxC.js";import{H as u}from"./HeaderTitle-C08bZXsf.js";const g=["sticky","fixed"],_={args:{className:"af-title-bar",isSticky:!0,subtitle:"Info complémentaire",title:"Toolkit Axa",toggleMenu:d()},argTypes:{toggleMenu:{action:"onToggle"},classModifier:{options:g,control:{type:"select"},defaultValue:"sticky"}},component:u,title:"Components/Header/HeaderTitle"},b=[{id:"001",icon:"floppy-disk",title:"Enregistrer"},{id:"002",icon:"print",title:"Imprimer"}],e={},t={args:{children:i.jsxs("div",{className:"af-title-bar__actions",children:[i.jsx("a",{className:"af-title-bar__link",href:"#lien",title:"lien titlebar",children:"lien titlebar"}),b.map(({icon:c,id:m,title:p})=>i.jsx(f,{icon:c,title:p,onClick:()=>{}},m))]})}};var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var n,s,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: <div className="af-title-bar__actions">
        <a className="af-title-bar__link" href="#lien" title="lien titlebar">
          lien titlebar
        </a>
        {actions.map(({
        icon,
        id,
        title
      }: ComponentProps<typeof Action>) => <Action key={id} icon={icon} title={title} onClick={() => {}} />)}
      </div>
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const x=["DefaultTitle","ComplexTitle"],C=Object.freeze(Object.defineProperty({__proto__:null,ComplexTitle:t,DefaultTitle:e,__namedExportsOrder:x,default:_},Symbol.toStringTag,{value:"Module"}));export{t as C,e as D,C as H};
