import{j}from"./index-C1mcBe1y.js";import{R as C}from"./DropdownCommon-DhTvOb8d.js";import{r as i}from"./index-DbaA8R3S.js";const c={name:"option1",value:"option1"},D={name:{control:{type:"text"}},value:{control:{type:"text"}},checked:{control:{type:"boolean"}},onChange:{action:"onChange"},"aria-invalid":{type:"boolean"}},O={title:"Components/Form/Radio/Radio",component:C,argTypes:D,args:c},_=({...b})=>{const t=i.useRef(null);return i.useEffect(()=>{var n,d;(d=(n=t==null?void 0:t.current)==null?void 0:n.focus)==null||d.call(n)},[]),j.jsx(C,{...b,ref:t})},r={name:"Radio"},e={name:"Radio focus",render:_},o={name:"Radio Checked",args:{...c,checked:!0}},a={name:"Radio Error",args:{...c,"aria-invalid":!0}},s={name:"Radio Error focus",render:_,args:{...c,"aria-invalid":!0}};var u,m,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Radio"
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,R,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Radio focus",
  render: renderFocus
}`,...(g=(R=e.parameters)==null?void 0:R.docs)==null?void 0:g.source}}};var f,y,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Radio Checked",
  args: {
    ...argsDefault,
    checked: true
  }
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var E,h,v;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Radio Error",
  args: {
    ...argsDefault,
    "aria-invalid": true
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,F,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Radio Error focus",
  render: renderFocus,
  args: {
    ...argsDefault,
    "aria-invalid": true
  }
}`,...(k=(F=s.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};const T=["RadioStory","RadioStoryFocus","RadioStoryChecked","RadioStoryError","RadioStoryErrorFocus"],q=Object.freeze(Object.defineProperty({__proto__:null,RadioStory:r,RadioStoryChecked:o,RadioStoryError:a,RadioStoryErrorFocus:s,RadioStoryFocus:e,__namedExportsOrder:T,default:O},Symbol.toStringTag,{value:"Module"}));export{q as R,r as a};
