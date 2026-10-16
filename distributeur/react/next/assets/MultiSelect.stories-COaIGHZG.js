import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BL8mseS1.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,r as a}from"./iframe-CUw-2XJG.js";import{Un as o,cn as s,f as c,t as l,un as u}from"./distributeur-BR8zYeHf.js";var d=t({MultiSelectInputStory:()=>x,MultiSelectInputWithChildrenStory:()=>S,MultiSelectOneValueStory:()=>b,MultiSelectStory:()=>y,__namedExportsOrder:()=>C,default:()=>h}),f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{l(),f=n(),i(),p=r(),{fn:m}=__STORYBOOK_MODULE_TEST__,h=a.meta({title:`Components/Form/Input/MultiSelect`,component:u,argTypes:{onChange:{action:`onChange`}},args:{onChange:m()}}),g=[{value:`fun`,label:`For fun`,clearableValue:!1},{value:`work`,label:`For work`},{value:`drink`,label:`For drink`},{value:`sleep`,label:`For sleep`},{value:`swim`,label:`For swim`}],_=[`work`,`drink`],v={name:`multiSelectName`,options:g,disabled:!1,required:!0,placeholder:`- Sélectionner -`},y=h.story({name:`MultiSelect`,render:({values:e,onChange:t=()=>{},...n})=>{let[r,i]=(0,f.useState)(e);return(0,p.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,p.jsx)(u,{values:r,onChange:e=>{i(e.values),t(e)},...n})})},args:{...v,values:_,menuPortalTarget:document.body},argTypes:{onChange:{action:`onChange`}}}),b=h.story({name:`MultiSelect with one value`,render:({value:e,onChange:t=()=>{},...n})=>{let[r,i]=(0,f.useState)(e);return(0,p.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,p.jsx)(u,{value:r,onChange:e=>{i(e.value),t(e)},...n})})},args:{...v,value:``,menuPortalTarget:document.body},argTypes:{onChange:{action:`onChange`}}}),x=h.story({name:`MultiSelectInput`,render:({values:e,onChange:t=()=>{},...n})=>{let[r,i]=(0,f.useState)(e);return(0,p.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,p.jsx)(s,{label:`Place type`,values:r,onChange:e=>{i(e.values),t(e)},...n})})},args:{...v,values:_,id:`uniqueid`,label:`Place type`,helpMessage:`Enter the place type`,messageType:o.error,forceDisplayMessage:!1,message:``,className:``,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`,selectedLimit:3,selectedLimitLabel:``,menuPortalTarget:document.body},argTypes:{onChange:{action:`onChange`}}}),S=h.story({name:`MultiSelectInput with help button`,render:({values:e,onChange:t=()=>{},...n})=>{let[r,i]=(0,f.useState)(e);return(0,p.jsx)(`form`,{className:`af-form`,name:`myform`,children:(0,p.jsx)(s,{label:`Place type`,values:r,onChange:e=>{i(e.values),t(e)},...n,children:(0,p.jsx)(c,{mode:`hover`,children:`Help`})})})},args:{...v,values:_,id:`uniqueid`,label:`Place type`,helpMessage:`Enter the place type`,message:``,className:``,selectedLimit:3,selectedLimitLabel:``,menuPortalTarget:document.body},argTypes:{onChange:{action:`onChange`}}}),y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...y.input.parameters?.docs?.source}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...b.input.parameters?.docs?.source}}},x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
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
    className: "",
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
})`,...x.input.parameters?.docs?.source}}},S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
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
    className: "",
    selectedLimit: 3,
    selectedLimitLabel: "",
    menuPortalTarget: document.body
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
})`,...S.input.parameters?.docs?.source}}},C=[`MultiSelectStory`,`MultiSelectOneValueStory`,`MultiSelectInputStory`,`MultiSelectInputWithChildrenStory`]})))()}export{w as a,d as i,b as n,y as r,x as t};