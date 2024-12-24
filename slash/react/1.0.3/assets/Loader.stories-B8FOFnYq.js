import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{B as d}from"./Button-BPtTpx5t.js";import{T as i}from"./TextInput-Bid7rY_4.js";import"./Text-BENtgf5_.js";import{M as l}from"./HelpMessage-Cd7UbXG5.js";import"./index-CCQ3W5xA.js";import"./index-CTjT7uj6.js";import{T as p}from"./Title-Cxy8eqVz.js";import{L as a}from"./Loader-BYKmsk4U.js";const c={component:a,title:"Components/Loader",parameters:{layout:"fullscreen"}},r={name:"Loader",render:({children:s,...m})=>e.jsx(a,{...m,children:s}),args:{mode:"get",text:"",children:e.jsxs("form",{style:{height:"100vh",padding:"3rem"},children:[e.jsx(p,{children:"A form asking for your name"}),e.jsx(i,{label:"name",message:"error",messageType:l.error}),e.jsx(d,{children:"Send"})]})},argTypes:{children:{table:{disable:!0}}}};var n,t,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const g=["Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:g,default:c},Symbol.toStringTag,{value:"Module"}));export{r as D,S as L};
