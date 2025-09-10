import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as b}from"./index-CXgh15wh.js";import{f as d}from"./index-28pPPJTf.js";import{t as a}from"./CardData-Dqmws-JC.js";const g={title:"Components/Tabs",component:a,parameters:{options:{}},argTypes:{onChange:{action:"tab changed"}},args:{onChange:d()}},h=e.jsxs("span",{children:[e.jsx("i",{className:"glyphicon glyphicon-ok"})," Title with left icon"]}),f=e.jsxs("span",{children:["Title with right icon ",e.jsx("i",{className:"glyphicon glyphicon-facetime-video"})]}),m=e.jsxs("span",{children:["Title with badge ",e.jsx(b,{classModifier:"danger",children:" 42 "})]}),p=e.jsxs("span",{children:["Title with badge and left icon",e.jsx(b,{classModifier:"error",children:" Lorem ipsum "}),e.jsx("i",{className:"glyphicon glyphicon-facetime-video"})]}),n={render:s=>e.jsx(a,{...s,children:e.jsx(a.Tab,{title:"My Title",children:"Content of my single tab"})}),args:{activeIndex:"0"},argTypes:{onChange:{action:"onChange"}}},t={render:s=>e.jsxs(a,{...s,children:[e.jsx(a.Tab,{title:h,classModifier:"has-icon-left",children:"Content of my first tab"}),e.jsx(a.Tab,{title:f,classModifier:"has-icon-right",children:"Content of my second tab"}),e.jsx(a.Tab,{title:m,children:"Content of my third tab "}),e.jsx(a.Tab,{title:p,classModifier:"has-icon-left",children:"Content of my fifth tab"})]}),args:{activeIndex:"1"},argTypes:{onChange:{action:"onChange"}}};var o,i,r;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <Tabs.Tab title="My Title">Content of my single tab</Tabs.Tab>
    </Tabs>,
  args: {
    activeIndex: "0"
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var c,l,T;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <Tabs.Tab title={TabTitleIconLeft} classModifier="has-icon-left">
        Content of my first tab
      </Tabs.Tab>
      <Tabs.Tab title={TabTitleIconRight} classModifier="has-icon-right">
        Content of my second tab
      </Tabs.Tab>
      <Tabs.Tab title={TabTitleBadge}>Content of my third tab </Tabs.Tab>
      <Tabs.Tab title={TabTitleIconBadge} classModifier="has-icon-left">
        Content of my fifth tab
      </Tabs.Tab>
    </Tabs>,
  args: {
    activeIndex: "1"
  },
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
}`,...(T=(l=t.parameters)==null?void 0:l.docs)==null?void 0:T.source}}};const x=["SingleTab","ComplexTabs"],M=Object.freeze(Object.defineProperty({__proto__:null,ComplexTabs:t,SingleTab:n,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{t as C,n as S,M as T};
