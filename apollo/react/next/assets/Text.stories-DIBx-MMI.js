import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as K}from"./MessageApollo-glY2offe.js";import"./index-DuZrfDUH.js";import{S as Q}from"./Svg-BhXIr2Or.js";import{I as V}from"./ItemLabelApollo-BZT4_j7b.js";import{I as X}from"./ItemMessageCommon-gA1s3v3M.js";import"./_commonjsHelpers-CqkleIqs.js";import"./ButtonCommon-vXuvhiow.js";import"./check_circle-fill-BFt-p0hv.js";const z=u=>r.jsx(K,{...u,ItemLabelComponent:V,ItemMessageComponent:X}),Y="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M602-120q-122%200-213-68T269-367H120v-60h135q-2-12-3-26.5t-1-26.5q0-12%201-26.5t3-26.5H120v-60h149q32-115%20121.5-181T602-840q69%200%20129.5%2022.5T841-749l-51%2051q-38-35-87-53t-101-18q-96%200-163.5%2046.5T345-593h258v60H327q-3%2012-4%2026.5t-1%2026.5q0%2012%201%2026.5t4%2026.5h276v60H345q25%2085%2096%20130.5T602-191q52%200%20101.5-18t86.5-53l51%2050q-53%2047-113%2069.5T602-120Z'/%3e%3c/svg%3e",de={component:z,title:"Components/Form/Input/TextInput",args:{value:"John Doe",label:"Label",placeholder:"Placeholder",helper:"Informations complémentaires",name:"name",id:"nameid",disabled:!1,required:!1,className:"",type:"text",buttonLabel:"",unit:void 0},argTypes:{onChange:{action:"onChange"}}},e=({onChange:u,...G})=>r.jsx(z,{onChange:u,...G}),t={name:"Text placeholder",render:e,args:{value:"",placeholder:"Type your name"}},s={name:"Text filled",render:e},n={name:"Text disabled",render:e,args:{label:"Input disabled",description:"Description",unit:r.jsx("div",{children:"test"}),disabled:!0,helper:"Do you need help?"}},o={name:"Text with description",render:e,args:{description:"Description"}},a={name:"Text on error",render:e,args:{classModifier:"error",description:"Description",error:"Error Message","aria-errormessage":void 0},argTypes:{"aria-errormessage":{control:{type:"text"}}}},i={name:"Text on success",render:e,args:{description:"Description",success:"Success Message"}},c={name:"Text with button",render:e,args:{buttonLabel:"En savoir plus"}},d={name:"Text with unit",render:e,args:{unit:r.jsx("div",{children:"test"})}},p={name:"Text with side button",render:e,args:{sideButtonLabel:"Modifier"}},m={name:"Text with side button and description",render:e,args:{sideButtonLabel:"Modifier",description:"Description"}},l={name:"Text Full",render:e,args:{unit:r.jsx(Q,{src:Y,"aria-label":"en euros"}),classModifier:"error",description:"Description",buttonLabel:"En savoir plus",sideButtonLabel:"Modifier",error:"Error Message"}};var x,g,T;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Text placeholder",
  render,
  args: {
    value: "",
    placeholder: "Type your name"
  }
}`,...(T=(g=t.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var h,b,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Text filled",
  render
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var v,y,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Text disabled",
  render,
  args: {
    label: "Input disabled",
    description: "Description",
    unit: <div>test</div>,
    disabled: true,
    helper: "Do you need help?"
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var D,M,w;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Text with description",
  render,
  args: {
    description: "Description"
  }
}`,...(w=(M=o.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var I,L,q;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Text on error",
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
}`,...(q=(L=a.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var B,E,W;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Text on success",
  render,
  args: {
    description: "Description",
    success: "Success Message"
  }
}`,...(W=(E=i.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var j,C,F;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Text with button",
  render,
  args: {
    buttonLabel: "En savoir plus"
  }
}`,...(F=(C=c.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var O,H,P;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Text with unit",
  render,
  args: {
    unit: <div>test</div>
  }
}`,...(P=(H=d.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var A,U,_;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Text with side button",
  render,
  args: {
    sideButtonLabel: "Modifier"
  }
}`,...(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var J,N,R;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Text with side button and description",
  render,
  args: {
    sideButtonLabel: "Modifier",
    description: "Description"
  }
}`,...(R=(N=m.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var Z,$,k;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(k=($=l.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};const pe=["TextPlaceholderStory","TextStory","TextDisabledStory","TextWithDescriptionStory","TextOnErrorStory","TextOnSuccessStory","TextWithButton","TextWithUnit","TextWithSideButton","TextWithSideButtonAndDescription","TextWithFull"];export{n as TextDisabledStory,a as TextOnErrorStory,i as TextOnSuccessStory,t as TextPlaceholderStory,s as TextStory,c as TextWithButton,o as TextWithDescriptionStory,l as TextWithFull,p as TextWithSideButton,m as TextWithSideButtonAndDescription,d as TextWithUnit,pe as __namedExportsOrder,de as default};
