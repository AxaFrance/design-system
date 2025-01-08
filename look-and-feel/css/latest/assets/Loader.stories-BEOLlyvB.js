const n={title:"Components/Loader"},a={render:r=>{const e=document.createElement("div");return e.classList.add("af-loader__container"),e.role="alert",e.ariaLabel="Chargement en cours",e.ariaBusy="true",e.ariaLive="assertive",e.style.width=`${r.size}px`,e.style.height=`${r.size}px`,e.style.border=`${r.borderSize}px solid #f3f3f3`,e.style.borderTop=`${r.borderSize}px solid #00008f`,e.innerHTML=` 
        <div class"af-loader__container-spin" aria-hidden="true" />
    `,e},args:{size:60,borderSize:5}};var o,s,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const loader = document.createElement("div");
    loader.classList.add("af-loader__container");
    loader.role = "alert";
    loader.ariaLabel = "Chargement en cours";
    loader.ariaBusy = "true";
    loader.ariaLive = "assertive";
    loader.style.width = \`\${args.size}px\`;
    loader.style.height = \`\${args.size}px\`;
    loader.style.border = \`\${args.borderSize}px solid #f3f3f3\`;
    loader.style.borderTop = \`\${args.borderSize}px solid #00008f\`;
    loader.innerHTML = \` 
        <div class"af-loader__container-spin" aria-hidden="true" />
    \`;
    return loader;
  },
  args: {
    size: 60,
    borderSize: 5
  }
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const t=["Loader"];export{a as Loader,t as __namedExportsOrder,n as default};
