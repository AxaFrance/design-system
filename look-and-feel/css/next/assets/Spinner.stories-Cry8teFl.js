const t={title:"Components/Spinner"},r={render:n=>{const e=document.createElement("div");return e.classList.add("af-spinner__container"),e.role="alert",e.ariaLabel="Chargement en cours",e.ariaBusy="true",e.ariaLive="assertive",e.style.width=`${n.size}px`,e.style.height=`${n.size}px`,e.style.border=`${n.borderSize}px solid #f3f3f3`,e.style.borderTop=`${n.borderSize}px solid #00008f`,e.innerHTML=` 
        <div class"af-spinner__container-spin" aria-hidden="true" />
    `,e},args:{size:60,borderSize:5}};var s,i,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const spinner = document.createElement("div");
    spinner.classList.add("af-spinner__container");
    spinner.role = "alert";
    spinner.ariaLabel = "Chargement en cours";
    spinner.ariaBusy = "true";
    spinner.ariaLive = "assertive";
    spinner.style.width = \`\${args.size}px\`;
    spinner.style.height = \`\${args.size}px\`;
    spinner.style.border = \`\${args.borderSize}px solid #f3f3f3\`;
    spinner.style.borderTop = \`\${args.borderSize}px solid #00008f\`;
    spinner.innerHTML = \` 
        <div class"af-spinner__container-spin" aria-hidden="true" />
    \`;
    return spinner;
  },
  args: {
    size: 60,
    borderSize: 5
  }
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const o=["Spinner"];export{r as Spinner,o as __namedExportsOrder,t as default};
