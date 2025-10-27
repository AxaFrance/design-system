import{j as t}from"./index-C-iqcyhV.js";import{c as E,A as U,n as O,G as H,e as d,a as W,H as V,J as q,K as G,w as K,L as z,N as J,o as Q,O as X,f as Y,Q as Z,I as ee,U as te,V as ne}from"./FileUploadCommon-BZUq6j8J.js";import{r}from"./index-ZnYipkzV.js";const S={center:"center"},j="af-tabbar",ae=({items:e,preSelectedTabIndex:n,direction:c="left",ItemTabBarComponent:p})=>{const[s,I]=r.useState(n||0),h=r.useRef([]),v=r.useRef(null),C=e.length,f=a=>a===s,$=r.useCallback(a=>{const i=C-1,b=g=>{I(g),h.current[g].focus(),a.stopPropagation(),a.preventDefault()};switch(a.key){case"ArrowRight":b(s<i?s+1:0);break;case"ArrowLeft":b(s>0?s-1:i);break;case"Home":b(0);break;case"End":b(i);break}},[s,C]);return t.jsxs("div",{className:E(j,c===S.center?`${j}--center`:""),children:[t.jsx("div",{role:"tablist",ref:v,children:e.map(({title:a},o)=>t.jsx(p,{id:`tab-${o}`,"aria-selected":f(o),"aria-controls":`tabpanel-${o}`,onKeyDown:$,onClick:()=>I(o),ref:i=>{h.current[o]=i},tabIndex:f(o)?0:-1,title:a},`tab-${a}`))}),e.map((a,o)=>t.jsx("div",{role:"tabpanel","aria-hidden":!f(o),id:`tabpanel-${o}`,"aria-labelledby":`tab-${o}`,children:a.content},`tabpanel-${a.title}`))]})},A=e=>t.jsx(U,{...e,SpinnerComponent:O}),k=r.forwardRef((e,n)=>t.jsx(H,{...e,ref:n,CheckboxComponent:W,ItemMessageComponent:d}));k.displayName="CheckboxText";k.__docgenInfo={description:"",methods:[],displayName:"CheckboxText"};const u=e=>t.jsx(V,{...e,ButtonComponent:A}),F=r.forwardRef((e,n)=>t.jsx(q,{...e,ref:n,ItemLabelComponent:u,ItemMessageComponent:d}));F.displayName="InputDate";F.__docgenInfo={description:"",methods:[],displayName:"InputDate"};const w=r.forwardRef((e,n)=>t.jsx(G,{...e,ref:n,ItemLabelComponent:u,ItemMessageComponent:d,InputTextAtomComponent:K}));w.displayName="InputText";w.__docgenInfo={description:"",methods:[],displayName:"InputText"};const P=r.forwardRef((e,n)=>t.jsx(z,{...e,ref:n,ItemLabelComponent:u,ItemMessageComponent:d}));P.displayName="TextArea";P.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const oe=({tag:e,tagProps:n={},...c})=>t.jsx(J,{...c,tag:e?t.jsx(Q,{...X,...n,children:e}):null}),T=e=>t.jsx(ae,{...e,ItemTabBarComponent:Y}),L=r.forwardRef(({headingProps:e={},icon:n,iconProps:c={},...p},s)=>t.jsx(Z,{...p,ref:s,headingComponent:oe,headingProps:{...e,children:p.title},iconComponent:n?ee:void 0,iconProps:n?{src:n,...c}:void 0,buttonComponent:A}));L.displayName="Modal";L.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{headingProps:{defaultValue:{value:"{}",computed:!1},required:!1},iconProps:{defaultValue:{value:"{}",computed:!1},required:!1}}};const x=r.forwardRef((e,n)=>t.jsx(te,{...e,ref:n,ItemLabelComponent:u,ItemMessageComponent:d}));x.displayName="InputFile";x.__docgenInfo={description:"",methods:[],displayName:"InputFile"};const D=r.forwardRef((e,n)=>t.jsx(ne,{...e,ref:n,InputFileComponent:x}));D.displayName="FileUpload";D.__docgenInfo={description:"",methods:[],displayName:"FileUpload"};const re={component:T,title:"Components/TabBar",parameters:{layout:"fullscreen"}},m={name:"TabBar",render:e=>t.jsx(T,{...e}),args:{items:[{title:"Mes contrats",content:"Mon numéro de contrat, lorem ipsum "},{title:"Mes informations",content:"Mes informations, lorem ipsum"},{title:"Mes paramètres",content:"Mes paramètres, lorem ipsum"}],preSelectedTabIndex:0},argTypes:{items:{control:{type:"object"}},preSelectedTabIndex:{control:{type:"number"}},direction:{control:"select",options:["default","center"]}}},l={name:"TabBarWithReactNode",render:e=>t.jsx(T,{...e}),args:{items:[{title:"ReactNode tab 1",content:t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:"Titre 1"}),t.jsx("p",{children:"Content 1"})]})},{title:"ReactNode tab 2",content:t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:"Titre 2"}),t.jsx("p",{children:"Content 2"})]})},{title:"ReactNode tab 3",content:t.jsxs(t.Fragment,{children:[t.jsx("h2",{children:"Titre 3"}),t.jsx("p",{children:"Content 3"})]})}],direction:S.center,preSelectedTabIndex:0}};var y,N,B;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(B=(N=m.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var M,R,_;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(R=l.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const se=["TabBarStory","TabBarWithReactNodeStory"],le=Object.freeze(Object.defineProperty({__proto__:null,TabBarStory:m,TabBarWithReactNodeStory:l,__namedExportsOrder:se,default:re},Symbol.toStringTag,{value:"Module"}));export{le as T,m as a,l as b};
