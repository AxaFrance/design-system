import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-DC1TsnkI.js";import{Dt as a,H as o,g as s,n as c}from"./distributeur-UycNcveU.js";var l=t({Template:()=>h,TitleWithContent:()=>g,WithoutDivider:()=>_,__namedExportsOrder:()=>v,default:()=>p}),u,d,f,p,m,h,g,_,v,y=e((()=>{c(),r(),u=i(),d=[``,`content`],f=[`Button`,`Link`,`None`],p=n.type().meta({title:`Components/Title`,args:{children:`Sample Title`,classModifier:``,className:``,heading:`h2`,withDivider:!0,contentLeft:`None`,contentRight:`None`},argTypes:{contentLeft:{options:f,control:{type:`select`}},contentRight:{options:f,control:{type:`select`}},classModifier:{options:d,control:{type:`select`}}}}),m=e=>{switch(e){case`Link`:return(0,u.jsx)(o,{href:`/`,children:`Click me`});case`Button`:return(0,u.jsx)(a,{children:`Click me`});default:return}},h=p.story({name:`Title`,render:({children:e,classModifier:t,...n})=>(0,u.jsx)(s,{classModifier:t,...n,contentLeft:void 0,contentRight:void 0,children:e}),args:{children:`Sample Title`,classModifier:``,className:``,heading:`h2`,withDivider:!0},argTypes:{contentLeft:{control:!1},contentRight:{control:!1}}}),g=p.story({render:({children:e,contentLeft:t,contentRight:n,heading:r,withDivider:i})=>(0,u.jsx)(s,{heading:r,withDivider:i,contentLeft:m(t),contentRight:m(n),children:e}),args:{children:`Title with content`,heading:`h2`,withDivider:!0,contentLeft:`Button`,contentRight:`Link`}}),_=p.story({render:({children:e,heading:t})=>(0,u.jsx)(s,{heading:t,withDivider:!1,children:e}),args:{children:`Title without divider`,heading:`h2`,withDivider:!1},argTypes:{classModifier:{control:!1},className:{control:!1},contentLeft:{control:!1},contentRight:{control:!1}}}),h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
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
    heading: "h2",
    withDivider: true
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
    heading,
    withDivider
  }) => {
    return <Title heading={heading} withDivider={withDivider} contentLeft={getContent(contentLeft)} contentRight={getContent(contentRight)}>
        {children}
      </Title>;
  },
  args: {
    children: "Title with content",
    heading: "h2",
    withDivider: true,
    contentLeft: "Button",
    contentRight: "Link"
  }
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  render: ({
    children,
    heading
  }) => <Title heading={heading} withDivider={false}>
      {children}
    </Title>,
  args: {
    children: "Title without divider",
    heading: "h2",
    withDivider: false
  },
  argTypes: {
    classModifier: {
      control: false
    },
    className: {
      control: false
    },
    contentLeft: {
      control: false
    },
    contentRight: {
      control: false
    }
  }
})`,..._.input.parameters?.docs?.source}}},v=[`Template`,`TitleWithContent`,`WithoutDivider`]}));y();export{h as Template,g as TitleWithContent,_ as WithoutDivider,v as __namedExportsOrder,p as default,y as n,l as t};