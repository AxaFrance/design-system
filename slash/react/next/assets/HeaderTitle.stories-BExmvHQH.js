import{j as o}from"./jsx-runtime-D_zvdyIk.js";import"./Loader-CimcINoe.js";/* empty css              */import"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{H as d}from"./HeaderTitle-0eKNAasK.js";import{s as v,S as g}from"./save-C0I2IcFD.js";import{f as h}from"./index-28pPPJTf.js";const f="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M261-120q-24.75%200-42.37-17.63Q201-155.25%20201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0%2024-18%2042t-42%2018H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166%200h60v-399h-60v399ZM261-750v570-570Z'/%3e%3c/svg%3e",u="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M140-160q-24%200-42-18t-18-42v-520q0-24%2018-42t42-18h680q24%200%2042%2018t18%2042v520q0%2024-18%2042t-42%2018H140Zm340-302L140-685v465h680v-465L480-462Zm0-60%20336-218H145l335%20218ZM140-685v-55%20520-465Z'/%3e%3c/svg%3e",x=["sticky","fixed"],b={args:{className:"af-title-bar",isSticky:!0,subtitle:"Info complémentaire",title:"Toolkit Axa",toggleMenu:h()},argTypes:{toggleMenu:{action:"onToggle"},classModifier:{options:x,control:{type:"select"},defaultValue:"sticky"}},component:d,title:"Components/Header/HeaderTitle"},w=[{id:"001",icon:f,title:"Supprimer"},{id:"002",icon:u,title:"Envoyer"},{id:"003",icon:v,title:"Enregistrer"}],e={},t={args:{children:o.jsx("div",{className:"af-title-bar__actions",children:w.map(({icon:l,id:m,title:p})=>o.jsx("a",{href:"/#",role:"button",title:p,className:"btn af-btn--circle",children:o.jsx(g,{src:l})},m))})}};var s,a,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var i,n,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <div className="af-title-bar__actions">
        {actions.map(({
        icon,
        id,
        title
      }: ComponentProps<typeof Action>) => <a key={id} href="/#" role="button" title={title} className="btn af-btn--circle">
            <Svg src={icon} />
          </a>)}
      </div>
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const S=["DefaultTitle","ComplexTitle"],I=Object.freeze(Object.defineProperty({__proto__:null,ComplexTitle:t,DefaultTitle:e,__namedExportsOrder:S,default:b},Symbol.toStringTag,{value:"Module"}));export{t as C,e as D,I as H};
