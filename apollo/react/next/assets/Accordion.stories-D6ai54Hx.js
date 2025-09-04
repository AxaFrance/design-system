import{j as e}from"./index-C1mcBe1y.js";import{y as O,g as k,I as D}from"./ToggleCommon-DSlQiI5c.js";import{A as w}from"./AccordionCoreApollo-CqW2ANLe.js";import{r as _}from"./index-DbaA8R3S.js";import{b as C}from"./account_balance-fill-BrliCjlS.js";import{a as F}from"./index-B-lxVbXh.js";const z=({dateLabel:n,dateProps:t,tagLabel:a,tagProps:i,TagComponent:c})=>_.useMemo(()=>!!a||!!n,[a,n])?e.jsxs(e.Fragment,{children:[a?e.jsx("div",{className:"af-accordion__tag-container",children:e.jsx(c,{variant:"warning",...i,children:a})}):null,n?e.jsx("time",{className:"af-accordion__date",...t,children:n}):null]}):null,B=n=>e.jsx(z,{...n,TagComponent:O}),l={primary:"primary",secondary:"secondary"},R=({variant:n=l.primary,className:t,children:a,icon:i,title:c,subtitle:u,tagLabel:T,tagProps:q,dateLabel:L,dateProps:N,info1:p,info2:g,AccordionCoreComponent:P,AccordionTagDateContainerComponent:I,IconComponent:E,...V})=>{const M=_.useMemo(()=>k("af-apollo-accordion",t,n),[t,n]);return e.jsx(P,{className:M,summary:e.jsxs(e.Fragment,{children:[i?e.jsx(E,{role:"presentation",src:i,variant:"primary",size:"S",className:"af-accordion__icon"}):null,c?e.jsx("p",{className:"af-accordion__title",children:c}):null,u?e.jsx("p",{className:"af-accordion__subtitle",children:u}):null,e.jsx(I,{tagLabel:T,dateLabel:L,tagProps:q,dateProps:N}),p?e.jsx("p",{className:"af-accordion__info1",children:p}):null,g?e.jsx("p",{className:"af-accordion__info2",children:g}):null]}),...V,children:a})},m=n=>e.jsx(R,{...n,AccordionCoreComponent:w,AccordionTagDateContainerComponent:B,IconComponent:D}),G={component:m,title:"Components/Accordion"},d={variant:"primary",title:"Titre onglet",subtitle:"Sous-titre onglet",tagLabel:"En attente",tagProps:{variant:"warning"},info2:"+ 686,00 €",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur urna a tellus semper, id elementum ligula fermentum. In semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate at elit."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur urna a tellus semper, id elementum ligula fermentum. In semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate at elit."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur urna a tellus semper, id elementum ligula fermentum. In semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate at elit."})]}),isOpen:void 0,onClick:F("Accordion has been clicked")},r={name:"Accordion",render:n=>e.jsx(m,{...n}),args:{...d,icon:C,dateLabel:"01/01/2021",dateProps:{dateTime:"2021-01-01"},info1:"Lorem ipsum dolor sit amet"},argTypes:{dateLabel:{control:"text"},variant:{options:Object.values(l),control:{type:"select"},value:l.secondary}}},o={name:"Accordion Primary",render:n=>e.jsx(m,{...n}),args:{...d,icon:C,info1:"Lorem ipsum dolor sit amet"},argTypes:{dateLabel:{control:"text"},variant:{control:"text"}}},s={name:"Accordion Secondary",render:n=>e.jsx(m,{...n}),args:{...d,variant:"secondary",dateLabel:"01/01/2021",dateProps:{dateTime:"2021-01-01"}},argTypes:{dateLabel:{control:"text"},variant:{control:"text"}}};var y,x,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Accordion",
  render: args => <Accordion {...args} />,
  args: {
    ...commonArgs,
    icon: bank,
    dateLabel: "01/01/2021",
    dateProps: {
      dateTime: "2021-01-01"
    },
    info1: "Lorem ipsum dolor sit amet"
  },
  argTypes: {
    dateLabel: {
      control: "text"
    },
    variant: {
      options: Object.values(accordionVariants),
      control: {
        type: "select"
      },
      value: accordionVariants.secondary
    }
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,A,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Accordion Primary",
  render: args => <Accordion {...args} />,
  args: {
    ...commonArgs,
    icon: bank,
    info1: "Lorem ipsum dolor sit amet"
  },
  argTypes: {
    dateLabel: {
      control: "text"
    },
    variant: {
      control: "text"
    }
  }
}`,...(b=(A=o.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var j,S,h;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Accordion Secondary",
  render: args => <Accordion {...args} />,
  args: {
    ...commonArgs,
    variant: "secondary" as AccordionVariants,
    dateLabel: "01/01/2021",
    dateProps: {
      dateTime: "2021-01-01"
    }
  },
  argTypes: {
    dateLabel: {
      control: "text"
    },
    variant: {
      control: "text"
    }
  }
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const H=["AccordionDefaultStory","AccordionPrimaryStory","AccordionSecondaryStory"],Y=Object.freeze(Object.defineProperty({__proto__:null,AccordionDefaultStory:r,AccordionPrimaryStory:o,AccordionSecondaryStory:s,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{Y as A,r as a,o as b,s as c};
