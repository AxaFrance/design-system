import{l as o}from"./logo-axa-Cqr9fAkX.js";/* empty css             */const i={title:"Components/Header/Name"},e={render:a=>{const n=document.createElement("div");return n.innerHTML=`
        <div class="${a.className}">
            <a class="af-logo" href="/#" onclick="${a.onClick()}">
                <img class="af-logo__brand" src=${a.img} alt=${a.alt} />
            </a>
            <h2 class="af-header__title">
                ${a.title}
                <span class="af-header__subtitle">
                        ${a.subtitle}
                </span>
            </h2>
        </div>
    `,n},args:{alt:"Logo React",className:"af-header__name",img:o,subtitle:"Baseline",title:"Nom de l'application"},argTypes:{onClick:{action:"onClick"}}};var t,s,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    container.innerHTML = \`
        <div class="\${args.className}">
            <a class="af-logo" href="/#" onclick="\${args.onClick()}">
                <img class="af-logo__brand" src=\${args.img} alt=\${args.alt} />
            </a>
            <h2 class="af-header__title">
                \${args.title}
                <span class="af-header__subtitle">
                        \${args.subtitle}
                </span>
            </h2>
        </div>
    \`;
    return container;
  },
  args: {
    alt: "Logo React",
    className: "af-header__name",
    img: logo,
    subtitle: "Baseline",
    title: "Nom de l'application"
  },
  argTypes: {
    onClick: {
      action: "onClick"
    }
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,i as default};
