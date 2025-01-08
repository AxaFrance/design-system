const s={title:"Components/Pagination"},d=["desktop","mobile"],c={render:e=>{const i=document.createElement("div");if(i.className="af-container-pagination",e.typeEcran===d[0]){const l=document.createElement("div");l.className="af-pagination-desktop";const t=document.createElement("ul");if(e.nbPage>7){if(e.pageSelect<5){t.className="first";for(let n=1;n<=5;n++){const o=document.createElement("li");o.ariaLabel=`page-${n}`,o.innerHTML=`<button type="button">${n}</button>`,e.pageSelect===n&&(o.ariaCurrent="page"),t.appendChild(o)}const a=document.createElement("li");return a.ariaLabel=`page-${e.nbPage}`,a.innerHTML=`<button type="button">${e.nbPage}</button>`,t.appendChild(a),l.appendChild(t),i.appendChild(l),i}if(e.pageSelect>e.nbPage-4){t.className="last";const a=document.createElement("li");a.ariaLabel="page-1",a.innerHTML='<button type="button">1</button>',t.appendChild(a);for(let n=e.nbPage-4;n<=e.nbPage;n++){const o=document.createElement("li");o.ariaLabel=`page-${n}`,o.innerHTML=`<button type="button">${n}</button>`,e.pageSelect===n&&(o.ariaCurrent="page"),t.appendChild(o)}return l.appendChild(t),i.appendChild(l),i}t.className="between";const p=document.createElement("li");p.ariaLabel="page-1",p.innerHTML='<button type="button">1</button>',t.appendChild(p);for(let a=e.pageSelect-1;a<=e.pageSelect+1;a++){const n=document.createElement("li");n.ariaLabel=`page-${a}`,n.innerHTML=`<button type="button">${a}</button>`,e.pageSelect===a&&(n.ariaCurrent="page"),t.appendChild(n)}const r=document.createElement("li");return r.ariaLabel=`page-${e.nbPage}`,r.innerHTML=`<button type="button">${e.nbPage}</button>`,t.appendChild(r),l.appendChild(t),i.appendChild(l),i}for(let p=1;p<=e.nbPage;p++){const r=document.createElement("li");r.ariaLabel=`page-${p}`,r.innerHTML=`<button type="button">${p}</button>`,e.pageSelect===p&&(r.ariaCurrent="page"),t.appendChild(r),l.appendChild(t),i.appendChild(l)}return i}return i.innerHTML=`
    <div class="af-pagination-mobile">
      <button type="button" aria-label="Page précédente" ${e.pageSelect===1&&"disabled"}>
      <i class="arrow glyphicon glyphicon-arrow-collapse-left"></i>
      </button>
      <span>${e.pageSelect} sur ${e.nbPage}</span>
      <button type="button" aria-label="Page suivant" ${e.pageSelect===e.nbPage&&"disabled"}>
      <i class="arrow glyphicon glyphicon-arrow-collapse-right"></i>
      </button>
    </div>
    `,i},args:{typeEcran:"desktop",nbPage:20,pageSelect:1},argTypes:{typeEcran:{options:d,control:{type:"select"}},nbPage:{control:{type:"number"}},pageSelect:{control:{type:"number"}}}};var g,u,b;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const div = document.createElement("div");
    div.className = "af-container-pagination";
    if (args.typeEcran === TYPE_ECRAN[0]) {
      const divDesktop = document.createElement("div");
      divDesktop.className = "af-pagination-desktop";
      const ul = document.createElement("ul");
      if (args.nbPage > 7) {
        if (args.pageSelect < 5) {
          ul.className = "first";
          for (let page = 1; page <= 5; page++) {
            const li = document.createElement("li");
            li.ariaLabel = \`page-\${page}\`;
            li.innerHTML = \`<button type="button">\${page}</button>\`;
            if (args.pageSelect === page) {
              li.ariaCurrent = "page";
            }
            ul.appendChild(li);
          }
          const liMax = document.createElement("li");
          liMax.ariaLabel = \`page-\${args.nbPage}\`;
          liMax.innerHTML = \`<button type="button">\${args.nbPage}</button>\`;
          ul.appendChild(liMax);
          divDesktop.appendChild(ul);
          div.appendChild(divDesktop);
          return div;
        }
        if (args.pageSelect > args.nbPage - 4) {
          ul.className = "last";
          const liMin = document.createElement("li");
          liMin.ariaLabel = \`page-1\`;
          liMin.innerHTML = \`<button type="button">1</button>\`;
          ul.appendChild(liMin);
          for (let page = args.nbPage - 4; page <= args.nbPage; page++) {
            const li = document.createElement("li");
            li.ariaLabel = \`page-\${page}\`;
            li.innerHTML = \`<button type="button">\${page}</button>\`;
            if (args.pageSelect === page) {
              li.ariaCurrent = "page";
            }
            ul.appendChild(li);
          }
          divDesktop.appendChild(ul);
          div.appendChild(divDesktop);
          return div;
        }
        ul.className = "between";
        const liMin = document.createElement("li");
        liMin.ariaLabel = \`page-1\`;
        liMin.innerHTML = \`<button type="button">1</button>\`;
        ul.appendChild(liMin);
        for (let page = args.pageSelect - 1; page <= args.pageSelect + 1; page++) {
          const li = document.createElement("li");
          li.ariaLabel = \`page-\${page}\`;
          li.innerHTML = \`<button type="button">\${page}</button>\`;
          if (args.pageSelect === page) {
            li.ariaCurrent = "page";
          }
          ul.appendChild(li);
        }
        const liMax = document.createElement("li");
        liMax.ariaLabel = \`page-\${args.nbPage}\`;
        liMax.innerHTML = \`<button type="button">\${args.nbPage}</button>\`;
        ul.appendChild(liMax);
        divDesktop.appendChild(ul);
        div.appendChild(divDesktop);
        return div;
      }
      for (let page = 1; page <= args.nbPage; page++) {
        const li = document.createElement("li");
        li.ariaLabel = \`page-\${page}\`;
        li.innerHTML = \`<button type="button">\${page}</button>\`;
        if (args.pageSelect === page) {
          li.ariaCurrent = "page";
        }
        ul.appendChild(li);
        divDesktop.appendChild(ul);
        div.appendChild(divDesktop);
      }
      return div;
    }
    div.innerHTML = \`
    <div class="af-pagination-mobile">
      <button type="button" aria-label="Page précédente" \${args.pageSelect === 1 && "disabled"}>
      <i class="arrow glyphicon glyphicon-arrow-collapse-left"></i>
      </button>
      <span>\${args.pageSelect} sur \${args.nbPage}</span>
      <button type="button" aria-label="Page suivant" \${args.pageSelect === args.nbPage && "disabled"}>
      <i class="arrow glyphicon glyphicon-arrow-collapse-right"></i>
      </button>
    </div>
    \`;
    return div;
  },
  args: {
    typeEcran: "desktop",
    nbPage: 20,
    pageSelect: 1
  },
  argTypes: {
    typeEcran: {
      options: TYPE_ECRAN,
      control: {
        type: "select"
      }
    },
    nbPage: {
      control: {
        type: "number"
      }
    },
    pageSelect: {
      control: {
        type: "number"
      }
    }
  }
}`,...(b=(u=c.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const m=["Pagination"];export{c as Pagination,m as __namedExportsOrder,s as default};
