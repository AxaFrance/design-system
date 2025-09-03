import{j as m}from"./index-C1mcBe1y.js";import{q as V}from"./FooterLF-BEBlYqIn.js";import{S as $}from"./constants-3NnbGPav.js";import"./index-DbaA8R3S.js";const ee="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M602-120q-122%200-213-68T269-367H120v-60h135q-2-12-3-26.5t-1-26.5q0-12%201-26.5t3-26.5H120v-60h149q32-115%20121.5-181T602-840q69%200%20129.5%2022.5T841-749l-51%2051q-38-35-87-53t-101-18q-96%200-163.5%2046.5T345-593h258v60H327q-3%2012-4%2026.5t-1%2026.5q0%2012%201%2026.5t4%2026.5h276v60H345q25%2085%2096%20130.5T602-191q52%200%20101.5-18t86.5-53l51%2050q-53%2047-113%2069.5T602-120Z'/%3e%3c/svg%3e",re={component:V,title:"Components/Form/Input/InputText",args:{value:"John Doe",label:"Label",placeholder:"Placeholder",helper:"Informations complémentaires",name:"name",id:"nameid",disabled:!1,required:!1,className:"",type:"text",buttonLabel:"En savoir plus",description:"My description",unit:void 0},argTypes:{onChange:{action:"onChange"}}},e=({onChange:X,...Y})=>m.jsx(V,{onChange:X,...Y}),r={name:"Placeholder",render:e,args:{value:""}},t={name:"Filled",render:e},n={name:"Required",render:e,args:{required:!0}},s={name:"Disabled",render:e,args:{label:"InputText disabled",description:"Description",unit:m.jsx("div",{children:"test"}),disabled:!0,helper:"Do you need help?"}},o={name:"With description",render:e,args:{description:"Description"}},a={name:"On error",render:e,args:{classModifier:"error",description:"Description",error:"Error Message","aria-errormessage":"Error Message"},argTypes:{"aria-errormessage":{control:{type:"text"}}}},i={name:"On success",render:e,args:{description:"Description",success:"Success Message"}},c={name:"With button",render:e,args:{buttonLabel:"En savoir plus"}},d={name:"With unit",render:e,args:{unit:m.jsx("div",{children:"test"})}},p={name:"With side button",render:e,args:{sideButtonLabel:"Modifier"}},u={name:"With side button and description",render:e,args:{sideButtonLabel:"Modifier",description:"Description"}},l={name:"Full",render:e,args:{unit:m.jsx($,{src:ee,"aria-label":"en euros"}),classModifier:"error",description:"Description",buttonLabel:"En savoir plus",sideButtonLabel:"Modifier",error:"Error Message"}};var g,h,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Placeholder",
  render,
  args: {
    value: ""
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,S,T;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Filled",
  render
}`,...(T=(S=t.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var I,v,y;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Required",
  render,
  args: {
    required: true
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var D,W,M;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Disabled",
  render,
  args: {
    label: "InputText disabled",
    description: "Description",
    unit: <div>test</div>,
    disabled: true,
    helper: "Do you need help?"
  }
}`,...(M=(W=s.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var q,f,E;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "With description",
  render,
  args: {
    description: "Description"
  }
}`,...(E=(f=o.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var B,L,O;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "On error",
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
}`,...(O=(L=a.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var j,F,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "On success",
  render,
  args: {
    description: "Description",
    success: "Success Message"
  }
}`,...(w=(F=i.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var P,_,R;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "With button",
  render,
  args: {
    buttonLabel: "En savoir plus"
  }
}`,...(R=(_=c.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var H,C,A;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "With unit",
  render,
  args: {
    unit: <div>test</div>
  }
}`,...(A=(C=d.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var U,z,J;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "With side button",
  render,
  args: {
    sideButtonLabel: "Modifier"
  }
}`,...(J=(z=p.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var N,Z,k;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "With side button and description",
  render,
  args: {
    sideButtonLabel: "Modifier",
    description: "Description"
  }
}`,...(k=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:k.source}}};var G,K,Q;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const te=["InputTextPlaceholderStory","InputTextStory","InputTextRequiredStory","InputTextDisabledStory","InputTextWithDescriptionStory","InputTextOnErrorStory","InputTextOnSuccessStory","InputTextWithButton","InputTextWithUnit","InputTextWithSideButton","InputTextWithSideButtonAndDescription","InputTextWithFull"],ie=Object.freeze(Object.defineProperty({__proto__:null,InputTextDisabledStory:s,InputTextOnErrorStory:a,InputTextOnSuccessStory:i,InputTextPlaceholderStory:r,InputTextRequiredStory:n,InputTextStory:t,InputTextWithButton:c,InputTextWithDescriptionStory:o,InputTextWithFull:l,InputTextWithSideButton:p,InputTextWithSideButtonAndDescription:u,InputTextWithUnit:d,__namedExportsOrder:te,default:re},Symbol.toStringTag,{value:"Module"}));export{ie as I,r as a};
