import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./TimelineVerticalLF-CftmzlYV.js";import"./constants-BRW2L1CY.js";import"./index-DuZrfDUH.js";import{L as I}from"./List-B6y1VM7X.js";import{C as l}from"./ContentItemDuo-BpBQE5ml.js";const h={title:"Components/List/ContentItemDuo",component:l},L={isVertical:!1,label:"Libellé",value:"Réponse",isShowingDoneIcon:!0,isShowingCloseIcon:!1,buttonText:"En savoir plus",classModifier:[]},V={isVertical:!0,label:"Le choc de véhicules terrestres à moteur, (voiture, trottinette à moteur…) ou la chute d’appareils aériens (avions, hélicoptères…) avec un propriétaire du véhicule adverse identifié ?",value:"Les incendies, explosions, implosions, fumée et foudre",isShowingDoneIcon:!0,isShowingCloseIcon:!1,buttonText:"En savoir plus",classModifier:[]},r={render:({classModifier:s,...e})=>t.jsx(l,{classModifier:s.join(" "),...e}),args:L,argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}},n={render:({classModifier:s,...e})=>t.jsx(l,{classModifier:s.join(" "),...e}),args:V,argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}},o={name:"Default ContentItemDuo List",render:({classModifier:s,items:e})=>t.jsx(I,{classModifier:s.join(" "),children:e.map(({classModifier:d,...i})=>t.jsx(l,{classModifier:d.join(" "),...i},i.id))}),args:{items:Array.from({length:3},(s,e)=>({id:e.toString(),...L})),classModifier:["extra-padding"]},argTypes:{classModifier:{options:["extra-padding","large"],control:{type:"multi-select"},defaultValue:["extra-padding"]}}},a={name:"Vertical ContentItemDuo List",render:({classModifier:s,items:e})=>t.jsx(I,{classModifier:s.join(" "),children:e.map(({classModifier:d,...i})=>t.jsx(l,{classModifier:d.join(" "),...i},i.id))}),args:{items:Array.from({length:3},(s,e)=>({id:e.toString(),...V})),classModifier:["extra-padding"]},argTypes:{classModifier:{options:["extra-padding","large"],control:{type:"multi-select"},defaultValue:["extra-padding"]}}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    classModifier,
    ...args
  }) => <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />,
  args: defaultArgs,
  argTypes: {
    classModifier: {
      options: ["large"],
      control: {
        type: "multi-select"
      },
      defaultValue: []
    }
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,f,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    classModifier,
    ...args
  }) => <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />,
  args: verticalArgs,
  argTypes: {
    classModifier: {
      options: ["large"],
      control: {
        type: "multi-select"
      },
      defaultValue: []
    }
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var M,x,y;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Default ContentItemDuo List",
  render: ({
    classModifier,
    items
  }) => <List classModifier={classModifier.join(" ")}>
      {items.map(({
      classModifier: itemClassModifier,
      ...itemArgs
    }) => <ContentItemDuo key={itemArgs.id} classModifier={itemClassModifier.join(" ")} {...itemArgs} />)}
    </List>,
  args: {
    items: Array.from({
      length: 3
    }, (_, i) => ({
      id: i.toString(),
      ...defaultArgs
    })),
    classModifier: ["extra-padding"]
  },
  argTypes: {
    classModifier: {
      options: ["extra-padding", "large"],
      control: {
        type: "multi-select"
      },
      defaultValue: ["extra-padding"]
    }
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var C,D,j;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Vertical ContentItemDuo List",
  render: ({
    classModifier,
    items
  }) => <List classModifier={classModifier.join(" ")}>
      {items.map(({
      classModifier: itemClassModifier,
      ...itemArgs
    }) => <ContentItemDuo key={itemArgs.id} classModifier={itemClassModifier.join(" ")} {...itemArgs} />)}
    </List>,
  args: {
    items: Array.from({
      length: 3
    }, (_, i) => ({
      id: i.toString(),
      ...verticalArgs
    })),
    classModifier: ["extra-padding"]
  },
  argTypes: {
    classModifier: {
      options: ["extra-padding", "large"],
      control: {
        type: "multi-select"
      },
      defaultValue: ["extra-padding"]
    }
  }
}`,...(j=(D=a.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const S=["Default","Vertical","DefaultContentItemDuoList","VerticalContentItemDuoList"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:r,DefaultContentItemDuoList:o,Vertical:n,VerticalContentItemDuoList:a,__namedExportsOrder:S,default:h},Symbol.toStringTag,{value:"Module"}));export{E as C,r as D,n as V,o as a,a as b};
