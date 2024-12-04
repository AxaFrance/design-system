/* empty css               */const c={title:"Components/Button"},o=["primary","primary-business","secondary","secondary-error","tertiary","ghost"],e={render:n=>{const t=document.createElement("button");return t.innerHTML=n.label,n.iconLeft&&(t.innerHTML=`${n.iconLeft}${t.innerHTML}`),n.iconRight&&(t.innerHTML=`${t.innerHTML}${n.iconRight}`),t.className=["af-btn-client",n.variant?`af-btn-client--${n.variant}`:""].join(" "),n.disabled&&t.setAttribute("disabled",n.disabled),t},args:{label:"Button",variant:"",iconLeft:'<svg fill="white" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path></svg>',iconRight:void 0,disabled:!1},argTypes:{variant:{options:o,control:{type:"select"}},iconLeft:{control:{type:"text"}},iconRight:{control:{type:"text"}}}};var i,r,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const btn = document.createElement("button");
    btn.innerHTML = args.label;
    if (args.iconLeft) {
      btn.innerHTML = \`\${args.iconLeft}\${btn.innerHTML}\`;
    }
    if (args.iconRight) {
      btn.innerHTML = \`\${btn.innerHTML}\${args.iconRight}\`;
    }
    btn.className = ["af-btn-client", args.variant ? \`af-btn-client--\${args.variant}\` : ""].join(" ");
    if (args.disabled) {
      btn.setAttribute("disabled", args.disabled);
    }
    return btn;
  },
  args: {
    label: "Button",
    variant: "",
    iconLeft: \`<svg fill="white" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path></svg>\`,
    iconRight: undefined,
    disabled: false
  },
  argTypes: {
    variant: {
      options: VARIANTS,
      control: {
        type: "select"
      }
    },
    iconLeft: {
      control: {
        type: "text"
      }
    },
    iconRight: {
      control: {
        type: "text"
      }
    }
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const l=["Primary"];export{e as Primary,l as __namedExportsOrder,c as default};
