import{j as r}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import{v as C,P as I,M as c}from"./CardData-Dqmws-JC.js";import{r as i}from"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{H as N}from"./index-BvCBwXlL.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./Popover-yDBFQci-.js";const V={0:"bad",1:"okay",2:"good",3:"verygood",4:"excellent"},j=a=>{if(a==null)return null;const s=Number(a);let e=Number.isNaN(s)?0:s;return e>4&&(e=4),e<0&&(e=0),V[e]},d=({children:a,score:s,classModifier:e,disabled:l,...n})=>{const u=j(s),[o,t]=i.useState("password");return r.jsx(C,{...n,classModifier:e,renderInput:({id:M,classModifier:P,ariaInvalid:b,errorId:x})=>r.jsxs(r.Fragment,{children:[r.jsx(I,{...n,type:o,id:M,disabled:l,classModifier:`${P} ${u}`,"aria-describedby":x,"aria-invalid":b,onToggleType:()=>t(o==="password"?"text":"password")}),a]})})},O={title:"Components/Form/Input/Pass",component:d,args:{label:"Password",helpMessage:"8 caractères minimum",required:!0,messageType:c.error,forceDisplayMessage:!1,message:"",readOnly:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",autoFocus:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",name:"password",id:"pass-id"},argTypes:{messageType:{options:[c.error,c.success,c.warning,null],control:{type:"select"}},classModifier:{options:["required"],control:{type:"inline-check"}},onChange:{action:"onChange"}}},m={name:"PassInput",render:({value:a,onChange:s,...e})=>{const[l,n]=i.useState(a),[u,o]=i.useState(0);return r.jsx("form",{className:"af-form",name:"myform",children:r.jsx(d,{...e,value:l,onChange:t=>{n(t.target.value),s&&s(t),o(Math.floor(Math.random()*5))},score:u.toString()})})}},p={name:"PassInput with help button",render:({value:a,onChange:s,...e})=>{const[l,n]=i.useState(a),[u,o]=i.useState(0);return r.jsx("form",{className:"af-form",name:"myform",children:r.jsx(d,{...e,value:l,onChange:t=>{n(t.target.value),s&&s(t),o(Math.floor(Math.random()*5))},score:u.toString(),children:r.jsx(N,{mode:"hover",children:"Help"})})})}};var f,g,h;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(g=m.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,y,v;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(y=p.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const W=["PassInputStory","PassInputWithChildrenStory"];export{m as PassInputStory,p as PassInputWithChildrenStory,W as __namedExportsOrder,O as default};
