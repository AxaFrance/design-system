import{j as y}from"./jsx-runtime-D_zvdyIk.js";import{a as l}from"./DropdownCommon-CyXZGl8m.js";import"./index-DuZrfDUH.js";import{h as b}from"./home-BuLaEOyh.js";const v={title:"Components/Form/Radio/CardRadio",component:l,argTypes:{}},e=[{label:"Paris",description:"Capitale de la France",subtitle:"Nord",value:"paris"},{label:"Bruxelles",description:"Capitale de la Belgique",value:"bruxelles",hasError:!0},{label:"Lille",value:"lille"}],n={name:"Select",render:({includeIcons:i=!0,options:t=e,...a})=>{const r=t.map(s=>({...s,...i&&{icon:b}}));return y.jsx(l,{...a,options:r})},args:{type:"vertical","aria-label":"Quelle ville ?",options:e,name:"cities",includeIcons:!0},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},includeIcons:{control:{type:"boolean"},description:"Toggle icons visibility"},options:{control:{type:"object"},description:"Radio card options"},onChange:{action:"onChange"}}},o={name:"SelectWithLabel",render:({includeIcons:i=!0,options:t=e,...a})=>{const r=t.map(s=>({...s,...i&&{icon:b}}));return y.jsx(l,{...a,options:r})},args:{type:"vertical",isRequired:!0,options:e,name:"cities",includeIcons:!0,labelGroup:"Choisissez une ville",descriptionGroup:"Sélectionnez la ville de votre choix parmi les options suivantes"},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},includeIcons:{control:{type:"boolean"},description:"Toggle icons visibility"},options:{control:{type:"object"},description:"Radio card options"},onChange:{action:"onChange"}}};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    }
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    }
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const h=["CardRadioStory","CardRadioWithLabel"],S=Object.freeze(Object.defineProperty({__proto__:null,CardRadioStory:n,CardRadioWithLabel:o,__namedExportsOrder:h,default:v},Symbol.toStringTag,{value:"Module"}));export{S as C,n as a};
