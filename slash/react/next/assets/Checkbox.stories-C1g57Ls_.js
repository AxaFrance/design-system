import{j as s}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{C as i,M as d,b as o,c as q,d as N}from"./Loader-DkiB5NCh.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as E}from"./index-28pPPJTf.js";const _=Object.values(d),D={title:"Components/Form/Input/Checkbox",component:i,argTypes:{onChange:{action:"onChange"},messageType:{control:{type:"select",options:_}},mode:{control:{type:"select",options:Object.values(o)}}},args:{onChange:E()}},O=["required","disabled"],P=({children:e,classModifier:a})=>s.jsx("strong",{style:{color:"green"},className:a??"",children:e}),m=[{label:"Disabled",value:"1",disabled:!0,id:"uniqueId1"},{label:"Unchecked",value:"2",id:"uniqueId2"},{label:"Checked",value:"3"},{label:s.jsx(P,{classModifier:"success",children:"A JSX element"}),value:"4"}],S=["1","3"],n={name:"CheckboxInput",render:({classModifier:e,...a})=>s.jsx("form",{className:"af-form",name:"myform",children:s.jsx(i,{...a,values:S,options:m,classModifier:(e??[]).join(" "),isVisible:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10"})}),args:{label:"Place type",required:!0,classModifier:[],mode:o.classic,message:"Error message",messageType:d.error,forceDisplayMessage:!1,id:"inputuniqueid",name:"placeType"},argTypes:{classModifier:{options:O,control:{type:"inline-check"}},mode:{options:Object.values(o),control:{type:"select",options:Object.values(o)}},onChange:{action:"onChange"}},parameters:{controls:{include:["label","classModifier","mode","message","messageType","forceDisplayMessage","onChange","required"]}}},r={name:"CheckboxInputError",render:({classModifier:e,...a})=>s.jsx("form",{className:"af-form",name:"myform",children:s.jsx(i,{...a,values:[],options:m,classModifier:(e??[]).join(" "),isVisible:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10"})}),args:{label:"Place type",required:!0,classModifier:[],mode:o.default,message:"Error message",messageType:d.error,forceDisplayMessage:!0,id:"inputuniqueid",name:"placeType"},parameters:{controls:{include:["label","classModifier","mode","message","messageType","forceDisplayMessage","onChange","required"]}}},c={name:"CheckboxItem Toggle",render:e=>s.jsx(q,{...e,name:"placeType",id:"uniqueid",value:"toto",className:"af-form__checkbox-toggle"}),args:{isChecked:!0,disabled:!1},argTypes:{onChange:{action:"onChange"}},parameters:{controls:{include:["isChecked","disabled","onChange"]}}},l={name:"CheckboxItem",render:({isChecked:e,...a})=>s.jsx(q,{...a,name:"placeType",id:"uniqueid",value:"toto",defaultChecked:e}),args:{label:"web center forever",isChecked:!0,disabled:!1},parameters:{controls:{include:["isChecked","disabled","label","onChange"]}}},t={name:"Checkbox",render:e=>s.jsx(N,{...e,options:m,values:S,name:"placeName",id:"uniqueid",placeholder:"Paris"}),args:{mode:o.default},parameters:{controls:{include:["mode"]}}};var p,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      options: Object.values(CheckboxModes),
      control: {
        type: "select",
        options: Object.values(CheckboxModes)
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
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,C,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "CheckboxInputError",
  render: ({
    classModifier,
    ...args
  }) => <form className="af-form" name="myform">
      <CheckboxInput {...args} values={[]} options={options} classModifier={(classModifier ?? []).join(" ")} isVisible classNameContainerLabel="col-md-2" classNameContainerInput="col-md-10" />
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
  parameters: {
    controls: {
      include: ["label", "classModifier", "mode", "message", "messageType", "forceDisplayMessage", "onChange", "required"]
    }
  }
}`,...(h=(C=r.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var f,y,k;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "CheckboxItem Toggle",
  render: args => <CheckboxItem {...args} name="placeType" id="uniqueid" value="toto" className="af-form__checkbox-toggle" />,
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
}`,...(k=(y=c.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var x,M,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(M=l.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var I,v,j;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const L=["CheckboxInputStory","CheckboxInputErrorStory","CheckboxItemToggleStory","CheckboxItemStory","CheckboxStory"],J=Object.freeze(Object.defineProperty({__proto__:null,CheckboxInputErrorStory:r,CheckboxInputStory:n,CheckboxItemStory:l,CheckboxItemToggleStory:c,CheckboxStory:t,__namedExportsOrder:L,default:D},Symbol.toStringTag,{value:"Module"}));export{l as C,J as S,c as a,t as b,n as c};
