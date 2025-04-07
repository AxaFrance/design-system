import{j as a}from"./index-DK-fRI8B.js";/* empty css              */import{u as _,v as k,w as E,x as O,P as D,H,M as i}from"./Loader-B2KJ74q3.js";import{r as n}from"./index-DbaA8R3S.js";import{f as $}from"./index-C2cC0QQF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const A={0:"bad",1:"okay",2:"good",3:"verygood",4:"excellent"},B=s=>{if(s==null)return null;let e=Number(s)??0;return e>4&&(e=4),e<0&&(e=0),A[e]},b=({message:s,children:e,helpMessage:c,id:u,disabled:r=!1,label:d,messageType:o,isVisible:t,forceDisplayMessage:m,className:S,classModifier:x,classNameContainerLabel:T,classNameContainerInput:v,score:N,required:P,...w})=>{const j=B(N),p=[x??"",j??""].join(" "),[g,V]=n.useState("password"),f=n.useId(),y=n.useId(),q=u??f,{inputClassModifier:F,inputFieldClassModifier:M}=E(p,r,!!e,P),L=_(s,m,o);return a.jsx(k,{label:d,message:s,messageType:o,isVisible:t,forceDisplayMessage:m,className:S,id:q,classModifier:`${p} ${M}`,classNameContainerLabel:T,classNameContainerInput:v,errorId:y,children:a.jsxs(O,{className:"af-form__pass-container",classModifier:M,children:[a.jsx(D,{...w,type:g,id:f,disabled:r,classModifier:F,"aria-describedby":y,"aria-invalid":L,onToggleType:()=>V(g==="password"?"text":"password")}),e,a.jsx(H,{message:c,isVisible:!s})]})})},W={title:"Components/Form/Input/Pass",component:b,args:{onChange:$()}},l={name:"PassInput",render:({value:s,onChange:e,...c})=>{const[u,r]=n.useState(s),[d,o]=n.useState(0);return a.jsx("form",{className:"af-form",name:"myform",children:a.jsx(b,{...c,value:u,onChange:t=>{r(t.target.value),e&&e(t),o(Math.floor(Math.random()*5))},score:d.toString()})})},args:{label:"Password",helpMessage:"8 caractères minimum",required:!0,messageType:i.error,forceDisplayMessage:!1,message:"",readOnly:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",autoFocus:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",name:"password",id:"uniqueid"},argTypes:{messageType:{options:[i.error,i.success,i.warning,null],control:{type:"select"}},classModifier:{options:["required"],control:{type:"inline-check"}},onChange:{action:"onChange"}}};var h,I,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(I=l.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const X=["PassInputStory"];export{l as PassInputStory,X as __namedExportsOrder,W as default};
