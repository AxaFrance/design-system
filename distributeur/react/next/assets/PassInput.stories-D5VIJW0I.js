import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{M as n,p as d,H as C}from"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import{r as o}from"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";const N={title:"Components/Form/Input/Pass",component:d,args:{label:"Password",helpMessage:"8 caractères minimum",required:!0,messageType:n.error,forceDisplayMessage:!1,message:"",readOnly:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",autoFocus:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",name:"password",id:"pass-id"},argTypes:{messageType:{options:[n.error,n.success,n.warning,null],control:{type:"select"}},classModifier:{options:["required"],control:{type:"inline-check"}},onChange:{action:"onChange"}}},r={name:"PassInput",render:({value:u,onChange:e,...l})=>{const[m,c]=o.useState(u),[i,p]=o.useState(0);return s.jsx("form",{className:"af-form",name:"myform",children:s.jsx(d,{...l,value:m,onChange:a=>{c(a.target.value),e&&e(a),p(Math.floor(Math.random()*5))},score:i.toString()})})}},t={name:"PassInput with help button",render:({value:u,onChange:e,...l})=>{const[m,c]=o.useState(u),[i,p]=o.useState(0);return s.jsx("form",{className:"af-form",name:"myform",children:s.jsx(d,{...l,value:m,onChange:a=>{c(a.target.value),e&&e(a),p(Math.floor(Math.random()*5))},score:i.toString(),children:s.jsx(C,{mode:"hover",children:"Help"})})})}};var f,h,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,v,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "PassInput with help button",
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
      }} score={score.toString()}>
          <HelpButton mode="hover">Help</HelpButton>
        </PassInput>
      </form>;
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const H=["PassInputStory","PassInputWithChildrenStory"];export{r as PassInputStory,t as PassInputWithChildrenStory,H as __namedExportsOrder,N as default};
