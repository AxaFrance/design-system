import{j as e}from"./index-C-iqcyhV.js";import{K as k,r as _}from"./SkeletonApollo-DgGyeSAq.js";import{r as l}from"./index-ZnYipkzV.js";const y={center:"center"},h="af-tabbar",$=({items:r,preSelectedTabIndex:R,direction:I="left",ItemTabBarComponent:M})=>{const[a,m]=l.useState(R||0),p=l.useRef([]),N=l.useRef(null),T=r.length,d=t=>t===a,C=l.useCallback(t=>{const o=T-1,i=u=>{m(u),p.current[u].focus(),t.stopPropagation(),t.preventDefault()};switch(t.key){case"ArrowRight":i(a<o?a+1:0);break;case"ArrowLeft":i(a>0?a-1:o);break;case"Home":i(0);break;case"End":i(o);break}},[a,T]);return e.jsxs("div",{className:k(h,I===y.center?`${h}--center`:""),children:[e.jsx("div",{role:"tablist",ref:N,children:r.map(({title:t},n)=>e.jsx(M,{id:`tab-${n}`,"aria-selected":d(n),"aria-controls":`tabpanel-${n}`,onKeyDown:C,onClick:()=>m(n),ref:o=>{p.current[n]=o},tabIndex:d(n)?0:-1,title:t},`tab-${t}`))}),r.map((t,n)=>e.jsx("div",{role:"tabpanel","aria-hidden":!d(n),id:`tabpanel-${n}`,"aria-labelledby":`tab-${n}`,children:t.content},`tabpanel-${t.title}`))]})},b=r=>e.jsx($,{...r,ItemTabBarComponent:_}),v={component:b,title:"Components/TabBar",parameters:{layout:"fullscreen"}},s={name:"TabBar",render:r=>e.jsx(b,{...r}),args:{items:[{title:"Mes contrats",content:"Mon numéro de contrat, lorem ipsum "},{title:"Mes informations",content:"Mes informations, lorem ipsum"},{title:"Mes paramètres",content:"Mes paramètres, lorem ipsum"}],preSelectedTabIndex:0},argTypes:{items:{control:{type:"object"}},preSelectedTabIndex:{control:{type:"number"}},direction:{control:"select",options:["default","center"]}}},c={name:"TabBarWithReactNode",render:r=>e.jsx(b,{...r}),args:{items:[{title:"ReactNode tab 1",content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 1"}),e.jsx("p",{children:"Content 1"})]})},{title:"ReactNode tab 2",content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 2"}),e.jsx("p",{children:"Content 2"})]})},{title:"ReactNode tab 3",content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 3"}),e.jsx("p",{children:"Content 3"})]})}],direction:y.center,preSelectedTabIndex:0}};var f,x,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var j,S,B;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "TabBarWithReactNode",
  render: args => <TabBar {...args} />,
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
    direction: tabBarDirection.center,
    preSelectedTabIndex: 0
  }
}`,...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const A=["TabBarStory","TabBarWithReactNodeStory"],W=Object.freeze(Object.defineProperty({__proto__:null,TabBarStory:s,TabBarWithReactNodeStory:c,__namedExportsOrder:A,default:v},Symbol.toStringTag,{value:"Module"}));export{W as T,s as a,c as b};
