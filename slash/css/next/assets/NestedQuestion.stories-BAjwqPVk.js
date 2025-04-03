const a={title:"Components/Form/NestedQuestion"},e={render:o=>{const n=document.createElement("div");return n.innerHTML=`<section class="af-form__nested-question"><span class="af-form__nested-question-arrow"></span><section>${o.children}</section></section>`,n},args:{children:"NestedQuestion"}};var s,r,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const container = document.createElement("div");
    container.innerHTML = \`<section class="af-form__nested-question"><span class="af-form__nested-question-arrow"></span><section>\${args.children}</section></section>\`;
    return container;
  },
  args: {
    children: "NestedQuestion"
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const c=["Primary"];export{e as Primary,c as __namedExportsOrder,a as default};
