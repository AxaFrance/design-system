/* empty css               *//* empty css                   */const S={args:{value:"Lorem ipsum",label:"Label",placeholder:"Your name",disabled:!1,required:!0,isOnError:!1},argTypes:{label:{control:{type:"text"}}},title:"Components/Form/Input/TextArea"},p=()=>{const n=document.createElement("div");return n.className="af-form__input-container",n},d=n=>{const e=document.createElement("textarea");return e.id="nameid",e.name="name",e.className="af-form__input-textarea",n.isOnError&&(e.className+=" af-form__input-textarea--error"),e.placeholder=n.placeholder,e.value=n.value,e.disabled=n.disabled,e.required=n.required,e},l=n=>{const e=document.createElement("label");if(e.htmlFor="nameid",e.className="af-form__input-label",e.textContent=n.label,n.required){const t=document.createElement("span");t.textContent=" *",e.appendChild(t)}return e},m=n=>{const e=document.createElement("span");return e.className="af-form__input-description",e.textContent=n.description,e},M=n=>{const e=document.createElement("div");return e.className="af-input-error",e.innerHTML=`
        <svg class="af-input-error__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path></svg>
        ${n.title&&`<span class="af-input-error__message">${n.title}</span>`}
    `,e},q=()=>{const n=document.createElement("button");return n.className="af-btn-client af-btn-client--ghost af-form__input-more",n.innerHTML=`<svg focusable="false" aria-hidden="true" viewBox="0 -960 960 960">
    <path d="M453-280h60v-240h-60v240Zm26.98-314q14.02 0 23.52-9.2T513-626q0-14.45-9.48-24.22-9.48-9.78-23.5-9.78t-23.52 9.78Q447-640.45 447-626q0 13.6 9.48 22.8 9.48 9.2 23.5 9.2Zm.29 514q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"></path>
  </svg>
  En savoir plus`,n},o={name:"TextArea",render:n=>{const e=p(),t=d(n),r=l(n);return e.appendChild(r),e.appendChild(t),e}},i={name:"TextArea with description",render:n=>{const e=p(),t=d(n),r=l(n),a=m(n);return e.appendChild(r),e.appendChild(a),e.appendChild(t),e},args:{description:"Description"}},s={name:"TextArea on error",render:n=>{const e=p(),t=d(n),r=l(n),a=m(n),u=M(n);return e.appendChild(r),e.appendChild(a),e.appendChild(t),e.appendChild(u),e},args:{isOnError:!0,description:"Description",title:"Error Message"}},c={name:"TextArea with know more",render:n=>{const e=p(),t=d(n),r=l(n),a=m(n),u=q();return e.appendChild(r),e.appendChild(a),e.appendChild(u),e.appendChild(t),e},args:{description:"Description"}};var h,g,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "TextArea",
  render: args => {
    const container = getContainer();
    const input = getTextArea(args);
    const label = getLabel(args);
    container.appendChild(label);
    container.appendChild(input);
    return container;
  }
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var x,b,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "TextArea with description",
  render: args => {
    const container = getContainer();
    const input = getTextArea(args);
    const label = getLabel(args);
    const description = getDescription(args);
    container.appendChild(label);
    container.appendChild(description);
    container.appendChild(input);
    return container;
  },
  args: {
    description: "Description"
  }
}`,...(T=(b=i.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var f,A,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "TextArea on error",
  render: args => {
    const container = getContainer();
    const input = getTextArea(args);
    const label = getLabel(args);
    const description = getDescription(args);
    const error = getError(args);
    container.appendChild(label);
    container.appendChild(description);
    container.appendChild(input);
    container.appendChild(error);
    return container;
  },
  args: {
    isOnError: true,
    description: "Description",
    title: "Error Message"
  }
}`,...(E=(A=s.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var _,v,w;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "TextArea with know more",
  render: args => {
    const container = getContainer();
    const input = getTextArea(args);
    const label = getLabel(args);
    const description = getDescription(args);
    const knowMore = getKnowMore();
    container.appendChild(label);
    container.appendChild(description);
    container.appendChild(knowMore);
    container.appendChild(input);
    return container;
  },
  args: {
    description: "Description"
  }
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const L=["TextAreaStory","TextAreaWithDescriptionStory","TextAreaOnErrorStory","TextAreaWithKnowMore"];export{s as TextAreaOnErrorStory,o as TextAreaStory,i as TextAreaWithDescriptionStory,c as TextAreaWithKnowMore,L as __namedExportsOrder,S as default};
