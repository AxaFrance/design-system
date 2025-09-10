import{j as a}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{v as T,P as C,M as i}from"./CardData---QWWqDB.js";import{r as u}from"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as S}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const N={0:"bad",1:"okay",2:"good",3:"verygood",4:"excellent"},x=s=>{if(s==null)return null;const n=Number(s);let e=Number.isNaN(n)?0:n;return e>4&&(e=4),e<0&&(e=0),N[e]},f=({rightElement:s,score:n,classModifier:e,disabled:c,...r})=>{const m=x(n),[t,o]=u.useState("password");return a.jsx(T,{...r,classModifier:e,renderInput:({id:y,classModifier:h,ariaInvalid:M,errorId:b})=>a.jsxs(a.Fragment,{children:[a.jsx(C,{...r,type:t,id:y,disabled:c,classModifier:`${h} ${m}`,"aria-describedby":b,"aria-invalid":M,onToggleType:()=>o(t==="password"?"text":"password")}),s]})})},k={title:"Components/Form/Input/Pass",component:f,args:{onChange:S()}},l={name:"PassInput",render:({value:s,onChange:n,...e})=>{const[c,r]=u.useState(s),[m,t]=u.useState(0);return a.jsx("form",{className:"af-form",name:"myform",children:a.jsx(f,{...e,value:c,onChange:o=>{r(o.target.value),n&&n(o),t(Math.floor(Math.random()*5))},score:m.toString()})})},args:{label:"Password",helpMessage:"8 caractères minimum",required:!0,messageType:i.error,forceDisplayMessage:!1,message:"",readOnly:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",autoFocus:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",name:"password",id:"pass-id"},argTypes:{messageType:{options:[i.error,i.success,i.warning,null],control:{type:"select"}},classModifier:{options:["required"],control:{type:"inline-check"}},onChange:{action:"onChange"}}};var p,d,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    message: "",
    readOnly: false,
    disabled: false,
    isVisible: true,
    classModifier: "",
    className: "",
    autoFocus: true,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    name: "password",
    id: "pass-id"
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
}`,...(g=(d=l.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const E=["PassInputStory"];export{l as PassInputStory,E as __namedExportsOrder,k as default};
