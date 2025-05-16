import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./ToggleCommon-DtnX5O3S.js";import{B as T,g as M,S as P}from"./constants-BjDRdfnA.js";import{r as C}from"./index-DuZrfDUH.js";import{A as B}from"./AccordionCore-DcWaCBLT.js";import{u as E}from"./useIsSmallScreen-B3lIGOTq.js";import{T as O}from"./TagCommon-4A9MopNl.js";import{C as w}from"./Card-6u_Jbc8P.js";import{c as I}from"./call-fill-Nx5D3UHq.js";const x=({tagLabel:o,tagProps:c,dateLabel:e,dateProps:t})=>C.useMemo(()=>!!o||!!e,[o,e])?r.jsxs("div",{className:"af-accordion__tag-date-container",children:[o&&r.jsx("div",{className:"af-accordion__tag-container",children:r.jsx(O,{variant:"warning",...c,children:o})}),e&&r.jsx("time",{className:"af-accordion__date",...t,children:e})]}):null,d=({title:o,children:c,icon:e,subtitle:t,tagLabel:i,tagProps:l,dateLabel:m,dateProps:p,value:g,isTitleFirst:a=!0,...b})=>{const u=E(T.SM),f=!!(e&&a),y=C.useMemo(()=>M("af-accordion__summary",a?"title-first":""),[a]);return r.jsx(B,{summary:r.jsxs(r.Fragment,{children:[f&&u&&r.jsx("div",{className:"af-accordion__icon",children:e}),!a&&r.jsx(x,{tagLabel:i,dateLabel:m,tagProps:l,dateProps:p}),r.jsxs("div",{className:"af-accordion__title-container",children:[f&&!u&&r.jsx("div",{className:"af-accordion__icon",children:e}),r.jsx("p",{className:"af-accordion__title",children:o}),t&&r.jsx("p",{className:"af-accordion__subtitle",children:t})]}),a&&r.jsx(x,{tagLabel:i,dateLabel:m,tagProps:l,dateProps:p}),g&&r.jsx("p",{className:"af-accordion__value",children:g})]}),summaryProps:{className:y},...b,children:c})},W={component:d,title:"Components/Accordion"},N={isTitleFirst:!0,icon:r.jsx(P,{src:I}),title:"Titre onglet",subtitle:"Titre onglet",tagLabel:"En attente",dateLabel:"01/01/2021",dateProps:{dateTime:"2021-01-01"},value:"+ 686,00 €",children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et tempor blandit. 
              Nulla vitae eros a odio pretium gravida. Sed eget tortor nec massa lobortis bibendum. Morbi eget 
              ligula porttitor, euismod odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.`,isOpen:void 0,onClick:void 0},s={name:"Accordion",render:o=>r.jsx(d,{...o}),args:N,argTypes:{dateLabel:{control:"text"}}},n={name:"Accordion With Card",render:o=>r.jsx(w,{classModifier:"large accordion",children:r.jsx(d,{...o})}),args:N,argTypes:{dateLabel:{control:"text"}}};var _,j,A;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Accordion",
  render: args => <Accordion {...args} />,
  args: defaultArgs,
  argTypes: {
    dateLabel: {
      control: "text"
    }
  }
}`,...(A=(j=s.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var h,S,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Accordion With Card",
  render: args => <Card classModifier="large accordion">
      <Accordion {...args} />
    </Card>,
  args: defaultArgs,
  argTypes: {
    dateLabel: {
      control: "text"
    }
  }
}`,...(v=(S=n.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const L=["AccordionStory","AccordionWithCardStory"],Q=Object.freeze(Object.defineProperty({__proto__:null,AccordionStory:s,AccordionWithCardStory:n,__namedExportsOrder:L,default:W},Symbol.toStringTag,{value:"Module"}));export{Q as A,s as a,n as b};
