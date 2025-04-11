import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./BasePictureLF-DkRpuPn0.js";import"./constants-BUkAsgEf.js";import"./index-DuZrfDUH.js";import{A as i}from"./AccordionCore-B8zh8grm.js";import{C as A}from"./Card-Duuuo1TZ.js";const b={component:i,title:"Components/AccordionCore"},C={summary:"Titre onglet",children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et tempor blandit. 
              Nulla vitae eros a odio pretium gravida. Sed eget tortor nec massa lobortis bibendum. Morbi eget 
              ligula porttitor, euismod odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.`,isOpen:void 0,onClick:void 0},r={name:"AccordionCore",render:e=>t.jsx(i,{...e}),args:C},o={name:"AccordionCore With Custom Styled Summary",render:e=>t.jsx(i,{...e}),args:{summary:t.jsx("div",{style:{backgroundColor:"red",paddingBottom:"32px"}}),children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et tempor blandit. 
              Nulla vitae eros a odio pretium gravida. Sed eget tortor nec massa lobortis bibendum. Morbi eget 
              ligula porttitor, euismod odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.`,isOpen:void 0,onClick:void 0}},a={name:"AccordionCore With Card",render:e=>t.jsx(A,{classModifier:"large accordion",children:t.jsx(i,{...e})}),args:C};var s,n,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "AccordionCore",
  render: args => <AccordionCore {...args} />,
  args: defaultArgs
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,m,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "AccordionCore With Custom Styled Summary",
  render: args => <AccordionCore {...args} />,
  args: {
    summary: <div style={{
      backgroundColor: "red",
      paddingBottom: "32px"
    }} />,
    children: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et tempor blandit. 
              Nulla vitae eros a odio pretium gravida. Sed eget tortor nec massa lobortis bibendum. Morbi eget 
              ligula porttitor, euismod odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.\`,
    isOpen: undefined,
    onClick: undefined
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "AccordionCore With Card",
  render: args => <Card classModifier="large accordion">
      <AccordionCore {...args} />
    </Card>,
  args: defaultArgs
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const S=["AccordionCoreStory","AccordionCoreWithCustomStyledSummaryStory","AccordionCoreWithCardStory"],W=Object.freeze(Object.defineProperty({__proto__:null,AccordionCoreStory:r,AccordionCoreWithCardStory:a,AccordionCoreWithCustomStyledSummaryStory:o,__namedExportsOrder:S,default:b},Symbol.toStringTag,{value:"Module"}));export{W as A,r as a,o as b,a as c};
