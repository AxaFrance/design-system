const c={title:"Components/Alert"},o=["success","info","danger","error"];var l=(e=>(e.error="glyphicon glyphicon-minus-sign",e.danger="glyphicon glyphicon-alert",e.info="glyphicon glyphicon-info-sign",e.success="glyphicon glyphicon-ok",e))(l||{});const t={name:"Alert",render:e=>{const n=document.createElement("div");return n.className+=["af-alert",e.classModifier?`af-alert--${e.classModifier}`:""].join(" "),n.innerHTML=`
    <div class="af-alert__title">
        <div class="af-alert__title-icon">
            <i class="${e.icon||l[e.classModifier]}"></i>
        </div>
        <div class="af-alert__title-text">
            ${e.title}
        </div>
        <button type="button" class="af-alert__title-icon-close">
            <i class="glyphicon glyphicon-close"></i>
        </button>
    </div>
`,n},args:{title:"Attention: des informations sont manquantes",classModifier:"success",icon:""},argTypes:{classModifier:{options:o,control:{type:"select"},defaultValue:"success"}}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Alert",
  render: args => {
    const alert = document.createElement("div");
    alert.className += ["af-alert", args.classModifier ? \`af-alert--\${args.classModifier}\` : ""].join(" ");
    alert.innerHTML = \`
    <div class="af-alert__title">
        <div class="af-alert__title-icon">
            <i class="\${args.icon || TypeIcons[args.classModifier as keyof typeof TypeIcons]}"></i>
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
    icon: ""
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const r=["TypeIcons","Default"];export{t as Default,l as TypeIcons,r as __namedExportsOrder,c as default};
