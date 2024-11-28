import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{f as F}from"./index-C_FWhylE.js";import{r as i}from"./index-CTjT7uj6.js";import{F as _,a as k,H as E,M as o}from"./HelpMessage-Dma0IcN4.js";import"./index-CCQ3W5xA.js";import{u as L}from"./useInputClassModifier-B4SXY78l.js";import{P as O}from"./Pass-CDmUB5MI.js";import"./getComponentClassName-C7V7Z2-u.js";const D={0:"bad",1:"okay",2:"good",3:"verygood",4:"excellent"},H=s=>{if(s==null)return null;let e=Number(s)??0;return e>4&&(e=4),e<0&&(e=0),D[e]},d=({message:s,children:e,helpMessage:l,id:c,disabled:a=!1,label:u,messageType:p,isVisible:r,forceDisplayMessage:I,className:T,classModifier:S,classNameContainerLabel:x,classNameContainerInput:P,score:b,required:N,...v})=>{const j=H(b),m=[S??"",j??""].join(" "),[f,q]=i.useState("password"),g=i.useId(),w=c??g,{inputClassModifier:V,inputFieldClassModifier:y}=L(m,a,!!e,N);return n.jsx(_,{label:u,message:s,messageType:p,isVisible:r,forceDisplayMessage:I,className:T,id:w,classModifier:`${m} ${y}`,classNameContainerLabel:x,classNameContainerInput:P,children:n.jsxs(k,{className:"af-form__pass-container",classModifier:y,children:[n.jsx(O,{...v,type:f,id:g,disabled:a,classModifier:V,onToggleType:()=>q(f==="password"?"text":"password")}),e,n.jsx(E,{message:l,isVisible:!s})]})})};d.__docgenInfo={description:"",methods:[],displayName:"PassInput",props:{helpMessage:{required:!1,tsType:{name:"ReactNode"},description:""},score:{required:!1,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const Q={title:"Components/Form/Input/Pass",component:d,args:{onChange:F()}},t={name:"PassInput",render:({value:s,onChange:e,...l})=>{const[c,a]=i.useState(s),[u,p]=i.useState(0);return n.jsx("form",{className:"af-form",name:"myform",children:n.jsx(d,{...l,value:c,onChange:r=>{a(r.target.value),e&&e(r),p(Math.floor(Math.random()*5))},score:u.toString()})})},args:{label:"Password",helpMessage:"8 caractères minimum",required:!0,messageType:o.error,forceDisplayMessage:!1,readOnly:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",autoFocus:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",name:"password",id:"uniqueid"},argTypes:{messageType:{options:[o.error,o.success,o.warning,null],control:{type:"select"}},classModifier:{options:["required"],control:{type:"inline-check"}},onChange:{action:"onChange"}}};var M,h,C;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const U=["PassInputStory"];export{t as PassInputStory,U as __namedExportsOrder,Q as default};
