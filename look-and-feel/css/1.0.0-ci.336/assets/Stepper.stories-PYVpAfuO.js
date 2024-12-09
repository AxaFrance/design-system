const n={title:"Components/Stepper"},e={render:()=>{const r=document.createElement("div");return r.innerHTML=`
    <div class="af-stepper-client">
      <h2 class="af-stepper-client__title" aria-describedby=":r4:">Step 1</h2>
      <p class="af-stepper-client__subtitle">Step subtitle</p>
      <div
        id=":r4:"
        role="group"
        aria-label="Step 1"
        class="af-stepper-client__content"
      >
        <div
          class="af-stepper-client__progressbar"
          aria-current="true"
          aria-hidden="false"
          aria-label="50%"
        >
          <div
            class="af-stepper-client__progress"
            style="width: 50%"
          ></div>
        </div>
        <div
          class="af-stepper-client__progressbar"
          aria-current="false"
          aria-hidden="true"
          aria-label="0%"
        >
          <div
            class="af-stepper-client__progress"
            style="width: 0%"
          ></div>
        </div>
        <div
          class="af-stepper-client__progressbar"
          aria-current="false"
          aria-hidden="true"
          aria-label="0%"
        >
          <div
            class="af-stepper-client__progress"
            style="width: 0%"
          ></div>
        </div>
      </div>
    </div>
    `,r}};var s,a,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const stepper = document.createElement("div");
    stepper.innerHTML = \`
    <div class="af-stepper-client">
      <h2 class="af-stepper-client__title" aria-describedby=":r4:">Step 1</h2>
      <p class="af-stepper-client__subtitle">Step subtitle</p>
      <div
        id=":r4:"
        role="group"
        aria-label="Step 1"
        class="af-stepper-client__content"
      >
        <div
          class="af-stepper-client__progressbar"
          aria-current="true"
          aria-hidden="false"
          aria-label="50%"
        >
          <div
            class="af-stepper-client__progress"
            style="width: 50%"
          ></div>
        </div>
        <div
          class="af-stepper-client__progressbar"
          aria-current="false"
          aria-hidden="true"
          aria-label="0%"
        >
          <div
            class="af-stepper-client__progress"
            style="width: 0%"
          ></div>
        </div>
        <div
          class="af-stepper-client__progressbar"
          aria-current="false"
          aria-hidden="true"
          aria-label="0%"
        >
          <div
            class="af-stepper-client__progress"
            style="width: 0%"
          ></div>
        </div>
      </div>
    </div>
    \`;
    return stepper;
  }
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const i=["Stepper"];export{e as Stepper,i as __namedExportsOrder,n as default};
