/* empty css               */const h={title:"Components/Title"},u=t=>{const n=document.createElement("header");if(n.className=`af-title${t.classModifier.split(" ").filter(Boolean).map(e=>` af-title--${e}`).join("")}`,n.className+=` af-title--${t.size}`,t.icon&&t.size==="xl"){const e=document.createElement("div");e.className="af-icon-bg af-title__icon",e.innerHTML=t.icon,n.appendChild(e)}const s=document.createElement("p");if(s.className="af-title__title",s.textContent=t.children,n.appendChild(s),t.firstSubtitle){const e=document.createElement("span");e.className="af-title__subtitle",e.textContent=t.firstSubtitle,n.appendChild(e)}if(t.secondSubtitle&&t.size==="xl"){const e=document.createElement("span");e.className="af-title__subtitle",e.textContent=t.secondSubtitle,n.appendChild(e)}return n},i={render:u,args:{children:"Titre de la page",icon:`
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960">
            <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm127-159h215q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Zm0-171h346q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Zm0-171h346q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Z"/>
        </svg>`,firstSubtitle:"Sous Titre 1",secondSubtitle:"Sous Titre 2",classModifier:"",size:"xl"},argTypes:{size:{options:["xl","l"],control:{type:"select"},defaultValue:"xl"}}},l={render:u,args:{children:"Titre de la page",icon:"",firstSubtitle:"Sous Titre 1",secondSubtitle:"Sous Titre 2",classModifier:"",size:"xl"},argTypes:{size:{options:["xl","l"],control:{type:"select"},defaultValue:"xl"}}};var o,a,r;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: template,
  args: {
    children: "Titre de la page",
    icon: \`
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960">
            <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm127-159h215q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Zm0-171h346q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Zm0-171h346q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Z"/>
        </svg>\`,
    firstSubtitle: "Sous Titre 1",
    secondSubtitle: "Sous Titre 2",
    classModifier: "",
    size: "xl"
  },
  argTypes: {
    size: {
      options: ["xl", "l"],
      control: {
        type: "select"
      },
      defaultValue: "xl"
    }
  }
}`,...(r=(a=i.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var c,d,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: template,
  args: {
    children: "Titre de la page",
    icon: "",
    firstSubtitle: "Sous Titre 1",
    secondSubtitle: "Sous Titre 2",
    classModifier: "",
    size: "xl"
  },
  argTypes: {
    size: {
      options: ["xl", "l"],
      control: {
        type: "select"
      },
      defaultValue: "xl"
    }
  }
}`,...(p=(d=l.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const f=["TitleWithIcon","TitleWithoutIcon"];export{i as TitleWithIcon,l as TitleWithoutIcon,f as __namedExportsOrder,h as default};
