import{j as a}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import{q as e,p as v}from"./CardData-B-EetlV8.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";const f="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M160-200v-60h80v-304q0-84%2049.5-150.5T420-798v-22q0-25%2017.5-42.5T480-880q25%200%2042.5%2017.5T540-820v22q81%2017%20130.5%2083.5T720-564v304h80v60H160ZM480-80q-33%200-56.5-23.5T400-160h160q0%2033-23.5%2056.5T480-80Z'/%3e%3c/svg%3e",x={title:"Components/Tag",component:e,parameters:{layout:"centered",backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"blue",value:"#00008f"}]}},globals:{},argTypes:{variant:{options:["success","information","warning","error","default","dark","purple","gray","white"],control:{type:"select"},defaultValue:"success"}}},s={name:"Tag",args:{children:"Lorem ipsum",variant:"success",disabled:!1}},i={name:"White Tag on dark background",args:{children:"Lorem ipsum",variant:"white",disabled:!1},parameters:{backgrounds:{default:"blue"}}},l={name:"Tag with Icon",args:{children:a.jsxs(a.Fragment,{children:[a.jsx("i",{className:"glyphicon glyphicon-bell"})," success"]}),variant:"success",disabled:!1}},r={name:"Tag with modifiers",render:n=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",flexDirection:"column",alignItems:"center",flexWrap:"wrap"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:"2rem",flexWrap:"wrap",gap:"2rem"},children:[a.jsx(e,{disabled:n.disabled,children:"Tag Default"}),a.jsx(e,{disabled:n.disabled,variant:"success",children:"Tag Success"}),a.jsx(e,{disabled:n.disabled,variant:"warning",children:"Tag Warning"}),a.jsx(e,{disabled:n.disabled,variant:"information",children:"Tag Info"}),a.jsx(e,{disabled:n.disabled,variant:"error",children:"Tag Error"}),a.jsx(e,{disabled:n.disabled,variant:"dark",children:"Tag Black"}),a.jsx(e,{disabled:n.disabled,variant:"purple",children:"Tag Purple"}),a.jsx(e,{disabled:n.disabled,variant:"gray",children:"Tag Gray"}),a.jsx(e,{disabled:n.disabled,variant:"white",children:"Tag White"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:"2rem",flexWrap:"wrap",gap:"2rem"},children:[a.jsxs(e,{disabled:n.disabled,children:[a.jsx(v,{src:f}),"Tag default"]}),a.jsxs(e,{disabled:n.disabled,variant:"success",children:[a.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag Success"]}),a.jsxs(e,{disabled:n.disabled,variant:"warning",children:[a.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag Warning"]}),a.jsxs(e,{disabled:n.disabled,variant:"information",children:[a.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag Information"]}),a.jsxs(e,{disabled:n.disabled,variant:"error",children:[a.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag Error"]}),a.jsxs(e,{disabled:n.disabled,variant:"dark",children:[a.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag Dark"]}),a.jsxs(e,{disabled:n.disabled,variant:"purple",children:[a.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag Purple"]}),a.jsxs(e,{disabled:n.disabled,variant:"gray",children:[a.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag Gray"]}),a.jsxs(e,{disabled:n.disabled,variant:"white",children:[a.jsx("i",{className:"glyphicon glyphicon-bell"}),"Tag White"]})]})]}),args:{disabled:!1}};var d,c,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Tag",
  args: {
    children: "Lorem ipsum",
    variant: "success",
    disabled: false
  }
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var t,o,p;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "White Tag on dark background",
  args: {
    children: "Lorem ipsum",
    variant: "white",
    disabled: false
  },
  parameters: {
    backgrounds: {
      default: "blue"
    }
  }
}`,...(p=(o=i.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var b,m,T;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Tag with Icon",
  args: {
    children: <>
        <i className="glyphicon glyphicon-bell" /> success
      </>,
    variant: "success",
    disabled: false
  }
}`,...(T=(m=l.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var h,u,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
          <Tag disabled={args.disabled} variant="success">
            Tag Success
          </Tag>
          <Tag disabled={args.disabled} variant="warning">
            Tag Warning
          </Tag>
          <Tag disabled={args.disabled} variant="information">
            Tag Info
          </Tag>
          <Tag disabled={args.disabled} variant="error">
            Tag Error
          </Tag>
          <Tag disabled={args.disabled} variant="dark">
            Tag Black
          </Tag>
          <Tag disabled={args.disabled} variant="purple">
            Tag Purple
          </Tag>
          <Tag disabled={args.disabled} variant="gray">
            Tag Gray
          </Tag>
          <Tag disabled={args.disabled} variant="white">
            Tag White
          </Tag>
        </div>
        <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "2rem",
        flexWrap: "wrap",
        gap: "2rem"
      }}>
          <Tag disabled={args.disabled}>
            <Svg src={iconBell} />
            Tag default
          </Tag>
          <Tag disabled={args.disabled} variant="success">
            <i className="glyphicon glyphicon-bell" />
            Tag Success
          </Tag>
          <Tag disabled={args.disabled} variant="warning">
            <i className="glyphicon glyphicon-bell" />
            Tag Warning
          </Tag>
          <Tag disabled={args.disabled} variant="information">
            <i className="glyphicon glyphicon-bell" />
            Tag Information
          </Tag>
          <Tag disabled={args.disabled} variant="error">
            <i className="glyphicon glyphicon-bell" />
            Tag Error
          </Tag>
          <Tag disabled={args.disabled} variant="dark">
            <i className="glyphicon glyphicon-bell" />
            Tag Dark
          </Tag>
          <Tag disabled={args.disabled} variant="purple">
            <i className="glyphicon glyphicon-bell" />
            Tag Purple
          </Tag>
          <Tag disabled={args.disabled} variant="gray">
            <i className="glyphicon glyphicon-bell" />
            Tag Gray
          </Tag>
          <Tag disabled={args.disabled} variant="white">
            <i className="glyphicon glyphicon-bell" />
            Tag White
          </Tag>
        </div>
      </div>;
  },
  args: {
    disabled: false
  }
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const j=["Default","WhiteTagOnDarkBackground","TagIconStory","MultiExamples"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:s,MultiExamples:r,TagIconStory:l,WhiteTagOnDarkBackground:i,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{s as D,r as M,I as T,l as a};
