import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as b}from"./CheckboxCardApollo-CXMmk4K0.js";import{r as y}from"./index-DuZrfDUH.js";import{B as L}from"./ButtonCommon-CUS_dJDC.js";const N=({label:s,value:t,isVertical:i=!1,className:l,classModifier:c,buttonText:u,onButtonClick:_,ButtonComponent:h})=>{const I=y.useMemo(()=>{const d=[c];return i&&d.push("vertical"),b("af-content-item-duo",l,d.filter(Boolean).join(" "))},[c,l,i]);return e.jsxs("div",{className:I,children:[e.jsx("p",{className:"af-content-item-duo__label",children:s}),typeof t=="string"?e.jsx("p",{className:"af-content-item-duo__value",children:t}):e.jsx("div",{className:"af-content-item-duo__value",children:t}),u&&e.jsx("div",{className:"af-content-item-duo__button",children:e.jsx(h,{variant:"ghost",onClick:_,children:u})})]})},a=s=>e.jsx(N,{...s,ButtonComponent:L}),S={title:"Components/List/ContentItemDuo",component:a},D={isVertical:!1,label:"Libellé",value:"Réponse",buttonText:"En savoir plus"},A={isVertical:!0,label:"Le choc de véhicules terrestres à moteur, (voiture, trottinette à moteur…) ou la chute d’appareils aériens (avions, hélicoptères…) avec un propriétaire du véhicule adverse identifié ?",value:"Les incendies, explosions, implosions, fumée et foudre",buttonText:"En savoir plus",classModifier:[]},o={render:({classModifier:s,...t})=>e.jsx(a,{classModifier:s.join(" "),...t}),args:{...D,classModifier:["small"]}},r={render:({classModifier:s,...t})=>e.jsx(a,{classModifier:s.join(" "),...t}),args:{...D,classModifier:["large"]}},n={render:({classModifier:s,...t})=>e.jsx(a,{classModifier:s.join(" "),...t}),args:A,argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}};var m,p,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    classModifier,
    ...args
  }) => <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />,
  args: {
    ...defaultArgs,
    classModifier: ["small"]
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,j,M;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    classModifier,
    ...args
  }) => <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />,
  args: {
    ...defaultArgs,
    classModifier: ["large"]
  }
}`,...(M=(j=r.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var C,v,x;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const E=["ContentItemDuoDefault","ContentItemDuoLarge","ContentItemDuoVertical"],R=Object.freeze(Object.defineProperty({__proto__:null,ContentItemDuoDefault:o,ContentItemDuoLarge:r,ContentItemDuoVertical:n,__namedExportsOrder:E,default:S},Symbol.toStringTag,{value:"Module"}));export{R as C,o as a,r as b,n as c};
