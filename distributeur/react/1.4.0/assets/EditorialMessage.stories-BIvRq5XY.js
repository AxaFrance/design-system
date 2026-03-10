import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./EditorialMessage-BmsJa9B6.js";import{r as Q}from"./index-ZnYipkzV.js";import"./index-63p0MazF.js";const M=({baseClassName:i,modifiers:l=[],className:a=""})=>{const c=l.filter(Boolean).map(m=>`${i}--${m}`),d=[i,...c,...a.split(" ")].filter(Boolean);return Array.from(new Set(d)).join(" ")},u=({children:i,type:l,title:a,icon:c,className:d})=>{const m=M({baseClassName:"af-editorial-message",modifiers:[l],className:d}),p=Q.useId();return e.jsxs("article",{className:m,"aria-labelledby":p,children:[e.jsx("div",{className:"af-editorial-message__icon",children:e.jsx(I,{src:c,role:"presentation"})}),a?e.jsx("h4",{className:"af-editorial-message__title",id:p,children:a}):null,i?e.jsx("div",{className:"af-editorial-message__content",children:i}):null]})},C="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M480.21-740q-35.21%200-59.71-24.75t-24.5-59.5Q396-859%20420.29-884t59.5-25q35.21%200%2059.71%2024.91%2024.5%2024.9%2024.5%2059.88%200%2034.56-24.29%2059.38Q515.42-740%20480.21-740ZM360-72v-528q-66.7-4.6-128.85-12.8Q169-621%20110-637l21-80q87%2022%20172.5%2030t176.5%208q91%200%20177-8t174-30l20%2080q-61%2015-122.5%2023.5T601-599.92V-72h-83v-268h-76v268h-82Z'/%3e%3c/svg%3e",Z="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M448-56q-43%200-80.5-7.5T300-86q25-126%2082-244t153-201q-116%2058-199.5%20161T215-140q-5-5-9.5-9t-9.5-9q-49-48-75-111T95-402q0-74%2027.5-141T202-662q84-85%20218.5-111t391.5-5q25%20244-2%20385T696-164q-50%2052-114.5%2080T448-56Z'/%3e%3c/svg%3e",z="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M284.03-526Q221-526%20178-569.47t-43-106.16q0-62.68%2043.44-106.03Q221.89-825%20284.58-825q62.68%200%20106.05%2043.34Q434-738.31%20434-675.77q0%2063.03-43.47%20106.4Q347.06-526%20284.03-526Zm-.15-94q23.24%200%2039.68-16.26Q340-652.53%20340-675.76q0-23.24-16.26-38.74-16.27-15.5-39.5-15.5-23.24%200-38.74%2015.32-15.5%2015.33-15.5%2038.56%200%2023.24%2015.32%2039.68Q260.65-620%20283.88-620Zm391.51%20485Q613-135%20569.5-178.26q-43.5-43.27-43.5-106%200-62.74%2043.47-106.24%2043.47-43.5%20106.5-43.5t106.53%2043.9q43.5%2043.9%2043.5%20106t-44.11%20105.6q-44.1%2043.5-106.5%2043.5Zm.37-94q23.24%200%2038.74-16.06%2015.5-16.06%2015.5-39T714.68-323q-15.33-16-38.56-16-23.24%200-39.68%2016.06t-16.44%2039Q620-261%20636.26-245q16.27%2016%2039.5%2016ZM201-135l-66-66%20625-625%2066%2066-625%20625Z'/%3e%3c/svg%3e",P=["green","information","promotion"],U=["accessibility_new-fill","eco-fill","percent-fill"],B={options:P,control:{type:"inline-radio"},table:{type:{summary:"string"},category:"Style"},description:"Type of the editorial message. Used to determine the icon and style."},L={title:"Components/EditorialMessage",component:u,argTypes:{type:B,children:{control:{type:"text"},description:"Content of the editorial message. Either children or title must be provided.",table:{category:"Content",type:{summary:"string"}}},title:{control:{type:"text"},description:"Title of the message. Either title or children must be provided.",table:{category:"Content",type:{summary:"string"}}},icon:{control:{type:"inline-radio"},options:U,description:"Icon displayed in the editorial message, as a URI.",table:{category:"Style"},mapping:{"accessibility_new-fill":C,"eco-fill":Z,"percent-fill":z}}},render:i=>e.jsx(u,{...i,icon:i.icon}),parameters:{docs:{description:{component:`Visual component used to highlight information about accessibility, promotions, eco-design, etc.
Its display is not triggered by user interaction.`}}}},t={args:{type:"green",title:"Eco-conception",icon:"eco-fill",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},n={args:{type:"information",title:"Accessibility",icon:"accessibility_new-fill",children:"This service is designed to be accessible to everyone, including people with disabilities."}},o={args:{type:"promotion",title:"Promotion",icon:"percent-fill",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},s={name:"No content (title only)",args:{type:"green",title:"This application was built with eco-design in mind.",icon:"eco-fill"},argTypes:{children:{control:!1}}},r={name:"No Title (content only)",args:{type:"green",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This application was built following eco-design best practices, minimizing its environmental impact through optimized code, reduced resource consumption, and sustainable development principles."}),e.jsx("p",{children:"We prioritize energy efficiency, limit data transfers, and implement green hosting solutions to ensure our digital footprint remains as small as possible while delivering exceptional user experience."})]}),icon:"eco-fill"},argTypes:{children:{control:!1},title:{control:!1}}};var g,h,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: "green",
    title: "Eco-conception",
    icon: "eco-fill",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,b,q;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: "information",
    title: "Accessibility",
    icon: "accessibility_new-fill",
    children: "This service is designed to be accessible to everyone, including people with disabilities."
  }
}`,...(q=(b=n.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var v,x,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: "promotion",
    title: "Promotion",
    icon: "percent-fill",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var T,E,N;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "No content (title only)",
  args: {
    type: "green",
    title: "This application was built with eco-design in mind.",
    icon: "eco-fill"
  },
  argTypes: {
    children: {
      control: false
    }
  }
}`,...(N=(E=s.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var _,j,S;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "No Title (content only)",
  args: {
    type: "green",
    children: <>
        <p>
          This application was built following eco-design best practices,
          minimizing its environmental impact through optimized code, reduced
          resource consumption, and sustainable development principles.
        </p>
        <p>
          We prioritize energy efficiency, limit data transfers, and implement
          green hosting solutions to ensure our digital footprint remains as
          small as possible while delivering exceptional user experience.
        </p>
      </>,
    icon: "eco-fill"
  },
  argTypes: {
    children: {
      control: false
    },
    title: {
      control: false
    }
  }
}`,...(S=(j=r.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const D=["Green","Information","Promotion","NoContent","NoTitle"],V=Object.freeze(Object.defineProperty({__proto__:null,Green:t,Information:n,NoContent:s,NoTitle:r,Promotion:o,__namedExportsOrder:D,default:L},Symbol.toStringTag,{value:"Module"}));export{V as E,t as G,n as I,r as N,o as P,s as a};
