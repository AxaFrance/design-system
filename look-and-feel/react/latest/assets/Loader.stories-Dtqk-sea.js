import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{L as e}from"./Loader-Demby5uR.js";const b={component:e,title:"Components/Loader"},n={name:"Loader",render:({...a})=>r.jsx(e,{...a}),args:{size:60,border:5}},o={name:"Loader gray",render:({...a})=>r.jsx(e,{...a}),args:{size:60,border:5,variant:"gray"}},s={name:"Loader white",render:({...a})=>r.jsx(e,{...a}),args:{size:60,border:5,variant:"white"}},t={name:"Loader examples",render:()=>r.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:"2rem",flexWrap:"wrap",gap:"2rem",backgroundColor:"lightgray"},children:[r.jsx(e,{variant:"blue"}),r.jsx(e,{variant:"gray"}),r.jsx(e,{variant:"white"})]})};var d,i,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Loader",
  render: ({
    ...args
  }) => <Loader {...args} />,
  args: {
    size: 60,
    border: 5
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,p,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Loader gray",
  render: ({
    ...args
  }) => <Loader {...args} />,
  args: {
    size: 60,
    border: 5,
    variant: "gray"
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var l,y,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Loader white",
  render: ({
    ...args
  }) => <Loader {...args} />,
  args: {
    size: 60,
    border: 5,
    variant: "white"
  }
}`,...(u=(y=s.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var L,x,v;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Loader examples",
  render: () => <div style={{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "2rem",
    flexWrap: "wrap",
    gap: "2rem",
    backgroundColor: "lightgray"
  }}>
      <Loader variant="blue" />
      <Loader variant="gray" />
      <Loader variant="white" />
    </div>
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const j=["LoaderStory","LoaderGrayStory","LoaderWhiteStory","MultiExamples"],h=Object.freeze(Object.defineProperty({__proto__:null,LoaderGrayStory:o,LoaderStory:n,LoaderWhiteStory:s,MultiExamples:t,__namedExportsOrder:j,default:b},Symbol.toStringTag,{value:"Module"}));export{h as L,t as M,n as a};
