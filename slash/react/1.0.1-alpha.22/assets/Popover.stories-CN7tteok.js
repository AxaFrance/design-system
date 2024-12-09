import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{P as a}from"./Popover-CVInVo-0.js";const s={title:"Components/Popover",component:a,args:{},parameters:{layout:"centered"}},t={name:"Popover",render:({...p})=>e.jsx(a,{...p,popoverElement:e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Content of the popover"}),e.jsx("p",{children:"Text of the modal element"})]}),children:e.jsx("div",{style:{width:"200px",height:"200px",margin:"auto",backgroundColor:"green",alignContent:"center",textAlign:"center",color:"white"},children:"Example"})}),args:{mode:"hover"},argTypes:{placement:{options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"],control:{type:"select"}}}};var o,n,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      options: ["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"],
      control: {
        type: "select"
      }
    }
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const l=["Default"],i=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:l,default:s},Symbol.toStringTag,{value:"Module"}));export{i as P};
