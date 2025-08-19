import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as a,a as m,M as p,b as D,c as O}from"./Loader-Z_FMA2le.js";import{r as C}from"./index-DbaA8R3S.js";/* empty css              */import"./index-CG6JzWRx.js";import{f as L}from"./index-28pPPJTf.js";const l=[...Object.values(p),""],d=[a.classic.toString(),a.default.toString(),a.inline.toString(),a.toggle.toString()],V={title:"Components/Form/Input/Checkbox",component:m,argTypes:{onChange:{action:"onChange"},messageType:{control:{type:"select",options:l}},mode:{control:{type:"radio",options:d}}},args:{onChange:L()}},w=["required","disabled"],z=({children:e,classModifier:s})=>n.jsx("strong",{style:{color:"green"},className:s??"",children:e}),u=[{label:"Disabled",value:"1",disabled:!0,id:"uniqueId1"},{label:"Unchecked",value:"2",id:"uniqueId2"},{label:"Checked",value:"3"},{label:n.jsx(z,{classModifier:"success",children:"A JSX element"}),value:"4"}],g=["1","3"],o={name:"CheckboxInput",render:({classModifier:e,...s})=>n.jsx("form",{className:"af-form",name:"myform",children:n.jsx(m,{...s,values:g,options:u,classModifier:(e??[]).join(" "),isVisible:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10"})}),args:{label:"Place type",required:!0,classModifier:[],mode:a.classic,message:"Error message",messageType:p.error,forceDisplayMessage:!1,id:"inputuniqueid",name:"placeType"},argTypes:{classModifier:{options:w,control:{type:"inline-check"}},mode:{options:d,control:{type:"radio",options:d}},messageType:{options:l,control:{type:"select",options:l}},onChange:{action:"onChange"}},parameters:{controls:{include:["label","classModifier","mode","message","messageType","forceDisplayMessage","onChange","required"]}}},r={name:"CheckboxInputError",render:({classModifier:e,...s})=>n.jsx("form",{className:"af-form",name:"myform",children:n.jsx(m,{...s,values:g,options:u,classModifier:(e??[]).join(" "),isVisible:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10"})}),args:{label:"Place type",required:!0,classModifier:[],mode:a.default,message:"Error message",messageType:p.error,forceDisplayMessage:!0,id:"inputuniqueid",name:"placeType"},argTypes:{messageType:{options:l,control:{type:"select",options:l,labels:{"":"(none)"}}},mode:{control:{type:"select",options:Object.values(a)}}},parameters:{controls:{include:["label","classModifier","mode","message","messageType","forceDisplayMessage","onChange","required"]}}},t={name:"CheckboxItem Toggle",render:e=>{const[s,h]=C.useState(e.isChecked);return C.useEffect(()=>{h(e.isChecked)},[e.isChecked]),n.jsx(D,{...e,name:"placeType",id:"uniqueid",value:"toto",className:"af-form__checkbox-toggle",isChecked:s,onChange:P=>h(P.target.checked)})},args:{isChecked:!0,disabled:!1},argTypes:{onChange:{action:"onChange"}},parameters:{controls:{include:["isChecked","disabled","onChange"]}}},c={name:"CheckboxItem",render:({isChecked:e,...s})=>n.jsx(D,{...s,name:"placeType",id:"uniqueid",value:"toto",defaultChecked:e}),args:{label:"web center forever",isChecked:!0,disabled:!1},parameters:{controls:{include:["isChecked","disabled","label","onChange"]}}},i={name:"Checkbox",render:e=>n.jsx(O,{...e,options:u,values:g,name:"placeName",id:"uniqueid",placeholder:"Paris"}),args:{mode:a.default},parameters:{controls:{include:["mode"]}}};var b,f,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "CheckboxInput",
  render: ({
    classModifier,
    ...args
  }) => <form className="af-form" name="myform">
      <CheckboxInput {...args} values={values} options={options} classModifier={(classModifier ?? []).join(" ")} isVisible classNameContainerLabel="col-md-2" classNameContainerInput="col-md-10" />
    </form>,
  args: {
    label: "Place type",
    required: true,
    classModifier: [],
    mode: CheckboxModes.classic,
    message: "Error message",
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
    id: "inputuniqueid",
    name: "placeType"
  },
  argTypes: {
    classModifier: {
      options: modifiers,
      control: {
        type: "inline-check"
      }
    },
    mode: {
      options: modes,
      control: {
        type: "radio",
        options: modes
      }
    },
    messageType: {
      options: messageTypes,
      control: {
        type: "select",
        options: messageTypes
      }
    },
    onChange: {
      action: "onChange"
    }
  },
  parameters: {
    controls: {
      include: ["label", "classModifier", "mode", "message", "messageType", "forceDisplayMessage", "onChange", "required"]
    }
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var k,x,T;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "CheckboxInputError",
  render: ({
    classModifier,
    ...args
  }) => <form className="af-form" name="myform">
      <CheckboxInput {...args} values={values} options={options} classModifier={(classModifier ?? []).join(" ")} isVisible classNameContainerLabel="col-md-2" classNameContainerInput="col-md-10" />
    </form>,
  args: {
    label: "Place type",
    required: true,
    classModifier: [],
    mode: CheckboxModes.default,
    message: "Error message",
    messageType: MessageTypes.error,
    forceDisplayMessage: true,
    id: "inputuniqueid",
    name: "placeType"
  },
  argTypes: {
    messageType: {
      options: messageTypes,
      control: {
        type: "select",
        options: messageTypes,
        labels: {
          "": "(none)"
        }
      }
    },
    mode: {
      control: {
        type: "select",
        options: Object.values(CheckboxModes)
      }
    }
  },
  parameters: {
    controls: {
      include: ["label", "classModifier", "mode", "message", "messageType", "forceDisplayMessage", "onChange", "required"]
    }
  }
}`,...(T=(x=r.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var M,S,I;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "CheckboxItem Toggle",
  render: args => {
    const [state, setState] = useState<boolean>(args.isChecked);
    useEffect(() => {
      setState(args.isChecked);
    }, [args.isChecked]);
    return <CheckboxItem {...args} name="placeType" id="uniqueid" value="toto" className="af-form__checkbox-toggle" isChecked={state} onChange={e => setState(e.target.checked)} />;
  },
  args: {
    isChecked: true,
    disabled: false
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  },
  parameters: {
    controls: {
      include: ["isChecked", "disabled", "onChange"]
    }
  }
}`,...(I=(S=t.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var q,v,j;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "CheckboxItem",
  render: ({
    isChecked,
    ...args
  }) => <CheckboxItem {...args} name="placeType" id="uniqueid" value="toto" defaultChecked={isChecked} />,
  args: {
    label: "web center forever",
    isChecked: true,
    disabled: false
  },
  parameters: {
    controls: {
      include: ["isChecked", "disabled", "label", "onChange"]
    }
  }
}`,...(j=(v=c.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var N,E,_;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Checkbox",
  render: args => <Checkbox {...args} options={options} values={values} name="placeName" id="uniqueid" placeholder="Paris" />,
  args: {
    mode: CheckboxModes.default
  },
  parameters: {
    controls: {
      include: ["mode"]
    }
  }
}`,...(_=(E=i.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const A=["CheckboxInputStory","CheckboxInputErrorStory","CheckboxItemToggleStory","CheckboxItemStory","CheckboxStory"],G=Object.freeze(Object.defineProperty({__proto__:null,CheckboxInputErrorStory:r,CheckboxInputStory:o,CheckboxItemStory:c,CheckboxItemToggleStory:t,CheckboxStory:i,__namedExportsOrder:A,default:V},Symbol.toStringTag,{value:"Module"}));export{c as C,G as S,t as a,i as b,o as c};
