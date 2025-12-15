import{j as e}from"./index-C-iqcyhV.js";import{t as h}from"./LevelSelectorApollo-BARos0Xa.js";import{r as m}from"./index-ZnYipkzV.js";import{C as b}from"./CardCommon-D4SL-ATU.js";const w="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M450-450H230q-12.75%200-21.37-8.68-8.63-8.67-8.63-21.5%200-12.82%208.63-21.32%208.62-8.5%2021.37-8.5h220v-220q0-12.75%208.68-21.38%208.67-8.62%2021.5-8.62%2012.82%200%2021.32%208.62%208.5%208.63%208.5%2021.38v220h220q12.75%200%2021.38%208.68%208.62%208.67%208.62%2021.5%200%2012.82-8.62%2021.32-8.63%208.5-21.38%208.5H510v220q0%2012.75-8.68%2021.37-8.67%208.63-21.5%208.63-12.82%200-21.32-8.63-8.5-8.62-8.5-21.37v-220Z'/%3e%3c/svg%3e",y="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M230-450q-12.75%200-21.37-8.68-8.63-8.67-8.63-21.5%200-12.82%208.63-21.32%208.62-8.5%2021.37-8.5h500q12.75%200%2021.38%208.68%208.62%208.67%208.62%2021.5%200%2012.82-8.62%2021.32-8.63%208.5-21.38%208.5H230Z'/%3e%3c/svg%3e",S=({title:t,description:o,value:s=0,stepsCount:i=2,ClickIconComponent:c,CardComponent:x,minusAriaLabel:f="Diminuer le niveau",plusAriaLabel:g="Augmenter le niveau",onChange:l})=>{const n=m.useId(),_=Array.from({length:i},(r,j)=>j+1);return e.jsxs(x,{as:"fieldset",role:"radiogroup",className:"af-level-selector",children:[!!t&&e.jsx("legend",{className:"af-level-selector__title",children:t}),e.jsxs("div",{className:"af-level-selector__content",children:[e.jsx(c,{"aria-label":f,src:y,onClick:()=>l==null?void 0:l(s-1),disabled:s===0}),e.jsx("div",{className:"af-level-selector__group",children:_.map(r=>e.jsx("label",{className:`af-level-selector__radio ${r<=s?"af-level-selector__active":""}`,"aria-label":`Niveau ${r}`,children:e.jsx("input",{type:"radio",name:`level-selector-${n}`,"aria-describedby":`level-selector-${n}-description`,value:r,checked:r===s,onChange:()=>l==null?void 0:l(r)})},r))}),e.jsx(c,{"aria-label":g,src:w,onClick:()=>l==null?void 0:l(s+1),disabled:s===i})]}),!!o&&e.jsx("span",{id:`level-selector-${n}-description`,className:"af-level-selector__description","aria-live":"polite",children:o})]})},p=t=>e.jsx(S,{...t,ClickIconComponent:h,CardComponent:b}),q={title:"Components/LevelSelector",component:p},a={render:({...t})=>{const[o,s]=m.useState(t.value||0);return e.jsx("div",{style:{maxWidth:500},children:e.jsx(p,{...t,value:o,onChange:s})})},args:{stepsCount:3,title:"Titre du niveau actif",description:"Texte secondaire dynamique sur le niveau actif avec un contenu plus ou moins long selon le besoin",value:0},argTypes:{onChange:{action:"onClick"}}};var d,v,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    const [value, setValue] = useState(args.value || 0);
    return <div style={{
      maxWidth: 500
    }}>
        <LevelSelector {...args} value={value} onChange={setValue} />
      </div>;
  },
  args: {
    stepsCount: 3,
    title: "Titre du niveau actif",
    description: "Texte secondaire dynamique sur le niveau actif avec un contenu plus ou moins long selon le besoin",
    value: 0
  },
  argTypes: {
    onChange: {
      action: "onClick"
    }
  }
}`,...(u=(v=a.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};const N=["Default"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:N,default:q},Symbol.toStringTag,{value:"Module"}));export{a as D,B as L};
