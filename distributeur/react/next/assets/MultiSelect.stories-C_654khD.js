import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{M as x,l as g,m as I,H as L}from"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import{r as i}from"./index-CtOEgLBf.js";import{fn as j}from"./index-CH2Su9EI.js";const P={title:"Components/Form/Input/MultiSelect",component:g,argTypes:{onChange:{action:"onChange"}},args:{onChange:j()}},E=[{value:"fun",label:"For fun",clearableValue:!1},{value:"work",label:"For work"},{value:"drink",label:"For drink"},{value:"sleep",label:"For sleep"},{value:"swim",label:"For swim"}],p=["work","drink"],d={name:"multiSelectName",options:E,disabled:!1,required:!0,placeholder:"- Sélectionner -"},o={name:"MultiSelect",render:({values:a,onChange:t=()=>{},...s})=>{const[l,r]=i.useState(a);return n.jsx("form",{className:"af-form",name:"myform",children:n.jsx(g,{values:l,onChange:e=>{r(e.values),t(e)},...s})})},args:{...d,values:p,menuPortalTarget:document.body},argTypes:{onChange:{action:"onChange"}}},u={name:"MultiSelect with one value",render:({value:a,onChange:t=()=>{},...s})=>{const[l,r]=i.useState(a);return n.jsx("form",{className:"af-form",name:"myform",children:n.jsx(g,{value:l,onChange:e=>{r(e.value),t(e)},...s})})},args:{...d,value:"",menuPortalTarget:document.body},argTypes:{onChange:{action:"onChange"}}},m={name:"MultiSelectInput",render:({values:a,onChange:t=()=>{},...s})=>{const[l,r]=i.useState(a);return n.jsx("form",{className:"af-form",name:"myform",children:n.jsx(I,{values:l,onChange:e=>{r(e.values),t(e)},...s})})},args:{...d,values:p,id:"uniqueid",label:"Place type",helpMessage:"Enter the place type",messageType:x.error,forceDisplayMessage:!1,message:"",isVisible:!0,classModifier:"",classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",selectedLimit:3,selectedLimitLabel:"",menuPortalTarget:document.body},argTypes:{onChange:{action:"onChange"}}},c={name:"MultiSelectInput with help button",render:({values:a,onChange:t=()=>{},...s})=>{const[l,r]=i.useState(a);return n.jsx("form",{className:"af-form",name:"myform",children:n.jsx(I,{values:l,onChange:e=>{r(e.values),t(e)},...s,children:n.jsx(L,{mode:"hover",children:"Help"})})})},args:{...d,values:p,id:"uniqueid",label:"Place type",helpMessage:"Enter the place type",message:"",isVisible:!0,classModifier:"",selectedLimit:3,selectedLimitLabel:"",menuPortalTarget:document.body},argTypes:{onChange:{action:"onChange"}}};var h,f,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "MultiSelect",
  render: ({
    values,
    onChange = () => {},
    ...args
  }) => {
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
    values: selectedValues,
    menuPortalTarget: document.body
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,v,C;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "MultiSelect with one value",
  render: ({
    value,
    onChange = () => {},
    ...args
  }) => {
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
    value: "",
    menuPortalTarget: document.body
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
}`,...(C=(v=u.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var M,b,V;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "MultiSelectInput",
  render: ({
    values,
    onChange = () => {},
    ...args
  }) => {
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
    message: "",
    isVisible: true,
    classModifier: "",
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    selectedLimit: 3,
    selectedLimitLabel: "",
    menuPortalTarget: document.body
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
}`,...(V=(b=m.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var w,N,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "MultiSelectInput with help button",
  render: ({
    values,
    onChange = () => {},
    ...args
  }) => {
    const [newValues, setNewValues] = useState(values);
    return <form className="af-form" name="myform">
        <MultiSelectInput values={newValues} onChange={data => {
        setNewValues(data.values);
        onChange(data);
      }} {...args}>
          <HelpButton mode="hover">Help</HelpButton>
        </MultiSelectInput>
      </form>;
  },
  args: {
    ...commonArgs,
    values: selectedValues,
    id: "uniqueid",
    label: "Place type",
    helpMessage: "Enter the place type",
    message: "",
    isVisible: true,
    classModifier: "",
    selectedLimit: 3,
    selectedLimitLabel: "",
    menuPortalTarget: document.body
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const k=["MultiSelectStory","MultiSelectOneValueStory","MultiSelectInputStory","MultiSelectInputWithChildrenStory"],O=Object.freeze(Object.defineProperty({__proto__:null,MultiSelectInputStory:m,MultiSelectInputWithChildrenStory:c,MultiSelectOneValueStory:u,MultiSelectStory:o,__namedExportsOrder:k,default:P},Symbol.toStringTag,{value:"Module"}));export{O as M,o as a,u as b,m as c};
