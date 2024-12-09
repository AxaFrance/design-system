/* empty css             *//* empty css             *//* empty css                        */const k={title:"Components/List/ContentItemMono"},m=({classModifier:d,...t})=>{const n=document.createElement("div"),o=[t.size,...d.split(" ")];if(t.isDisabled&&o.push("disabled"),n.classList.add("af-content-item-mono",...o.filter(Boolean).map(e=>`af-content-item-mono--${e}`)),t.hasStick){const e=document.createElement("div");e.className="af-content-item-mono__stick",n.appendChild(e)}if(t.leftElement){const e=document.createElement("div");e.className="af-content-item-mono__left-container",t.isLeftElementCentered&&(e.className+=" af-content-item-mono__left-container--center"),e.innerHTML=t.leftElement,n.appendChild(e)}const s=document.createElement("div");s.className="af-content-item-mono__text-container";const a=document.createElement("p");if(a.className="af-content-item-mono__main-text",a.innerHTML=t.children,s.appendChild(a),t.secondaryText){const e=document.createElement("p");e.className="af-content-item-mono__secondary-text",e.innerHTML=t.secondaryText,s.appendChild(e)}if(t.tertiaryText&&t.size!=="xl"){const e=document.createElement("p");e.className="af-content-item-mono__tertiary-text",e.innerHTML=t.tertiaryText,s.appendChild(e)}return n.appendChild(s),n},I={children:"Texte principal",secondaryText:"Texte secondaire",tertiaryText:"Texte tertiaire",size:"m",isDisabled:!1,leftElement:"",isLeftElementCentered:!1,hasStick:!1,classModifier:""},L={children:"Texte principal",secondaryText:"Texte secondaire",tertiaryText:"Texte tertiaire",size:"m",isDisabled:!1,leftElement:`
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960">
            <path d="M686-450H190q-13 0-21.5-8.5T160-480q0-13 8.5-21.5T190-510h496L459-737q-9-9-9-21t9-21q9-9 21-9t21 9l278 278q5 5 7 10t2 11q0 6-2 11t-7 10L501-181q-9 9-21 9t-21-9q-9-9-9-21t9-21l227-227Z"/>
        </svg>`,isLeftElementCentered:!0,hasStick:!1,classModifier:""},A={children:"Texte principal",secondaryText:"Texte secondaire",tertiaryText:"",size:"m",isDisabled:!1,leftElement:"",isLeftElementCentered:!1,hasStick:!0,classModifier:""},r={render:m,args:I,argTypes:{size:{options:["xl","m"],control:{type:"select"},defaultValue:"m"}}},i={render:m,args:L,argTypes:{size:{options:["xl","m"],control:{type:"select"},defaultValue:"m"}}},l={render:m,args:A,argTypes:{size:{options:["xl","m"],control:{type:"select"},defaultValue:"m"}}},c={render:({classModifier:d,...t})=>{const n=document.createElement("section");n.className=`af-card ${["list",...d].filter(Boolean).map(s=>` af-card--${s}`).join("")}`;const o=document.createElement("ul");return o.className="af-list",t.items.forEach(s=>{const a=document.createElement("li");a.className="af-list__item",a.appendChild(m(s)),o.appendChild(a)}),n.appendChild(o),n},args:{items:[I,L,A],classModifier:["first-separator-full-width"]},argTypes:{classModifier:{options:["large","first-separator-full-width"],control:{type:"multi-select"},defaultValue:["first-separator-full-width"]}}};var p,f,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: template,
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["xl", "m"],
      control: {
        type: "select"
      },
      defaultValue: "m"
    }
  }
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var h,x,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: template,
  args: contentItemMonoWithIconArgs,
  argTypes: {
    size: {
      options: ["xl", "m"],
      control: {
        type: "select"
      },
      defaultValue: "m"
    }
  }
}`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var g,y,M;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: template,
  args: contentItemMonoWithStickArgs,
  argTypes: {
    size: {
      options: ["xl", "m"],
      control: {
        type: "select"
      },
      defaultValue: "m"
    }
  }
}`,...(M=(y=l.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var E,C,_;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: ({
    classModifier,
    ...args
  }: Args) => {
    const list = document.createElement("section");
    list.className = \`af-card \${["list", ...classModifier].filter(Boolean).map((modifier: string) => \` af-card--\${modifier}\`).join("")}\`;
    const ul = document.createElement("ul");
    ul.className = "af-list";
    args.items.forEach((childArgs: Args) => {
      const item = document.createElement("li");
      item.className = "af-list__item";
      item.appendChild(template(childArgs));
      ul.appendChild(item);
    });
    list.appendChild(ul);
    return list;
  },
  args: {
    items: [defaultArgs, contentItemMonoWithIconArgs, contentItemMonoWithStickArgs],
    classModifier: ["first-separator-full-width"]
  },
  argTypes: {
    classModifier: {
      options: ["large", "first-separator-full-width"],
      control: {
        type: "multi-select"
      },
      defaultValue: ["first-separator-full-width"]
    }
  }
}`,...(_=(C=c.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const z=["Default","ContentItemMonoWithIcon","ContentItemMonoWithStick","ContentItemMonoList"];export{c as ContentItemMonoList,i as ContentItemMonoWithIcon,l as ContentItemMonoWithStick,r as Default,z as __namedExportsOrder,k as default};
