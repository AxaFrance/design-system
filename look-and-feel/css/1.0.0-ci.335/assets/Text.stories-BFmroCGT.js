/* empty css               *//* empty css                   */const y={args:{value:"John Doe",label:"Label",placeholder:"Your name",disabled:!1,required:!0,isOnError:!1},argTypes:{label:{control:{type:"text"}}},title:"Components/Form/Input/Text"},p=()=>{const n=document.createElement("div");return n.className="af-form__input-container",n},d=n=>{const e=document.createElement("input");return e.id="nameid",e.name="name",e.className="af-form__input-text",n.isOnError&&(e.className+=" af-form__input-text--error"),e.placeholder=n.placeholder,e.type=n.type,e.value=n.value,e.disabled=n.disabled,e.required=n.required,e},l=n=>{const e=document.createElement("label");if(e.htmlFor="nameid",e.className="af-form__input-label",e.textContent=n.label,n.required){const t=document.createElement("span");t.textContent=" *",e.appendChild(t)}return e},m=n=>{const e=document.createElement("span");return e.className="af-form__input-description",e.textContent=n.description,e},q=n=>{const e=document.createElement("div");return e.className="af-input-error",e.innerHTML=`
        <svg class="af-input-error__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path></svg>
        ${n.title&&`<span class="af-input-error__message">${n.title}</span>`}
    `,e},D=()=>{const n=document.createElement("button");return n.className="af-btn-client af-btn-client--ghost af-form__input-more",n.innerHTML=`<svg focusable="false" aria-hidden="true" viewBox="0 -960 960 960">
    <path d="M453-280h60v-240h-60v240Zm26.98-314q14.02 0 23.52-9.2T513-626q0-14.45-9.48-24.22-9.48-9.78-23.5-9.78t-23.52 9.78Q447-640.45 447-626q0 13.6 9.48 22.8 9.48 9.2 23.5 9.2Zm.29 514q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"></path>
  </svg>
  En savoir plus`,n},a={name:"Text",render:n=>{const e=p(),t=d(n),r=l(n);return e.appendChild(r),e.appendChild(t),e}},i={name:"Text with description",render:n=>{const e=p(),t=d(n),r=l(n),o=m(n);return e.appendChild(r),e.appendChild(o),e.appendChild(t),e},args:{description:"Description"}},s={name:"Text on error",render:n=>{const e=p(),t=d(n),r=l(n),o=m(n),u=q(n);return e.appendChild(r),e.appendChild(o),e.appendChild(t),e.appendChild(u),e},args:{isOnError:!0,description:"Description",title:"Error Message"}},c={name:"Text with know more",render:n=>{const e=p(),t=d(n),r=l(n),o=m(n),u=D();return e.appendChild(r),e.appendChild(o),e.appendChild(u),e.appendChild(t),e},args:{description:"Description"}};var h,g,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Text",
  render: args => {
    const container = getContainer();
    const input = getInput(args);
    const label = getLabel(args);
    container.appendChild(label);
    container.appendChild(input);
    return container;
  }
}`,...(C=(g=a.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,x,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Text with description",
  render: args => {
    const container = getContainer();
    const input = getInput(args);
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
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var T,E,_;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Text on error",
  render: args => {
    const container = getContainer();
    const input = getInput(args);
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
}`,...(_=(E=s.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var v,w,M;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Text with know more",
  render: args => {
    const container = getContainer();
    const input = getInput(args);
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
}`,...(M=(w=c.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const L=["TextStory","TextWithDescriptionStory","TextOnErrorStory","TextWithKnowMore"];export{s as TextOnErrorStory,a as TextStory,i as TextWithDescriptionStory,c as TextWithKnowMore,L as __namedExportsOrder,y as default};
