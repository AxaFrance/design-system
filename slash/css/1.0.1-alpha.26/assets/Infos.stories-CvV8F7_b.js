/* empty css              */const t={title:"Components/Header/Infos"},n={render:s=>{const e=document.createElement("div");return e.innerHTML=`
        <div class="${s.className}">
            <i class="glyphicon glyphicon-info-sign"></i>
            <dl class="${s.className}__list">
                <dt class="${s.className}__word">${s.infos[0].word}</dt>
                <dd class="${s.className}__def">${s.infos[0].definition}</dd>
                <dt class="${s.className}__word">${s.infos[1].word}</dt>
                <dd class="${s.className}__def">${s.infos[1].definition}</dd>
                <dt class="${s.className}__word">${s.infos[2].word}</dt>
                <dd class="${s.className}__def">${s.infos[2].definition}</dd>
            </dl>
        </div>
      `,e},args:{className:"af-contrat",infos:[{word:"Client :",definition:"0123456789 - NOM"},{word:"Portefeuille :",definition:"000123456789"},{word:"Status :",definition:"Affaire nouvelle"}]}};var d,a,i;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    container.innerHTML = \`
        <div class="\${args.className}">
            <i class="glyphicon glyphicon-info-sign"></i>
            <dl class="\${args.className}__list">
                <dt class="\${args.className}__word">\${args.infos[0].word}</dt>
                <dd class="\${args.className}__def">\${args.infos[0].definition}</dd>
                <dt class="\${args.className}__word">\${args.infos[1].word}</dt>
                <dd class="\${args.className}__def">\${args.infos[1].definition}</dd>
                <dt class="\${args.className}__word">\${args.infos[2].word}</dt>
                <dd class="\${args.className}__def">\${args.infos[2].definition}</dd>
            </dl>
        </div>
      \`;
    return container;
  },
  args: {
    className: "af-contrat",
    infos: [{
      word: "Client :",
      definition: "0123456789 - NOM"
    }, {
      word: "Portefeuille :",
      definition: "000123456789"
    }, {
      word: "Status :",
      definition: "Affaire nouvelle"
    }]
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const l=["Default"];export{n as Default,l as __namedExportsOrder,t as default};
