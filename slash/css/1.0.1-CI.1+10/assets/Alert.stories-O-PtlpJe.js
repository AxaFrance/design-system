const c={title:"Components/Alert"},o=["success","info","danger","error"];var l=(e=>(e.error="glyphicon glyphicon-minus-sign",e.danger="glyphicon glyphicon-alert",e.info="glyphicon glyphicon-info-sign",e.success="glyphicon glyphicon-ok",e))(l||{});const s={name:"Alert",render:e=>{const t=document.createElement("div");return t.className+=["af-alert",e.classModifier?`af-alert--${e.classModifier}`:""].join(" "),t.innerHTML=`
    <div class="af-alert__title">
        <div class="af-alert__title-icon">
            <i class="${e.iconClassName||l[e.classModifier]}"></i>
        </div>
        <div class="af-alert__title-text">
            ${e.title}
        </div>
        <button type="button" class="af-alert__title-icon-close">
            <i class="glyphicon glyphicon-close"></i>
        </button>
    </div>
`,t},args:{title:"Attention: des informations sont manquantes",classModifier:"success",iconClassName:""},argTypes:{classModifier:{options:o,control:{type:"select"},defaultValue:"success"}}};var n,a,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Alert",
  render: args => {
    const alert = document.createElement("div");
    alert.className += ["af-alert", args.classModifier ? \`af-alert--\${args.classModifier}\` : ""].join(" ");
    alert.innerHTML = \`
    <div class="af-alert__title">
        <div class="af-alert__title-icon">
            <i class="\${args.iconClassName || TypeIcons[args.classModifier as keyof typeof TypeIcons]}"></i>
        </div>
        <div class="af-alert__title-text">
            \${args.title}
        </div>
        <button type="button" class="af-alert__title-icon-close">
            <i class="glyphicon glyphicon-close"></i>
        </button>
    </div>
\`;
    return alert;
  },
  args: {
    title: "Attention: des informations sont manquantes",
    classModifier: "success",
    iconClassName: ""
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "select"
      },
      defaultValue: "success"
    }
  }
}`,...(i=(a=s.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const r=["TypeIcons","Default"];export{s as Default,l as TypeIcons,r as __namedExportsOrder,c as default};
