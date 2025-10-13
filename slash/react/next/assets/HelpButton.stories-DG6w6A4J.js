import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css               */import"./CardData-DYdLQljx.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{H as n}from"./index-9W7FGSRq.js";const d={title:"Components/HelpButton",component:n,args:{},argTypes:{placement:{options:["auto","auto-start","auto-end","top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"],control:{type:"select"}},mode:{options:["hover","click"],control:{type:"inline-radio"}}},parameters:{layout:"centered"}},a={name:"HelpButton",render:({...o})=>e.jsx(n,{...o,children:"Lorem ipsum dolor sit amet"}),args:{mode:"hover"}},s={name:"With HTML in the popover",render:({...o})=>e.jsx(n,{...o,children:e.jsxs("div",{className:"af-help-demo__container",children:[e.jsx("h3",{className:"af-help-demo__title",children:"Profile"}),e.jsxs("div",{className:"af-help-demo__infos",children:[e.jsxs("p",{className:"af-help-demo__info",children:[e.jsx("span",{className:"af-help-demo__info-title",children:"Tweets"}),e.jsx("span",{className:"af-help-demo__info-number",children:"1,337"})]}),e.jsxs("p",{className:"af-help-demo__info",children:[e.jsx("span",{className:"af-help-demo__info-title",children:"Following"}),e.jsx("span",{className:"af-help-demo__info-number",children:"561"})]}),e.jsxs("p",{className:"af-help-demo__info",children:[e.jsx("span",{className:"af-help-demo__info-title",children:"Followers"}),e.jsx("span",{className:"af-help-demo__info-number",children:"718"})]})]})]})}),args:{mode:"hover",classModifier:"custom"}};var t,l,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "HelpButton",
  render: ({
    ...args
  }) => <HelpButton {...args}>Lorem ipsum dolor sit amet</HelpButton>,
  args: {
    mode: "hover"
  }
}`,...(r=(l=a.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var m,p,i;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(i=(p=s.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const c=["Default","WithHtml"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithHtml:s,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{a as D,j as H,s as W};
