/* empty css               */const r={title:"Components/Modal"},a=[{label:"Default",value:""},{label:"Large (lg)",value:"lg"},{label:"Small (sm)",value:"sm"}],n={render:e=>{const t=document.createElement("dialog"),l=a.find(d=>d.label===e.classModifier)??a[0];return t.innerHTML=`
        <div class="af-modal__dialog">
            <div class="af-modal__content">
                <div class="af-modal__header">
                    <h4 class="af-modal__header-title">${e.title}</h4>
                    <button class="af-modal__header-close-btn" type="button" aria-label="Close">
                        <svg class="glyphicon glyphicon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path d="M90.086 0.888l-40.086 40.086-40.086-40.086-9.026 9.026 40.086 40.086-40.086 40.086 9.026 9.026 40.086-40.086 40.086 40.086 9.026-9.026-40.086-40.086 40.086-40.086z"></path>
                        </svg>
                    </button>
                </div>
                <div class="af-modal__body">
                    <p>${e.bodyContent}</p>
                </div>
                <div class="af-modal__footer">                    
                    ${l.value!=="sm"?`<button class="btn af-btn af-btn--reverse" type="button">${e.cancelButtonText}</button>`:""}
                    <button class="btn af-btn" type="button">${e.saveButtonText}</button>
                </div>
            </div>
        </div>`,t.className+=["af-modal",l.value?`af-modal--${l.value}`:""].join(" ").trim(),t.open=e.open,t},args:{open:!0,title:"Modal Title",bodyContent:"Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",cancelButtonText:"Cancel",saveButtonText:"Save",classModifier:a[0].label},argTypes:{classModifier:{options:a.map(e=>e.label),control:{type:"radio"}}}};var o,s,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("dialog");
    const selectClassModifier = MODIFIERS.find(m => m.label === args.classModifier) ?? MODIFIERS[0];
    container.innerHTML = \`
        <div class="af-modal__dialog">
            <div class="af-modal__content">
                <div class="af-modal__header">
                    <h4 class="af-modal__header-title">\${args.title}</h4>
                    <button class="af-modal__header-close-btn" type="button" aria-label="Close">
                        <svg class="glyphicon glyphicon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path d="M90.086 0.888l-40.086 40.086-40.086-40.086-9.026 9.026 40.086 40.086-40.086 40.086 9.026 9.026 40.086-40.086 40.086 40.086 9.026-9.026-40.086-40.086 40.086-40.086z"></path>
                        </svg>
                    </button>
                </div>
                <div class="af-modal__body">
                    <p>\${args.bodyContent}</p>
                </div>
                <div class="af-modal__footer">                    
                    \${selectClassModifier.value !== "sm" ? \`<button class="btn af-btn af-btn--reverse" type="button">\${args.cancelButtonText}</button>\` : ""}
                    <button class="btn af-btn" type="button">\${args.saveButtonText}</button>
                </div>
            </div>
        </div>\`;
    container.className += ["af-modal", selectClassModifier.value ? \`af-modal--\${selectClassModifier.value}\` : ""].join(" ").trim();
    container.open = args.open;
    return container;
  },
  args: {
    open: true,
    title: "Modal Title",
    bodyContent: "Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",
    cancelButtonText: "Cancel",
    saveButtonText: "Save",
    classModifier: MODIFIERS[0].label
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS.map(m => m.label),
      control: {
        type: "radio"
      }
    }
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const u=["Default"];export{n as Default,u as __namedExportsOrder,r as default};
