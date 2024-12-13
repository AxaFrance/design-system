/* empty css               */const f={title:"Components/Action"},i={name:"Action with link",render:n=>{const t=document.createElement("a");return t.className+=["btn af-btn--circle",n.classModifier?`btn af-btn--${n.classModifier}`:""].join(" "),t.href=n.href,t.target=n.target,t.title=n.title,t.id=n.id,t.innerHTML=`<i class="glyphicon glyphicon-${n.icon}"></i>`,t},args:{href:"http://www.axa.fr",icon:"link",title:"Lien de test",target:"_blank",id:"1",classModifier:""}},e={name:"Action Button",render:n=>{const t=document.createElement("a");return t.className+=["btn af-btn--circle",n.classModifier?`btn af-btn--${n.classModifier}`:""].join(" "),t.title=n.title,t.id=n.id,t.innerHTML=`<i class="glyphicon glyphicon-${n.icon}"></i>`,t},args:{icon:"floppy-disk",title:"Enregistrer",id:"2",classModifier:""}};var a,r,c;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Action with link",
  render: args => {
    const action = document.createElement("a");
    action.className += ["btn af-btn--circle", args.classModifier ? \`btn af-btn--\${args.classModifier}\` : ""].join(" ");
    action.href = args.href;
    action.target = args.target;
    action.title = args.title;
    action.id = args.id;
    action.innerHTML = \`<i class="glyphicon glyphicon-\${args.icon}"></i>\`;
    return action;
  },
  args: {
    href: "http://www.axa.fr",
    icon: "link",
    title: "Lien de test",
    target: "_blank",
    id: "1",
    classModifier: ""
  }
}`,...(c=(r=i.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var o,s,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Action Button",
  render: args => {
    const action = document.createElement("a");
    action.className += ["btn af-btn--circle", args.classModifier ? \`btn af-btn--\${args.classModifier}\` : ""].join(" ");
    action.title = args.title;
    action.id = args.id;
    action.innerHTML = \`<i class="glyphicon glyphicon-\${args.icon}"></i>\`;
    return action;
  },
  args: {
    icon: "floppy-disk",
    title: "Enregistrer",
    id: "2",
    classModifier: ""
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const m=["Primary","Button"];export{e as Button,i as Primary,m as __namedExportsOrder,f as default};
