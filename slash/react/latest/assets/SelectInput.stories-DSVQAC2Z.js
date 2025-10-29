import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import{l as n,M as l}from"./CardData-BlwwpXkm.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{H as f}from"./index-CrhdoXOM.js";import{f as S}from"./index-VGPHIPc6.js";const h=[{value:"fun",label:"For fun"},{value:"work",label:"For work"},{value:"drink",label:"For drink"}],T={component:n,title:"Components/Form/Input/Select",argTypes:{onChange:{action:"onChange"}},args:{label:"Place type",mode:"default",helpMessage:"Enter the place type",required:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",placeholder:"- Select -",messageType:void 0,forceDisplayMessage:!1,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",forceDisplayPlaceholder:!1,name:"placeName",options:h,onChange:S()}},s={name:"SelectInput with label",tags:["Form","Input"],render:({onChange:a,...y})=>e.jsx(n,{onChange:a,...y}),args:{label:"Place type",mode:"default",helpMessage:"Enter the place type",required:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",placeholder:"- Select -",messageType:void 0,forceDisplayMessage:!1,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",forceDisplayPlaceholder:!1,name:"placeName",options:h},argTypes:{messageType:{control:{type:"select",options:Object.keys(l)}},classModifier:{control:"inline-check",options:["required"]},name:{table:{disable:!0}},id:{table:{disable:!0}},roleContainer:{table:{disable:!0}},ariaLabelContainer:{table:{disable:!0}},isLabelContainerLinkedToInput:{table:{disable:!0}}}},o={name:"SelectInput with statuses",tags:["Form","Input"],render:({onChange:a})=>e.jsxs(e.Fragment,{children:[e.jsx(n,{onChange:a,label:"Select in error",options:[{value:"badoption",label:"This is a bad option 😈"}],value:"badoption",forceDisplayMessage:!0,message:"The bad option is forbidden",messageType:l.error}),e.jsx(n,{onChange:a,label:"Select with warning",options:[{value:"dangerousoption",label:"This is a dangerous option 🔥"}],value:"dangerousoption",forceDisplayMessage:!0,message:"The dangerous option is dangerous",messageType:l.warning}),e.jsx(n,{onChange:a,label:"Select in sucess",options:[{value:"validoption",label:"This is a valid option 🙂"}],value:"validoption",forceDisplayMessage:!0,message:"The option is valid, congratz 🎉",messageType:l.success})]}),argTypes:{onChange:{action:"onChange"}}},t={name:"SelectInput with children",render:({...a})=>e.jsx(n,{...a,children:e.jsx(f,{mode:"hover",children:"Help"})})};var r,i,p;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "SelectInput with label",
  tags: ["Form", "Input"],
  render: ({
    onChange,
    ...args
  }) => <SelectInput onChange={onChange} {...args} />,
  args: {
    label: "Place type",
    mode: "default",
    helpMessage: "Enter the place type",
    required: false,
    disabled: false,
    isVisible: true,
    classModifier: "",
    className: "",
    placeholder: "- Select -",
    messageType: undefined,
    forceDisplayMessage: false,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    forceDisplayPlaceholder: false,
    name: "placeName",
    options
  },
  argTypes: {
    messageType: {
      control: {
        type: "select",
        options: Object.keys(MessageTypes)
      }
    },
    classModifier: {
      control: "inline-check",
      options: ["required"]
    },
    name: {
      table: {
        disable: true
      }
    },
    id: {
      table: {
        disable: true
      }
    },
    roleContainer: {
      table: {
        disable: true
      }
    },
    ariaLabelContainer: {
      table: {
        disable: true
      }
    },
    isLabelContainerLinkedToInput: {
      table: {
        disable: true
      }
    }
  }
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "SelectInput with statuses",
  tags: ["Form", "Input"],
  render: ({
    onChange
  }) => <>
      <SelectInput onChange={onChange} label="Select in error" options={[{
      value: "badoption",
      label: "This is a bad option 😈"
    }]} value="badoption" forceDisplayMessage message="The bad option is forbidden" messageType={MessageTypes.error} />

      <SelectInput onChange={onChange} label="Select with warning" options={[{
      value: "dangerousoption",
      label: "This is a dangerous option 🔥"
    }]} value="dangerousoption" forceDisplayMessage message="The dangerous option is dangerous" messageType={MessageTypes.warning} />

      <SelectInput onChange={onChange} label="Select in sucess" options={[{
      value: "validoption",
      label: "This is a valid option 🙂"
    }]} value="validoption" forceDisplayMessage message="The option is valid, congratz 🎉" messageType={MessageTypes.success} />
    </>,
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,m,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "SelectInput with children",
  render: ({
    ...args
  }) => <SelectInput {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </SelectInput>
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const C=["SelectInputStory","SelectWithStatus","SelectWithChildren"],x=Object.freeze(Object.defineProperty({__proto__:null,SelectInputStory:s,SelectWithChildren:t,SelectWithStatus:o,__namedExportsOrder:C,default:T},Symbol.toStringTag,{value:"Module"}));export{x as S,s as a,o as b};
