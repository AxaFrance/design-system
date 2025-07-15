import{j as l}from"./index-C1mcBe1y.js";import{n as k,S as Q}from"./DropdownCommon-CL2-5KWb.js";import"./index-DbaA8R3S.js";const V="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M602-120q-122%200-213-68T269-367H120v-60h135q-2-12-3-26.5t-1-26.5q0-12%201-26.5t3-26.5H120v-60h149q32-115%20121.5-181T602-840q69%200%20129.5%2022.5T841-749l-51%2051q-38-35-87-53t-101-18q-96%200-163.5%2046.5T345-593h258v60H327q-3%2012-4%2026.5t-1%2026.5q0%2012%201%2026.5t4%2026.5h276v60H345q25%2085%2096%20130.5T602-191q52%200%20101.5-18t86.5-53l51%2050q-53%2047-113%2069.5T602-120Z'/%3e%3c/svg%3e",X={component:k,title:"Components/Form/Input/InputText",args:{value:"John Doe",label:"Label",placeholder:"Placeholder",helper:"Informations complémentaires",name:"name",id:"nameid",disabled:!1,required:!1,className:"",type:"text",buttonLabel:"",unit:void 0},argTypes:{onChange:{action:"onChange"}}},e=({onChange:G,...K})=>l.jsx(k,{onChange:G,...K}),r={name:"Placeholder",render:e,args:{value:"",placeholder:"Type your name"}},t={name:"Filled",render:e},n={name:"Disabled",render:e,args:{label:"InputText disabled",description:"Description",unit:l.jsx("div",{children:"test"}),disabled:!0,helper:"Do you need help?"}},s={name:"With description",render:e,args:{description:"Description"}},o={name:"On error",render:e,args:{classModifier:"error",description:"Description",error:"Error Message","aria-errormessage":void 0},argTypes:{"aria-errormessage":{control:{type:"text"}}}},a={name:"On success",render:e,args:{description:"Description",success:"Success Message"}},i={name:"With button",render:e,args:{buttonLabel:"En savoir plus"}},c={name:"With unit",render:e,args:{unit:l.jsx("div",{children:"test"})}},d={name:"With side button",render:e,args:{sideButtonLabel:"Modifier"}},p={name:"With side button and description",render:e,args:{sideButtonLabel:"Modifier",description:"Description"}},u={name:"Full",render:e,args:{unit:l.jsx(Q,{src:V,"aria-label":"en euros"}),classModifier:"error",description:"Description",buttonLabel:"En savoir plus",sideButtonLabel:"Modifier",error:"Error Message"}};var m,g,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Placeholder",
  render,
  args: {
    value: "",
    placeholder: "Type your name"
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Filled",
  render
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var T,I,y;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Disabled",
  render,
  args: {
    label: "InputText disabled",
    description: "Description",
    unit: <div>test</div>,
    disabled: true,
    helper: "Do you need help?"
  }
}`,...(y=(I=n.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var v,D,W;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "With description",
  render,
  args: {
    description: "Description"
  }
}`,...(W=(D=s.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var f,M,q;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "On error",
  render,
  args: {
    classModifier: "error",
    description: "Description",
    error: "Error Message",
    "aria-errormessage": undefined
  },
  argTypes: {
    "aria-errormessage": {
      control: {
        type: "text"
      }
    }
  }
}`,...(q=(M=o.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var B,E,L;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "On success",
  render,
  args: {
    description: "Description",
    success: "Success Message"
  }
}`,...(L=(E=a.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var O,j,F;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "With button",
  render,
  args: {
    buttonLabel: "En savoir plus"
  }
}`,...(F=(j=i.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var w,P,_;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "With unit",
  render,
  args: {
    unit: <div>test</div>
  }
}`,...(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var H,C,A;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "With side button",
  render,
  args: {
    sideButtonLabel: "Modifier"
  }
}`,...(A=(C=d.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var U,z,J;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "With side button and description",
  render,
  args: {
    sideButtonLabel: "Modifier",
    description: "Description"
  }
}`,...(J=(z=p.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var N,R,Z;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Full",
  render,
  args: {
    unit: <Svg src={euroSymbolIcon} aria-label="en euros" />,
    classModifier: "error",
    description: "Description",
    buttonLabel: "En savoir plus",
    sideButtonLabel: "Modifier",
    error: "Error Message"
  }
}`,...(Z=(R=u.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};const Y=["InputTextPlaceholderStory","InputTextStory","InputTextDisabledStory","InputTextWithDescriptionStory","InputTextOnErrorStory","InputTextOnSuccessStory","InputTextWithButton","InputTextWithUnit","InputTextWithSideButton","InputTextWithSideButtonAndDescription","InputTextWithFull"],te=Object.freeze(Object.defineProperty({__proto__:null,InputTextDisabledStory:n,InputTextOnErrorStory:o,InputTextOnSuccessStory:a,InputTextPlaceholderStory:r,InputTextStory:t,InputTextWithButton:i,InputTextWithDescriptionStory:s,InputTextWithFull:u,InputTextWithSideButton:d,InputTextWithSideButtonAndDescription:p,InputTextWithUnit:c,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{te as I,r as a};
