import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{M as r}from"./CardData-BIJbskTL.js";import{r as o}from"./index-ZnYipkzV.js";import{P as d}from"./PassInput-DpbTmupL.js";import"./index-63p0MazF.js";import{H as C}from"./index-gMQblwGn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./Popover-fnJAgU7M.js";const w={title:"Components/Form/Input/Pass",component:d,args:{label:"Password",helpMessage:"8 caractères minimum",required:!0,messageType:r.error,forceDisplayMessage:!1,message:"",readOnly:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",autoFocus:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",name:"password",id:"pass-id"},argTypes:{messageType:{options:[r.error,r.success,r.warning,null],control:{type:"select"}},classModifier:{options:["required"],control:{type:"inline-check"}},onChange:{action:"onChange"}}},n={name:"PassInput",render:({value:m,onChange:e,...u})=>{const[l,c]=o.useState(m),[i,p]=o.useState(0);return s.jsx("form",{className:"af-form",name:"myform",children:s.jsx(d,{...u,value:l,onChange:a=>{c(a.target.value),e&&e(a),p(Math.floor(Math.random()*5))},score:i.toString()})})}},t={name:"PassInput with help button",render:({value:m,onChange:e,...u})=>{const[l,c]=o.useState(m),[i,p]=o.useState(0);return s.jsx("form",{className:"af-form",name:"myform",children:s.jsx(d,{...u,value:l,onChange:a=>{c(a.target.value),e&&e(a),p(Math.floor(Math.random()*5))},score:i.toString(),children:s.jsx(C,{mode:"hover",children:"Help"})})})}};var f,h,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,v,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const T=["PassInputStory","PassInputWithChildrenStory"];export{n as PassInputStory,t as PassInputWithChildrenStory,T as __namedExportsOrder,w as default};
