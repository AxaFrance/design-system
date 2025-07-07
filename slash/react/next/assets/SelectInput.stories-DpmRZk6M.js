import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{l as t,M as o}from"./Loader-Cvyl5QsW.js";import"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{f as b}from"./index-28pPPJTf.js";const g={component:t,title:"Components/Form/Input/Select",argTypes:{onChange:{action:"onChange"}},args:{onChange:b()}},m=[{value:"fun",label:"For fun"},{value:"work",label:"For work"},{value:"drink",label:"For drink"}],a={name:"Select with label",tags:["Form","Input"],render:({onChange:n,...u})=>e.jsx(t,{onChange:n,...u}),args:{label:"Place type",mode:"default",helpMessage:"Enter the place type",required:!1,disabled:!1,isVisible:!0,classModifier:"",className:"",placeholder:"- Select -",messageType:void 0,forceDisplayMessage:!1,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",forceDisplayPlaceholder:!1,name:"placeName",options:m},argTypes:{messageType:{control:{type:"select",options:Object.keys(o)}},classModifier:{control:"inline-check",options:["required"]},name:{table:{disable:!0}},id:{table:{disable:!0}},setStateMemoryFn:{table:{disable:!0}},onChangeByStateFn:{table:{disable:!0}},initialState:{table:{disable:!0}},setStateOnFocusFn:{table:{disable:!0}},setStateOnBlurFn:{table:{disable:!0}},roleContainer:{table:{disable:!0}},ariaLabelContainer:{table:{disable:!0}},isLabelContainerLinkedToInput:{table:{disable:!0}}}},s={name:"Select with statuses",tags:["Form","Input"],render:({onChange:n})=>e.jsxs(e.Fragment,{children:[e.jsx(t,{onChange:n,label:"Select in error",options:[{value:"badoption",label:"This is a bad option 😈"}],value:"badoption",forceDisplayMessage:!0,message:"The bad option is forbidden",messageType:o.error}),e.jsx(t,{onChange:n,label:"Select with warning",options:[{value:"dangerousoption",label:"This is a dangerous option 🔥"}],value:"dangerousoption",forceDisplayMessage:!0,message:"The dangerous option is dangerous",messageType:o.warning}),e.jsx(t,{onChange:n,label:"Select in sucess",options:[{value:"validoption",label:"This is a valid option 🙂"}],value:"validoption",forceDisplayMessage:!0,message:"The option is valid, congratz 🎉",messageType:o.success})]}),argTypes:{onChange:{action:"onChange"}}};var l,r,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Select with label",
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
    setStateMemoryFn: {
      table: {
        disable: true
      }
    },
    onChangeByStateFn: {
      table: {
        disable: true
      }
    },
    initialState: {
      table: {
        disable: true
      }
    },
    setStateOnFocusFn: {
      table: {
        disable: true
      }
    },
    setStateOnBlurFn: {
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
}`,...(i=(r=a.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var p,c,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Select with statuses",
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
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const h=["SelectInputStory","SelectWithStatus"],M=Object.freeze(Object.defineProperty({__proto__:null,SelectInputStory:a,SelectWithStatus:s,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{M as S,a,s as b};
