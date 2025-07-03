import{j as b}from"./index-DK-fRI8B.js";import{a as p}from"./DropdownCommon-CC9nGncv.js";import"./index-DbaA8R3S.js";import{h as g}from"./home-BuLaEOyh.js";const v={title:"Components/Form/Radio/CardRadio",component:p,argTypes:{}},o=[{label:"Paris",description:"Capitale de la France",subtitle:"Nord",value:"paris"},{label:"Bruxelles",description:"Capitale de la Belgique",value:"bruxelles"},{label:"Lille",value:"lille"}],e={name:"CardRadio",render:({includeIcons:n=!0,options:i=o,...a})=>{const r=i.map(s=>({...s,...n&&{icon:g}}));return b.jsx(p,{...a,options:r})},args:{type:"vertical","aria-label":"Quelle ville ?",name:"cities",includeIcons:!0,options:o},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},includeIcons:{control:{type:"boolean"},description:"Toggle icon visibility"},options:{control:{type:"object"},description:"Radio card options"},onChange:{action:"onChange"},value:{control:{type:"select"},options:o.map(n=>n.value)}}},t={name:"CardRadioWithLabel",render:({includeIcons:n=!0,options:i=o,...a})=>{const r=i.map(s=>({...s,...n&&{icon:g}}));return b.jsx(p,{...a,options:r})},args:{type:"vertical",isRequired:!0,name:"cities",includeIcons:!0,options:o,labelGroup:"Choose your city",descriptionGroup:"Select the city where you want to live"},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},includeIcons:{control:{type:"boolean"},description:"Toggle icon visibility"},options:{control:{type:"object"},description:"Radio card options"},onChange:{action:"onChange"},value:{control:{type:"select"},options:o.map(n=>n.value)}}};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    },
    value: {
      control: {
        type: "select"
      },
      options: baseOptions.map(option => option.value)
    }
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,m,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    },
    value: {
      control: {
        type: "select"
      },
      options: baseOptions.map(option => option.value)
    }
  }
}`,...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const C=["CardRadioStory","CardRadioWithLabel"],j=Object.freeze(Object.defineProperty({__proto__:null,CardRadioStory:e,CardRadioWithLabel:t,__namedExportsOrder:C,default:v},Symbol.toStringTag,{value:"Module"}));export{j as C,e as a};
