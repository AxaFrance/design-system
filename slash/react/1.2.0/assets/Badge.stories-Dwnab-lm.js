import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{B as s}from"./Loader-C6nTMx6t.js";import"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";const y={title:"Components/Badge",component:s,parameters:{layout:"centered"}},r={name:"Badge",args:{children:"Lorem ipsum",classModifier:"success",disabled:!1},argTypes:{classModifier:{options:["success","info","danger","error"],control:{type:"select"},defaultValue:"succes"}}},n={name:"Badge With Icon",args:{children:e.jsx("i",{className:"glyphicon glyphicon-bell"}),classModifier:"error",disabled:!1},argTypes:{classModifier:{options:["success","info","danger","error"],control:{type:"select"},defaultValue:"error"}}},i={name:"Badge with modifiers",render:a=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",flexDirection:"column",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:"2rem",flexWrap:"wrap",gap:"2rem"},children:[e.jsx(s,{disabled:a.disabled,classModifier:"success",children:"Badge Success"}),e.jsx(s,{disabled:a.disabled,classModifier:"danger",children:"Badge Danger"}),e.jsx(s,{disabled:a.disabled,classModifier:"info",children:"Badge Info"}),e.jsx(s,{disabled:a.disabled,classModifier:"error",children:"Badge Error"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:"2rem",flexWrap:"wrap",gap:"5rem"},children:[e.jsx(s,{disabled:a.disabled,classModifier:"success",children:e.jsx("i",{className:"glyphicon glyphicon-bell"})}),e.jsx(s,{disabled:a.disabled,classModifier:"danger",children:e.jsx("i",{className:"glyphicon glyphicon-bell"})}),e.jsx(s,{disabled:a.disabled,classModifier:"info",children:e.jsx("i",{className:"glyphicon glyphicon-bell"})}),e.jsx(s,{disabled:a.disabled,classModifier:"error",children:e.jsx("i",{className:"glyphicon glyphicon-bell"})})]})]}),args:{disabled:!1}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Badge",
  args: {
    children: "Lorem ipsum",
    classModifier: "success",
    disabled: false
  },
  argTypes: {
    classModifier: {
      options: ["success", "info", "danger", "error"],
      control: {
        type: "select"
      },
      defaultValue: "succes"
    }
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var o,t,g;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Badge With Icon",
  args: {
    children: <i className="glyphicon glyphicon-bell" />,
    classModifier: "error",
    disabled: false
  },
  argTypes: {
    classModifier: {
      options: ["success", "info", "danger", "error"],
      control: {
        type: "select"
      },
      defaultValue: "error"
    }
  }
}`,...(g=(t=n.parameters)==null?void 0:t.docs)==null?void 0:g.source}}};var p,f,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Badge with modifiers",
  render: args => {
    return <div style={{
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "wrap"
    }}>\r
        <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "2rem",
        flexWrap: "wrap",
        gap: "2rem"
      }}>\r
          <Badge disabled={args.disabled} classModifier="success">\r
            Badge Success\r
          </Badge>\r
          <Badge disabled={args.disabled} classModifier="danger">\r
            Badge Danger\r
          </Badge>\r
          <Badge disabled={args.disabled} classModifier="info">\r
            Badge Info\r
          </Badge>\r
          <Badge disabled={args.disabled} classModifier="error">\r
            Badge Error\r
          </Badge>\r
        </div>\r
        <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "2rem",
        flexWrap: "wrap",
        gap: "5rem"
      }}>\r
          <Badge disabled={args.disabled} classModifier="success">\r
            <i className="glyphicon glyphicon-bell" />\r
          </Badge>\r
          <Badge disabled={args.disabled} classModifier="danger">\r
            <i className="glyphicon glyphicon-bell" />\r
          </Badge>\r
          <Badge disabled={args.disabled} classModifier="info">\r
            <i className="glyphicon glyphicon-bell" />\r
          </Badge>\r
          <Badge disabled={args.disabled} classModifier="error">\r
            <i className="glyphicon glyphicon-bell" />\r
          </Badge>\r
        </div>\r
      </div>;
  },
  args: {
    disabled: false
  }
}`,...(m=(f=i.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const u=["Default","BadgeIconStory","MultiExamples"],j=Object.freeze(Object.defineProperty({__proto__:null,BadgeIconStory:n,Default:r,MultiExamples:i,__namedExportsOrder:u,default:y},Symbol.toStringTag,{value:"Module"}));export{j as B,r as D,i as M,n as a};
