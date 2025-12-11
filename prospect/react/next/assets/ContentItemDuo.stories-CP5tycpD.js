import{j as n}from"./index-C-iqcyhV.js";import"./ListApollo-BwnpeBhn.js";import"./index-ZnYipkzV.js";import{C as a}from"./ContentItemDuoApollo-oOC4ooNB.js";const C={title:"Components/List/ContentItemDuo",component:a},M={isVertical:!1,label:"Libellé",value:"Réponse",buttonText:"En savoir plus"},D={isVertical:!0,label:"Le choc de véhicules terrestres à moteur, (voiture, trottinette à moteur…) ou la chute d’appareils aériens (avions, hélicoptères…) avec un propriétaire du véhicule adverse identifié ?",value:"Les incendies, explosions, implosions, fumée et foudre",buttonText:"En savoir plus",classModifier:[]},s={render:({classModifier:e,...r})=>n.jsx(a,{classModifier:e.join(" "),...r}),args:{...M,classModifier:["small"]}},o={render:({classModifier:e,...r})=>n.jsx(a,{classModifier:e.join(" "),...r}),args:{...M,classModifier:["large"]}},t={render:({classModifier:e,...r})=>n.jsx(a,{classModifier:e.join(" "),...r}),args:D,argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}};var i,l,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: ({
    classModifier,
    ...args
  }) => <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />,
  args: {
    ...defaultArgs,
    classModifier: ["small"]
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,d,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: ({
    classModifier,
    ...args
  }) => <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />,
  args: {
    ...defaultArgs,
    classModifier: ["large"]
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,f,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const j=["ContentItemDuoDefault","ContentItemDuoLarge","ContentItemDuoVertical"],y=Object.freeze(Object.defineProperty({__proto__:null,ContentItemDuoDefault:s,ContentItemDuoLarge:o,ContentItemDuoVertical:t,__namedExportsOrder:j,default:C},Symbol.toStringTag,{value:"Module"}));export{y as C,s as a,o as b,t as c};
