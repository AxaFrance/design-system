import{s as N,S as _}from"./TimelineVerticalApollo-CgK76z1b.js";import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-DuZrfDUH.js";const s=({variant:n,size:e})=>r.jsxs("div",{children:[r.jsx(_,{variant:n,size:e}),r.jsxs("p",{children:["Size ",e]})]}),p=({variant:n,...e})=>r.jsxs("div",{className:`demo-spinner demo-spinner--${n}`,children:[r.jsx(s,{...e,variant:n}),r.jsx(s,{...e,variant:n,size:32}),r.jsx(s,{...e,variant:n,size:24})]}),f=({...n})=>r.jsx("div",{className:"demo-spinner-container",children:[Object.values(N).map(e=>r.jsxs("div",{className:`demo-spinner demo-spinner--${e}`,children:[r.jsx(s,{...n,variant:e}),r.jsx(s,{...n,variant:e,size:32}),r.jsx(s,{...n,variant:e,size:24})]},e))]});p.__docgenInfo={description:"",methods:[],displayName:"render"};f.__docgenInfo={description:"",methods:[],displayName:"renderAll"};const b={component:_,title:"Components/Spinner"},o={name:"Spinner",render:p,args:{size:40}},a={name:"Spinner gray",render:p,args:{size:40,variant:"gray"}},i={name:"Spinner white",render:p,args:{size:40,variant:"white"}},t={name:"Spinner examples",render:f};var c,m,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Spinner",
  render,
  args: {
    size: 40
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,S,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Spinner gray",
  render,
  args: {
    size: 40,
    variant: "gray"
  }
}`,...(u=(S=a.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};var x,j,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Spinner white",
  render,
  args: {
    size: 40,
    variant: "white"
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var g,h,z;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Spinner examples",
  render: renderAll
}`,...(z=(h=t.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};const w=["SpinnerStory","SpinnerGrayStory","SpinnerWhiteStory","MultiExamples"],v=Object.freeze(Object.defineProperty({__proto__:null,MultiExamples:t,SpinnerGrayStory:a,SpinnerStory:o,SpinnerWhiteStory:i,__namedExportsOrder:w,default:b},Symbol.toStringTag,{value:"Module"}));export{t as M,v as S,o as a};
