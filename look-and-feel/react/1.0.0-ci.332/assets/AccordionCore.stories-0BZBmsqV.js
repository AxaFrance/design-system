import{j as i}from"./jsx-runtime-QvZ8i92b.js";import{A as a}from"./Title-CkInkqf4.js";/* empty css               */import"./Alert-yYw8AEPN.js";import"./Button-GV2C7V7f.js";import{C as A}from"./Card-FCi1q2IJ.js";import"./Checkbox-DPn8M_Uc.js";import"./CheckboxSelect-FCKGgETg.js";import"./Radio-CYDN5Meu.js";import"./RadioSelect-CY_JYun0.js";import"./Select-DPf08Y0e.js";import"./IconBg-cuWLDUjJ.js";import"./Footer-Bbkzdz5M.js";import"./Link-BQTbBxg2.js";import"./Loader-DTzMALSS.js";import"./Modal-CD3ho01h.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";import"./Pagination-R-Zl63vI.js";import"./Stepper-Br4-c7GM.js";import"./Svg-C4poEASt.js";import"./Tabs-uQNR_BBt.js";import"./Tag-PCUeqJ0K.js";import"./Skeleton-_BHz5ywW.js";const b={component:a,title:"Components/AccordionCore"},C={summary:"Titre onglet",children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et tempor blandit. 
              Nulla vitae eros a odio pretium gravida. Sed eget tortor nec massa lobortis bibendum. Morbi eget 
              ligula porttitor, euismod odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.`,isOpen:void 0,onClick:void 0},o={name:"AccordionCore",render:r=>i.jsx(a,{...r}),args:C},e={name:"AccordionCore With Custom Styled Summary",render:r=>i.jsx(a,{...r}),args:{summary:i.jsx("div",{style:{backgroundColor:"red",paddingBottom:"32px"}}),children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et tempor blandit. 
              Nulla vitae eros a odio pretium gravida. Sed eget tortor nec massa lobortis bibendum. Morbi eget 
              ligula porttitor, euismod odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.`,isOpen:void 0,onClick:void 0}},t={name:"AccordionCore With Card",render:r=>i.jsx(A,{classModifier:"large accordion",children:i.jsx(a,{...r})}),args:C};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "AccordionCore",
  render: args => <AccordionCore {...args} />,
  args: defaultArgs
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var d,c,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "AccordionCore With Card",
  render: args => <Card classModifier="large accordion">
      <AccordionCore {...args} />
    </Card>,
  args: defaultArgs
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const S=["AccordionCoreStory","AccordionCoreWithCustomStyledSummaryStory","AccordionCoreWithCardStory"],H=Object.freeze(Object.defineProperty({__proto__:null,AccordionCoreStory:o,AccordionCoreWithCardStory:t,AccordionCoreWithCustomStyledSummaryStory:e,__namedExportsOrder:S,default:b},Symbol.toStringTag,{value:"Module"}));export{H as A,o as a,e as b,t as c};
