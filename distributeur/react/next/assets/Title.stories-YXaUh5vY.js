import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-D0-kNOLH.js";import{Ot as a,U as o,X as s,_ as c,n as l}from"./distributeur-O-0tl_gS.js";var u=t({Template:()=>g,TitleWithContent:()=>_,WithoutDivider:()=>v,__namedExportsOrder:()=>y,default:()=>m}),d,f,p,m,h,g,_,v,y,b=e((()=>{l(),r(),d=i(),f=[``,`content`],p=[`Button`,`Link`,`None`],m=n.type().meta({title:`Components/Title`,args:{children:`Sample Title`,classModifier:``,className:``,heading:`h2`,withDivider:!0,contentLeft:`None`,contentRight:`None`},argTypes:{contentLeft:{options:p,control:{type:`select`}},contentRight:{options:p,control:{type:`select`}},classModifier:{options:f,control:{type:`select`}}}}),h=e=>{switch(e){case`Link`:return(0,d.jsx)(o,{href:`/`,children:`Click me`});case`Button`:return(0,d.jsx)(a,{children:`Click me`});default:return}},g=m.story({name:`Title`,render:({children:e,classModifier:t,...n})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c,{classModifier:t,...n,contentLeft:void 0,contentRight:void 0,children:e}),(0,d.jsx)(s,{label:`Sample Input to illustrate bottom margin`,required:!0})]}),args:{children:`Sample Title`,classModifier:``,className:``,heading:`h2`,withDivider:!0},argTypes:{contentLeft:{control:!1},contentRight:{control:!1}}}),_=m.story({render:({children:e,contentLeft:t,contentRight:n,heading:r,withDivider:i})=>(0,d.jsx)(c,{heading:r,withDivider:i,contentLeft:h(t),contentRight:h(n),children:e}),args:{children:`Title with content`,heading:`h2`,withDivider:!0,contentLeft:`Button`,contentRight:`Link`}}),v=m.story({render:({children:e,heading:t})=>(0,d.jsx)(c,{heading:t,withDivider:!1,children:e}),args:{children:`Title without divider`,heading:`h2`,withDivider:!1},argTypes:{classModifier:{control:!1},className:{control:!1},contentLeft:{control:!1},contentRight:{control:!1}}}),g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Title",
  render: ({
    children: text,
    classModifier,
    ...args
  }) => <>
      <Title classModifier={classModifier} {...args} contentLeft={undefined} contentRight={undefined}>
        {text}
      </Title>

      <TextInput label="Sample Input to illustrate bottom margin" required />
    </>,
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
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...v.input.parameters?.docs?.source}}},y=[`Template`,`TitleWithContent`,`WithoutDivider`]}));b();export{g as Template,_ as TitleWithContent,v as WithoutDivider,y as __namedExportsOrder,m as default,b as n,u as t};