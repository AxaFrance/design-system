/* empty css               *//* empty css             *//* empty css            *//* empty css             */const L={title:"Components/List/ContentTabList"},C=({items:E,isMobile:h})=>{const d=document.createElement("section");d.className="af-card af-card--list af-card--extra-padding af-card--content-tab-list";const p=document.createElement("ul");return p.className="af-list",E.forEach(({title:M,subtitle:f,date:n,tag:a,actions:x=[],value:s})=>{const o=document.createElement("li");o.className="af-list__item";const i=document.createElement("div");i.className="af-list-item__left-container";const l=document.createElement("div");if(l.className="af-list-item__right-container",s&&(n||a)){const e=document.createElement("div");if(e.className="af-list-item__additional-data-container",n){const t=document.createElement("span");t.className="af-list-item__date",t.textContent=n,e.appendChild(t)}if(a){const t=document.createElement("div");t.className="af-tag af-tag--warning",t.innerHTML=`<span class="af-tag__label">${a}</span>`,e.appendChild(t)}i.appendChild(e)}const c=document.createElement("div");if(c.className="af-list-item__label",c.innerHTML=`<span class="af-list-item-label__title">${M}</span>`,f&&(c.innerHTML+=`<span class="af-list-item-label__subtitle">${f}</span>`),i.appendChild(c),!s&&h&&(n||a)){const e=document.createElement("div");if(e.className="af-list-item__additional-data-container",a){const t=document.createElement("div");t.className="af-tag af-tag--warning",t.innerHTML=`<span class="af-tag__label">${a}</span>`,e.appendChild(t)}if(n){const t=document.createElement("span");t.className="af-list-item__date",t.textContent=n,e.appendChild(t)}i.appendChild(e)}if(o.appendChild(i),!s&&!h&&(n||a)){const e=document.createElement("div");if(e.className="af-list-item__additional-data-container",a){const t=document.createElement("div");t.className="af-tag af-tag--warning",t.innerHTML=`<span class="af-tag__label">${a}</span>`,e.appendChild(t)}if(n){const t=document.createElement("span");t.className="af-list-item__date",t.textContent=n,e.appendChild(t)}l.appendChild(e)}if(x.forEach(e=>{const t=document.createElement("div");t.className="af-list-item__action-container",t.innerHTML=e,l.appendChild(t)}),s){const e=document.createElement("span");e.className="af-list-item__value",e.textContent=s,l.appendChild(e)}o.appendChild(l),p.appendChild(o)}),d.appendChild(p),d},r={render:C,args:{items:[{title:"Remboursement soins",subtitle:"Titre onglet",tag:"En attente",date:"01/01/2024",actions:[`<button class="af-btn-client af-btn-client--ghost" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00008F" viewBox="0 0 24 24">
              <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
            </svg>
            Télécharger
          </button>`]},{title:"Remboursement soins",tag:"En attente",actions:[`<button class="af-btn-client af-btn-client--ghost" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00008F" viewBox="0 0 24 24">
              <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
            </svg>
            Télécharger
          </button>`,`<button class="af-btn-client af-btn-client--ghost" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00008F" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
            </svg>
            Afficher
          </button>`]}],isMobile:!1}},m={render:C,args:{items:[{title:"Remboursement soins",subtitle:"Titre onglet",date:"01/01/2024",value:"+ 11,86 €"},{title:"Remboursement soins",tag:"En attente",value:"+ 11,86 €"}],isMobile:!1}};var g,u,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: template,
  args: {
    items: [{
      title: "Remboursement soins",
      subtitle: "Titre onglet",
      tag: "En attente",
      date: "01/01/2024",
      actions: [\`<button class="af-btn-client af-btn-client--ghost" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00008F" viewBox="0 0 24 24">
              <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
            </svg>
            Télécharger
          </button>\`]
    }, {
      title: "Remboursement soins",
      tag: "En attente",
      actions: [\`<button class="af-btn-client af-btn-client--ghost" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00008F" viewBox="0 0 24 24">
              <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
            </svg>
            Télécharger
          </button>\`, \`<button class="af-btn-client af-btn-client--ghost" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00008F" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
            </svg>
            Afficher
          </button>\`]
    }],
    isMobile: false
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,w,_;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: template,
  args: {
    items: [{
      title: "Remboursement soins",
      subtitle: "Titre onglet",
      date: "01/01/2024",
      value: "+ 11,86 €"
    }, {
      title: "Remboursement soins",
      tag: "En attente",
      value: "+ 11,86 €"
    }],
    isMobile: false
  }
}`,...(_=(w=m.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const B=["ContentTabListWithButtons","ContentTabListWithValue"];export{r as ContentTabListWithButtons,m as ContentTabListWithValue,B as __namedExportsOrder,L as default};
