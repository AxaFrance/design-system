/* empty css              */const t={title:"Components/Form/Input/Choice"},n=["Oui","Non"],a={render:e=>{const o=document.createElement("div");return o.innerHTML=`<div class="col-md-2">
        <label class="af-form__group-label">${e.label}</label>
    </div>
    <div class="col-md-10">
      <div class="af-form__radio-custom">
        <input name="placeName" placeholder="Paris" class="af-form__input-radio" id="radioItemTrue" type="radio" value="true" />
        <label class="af-form__label" for="radioItemTrue">
          <span class="af-form__description">${e.options[0]??"Oui"}</span>
        </label>
      </div>
      <div class="af-form__radio-custom">
        <input name="placeName" placeholder="Paris" class="af-form__input-radio" id="radioItemFalse" type="radio" value="false" />
        <label class="af-form__label" for="radioItemFalse">
          <span class="af-form__description">${e.options[1]??"Non"}</span>
        </label>
      </div>
    </div>`,o.className="af-form__group row",o},args:{label:"Choice",options:n},argTypes:{}};var r,s,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    container.innerHTML = \`<div class="col-md-2">
        <label class="af-form__group-label">\${args.label}</label>
    </div>
    <div class="col-md-10">
      <div class="af-form__radio-custom">
        <input name="placeName" placeholder="Paris" class="af-form__input-radio" id="radioItemTrue" type="radio" value="true" />
        <label class="af-form__label" for="radioItemTrue">
          <span class="af-form__description">\${args.options[0] ?? "Oui"}</span>
        </label>
      </div>
      <div class="af-form__radio-custom">
        <input name="placeName" placeholder="Paris" class="af-form__input-radio" id="radioItemFalse" type="radio" value="false" />
        <label class="af-form__label" for="radioItemFalse">
          <span class="af-form__description">\${args.options[1] ?? "Non"}</span>
        </label>
      </div>
    </div>\`;
    container.className = "af-form__group row";
    return container;
  },
  args: {
    label: "Choice",
    options: defaultOptions
  },
  argTypes: {}
}`,...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const c=["Default"];export{a as Default,c as __namedExportsOrder,t as default};
