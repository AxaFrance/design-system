import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-PYnMZM5z.js";import{Ot as a,et as o,q as s,t as c,v as l}from"./distributeur-BiOr3XFa.js";var u=t({Template:()=>h,TitleWithContent:()=>g,WithoutDivider:()=>_,__namedExportsOrder:()=>v,default:()=>p}),d,f,p,m,h,g,_,v,y=e((()=>{c(),r(),d=i(),f=[`Button`,`Link`,`None`],p=n.type().meta({title:`Components/Title`,args:{children:`Sample Title`,heading:`h2`,withDivider:!0,contentLeft:`None`,contentRight:`None`},argTypes:{contentLeft:{options:f,control:{type:`select`}},contentRight:{options:f,control:{type:`select`}}}}),m=e=>{switch(e){case`Link`:return(0,d.jsx)(s,{href:`/`,children:`Click me`});case`Button`:return(0,d.jsx)(a,{children:`Click me`});default:return}},h=p.story({name:`Title`,render:({children:e,...t})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{...t,contentLeft:void 0,contentRight:void 0,children:e}),(0,d.jsx)(o,{label:`Sample Input to illustrate bottom margin`,required:!0})]}),args:{children:`Sample Title`,heading:`h2`,withDivider:!0},argTypes:{contentLeft:{control:!1},contentRight:{control:!1}}}),g=p.story({render:({children:e,contentLeft:t,contentRight:n,heading:r,withDivider:i})=>(0,d.jsx)(l,{heading:r,withDivider:i,contentLeft:m(t),contentRight:m(n),children:e}),args:{children:`Title with content`,heading:`h2`,withDivider:!0,contentLeft:`Button`,contentRight:`Link`}}),_=p.story({render:({children:e,heading:t})=>(0,d.jsx)(l,{heading:t,withDivider:!1,children:e}),args:{children:`Title without divider`,heading:`h2`,withDivider:!1},argTypes:{contentLeft:{control:!1},contentRight:{control:!1}}}),h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Title",
  render: ({
    children: text,
    ...args
  }) => <>
      <Title {...args} contentLeft={undefined} contentRight={undefined}>
        {text}
      </Title>

      <TextInput label="Sample Input to illustrate bottom margin" required />
    </>,
  args: {
    children: "Sample Title",
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
    contentLeft: {
      control: false
    },
    contentRight: {
      control: false
    }
  }
})`,..._.input.parameters?.docs?.source}}},v=[`Template`,`TitleWithContent`,`WithoutDivider`]}));y();export{h as Template,g as TitleWithContent,_ as WithoutDivider,v as __namedExportsOrder,p as default,y as n,u as t};