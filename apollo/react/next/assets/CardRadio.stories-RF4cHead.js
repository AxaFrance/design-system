import{j as q}from"./index-C1mcBe1y.js";import{a as z}from"./DropdownCommon-B7OeLS3-.js";import{r as g}from"./index-DbaA8R3S.js";import{h as l}from"./home-BuLaEOyh.js";const u=[{label:"Titre",description:"Sous-titre 1",subtitle:"Sous-titre 2",name:"city",value:"paris",icon:l},{label:"Titre",description:"Sous-titre 1",subtitle:"Sous-titre 2",name:"city",value:"bruxelles",icon:l},{label:"Titre",description:"Sous-titre 1",subtitle:"Sous-titre 2",name:"city",value:"lille",icon:l}],e={type:"vertical","aria-label":"Quelle ville ?",name:"cities",options:u},w={type:{control:{type:"inline-radio"},options:["vertical","horizontal"]},includeIcons:{control:{type:"boolean"},description:"Toggle icon visibility"},options:{control:{type:"object"},description:"Radio card options"},onChange:{action:"onChange"},value:{control:{type:"select"},options:u.map(r=>r.value)}},A={title:"Components/Form/Radio/CardRadio",component:z,argTypes:w,args:e},M=({options:r,...P})=>{const c=g.useRef(null);g.useEffect(()=>{var p,m;(m=(p=c==null?void 0:c.current)==null?void 0:p.focus)==null||m.call(p)},[]);const Q=[r[0],{...r[1],ref:c},r[2]];return q.jsx(z,{...P,options:Q})},o={name:"CardRadio"},a={name:"CardRadio Without Icon",args:{...e,options:u.map(r=>({...r,icon:void 0}))}},t={name:"CardRadio Focus",render:M},s={name:"CardRadio Checked",args:{...e,options:u.map(r=>({...r,checked:!0}))}},n={name:"CardRadio With Label",args:{...e,labelGroup:"Label du groupe",descriptionGroup:"Description du groupe"}},i={name:"CardRadio With Error",args:{...e,labelGroup:"Label du groupe",descriptionGroup:"Description du groupe",error:"There is an error"}},d={name:"CardRadio With Error Focus",render:M,args:{...e,labelGroup:"Label du groupe",descriptionGroup:"Description du groupe",error:"There is an error"}};var C,R,h;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "CardRadio"
}`,...(h=(R=o.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var b,f,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "CardRadio Without Icon",
  args: {
    ...argsDefault,
    options: optionsDefault.map(option => ({
      ...option,
      icon: undefined
    }))
  }
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var W,y,D;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "CardRadio Focus",
  render: renderFocus
}`,...(D=(y=t.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var F,E,G;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "CardRadio Checked",
  args: {
    ...argsDefault,
    options: optionsDefault.map(option => ({
      ...option,
      checked: true
    }))
  }
}`,...(G=(E=s.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var v,T,L;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "CardRadio With Label",
  args: {
    ...argsDefault,
    labelGroup: "Label du groupe",
    descriptionGroup: "Description du groupe"
  }
}`,...(L=(T=n.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var x,j,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "CardRadio With Error",
  args: {
    ...argsDefault,
    labelGroup: "Label du groupe",
    descriptionGroup: "Description du groupe",
    error: "There is an error"
  }
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var I,_,O;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "CardRadio With Error Focus",
  render: renderFocus,
  args: {
    ...argsDefault,
    labelGroup: "Label du groupe",
    descriptionGroup: "Description du groupe",
    error: "There is an error"
  }
}`,...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const B=["CardRadioStory","CardRadioWithIcon","CardRadioFocus","CardRadioChecked","CardRadioWithLabel","CardRadioWithError","CardRadioWithErrorFocus"],U=Object.freeze(Object.defineProperty({__proto__:null,CardRadioChecked:s,CardRadioFocus:t,CardRadioStory:o,CardRadioWithError:i,CardRadioWithErrorFocus:d,CardRadioWithIcon:a,CardRadioWithLabel:n,__namedExportsOrder:B,default:A},Symbol.toStringTag,{value:"Module"}));export{U as C,o as a};
