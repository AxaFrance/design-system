const m={title:"Components/Tabs"},t={render:e=>{const b=Array.from({length:e.numberOfTabs},(l,n)=>{const i=`tab-${n+1}`,r=n+1===e.activeTab;return`<button role="tab" type="button" aria-selected="${r}" tabindex="${r?0:-1}" id="${i}" aria-controls="tabpanel-${n+1}"><div>Icon ${n+1}</div><span>Tab ${n+1}</span></button>`}).join(`
`),d=Array.from({length:e.numberOfTabs},(l,n)=>{const i=`tabpanel-${n+1}`;return`<div role="tabpanel" aria-hidden="${n+1!==e.activeTab}" id="${i}" aria-labelledby="tab-${n+1}">Content ${n+1}</div>`}).join(`
`),a=document.createElement("div");return a.innerHTML=`<div role="tablist">
      ${b}
    </div>
    ${d}
    `,a.className=["af-tabs-client",`af-tabs-client--${e.position}`].join(" "),a},args:{position:"center",numberOfTabs:3,activeTab:1},argTypes:{position:{control:"select",options:["center","left"],description:"Position des onglets"},numberOfTabs:{control:{type:"range",min:1,max:10},description:"Nombre d'onglets à afficher"},activeTab:{control:{type:"number",min:1,max:10},description:"Onglet actif"}}};var o,s,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const tabs = Array.from({
      length: args.numberOfTabs
    }, (_, i) => {
      const id = \`tab-\${i + 1}\`;
      const ariaSelected = i + 1 === args.activeTab;
      const tabIndex = ariaSelected ? 0 : -1;
      return \`<button role="tab" type="button" aria-selected="\${ariaSelected}" tabindex="\${tabIndex}" id="\${id}" aria-controls="tabpanel-\${i + 1}"><div>Icon \${i + 1}</div><span>Tab \${i + 1}</span></button>\`;
    }).join("\\n");
    const panels = Array.from({
      length: args.numberOfTabs
    }, (_, i) => {
      const id = \`tabpanel-\${i + 1}\`;
      const ariaHidden = i + 1 !== args.activeTab;
      return \`<div role="tabpanel" aria-hidden="\${ariaHidden}" id="\${id}" aria-labelledby="tab-\${i + 1}">Content \${i + 1}</div>\`;
    }).join("\\n");
    const container = document.createElement("div");
    container.innerHTML = \`<div role="tablist">
      \${tabs}
    </div>
    \${panels}
    \`;
    container.className = ["af-tabs-client", \`af-tabs-client--\${args.position}\`].join(" ");
    return container;
  },
  args: {
    position: "center",
    numberOfTabs: 3,
    activeTab: 1
  },
  argTypes: {
    position: {
      control: "select",
      options: ["center", "left"],
      description: "Position des onglets"
    },
    numberOfTabs: {
      control: {
        type: "range",
        min: 1,
        max: 10
      },
      description: "Nombre d'onglets à afficher"
    },
    activeTab: {
      control: {
        type: "number",
        min: 1,
        max: 10
      },
      description: "Onglet actif"
    }
  }
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const $=["Tabs"];export{t as Tabs,$ as __namedExportsOrder,m as default};
