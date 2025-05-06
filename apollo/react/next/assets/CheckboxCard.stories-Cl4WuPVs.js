import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{a}from"./ContentItemMonoApollo-D_YZcBbj.js";import"./index-DuZrfDUH.js";import{h as e}from"./home-BuLaEOyh.js";const d={title:"Components/Form/Checkbox/CheckboxCard",component:a,argTypes:{}},n={name:"CheckboxCard",render:({...l})=>u.jsx(a,{...l}),args:{type:"vertical",isRequired:!0,options:[{label:"Paris",description:"Capitale de la France",subtitle:"Nord",name:"paris",value:"paris",icon:e},{label:"Bruxelles",description:"Capitale de la Belgique",name:"bruxelles",value:"bruxelles",icon:e},{label:"Lille",name:"lille",value:"lille",icon:e,checked:!0}]},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},options:{control:{type:"object"}},onChange:{action:"onChange"}}},o={name:"CheckboxCardWithLabel",render:({...l})=>u.jsx(a,{...l}),args:{type:"vertical",labelGroup:"Quelle ville ?",descriptionGroup:"Choisissez une ville",isRequired:!0,options:[{label:"Paris",description:"Capitale de la France",subtitle:"Nord",name:"paris",value:"paris",icon:e},{label:"Bruxelles",description:"Capitale de la Belgique",name:"bruxelles",value:"bruxelles",hasError:!0,icon:e},{label:"Lille",name:"lille",value:"lille",icon:e,checked:!0}]},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},options:{control:{type:"object"}},onChange:{action:"onChange"}}};var r,i,t;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "CheckboxCard",
  render: ({
    ...args
  }) => <CheckboxCard {...args} />,
  args: {
    type: "vertical",
    isRequired: true,
    options: [{
      label: "Paris",
      description: "Capitale de la France",
      subtitle: "Nord",
      name: "paris",
      value: "paris",
      icon: homeIcons
    }, {
      label: "Bruxelles",
      description: "Capitale de la Belgique",
      name: "bruxelles",
      value: "bruxelles",
      icon: homeIcons
    }, {
      label: "Lille",
      name: "lille",
      value: "lille",
      icon: homeIcons,
      checked: true
    }]
  },
  argTypes: {
    type: {
      control: {
        type: "inline-radio"
      },
      options: ["vertical", "horizontal"]
    },
    options: {
      control: {
        type: "object"
      }
    },
    onChange: {
      action: "onChange"
    }
  }
}`,...(t=(i=n.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var s,c,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "CheckboxCardWithLabel",
  render: ({
    ...args
  }) => <CheckboxCard {...args} />,
  args: {
    type: "vertical",
    labelGroup: "Quelle ville ?",
    descriptionGroup: "Choisissez une ville",
    isRequired: true,
    options: [{
      label: "Paris",
      description: "Capitale de la France",
      subtitle: "Nord",
      name: "paris",
      value: "paris",
      icon: homeIcons
    }, {
      label: "Bruxelles",
      description: "Capitale de la Belgique",
      name: "bruxelles",
      value: "bruxelles",
      hasError: true,
      icon: homeIcons
    }, {
      label: "Lille",
      name: "lille",
      value: "lille",
      icon: homeIcons,
      checked: true
    }]
  },
  argTypes: {
    type: {
      control: {
        type: "inline-radio"
      },
      options: ["vertical", "horizontal"]
    },
    options: {
      control: {
        type: "object"
      }
    },
    onChange: {
      action: "onChange"
    }
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const b=["CheckboxCardStory","CheckboxSelectWithLabel"],g=Object.freeze(Object.defineProperty({__proto__:null,CheckboxCardStory:n,CheckboxSelectWithLabel:o,__namedExportsOrder:b,default:d},Symbol.toStringTag,{value:"Module"}));export{g as C,n as a};
