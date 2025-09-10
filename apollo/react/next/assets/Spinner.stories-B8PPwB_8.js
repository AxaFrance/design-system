import{w,x as _}from"./ToggleCommon-BccFy4DM.js";import{j as r}from"./index-C1mcBe1y.js";import"./index-DbaA8R3S.js";const s=({variant:n,size:e})=>r.jsxs("div",{children:[r.jsx(_,{variant:n,size:e}),r.jsxs("p",{children:["Size ",e]})]}),p=({variant:n,...e})=>r.jsxs("div",{className:`demo-spinner demo-spinner--${n}`,children:[r.jsx(s,{...e,variant:n}),r.jsx(s,{...e,variant:n,size:32}),r.jsx(s,{...e,variant:n,size:24})]}),f=({...n})=>r.jsx("div",{className:"demo-spinner-container",children:[Object.values(w).map(e=>r.jsxs("div",{className:`demo-spinner demo-spinner--${e}`,children:[r.jsx(s,{...n,variant:e}),r.jsx(s,{...n,variant:e,size:32}),r.jsx(s,{...n,variant:e,size:24})]},e))]});p.__docgenInfo={description:"",methods:[],displayName:"render"};f.__docgenInfo={description:"",methods:[],displayName:"renderAll"};const N={component:_,title:"Components/Spinner"},o={name:"Spinner",render:p,args:{size:40}},a={name:"Spinner gray",render:p,args:{size:40,variant:"gray"}},i={name:"Spinner white",render:p,args:{size:40,variant:"white"}},t={name:"Spinner examples",render:f};var c,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Spinner",
  render,
  args: {
    size: 40
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,S,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Spinner gray",
  render,
  args: {
    size: 40,
    variant: "gray"
  }
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var u,j,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Spinner white",
  render,
  args: {
    size: 40,
    variant: "white"
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var g,h,z;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Spinner examples",
  render: renderAll
}`,...(z=(h=t.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};const b=["SpinnerStory","SpinnerGrayStory","SpinnerWhiteStory","MultiExamples"],v=Object.freeze(Object.defineProperty({__proto__:null,MultiExamples:t,SpinnerGrayStory:a,SpinnerStory:o,SpinnerWhiteStory:i,__namedExportsOrder:b,default:N},Symbol.toStringTag,{value:"Module"}));export{t as M,v as S,o as a};
