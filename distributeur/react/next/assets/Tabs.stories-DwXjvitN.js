import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{ai as a,aj as b}from"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import"./index-CtOEgLBf.js";import{fn as d}from"./index-CH2Su9EI.js";const g={title:"Components/Tabs",component:a,parameters:{options:{}},argTypes:{onChange:{action:"tab changed"}},args:{onChange:d()}},h=e.jsx("span",{children:"Long title that is very long"}),m=e.jsx("span",{children:"Title"}),f=e.jsxs("span",{children:["Title with badge",e.jsx(b,{variant:"success",children:"42"})]}),p=e.jsxs("span",{children:["Title with badge and left icon",e.jsx(b,{variant:"error",children:" Lorem ipsum "})]}),n={render:s=>e.jsx(a,{...s,children:e.jsx(a.Tab,{title:"My Title",children:"Content of my single tab"})}),args:{activeIndex:"0"},argTypes:{onChange:{action:"onChange"}}},t={render:s=>e.jsxs(a,{...s,children:[e.jsx(a.Tab,{title:h,classModifier:"has-icon-left",children:"Content of my first tab"}),e.jsx(a.Tab,{title:m,classModifier:"has-icon-right",children:"Content of my second tab"}),e.jsx(a.Tab,{title:f,children:"Content of my third tab "}),e.jsx(a.Tab,{title:p,classModifier:"has-icon-left",children:"Content of my fourth tab"})]}),args:{activeIndex:"1"},argTypes:{onChange:{action:"onChange"}}};var o,r,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,T,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <Tabs.Tab title={TabTitleIconLeft} classModifier="has-icon-left">
        Content of my first tab
      </Tabs.Tab>
      <Tabs.Tab title={TabTitleIconRight} classModifier="has-icon-right">
        Content of my second tab
      </Tabs.Tab>
      <Tabs.Tab title={TabTitleBadge}>Content of my third tab </Tabs.Tab>
      <Tabs.Tab title={TabTitleIconBadge} classModifier="has-icon-left">
        Content of my fourth tab
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
}`,...(l=(T=t.parameters)==null?void 0:T.docs)==null?void 0:l.source}}};const C=["SingleTab","ComplexTabs"],M=Object.freeze(Object.defineProperty({__proto__:null,ComplexTabs:t,SingleTab:n,__namedExportsOrder:C,default:g},Symbol.toStringTag,{value:"Module"}));export{t as C,n as S,M as T};
