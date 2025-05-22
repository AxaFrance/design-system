import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as c}from"./ToggleCommon-F-dlJBi7.js";import{B as C,S as m}from"./constants-DK-TjeKs.js";import"./index-DuZrfDUH.js";import{L as q}from"./List-Dtb9Zc4U.js";import{u as N}from"./useIsSmallScreen-B3lIGOTq.js";import{T as d}from"./TagCommon-B582HpZa.js";import{f as h}from"./index-28pPPJTf.js";const S=({title:i,subtitle:r,tag:e,tagProps:a,date:n,actions:u=[],value:s,isMobile:p=!1})=>t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"af-list-item__left-container",children:[!!s&&(!!e||!!n)&&t.jsxs("div",{className:"af-list-item__additional-data-container",children:[!!e&&t.jsx(d,{variant:"warning",...a,children:e}),!!n&&t.jsx("span",{className:"af-list-item__date",children:n})]}),t.jsxs("div",{className:"af-list-item__label",children:[t.jsx("span",{className:"af-list-item-label__title",children:i}),!!r&&t.jsx("span",{className:"af-list-item-label__subtitle",children:r})]}),!s&&p&&(!!e||!!n)&&t.jsxs("div",{className:"af-list-item__additional-data-container",children:[!!e&&t.jsx(d,{variant:"warning",...a,children:e}),!!n&&t.jsx("span",{className:"af-list-item__date",children:n})]})]}),(u.length>0||!!e||!!n||!!s)&&t.jsxs("div",{className:"af-list-item__right-container",children:[!s&&(!!e||!!n)&&!p&&t.jsxs("div",{className:"af-list-item__additional-data-container",children:[!!e&&t.jsx(d,{variant:"warning",...a,children:e}),!!n&&t.jsx("span",{className:"af-list-item__date",children:n})]}),u.map(({id:w,component:L})=>t.jsx("div",{className:"af-list-item__action-container",children:L},w)),!!s&&t.jsx("span",{className:"af-list-item__value",children:s})]})]}),T=({items:i,classModifier:r})=>{const e=N(C.SM);return t.jsx(q,{classModifier:`list large extra-padding content-tab-list ${r}`,children:i.map(({id:a,...n})=>t.jsx(S,{...n,isMobile:e},a??n.title))})},g="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M190-140h580q12.75%200%2021.38%208.68%208.62%208.67%208.62%2021.5%200%2012.82-8.62%2021.32Q782.75-80%20770-80H190q-12.75%200-21.37-8.68-8.63-8.67-8.63-21.5%200-12.82%208.63-21.32%208.62-8.5%2021.37-8.5Zm289-119q-6.58%200-12.79-2.5Q460-264%20455-270L237-552q-11-15-3.5-31.5T260-600h99v-250q0-12.75%208.63-21.38Q376.25-880%20389-880h180q12.75%200%2021.38%208.62Q599-862.75%20599-850v250h100q19%200%2026.5%2016.5T722-552L503-270q-5%206-11.21%208.5-6.21%202.5-12.79%202.5Z'/%3e%3c/svg%3e",R="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M480.12-330q70.88%200%20120.38-49.62t49.5-120.5q0-70.88-49.62-120.38T479.88-670Q409-670%20359.5-620.38T310-499.88q0%2070.88%2049.62%20120.38t120.5%2049.5Zm-.36-58q-46.76%200-79.26-32.74-32.5-32.73-32.5-79.5%200-46.76%2032.74-79.26%2032.73-32.5%2079.5-32.5%2046.76%200%2079.26%2032.74%2032.5%2032.73%2032.5%2079.5%200%2046.76-32.74%2079.26-32.73%2032.5-79.5%2032.5Zm.24%20188q-135%200-245.5-76T57-470q-4-7.13-6-14.65-2-7.52-2-15.43%200-7.92%202-15.38%202-7.47%206-14.54%2067-118%20177.5-194T480-800q135%200%20245.5%2076T903-530q4%207.12%206%2014.65%202%207.52%202%2015.43%200%207.92-2%2015.38-2%207.47-6%2014.54-67%20118-177.5%20194T480-200Z'/%3e%3c/svg%3e",E={title:"Components/List/ContentTabList",component:T},j=i=>t.jsx(T,{...i}),o={name:"ContentTabList with buttons",render:j,args:{items:[{id:"1",title:"Remboursement soins",subtitle:"Titre onglet",tag:"En attente",date:"01/01/2024",actions:[{id:"download_button",component:t.jsx(c,{variant:"ghost",iconLeft:t.jsx(m,{src:g}),onClick:h(),children:"Télécharger"})}]},{id:"2",title:"Remboursement soins",tag:"En attente",actions:[{id:"download_button",component:t.jsx(c,{variant:"ghost",iconLeft:t.jsx(m,{src:g}),onClick:h(),children:"Télécharger"})},{id:"display_button",component:t.jsx(c,{variant:"ghost",iconLeft:t.jsx(m,{src:R}),onClick:h(),children:"Afficher"})}]}],classModifier:""}},l={name:"ContentTabList with value",render:j,args:{items:[{id:"1",title:"Remboursement soins",subtitle:"Titre onglet",date:"01/01/2024",value:"+ 11,86 €"},{id:"2",title:"Remboursement soins",tag:"En attente",value:"+ 11,86 €"}]}};var b,f,_;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "ContentTabList with buttons",
  render: template,
  args: {
    items: [{
      id: "1",
      title: "Remboursement soins",
      subtitle: "Titre onglet",
      tag: "En attente",
      date: "01/01/2024",
      actions: [{
        id: "download_button",
        component: <Button variant="ghost" iconLeft={<Svg src={download} />} onClick={fn()}>
                Télécharger
              </Button>
      }]
    }, {
      id: "2",
      title: "Remboursement soins",
      tag: "En attente",
      actions: [{
        id: "download_button",
        component: <Button variant="ghost" iconLeft={<Svg src={download} />} onClick={fn()}>
                Télécharger
              </Button>
      }, {
        id: "display_button",
        component: <Button variant="ghost" iconLeft={<Svg src={visibility} />} onClick={fn()}>
                Afficher
              </Button>
      }]
    }],
    classModifier: ""
  }
}`,...(_=(f=o.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var v,x,B;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "ContentTabList with value",
  render: template,
  args: {
    items: [{
      id: "1",
      title: "Remboursement soins",
      subtitle: "Titre onglet",
      date: "01/01/2024",
      value: "+ 11,86 €"
    }, {
      id: "2",
      title: "Remboursement soins",
      tag: "En attente",
      value: "+ 11,86 €"
    }]
  }
}`,...(B=(x=l.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const M=["ContentTabListWithButtons","ContentTabListWithValue"],V=Object.freeze(Object.defineProperty({__proto__:null,ContentTabListWithButtons:o,ContentTabListWithValue:l,__namedExportsOrder:M,default:E},Symbol.toStringTag,{value:"Module"}));export{V as C,o as a,l as b};
