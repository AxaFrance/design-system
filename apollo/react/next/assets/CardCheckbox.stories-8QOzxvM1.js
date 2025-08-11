import{j as R}from"./index-C1mcBe1y.js";import{C as Q}from"./DropdownCommon-M41nR8ZR.js";import{r as C}from"./index-DbaA8R3S.js";import{h as p}from"./home-BuLaEOyh.js";const q={type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},options:{control:{type:"object"}},onChange:{action:"onChange"}},u=[{label:"Titre",description:"Sous-titre 1",subtitle:"Sous-titre 2",name:"paris",value:"paris",icon:p},{label:"Titre",description:"Sous-titre 1",subtitle:"Sous-titre 2",name:"bruxelles",value:"bruxelles",icon:p},{label:"Titre",description:"Sous-titre 1",subtitle:"Sous-titre 2",name:"lille",value:"lille",icon:p}],i={type:"vertical",isRequired:!0,error:"",options:u},I={title:"Components/Form/Checkbox/CardCheckbox",component:Q,argTypes:q,args:i},_=({options:e,...L})=>{const c=C.useRef(null);C.useEffect(()=>{var l,d;(d=(l=c==null?void 0:c.current)==null?void 0:l.focus)==null||d.call(l)},[]);const O=[{...e[0],ref:c},e[1],e[2]];return R.jsx(Q,{...L,options:O})},r={name:"CardCheckbox"},o={name:"CardCheckboxFocus",render:_},a={name:"CardCheckbox checked",args:{...i,options:u.map(e=>({...e,checked:!0}))}},s={name:"CardCheckboxWithLabel",args:{...i,labelGroup:"Quelle ville ?",descriptionGroup:"Choisissez une ville"}},t={name:"CardCheckboxWithError",args:{...i,labelGroup:"Quelle ville ?",descriptionGroup:"Choisissez une ville",error:"There is an error",options:u.map(e=>({...e,"aria-invalid":!0}))}},n={name:"CardCheckboxWithErrorFocus",render:_,args:{...i,labelGroup:"Quelle ville ?",descriptionGroup:"Choisissez une ville",error:"There is an error",options:u.map(e=>({...e,"aria-invalid":!0}))}};var h,m,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "CardCheckbox"
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var x,k,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "CardCheckboxFocus",
  render: renderFocus
}`,...(g=(k=o.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var v,f,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "CardCheckbox checked",
  args: {
    ...argsDefault,
    options: optionsDefault.map(option => ({
      ...option,
      checked: true
    }))
  }
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var F,W,y;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "CardCheckboxWithLabel",
  args: {
    ...argsDefault,
    labelGroup: "Quelle ville ?",
    descriptionGroup: "Choisissez une ville"
  }
}`,...(y=(W=s.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var E,G,D;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "CardCheckboxWithError",
  args: {
    ...argsDefault,
    labelGroup: "Quelle ville ?",
    descriptionGroup: "Choisissez une ville",
    error: "There is an error",
    options: optionsDefault.map(option => ({
      ...option,
      "aria-invalid": true
    }))
  }
}`,...(D=(G=t.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var T,z,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "CardCheckboxWithErrorFocus",
  render: renderFocus,
  args: {
    ...argsDefault,
    labelGroup: "Quelle ville ?",
    descriptionGroup: "Choisissez une ville",
    error: "There is an error",
    options: optionsDefault.map(option => ({
      ...option,
      "aria-invalid": true
    }))
  }
}`,...(j=(z=n.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const M=["CardCheckboxStory","CardCheckboxFocus","CardCheckboxStoryChecked","CardCheckboxWithLabel","CardCheckboxWithError","CardCheckboxWithErrorFocus"],H=Object.freeze(Object.defineProperty({__proto__:null,CardCheckboxFocus:o,CardCheckboxStory:r,CardCheckboxStoryChecked:a,CardCheckboxWithError:t,CardCheckboxWithErrorFocus:n,CardCheckboxWithLabel:s,__namedExportsOrder:M,default:I},Symbol.toStringTag,{value:"Module"}));export{H as C,r as a};
