import{j as g}from"./index-DK-fRI8B.js";import{a as p}from"./DropdownCommon-Du-N2swA.js";import"./index-DbaA8R3S.js";import{h as b}from"./home-BuLaEOyh.js";const h={title:"Components/Form/Radio/CardRadio",component:p,argTypes:{}},e=[{label:"Paris",description:"Capitale de la France",subtitle:"Nord",value:"paris"},{label:"Bruxelles",description:"Capitale de la Belgique",value:"bruxelles",hasError:!0},{label:"Lille",value:"lille"}],n={name:"CardRadio",render:({includeIcons:i=!0,options:t=e,...a})=>{const r=t.map(s=>({...s,...i&&{icon:b}}));return g.jsx(p,{...a,options:r})},args:{type:"vertical","aria-label":"Quelle ville ?",name:"cities",includeIcons:!0,options:e},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},includeIcons:{control:{type:"boolean"},description:"Toggle icon visibility"},options:{control:{type:"object"},description:"Radio card options"},onChange:{action:"onChange"}}},o={name:"CardRadioWithLabel",render:({includeIcons:i=!0,options:t=e,...a})=>{const r=t.map(s=>({...s,...i&&{icon:b}}));return g.jsx(p,{...a,options:r})},args:{type:"vertical",isRequired:!0,name:"cities",includeIcons:!0,options:e,labelGroup:"Choose your city",descriptionGroup:"Select the city where you want to live"},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},includeIcons:{control:{type:"boolean"},description:"Toggle icon visibility"},options:{control:{type:"object"},description:"Radio card options"},onChange:{action:"onChange"}}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "CardRadio",
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
    return <CardRadio {...args} options={mappedOptions} />;
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
  name: "CardRadioWithLabel",
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
    return <CardRadio {...args} options={mappedOptions} />;
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
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const C=["CardRadioStory","CardRadioWithLabel"],j=Object.freeze(Object.defineProperty({__proto__:null,CardRadioStory:n,CardRadioWithLabel:o,__namedExportsOrder:C,default:h},Symbol.toStringTag,{value:"Module"}));export{j as C,n as a};
