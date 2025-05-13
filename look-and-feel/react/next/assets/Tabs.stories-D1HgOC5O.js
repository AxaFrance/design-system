import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./ToggleCommon-KjXh1eM_.js";import{h as c,D as s,S as a}from"./constants-CjjPHJly.js";import"./index-DuZrfDUH.js";const j="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M362-94v-314L168-214l-42-42%20224-224-224-224%2042-42%20194%20194v-314h30l214%20214-172%20172%20172%20172L392-94h-30Zm60-458%20100-100-100-98v198Zm0%20342%20100-98-100-100v198Zm237-183-85-87%2085-85q8%2020%2012.5%2041.5T676-480q0%2023-4.5%2044.5T659-393Zm118%20115-44-43q20-37%2030.5-77t10.5-82q0-42-10.5-82T733-639l44-45q29%2046%2043%2098t14%20106q0%2054-14%20105t-43%2097Z'/%3e%3c/svg%3e",C="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='m627-287%2045-45-159-160v-201h-60v225l174%20181ZM480-80q-82%200-155-31.5t-127.5-86Q143-252%20111.5-325T80-480q0-82%2031.5-155t86-127.5Q252-817%20325-848.5T480-880q82%200%20155%2031.5t127.5%2086Q817-708%20848.5-635T880-480q0%2082-31.5%20155t-86%20127.5Q708-143%20635-111.5T480-80Zm0-400Zm0%20340q140%200%20240-100t100-240q0-140-100-240T480-820q-140%200-240%20100T140-480q0%20140%20100%20240t240%20100Z'/%3e%3c/svg%3e",v={component:c,title:"Components/Tabs",parameters:{layout:"fullscreen"}},n={name:"Tabs",render:({items:t,preSelectedTabIndex:S,direction:u})=>{const i={items:t,preSelectedTabIndex:S};return u===s.center&&(i.direction=s.center),e.jsx(c,{...i})},args:{items:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2",icon:e.jsx(a,{src:C})},{title:"Tab 3",content:"Content 3"}],preSelectedTabIndex:0},argTypes:{items:{control:{type:"object"}},preSelectedTabIndex:{control:{type:"number"}},direction:{control:"select",options:["default","center"]}}},r={name:"TabsCenterDirection",render:t=>e.jsx(c,{...t}),args:{items:[{title:"Center tab 1",content:"Content 1"},{title:"Center tab 2",content:"Content 2",icon:e.jsx(a,{src:C})},{title:"Center tab 3",content:"Content 3",icon:e.jsx(a,{src:j})}],preSelectedTabIndex:0,direction:s.center}},o={name:"TabsWithReactNode",render:t=>e.jsx(c,{...t}),args:{items:[{title:"ReactNode tab 1",content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 1"}),e.jsx("p",{children:"Content 1"})]})},{title:"ReactNode tab 2",content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 2"}),e.jsx("p",{children:"Content 2"})]})},{title:"ReactNode tab 3",content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 3"}),e.jsx("p",{children:"Content 3"})]})}],direction:s.center,preSelectedTabIndex:0}};var d,l,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Tabs",
  render: ({
    items,
    preSelectedTabIndex,
    direction
  }) => {
    const props: React.ComponentProps<typeof Tabs> = {
      items,
      preSelectedTabIndex
    };
    if (direction === TabsDirection.center) {
      props.direction = TabsDirection.center;
    }
    return <Tabs {...props} />;
  },
  args: {
    items: [{
      title: "Tab 1",
      content: "Content 1"
    }, {
      title: "Tab 2",
      content: "Content 2",
      icon: <Svg src={accessTime} />
    }, {
      title: "Tab 3",
      content: "Content 3"
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
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,b,T;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "TabsCenterDirection",
  render: args => <Tabs {...args} />,
  args: {
    items: [{
      title: "Center tab 1",
      content: "Content 1"
    }, {
      title: "Center tab 2",
      content: "Content 2",
      icon: <Svg src={accessTime} />
    }, {
      title: "Center tab 3",
      content: "Content 3",
      icon: <Svg src={bluetoothAudio} />
    }],
    preSelectedTabIndex: 0,
    direction: TabsDirection.center
  }
}`,...(T=(b=r.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var g,h,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "TabsWithReactNode",
  render: args => <Tabs {...args} />,
  args: {
    items: [{
      title: "ReactNode tab 1",
      content: <>
            <h2>Titre 1</h2>
            <p>Content 1</p>
          </>
    }, {
      title: "ReactNode tab 2",
      content: <>
            <h2>Titre 2</h2>
            <p>Content 2</p>
          </>
    }, {
      title: "ReactNode tab 3",
      content: <>
            <h2>Titre 3</h2>
            <p>Content 3</p>
          </>
    }],
    direction: TabsDirection.center,
    preSelectedTabIndex: 0
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const y=["TabsStory","TabsCenterDirectionStory","TabsWithReactNodeStory"],D=Object.freeze(Object.defineProperty({__proto__:null,TabsCenterDirectionStory:r,TabsStory:n,TabsWithReactNodeStory:o,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{D as T,n as a,r as b,o as c};
