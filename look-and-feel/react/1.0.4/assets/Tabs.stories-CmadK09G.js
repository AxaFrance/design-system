import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{b as j}from"./bluetooth_searching-BicIGu-i.js";import{T as s,D as c}from"./Tabs-uQNR_BBt.js";import{S as a}from"./Svg-CUaNRA4q.js";const h="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='m627-287%2045-45-159-160v-201h-60v225l174%20181ZM480-80q-82%200-155-31.5t-127.5-86Q143-252%20111.5-325T80-480q0-82%2031.5-155t86-127.5Q252-817%20325-848.5T480-880q82%200%20155%2031.5t127.5%2086Q817-708%20848.5-635T880-480q0%2082-31.5%20155t-86%20127.5Q708-143%20635-111.5T480-80Zm0-400Zm0%20340q140%200%20240-100t100-240q0-140-100-240T480-820q-140%200-240%20100T140-480q0%20140%20100%20240t240%20100Z'/%3e%3c/svg%3e",y={component:s,title:"Components/Tabs",parameters:{layout:"fullscreen"}},n={name:"Tabs",render:({items:t,preSelectedTabIndex:S,direction:u})=>{const i={items:t,preSelectedTabIndex:S};return u===c.center&&(i.direction=c.center),e.jsx(s,{...i})},args:{items:[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2",icon:e.jsx(a,{src:h})},{title:"Tab 3",content:"Content 3"}],preSelectedTabIndex:0},argTypes:{items:{control:{type:"object"}},preSelectedTabIndex:{control:{type:"number"}},direction:{control:"select",options:["default","center"]}}},r={name:"TabsCenterDirection",render:t=>e.jsx(s,{...t}),args:{items:[{title:"Center tab 1",content:"Content 1"},{title:"Center tab 2",content:"Content 2",icon:e.jsx(a,{src:h})},{title:"Center tab 3",content:"Content 3",icon:e.jsx(a,{src:j})}],preSelectedTabIndex:0,direction:c.center}},o={name:"TabsWithReactNode",render:t=>e.jsx(s,{...t}),args:{items:[{title:"ReactNode tab 1",content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 1"}),e.jsx("p",{children:"Content 1"})]})},{title:"ReactNode tab 2",content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 2"}),e.jsx("p",{children:"Content 2"})]})},{title:"ReactNode tab 3",content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 3"}),e.jsx("p",{children:"Content 3"})]})}],direction:c.center,preSelectedTabIndex:0}};var d,l,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Tabs",
  render: ({
    items,
    preSelectedTabIndex,
    direction
  }) => {
    const props: React.ComponentProps<typeof TabsClient> = {
      items,
      preSelectedTabIndex
    };
    if (direction === Direction.center) {
      props.direction = Direction.center;
    }
    return <TabsClient {...props} />;
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
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var b,m,T;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "TabsCenterDirection",
  render: args => <TabsClient {...args} />,
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
    direction: Direction.center
  }
}`,...(T=(m=r.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var C,x,g;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "TabsWithReactNode",
  render: args => <TabsClient {...args} />,
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
    direction: Direction.center,
    preSelectedTabIndex: 0
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const f=["TabsStory","TabsCenterDirectionStory","TabsWithReactNodeStory"],N=Object.freeze(Object.defineProperty({__proto__:null,TabsCenterDirectionStory:r,TabsStory:n,TabsWithReactNodeStory:o,__namedExportsOrder:f,default:y},Symbol.toStringTag,{value:"Module"}));export{N as T,n as a,r as b,o as c};
