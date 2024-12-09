/* empty css             *//* empty css                  *//* empty css                        *//* empty css             */const g={title:"Components/List"},t={render:({classModifier:c,...d})=>{const s=document.createElement("section");s.className=`af-card ${["list",...c].filter(Boolean).map(i=>` af-card--${i}`).join("")}`;const e=document.createElement("ul");return e.className="af-list",d.children.forEach(i=>{const n=document.createElement("li");n.className="af-list__item",n.innerHTML=i,e.appendChild(n)}),s.appendChild(e),s},args:{children:[`<div class="af-content-item-mono af-content-item-mono--m">
        <div class="af-content-item-mono__text-container">
          <p class="af-content-item-mono__main-text">Prénom NOM</p>
          <p class="af-content-item-mono__secondary-text">nom.prénom@mail.fr</p>
        </div>
      </div>`,`<button class="af-click-item" type="button">
        <div class="af-click-item__content">
          <div class="af-click-item__icon">
            <svg data-src="/@fs/C:/Users/B519MA/projects/design-system/node_modules/@material-symbols/svg-400/outlined/published_with_changes-fill.svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="injected-svg" viewBox="0 -960 960 960" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M430-82q-72-9-134.5-43t-108-86.5Q142-264 116-332.5T90-480q0-88 41.5-168T243-790H121v-60h229v229h-60v-129q-64 51-102 121.5T150-480q0 132 80 225.5T430-143v61Zm-7-228L268-465l42-42 113 113 227-227 42 42-269 269Zm187 200v-229h60v129q64-52 102-122t38-148q0-132-80-225.5T530-817v-61q146 18 243 129t97 269q0 88-41.5 168T717-170h122v60H610Z"></path>
            </svg>
          </div>
          <div class="af-click-item__label">Modifier le profil</div>
        </div>
        <div class="af-click-item__action">
          <svg data-src="/@fs/C:/Users/B519MA/projects/design-system/node_modules/@material-symbols/svg-400/outlined/chevron_right.svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="injected-svg" viewBox="0 -960 960 960" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"></path>
          </svg>
        </div>
      </button>`,`<button class="af-click-item" type="button">
        <div class="af-click-item__content">
          <div class="af-click-item__icon">
            <svg data-src="/@fs/C:/Users/B519MA/projects/design-system/node_modules/@material-symbols/svg-400/outlined/delete.svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="injected-svg" viewBox="0 -960 960 960" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"></path>
            </svg>
          </div>
          <div class="af-click-item__label">Supprimer le profil</div>
        </div>
        <div class="af-click-item__action">
          <svg data-src="/@fs/C:/Users/B519MA/projects/design-system/node_modules/@material-symbols/svg-400/outlined/chevron_right.svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="injected-svg" viewBox="0 -960 960 960" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"></path>
          </svg>
        </div>
      </button>`],classModifier:["first-separator-full-width"]},argTypes:{classModifier:{options:["large","extra-padding","first-separator-full-width"],control:{type:"multi-select"},defaultValue:[]}}};var l,a,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    classModifier,
    ...args
  }) => {
    const list = document.createElement("section");
    list.className = \`af-card \${["list", ...classModifier].filter(Boolean).map((modifier: string) => \` af-card--\${modifier}\`).join("")}\`;
    const ul = document.createElement("ul");
    ul.className = "af-list";
    args.children.forEach((child: string) => {
      const item = document.createElement("li");
      item.className = "af-list__item";
      item.innerHTML = child;
      ul.appendChild(item);
    });
    list.appendChild(ul);
    return list;
  },
  args: {
    children: [\`<div class="af-content-item-mono af-content-item-mono--m">
        <div class="af-content-item-mono__text-container">
          <p class="af-content-item-mono__main-text">Prénom NOM</p>
          <p class="af-content-item-mono__secondary-text">nom.prénom@mail.fr</p>
        </div>
      </div>\`, \`<button class="af-click-item" type="button">
        <div class="af-click-item__content">
          <div class="af-click-item__icon">
            <svg data-src="/@fs/C:/Users/B519MA/projects/design-system/node_modules/@material-symbols/svg-400/outlined/published_with_changes-fill.svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="injected-svg" viewBox="0 -960 960 960" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M430-82q-72-9-134.5-43t-108-86.5Q142-264 116-332.5T90-480q0-88 41.5-168T243-790H121v-60h229v229h-60v-129q-64 51-102 121.5T150-480q0 132 80 225.5T430-143v61Zm-7-228L268-465l42-42 113 113 227-227 42 42-269 269Zm187 200v-229h60v129q64-52 102-122t38-148q0-132-80-225.5T530-817v-61q146 18 243 129t97 269q0 88-41.5 168T717-170h122v60H610Z"></path>
            </svg>
          </div>
          <div class="af-click-item__label">Modifier le profil</div>
        </div>
        <div class="af-click-item__action">
          <svg data-src="/@fs/C:/Users/B519MA/projects/design-system/node_modules/@material-symbols/svg-400/outlined/chevron_right.svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="injected-svg" viewBox="0 -960 960 960" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"></path>
          </svg>
        </div>
      </button>\`, \`<button class="af-click-item" type="button">
        <div class="af-click-item__content">
          <div class="af-click-item__icon">
            <svg data-src="/@fs/C:/Users/B519MA/projects/design-system/node_modules/@material-symbols/svg-400/outlined/delete.svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="injected-svg" viewBox="0 -960 960 960" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"></path>
            </svg>
          </div>
          <div class="af-click-item__label">Supprimer le profil</div>
        </div>
        <div class="af-click-item__action">
          <svg data-src="/@fs/C:/Users/B519MA/projects/design-system/node_modules/@material-symbols/svg-400/outlined/chevron_right.svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="injected-svg" viewBox="0 -960 960 960" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"></path>
          </svg>
        </div>
      </button>\`],
    classModifier: ["first-separator-full-width"]
  },
  argTypes: {
    classModifier: {
      options: ["large", "extra-padding", "first-separator-full-width"],
      control: {
        type: "multi-select"
      },
      defaultValue: []
    }
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,g as default};
