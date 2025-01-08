import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{c as l}from"./call-fill-Nx5D3UHq.js";import{A as a}from"./Title-BfgsK-DC.js";/* empty css               */import"./Alert-k29qJE5v.js";import"./Button-BjcwjKsb.js";import{C as g}from"./Card-FCi1q2IJ.js";import"./Checkbox-C_sWxrJ4.js";import"./CheckboxSelect-POhRhbxH.js";import"./Radio-Dr4VedCr.js";import"./RadioSelect-DCZA--Gb.js";import"./Select-DMz3sUqq.js";import"./IconBg-cuWLDUjJ.js";import"./Footer-C8dAt6XO.js";import"./Link-CnMWJ9ii.js";import"./Loader-Demby5uR.js";import"./Modal-DMFJEU_j.js";import"./index-uubelm5h.js";import"./index-CfOt2XX2.js";import"./Pagination-BC_blc0d.js";import"./Skeleton-_BHz5ywW.js";import"./Stepper-Br4-c7GM.js";import{S as u}from"./Svg-CUaNRA4q.js";import"./Tabs-uQNR_BBt.js";import"./Tag-PCUeqJ0K.js";import"./DebugGrid-Cic2SHJb.js";const A={component:a,title:"Components/Accordion"},p={isTitleFirst:!0,icon:e.jsx(u,{src:l}),title:"Titre onglet",subtitle:"Titre onglet",tagLabel:"En attente",dateLabel:"01/01/2021",dateProps:{dateTime:"2021-01-01"},value:"+ 686,00 €",children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et tempor blandit. 
              Nulla vitae eros a odio pretium gravida. Sed eget tortor nec massa lobortis bibendum. Morbi eget 
              ligula porttitor, euismod odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.`,isOpen:void 0,onClick:void 0},r={name:"Accordion",render:t=>e.jsx(a,{...t}),args:p,argTypes:{dateLabel:{control:"text"}}},o={name:"Accordion With Card",render:t=>e.jsx(g,{classModifier:"large accordion",children:e.jsx(a,{...t})}),args:p,argTypes:{dateLabel:{control:"text"}}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Accordion",
  render: args => <Accordion {...args} />,
  args: defaultArgs,
  argTypes: {
    dateLabel: {
      control: "text"
    }
  }
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const b=["AccordionStory","AccordionWithCardStory"],G=Object.freeze(Object.defineProperty({__proto__:null,AccordionStory:r,AccordionWithCardStory:o,__namedExportsOrder:b,default:A},Symbol.toStringTag,{value:"Module"}));export{G as A,r as a,o as b};
