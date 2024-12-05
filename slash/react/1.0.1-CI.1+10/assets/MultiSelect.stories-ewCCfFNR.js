import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{f as w}from"./index-C_FWhylE.js";import{r as m}from"./index-CTjT7uj6.js";import{M as N}from"./HelpMessage-8RhooMOY.js";import"./index-CCQ3W5xA.js";import{M as i,a as b}from"./MultiSelectInput-TeiEc6w8.js";const x={title:"Components/Form/Input/MultiSelect",component:i,argTypes:{onChange:{action:"onChange"}},args:{onChange:w()}},k=[{value:"fun",label:"For fun",clearableValue:!1},{value:"work",label:"For work"},{value:"drink",label:"For drink"},{value:"sleep",label:"For sleep"},{value:"swim",label:"For swim"}],g=["work","drink"],p={name:"multiSelectName",options:k,disabled:!1,required:!0,className:"",placeholder:"Select"},o={name:"MultiSelect",render:({values:n,onChange:s=()=>{},...l})=>{const[r,t]=m.useState(n);return a.jsx("form",{className:"af-form",name:"myform",children:a.jsx(i,{values:r,onChange:e=>{t(e.values),s(e)},...l})})},args:{...p,values:g},argTypes:{onChange:{action:"onChange"}}},u={name:"MultiSelect with one value",render:({value:n,onChange:s=()=>{},...l})=>{const[r,t]=m.useState(n);return a.jsx("form",{className:"af-form",name:"myform",children:a.jsx(i,{value:r,onChange:e=>{t(e.value),s(e)},...l})})},args:{...p,value:g[0]},argTypes:{onChange:{action:"onChange"}}},c={name:"MultiSelectInput",render:({values:n,onChange:s=()=>{},...l})=>{const[r,t]=m.useState(n);return a.jsx("form",{className:"af-form",name:"myform",children:a.jsx(b,{values:r,onChange:e=>{t(e.values),s(e)},...l})})},args:{...p,values:g,id:"uniqueid",label:"Place type",helpMessage:"Enter the place type",messageType:N.error,forceDisplayMessage:!1,isVisible:!0,classModifier:"",classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10"},argTypes:{onChange:{action:"onChange"}}};var d,f,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "MultiSelect",
  render: ({
    values,
    onChange = () => {},
    ...args
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newValues, setNewValues] = useState(values);
    return <form className="af-form" name="myform">
        <MultiSelect values={newValues} onChange={data => {
        setNewValues(data.values);
        onChange(data);
      }} {...args} />
      </form>;
  },
  args: {
    ...commonArgs,
    values: selectedValues
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,v,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "MultiSelect with one value",
  render: ({
    value,
    onChange = () => {},
    ...args
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newValue, setNewValue] = useState(value);
    return <form className="af-form" name="myform">
        <MultiSelect value={newValue} onChange={data => {
        setNewValue(data.value);
        onChange(data);
      }} {...args} />
      </form>;
  },
  args: {
    ...commonArgs,
    value: selectedValues[0]
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
}`,...(C=(v=u.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var y,M,V;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "MultiSelectInput",
  render: ({
    values,
    onChange = () => {},
    ...args
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newValues, setNewValues] = useState(values);
    return <form className="af-form" name="myform">
        <MultiSelectInput values={newValues} onChange={data => {
        setNewValues(data.values);
        onChange(data);
      }} {...args} />
      </form>;
  },
  args: {
    ...commonArgs,
    values: selectedValues,
    id: "uniqueid",
    label: "Place type",
    helpMessage: "Enter the place type",
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
    isVisible: true,
    classModifier: "",
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10"
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
}`,...(V=(M=c.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const T=["MultiSelectStory","MultiSelectOneValueStory","MultiSelectInputStory"],A=Object.freeze(Object.defineProperty({__proto__:null,MultiSelectInputStory:c,MultiSelectOneValueStory:u,MultiSelectStory:o,__namedExportsOrder:T,default:x},Symbol.toStringTag,{value:"Module"}));export{A as M,o as a,u as b,c};
