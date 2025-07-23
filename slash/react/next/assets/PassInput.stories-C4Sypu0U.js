import{j as l}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{v as T,P as C,M as t}from"./Loader-b3UvZa-v.js";import{r as m}from"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{f as S}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const N={0:"bad",1:"okay",2:"good",3:"verygood",4:"excellent"},P=s=>{if(s==null)return null;const n=Number(s);let e=Number.isNaN(n)?0:n;return e>4&&(e=4),e<0&&(e=0),N[e]},f=({children:s,score:n,classModifier:e,disabled:c,...a})=>{const u=P(n),[r,o]=m.useState("password");return l.jsx(T,{...a,classModifier:e,renderInput:({id:y,classModifier:h,ariaInvalid:M,errorId:b})=>l.jsx(C,{...a,type:r,id:y,disabled:c,classModifier:`${h} ${u}`,"aria-describedby":b,"aria-invalid":M,onToggleType:()=>o(r==="password"?"text":"password")}),children:s})},k={title:"Components/Form/Input/Pass",component:f,args:{onChange:S()}},i={name:"PassInput",render:({value:s,onChange:n,...e})=>{const[c,a]=m.useState(s),[u,r]=m.useState(0);return l.jsx("form",{className:"af-form",name:"myform",children:l.jsx(f,{...e,value:c,onChange:o=>{a(o.target.value),n&&n(o),r(Math.floor(Math.random()*5))},score:u.toString()})})},args:{label:"Password",helpMessage:"8 caractères minimum",required:!0,messageType:t.error,forceDisplayMessage:!1,message:"",readOnly:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",autoFocus:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",name:"password",id:"pass-id"},argTypes:{messageType:{options:[t.error,t.success,t.warning,null],control:{type:"select"}},classModifier:{options:["required"],control:{type:"inline-check"}},onChange:{action:"onChange"}}};var p,d,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const E=["PassInputStory"];export{i as PassInputStory,E as __namedExportsOrder,k as default};
