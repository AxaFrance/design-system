import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{B as y}from"./Button-0cvIXeUj.js";import{T as i}from"./Title-B1OEM1uB.js";const S={title:"Components/Title",component:i},j=["","content"],e={name:"Title",render:({children:s,classModifier:C,...x})=>a.jsx(i,{classModifier:C,...x,children:s}),args:{children:"Sample Title",classModifier:"",className:"",heading:"h2"},argTypes:{classModifier:{options:j,control:{type:"select"}}}},n={args:{children:"Default Title",heading:"h2"}},t={args:{children:"Content Title",classModifier:"content",className:"",heading:"h2"}},r={name:"Content Title With Button",render:s=>a.jsxs(i,{heading:s.heading,classModifier:"content",style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:["Content Title",a.jsx(y,{children:" Click Me "})]}),args:{children:"Content Title",classModifier:"content",className:"",heading:"h2"}};var o,l,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Title",
  render: ({
    children: text,
    classModifier,
    ...args
  }) => <Title classModifier={classModifier} {...args}>
      {text}
    </Title>,
  args: {
    children: "Sample Title",
    classModifier: "",
    className: "",
    heading: "h2"
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "select"
      }
    }
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Default Title",
    heading: "h2"
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,g,T;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Content Title",
    classModifier: "content",
    className: "",
    heading: "h2"
  }
}`,...(T=(g=t.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var u,f,M;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Content Title With Button",
  render: args => {
    return <Title heading={args.heading} classModifier="content" style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
        Content Title
        <Button> Click Me </Button>
      </Title>;
  },
  args: {
    children: "Content Title",
    classModifier: "content",
    className: "",
    heading: "h2"
  }
}`,...(M=(f=r.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};const D=["Template","DefaultTitle","ContentTitle","ContentTitleWithLink"],_=Object.freeze(Object.defineProperty({__proto__:null,ContentTitle:t,ContentTitleWithLink:r,DefaultTitle:n,Template:e,__namedExportsOrder:D,default:S},Symbol.toStringTag,{value:"Module"}));export{_ as T,e as a};
