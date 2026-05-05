import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-De-9TtK1.js";import{Dt as a,n as o}from"./distributeur-Ct4qDp97.js";import{a as s}from"./getClassName-BqLacNYG.js";var c,l=e((()=>{c=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M160-200v-60h80v-304q0-84%2049.5-150.5T420-798v-22q0-25%2017.5-42.5T480-880q25%200%2042.5%2017.5T540-820v22q81%2017%20130.5%2083.5T720-564v304h80v60H160ZM480-80q-33%200-56.5-23.5T400-160h160q0%2033-23.5%2056.5T480-80Z'/%3e%3c/svg%3e`})),u=t({Default:()=>p,MultiExamples:()=>g,TagIconStory:()=>h,WhiteTagOnDarkBackground:()=>m,__namedExportsOrder:()=>_,default:()=>f}),d,f,p,m,h,g,_,v=e((()=>{o(),l(),r(),d=i(),f=n.meta({title:`Components/Tag`,component:a,parameters:{layout:`centered`,backgrounds:{default:`light`,values:[{name:`light`,value:`#ffffff`},{name:`blue`,value:`#00008f`}]}},globals:{},argTypes:{variant:{options:[`success`,`information`,`warning`,`error`,`default`,`dark`,`purple`,`gray`,`white`],control:{type:`select`},defaultValue:`success`}}}),p=f.story({name:`Tag`,args:{children:`Lorem ipsum`,variant:`success`,disabled:!1}}),m=f.story({name:`White Tag on dark background`,args:{children:`Lorem ipsum`,variant:`white`,disabled:!1},parameters:{backgrounds:{default:`blue`}}}),h=f.story({name:`Tag with Icon`,args:{children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`i`,{className:`glyphicon glyphicon-bell`}),` success`]}),variant:`success`,disabled:!1}}),g=f.story({name:`Tag with modifiers`,render:e=>(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-evenly`,flexDirection:`column`,alignItems:`center`,flexWrap:`wrap`},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-evenly`,alignItems:`center`,padding:`2rem`,flexWrap:`wrap`,gap:`2rem`},children:[(0,d.jsx)(a,{disabled:e.disabled,children:`Tag Default`}),(0,d.jsx)(a,{disabled:e.disabled,variant:`success`,children:`Tag Success`}),(0,d.jsx)(a,{disabled:e.disabled,variant:`warning`,children:`Tag Warning`}),(0,d.jsx)(a,{disabled:e.disabled,variant:`information`,children:`Tag Info`}),(0,d.jsx)(a,{disabled:e.disabled,variant:`error`,children:`Tag Error`}),(0,d.jsx)(a,{disabled:e.disabled,variant:`dark`,children:`Tag Black`}),(0,d.jsx)(a,{disabled:e.disabled,variant:`purple`,children:`Tag Purple`}),(0,d.jsx)(a,{disabled:e.disabled,variant:`gray`,children:`Tag Gray`}),(0,d.jsx)(a,{disabled:e.disabled,variant:`white`,children:`Tag White`})]}),(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-evenly`,alignItems:`center`,padding:`2rem`,flexWrap:`wrap`,gap:`2rem`},children:[(0,d.jsxs)(a,{disabled:e.disabled,children:[(0,d.jsx)(s,{src:c}),`Tag default`]}),(0,d.jsxs)(a,{disabled:e.disabled,variant:`success`,children:[(0,d.jsx)(`i`,{className:`glyphicon glyphicon-bell`}),`Tag Success`]}),(0,d.jsxs)(a,{disabled:e.disabled,variant:`warning`,children:[(0,d.jsx)(`i`,{className:`glyphicon glyphicon-bell`}),`Tag Warning`]}),(0,d.jsxs)(a,{disabled:e.disabled,variant:`information`,children:[(0,d.jsx)(`i`,{className:`glyphicon glyphicon-bell`}),`Tag Information`]}),(0,d.jsxs)(a,{disabled:e.disabled,variant:`error`,children:[(0,d.jsx)(`i`,{className:`glyphicon glyphicon-bell`}),`Tag Error`]}),(0,d.jsxs)(a,{disabled:e.disabled,variant:`dark`,children:[(0,d.jsx)(`i`,{className:`glyphicon glyphicon-bell`}),`Tag Dark`]}),(0,d.jsxs)(a,{disabled:e.disabled,variant:`purple`,children:[(0,d.jsx)(`i`,{className:`glyphicon glyphicon-bell`}),`Tag Purple`]}),(0,d.jsxs)(a,{disabled:e.disabled,variant:`gray`,children:[(0,d.jsx)(`i`,{className:`glyphicon glyphicon-bell`}),`Tag Gray`]}),(0,d.jsxs)(a,{disabled:e.disabled,variant:`white`,children:[(0,d.jsx)(`i`,{className:`glyphicon glyphicon-bell`}),`Tag White`]})]})]}),args:{disabled:!1}}),p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Tag",
  args: {
    children: "Lorem ipsum",
    variant: "success",
    disabled: false
  }
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Tag with Icon",
  args: {
    children: <>
        <i className="glyphicon glyphicon-bell" /> success
      </>,
    variant: "success",
    disabled: false
  }
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...g.input.parameters?.docs?.source}}},_=[`Default`,`WhiteTagOnDarkBackground`,`TagIconStory`,`MultiExamples`]}));v();export{p as Default,g as MultiExamples,h as TagIconStory,m as WhiteTagOnDarkBackground,_ as __namedExportsOrder,f as default,v as n,u as t};