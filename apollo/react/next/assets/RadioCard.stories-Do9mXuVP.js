import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{f as p}from"./ToggleCommon-Ct-wwdGG.js";import"./index-DuZrfDUH.js";import{h as b}from"./home-BuLaEOyh.js";const h={title:"Components/Form/Radio/RadioCard",component:p,argTypes:{}},e=[{label:"Paris",description:"Capitale de la France",subtitle:"Nord",value:"paris"},{label:"Bruxelles",description:"Capitale de la Belgique",value:"bruxelles",hasError:!0},{label:"Lille",value:"lille"}],n={name:"Select",render:({includeIcons:t=!0,options:i=e,...r})=>{const a=i.map(s=>({...s,...t&&{icon:b}}));return g.jsx(p,{...r,options:a})},args:{type:"vertical","aria-label":"Quelle ville ?",name:"cities",includeIcons:!0,options:e},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},includeIcons:{control:{type:"boolean"},description:"Toggle icon visibility"},options:{control:{type:"object"},description:"Radio card options"},onChange:{action:"onChange"}}},o={name:"SelectWithLabel",render:({includeIcons:t=!0,options:i=e,...r})=>{const a=i.map(s=>({...s,...t&&{icon:b}}));return g.jsx(p,{...r,options:a})},args:{type:"vertical",isRequired:!0,name:"cities",includeIcons:!0,options:e,labelGroup:"Choose your city",descriptionGroup:"Select the city where you want to live"},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},includeIcons:{control:{type:"boolean"},description:"Toggle icon visibility"},options:{control:{type:"object"},description:"Radio card options"},onChange:{action:"onChange"}}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Select",
  render: ({
    includeIcons = true,
    options = baseOptions,
    ...args
  }) => {
    const mappedOptions = options.map(option => ({
      ...option,
      ...(includeIcons && {
        icon: home
      })
    }));
    return <RadioCard {...args} options={mappedOptions} />;
  },
  args: {
    type: "vertical",
    "aria-label": "Quelle ville ?",
    name: "cities",
    includeIcons: true,
    options: baseOptions
  },
  argTypes: {
    type: {
      control: {
        type: "inline-radio"
      },
      options: ["vertical", "horizontal"]
    },
    includeIcons: {
      control: {
        type: "boolean"
      },
      description: "Toggle icon visibility"
    },
    options: {
      control: {
        type: "object"
      },
      description: "Radio card options"
    },
    onChange: {
      action: "onChange"
    }
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,m,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "SelectWithLabel",
  render: ({
    includeIcons = true,
    options = baseOptions,
    ...args
  }) => {
    const mappedOptions = options.map(option => ({
      ...option,
      ...(includeIcons && {
        icon: home
      })
    }));
    return <RadioCard {...args} options={mappedOptions} />;
  },
  args: {
    type: "vertical",
    isRequired: true,
    name: "cities",
    includeIcons: true,
    options: baseOptions,
    labelGroup: "Choose your city",
    descriptionGroup: "Select the city where you want to live"
  },
  argTypes: {
    type: {
      control: {
        type: "inline-radio"
      },
      options: ["vertical", "horizontal"]
    },
    includeIcons: {
      control: {
        type: "boolean"
      },
      description: "Toggle icon visibility"
    },
    options: {
      control: {
        type: "object"
      },
      description: "Radio card options"
    },
    onChange: {
      action: "onChange"
    }
  }
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const C=["RadioCardStory","RadioCardWithLabel"],S=Object.freeze(Object.defineProperty({__proto__:null,RadioCardStory:n,RadioCardWithLabel:o,__namedExportsOrder:C,default:h},Symbol.toStringTag,{value:"Module"}));export{S as R,n as a};
