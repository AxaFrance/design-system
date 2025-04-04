/* empty css               */const d=["sticky","fixed"],m={args:{className:"af-title-bar",isSticky:!0,subtitle:"Info complémentaire",title:"Toolkit Axa"},argTypes:{toggleMenu:{action:"onToggle"},classModifier:{options:d,control:{type:"select"},defaultValue:"sticky"}},render:e=>{const a=document.createElement("div");return a.innerHTML=`
      <div class="${e.className}${e.classModifier?` ${e.className}--${e.classModifier}`:""}">
          <div class="container ${e.className}__wrapper">
              <div class="burger-container">
                <a 
                  id="togglemenu" 
                  title="Toggle menu" 
                  aria-controls="mainmenu" 
                  aria-haspopup="true" 
                  class="btn ${e.className}__mobile-menu af-btn--circle" 
                  href="/#" 
                  role="button" 
                  tabindex="0" 
                  ontoggle="${e.toggleMenu()}"
                >
                    <i class="glyphicon glyphicon-menu-hamburger"></i>
                </a>
              </div>
              <h1 class="${e.className}__title">
                ${e.title}
                <small class="${e.className}__subtitle">${e.subtitle}</small>
              </h1>
              ${e.children}
          </div>
      </div>
    `,a},title:"Components/Header/HeaderTitle"},t={args:{children:""}},i={args:{children:`
      <div class="af-title-bar__actions">
        <a class="af-title-bar__link" href="/#" title="lien titlebar">
          lien titlebar
        </a>
        <a title="Enregistrer" class="btn af-btn--circle" href="/#" role="button" tabindex="0">
          <i class="glyphicon glyphicon-floppy-disk"></i>
        </a>
        <a title="Imprimer" class="btn af-btn--circle" href="/#" role="button" tabindex="0">
          <i class="glyphicon glyphicon-print"></i>
        </a>
      </div>`}};var l,n,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: ""
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var r,c,o;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: \`
      <div class="af-title-bar__actions">
        <a class="af-title-bar__link" href="/#" title="lien titlebar">
          lien titlebar
        </a>
        <a title="Enregistrer" class="btn af-btn--circle" href="/#" role="button" tabindex="0">
          <i class="glyphicon glyphicon-floppy-disk"></i>
        </a>
        <a title="Imprimer" class="btn af-btn--circle" href="/#" role="button" tabindex="0">
          <i class="glyphicon glyphicon-print"></i>
        </a>
      </div>\`
  }
}`,...(o=(c=i.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const b=["DefaultTitle","ComplexTitle"];export{i as ComplexTitle,t as DefaultTitle,b as __namedExportsOrder,m as default};
