import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{p as a}from"./Loader-B7zP7CXa.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";const m={title:"Components/Tag",component:a,parameters:{layout:"centered"}},l={name:"Tag",args:{children:"Lorem ipsum",classModifier:"success",disabled:!1},argTypes:{classModifier:{options:["success","information","warning","error","default","dark","purple","gray"],control:{type:"select"},defaultValue:"success"}}},i={name:"Tag with Icon",args:{children:e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"glyphicon glyphicon-bell"})," success"]}),classModifier:"success",disabled:!1},argTypes:{classModifier:{options:["success","information","warning","error","default","dark","purple","gray"],control:{type:"select"},defaultValue:"error"}}},n={name:"Tag with modifiers",render:s=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",flexDirection:"column",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:"2rem",flexWrap:"wrap",gap:"2rem"},children:[e.jsx(a,{disabled:s.disabled,children:"Tag Default"}),e.jsx(a,{disabled:s.disabled,classModifier:"success",children:"Tag Success"}),e.jsx(a,{disabled:s.disabled,classModifier:"warning",children:"Tag Warning"}),e.jsx(a,{disabled:s.disabled,classModifier:"information",children:"Tag Info"}),e.jsx(a,{disabled:s.disabled,classModifier:"error",children:"Tag Error"}),e.jsx(a,{disabled:s.disabled,classModifier:"dark",children:"Tag Black"}),e.jsx(a,{disabled:s.disabled,classModifier:"purple",children:"Tag Purple"}),e.jsx(a,{disabled:s.disabled,classModifier:"gray",children:"Tag Gray"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:"2rem",flexWrap:"wrap",gap:"5rem"},children:[e.jsxs(a,{disabled:s.disabled,children:[e.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag default"]}),e.jsxs(a,{disabled:s.disabled,classModifier:"success",children:[e.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag Success"]}),e.jsxs(a,{disabled:s.disabled,classModifier:"warning",children:[e.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag Warning"]}),e.jsxs(a,{disabled:s.disabled,classModifier:"information",children:[e.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag Information"]}),e.jsxs(a,{disabled:s.disabled,classModifier:"error",children:[e.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag Error"]}),e.jsxs(a,{disabled:s.disabled,classModifier:"dark",children:[e.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag Dark"]}),e.jsxs(a,{disabled:s.disabled,classModifier:"purple",children:[e.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag Purple"]}),e.jsxs(a,{disabled:s.disabled,classModifier:"gray",children:[e.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag Gray"]})]})]}),args:{disabled:!1}};var r,d,c;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Tag",
  args: {
    children: "Lorem ipsum",
    classModifier: "success",
    disabled: false
  },
  argTypes: {
    classModifier: {
      options: ["success", "information", "warning", "error", "default", "dark", "purple", "gray"],
      control: {
        type: "select"
      },
      defaultValue: "success"
    }
  }
}`,...(c=(d=l.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var o,g,t;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Tag with Icon",
  args: {
    children: <>
        <i className="glyphicon glyphicon-bell" /> success
      </>,
    classModifier: "success",
    disabled: false
  },
  argTypes: {
    classModifier: {
      options: ["success", "information", "warning", "error", "default", "dark", "purple", "gray"],
      control: {
        type: "select"
      },
      defaultValue: "error"
    }
  }
}`,...(t=(g=i.parameters)==null?void 0:g.docs)==null?void 0:t.source}}};var p,f,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Tag with modifiers",
  render: args => {
    return <div style={{
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "wrap"
    }}>
        <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "2rem",
        flexWrap: "wrap",
        gap: "2rem"
      }}>
          <Tag disabled={args.disabled}>Tag Default</Tag>
          <Tag disabled={args.disabled} classModifier="success">
            Tag Success
          </Tag>
          <Tag disabled={args.disabled} classModifier="warning">
            Tag Warning
          </Tag>
          <Tag disabled={args.disabled} classModifier="information">
            Tag Info
          </Tag>
          <Tag disabled={args.disabled} classModifier="error">
            Tag Error
          </Tag>
          <Tag disabled={args.disabled} classModifier="dark">
            Tag Black
          </Tag>
          <Tag disabled={args.disabled} classModifier="purple">
            Tag Purple
          </Tag>
          <Tag disabled={args.disabled} classModifier="gray">
            Tag Gray
          </Tag>
        </div>
        <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "2rem",
        flexWrap: "wrap",
        gap: "5rem"
      }}>
          <Tag disabled={args.disabled}>
            <i className="glyphicon glyphicon-bell" />
            Tag default
          </Tag>
          <Tag disabled={args.disabled} classModifier="success">
            <i className="glyphicon glyphicon-bell" />
            Tag Success
          </Tag>
          <Tag disabled={args.disabled} classModifier="warning">
            <i className="glyphicon glyphicon-bell" />
            Tag Warning
          </Tag>
          <Tag disabled={args.disabled} classModifier="information">
            <i className="glyphicon glyphicon-bell" />
            Tag Information
          </Tag>
          <Tag disabled={args.disabled} classModifier="error">
            <i className="glyphicon glyphicon-bell" />
            Tag Error
          </Tag>
          <Tag disabled={args.disabled} classModifier="dark">
            <i className="glyphicon glyphicon-bell" />
            Tag Dark
          </Tag>
          <Tag disabled={args.disabled} classModifier="purple">
            <i className="glyphicon glyphicon-bell" />
            Tag Purple
          </Tag>
          <Tag disabled={args.disabled} classModifier="gray">
            <i className="glyphicon glyphicon-bell" />
            Tag Gray
          </Tag>
        </div>
      </div>;
  },
  args: {
    disabled: false
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const y=["Default","TagIconStory","MultiExamples"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:l,MultiExamples:n,TagIconStory:i,__namedExportsOrder:y,default:m},Symbol.toStringTag,{value:"Module"}));export{l as D,n as M,j as T,i as a};
