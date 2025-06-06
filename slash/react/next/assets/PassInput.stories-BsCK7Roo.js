import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{u as _,v as k,w as E,x as O,P as D,H,M as l}from"./Loader-CimcINoe.js";/* empty css              */import{r}from"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{f as $}from"./index-28pPPJTf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const A={0:"bad",1:"okay",2:"good",3:"verygood",4:"excellent"},B=e=>{if(e==null)return null;const a=Number(e);let s=Number.isNaN(a)?0:a;return s>4&&(s=4),s<0&&(s=0),A[s]},C=({message:e,children:a,helpMessage:s,id:u,disabled:o=!1,label:m,messageType:t,isVisible:i,forceDisplayMessage:d,className:N,classModifier:S,classNameContainerLabel:T,classNameContainerInput:x,score:v,required:P,...w})=>{const j=B(v),p=[S??"",j??""].join(" "),[g,V]=r.useState("password"),f=r.useId(),y=r.useId(),q=u??f,{inputClassModifier:F,inputFieldClassModifier:M}=E(p,o,!!a,P),L=_(e,d,t);return n.jsx(k,{label:m,message:e,messageType:t,isVisible:i,forceDisplayMessage:d,className:N,id:q,classModifier:`${p} ${M}`,classNameContainerLabel:T,classNameContainerInput:x,errorId:y,children:n.jsxs(O,{className:"af-form__pass-container",classModifier:M,children:[n.jsx(D,{...w,type:g,id:f,disabled:o,classModifier:F,"aria-describedby":y,"aria-invalid":L,onToggleType:()=>V(g==="password"?"text":"password")}),a,n.jsx(H,{message:s,isVisible:!e})]})})},X={title:"Components/Form/Input/Pass",component:C,args:{onChange:$()}},c={name:"PassInput",render:({value:e,onChange:a,...s})=>{const[u,o]=r.useState(e),[m,t]=r.useState(0);return n.jsx("form",{className:"af-form",name:"myform",children:n.jsx(C,{...s,value:u,onChange:i=>{o(i.target.value),a&&a(i),t(Math.floor(Math.random()*5))},score:m.toString()})})},args:{label:"Password",helpMessage:"8 caractères minimum",required:!0,messageType:l.error,forceDisplayMessage:!1,message:"",readOnly:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",autoFocus:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",name:"password",id:"uniqueid"},argTypes:{messageType:{options:[l.error,l.success,l.warning,null],control:{type:"select"}},classModifier:{options:["required"],control:{type:"inline-check"}},onChange:{action:"onChange"}}};var h,I,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(I=c.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};const Y=["PassInputStory"];export{c as PassInputStory,Y as __namedExportsOrder,X as default};
