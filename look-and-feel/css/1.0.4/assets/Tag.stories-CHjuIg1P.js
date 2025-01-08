/* empty css            */const o={title:"Components/Tag"},e={name:"Tag",render:s=>{const a=document.createElement("div");return a.className="af-tag",s.classModifier!=="default"&&(a.className+=` af-tag--${s.classModifier}`),a.innerHTML=`<span class="af-tag__label">${s.label}</span>`,a},args:{label:"Texte",classModifier:"default"},argTypes:{classModifier:{options:["default","success","error","warning","info"],control:{type:"select"},defaultValue:"default"}}};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Tag",
  render: args => {
    const tag = document.createElement("div");
    tag.className = "af-tag";
    if (args.classModifier !== "default") tag.className += \` af-tag--\${args.classModifier}\`;
    tag.innerHTML = \`<span class="af-tag__label">\${args.label}</span>\`;
    return tag;
  },
  args: {
    label: "Texte",
    classModifier: "default"
  },
  argTypes: {
    classModifier: {
      options: ["default", "success", "error", "warning", "info"],
      control: {
        type: "select"
      },
      defaultValue: "default"
    }
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,o as default};
