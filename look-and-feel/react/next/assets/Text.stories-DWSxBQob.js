import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{n as z}from"./ToggleCommon-BzacAE-A.js";import{S as Q}from"./constants-CekBojxZ.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";const V="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M602-120q-122%200-213-68T269-367H120v-60h135q-2-12-3-26.5t-1-26.5q0-12%201-26.5t3-26.5H120v-60h149q32-115%20121.5-181T602-840q69%200%20129.5%2022.5T841-749l-51%2051q-38-35-87-53t-101-18q-96%200-163.5%2046.5T345-593h258v60H327q-3%2012-4%2026.5t-1%2026.5q0%2012%201%2026.5t4%2026.5h276v60H345q25%2085%2096%20130.5T602-191q52%200%20101.5-18t86.5-53l51%2050q-53%2047-113%2069.5T602-120Z'/%3e%3c/svg%3e",te={component:z,title:"Components/Form/Input/TextInput",args:{value:"John Doe",label:"Label",placeholder:"Placeholder",helper:"Informations complémentaires",name:"name",id:"nameid",disabled:!1,required:!1,className:"",type:"text",buttonLabel:"En savoir plus",description:"My description",unit:void 0},argTypes:{onChange:{action:"onChange"}}},e=({onChange:G,...K})=>l.jsx(z,{onChange:G,...K}),r={name:"Text placeholder",render:e,args:{value:""}},t={name:"Text filled",render:e},s={name:"Text disabled",render:e,args:{label:"Input disabled",description:"Description",unit:l.jsx("div",{children:"test"}),disabled:!0,helper:"Do you need help?"}},n={name:"Text with description",render:e,args:{description:"Description"}},o={name:"Text on error",render:e,args:{classModifier:"error",description:"Description",error:"Error Message","aria-errormessage":"Error Message"},argTypes:{"aria-errormessage":{control:{type:"text"}}}},a={name:"Text on success",render:e,args:{description:"Description",success:"Success Message"}},i={name:"Text with button",render:e,args:{buttonLabel:"En savoir plus"}},c={name:"Text with unit",render:e,args:{unit:l.jsx("div",{children:"test"})}},d={name:"Text with side button",render:e,args:{sideButtonLabel:"Modifier"}},p={name:"Text with side button and description",render:e,args:{sideButtonLabel:"Modifier",description:"Description"}},u={name:"Text Full",render:e,args:{unit:l.jsx(Q,{src:V,"aria-label":"en euros"}),classModifier:"error",description:"Description",buttonLabel:"En savoir plus",sideButtonLabel:"Modifier",error:"Error Message"}};var m,x,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Text placeholder",
  render,
  args: {
    value: ""
  }
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var T,h,b;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Text filled",
  render
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,v,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Text disabled",
  render,
  args: {
    label: "Input disabled",
    description: "Description",
    unit: <div>test</div>,
    disabled: true,
    helper: "Do you need help?"
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var D,M,f;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Text with description",
  render,
  args: {
    description: "Description"
  }
}`,...(f=(M=n.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var w,E,q;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Text on error",
  render,
  args: {
    classModifier: "error",
    description: "Description",
    error: "Error Message",
    "aria-errormessage": "Error Message"
  },
  argTypes: {
    "aria-errormessage": {
      control: {
        type: "text"
      }
    }
  }
}`,...(q=(E=o.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var B,L,W;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Text on success",
  render,
  args: {
    description: "Description",
    success: "Success Message"
  }
}`,...(W=(L=a.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var I,j,F;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Text with button",
  render,
  args: {
    buttonLabel: "En savoir plus"
  }
}`,...(F=(j=i.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var O,H,C;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Text with unit",
  render,
  args: {
    unit: <div>test</div>
  }
}`,...(C=(H=c.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var P,A,U;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Text with side button",
  render,
  args: {
    sideButtonLabel: "Modifier"
  }
}`,...(U=(A=d.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var _,J,N;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Text with side button and description",
  render,
  args: {
    sideButtonLabel: "Modifier",
    description: "Description"
  }
}`,...(N=(J=p.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var R,Z,k;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Text Full",
  render,
  args: {
    unit: <Svg src={euroSymbolIcon} aria-label="en euros" />,
    classModifier: "error",
    description: "Description",
    buttonLabel: "En savoir plus",
    sideButtonLabel: "Modifier",
    error: "Error Message"
  }
}`,...(k=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:k.source}}};const se=["TextPlaceholderStory","TextStory","TextDisabledStory","TextWithDescriptionStory","TextOnErrorStory","TextOnSuccessStory","TextWithButton","TextWithUnit","TextWithSideButton","TextWithSideButtonAndDescription","TextWithFull"];export{s as TextDisabledStory,o as TextOnErrorStory,a as TextOnSuccessStory,r as TextPlaceholderStory,t as TextStory,i as TextWithButton,n as TextWithDescriptionStory,u as TextWithFull,d as TextWithSideButton,p as TextWithSideButtonAndDescription,c as TextWithUnit,se as __namedExportsOrder,te as default};
