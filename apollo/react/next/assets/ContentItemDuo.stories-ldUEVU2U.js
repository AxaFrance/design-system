import{j as e}from"./index-C-iqcyhV.js";import{g as y,q as L}from"./TimelineVerticalApollo-BcCoB91w.js";import{r as N}from"./index-ZnYipkzV.js";const S=({label:s,value:t,isVertical:i=!1,className:l,classModifier:c,buttonText:u,onButtonClick:_,ButtonComponent:h,...I})=>{const b=N.useMemo(()=>{const d=[c];return i&&d.push("vertical"),y("af-content-item-duo",l,d.filter(Boolean).join(" "))},[c,l,i]);return e.jsxs("div",{className:b,...I,children:[e.jsx("p",{className:"af-content-item-duo__label",children:s}),typeof t=="string"?e.jsx("p",{className:"af-content-item-duo__value",children:t}):e.jsx("div",{className:"af-content-item-duo__value",children:t}),u?e.jsx("div",{className:"af-content-item-duo__button",children:e.jsx(h,{variant:"ghost",onClick:_,children:u})}):null]})},a=s=>e.jsx(S,{...s,ButtonComponent:L}),A={title:"Components/List/ContentItemDuo",component:a},D={isVertical:!1,label:"Libellé",value:"Réponse",buttonText:"En savoir plus"},E={isVertical:!0,label:"Le choc de véhicules terrestres à moteur, (voiture, trottinette à moteur…) ou la chute d’appareils aériens (avions, hélicoptères…) avec un propriétaire du véhicule adverse identifié ?",value:"Les incendies, explosions, implosions, fumée et foudre",buttonText:"En savoir plus",classModifier:[]},o={render:({classModifier:s,...t})=>e.jsx(a,{classModifier:s.join(" "),...t}),args:{...D,classModifier:["small"]}},r={render:({classModifier:s,...t})=>e.jsx(a,{classModifier:s.join(" "),...t}),args:{...D,classModifier:["large"]}},n={render:({classModifier:s,...t})=>e.jsx(a,{classModifier:s.join(" "),...t}),args:E,argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}};var m,p,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    classModifier,
    ...args
  }) => <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />,
  args: {
    ...defaultArgs,
    classModifier: ["small"]
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,j,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    classModifier,
    ...args
  }) => <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />,
  args: {
    ...defaultArgs,
    classModifier: ["large"]
  }
}`,...(C=(j=r.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var M,v,x;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const V=["ContentItemDuoDefault","ContentItemDuoLarge","ContentItemDuoVertical"],R=Object.freeze(Object.defineProperty({__proto__:null,ContentItemDuoDefault:o,ContentItemDuoLarge:r,ContentItemDuoVertical:n,__namedExportsOrder:V,default:A},Symbol.toStringTag,{value:"Module"}));export{R as C,o as a,r as b,n as c};
