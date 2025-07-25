import{j as v}from"./index-C1mcBe1y.js";import{b as _}from"./DropdownCommon-BVqCb7Pr.js";import{r as m}from"./index-DbaA8R3S.js";const n={name:"option1",value:"option1"},O={name:{control:{type:"text"}},value:{control:{type:"text"}},checked:{control:{type:"boolean"}},onChange:{action:"onChange"}},T={title:"Components/Form/Checkbox/Checkbox",component:_,argTypes:O,args:n},j=({...D})=>{const a=m.useRef(null);return m.useEffect(()=>{var t,u;(u=(t=a==null?void 0:a.current)==null?void 0:t.focus)==null||u.call(t)},[]),v.jsx(_,{...D,ref:a})},e={name:"Checkbox"},r={name:"Checkbox focus",render:j},o={name:"Checkbox Checked",args:{...n,checked:!0}},s={name:"Checkbox Error",args:{...n,hasError:!0}},c={name:"Checkbox Error focus",render:j,args:{...n,hasError:!0}};var p,h,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...(d=(h=e.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var x,C,k;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Checkbox focus",
  render: renderFocus
}`,...(k=(C=r.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var b,l,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Checkbox Checked",
  args: {
    ...argsDefault,
    checked: true
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var i,f,S;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Checkbox Error",
  args: {
    ...argsDefault,
    hasError: true
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,E,F;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Checkbox Error focus",
  render: renderFocus,
  args: {
    ...argsDefault,
    hasError: true
  }
}`,...(F=(E=c.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const R=["CheckboxStory","CheckboxStoryFocus","CheckboxStoryChecked","CheckboxStoryError","CheckboxStoryErrorFocus"],q=Object.freeze(Object.defineProperty({__proto__:null,CheckboxStory:e,CheckboxStoryChecked:o,CheckboxStoryError:s,CheckboxStoryErrorFocus:c,CheckboxStoryFocus:r,__namedExportsOrder:R,default:T},Symbol.toStringTag,{value:"Module"}));export{q as C,e as a};
