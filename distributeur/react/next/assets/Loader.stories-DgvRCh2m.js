import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a5 as s,a6 as l,T as m,M as i,$ as p}from"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import"./index-CtOEgLBf.js";const c={component:s,title:"Components/Loader",parameters:{layout:"fullscreen"}},r={name:"Loader",render:({children:o,...d})=>e.jsx(s,{...d,children:o}),args:{mode:"get",text:"",children:e.jsxs("form",{style:{height:"100vh",padding:"3rem"},children:[e.jsx(l,{children:"A form asking for your name"}),e.jsx(m,{label:"name",message:"error",messageType:i.error}),e.jsx(p,{children:"Send"})]})},argTypes:{children:{table:{disable:!0}}}};var n,a,t;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Loader",
  render: ({
    children: text,
    ...args
  }) => <Loader {...args}>{text}</Loader>,
  args: {
    mode: "get",
    text: "",
    children: <form style={{
      height: "100vh",
      padding: "3rem"
    }}>
        <Title>A form asking for your name</Title>
        <TextInput label="name" message="error" messageType={MessageTypes.error} />
        <Button>Send</Button>
      </form>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const g=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:g,default:c},Symbol.toStringTag,{value:"Module"}));export{r as D,y as L};
