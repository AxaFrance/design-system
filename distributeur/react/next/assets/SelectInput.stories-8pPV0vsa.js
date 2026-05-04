import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-B6pS4pdr.js";import{St as a,Z as o,n as s,o as c}from"./distributeur-DmtDXCQS.js";var l=t({SelectInputStory:()=>p,SelectWithChildren:()=>h,SelectWithStatus:()=>m,__namedExportsOrder:()=>g,default:()=>f}),u,d,f,p,m,h,g,_=e((()=>{s(),r(),u=i(),{fn:d}=__STORYBOOK_MODULE_TEST__,f=n.meta({component:o,title:`Components/Form/Input/Select`,args:{label:`Place type`,mode:`default`,helpMessage:`Enter the place type`,required:!1,disabled:!1,isVisible:!0,classModifier:``,className:``,placeholder:`- Select -`,messageType:void 0,forceDisplayMessage:!1,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`,forceDisplayPlaceholder:!1,name:`placeName`,options:[{value:`fun`,label:`For fun`},{value:`work`,label:`For work`},{value:`drink`,label:`For drink`}],onChange:d(),children:void 0}}),p=f.story({name:`SelectInput with label`,tags:[`Form`,`Input`],render:({onChange:e,...t})=>(0,u.jsx)(o,{onChange:e,...t}),argTypes:{messageType:{control:{type:`select`,options:Object.keys(a)}},classModifier:{control:`inline-check`,options:[`required`]},name:{table:{disable:!0}},id:{table:{disable:!0}},roleContainer:{table:{disable:!0}},ariaLabelContainer:{table:{disable:!0}},isLabelContainerLinkedToInput:{table:{disable:!0}}}}),m=f.story({name:`SelectInput with statuses`,tags:[`Form`,`Input`],render:({onChange:e})=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{onChange:e,label:`Select in error`,options:[{value:`badoption`,label:`This is a bad option 😈`}],value:`badoption`,forceDisplayMessage:!0,message:`The bad option is forbidden`,messageType:a.error}),(0,u.jsx)(o,{onChange:e,label:`Select with warning`,options:[{value:`dangerousoption`,label:`This is a dangerous option 🔥`}],value:`dangerousoption`,forceDisplayMessage:!0,message:`The dangerous option is dangerous`,messageType:a.warning}),(0,u.jsx)(o,{onChange:e,label:`Select in sucess`,options:[{value:`validoption`,label:`This is a valid option 🙂`}],value:`validoption`,forceDisplayMessage:!0,message:`The option is valid, congratz 🎉`,messageType:a.success})]})}),h=f.story({name:`SelectInput with children`,render:({...e})=>(0,u.jsx)(o,{...e,children:(0,u.jsx)(c,{mode:`hover`,children:`Help`})})}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "SelectInput with label",
  tags: ["Form", "Input"],
  render: ({
    onChange,
    ...args
  }) => <SelectInput onChange={onChange} {...args} />,
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
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
    </>
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "SelectInput with children",
  render: ({
    ...args
  }) => <SelectInput {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </SelectInput>
})`,...h.input.parameters?.docs?.source}}},g=[`SelectInputStory`,`SelectWithStatus`,`SelectWithChildren`]}));_();export{p as SelectInputStory,h as SelectWithChildren,m as SelectWithStatus,g as __namedExportsOrder,f as default,_ as n,l as t};