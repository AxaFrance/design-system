/* empty css               */const m={title:"Components/Header/NavBar"},n={render:e=>{const l=document.createElement("nav"),a=document.createElement("ul");return a.className="af-navbar-container",a.role="menubar",a.innerHTML=`
        <li class="af-navbar-item af-navbar-item--active" role="none"><a class="af-navbar-item__link af-navbar-item__link--active" role="menuitem" href=${e.links[0].href}>${e.links[0].label}</a></li>
        <li class="af-navbar-item" role="none"><a class="af-navbar-item__link"  role="menuitem" href=${e.links[1].href}>${e.links[1].label}</a></li>
        <li class="af-navbar-item" role="none"><a class="af-navbar-item__link" role="menuitem" href=${e.links[2].href}>${e.links[2].label}</a></li>
    `,l.append(a),l},args:{links:[{label:"MES CONTRATS",href:"/mes-contrats"},{label:"MES AVANTAGES",href:"/mes-avantages"},{label:"MES DOCUMENTS",href:"/mes-documents"}]}};var r,s,t;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const navBar = document.createElement("nav");
    const list = document.createElement("ul");
    list.className = "af-navbar-container";
    list.role = "menubar";
    list.innerHTML = \`
        <li class="af-navbar-item af-navbar-item--active" role="none"><a class="af-navbar-item__link af-navbar-item__link--active" role="menuitem" href=\${args.links[0].href}>\${args.links[0].label}</a></li>
        <li class="af-navbar-item" role="none"><a class="af-navbar-item__link"  role="menuitem" href=\${args.links[1].href}>\${args.links[1].label}</a></li>
        <li class="af-navbar-item" role="none"><a class="af-navbar-item__link" role="menuitem" href=\${args.links[2].href}>\${args.links[2].label}</a></li>
    \`;
    navBar.append(list);
    return navBar;
  },
  args: {
    links: [{
      label: "MES CONTRATS",
      href: "/mes-contrats"
    }, {
      label: "MES AVANTAGES",
      href: "/mes-avantages"
    }, {
      label: "MES DOCUMENTS",
      href: "/mes-documents"
    }]
  }
}`,...(t=(s=n.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const o=["Default"];export{n as Default,o as __namedExportsOrder,m as default};
