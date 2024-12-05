import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{h as n}from"./home-BuLaEOyh.js";import{S as l}from"./Svg-C4poEASt.js";import{C as t}from"./CheckboxSelect-FCKGgETg.js";import"./index-uubelm5h.js";import"./check_box_outline_blank-caNJpyLE.js";import"./error-BHKM2E7q.js";const C={title:"Components/Form/Input/Checkbox/Select",component:t,argTypes:{}},r={name:"Select",render:({...o})=>e.jsx(t,{...o}),args:{type:"vertical",isRequired:!0,options:[{label:"Paris",description:"Capitale de la France",subtitle:"Nord",name:"paris",value:"paris",icon:e.jsx(l,{src:n})},{label:"Bruxelles",description:"Capitale de la Belgique",name:"bruxelles",value:"bruxelles",icon:e.jsx(l,{src:n})},{label:"Lille",name:"lille",value:"lille",icon:e.jsx(l,{src:n}),disabled:!0,checked:!0}]},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},options:{control:{type:"object"}},errorMessage:{control:{type:"text"}},onChange:{action:"onChange"}}},a={name:"SelectWithLabel",render:({...o})=>e.jsx(t,{...o}),args:{type:"vertical",labelGroup:"Quelle ville ?",isRequired:!0,options:[{label:"Paris",description:"Capitale de la France",subtitle:"Nord",name:"paris",value:"paris",icon:e.jsx(l,{src:n})},{label:"Bruxelles",description:"Capitale de la Belgique",name:"bruxelles",value:"bruxelles",icon:e.jsx(l,{src:n})},{label:"Lille",name:"lille",value:"lille",icon:e.jsx(l,{src:n}),disabled:!0,checked:!0}]},argTypes:{type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},options:{control:{type:"object"}},errorMessage:{control:{type:"text"}},onChange:{action:"onChange"}}};var i,s,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "SelectWithLabel",
  render: ({
    ...args
  }) => <CheckboxSelect {...args} />,
  args: {
    type: "vertical",
    labelGroup: "Quelle ville ?",
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
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const S=["CheckboxSelectStory","CheckboxSelectWithLabel"];export{r as CheckboxSelectStory,a as CheckboxSelectWithLabel,S as __namedExportsOrder,C as default};
