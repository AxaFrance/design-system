import{j as r}from"./index-C1mcBe1y.js";import"./TimelineVerticalLF-BB631D9_.js";import"./ProgressBarCommon-_6RIV1Pi.js";import"./constants-P7VmXbFC.js";import"./index-DbaA8R3S.js";import{C as t}from"./ContentItemDuoLF-B1TjTGDs.js";import{L as S}from"./List-CJ9lhPVI.js";const _={title:"Components/List/ContentItemDuo",component:t},m={isVertical:!1,label:"Libellé",value:"Réponse",buttonText:"En savoir plus",classModifier:[]},h={isVertical:!0,label:"Le choc de véhicules terrestres à moteur, (voiture, trottinette à moteur…) ou la chute d’appareils aériens (avions, hélicoptères…) avec un propriétaire du véhicule adverse identifié ?",value:"Les incendies, explosions, implosions, fumée et foudre",buttonText:"En savoir plus",classModifier:[]},n={render:({classModifier:s,...e})=>r.jsx(t,{classModifier:s.join(" "),...e}),args:{...m,classModifier:["small"]}},a={render:({classModifier:s,...e})=>r.jsx(t,{classModifier:s.join(" "),...e}),args:{...m,classModifier:["large"]}},o={render:({classModifier:s,...e})=>r.jsx(t,{classModifier:s.join(" "),...e}),args:h,argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}},l={name:"Default ContentItemDuo List",render:({classModifier:s,items:e})=>r.jsx(S,{classModifier:s.join(" "),children:e.map(({classModifier:c,...i})=>r.jsx(t,{classModifier:c.join(" "),...i},i.id))}),args:{items:Array.from({length:3},(s,e)=>({id:e.toString(),...m})),classModifier:["extra-padding"]},argTypes:{classModifier:{options:["extra-padding","large"],control:{type:"multi-select"},defaultValue:["extra-padding"]}}},d={name:"Vertical ContentItemDuo List",render:({classModifier:s,items:e})=>r.jsx(S,{classModifier:s.join(" "),children:e.map(({classModifier:c,...i})=>r.jsx(t,{classModifier:c.join(" "),...i},i.id))}),args:{items:Array.from({length:3},(s,e)=>({id:e.toString(),...h})),classModifier:["extra-padding"]},argTypes:{classModifier:{options:["extra-padding","large"],control:{type:"multi-select"},defaultValue:["extra-padding"]}}};var u,f,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    classModifier,
    ...args
  }) => <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />,
  args: {
    ...defaultArgs,
    classModifier: ["small"]
  }
}`,...(p=(f=n.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var g,M,C;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    classModifier,
    ...args
  }) => <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />,
  args: {
    ...defaultArgs,
    classModifier: ["large"]
  }
}`,...(C=(M=a.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var D,x,j;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var I,y,L;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(L=(y=l.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var A,V,v;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(v=(V=d.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};const b=["ContentItemDuoDefault","ContentItemDuoLarge","ContentItemDuoVertical","DefaultContentItemDuoList","VerticalContentItemDuoList"],q=Object.freeze(Object.defineProperty({__proto__:null,ContentItemDuoDefault:n,ContentItemDuoLarge:a,ContentItemDuoVertical:o,DefaultContentItemDuoList:l,VerticalContentItemDuoList:d,__namedExportsOrder:b,default:_},Symbol.toStringTag,{value:"Module"}));export{q as C,l as D,d as V,n as a,a as b,o as c};
