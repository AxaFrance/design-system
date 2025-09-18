import{j as o}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import{u as s,B as u,L as f}from"./CardData-Eef1XmUi.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";const L={title:"Components/Title",component:s},y=["","content"],c=["Button","Link","None"],a=n=>{switch(n){case"Link":return o.jsx(f,{href:"/",children:"Click me"});case"Button":return o.jsx(u,{children:"Click me"});default:return}},e={name:"Title",render:({children:n,classModifier:r,...i})=>o.jsx(s,{classModifier:r,...i,children:n}),args:{children:"Sample Title",classModifier:"",className:"",heading:"h2"},argTypes:{classModifier:{options:y,control:{type:"select"}}}},t={render:({children:n,contentLeft:r,contentRight:i,heading:T})=>o.jsx(s,{heading:T,contentLeft:a(r),contentRight:a(i),children:n}),args:{children:"Title with content",heading:"h2",contentLeft:"Button",contentRight:"Link"},argTypes:{contentLeft:{options:c,control:{type:"select"}},contentRight:{options:c,control:{type:"select"}}}};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Title",
  render: ({
    children: text,
    classModifier,
    ...args
  }) => <Title classModifier={classModifier} {...args}>
      {text}
    </Title>,
  args: {
    children: "Sample Title",
    classModifier: "",
    className: "",
    heading: "h2"
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "select"
      }
    }
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,g,m;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
  },
  argTypes: {
    contentLeft: {
      options: CONTENTS,
      control: {
        type: "select"
      }
    },
    contentRight: {
      options: CONTENTS,
      control: {
        type: "select"
      }
    }
  }
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const S=["Template","TitleWithContent"],j=Object.freeze(Object.defineProperty({__proto__:null,Template:e,TitleWithContent:t,__namedExportsOrder:S,default:L},Symbol.toStringTag,{value:"Module"}));export{j as T,e as a};
