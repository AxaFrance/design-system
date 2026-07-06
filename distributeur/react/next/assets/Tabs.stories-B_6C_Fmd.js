import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-CpwZR4q2.js";import{kt as a,n as o,p as s}from"./distributeur-BZxz3JHq.js";var c=t({ComplexTabs:()=>_,SingleTab:()=>g,__namedExportsOrder:()=>v,default:()=>d}),l,u,d,f,p,m,h,g,_,v,y=e((()=>{o(),r(),l=i(),{fn:u}=__STORYBOOK_MODULE_TEST__,d=n.meta({title:`Components/Tabs`,component:s,parameters:{options:{}},argTypes:{onChange:{action:`tab changed`}},args:{onChange:u()}}),f=(0,l.jsx)(`span`,{children:`Long title that is very long`}),p=(0,l.jsx)(`span`,{children:`Title`}),m=(0,l.jsxs)(`span`,{children:[`Title with badge`,(0,l.jsx)(a,{variant:`success`,children:`42`})]}),h=(0,l.jsxs)(`span`,{children:[`Title with badge and left icon`,(0,l.jsx)(a,{variant:`error`,children:` Lorem ipsum `})]}),g=d.story({render:e=>(0,l.jsx)(s,{...e,children:(0,l.jsx)(s.Tab,{title:`My Title`,children:`Content of my single tab`})}),args:{activeIndex:`0`},argTypes:{onChange:{action:`onChange`}}}),_=d.story({render:e=>(0,l.jsxs)(s,{...e,children:[(0,l.jsx)(s.Tab,{title:f,classModifier:`has-icon-left`,children:`Content of my first tab`}),(0,l.jsx)(s.Tab,{title:p,classModifier:`has-icon-right`,children:`Content of my second tab`}),(0,l.jsx)(s.Tab,{title:m,children:`Content of my third tab `}),(0,l.jsx)(s.Tab,{title:h,classModifier:`has-icon-left`,children:`Content of my fourth tab`})]}),args:{activeIndex:`1`},argTypes:{onChange:{action:`onChange`}}}),g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,..._.input.parameters?.docs?.source}}},v=[`SingleTab`,`ComplexTabs`]}));y();export{_ as ComplexTabs,g as SingleTab,v as __namedExportsOrder,d as default,y as n,c as t};