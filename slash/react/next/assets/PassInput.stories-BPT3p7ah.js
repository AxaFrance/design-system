import{j as a}from"./index-DK-fRI8B.js";/* empty css              */import{L as F,u as L,v as _,P as k,H as D,M as o}from"./Loader-D6y4K9Ud.js";import{r as i}from"./index-DbaA8R3S.js";import{f as E}from"./index-C2cC0QQF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";const O={0:"bad",1:"okay",2:"good",3:"verygood",4:"excellent"},H=s=>{if(s==null)return null;let e=Number(s)??0;return e>4&&(e=4),e<0&&(e=0),O[e]},C=({message:s,children:e,helpMessage:l,id:c,disabled:n=!1,label:u,messageType:m,isVisible:r,forceDisplayMessage:I,className:b,classModifier:S,classNameContainerLabel:T,classNameContainerInput:x,score:N,required:P,...v})=>{const j=H(N),p=[S??"",j??""].join(" "),[d,w]=i.useState("password"),g=i.useId(),V=c??g,{inputClassModifier:q,inputFieldClassModifier:f}=L(p,n,!!e,P);return a.jsx(F,{label:u,message:s,messageType:m,isVisible:r,forceDisplayMessage:I,className:b,id:V,classModifier:`${p} ${f}`,classNameContainerLabel:T,classNameContainerInput:x,children:a.jsxs(_,{className:"af-form__pass-container",classModifier:f,children:[a.jsx(k,{...v,type:d,id:g,disabled:n,classModifier:q,onToggleType:()=>w(d==="password"?"text":"password")}),e,a.jsx(D,{message:l,isVisible:!s})]})})},K={title:"Components/Form/Input/Pass",component:C,args:{onChange:E()}},t={name:"PassInput",render:({value:s,onChange:e,...l})=>{const[c,n]=i.useState(s),[u,m]=i.useState(0);return a.jsx("form",{className:"af-form",name:"myform",children:a.jsx(C,{...l,value:c,onChange:r=>{n(r.target.value),e&&e(r),m(Math.floor(Math.random()*5))},score:u.toString()})})},args:{label:"Password",helpMessage:"8 caractères minimum",required:!0,messageType:o.error,forceDisplayMessage:!1,message:"",readOnly:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",autoFocus:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",name:"password",id:"uniqueid"},argTypes:{messageType:{options:[o.error,o.success,o.warning,null],control:{type:"select"}},classModifier:{options:["required"],control:{type:"inline-check"}},onChange:{action:"onChange"}}};var y,M,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(M=t.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};const Q=["PassInputStory"];export{t as PassInputStory,Q as __namedExportsOrder,K as default};
