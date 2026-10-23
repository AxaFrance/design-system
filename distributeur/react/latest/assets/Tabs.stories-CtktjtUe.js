import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i}from"./iframe-DBecIi7S.js";import{E as a,t as o,w as s}from"./distributeur-wY98V-UD.js";var c=t({ComplexTabs:()=>_,SingleTab:()=>g,__namedExportsOrder:()=>v,default:()=>d}),l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{o(),r(),l=n(),{fn:u}=__STORYBOOK_MODULE_TEST__,d=i.type().meta({title:`Components/Tabs`,parameters:{options:{}},argTypes:{onChange:{action:`tab changed`}},args:{onChange:u()}}),f=(0,l.jsx)(`span`,{children:`Long title that is very long`}),p=(0,l.jsx)(`span`,{children:`Title`}),m=(0,l.jsxs)(`span`,{children:[`Title with badge`,(0,l.jsx)(s,{variant:`success`,children:`42`})]}),h=(0,l.jsxs)(`span`,{children:[`Title with badge and left icon`,(0,l.jsx)(s,{variant:`error`,children:` Lorem ipsum `})]}),g=d.story({render:e=>(0,l.jsx)(a,{...e,children:(0,l.jsx)(a.Tab,{title:`My Title`,children:`Content of my single tab`})}),args:{activeIndex:`0`},argTypes:{onChange:u()}}),_=d.story({render:e=>(0,l.jsxs)(a,{...e,children:[(0,l.jsx)(a.Tab,{title:f,className:`has-icon-left`,children:`Content of my first tab`}),(0,l.jsx)(a.Tab,{title:p,className:`has-icon-right`,children:`Content of my second tab`}),(0,l.jsx)(a.Tab,{title:m,children:`Content of my third tab `}),(0,l.jsx)(a.Tab,{title:h,className:`has-icon-left`,children:`Content of my fourth tab`})]}),args:{activeIndex:`1`},argTypes:{onChange:u()}}),g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <Tabs {...args}>
      <Tabs.Tab title="My Title">Content of my single tab</Tabs.Tab>
    </Tabs>,
  args: {
    activeIndex: "0"
  },
  argTypes: {
    onChange: fn()
  }
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <Tabs {...args}>
      <Tabs.Tab title={TabTitleIconLeft} className="has-icon-left">
        Content of my first tab
      </Tabs.Tab>
      <Tabs.Tab title={TabTitleIconRight} className="has-icon-right">
        Content of my second tab
      </Tabs.Tab>
      <Tabs.Tab title={TabTitleBadge}>Content of my third tab </Tabs.Tab>
      <Tabs.Tab title={TabTitleIconBadge} className="has-icon-left">
        Content of my fourth tab
      </Tabs.Tab>
    </Tabs>,
  args: {
    activeIndex: "1"
  },
  argTypes: {
    onChange: fn()
  }
})`,..._.input.parameters?.docs?.source}}},v=[`SingleTab`,`ComplexTabs`]})))()}export{y as i,g as n,c as r,_ as t};