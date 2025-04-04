/* empty css               */const l={title:"Components/Button"},r=["success","info","danger","reverse","disabled","small","hasiconLeft","hasiconRight"],e={render:n=>{const s=document.createElement("button");return s.innerHTML=n.icon?`<span class="af-btn__text">${n.label}</span> <span class="glyphicon glyphicon-${n.icon}" /> `:n.label,s.className=["af-btn",n.classModifier?`af-btn--${n.classModifier}`:""].join(" "),s},args:{label:"Button",classModifier:"",icon:null},argTypes:{classModifier:{options:r,control:{type:"select"}},icon:{control:{type:"text"}}}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    const btn = document.createElement("button");
    btn.innerHTML = args.icon ? \`<span class="af-btn__text">\${args.label}</span> <span class="glyphicon glyphicon-\${args.icon}" /> \` : args.label;
    btn.className = ["af-btn", args.classModifier ? \`af-btn--\${args.classModifier}\` : ""].join(" ");
    return btn;
  },
  args: {
    label: "Button",
    classModifier: "",
    icon: null
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "select"
      }
    },
    icon: {
      control: {
        type: "text"
      }
    }
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const i=["Primary"];export{e as Primary,i as __namedExportsOrder,l as default};
