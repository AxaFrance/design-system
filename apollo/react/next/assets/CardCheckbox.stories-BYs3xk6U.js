import{j as i}from"./index-DK-fRI8B.js";import{C as a}from"./DropdownCommon-H9kfMSGC.js";import"./index-DbaA8R3S.js";import{h as e}from"./home-BuLaEOyh.js";const m={title:"Components/Form/Checkbox/CardCheckbox",component:a,argTypes:{}},r={name:"CardCheckbox",render:({...n})=>i.jsx(a,{...n}),args:{type:"vertical",isRequired:!0,options:[{label:"Paris",description:"Capitale de la France",subtitle:"Nord",name:"paris",value:"paris",icon:e},{label:"Bruxelles",description:"Capitale de la Belgique",name:"bruxelles",value:"bruxelles",icon:e},{label:"Lille",description:"Capitale du Nord",name:"lille",value:"lille",icon:e}]},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},options:{control:{type:"object"}},onChange:{action:"onChange"}}},o={name:"CardCheckboxWithLabel",render:({...n})=>i.jsx(a,{...n}),args:{type:"vertical",labelGroup:"Quelle ville ?",descriptionGroup:"Choisissez une ville",isRequired:!0,error:"",options:[{label:"Paris",description:"Capitale de la France",subtitle:"Nord",name:"paris",value:"paris",icon:e},{label:"Bruxelles",description:"Capitale de la Belgique",name:"bruxelles",value:"bruxelles",icon:e},{label:"Lille",description:"Capitale du Nord",name:"lille",value:"lille",icon:e}]},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},options:{control:{type:"object"}},onChange:{action:"onChange"}}},l={name:"CardCheckboxWithError",render:({...n})=>i.jsx(a,{...n}),args:{type:"vertical",labelGroup:"Quelle ville ?",descriptionGroup:"Choisissez une ville",isRequired:!0,error:"There is an error",options:[{label:"Paris",description:"Capitale de la France",subtitle:"Nord",name:"paris",value:"paris",icon:e},{label:"Bruxelles",description:"Capitale de la Belgique",name:"bruxelles",value:"bruxelles",hasError:!0,icon:e},{label:"Lille",description:"Capitale du Nord",name:"lille",value:"lille",icon:e}]},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},options:{control:{type:"object"}},onChange:{action:"onChange"}}};var t,s,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "CardCheckbox",
  render: ({
    ...args
  }) => <CardCheckbox {...args} />,
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
      description: "Capitale du Nord",
      name: "lille",
      value: "lille",
      icon: homeIcons
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
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "CardCheckboxWithLabel",
  render: ({
    ...args
  }) => <CardCheckbox {...args} />,
  args: {
    type: "vertical",
    labelGroup: "Quelle ville ?",
    descriptionGroup: "Choisissez une ville",
    isRequired: true,
    error: "",
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
      description: "Capitale du Nord",
      name: "lille",
      value: "lille",
      icon: homeIcons
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var C,b,h;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "CardCheckboxWithError",
  render: ({
    ...args
  }) => <CardCheckbox {...args} />,
  args: {
    type: "vertical",
    labelGroup: "Quelle ville ?",
    descriptionGroup: "Choisissez une ville",
    isRequired: true,
    error: "There is an error",
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
      description: "Capitale du Nord",
      name: "lille",
      value: "lille",
      icon: homeIcons
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
}`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const x=["CardCheckboxStory","CardCheckboxWithLabel","CardCheckboxWithError"],j=Object.freeze(Object.defineProperty({__proto__:null,CardCheckboxStory:r,CardCheckboxWithError:l,CardCheckboxWithLabel:o,__namedExportsOrder:x,default:m},Symbol.toStringTag,{value:"Module"}));export{j as C,r as a};
