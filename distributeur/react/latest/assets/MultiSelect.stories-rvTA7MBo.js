import{a as e,n as t,r as n}from"./chunk-DnJy8xQt.js";import{O as r,n as i,t as a,w as o}from"./iframe-De-9TtK1.js";import{St as s,at as c,it as l,n as u,o as d}from"./distributeur-Ct4qDp97.js";var f=n({MultiSelectInputStory:()=>S,MultiSelectInputWithChildrenStory:()=>C,MultiSelectOneValueStory:()=>x,MultiSelectStory:()=>b,__namedExportsOrder:()=>w,default:()=>g}),p,m,h,g,_,v,y,b,x,S,C,w,T=t((()=>{u(),p=e(r(),1),a(),m=o(),{fn:h}=__STORYBOOK_MODULE_TEST__,g=i.meta({title:`Components/Form/Input/MultiSelect`,component:c,argTypes:{onChange:{action:`onChange`}},args:{onChange:h()}}),_=[{value:`fun`,label:`For fun`,clearableValue:!1},{value:`work`,label:`For work`},{value:`drink`,label:`For drink`},{value:`sleep`,label:`For sleep`},{value:`swim`,label:`For swim`}],v=[`work`,`drink`],y={name:`multiSelectName`,options:_,disabled:!1,required:!0,placeholder:`- Sélectionner -`},b=g.story({name:`MultiSelect`,render:({values:e,onChange:t=()=>{},...n})=>{let[r,i]=(0,p.useState)(e);return(0,m.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,m.jsx)(c,{values:r,onChange:e=>{i(e.values),t(e)},...n})})},args:{...y,values:v,menuPortalTarget:document.body},argTypes:{onChange:{action:`onChange`}}}),x=g.story({name:`MultiSelect with one value`,render:({value:e,onChange:t=()=>{},...n})=>{let[r,i]=(0,p.useState)(e);return(0,m.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,m.jsx)(c,{value:r,onChange:e=>{i(e.value),t(e)},...n})})},args:{...y,value:``,menuPortalTarget:document.body},argTypes:{onChange:{action:`onChange`}}}),S=g.story({name:`MultiSelectInput`,render:({values:e,onChange:t=()=>{},...n})=>{let[r,i]=(0,p.useState)(e);return(0,m.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,m.jsx)(l,{label:`Place type`,values:r,onChange:e=>{i(e.values),t(e)},...n})})},args:{...y,values:v,id:`uniqueid`,label:`Place type`,helpMessage:`Enter the place type`,messageType:s.error,forceDisplayMessage:!1,message:``,isVisible:!0,classModifier:``,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`,selectedLimit:3,selectedLimitLabel:``,menuPortalTarget:document.body},argTypes:{onChange:{action:`onChange`}}}),C=g.story({name:`MultiSelectInput with help button`,render:({values:e,onChange:t=()=>{},...n})=>{let[r,i]=(0,p.useState)(e);return(0,m.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,m.jsx)(l,{label:`Place type`,values:r,onChange:e=>{i(e.values),t(e)},...n,children:(0,m.jsx)(d,{mode:`hover`,children:`Help`})})})},args:{...y,values:v,id:`uniqueid`,label:`Place type`,helpMessage:`Enter the place type`,message:``,isVisible:!0,classModifier:``,selectedLimit:3,selectedLimitLabel:``,menuPortalTarget:document.body},argTypes:{onChange:{action:`onChange`}}}),b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "MultiSelect",
  render: ({
    values,
    onChange = () => {},
    ...args
  }) => {
    const [newValues, setNewValues] = useState(values);
    return <form className="af-form" name="myform">
        <MultiSelect values={newValues} onChange={data => {
        setNewValues(data.values);
        onChange(data);
      }} {...args} />
      </form>;
  },
  args: {
    ...commonArgs,
    values: selectedValues,
    menuPortalTarget: document.body
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
})`,...b.input.parameters?.docs?.source}}},x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "MultiSelect with one value",
  render: ({
    value,
    onChange = () => {},
    ...args
  }) => {
    const [newValue, setNewValue] = useState(value);
    return <form className="af-form" name="myform">
        <MultiSelect value={newValue} onChange={data => {
        setNewValue(data.value);
        onChange(data);
      }} {...args} />
      </form>;
  },
  args: {
    ...commonArgs,
    value: "",
    menuPortalTarget: document.body
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
})`,...x.input.parameters?.docs?.source}}},S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "MultiSelectInput",
  render: ({
    values,
    onChange = () => {},
    ...args
  }) => {
    const [newValues, setNewValues] = useState(values);
    return <form className="af-form" name="myform">
        <MultiSelectInput label="Place type" values={newValues} onChange={data => {
        setNewValues(data.values);
        onChange(data);
      }} {...args} />
      </form>;
  },
  args: {
    ...commonArgs,
    values: selectedValues,
    id: "uniqueid",
    label: "Place type",
    helpMessage: "Enter the place type",
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
    message: "",
    isVisible: true,
    classModifier: "",
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    selectedLimit: 3,
    selectedLimitLabel: "",
    menuPortalTarget: document.body
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
})`,...S.input.parameters?.docs?.source}}},C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "MultiSelectInput with help button",
  render: ({
    values,
    onChange = () => {},
    ...args
  }) => {
    const [newValues, setNewValues] = useState(values);
    return <form className="af-form" name="myform">
        <MultiSelectInput label="Place type" values={newValues} onChange={data => {
        setNewValues(data.values);
        onChange(data);
      }} {...args}>
          <HelpButton mode="hover">Help</HelpButton>
        </MultiSelectInput>
      </form>;
  },
  args: {
    ...commonArgs,
    values: selectedValues,
    id: "uniqueid",
    label: "Place type",
    helpMessage: "Enter the place type",
    message: "",
    isVisible: true,
    classModifier: "",
    selectedLimit: 3,
    selectedLimitLabel: "",
    menuPortalTarget: document.body
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
})`,...C.input.parameters?.docs?.source}}},w=[`MultiSelectStory`,`MultiSelectOneValueStory`,`MultiSelectInputStory`,`MultiSelectInputWithChildrenStory`]}));T();export{S as MultiSelectInputStory,C as MultiSelectInputWithChildrenStory,x as MultiSelectOneValueStory,b as MultiSelectStory,w as __namedExportsOrder,g as default,T as n,f as t};