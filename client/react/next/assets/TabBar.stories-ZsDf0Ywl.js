import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./LoaderLF-JQXF76to.js";/* empty css               */import{v as A,k as E}from"./LoaderCommon-DCg8_8er.js";import{r as b}from"./index-CtOEgLBf.js";import{fn as p}from"./index-CH2Su9EI.js";const C={center:"center"},S="af-tabbar",P=({items:a,preSelectedTabIndex:I,direction:M="left",ItemTabBarComponent:k})=>{const[o,h]=b.useState(I||0),u=b.useRef([]),v=b.useRef(null),f=a.length,d=n=>n===o,_=n=>{var t,r;h(n),(r=(t=a[n])==null?void 0:t.handleSelectTab)==null||r.call(t)},$=b.useCallback(n=>{const r=f-1,l=m=>{var i,g;h(m),(g=(i=a[m])==null?void 0:i.handleSelectTab)==null||g.call(i),u.current[m].focus(),n.stopPropagation(),n.preventDefault()};switch(n.key){case"ArrowRight":l(o<r?o+1:0);break;case"ArrowLeft":l(o>0?o-1:r);break;case"Home":l(0);break;case"End":l(r);break}},[o,f]);return e.jsxs("div",{className:A(S,M===C.center?`${S}--center`:""),children:[e.jsx("div",{role:"tablist",ref:v,children:a.map(({title:n},t)=>e.jsx(k,{id:`tab-${t}`,"aria-selected":d(t),"aria-controls":`tabpanel-${t}`,onKeyDown:$,onClick:()=>_(t),ref:r=>{u.current[t]=r},tabIndex:d(t)?0:-1,title:n},`tab-${n}`))}),a.map((n,t)=>e.jsx("div",{role:"tabpanel","aria-hidden":!d(t),id:`tabpanel-${t}`,"aria-labelledby":`tab-${t}`,children:n.content},`tabpanel-${n.title}`))]})},T=a=>e.jsx(P,{...a,ItemTabBarComponent:E}),w={component:T,title:"Components/TabBar",parameters:{layout:"fullscreen"}},s={name:"TabBar",render:a=>e.jsx(T,{...a}),args:{items:[{title:"Mes contrats",content:"Mon numéro de contrat, lorem ipsum "},{title:"Mes informations",content:"Mes informations, lorem ipsum"},{title:"Mes paramètres",content:"Mes paramètres, lorem ipsum"}],preSelectedTabIndex:0},argTypes:{items:{control:{type:"object"}},preSelectedTabIndex:{control:{type:"number"}},direction:{control:"select",options:["default","center"]}}},c={name:"TabBarWithReactNode",render:a=>e.jsx(T,{...a}),args:{items:[{title:"ReactNode tab 1",handleSelectTab:p(()=>console.log("ReactNode tab 1")),content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 1"}),e.jsx("p",{children:"Content 1"})]})},{title:"ReactNode tab 2",handleSelectTab:p(()=>console.log("ReactNode tab 2")),content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 2"}),e.jsx("p",{children:"Content 2"})]})},{title:"ReactNode tab 3",handleSelectTab:p(()=>console.log("ReactNode tab 3")),content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 3"}),e.jsx("p",{children:"Content 3"})]})}],direction:C.center,preSelectedTabIndex:0}};var x,j,R;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(R=(j=s.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var B,N,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(y=(N=c.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};const D=["TabBarStory","TabBarWithReactNodeStory"],K=Object.freeze(Object.defineProperty({__proto__:null,TabBarStory:s,TabBarWithReactNodeStory:c,__namedExportsOrder:D,default:w},Symbol.toStringTag,{value:"Module"}));export{K as T,s as a,c as b};
