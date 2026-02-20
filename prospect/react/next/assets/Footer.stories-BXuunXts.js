import{j as e}from"./index-C-iqcyhV.js";import{S as a,x as g,N as p,y as k}from"./FieldsetApollo-DWbMrZYu.js";import{r as c}from"./index-ZnYipkzV.js";const v="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M480-344%20240-584l43-43%20197%20197%20197-197%2043%2043-240%20240Z'/%3e%3c/svg%3e",_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%3e%3cpath%20d='M5%203h14a2%202%200%200%201%202%202v14a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2V5a2%202%200%200%201%202-2m13%202h-2.5A3.5%203.5%200%200%200%2012%208.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1%201%200%200%201%201-1h2V5z'%3e%3c/path%3e%3c/svg%3e",b="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%3e%3cpath%20d='M19%203a2%202%200%200%201%202%202v14a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2V5a2%202%200%200%201%202-2h14m-.5%2015.5v-5.3a3.26%203.26%200%200%200-3.26-3.26c-.85%200-1.84.52-2.32%201.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4%201.39-1.4a1.4%201.4%200%200%201%201.4%201.4v4.93h2.79M6.88%208.56a1.68%201.68%200%200%200%201.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69%201.69%200%200%200-1.69%201.69c0%20.93.76%201.68%201.69%201.68m1.39%209.94v-8.37H5.5v8.37h2.77z'%3e%3c/path%3e%3c/svg%3e",j="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%3e%3cpath%20d='M18.244%202.25h3.308l-7.227%208.26%208.502%2011.24H16.17l-5.214-6.817L4.99%2021.75H1.68l7.73-8.835L1.254%202.25H8.08l4.713%206.231zm-1.161%2017.52h1.833L7.084%204.126H5.117z'%3e%3c/path%3e%3c/svg%3e",y="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%3e%3cpath%20d='M10%2015l5.19-3L10%209v6m11.56-7.83c.13.47.22%201.1.28%201.9.07.8.1%201.49.1%202.09L22%2012c0%202.19-.16%203.8-.44%204.83-.25.9-.83%201.48-1.73%201.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12%2019c-4.19%200-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2%2012c0-2.19.16-3.8.44-4.83.25-.9.83-1.48%201.73-1.73.47-.13%201.33-.22%202.65-.28%201.3-.07%202.49-.1%203.59-.1L12%205c4.19%200%206.8.16%207.83.44.9.25%201.48.83%201.73%201.73z'%3e%3c/path%3e%3c/svg%3e",M=({iconName:n,className:t})=>{switch(n){case"facebook":return e.jsx(a,{src:_,className:t});case"twitter":return e.jsx(a,{src:j,className:t});case"youtube":return e.jsx(a,{src:y,className:t});case"linkedin":return e.jsx(a,{src:b,className:t});default:return n}},A=({socialMedias:n})=>n.length===0?null:e.jsx("nav",{role:"navigation",className:"af-footer__footerMenuIcons",children:e.jsx("ul",{children:n.map(t=>e.jsx("li",{children:e.jsx("a",{"aria-label":`social media ${t.icon}`,className:"af-footer__menuIconLinks",href:t.link,target:"_blank",rel:"noopener noreferrer",children:e.jsx(M,{iconName:t.icon})})},t.icon))})}),L=({links:n,isAboutOpen:t=!1})=>{const s=g(k.MD);return n.length===0?null:e.jsx("ul",{className:p("af-footer__menuLinks",t&&"af-footer__menuLinks--display"),children:n.map(o=>e.jsx("li",{children:e.jsx("a",{className:"af-footer__linkItem",href:o.link,target:o.openInCurrentTab?"_top":"_blank",rel:"noreferrer",tabIndex:s&&!t?-1:void 0,children:o.text})},o.text))})},u=({links:n,socialMedias:t=[],copyright:s,expandLinkText:o,id:w})=>{const[i,x]=c.useState(!1),f=c.useCallback(()=>{x(d=>!d)},[]);return e.jsxs("footer",{role:"contentinfo",id:w,className:"af-footer",children:[e.jsxs("div",{className:"af-footer__footerTop",children:[e.jsxs("nav",{role:"navigation",className:"af-footer__menuTop","aria-label":o,children:[e.jsxs("button",{type:"button",onClick:f,className:"af-footer__menuAboutTrigger",children:[e.jsx("span",{className:"af-footer__menuAboutTriggerText",children:o}),e.jsx(a,{src:v,className:p("af-footer__icon","af-footer__iconTrigger",i&&"af-footer__iconTrigger--display")})]}),e.jsx(L,{links:n,isAboutOpen:i})]}),e.jsx(A,{socialMedias:t})]}),e.jsx("div",{className:"af-footer__footerBottom",children:e.jsx("div",{className:"af-footer__footerBottomWidth",children:e.jsx("span",{className:"af-footer__textCopyright",children:s})})})]})},N={component:u,title:"Components/Footer",parameters:{layout:"centered"}},r={name:"Footer",render:({links:n,socialMedias:t,copyright:s,expandLinkText:o})=>e.jsx(u,{links:n,socialMedias:t,copyright:s,expandLinkText:o}),args:{links:[{link:"https://www.axa.fr/qui-sommes-nous.html",text:"À propos"},{link:"https://www.axa.fr/configuration-securite/mentions-legales.html",text:"Mentions légales"},{link:"https://www.axa.fr/configuration-securite/donnees-personnelles.html",text:"Données personnelles"},{link:"https://www.axa.fr/configuration-securite/politique-cookies.html",text:"Cookies"}],socialMedias:[{icon:"facebook",link:"https://www.facebook.com/axafrance"},{icon:"twitter",link:"https://twitter.com/AXAFrance"},{icon:"youtube",link:"https://www.youtube.com/user/AXAFranceChaine"},{icon:"linkedin",link:"https://www.linkedin.com/company/axa-france/"}],expandLinkText:"Liens utiles",copyright:`@AXA ${new Date().getFullYear()} - Tous droits réservés`}};var l,h,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Footer",
  render: ({
    links,
    socialMedias,
    copyright,
    expandLinkText
  }) => <Footer links={links} socialMedias={socialMedias} copyright={copyright} expandLinkText={expandLinkText} />,
  args: {
    links: [{
      link: "https://www.axa.fr/qui-sommes-nous.html",
      text: "À propos"
    }, {
      link: "https://www.axa.fr/configuration-securite/mentions-legales.html",
      text: "Mentions légales"
    }, {
      link: "https://www.axa.fr/configuration-securite/donnees-personnelles.html",
      text: "Données personnelles"
    }, {
      link: "https://www.axa.fr/configuration-securite/politique-cookies.html",
      text: "Cookies"
    }],
    socialMedias: [{
      icon: "facebook",
      link: "https://www.facebook.com/axafrance"
    }, {
      icon: "twitter",
      link: "https://twitter.com/AXAFrance"
    }, {
      icon: "youtube",
      link: "https://www.youtube.com/user/AXAFranceChaine"
    }, {
      icon: "linkedin",
      link: "https://www.linkedin.com/company/axa-france/"
    }],
    expandLinkText: "Liens utiles",
    copyright: \`@AXA \${new Date().getFullYear()} - Tous droits réservés\`
  }
}`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const T=["Playground"],B=Object.freeze(Object.defineProperty({__proto__:null,Playground:r,__namedExportsOrder:T,default:N},Symbol.toStringTag,{value:"Module"}));export{B as F,r as P};
