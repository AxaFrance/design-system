/* empty css              */const c={title:"Components/Form/Input/Pass"},a={name:"Pass",render:({label:r,strength:n})=>{const l=n==="default"?"":`af-form__pass--${n}`,s=document.createElement("div");return s.innerHTML=`
    <div class="col-md-2">
        <label class="af-form__group-label" for="inputpassword">${r} *</label>
    </div>
    <div class="col-md-10">
        <div class="af-form__pass-container">
            <div class="af-form__pass af-form__pass--hasinfobulle ${l}">
                <div class="af-form__pass-strength"></div>
                <input class="af-form__input-text" id="uniqueid" name="inputpassword" value="" tabindex="" type="password" />
                <button class="af-form__pass-btn" type="button">
                    <i class="glyphicon glyphicon-eye-open"></i>
                </button>
            </div>
            <div class="af-popover__container">
                <div class="af-popover__container-over">
                    <button class="af-btn--circle-small"><span class="af-more-help">i</span></button>
                </div>
            </div><small class="af-form__help">8 caractères minimum</small>
        </div>
    </div>`,s.className="af-form__group row",s},args:{label:"Input Password",strength:"default"},argTypes:{strength:{options:["default","bad","okay","good","verygood","excellent"],control:{type:"inline-radio"}}}};var e,o,t;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: "Pass",
  render: ({
    label,
    strength
  }) => {
    const classname = strength === "default" ? "" : \`af-form__pass--\${strength}\`;
    const container = document.createElement("div");
    container.innerHTML = \`
    <div class="col-md-2">
        <label class="af-form__group-label" for="inputpassword">\${label} *</label>
    </div>
    <div class="col-md-10">
        <div class="af-form__pass-container">
            <div class="af-form__pass af-form__pass--hasinfobulle \${classname}">
                <div class="af-form__pass-strength"></div>
                <input class="af-form__input-text" id="uniqueid" name="inputpassword" value="" tabindex="" type="password" />
                <button class="af-form__pass-btn" type="button">
                    <i class="glyphicon glyphicon-eye-open"></i>
                </button>
            </div>
            <div class="af-popover__container">
                <div class="af-popover__container-over">
                    <button class="af-btn--circle-small"><span class="af-more-help">i</span></button>
                </div>
            </div><small class="af-form__help">8 caractères minimum</small>
        </div>
    </div>\`;
    container.className = "af-form__group row";
    return container;
  },
  args: {
    label: "Input Password",
    strength: "default"
  },
  argTypes: {
    strength: {
      options: ["default", "bad", "okay", "good", "verygood", "excellent"],
      control: {
        type: "inline-radio"
      }
    }
  }
}`,...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const p=["Default"];export{a as Default,p as __namedExportsOrder,c as default};
