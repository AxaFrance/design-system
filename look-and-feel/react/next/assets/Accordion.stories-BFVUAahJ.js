import{j as e}from"./index-C1mcBe1y.js";import{y as E,g as V,I as O}from"./FooterLF-Cnd-k_XT.js";import{A as k}from"./AccordionCoreLF-C8MlPF3G.js";import{r as S}from"./index-DbaA8R3S.js";import{a as D}from"./index-B-lxVbXh.js";const Z=({dateLabel:n,dateProps:t,tagLabel:a,tagProps:i,TagComponent:c})=>S.useMemo(()=>!!a||!!n,[a,n])?e.jsxs(e.Fragment,{children:[a?e.jsx("div",{className:"af-accordion__tag-container",children:e.jsx(c,{variant:"warning",...i,children:a})}):null,n?e.jsx("time",{className:"af-accordion__date",...t,children:n}):null]}):null,B=n=>e.jsx(Z,{...n,TagComponent:E}),u={primary:"primary",secondary:"secondary"},F=({variant:n=u.primary,className:t,children:a,icon:i,title:c,subtitle:l,tagLabel:C,tagProps:T,dateLabel:L,dateProps:N,info1:p,info2:g,AccordionCoreComponent:P,AccordionTagDateContainerComponent:w,IconComponent:Q,...I})=>{const M=S.useMemo(()=>V("af-apollo-accordion",t,n),[t,n]);return e.jsx(P,{className:M,summary:e.jsxs(e.Fragment,{children:[i?e.jsx(Q,{role:"presentation",src:i,variant:"primary",size:"S",className:"af-accordion__icon"}):null,c?e.jsx("p",{className:"af-accordion__title",children:c}):null,l?e.jsx("p",{className:"af-accordion__subtitle",children:l}):null,e.jsx(w,{tagLabel:C,dateLabel:L,tagProps:T,dateProps:N}),p?e.jsx("p",{className:"af-accordion__info1",children:p}):null,g?e.jsx("p",{className:"af-accordion__info2",children:g}):null]}),...I,children:a})},m=n=>e.jsx(F,{...n,AccordionCoreComponent:k,AccordionTagDateContainerComponent:B,IconComponent:O}),_="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M189-275v-256q0-16.75%2012.18-28.88%2012.17-12.12%2030-12.12%2017.82%200%2029.32%2012.12Q272-547.75%20272-531v257q0%2017.75-11.68%2029.37Q248.65-233%20230.82-233%20213-233%20201-245.13q-12-12.12-12-29.87Zm254%201v-257q0-16.75%2012.18-28.88%2012.17-12.12%2029-12.12Q501-572%20513-559.88q12%2012.13%2012%2028.88v257q0%2016.75-12.18%2028.87-12.17%2012.13-29%2012.13Q467-233%20455-245.13q-12-12.12-12-28.87ZM102-102q-19.75%200-33.37-13.68Q55-129.35%2055-149.18%2055-169%2068.63-182.5%2082.25-196%20102-196h756q19.75%200%2033.88%2013.68Q906-168.65%20906-148.82q0%2019.82-14.12%2033.32Q877.75-102%20858-102H102Zm586-173v-256q0-16.75%2012.18-28.88%2012.17-12.12%2030-12.12%2017.82%200%2029.32%2012.12Q771-547.75%20771-531v257q0%2017.75-11.68%2029.37Q747.65-233%20729.82-233%20712-233%20700-245.13q-12-12.12-12-29.87Zm171-334H96q-17.58%200-29.29-12.21T55-650v-29q0-11%205.5-21T76-716l359-204q20.17-11%2045-11t45%2011l356%20202q11%207%2018%2018t7%2024.5v18.23q0%2020.59-13.47%2034.43Q879.05-609%20859-609Z'/%3e%3c/svg%3e",z={component:m,title:"Components/Accordion"},d={variant:"primary",title:"Titre onglet",subtitle:"Sous-titre onglet",tagLabel:"En attente",tagProps:{variant:"warning"},info2:"+ 686,00 €",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur urna a tellus semper, id elementum ligula fermentum. In semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate at elit."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur urna a tellus semper, id elementum ligula fermentum. In semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate at elit."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur urna a tellus semper, id elementum ligula fermentum. In semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate at elit."})]}),isOpen:void 0,onClick:D("Accordion has been clicked")},r={name:"Accordion",render:n=>e.jsx(m,{...n}),args:{...d,icon:_,dateLabel:"01/01/2021",dateProps:{dateTime:"2021-01-01"},info1:"Lorem ipsum dolor sit amet"},argTypes:{dateLabel:{control:"text"},variant:{options:Object.values(u),control:{type:"select"},value:u.secondary}}},o={name:"Accordion Primary",render:n=>e.jsx(m,{...n}),args:{...d,icon:_,info1:"Lorem ipsum dolor sit amet"},argTypes:{dateLabel:{control:"text"},variant:{control:"text"}}},s={name:"Accordion Secondary",render:n=>e.jsx(m,{...n}),args:{...d,variant:"secondary",dateLabel:"01/01/2021",dateProps:{dateTime:"2021-01-01"}},argTypes:{dateLabel:{control:"text"},variant:{control:"text"}}};var v,x,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,q,A;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(A=(q=o.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var b,h,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(h=s.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const H=["AccordionDefaultStory","AccordionPrimaryStory","AccordionSecondaryStory"],W=Object.freeze(Object.defineProperty({__proto__:null,AccordionDefaultStory:r,AccordionPrimaryStory:o,AccordionSecondaryStory:s,__namedExportsOrder:H,default:z},Symbol.toStringTag,{value:"Module"}));export{W as A,r as a,o as b,s as c};
