import{l as i}from"./logo-axa-Cqr9fAkX.js";/* empty css              *//* empty css             */const h={args:{className:"af-header",classModifier:""},title:"Components/Header"},s={render:a=>{const e=document.createElement("div");return e.innerHTML=`
        <div class="${a.className}${a.classModifier!==""?` ${a.className}--${a.classModifier}`:""}">
            <div class="container ${a.className}__wrapper">
                <header class="${a.className}__content" role="banner">
                  ${a.children}
                </header>
            </div>
        </div>
    `,e},args:{children:`
      <div class="af-header__name">
          <a class="af-logo" href="/#">
            <img class="af-logo__brand" src=${i} alt="Logo React" />
          </a>
          <h2 class="af-header__title">
              Nom de l'application
              <span class="af-header__subtitle">
                Baseline
              </span>
          </h2>
      </div>`}},n={render:a=>{const e=document.createElement("div");return e.innerHTML=`
        <div class="${a.className}${a.classModifier!==""?` ${a.className}--${a.classModifier}`:""}">
            <div class="container ${a.className}__wrapper">
                <header class="${a.className}__content" role="banner">
                    ${a.children}
                </header>
            </div>
        </div>
    `,e},args:{children:`
      <div class="af-header__name">
          <a class="af-logo" href="/#">
            <img class="af-logo__brand" src=${i} alt="Logo React" />
          </a>
          <h2 class="af-header__title">
              Nom de l'application
              <span class="af-header__subtitle">
                Baseline
              </span>
          </h2>
      </div>
      <div class="af-contrat">
          <i class="glyphicon glyphicon-info-sign"></i>
          <dl class="af-contrat__list">
              <dt class="af-contrat__word">Client :</dt>
              <dd class="af-contrat__def">0123456789 - NOM</dd>
              <dt class="af-contrat__word">Portefeuille :</dt>
              <dd class="af-contrat__def">000123456789</dd>
              <dt class="af-contrat__word">Status :</dt>
              <dd class="af-contrat__def">Affaire nouvelle</dd>
          </dl>
      </div>`}};var r,c,d;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    container.innerHTML = \`
        <div class="\${args.className}\${args.classModifier !== "" ? \` \${args.className}--\${args.classModifier}\` : ""}">
            <div class="container \${args.className}__wrapper">
                <header class="\${args.className}__content" role="banner">
                  \${args.children}
                </header>
            </div>
        </div>
    \`;
    return container;
  },
  args: {
    children: \`
      <div class="af-header__name">
          <a class="af-logo" href="/#">
            <img class="af-logo__brand" src=\${logo} alt="Logo React" />
          </a>
          <h2 class="af-header__title">
              Nom de l'application
              <span class="af-header__subtitle">
                Baseline
              </span>
          </h2>
      </div>\`
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,t,o;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    container.innerHTML = \`
        <div class="\${args.className}\${args.classModifier !== "" ? \` \${args.className}--\${args.classModifier}\` : ""}">
            <div class="container \${args.className}__wrapper">
                <header class="\${args.className}__content" role="banner">
                    \${args.children}
                </header>
            </div>
        </div>
    \`;
    return container;
  },
  args: {
    children: \`
      <div class="af-header__name">
          <a class="af-logo" href="/#">
            <img class="af-logo__brand" src=\${logo} alt="Logo React" />
          </a>
          <h2 class="af-header__title">
              Nom de l'application
              <span class="af-header__subtitle">
                Baseline
              </span>
          </h2>
      </div>
      <div class="af-contrat">
          <i class="glyphicon glyphicon-info-sign"></i>
          <dl class="af-contrat__list">
              <dt class="af-contrat__word">Client :</dt>
              <dd class="af-contrat__def">0123456789 - NOM</dd>
              <dt class="af-contrat__word">Portefeuille :</dt>
              <dd class="af-contrat__def">000123456789</dd>
              <dt class="af-contrat__word">Status :</dt>
              <dd class="af-contrat__def">Affaire nouvelle</dd>
          </dl>
      </div>\`
  }
}`,...(o=(t=n.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const p=["HeaderWithName","HeaderWithNameAndInfos"];export{s as HeaderWithName,n as HeaderWithNameAndInfos,p as __namedExportsOrder,h as default};
