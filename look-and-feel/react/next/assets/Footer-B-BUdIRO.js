import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as o,q as g}from"./constants-BP85GAnv.js";import{c as i}from"./MessageLF-DdJybLL5.js";import{r as n}from"./index-DuZrfDUH.js";import{u as v}from"./useIsSmallScreen-B3lIGOTq.js";const x="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M480-344%20240-584l43-43%20197%20197%20197-197%2043%2043-240%20240Z'/%3e%3c/svg%3e",d="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%3e%3cpath%20d='M5%203h14a2%202%200%200%201%202%202v14a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2V5a2%202%200%200%201%202-2m13%202h-2.5A3.5%203.5%200%200%200%2012%208.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1%201%200%200%201%201-1h2V5z'%3e%3c/path%3e%3c/svg%3e",p="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%3e%3cpath%20d='M19%203a2%202%200%200%201%202%202v14a2%202%200%200%201-2%202H5a2%202%200%200%201-2-2V5a2%202%200%200%201%202-2h14m-.5%2015.5v-5.3a3.26%203.26%200%200%200-3.26-3.26c-.85%200-1.84.52-2.32%201.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4%201.39-1.4a1.4%201.4%200%200%201%201.4%201.4v4.93h2.79M6.88%208.56a1.68%201.68%200%200%200%201.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69%201.69%200%200%200-1.69%201.69c0%20.93.76%201.68%201.69%201.68m1.39%209.94v-8.37H5.5v8.37h2.77z'%3e%3c/path%3e%3c/svg%3e",u="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%3e%3cpath%20d='M18.244%202.25h3.308l-7.227%208.26%208.502%2011.24H16.17l-5.214-6.817L4.99%2021.75H1.68l7.73-8.835L1.254%202.25H8.08l4.713%206.231zm-1.161%2017.52h1.833L7.084%204.126H5.117z'%3e%3c/path%3e%3c/svg%3e",w="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%3e%3cpath%20d='M10%2015l5.19-3L10%209v6m11.56-7.83c.13.47.22%201.1.28%201.9.07.8.1%201.49.1%202.09L22%2012c0%202.19-.16%203.8-.44%204.83-.25.9-.83%201.48-1.73%201.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12%2019c-4.19%200-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2%2012c0-2.19.16-3.8.44-4.83.25-.9.83-1.48%201.73-1.73.47-.13%201.33-.22%202.65-.28%201.3-.07%202.49-.1%203.59-.1L12%205c4.19%200%206.8.16%207.83.44.9.25%201.48.83%201.73%201.73z'%3e%3c/path%3e%3c/svg%3e",_=({iconName:a,className:s})=>{switch(a){case"facebook":return e.jsx(o,{src:d,className:s});case"twitter":return e.jsx(o,{src:u,className:s});case"youtube":return e.jsx(o,{src:w,className:s});case"linkedin":return e.jsx(o,{src:p,className:s});default:return a}},j=({socialMedias:a})=>a.length===0?null:e.jsx("nav",{className:"af-footer__footerMenuIcons",children:a.map(s=>e.jsx("a",{"aria-label":`social media ${s.icon}`,className:"af-footer__menuIconLinks",href:s.link,target:"_blank",rel:"noopener noreferrer",children:e.jsx(_,{iconName:s.icon})},s.icon))}),b=({links:a,isAboutOpen:s=!1})=>{const r=v(g.MD);return a.length===0?null:e.jsx("div",{className:i("af-footer__menuLinks",s&&"af-footer__menuLinks--display"),children:a.map(t=>e.jsx("a",{className:"af-footer__linkItem",href:t.link,target:t.openInCurrentTab?"_top":"_blank",rel:"noreferrer",tabIndex:r&&!s?-1:void 0,children:t.text},t.text))})},T=({links:a,socialMedias:s=[],copyright:r,expandLinkText:t,id:l})=>{const[c,h]=n.useState(!1),f=n.useCallback(()=>{h(m=>!m)},[]);return e.jsxs("footer",{id:l,className:"af-footer",children:[e.jsxs("div",{className:"af-footer__footerTop",children:[e.jsxs("nav",{className:"af-footer__menuTop","aria-label":t,children:[e.jsxs("button",{type:"button",onClick:f,className:"af-footer__menuAboutTrigger",children:[e.jsx("span",{className:"af-footer__menuAboutTriggerText",children:t}),e.jsx(o,{src:x,className:i("af-footer__icon","af-footer__iconTrigger",c&&"af-footer__iconTrigger--display")})]}),e.jsx(b,{links:a,isAboutOpen:c})]}),e.jsx(j,{socialMedias:s})]}),e.jsx("div",{className:"af-footer__footerBottom",children:e.jsx("div",{className:"af-footer__footerBottomWidth",children:e.jsx("span",{className:"af-footer__textCopyright",children:r})})})]})};export{T as F};
