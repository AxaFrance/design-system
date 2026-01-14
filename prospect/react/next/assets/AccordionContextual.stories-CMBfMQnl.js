import{j as n}from"./index-C-iqcyhV.js";import{g as h,d as y}from"./SkeletonApollo-Cce1vNXK.js";import{A as _}from"./AccordionCoreApollo-Cf_WFvzz.js";import"./index-ZnYipkzV.js";import{b as C}from"./account_balance-fill-BrliCjlS.js";const N={info:"info"},u=e=>{if(e==="info")return"primary";if(e==="warning")return"error";if(e==="reverse")return"secondary"},k=({variant:e=N.info,className:A,children:b,icon:i,title:S,AccordionCoreComponent:j,IconComponent:q,...I})=>n.jsx(j,{className:h({baseClassName:"af-apollo-accordion-contextual",modifiers:[e],className:A}),showArrowAsClickIcon:!1,arrowIconVariant:u(e),summary:n.jsxs(n.Fragment,{children:[i?n.jsx(q,{role:"presentation",src:i,variant:u(e),size:"S",className:"af-accordion__icon"}):null,n.jsx("p",{className:"af-accordion__title",children:S})]}),...I,children:b}),s=e=>n.jsx(k,{...e,AccordionCoreComponent:_,IconComponent:y}),w={component:s,title:"Components/AccordionContextual"},t={variant:"info",title:"Titre onglet",children:n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur urna a tellus semper, id elementum ligula fermentum. In semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate at elit."}),n.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur urna a tellus semper, id elementum ligula fermentum. In semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate at elit."}),n.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur urna a tellus semper, id elementum ligula fermentum. In semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate at elit."})]})},r={name:"Accordion Contextual Info",render:e=>n.jsx(s,{...e}),args:{...t,icon:C,variant:"info"}},a={name:"Accordion Contextual Warning",render:e=>n.jsx(s,{...e}),args:{...t,icon:C,variant:"warning"}},o={name:"Accordion Contextual Reverse",render:e=>n.jsx("div",{style:{backgroundColor:"var(--axa-blue-100, var(--color-axa-blue))",padding:"0.5rem"},children:n.jsx(s,{...e})}),args:{...t,variant:"reverse"}};var c,m,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Accordion Contextual Info",
  render: args => <AccordionContextual {...args} />,
  args: {
    ...commonArgs,
    icon: bank,
    variant: "info"
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,p,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Accordion Contextual Warning",
  render: args => <AccordionContextual {...args} />,
  args: {
    ...commonArgs,
    icon: bank,
    variant: "warning"
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,f,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Accordion Contextual Reverse",
  render: args => <div style={{
    backgroundColor: "var(--axa-blue-100, var(--color-axa-blue))",
    padding: "0.5rem"
  }}>
      <AccordionContextual {...args} />
    </div>,
  args: {
    ...commonArgs,
    variant: "reverse"
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const V=["AccordionContextualInfoStory","AccordionContextualWarningStory","AccordionContextualReverseStory"],O=Object.freeze(Object.defineProperty({__proto__:null,AccordionContextualInfoStory:r,AccordionContextualReverseStory:o,AccordionContextualWarningStory:a,__namedExportsOrder:V,default:w},Symbol.toStringTag,{value:"Module"}));export{O as A,r as a,a as b,o as c};
