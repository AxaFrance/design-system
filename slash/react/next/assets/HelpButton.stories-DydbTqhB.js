import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{o as N}from"./CardData---QWWqDB.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{P as g}from"./Popover-CjPXpSiB.js";const n=({className:s,classModifier:t,children:d,mode:f="click",placement:h="right",helpButtonContent:_=e.jsx("span",{className:"af-more-help",children:"i"})})=>{const u=N("btn af-btn--circle",t,"");return e.jsx(g,{className:s,classModifier:t,placement:h,mode:f,popoverElement:d,children:e.jsx("div",{className:u,children:_})})},j={title:"Components/HelpButton",component:n,args:{},argTypes:{placement:{options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"],control:{type:"select"}},mode:{options:["hover","click"],control:{type:"inline-radio"}}},parameters:{layout:"centered"}},a={name:"HelpButton",render:({...s})=>e.jsx(n,{...s,children:"Lorem ipsum dolor sit amet"}),args:{mode:"hover"}},o={name:"With HTML in the popover",render:({...s})=>e.jsx(n,{...s,children:e.jsxs("div",{className:"af-help-demo__container",children:[e.jsx("h3",{className:"af-help-demo__title",children:"Profile"}),e.jsxs("div",{className:"af-help-demo__infos",children:[e.jsxs("p",{className:"af-help-demo__info",children:[e.jsx("span",{className:"af-help-demo__info-title",children:"Tweets"}),e.jsx("span",{className:"af-help-demo__info-number",children:"1,337"})]}),e.jsxs("p",{className:"af-help-demo__info",children:[e.jsx("span",{className:"af-help-demo__info-title",children:"Following"}),e.jsx("span",{className:"af-help-demo__info-number",children:"561"})]}),e.jsxs("p",{className:"af-help-demo__info",children:[e.jsx("span",{className:"af-help-demo__info-title",children:"Followers"}),e.jsx("span",{className:"af-help-demo__info-number",children:"718"})]})]})]})}),args:{mode:"hover",classModifier:"custom"}};var l,r,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "HelpButton",
  render: ({
    ...args
  }) => <HelpButton {...args}>Lorem ipsum dolor sit amet</HelpButton>,
  args: {
    mode: "hover"
  }
}`,...(m=(r=a.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};var p,i,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "With HTML in the popover",
  render: ({
    ...args
  }) => <HelpButton {...args}>
      <div className="af-help-demo__container">
        <h3 className="af-help-demo__title">Profile</h3>
        <div className="af-help-demo__infos">
          <p className="af-help-demo__info">
            <span className="af-help-demo__info-title">Tweets</span>
            <span className="af-help-demo__info-number">1,337</span>
          </p>
          <p className="af-help-demo__info">
            <span className="af-help-demo__info-title">Following</span>
            <span className="af-help-demo__info-number">561</span>
          </p>
          <p className="af-help-demo__info">
            <span className="af-help-demo__info-title">Followers</span>
            <span className="af-help-demo__info-number">718</span>
          </p>
        </div>
      </div>
    </HelpButton>,
  args: {
    mode: "hover",
    classModifier: "custom"
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const x=["Default","WithHtml"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithHtml:o,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{a as D,T as H,o as W};
