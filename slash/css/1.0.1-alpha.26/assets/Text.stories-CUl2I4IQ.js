/* empty css             */const p={title:"Components/Form/Input/Text"},l=["","required","disabled"],c=["text","email","password"],t={name:"Text",render:n=>{const e=document.createElement("input");e.className="af-form__input-text",e.id="nameid",e.placeholder=n.placeholder,e.type=n.type,e.value=n.value,e.name="name",e.readOnly=n.readOnly,e.disabled=n.disabled,e.autofocus=n.autoFocus;const a=n.classModifier.filter(s=>s!=="");return a&&(e.className+=a.map(s=>` af-form__input-text--${s}`).join(" ")),e},args:{classModifier:[],value:"John Doe",placeholder:"Your name",readOnly:!1,disabled:!1,autoFocus:!1,type:"text"},argTypes:{classModifier:{options:l,control:{type:"multi-select"}},type:{options:c,control:{type:"select"}}}};var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Text",
  render: args => {
    const input = document.createElement("input");
    input.className = "af-form__input-text";
    input.id = "nameid";
    input.placeholder = args.placeholder;
    input.type = args.type;
    input.value = args.value;
    input.name = "name";
    input.readOnly = args.readOnly;
    input.disabled = args.disabled;
    input.autofocus = args.autoFocus;
    const classModifiers = args.classModifier.filter((classModifier: string) => classModifier !== "");
    if (classModifiers) {
      input.className += classModifiers.map((classModifier: string) => \` af-form__input-text--\${classModifier}\`).join(" ");
    }
    return input;
  },
  args: {
    classModifier: [] as string[],
    value: "John Doe",
    placeholder: "Your name",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    type: "text"
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "multi-select"
      }
    },
    type: {
      options: INPUT_TYPES,
      control: {
        type: "select"
      }
    }
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const u=["TextStory"];export{t as TextStory,u as __namedExportsOrder,p as default};
