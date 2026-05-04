import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./jsx-runtime-CXZ2plg1.js";import{s as r,t as i}from"./client-D92F0iso.js";import{S as a}from"./LoaderCommon-C19GLX9C.js";var o=t({TabBarStory:()=>u,TabBarWithReactNodeStory:()=>d,__namedExportsOrder:()=>f,default:()=>l}),s,c,l,u,d,f,p=e((()=>{i(),s=n(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={component:r,title:`Components/TabBar`,parameters:{layout:`fullscreen`}},u={name:`TabBar`,render:e=>(0,s.jsx)(r,{...e}),args:{items:[{title:`Mes contrats`,content:`Mon numéro de contrat, lorem ipsum `},{title:`Mes informations`,content:`Mes informations, lorem ipsum`},{title:`Mes paramètres`,content:`Mes paramètres, lorem ipsum`}],preSelectedTabIndex:0},argTypes:{items:{control:{type:`object`}},preSelectedTabIndex:{control:{type:`number`}},direction:{control:`select`,options:[`default`,`center`]}}},d={name:`TabBarWithReactNode`,render:e=>(0,s.jsx)(r,{...e}),args:{items:[{title:`ReactNode tab 1`,handleSelectTab:c(()=>console.log(`ReactNode tab 1`)),content:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`h2`,{children:`Titre 1`}),(0,s.jsx)(`p`,{children:`Content 1`})]})},{title:`ReactNode tab 2`,handleSelectTab:c(()=>console.log(`ReactNode tab 2`)),content:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`h2`,{children:`Titre 2`}),(0,s.jsx)(`p`,{children:`Content 2`})]})},{title:`ReactNode tab 3`,handleSelectTab:c(()=>console.log(`ReactNode tab 3`)),content:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`h2`,{children:`Titre 3`}),(0,s.jsx)(`p`,{children:`Content 3`})]})}],direction:a.center,preSelectedTabIndex:0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "TabBar",
  render: args => <TabBar {...args} />,
  args: {
    items: [{
      title: "Mes contrats",
      content: "Mon numéro de contrat, lorem ipsum "
    }, {
      title: "Mes informations",
      content: "Mes informations, lorem ipsum"
    }, {
      title: "Mes paramètres",
      content: "Mes paramètres, lorem ipsum"
    }],
    preSelectedTabIndex: 0
  },
  argTypes: {
    items: {
      control: {
        type: "object"
      }
    },
    preSelectedTabIndex: {
      control: {
        type: "number"
      }
    },
    direction: {
      control: "select",
      options: ["default", "center"]
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "TabBarWithReactNode",
  render: args => <TabBar {...args} />,
  args: {
    items: [{
      title: "ReactNode tab 1",
      handleSelectTab: fn(() => console.log("ReactNode tab 1")),
      content: <>
            <h2>Titre 1</h2>
            <p>Content 1</p>
          </> as TabBarProps["items"][0]["content"]
    }, {
      title: "ReactNode tab 2",
      handleSelectTab: fn(() => console.log("ReactNode tab 2")),
      content: <>
            <h2>Titre 2</h2>
            <p>Content 2</p>
          </> as TabBarProps["items"][0]["content"]
    }, {
      title: "ReactNode tab 3",
      handleSelectTab: fn(() => console.log("ReactNode tab 3")),
      content: <>
            <h2>Titre 3</h2>
            <p>Content 3</p>
          </> as TabBarProps["items"][0]["content"]
    }],
    direction: tabBarDirection.center,
    preSelectedTabIndex: 0
  }
}`,...d.parameters?.docs?.source}}},f=[`TabBarStory`,`TabBarWithReactNodeStory`]}));p();export{u as TabBarStory,d as TabBarWithReactNodeStory,f as __namedExportsOrder,l as default,p as n,o as t};