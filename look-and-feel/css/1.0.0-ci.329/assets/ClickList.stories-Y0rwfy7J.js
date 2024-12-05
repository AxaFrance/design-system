/* empty css             *//* empty css             *//* empty css                  */const V={title:"Components/List/ClickList"},p=({items:M,cardClassModifier:h})=>{const t=document.createElement("section");t.className="af-card af-card--list af-card--click-list",h&&(t.className+=` af-card--${h}`);const r=document.createElement("ul");return r.className="af-list",M.forEach(e=>{const f=e.classModifier?[e.classModifier]:[],o=document.createElement("li");o.className="af-list__item";let s;e.href?(s=document.createElement("a"),s.href=e.href,e.target&&(s.target=e.target)):(s=document.createElement("button"),s.type="button",s.disabled=e.isDisabled),e.isDisabled&&f.push("disabled"),s.classList.add("af-click-item",...f.filter(Boolean).map(a=>`af-click-item--${a}`));const i=document.createElement("div");if(i.className="af-click-item__content",e.icon){const a=document.createElement("div");a.className="af-click-item__icon",a.innerHTML=e.icon,i.appendChild(a)}const m=document.createElement("div");m.className="af-click-item__label",m.innerHTML=e.label,i.appendChild(m),s.appendChild(i);const d=document.createElement("div");d.className="af-click-item__action",d.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>`,s.appendChild(d),o.appendChild(s),r.appendChild(o)}),t.appendChild(r),t},n={render:p,args:{items:[{icon:`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>`,label:"Texte principal",isDisabled:!1,classModifier:"small"},{icon:`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>`,label:"Texte principal",isDisabled:!1},{icon:`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>`,label:"Texte principal",isDisabled:!1,classModifier:"large"},{icon:`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/><path d="m18.01 13-1.42 1.41 1.58 1.58H12v2h6.17l-1.58 1.59 1.42 1.41 3.99-4z"/>
          </svg>`,label:"Texte principal",isDisabled:!0}],cardClassModifier:""},argTypes:{cardClassModifier:{options:["","large"],control:{type:"select"},defaultValue:""}}},l={render:p,args:{items:[{label:`
          <h3 class="af-click-item__title">Fiche Orias précontractuelle</h3>
          <p class="af-click-item__subtitle">30 novembre 2021</p>
          <p class="af-click-item__secondary">Signé électroniquement</p>`,isDisabled:!1},{label:`
          <h3 class="af-click-item__title">Fiche Orias précontractuelle</h3>
          <p class="af-click-item__subtitle">30 novembre 2021</p>
          <p class="af-click-item__secondary">Signé électroniquement</p>`,isDisabled:!0}],cardClassModifier:""},argTypes:{cardClassModifier:{options:["","large"],control:{type:"select"},defaultValue:""}}},c={render:p,args:{items:[{label:`
          <h3 class="af-click-item__title">Fiche Orias précontractuelle</h3>
          <p class="af-click-item__subtitle">30 novembre 2021</p>
          <p class="af-click-item__secondary">Signé électroniquement</p>`,href:"https://github.com/AxaFrance/design-system",target:"_blank",isDisabled:!1},{label:`
          <h3 class="af-click-item__title">Fiche Orias précontractuelle</h3>
          <p class="af-click-item__subtitle">30 novembre 2021</p>
          <p class="af-click-item__secondary">Signé électroniquement</p>`,href:"https://github.com/AxaFrance/design-system",target:"_blank",isDisabled:!0}],cardClassModifier:""},argTypes:{cardClassModifier:{options:["","large"],control:{type:"select"},defaultValue:""}}};var u,g,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: template,
  args: {
    items: [{
      icon: \`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>\`,
      label: "Texte principal",
      isDisabled: false,
      classModifier: "small"
    }, {
      icon: \`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>\`,
      label: "Texte principal",
      isDisabled: false
    }, {
      icon: \`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>\`,
      label: "Texte principal",
      isDisabled: false,
      classModifier: "large"
    }, {
      icon: \`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/><path d="m18.01 13-1.42 1.41 1.58 1.58H12v2h6.17l-1.58 1.59 1.42 1.41 3.99-4z"/>
          </svg>\`,
      label: "Texte principal",
      isDisabled: true
    }],
    cardClassModifier: ""
  },
  argTypes: {
    cardClassModifier: {
      options: ["", "large"],
      control: {
        type: "select"
      },
      defaultValue: ""
    }
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,_,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: template,
  args: {
    items: [{
      label: \`
          <h3 class="af-click-item__title">Fiche Orias précontractuelle</h3>
          <p class="af-click-item__subtitle">30 novembre 2021</p>
          <p class="af-click-item__secondary">Signé électroniquement</p>\`,
      isDisabled: false
    }, {
      label: \`
          <h3 class="af-click-item__title">Fiche Orias précontractuelle</h3>
          <p class="af-click-item__subtitle">30 novembre 2021</p>
          <p class="af-click-item__secondary">Signé électroniquement</p>\`,
      isDisabled: true
    }],
    cardClassModifier: ""
  },
  argTypes: {
    cardClassModifier: {
      options: ["", "large"],
      control: {
        type: "select"
      },
      defaultValue: ""
    }
  }
}`,...(k=(_=l.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var w,C,x;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: template,
  args: {
    items: [{
      label: \`
          <h3 class="af-click-item__title">Fiche Orias précontractuelle</h3>
          <p class="af-click-item__subtitle">30 novembre 2021</p>
          <p class="af-click-item__secondary">Signé électroniquement</p>\`,
      href: "https://github.com/AxaFrance/design-system",
      target: "_blank",
      isDisabled: false
    }, {
      label: \`
          <h3 class="af-click-item__title">Fiche Orias précontractuelle</h3>
          <p class="af-click-item__subtitle">30 novembre 2021</p>
          <p class="af-click-item__secondary">Signé électroniquement</p>\`,
      href: "https://github.com/AxaFrance/design-system",
      target: "_blank",
      isDisabled: true
    }],
    cardClassModifier: ""
  },
  argTypes: {
    cardClassModifier: {
      options: ["", "large"],
      control: {
        type: "select"
      },
      defaultValue: ""
    }
  }
}`,...(x=(C=c.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const S=["ClickListWithIcon","ClickListWithoutIcon","ClickListLinkWithoutIcon"];export{c as ClickListLinkWithoutIcon,n as ClickListWithIcon,l as ClickListWithoutIcon,S as __namedExportsOrder,V as default};
