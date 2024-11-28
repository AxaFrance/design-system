import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{f as I}from"./index-C_FWhylE.js";import{M as y}from"./HelpMessage-Dma0IcN4.js";import"./index-CCQ3W5xA.js";import"./index-CTjT7uj6.js";import{C as x,a as t,b as M,c as j}from"./CheckboxInput-qeY81rY_.js";const S={title:"Components/Form/Input/Checkbox",component:x,argTypes:{onChange:{action:"onChange"},messageType:{control:{type:"select",options:Object.values(y)}},mode:{control:{type:"select",options:Object.values(t)}}},args:{onChange:I()}},q=["required","disabled"],N=({children:e,classModifier:a})=>s.jsx("strong",{style:{color:"green"},className:a??"",children:e}),T=[{label:"Disabled",value:"1",disabled:!0,id:"uniqueId1"},{label:"Unchecked",value:"2",id:"uniqueId2"},{label:"Checked",value:"3"},{label:s.jsx(N,{classModifier:"success",children:"A JSX element"}),value:"4"}],v=["1","3"],o={name:"CheckboxInput",render:({classModifier:e,...a})=>s.jsx("form",{className:"af-form",name:"myform",children:s.jsx(x,{...a,values:v,options:T,classModifier:(e??[]).join(" "),isVisible:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10"})}),args:{label:"Place type",required:!0,classModifier:[],mode:t.classic,message:"Error message",messageType:y.error,forceDisplayMessage:!1,id:"inputuniqueid",name:"placeType"},argTypes:{classModifier:{options:q,control:{type:"inline-check"}},mode:{options:Object.values(t),control:{type:"select",options:Object.values(t)}},onChange:{action:"onChange"}},parameters:{controls:{include:["label","classModifier","mode","message","messageType","forceDisplayMessage","onChange","required"]}}},n={name:"CheckboxItem Toggle",render:e=>s.jsx(M,{...e,name:"placeType",id:"uniqueid",value:"toto",className:"af-form__checkbox-toggle"}),args:{isChecked:!0,disabled:!1},argTypes:{onChange:{action:"onChange"}},parameters:{controls:{include:["isChecked","disabled","onChange"]}}},r={name:"CheckboxItem",render:({isChecked:e,...a})=>s.jsx(M,{...a,name:"placeType",id:"uniqueid",value:"toto",defaultChecked:e}),args:{label:"web center forever",isChecked:!0,disabled:!1},parameters:{controls:{include:["isChecked","disabled","label","onChange"]}}},c={name:"Checkbox",render:e=>s.jsx(j,{...e,options:T,values:v,name:"placeName",id:"uniqueid",placeholder:"Paris"}),args:{mode:t.default},parameters:{controls:{include:["mode"]}}};var l,i,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var C,f,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(f=c.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const _=["CheckboxInputStory","CheckboxItemToggleStory","CheckboxItemStory","CheckboxStory"],V=Object.freeze(Object.defineProperty({__proto__:null,CheckboxInputStory:o,CheckboxItemStory:r,CheckboxItemToggleStory:n,CheckboxStory:c,__namedExportsOrder:_,default:S},Symbol.toStringTag,{value:"Module"}));export{r as C,V as S,n as a,c as b,o as c};
