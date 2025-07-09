import{j as t}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{B as b}from"./Loader-DO2JGjBT.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{H as x}from"./HeaderTitle-SUmSIXAo.js";import{s as w,S as c}from"./save-DP_CNYpL.js";import{h as _}from"./home-BuLaEOyh.js";import{f as S}from"./index-28pPPJTf.js";const j="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M261-120q-24.75%200-42.37-17.63Q201-155.25%20201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0%2024-18%2042t-42%2018H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166%200h60v-399h-60v399ZM261-750v570-570Z'/%3e%3c/svg%3e",y="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M140-160q-24%200-42-18t-18-42v-520q0-24%2018-42t42-18h680q24%200%2042%2018t18%2042v520q0%2024-18%2042t-42%2018H140Zm340-302L140-685v465h680v-465L480-462Zm0-60%20336-218H145l335%20218ZM140-685v-55%20520-465Z'/%3e%3c/svg%3e",C="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M561-240%20320-481l241-241%2043%2043-198%20198%20198%20198-43%2043Z'/%3e%3c/svg%3e",M=["sticky","fixed"],N={args:{className:"af-title-bar",isSticky:!0,subtitle:"Info complémentaire",title:"Toolkit Axa",toggleMenu:S()},argTypes:{toggleMenu:{action:"onToggle"},classModifier:{options:M,control:{type:"select"},defaultValue:"sticky"}},component:x,title:"Components/Header/HeaderTitle"},u=[{id:"001",icon:j,title:"Supprimer"},{id:"002",icon:y,title:"Envoyer"},{id:"003",icon:w,title:"Enregistrer"}],T=[{id:"001",icon:_,title:"Accueil"},{id:"002",icon:C,title:"Retour"}],o={},a={args:{contentRight:t.jsx("div",{className:"af-title-bar__actions",children:u.map(({icon:e,id:n,title:s})=>t.jsx("a",{href:"/#",role:"button",title:s,className:"btn af-btn--circle",children:t.jsx(c,{src:e})},n))})}},i={args:{contentLeft:t.jsx("div",{className:"af-title-bar__actions",children:T.map(({icon:e,id:n,title:s})=>t.jsx("a",{href:"/#",role:"button",title:s,className:"btn  af-btn--circle",children:t.jsx(c,{src:e})},n))}),children:t.jsx(b,{classModifier:"success",children:" Statut OK "}),contentRight:t.jsx("div",{className:"af-title-bar__actions",children:u.map(({icon:e,id:n,title:s})=>t.jsx("a",{href:"/#",role:"button",title:s,className:"btn af-btn--circle",children:t.jsx(c,{src:e})},n))})}};var r,l,m;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    contentRight: <div className="af-title-bar__actions">
        {actions.map(({
        icon,
        id,
        title
      }: ComponentProps<typeof Action>) => <a key={id} href="/#" role="button" title={title} className="btn af-btn--circle">
            <Svg src={icon} />
          </a>)}
      </div>
  }
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,v,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    contentLeft: <div className="af-title-bar__actions">
          {leftActions.map(({
        icon,
        id,
        title
      }: ComponentProps<typeof Action>) => <a key={id} href="/#" role="button" title={title} className="btn  af-btn--circle">
                <Svg src={icon} />
              </a>)}
        </div>,
    children: <Badge classModifier="success"> Statut OK </Badge>,
    contentRight: <div className="af-title-bar__actions">
          {actions.map(({
        icon,
        id,
        title
      }: ComponentProps<typeof Action>) => <a key={id} href="/#" role="button" title={title} className="btn af-btn--circle">
              <Svg src={icon} />
            </a>)}
        </div>
  }
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const H=["DefaultTitle","ComplexTitle","ComplexTitleWithContentAndChildren"],L=Object.freeze(Object.defineProperty({__proto__:null,ComplexTitle:a,ComplexTitleWithContentAndChildren:i,DefaultTitle:o,__namedExportsOrder:H,default:N},Symbol.toStringTag,{value:"Module"}));export{a as C,o as D,L as H,i as a};
