/* empty css               */const c={title:"Components/IconBg",parameters:{backgrounds:{default:"dark"}}},n={render:a=>{const e=document.createElement("div");return e.className=`af-icon-bg${a.classModifier.split(" ").filter(Boolean).map(t=>` af-icon-bg--${t}`).join("")}`,a.isDisabled&&(e.className+=" af-icon-bg--disabled"),e.innerHTML=a.children,e},args:{isDisabled:!1,children:`
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960">
            <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm127-159h215q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Zm0-171h346q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Zm0-171h346q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Z"/>
        </svg>`,classModifier:"secondary"}};var s,i,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    container.className = \`af-icon-bg\${args.classModifier.split(" ").filter(Boolean).map((classModifier: string) => \` af-icon-bg--\${classModifier}\`).join("")}\`;
    if (args.isDisabled) {
      container.className += " af-icon-bg--disabled";
    }
    container.innerHTML = args.children;
    return container;
  },
  args: {
    isDisabled: false,
    children: \`
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960">
            <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm127-159h215q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Zm0-171h346q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Zm0-171h346q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Z"/>
        </svg>\`,
    classModifier: "secondary"
  }
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const d=["Default"];export{n as Default,d as __namedExportsOrder,c as default};
