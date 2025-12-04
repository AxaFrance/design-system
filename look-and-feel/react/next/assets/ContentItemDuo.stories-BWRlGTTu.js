import{j as e}from"./index-C-iqcyhV.js";import{g as y,m as L}from"./ClickIconApollo-BCBKEBAR.js";import{r as N}from"./index-ZnYipkzV.js";const S=({label:s,value:o,isVertical:i=!1,className:l,classModifier:c,buttonText:u,onButtonClick:_,ButtonComponent:h,...I})=>{const b=N.useMemo(()=>{const d=[c];return i&&d.push("vertical"),y("af-content-item-duo",l,d.filter(Boolean).join(" "))},[c,l,i]);return e.jsxs("div",{className:b,...I,children:[e.jsx("p",{className:"af-content-item-duo__label",children:s}),typeof o=="string"?e.jsx("p",{className:"af-content-item-duo__value",children:o}):e.jsx("div",{className:"af-content-item-duo__value",children:o}),u?e.jsx("div",{className:"af-content-item-duo__button",children:e.jsx(h,{variant:"ghost",onClick:_,children:u})}):null]})},a=s=>e.jsx(S,{...s,ButtonComponent:L}),A={title:"Components/List/ContentItemDuo",component:a},D={isVertical:!1,label:"Libellé",value:"Réponse",buttonText:"En savoir plus",classModifier:[]},E={isVertical:!0,label:"Le choc de véhicules terrestres à moteur, (voiture, trottinette à moteur…) ou la chute d’appareils aériens (avions, hélicoptères…) avec un propriétaire du véhicule adverse identifié ?",value:"Les incendies, explosions, implosions, fumée et foudre",buttonText:"En savoir plus",classModifier:[]},t={render:({classModifier:s,...o})=>e.jsx(a,{classModifier:s.join(" "),...o}),args:{...D,classModifier:["small"]}},r={render:({classModifier:s,...o})=>e.jsx(a,{classModifier:s.join(" "),...o}),args:{...D,classModifier:["large"]}},n={render:({classModifier:s,...o})=>e.jsx(a,{classModifier:s.join(" "),...o}),args:E,argTypes:{classModifier:{options:["large"],control:{type:"multi-select"},defaultValue:[]}}};var m,f,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: ({
    classModifier,
    ...args
  }) => <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />,
  args: {
    ...defaultArgs,
    classModifier: ["small"]
  }
}`,...(p=(f=t.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var g,M,j;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    classModifier,
    ...args
  }) => <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />,
  args: {
    ...defaultArgs,
    classModifier: ["large"]
  }
}`,...(j=(M=r.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var C,v,x;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const V=["ContentItemDuoDefault","ContentItemDuoLarge","ContentItemDuoVertical"],R=Object.freeze(Object.defineProperty({__proto__:null,ContentItemDuoDefault:t,ContentItemDuoLarge:r,ContentItemDuoVertical:n,__namedExportsOrder:V,default:A},Symbol.toStringTag,{value:"Module"}));export{R as C,t as a,r as b,n as c};
