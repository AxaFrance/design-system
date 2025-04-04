import{j as e}from"./index-DK-fRI8B.js";/* empty css              */import{B as s}from"./Loader-Cc92k9M2.js";import"./index-DbaA8R3S.js";const y={title:"Components/Badge",component:s,parameters:{layout:"centered"}},n={name:"Badge",args:{children:"Lorem ipsum",classModifier:"success",disabled:!1},argTypes:{classModifier:{options:["success","info","danger","error"],control:{type:"select"},defaultValue:"succes"}}},l={name:"Badge With Icon",args:{children:e.jsx("i",{className:"glyphicon glyphicon-bell"}),classModifier:"error",disabled:!1},argTypes:{classModifier:{options:["success","info","danger","error"],control:{type:"select"},defaultValue:"error"}}},i={name:"Badge with modifiers",render:a=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",flexDirection:"column",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:"2rem",flexWrap:"wrap",gap:"2rem"},children:[e.jsx(s,{disabled:a.disabled,classModifier:"success",children:"Badge Success"}),e.jsx(s,{disabled:a.disabled,classModifier:"danger",children:"Badge Danger"}),e.jsx(s,{disabled:a.disabled,classModifier:"info",children:"Badge Info"}),e.jsx(s,{disabled:a.disabled,classModifier:"error",children:"Badge Error"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:"2rem",flexWrap:"wrap",gap:"5rem"},children:[e.jsx(s,{disabled:a.disabled,classModifier:"success",children:e.jsx("i",{className:"glyphicon glyphicon-bell"})}),e.jsx(s,{disabled:a.disabled,classModifier:"danger",children:e.jsx("i",{className:"glyphicon glyphicon-bell"})}),e.jsx(s,{disabled:a.disabled,classModifier:"info",children:e.jsx("i",{className:"glyphicon glyphicon-bell"})}),e.jsx(s,{disabled:a.disabled,classModifier:"error",children:e.jsx("i",{className:"glyphicon glyphicon-bell"})})]})]}),args:{disabled:!1}};var r,d,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var o,t,g;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(g=(t=l.parameters)==null?void 0:t.docs)==null?void 0:g.source}}};var p,f,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Badge with modifiers",
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
          <Badge disabled={args.disabled} classModifier="success">
            Badge Success
          </Badge>
          <Badge disabled={args.disabled} classModifier="danger">
            Badge Danger
          </Badge>
          <Badge disabled={args.disabled} classModifier="info">
            Badge Info
          </Badge>
          <Badge disabled={args.disabled} classModifier="error">
            Badge Error
          </Badge>
        </div>
        <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "2rem",
        flexWrap: "wrap",
        gap: "5rem"
      }}>
          <Badge disabled={args.disabled} classModifier="success">
            <i className="glyphicon glyphicon-bell" />
          </Badge>
          <Badge disabled={args.disabled} classModifier="danger">
            <i className="glyphicon glyphicon-bell" />
          </Badge>
          <Badge disabled={args.disabled} classModifier="info">
            <i className="glyphicon glyphicon-bell" />
          </Badge>
          <Badge disabled={args.disabled} classModifier="error">
            <i className="glyphicon glyphicon-bell" />
          </Badge>
        </div>
      </div>;
  },
  args: {
    disabled: false
  }
}`,...(m=(f=i.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const u=["Default","BadgeIconStory","MultiExamples"],M=Object.freeze(Object.defineProperty({__proto__:null,BadgeIconStory:l,Default:n,MultiExamples:i,__namedExportsOrder:u,default:y},Symbol.toStringTag,{value:"Module"}));export{M as B,n as D,i as M,l as a};
