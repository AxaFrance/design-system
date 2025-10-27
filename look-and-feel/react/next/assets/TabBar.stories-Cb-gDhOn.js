import{j as e}from"./index-C-iqcyhV.js";import{c as $,A as E,n as O,G as F,e as b,a as H,H as W,J as q,K as G,w as K,L as V,N as z,o as J,O as Q,f as U,Q as X,I as Y}from"./ProgressBarCommon-Cz9LA5Bv.js";import{r}from"./index-ZnYipkzV.js";const S={center:"center"},g="af-tabbar",Z=({items:t,preSelectedTabIndex:n,direction:c="left",ItemTabBarComponent:l})=>{const[s,x]=r.useState(n||0),h=r.useRef([]),L=r.useRef(null),I=t.length,u=a=>a===s,v=r.useCallback(a=>{const i=I-1,p=C=>{x(C),h.current[C].focus(),a.stopPropagation(),a.preventDefault()};switch(a.key){case"ArrowRight":p(s<i?s+1:0);break;case"ArrowLeft":p(s>0?s-1:i);break;case"Home":p(0);break;case"End":p(i);break}},[s,I]);return e.jsxs("div",{className:$(g,c===S.center?`${g}--center`:""),children:[e.jsx("div",{role:"tablist",ref:L,children:t.map(({title:a},o)=>e.jsx(l,{id:`tab-${o}`,"aria-selected":u(o),"aria-controls":`tabpanel-${o}`,onKeyDown:v,onClick:()=>x(o),ref:i=>{h.current[o]=i},tabIndex:u(o)?0:-1,title:a},`tab-${a}`))}),t.map((a,o)=>e.jsx("div",{role:"tabpanel","aria-hidden":!u(o),id:`tabpanel-${o}`,"aria-labelledby":`tab-${o}`,children:a.content},`tabpanel-${a.title}`))]})},_=t=>e.jsx(E,{...t,SpinnerComponent:O}),A=r.forwardRef((t,n)=>e.jsx(F,{...t,ref:n,CheckboxComponent:H,ItemMessageComponent:b}));A.displayName="CheckboxText";A.__docgenInfo={description:"",methods:[],displayName:"CheckboxText"};const T=t=>e.jsx(W,{...t,ButtonComponent:_}),k=r.forwardRef((t,n)=>e.jsx(q,{...t,ref:n,ItemLabelComponent:T,ItemMessageComponent:b}));k.displayName="InputDate";k.__docgenInfo={description:"",methods:[],displayName:"InputDate"};const P=r.forwardRef((t,n)=>e.jsx(G,{...t,ref:n,ItemLabelComponent:T,ItemMessageComponent:b,InputTextAtomComponent:K}));P.displayName="InputText";P.__docgenInfo={description:"",methods:[],displayName:"InputText"};const w=r.forwardRef((t,n)=>e.jsx(V,{...t,ref:n,ItemLabelComponent:T,ItemMessageComponent:b}));w.displayName="TextArea";w.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const ee=({tag:t,tagProps:n={},...c})=>e.jsx(z,{...c,tag:t?e.jsx(J,{...Q,...n,children:t}):null}),f=t=>e.jsx(Z,{...t,ItemTabBarComponent:U}),D=r.forwardRef(({headingProps:t={},icon:n,iconProps:c={},...l},s)=>e.jsx(X,{...l,ref:s,headingComponent:ee,headingProps:{...t,children:l.title},iconComponent:n?Y:void 0,iconProps:n?{src:n,...c}:void 0,buttonComponent:_}));D.displayName="Modal";D.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{headingProps:{defaultValue:{value:"{}",computed:!1},required:!1},iconProps:{defaultValue:{value:"{}",computed:!1},required:!1}}};const te={component:f,title:"Components/TabBar",parameters:{layout:"fullscreen"}},m={name:"TabBar",render:t=>e.jsx(f,{...t}),args:{items:[{title:"Mes contrats",content:"Mon numéro de contrat, lorem ipsum "},{title:"Mes informations",content:"Mes informations, lorem ipsum"},{title:"Mes paramètres",content:"Mes paramètres, lorem ipsum"}],preSelectedTabIndex:0},argTypes:{items:{control:{type:"object"}},preSelectedTabIndex:{control:{type:"number"}},direction:{control:"select",options:["default","center"]}}},d={name:"TabBarWithReactNode",render:t=>e.jsx(f,{...t}),args:{items:[{title:"ReactNode tab 1",content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 1"}),e.jsx("p",{children:"Content 1"})]})},{title:"ReactNode tab 2",content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 2"}),e.jsx("p",{children:"Content 2"})]})},{title:"ReactNode tab 3",content:e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Titre 3"}),e.jsx("p",{children:"Content 3"})]})}],direction:S.center,preSelectedTabIndex:0}};var j,y,N;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(y=m.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var B,M,R;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "TabBarWithReactNode",
  render: args => <TabBar {...args} />,
  args: {
    items: [{
      title: "ReactNode tab 1",
      content: <>
            <h2>Titre 1</h2>
            <p>Content 1</p>
          </> as TabBarProps["items"][0]["content"]
    }, {
      title: "ReactNode tab 2",
      content: <>
            <h2>Titre 2</h2>
            <p>Content 2</p>
          </> as TabBarProps["items"][0]["content"]
    }, {
      title: "ReactNode tab 3",
      content: <>
            <h2>Titre 3</h2>
            <p>Content 3</p>
          </> as TabBarProps["items"][0]["content"]
    }],
    direction: tabBarDirection.center,
    preSelectedTabIndex: 0
  }
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const ne=["TabBarStory","TabBarWithReactNodeStory"],se=Object.freeze(Object.defineProperty({__proto__:null,TabBarStory:m,TabBarWithReactNodeStory:d,__namedExportsOrder:ne,default:te},Symbol.toStringTag,{value:"Module"}));export{se as T,m as a,d as b};
