import{l as s}from"./logo-axa-Cqr9fAkX.js";const c={title:"Components/Footer"},r={render:e=>{const t=document.createElement("footer");return t.className=e.className??"af-footer",t.innerHTML=`
    <div class="container-fluid container">
  
        <a class="af-logo" href="${e.href}" title="${e.title}" target="blank">
          <img class="af-logo__brand" src="${e.icon}" alt="${e.alt}" />
        </a>
   
      <div class="af-footer-content">${e.children}</div>
    </div>
`,t},args:{href:"https://www.axa.fr/",title:"Site Axa",icon:s,alt:"Logo Axa",children:`© ${new Date().getFullYear()} AXA Tous droits réservés`}};var a,o,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const footer = document.createElement("footer");
    footer.className = args.className ?? "af-footer";
    footer.innerHTML = \`
    <div class="container-fluid container">
  
        <a class="af-logo" href="\${args.href}" title="\${args.title}" target="blank">
          <img class="af-logo__brand" src="\${args.icon}" alt="\${args.alt}" />
        </a>
   
      <div class="af-footer-content">\${args.children}</div>
    </div>
\`;
    return footer;
  },
  args: {
    href: "https://www.axa.fr/",
    title: "Site Axa",
    icon: logo,
    alt: "Logo Axa",
    children: \`© \${new Date().getFullYear()} AXA Tous droits réservés\`
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const i=["Primary"];export{r as Primary,i as __namedExportsOrder,c as default};
