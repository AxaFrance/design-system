import{j as M}from"./index-C1mcBe1y.js";import{c as F}from"./DropdownCommon-DaQANgyy.js";import{r as m}from"./index-DbaA8R3S.js";const _={label:{control:{type:"text"}},name:{control:{type:"text"}},value:{control:{type:"text"}},errorMessage:{control:{type:"text"}},checked:{control:{type:"boolean"}},onChange:{action:"onChange"}},n={label:"J'accepte de fournir à AXA mes coordonnées ainsi que les données  relatives à mon projet et ma situation. Ces dernières seront transmises à mon conseiller AXA qui pourra  me contacter pour m'accompagner.",name:"option1",value:"option1"},D={title:"Components/Form/Checkbox/CheckboxText",component:F,argTypes:_,args:n},W=({...j})=>{const a=m.useRef(null);return m.useEffect(()=>{var c,x;(x=(c=a==null?void 0:a.current)==null?void 0:c.focus)==null||x.call(c)},[]),M.jsx(F,{...j,ref:a})},e={name:"CheckboxText"},r={name:"CheckboxTextChecked",args:{...n,checked:!0}},o={name:"CheckboxTextFocus",render:W},t={name:"CheckboxText With Error",args:{...n,errorMessage:"There is an error"}},s={name:"CheckboxText With Error focus",render:W,args:{...n,errorMessage:"There is an error"}};var u,h,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "CheckboxText"
}`,...(p=(h=e.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var i,d,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "CheckboxTextChecked",
  args: {
    ...argsDefault,
    checked: true
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var C,b,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "CheckboxTextFocus",
  render: renderFocus
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var T,g,f;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "CheckboxText With Error",
  args: {
    ...argsDefault,
    errorMessage: "There is an error"
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,S,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "CheckboxText With Error focus",
  render: renderFocus,
  args: {
    ...argsDefault,
    errorMessage: "There is an error"
  }
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const v=["CheckboxTextStory","CheckboxTextChecked","CheckboxTextFocus","CheckboxTextWithErrorStory","CheckboxTextWithErrorFocusStory"],R=Object.freeze(Object.defineProperty({__proto__:null,CheckboxTextChecked:r,CheckboxTextFocus:o,CheckboxTextStory:e,CheckboxTextWithErrorFocusStory:s,CheckboxTextWithErrorStory:t,__namedExportsOrder:v,default:D},Symbol.toStringTag,{value:"Module"}));export{R as C,e as a,t as b};
