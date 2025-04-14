import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./MessageLF-DdJybLL5.js";import{S as n}from"./constants-BP85GAnv.js";import"./index-DuZrfDUH.js";import{C as t}from"./CheckboxSelect-o1P9eE0d.js";import{h as l}from"./home-BuLaEOyh.js";import"./_commonjsHelpers-CqkleIqs.js";const y={title:"Components/Form/Input/Checkbox/Select",component:t,argTypes:{}},r={name:"Select",render:({...a})=>e.jsx(t,{...a}),args:{type:"vertical",isRequired:!0,options:[{label:"Paris",description:"Capitale de la France",subtitle:"Nord",name:"paris",value:"paris",icon:e.jsx(n,{src:l})},{label:"Bruxelles",description:"Capitale de la Belgique",name:"bruxelles",value:"bruxelles",icon:e.jsx(n,{src:l})},{label:"Lille",name:"lille",value:"lille",icon:e.jsx(n,{src:l}),disabled:!0,checked:!0}]},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},options:{control:{type:"object"}},errorMessage:{control:{type:"text"}},onChange:{action:"onChange"}}},o={name:"SelectWithLabel",render:({...a})=>e.jsx(t,{...a}),args:{type:"vertical",labelGroup:"Quelle ville ?",descriptionGroup:"Choisissez une ville",isRequired:!0,options:[{label:"Paris",description:"Capitale de la France",subtitle:"Nord",name:"paris",value:"paris",icon:e.jsx(n,{src:l})},{label:"Bruxelles",description:"Capitale de la Belgique",name:"bruxelles",value:"bruxelles",icon:e.jsx(n,{src:l})},{label:"Lille",name:"lille",value:"lille",icon:e.jsx(n,{src:l}),disabled:!0,checked:!0}]},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},options:{control:{type:"object"}},errorMessage:{control:{type:"text"}},onChange:{action:"onChange"}}};var i,s,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Select",
  render: ({
    ...args
  }) => <CheckboxSelect {...args} />,
  args: {
    type: "vertical",
    isRequired: true,
    options: [{
      label: "Paris",
      description: "Capitale de la France",
      subtitle: "Nord",
      name: "paris",
      value: "paris",
      icon: <Svg src={home} />
    }, {
      label: "Bruxelles",
      description: "Capitale de la Belgique",
      name: "bruxelles",
      value: "bruxelles",
      icon: <Svg src={home} />
    }, {
      label: "Lille",
      name: "lille",
      value: "lille",
      icon: <Svg src={home} />,
      disabled: true,
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
    errorMessage: {
      control: {
        type: "text"
      }
    },
    onChange: {
      action: "onChange"
    }
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,u,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "SelectWithLabel",
  render: ({
    ...args
  }) => <CheckboxSelect {...args} />,
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
      icon: <Svg src={home} />
    }, {
      label: "Bruxelles",
      description: "Capitale de la Belgique",
      name: "bruxelles",
      value: "bruxelles",
      icon: <Svg src={home} />
    }, {
      label: "Lille",
      name: "lille",
      value: "lille",
      icon: <Svg src={home} />,
      disabled: true,
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
    errorMessage: {
      control: {
        type: "text"
      }
    },
    onChange: {
      action: "onChange"
    }
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const S=["CheckboxSelectStory","CheckboxSelectWithLabel"];export{r as CheckboxSelectStory,o as CheckboxSelectWithLabel,S as __namedExportsOrder,y as default};
