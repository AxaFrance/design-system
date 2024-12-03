/* empty css             */const h={title:"Components/Form/Input/Text"},g=["","required","disabled"],m=["error","success","warning"],d=["text","email","password"],o={name:"TextInput",render:e=>{const a=document.createElement("div");a.className="row af-form__group",e.classModifier&&(a.className+=` af-form__group--${e.classModifier}`);const i=document.createElement("div");i.className="col-md-2";const t=document.createElement("label");t.className=["af-form__group-label"].join(" "),t.htmlFor="nameid",t.textContent=e.label;const l=document.createElement("div");l.className="col-md-10";const p=document.createElement("div");p.className=["af-form__text",e.forceDisplayMessage?`af-form__text--${e.messageType}`:""].join(" ");const n=document.createElement("input");n.className=["af-form__input-text",e.classModifier?`af-form__input-text--${e.classModifier}`:""].join(" "),n.id="nameid",n.placeholder=e.placeholder,n.type=e.type,n.value=e.value,n.name="name",n.readOnly=e.readOnly,n.disabled=e.disabled,n.autofocus=e.autoFocus;const s=document.createElement("small");if(s.className=e.forceDisplayMessage?`af-form__message af-form__message--${e.messageType}`:"af-form__help",e.forceDisplayMessage){const r=document.createElement("span");r.className="glyphicon glyphicon-exclamation-sign";const c=document.createElement("span");c.className=`af-form__${e.messageType}-text`,c.textContent=e.message,s.appendChild(r),s.appendChild(c)}else s.textContent=e.helpMessage;return p.appendChild(n),i.appendChild(t),l.appendChild(p),l.appendChild(s),a.appendChild(i),a.appendChild(l),a},args:{classModifier:"",value:"John Doe",placeholder:"Your name",readOnly:!1,disabled:!1,autoFocus:!1,type:d[0],label:"Your name",message:"Saisie incorrecte",helpMessage:"Aide à la saisie",forceDisplayMessage:!1,messageType:m[0]},argTypes:{classModifier:{options:g,control:{type:"multi-select"}},messageType:{options:m,control:{type:"select"}},type:{options:d,control:{type:"select"}}}};var u,f,_;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "TextInput",
  render: args => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row af-form__group";
    if (args.classModifier) {
      rowDiv.className += \` af-form__group--\${args.classModifier}\`;
    }
    const labelColDiv = document.createElement("div");
    labelColDiv.className = "col-md-2";
    const label = document.createElement("label");
    label.className = ["af-form__group-label"].join(" ");
    label.htmlFor = "nameid";
    label.textContent = args.label;
    const inputColDiv = document.createElement("div");
    inputColDiv.className = "col-md-10";
    const inputDiv = document.createElement("div");
    inputDiv.className = ["af-form__text", args.forceDisplayMessage ? \`af-form__text--\${args.messageType}\` : ""].join(" ");
    const input = document.createElement("input");
    input.className = ["af-form__input-text", args.classModifier ? \`af-form__input-text--\${args.classModifier}\` : ""].join(" ");
    input.id = "nameid";
    input.placeholder = args.placeholder;
    input.type = args.type;
    input.value = args.value;
    input.name = "name";
    input.readOnly = args.readOnly;
    input.disabled = args.disabled;
    input.autofocus = args.autoFocus;
    const small = document.createElement("small");
    small.className = args.forceDisplayMessage ? \`af-form__message af-form__message--\${args.messageType}\` : "af-form__help";
    if (args.forceDisplayMessage) {
      const spanGlyphicon = document.createElement("span");
      spanGlyphicon.className = "glyphicon glyphicon-exclamation-sign";
      const spanText = document.createElement("span");
      spanText.className = \`af-form__\${args.messageType}-text\`;
      spanText.textContent = args.message;
      small.appendChild(spanGlyphicon);
      small.appendChild(spanText);
    } else {
      small.textContent = args.helpMessage;
    }
    inputDiv.appendChild(input);
    labelColDiv.appendChild(label);
    inputColDiv.appendChild(inputDiv);
    inputColDiv.appendChild(small);
    rowDiv.appendChild(labelColDiv);
    rowDiv.appendChild(inputColDiv);
    return rowDiv;
  },
  args: {
    classModifier: "",
    value: "John Doe",
    placeholder: "Your name",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    type: INPUT_TYPES[0],
    label: "Your name",
    message: "Saisie incorrecte",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: false,
    messageType: MESSAGE_TYPES[0]
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "multi-select"
      }
    },
    messageType: {
      options: MESSAGE_TYPES,
      control: {
        type: "select"
      }
    },
    type: {
      options: INPUT_TYPES,
      control: {
        type: "select"
      }
    }
  }
}`,...(_=(f=o.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const v=["TextInputStory"];export{o as TextInputStory,v as __namedExportsOrder,h as default};
