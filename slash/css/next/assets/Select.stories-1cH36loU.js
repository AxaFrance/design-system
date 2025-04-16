/* empty css              */const a={title:"Components/Form/Input/Select"},e={render:()=>{const o=document.createElement("div");return o.innerHTML=`<div class="col-md-2">
    <label class="af-form__group-label" for="select-story">Input Select *</label>
</div>
<div class="col-md-10">
    <div class="af-form__select">
        <div class="af-form__select-container">
            <select class="af-form__input-select" id="select-story" name="select-story" type="text">
                <option value="" disabled selected>- Sélectionner -</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
            </select>
            <span aria-controls="select-story" class="glyphicon glyphicon-menu-down" />
        </div><small class="af-form__message">Aide à la saisie</small>
    </div>
</div>`,o.className="af-form__group row",o},args:{label:"Select"},argTypes:{}};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const btn = document.createElement("div");
    btn.innerHTML = \`<div class="col-md-2">
    <label class="af-form__group-label" for="select-story">Input Select *</label>
</div>
<div class="col-md-10">
    <div class="af-form__select">
        <div class="af-form__select-container">
            <select class="af-form__input-select" id="select-story" name="select-story" type="text">
                <option value="" disabled selected>- Sélectionner -</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
            </select>
            <span aria-controls="select-story" class="glyphicon glyphicon-menu-down" />
        </div><small class="af-form__message">Aide à la saisie</small>
    </div>
</div>\`;
    btn.className = "af-form__group row";
    return btn;
  },
  args: {
    label: "Select"
  },
  argTypes: {}
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,a as default};
