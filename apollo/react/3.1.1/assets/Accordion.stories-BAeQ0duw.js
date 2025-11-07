import{j as e}from"./index-C-iqcyhV.js";import{u as c,d as k,v as M}from"./TimelineVerticalApollo-BA7cnjgh.js";import{A as w}from"./AccordionCoreApollo-CUCRxwZ8.js";import"./index-ZnYipkzV.js";import{b as L}from"./account_balance-fill-BrliCjlS.js";import{a as z}from"./index-B-lxVbXh.js";const m={primary:"primary",secondary:"secondary"},D=({variant:a=m.primary,className:q,children:C,icon:u,title:T,subtitle:d,tagLabel:p,tagProps:o,dateLabel:g,dateProps:t,info1:b,info2:y,AccordionCoreComponent:I,TagComponent:V,IconComponent:E,...O})=>e.jsx(I,{className:c({baseClassName:"af-apollo-accordion",modifiers:[a],className:q}),summary:e.jsxs(e.Fragment,{children:[u?e.jsx(E,{role:"presentation",src:u,variant:"primary",size:"S",className:"af-accordion__icon"}):null,e.jsx("p",{className:"af-accordion__title",children:T}),d?e.jsx("p",{className:"af-accordion__subtitle",children:d}):null,p?e.jsx(V,{variant:"warning",...o,className:c({baseClassName:"af-accordion__tag-container",className:o==null?void 0:o.className}),children:p}):null,g?e.jsx("time",{...t,className:c({baseClassName:"af-accordion__date",className:t==null?void 0:t.className}),children:g}):null,b?e.jsx("p",{className:"af-accordion__info1",children:b}):null,y?e.jsx("p",{className:"af-accordion__info2",children:y}):null]}),...O,children:C}),i=a=>e.jsx(D,{...a,AccordionCoreComponent:w,TagComponent:M,IconComponent:k}),F={component:i,title:"Components/Accordion"},l={variant:"primary",title:"Titre onglet",subtitle:"Sous-titre onglet",tagLabel:"En attente",tagProps:{variant:"warning"},info2:"+ 686,00 €",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur urna a tellus semper, id elementum ligula fermentum. In semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate at elit."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur urna a tellus semper, id elementum ligula fermentum. In semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate at elit."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur urna a tellus semper, id elementum ligula fermentum. In semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate at elit."})]}),isOpen:void 0,onClick:z("Accordion has been clicked")},n={name:"Accordion",render:a=>e.jsx(i,{...a}),args:{...l,icon:L,dateLabel:"01/01/2021",dateProps:{dateTime:"2021-01-01"},info1:"Lorem ipsum dolor sit amet"},argTypes:{dateLabel:{control:"text"},variant:{options:Object.values(m),control:{type:"select"},value:m.secondary}}},r={name:"Accordion Primary",render:a=>e.jsx(i,{...a}),args:{...l,icon:L,info1:"Lorem ipsum dolor sit amet"},argTypes:{dateLabel:{control:"text"},variant:{control:"text"}}},s={name:"Accordion Secondary",render:a=>e.jsx(i,{...a}),args:{...l,variant:"secondary",dateLabel:"01/01/2021",dateProps:{dateTime:"2021-01-01"}},argTypes:{dateLabel:{control:"text"},variant:{control:"text"}}};var v,f,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var A,S,j;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(j=(S=r.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var _,N,h;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(h=(N=s.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};const R=["AccordionDefaultStory","AccordionPrimaryStory","AccordionSecondaryStory"],Q=Object.freeze(Object.defineProperty({__proto__:null,AccordionDefaultStory:n,AccordionPrimaryStory:r,AccordionSecondaryStory:s,__namedExportsOrder:R,default:F},Symbol.toStringTag,{value:"Module"}));export{Q as A,n as a,r as b,s as c};
