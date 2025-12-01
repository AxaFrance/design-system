import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{u as I,P as N,M as c}from"./CardData-B32OAxNP.js";import{r as i}from"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{H as V}from"./index-DqAI6EUb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./Popover-sESXc_TR.js";const j={0:"bad",1:"okay",2:"good",3:"verygood",4:"excellent"},w=a=>{if(a==null)return null;const s=Number(a);let e=Number.isNaN(s)?0:s;return e>4&&(e=4),e<0&&(e=0),j[e]},d=({children:a,score:s,classModifier:e,disabled:o,...l})=>{const u=w(s),[n,t]=i.useState("password");return r.jsx(I,{...l,classModifier:e,renderInput:({id:M,classModifier:P,ariaInvalid:b,errorId:x,...C})=>r.jsxs(r.Fragment,{children:[r.jsx(N,{...C,type:n,id:M,disabled:o,classModifier:`${P} ${u}`,"aria-describedby":x,"aria-invalid":b,onToggleType:()=>t(n==="password"?"text":"password")}),a]})})},O={title:"Components/Form/Input/Pass",component:d,args:{label:"Password",helpMessage:"8 caractères minimum",required:!0,messageType:c.error,forceDisplayMessage:!1,message:"",readOnly:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",autoFocus:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",name:"password",id:"pass-id"},argTypes:{messageType:{options:[c.error,c.success,c.warning,null],control:{type:"select"}},classModifier:{options:["required"],control:{type:"inline-check"}},onChange:{action:"onChange"}}},m={name:"PassInput",render:({value:a,onChange:s,...e})=>{const[o,l]=i.useState(a),[u,n]=i.useState(0);return r.jsx("form",{className:"af-form",name:"myform",children:r.jsx(d,{...e,value:o,onChange:t=>{l(t.target.value),s&&s(t),n(Math.floor(Math.random()*5))},score:u.toString()})})}},p={name:"PassInput with help button",render:({value:a,onChange:s,...e})=>{const[o,l]=i.useState(a),[u,n]=i.useState(0);return r.jsx("form",{className:"af-form",name:"myform",children:r.jsx(d,{...e,value:o,onChange:t=>{l(t.target.value),s&&s(t),n(Math.floor(Math.random()*5))},score:u.toString(),children:r.jsx(V,{mode:"hover",children:"Help"})})})}};var f,g,h;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
