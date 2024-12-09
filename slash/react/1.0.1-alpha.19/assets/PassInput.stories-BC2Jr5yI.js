import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{f as y}from"./index-C_FWhylE.js";import{r as o}from"./index-CTjT7uj6.js";import{M as e}from"./HelpMessage-8RhooMOY.js";import"./index-CCQ3W5xA.js";import{P as c}from"./PassInput-CjTuF9FG.js";import"./getComponentClassName-C7V7Z2-u.js";import"./useInputClassModifier-B4SXY78l.js";import"./Pass-CDmUB5MI.js";const N={title:"Components/Form/Input/Pass",component:c,args:{onChange:y()}},s={name:"PassInput",render:({value:m,onChange:n,...u})=>{const[p,d]=o.useState(m),[g,f]=o.useState(0);return r.jsx("form",{className:"af-form",name:"myform",children:r.jsx(c,{...u,value:p,onChange:a=>{d(a.target.value),n&&n(a),f(Math.floor(Math.random()*5))},score:g.toString()})})},args:{label:"Password",helpMessage:"8 caractères minimum",required:!0,messageType:e.error,forceDisplayMessage:!1,readOnly:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",autoFocus:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",name:"password",id:"uniqueid"},argTypes:{messageType:{options:[e.error,e.success,e.warning,null],control:{type:"select"}},classModifier:{options:["required"],control:{type:"inline-check"}},onChange:{action:"onChange"}}};var t,i,l;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "PassInput",
  render: ({
    value: initValue,
    onChange,
    ...args
  }) => {
    const [value, setValue] = useState(initValue);
    const [score, setScore] = useState<number>(0);
    return <form className="af-form" name="myform">
        <PassInput {...args} value={value} onChange={e => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
        setScore(Math.floor(Math.random() * 5));
      }} score={score.toString()} />
      </form>;
  },
  args: {
    label: "Password",
    helpMessage: "8 caractères minimum",
    required: true,
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
    readOnly: false,
    disabled: false,
    isVisible: true,
    classModifier: "",
    className: "",
    autoFocus: true,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    name: "password",
    id: "uniqueid"
  },
  argTypes: {
    messageType: {
      options: [MessageTypes.error, MessageTypes.success, MessageTypes.warning, null],
      control: {
        type: "select"
      }
    },
    classModifier: {
      options: ["required"],
      control: {
        type: "inline-check"
      }
    },
    onChange: {
      action: "onChange"
    }
  }
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const x=["PassInputStory"];export{s as PassInputStory,x as __namedExportsOrder,N as default};
