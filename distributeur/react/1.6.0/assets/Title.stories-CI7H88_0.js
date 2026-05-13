import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-De-9TtK1.js";import{B as a,Tt as o,h as s,n as c}from"./distributeur-Ct4qDp97.js";var l=t({Template:()=>h,TitleWithContent:()=>g,__namedExportsOrder:()=>_,default:()=>p}),u,d,f,p,m,h,g,_,v=e((()=>{c(),r(),u=i(),d=[``,`content`],f=[`Button`,`Link`,`None`],p=n.type().meta({title:`Components/Title`,args:{children:`Sample Title`,classModifier:``,className:``,heading:`h2`,contentLeft:`None`,contentRight:`None`},argTypes:{contentLeft:{options:f,control:{type:`select`}},contentRight:{options:f,control:{type:`select`}},classModifier:{options:d,control:{type:`select`}}}}),m=e=>{switch(e){case`Link`:return(0,u.jsx)(a,{href:`/`,children:`Click me`});case`Button`:return(0,u.jsx)(o,{children:`Click me`});default:return}},h=p.story({name:`Title`,render:({children:e,classModifier:t,...n})=>(0,u.jsx)(s,{classModifier:t,...n,contentLeft:void 0,contentRight:void 0,children:e}),args:{children:`Sample Title`,classModifier:``,className:``,heading:`h2`},argTypes:{contentLeft:{control:!1},contentRight:{control:!1}}}),g=p.story({render:({children:e,contentLeft:t,contentRight:n,heading:r})=>(0,u.jsx)(s,{heading:r,contentLeft:m(t),contentRight:m(n),children:e}),args:{children:`Title with content`,heading:`h2`,contentLeft:`Button`,contentRight:`Link`}}),h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Title",
  render: ({
    children: text,
    classModifier,
    ...args
  }) => <Title classModifier={classModifier} {...args} contentLeft={undefined} contentRight={undefined}>
      {text}
    </Title>,
  args: {
    children: "Sample Title",
    classModifier: "",
    className: "",
    heading: "h2"
  },
  argTypes: {
    contentLeft: {
      control: false
    },
    contentRight: {
      control: false
    }
  }
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  render: ({
    children,
    contentLeft,
    contentRight,
    heading
  }) => {
    return <Title heading={heading} contentLeft={getContent(contentLeft)} contentRight={getContent(contentRight)}>
        {children}
      </Title>;
  },
  args: {
    children: "Title with content",
    heading: "h2",
    contentLeft: "Button",
    contentRight: "Link"
  }
})`,...g.input.parameters?.docs?.source}}},_=[`Template`,`TitleWithContent`]}));v();export{h as Template,g as TitleWithContent,_ as __namedExportsOrder,p as default,v as n,l as t};