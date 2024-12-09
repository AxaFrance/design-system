const g={title:"Components/Badge",parameters:{layout:"centered"}},l=["success","info","danger","error"],a={name:"Badge",render:e=>{const s=document.createElement("span");return e.disabled&&s.setAttribute("disabled",""),s.innerHTML=e.children,s.className+=["af-badge",e.classModifier?`af-badge--${e.classModifier}`:""].join(" "),s},args:{children:"Lorem ipsum",classModifier:"success",disabled:!1},argTypes:{classModifier:{options:l,control:{type:"select"},defaultValue:"success"}}},n={name:"Badge with icon",render:e=>{const s=document.createElement("span");return e.disabled&&s.setAttribute("disabled",""),s.innerHTML=e.children,s.className+=["af-badge",e.classModifier?`af-badge--${e.classModifier}`:""].join(" "),s},args:{children:'<i class="glyphicon glyphicon-bell"> </i>',classModifier:"error",disabled:!1},argTypes:{classModifier:{options:l,control:{type:"select"},defaultValue:"success"}}};var r,d,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Badge",
  render: args => {
    const badge = document.createElement("span");
    if (args.disabled) badge.setAttribute("disabled", "");
    badge.innerHTML = args.children;
    badge.className += ["af-badge", args.classModifier ? \`af-badge--\${args.classModifier}\` : ""].join(" ");
    return badge;
  },
  args: {
    children: "Lorem ipsum",
    classModifier: "success",
    disabled: false
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
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,t,o;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Badge with icon",
  render: args => {
    const badge = document.createElement("span");
    if (args.disabled) badge.setAttribute("disabled", "");
    badge.innerHTML = args.children;
    badge.className += ["af-badge", args.classModifier ? \`af-badge--\${args.classModifier}\` : ""].join(" ");
    return badge;
  },
  args: {
    children: \`<i class="glyphicon glyphicon-bell"> </i>\`,
    classModifier: "error",
    disabled: false
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
}`,...(o=(t=n.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const f=["Default","BadgeIconStory"];export{n as BadgeIconStory,a as Default,f as __namedExportsOrder,g as default};
