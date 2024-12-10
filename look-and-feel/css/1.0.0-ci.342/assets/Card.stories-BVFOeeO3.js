/* empty css             */const i={title:"Components/Card"},e={render:a=>{const n=document.createElement("section");return n.className=`af-card${a.classModifier.map(s=>` af-card--${s}`).join("")}`,n.innerHTML=a.children,n},args:{children:'<h1 class="af-card__title">My card title</h1><p>My card content</p>',classModifier:[]},argTypes:{classModifier:{options:["elevation-2","button"],control:{type:"multi-select"},defaultValue:[]}}};var r,t,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("section");
    container.className = \`af-card\${args.classModifier.map((classModifier: string) => \` af-card--\${classModifier}\`).join("")}\`;
    container.innerHTML = args.children;
    return container;
  },
  args: {
    children: '<h1 class="af-card__title">My card title</h1><p>My card content</p>',
    classModifier: []
  },
  argTypes: {
    classModifier: {
      options: ["elevation-2", "button"],
      control: {
        type: "multi-select"
      },
      defaultValue: []
    }
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,i as default};
