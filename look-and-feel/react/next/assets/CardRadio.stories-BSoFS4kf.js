import{j as g}from"./index-C1mcBe1y.js";import{a as l}from"./DropdownCommon-DZvgLZEH.js";import"./index-DbaA8R3S.js";import{h as v}from"./home-BuLaEOyh.js";const b={title:"Components/Form/Radio/CardRadio",component:l,argTypes:{}},o=[{label:"Paris",description:"Capitale de la France",subtitle:"Nord",value:"paris"},{label:"Bruxelles",description:"Capitale de la Belgique",value:"bruxelles"},{label:"Lille",value:"lille"}],e={name:"Select",render:({includeIcons:n=!0,options:t=o,...a})=>{const r=t.map(s=>({...s,...n&&{icon:v}}));return g.jsx(l,{...a,options:r})},args:{type:"vertical","aria-label":"Quelle ville ?",options:o,name:"cities",includeIcons:!0},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},includeIcons:{control:{type:"boolean"},description:"Toggle icons visibility"},options:{control:{type:"object"},description:"Radio card options"},onChange:{action:"onChange"},value:{control:{type:"select"},options:o.map(n=>n.value)}}},i={name:"SelectWithLabel",render:({includeIcons:n=!0,options:t=o,...a})=>{const r=t.map(s=>({...s,...n&&{icon:v}}));return g.jsx(l,{...a,options:r})},args:{type:"vertical",isRequired:!0,options:o,name:"cities",includeIcons:!0,labelGroup:"Choisissez une ville",descriptionGroup:"Sélectionnez la ville de votre choix parmi les options suivantes"},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},includeIcons:{control:{type:"boolean"},description:"Toggle icons visibility"},options:{control:{type:"object"},description:"Radio card options"},onChange:{action:"onChange"},value:{control:{type:"select"},options:o.map(n=>n.value)}}};var p,c,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Select",
  render: ({
    includeIcons = true,
    options = defaultOptions,
    ...args
  }) => {
    const finalOptions = options.map(option => ({
      ...option,
      ...(includeIcons && {
        icon: home
      })
    }));
    return <CardRadio {...args} options={finalOptions} />;
  },
  args: {
    type: "vertical",
    "aria-label": "Quelle ville ?",
    options: defaultOptions,
    name: "cities",
    includeIcons: true
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
      description: "Toggle icons visibility"
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
      options: defaultOptions.map(option => option.value)
    }
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,m,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "SelectWithLabel",
  render: ({
    includeIcons = true,
    options = defaultOptions,
    ...args
  }) => {
    const finalOptions = options.map(option => ({
      ...option,
      ...(includeIcons && {
        icon: home
      })
    }));
    return <CardRadio {...args} options={finalOptions} />;
  },
  args: {
    type: "vertical",
    isRequired: true,
    options: defaultOptions,
    name: "cities",
    includeIcons: true,
    labelGroup: "Choisissez une ville",
    descriptionGroup: "Sélectionnez la ville de votre choix parmi les options suivantes"
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
      description: "Toggle icons visibility"
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
      options: defaultOptions.map(option => option.value)
    }
  }
}`,...(y=(m=i.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const h=["CardRadioStory","CardRadioWithLabel"],S=Object.freeze(Object.defineProperty({__proto__:null,CardRadioStory:e,CardRadioWithLabel:i,__namedExportsOrder:h,default:b},Symbol.toStringTag,{value:"Module"}));export{S as C,e as a};
