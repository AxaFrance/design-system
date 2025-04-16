const e={title:"Components/Form/Input/Radio"},a={render:o=>{const s=document.createElement("div");return s.innerHTML=`<div class="col-md-2">
        <label class="af-form__group-label">${o.label}</label>
    </div>
    <div class="col-md-10">
        <div class="af-form__radio">
            <input class="af-form__input-radio" name="classic" type="radio" id="radio1" />
            <label class="af-form__label" for="radio1"><span class="af-form__description"> lorem ipsum dolor sit amet</span></label>
        </div>
        <div class="af-form__radio">
            <input class="af-form__input-radio" name="classic" type="radio" id="radio2" />
            <label class="af-form__label" for="radio2"><span class="af-form__description"> Nam sem nisi, auctor sit amet massa sit amet</span></label>
        </div>
        <div class="af-form__radio">
            <input class="af-form__input-radio" name="classic" type="radio" id="radio3" />
            <label class="af-form__label" for="radio3"><span class="af-form__description"> Ut sollicitudin eleifend tincidunt</span></label>
        </div>
        <div class="af-form__radio  af-form__radio--disabled">
            <input class="af-form__input-radio" name="classic" type="radio" id="radio4" disabled="disabled" />
            <label class="af-form__label" for="radio4"><span class="af-form__description"> disabled</span></label>
        </div>
    </div>`,s.className="af-form__group row af-form__group--label-top",s},args:{label:"Radio"},argTypes:{}};var i,r,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    container.innerHTML = \`<div class="col-md-2">
        <label class="af-form__group-label">\${args.label}</label>
    </div>
    <div class="col-md-10">
        <div class="af-form__radio">
            <input class="af-form__input-radio" name="classic" type="radio" id="radio1" />
            <label class="af-form__label" for="radio1"><span class="af-form__description"> lorem ipsum dolor sit amet</span></label>
        </div>
        <div class="af-form__radio">
            <input class="af-form__input-radio" name="classic" type="radio" id="radio2" />
            <label class="af-form__label" for="radio2"><span class="af-form__description"> Nam sem nisi, auctor sit amet massa sit amet</span></label>
        </div>
        <div class="af-form__radio">
            <input class="af-form__input-radio" name="classic" type="radio" id="radio3" />
            <label class="af-form__label" for="radio3"><span class="af-form__description"> Ut sollicitudin eleifend tincidunt</span></label>
        </div>
        <div class="af-form__radio  af-form__radio--disabled">
            <input class="af-form__input-radio" name="classic" type="radio" id="radio4" disabled="disabled" />
            <label class="af-form__label" for="radio4"><span class="af-form__description"> disabled</span></label>
        </div>
    </div>\`;
    container.className = "af-form__group row af-form__group--label-top";
    return container;
  },
  args: {
    label: "Radio"
  },
  argTypes: {}
}`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const d=["Default"];export{a as Default,d as __namedExportsOrder,e as default};
