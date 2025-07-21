import{j as e}from"./index-C1mcBe1y.js";import{m as l}from"./DropdownCommon--nfHtO0E.js";import"./constants-OBzR94yJ.js";import{r as p}from"./index-DbaA8R3S.js";const i=({className:s,classModifier:n})=>{const d=p.useMemo(()=>l("af-divider",s,n),[s,n]);return e.jsx("hr",{className:d})},c={title:"Components/Divider",component:i},r={name:"Divider",render:s=>e.jsxs("div",{children:[e.jsx("span",{children:"Hello"}),e.jsx(i,{...s})," ",e.jsx("span",{children:"world!"})]}),args:{classModifier:" "},argTypes:{classModifier:{control:{type:"text"},defaultValue:" "}}};var o,a,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Divider",
  render: args => <div>
      <span>Hello</span>
      <Divider {...args} /> <span>world!</span>
    </div>,
  args: {
    classModifier: " "
  },
  argTypes: {
    classModifier: {
      control: {
        type: "text"
      },
      defaultValue: " "
    }
  }
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const m=["Default"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{g as D,r as a};
