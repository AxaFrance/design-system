import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{C as a,a as m,M as g,b as B,d as L}from"./CardData-CisLDHWb.js";import{r as b}from"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{H as V}from"./index-P5gXvkWX.js";import{f as W}from"./index-VGPHIPc6.js";const d=[...Object.values(g),""],u=[a.classic.toString(),a.default.toString(),a.inline.toString(),a.toggle.toString()],z={title:"Components/Form/Input/Checkbox",component:m,argTypes:{onChange:{action:"onChange"},messageType:{control:{type:"select",options:d}},mode:{control:{type:"radio",options:u}}},args:{onChange:W()}},A=["required","disabled"],F=({children:e,classModifier:n})=>s.jsx("strong",{style:{color:"green"},className:n??"",children:e}),p=[{label:"Disabled",value:"1",disabled:!0,id:"uniqueId1"},{label:"Unchecked",value:"2",id:"uniqueId2"},{label:"Checked",value:"3"},{label:s.jsx(F,{classModifier:"success",children:"A JSX element"}),value:"4"}],h=["1","3"],o={name:"CheckboxInput",render:({classModifier:e,...n})=>s.jsx("form",{className:"af-form",name:"myform",children:s.jsx(m,{...n,values:h,options:p,classModifier:(e??[]).join(" "),isVisible:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10"})}),args:{label:"Place type",required:!0,classModifier:[],mode:a.classic,message:"Error message",messageType:g.error,forceDisplayMessage:!1,id:"inputuniqueid",name:"placeType"},argTypes:{classModifier:{options:A,control:{type:"inline-check"}},mode:{options:u,control:{type:"radio",options:u}},messageType:{options:d,control:{type:"select",options:d}},onChange:{action:"onChange"}},parameters:{controls:{include:["label","classModifier","mode","message","messageType","forceDisplayMessage","onChange","required"]}}},r={name:"CheckboxInputError",render:({classModifier:e,...n})=>s.jsx("form",{className:"af-form",name:"myform",children:s.jsx(m,{...n,values:h,options:p,classModifier:(e??[]).join(" "),isVisible:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10"})}),args:{label:"Place type",required:!0,classModifier:[],mode:a.default,message:"Error message",messageType:g.error,forceDisplayMessage:!0,id:"inputuniqueid",name:"placeType"},argTypes:{messageType:{options:d,control:{type:"select",options:d,labels:{"":"(none)"}}},mode:{control:{type:"select",options:Object.values(a)}}},parameters:{controls:{include:["label","classModifier","mode","message","messageType","forceDisplayMessage","onChange","required"]}}},t={name:"CheckboxInput with help button",render:e=>s.jsx(m,{...e,name:"placeType",id:"uniqueid",value:"toto",children:s.jsx(V,{mode:"hover",children:"help"})}),args:{label:"Place type",required:!0,mode:a.default,id:"inputuniqueid",name:"placeType",options:p},parameters:{controls:{include:["isChecked","disabled","onChange"]}}},c={name:"CheckboxItem Toggle",render:e=>{const[n,C]=b.useState(e.isChecked);return b.useEffect(()=>{C(e.isChecked)},[e.isChecked]),s.jsx(B,{...e,name:"placeType",id:"uniqueid",value:"toto",className:"af-form__checkbox-toggle",isChecked:n,onChange:H=>C(H.target.checked)})},args:{isChecked:!0,disabled:!1},argTypes:{onChange:{action:"onChange"}},parameters:{controls:{include:["isChecked","disabled","onChange"]}}},i={name:"CheckboxItem",render:({isChecked:e,...n})=>s.jsx(B,{...n,name:"placeType",id:"uniqueid",value:"toto",defaultChecked:e}),args:{label:"web center forever",isChecked:!0,disabled:!1},parameters:{controls:{include:["isChecked","disabled","label","onChange"]}}},l={name:"Checkbox",render:e=>s.jsx(L,{...e,options:p,values:h,name:"placeName",id:"uniqueid",placeholder:"Paris"}),args:{mode:a.default},parameters:{controls:{include:["mode"]}}};var y,f,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var x,T,M;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(M=(T=r.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var I,S,q;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "CheckboxInput with help button",
  render: args => {
    return <CheckboxInput {...args} name="placeType" id="uniqueid" value="toto">
        <HelpButton mode="hover">help</HelpButton>
      </CheckboxInput>;
  },
  args: {
    label: "Place type",
    required: true,
    mode: CheckboxModes.default,
    id: "inputuniqueid",
    name: "placeType",
    options
  },
  parameters: {
    controls: {
      include: ["isChecked", "disabled", "onChange"]
    }
  }
}`,...(q=(S=t.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var v,j,N;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var E,_,D;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(_=i.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var P,O,w;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(w=(O=l.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const J=["CheckboxInputStory","CheckboxInputErrorStory","CheckboxInputWithChildren","CheckboxItemToggleStory","CheckboxItemStory","CheckboxStory"],Y=Object.freeze(Object.defineProperty({__proto__:null,CheckboxInputErrorStory:r,CheckboxInputStory:o,CheckboxInputWithChildren:t,CheckboxItemStory:i,CheckboxItemToggleStory:c,CheckboxStory:l,__namedExportsOrder:J,default:z},Symbol.toStringTag,{value:"Module"}));export{i as C,Y as S,c as a,l as b,o as c};
