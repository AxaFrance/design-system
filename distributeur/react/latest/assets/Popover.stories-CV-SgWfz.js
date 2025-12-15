import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./CardData-D-Zc8gNU.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{P as p}from"./Popover-DNB-Ornh.js";const s={title:"Components/Popover",component:p,args:{},parameters:{layout:"centered"}},t={name:"Popover",render:({...a})=>e.jsx(p,{...a,popoverElement:e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Content of the popover"}),e.jsx("p",{children:"Text of the modal element"})]}),children:e.jsx("div",{style:{width:"200px",height:"200px",margin:"auto",backgroundColor:"green",alignContent:"center",textAlign:"center",color:"white"},children:"Example"})}),args:{mode:"hover"},argTypes:{placement:{options:["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"],control:{type:"select"}}}};var o,n,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Popover",
  render: ({
    ...args
  }) => <Popover {...args} popoverElement={<>
          <h1>Content of the popover</h1>
          <p>Text of the modal element</p>
        </>}>
      <div style={{
      width: "200px",
      height: "200px",
      margin: "auto",
      backgroundColor: "green",
      alignContent: "center",
      textAlign: "center",
      color: "white"
    }}>
        Example
      </div>
    </Popover>,
  args: {
    mode: "hover"
  },
  argTypes: {
    placement: {
      options: ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"],
      control: {
        type: "select"
      }
    }
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const l=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:l,default:s},Symbol.toStringTag,{value:"Module"}));export{h as P};
