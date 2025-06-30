import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{t as f,B as w}from"./DropdownCommon-A_ctlsuA.js";import{S as x}from"./constants-CIOWrZ2e.js";import{r as T}from"./index-DuZrfDUH.js";import{L as Z}from"./LinkCommon-BNUTu61S.js";import{e as y}from"./error-BJevbpIZ.js";const b="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='m421-298%20283-283-46-45-237%20237-120-120-45%2045%20165%20166Zm59%20218q-82%200-155-31.5t-127.5-86Q143-252%20111.5-325T80-480q0-83%2031.5-156t86-127Q252-817%20325-848.5T480-880q83%200%20156%2031.5T763-763q54%2054%2085.5%20127T880-480q0%2082-31.5%20155T763-197.5q-54%2054.5-127%2086T480-80Zm0-60q142%200%20241-99.5T820-480q0-142-99-241t-241-99q-141%200-240.5%2099T140-480q0%20141%2099.5%20240.5T480-140Zm0-340Z'/%3e%3c/svg%3e",A="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M480-71q-11%200-21.96-4.43Q447.07-79.87%20438-88L88-438q-8.13-9.07-12.57-20.04Q71-469%2071-480t4.43-22.34Q79.87-513.68%2088-522l350-350q9.07-8.87%2020.04-12.93Q469-889%20480-889t22.34%204.07Q513.68-880.87%20522-872l350%20350q8.87%208.32%2012.93%2019.66Q889-491%20889-480t-4.07%2021.96Q880.87-447.07%20872-438L522-88q-8.32%208.13-19.66%2012.57Q491-71%20480-71Zm0-60%20349-349-349-349-349%20349%20349%20349Zm-30-309h60v-240h-60v240Zm30%20110q12%200%2021-9t9-21q0-12-9-21t-21-9q-12%200-21%209t-9%2021q0%2012%209%2021t21%209Zm0-150Z'/%3e%3c/svg%3e",l="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M450-80v-118h60v118h-60ZM80-450v-60h118v60H80Zm682%200v-60h118v60H762Zm-23%20272-82-82%2043-43%2082%2082-43%2043Zm-518%200-43-43%2082-82%2043%2043-82%2082Zm259-120q-75%200-128.5-53.5T298-480q0-49%2021-88t59-64v-208h204v208q38%2025%2059%2064t21%2088q0%2075-53.5%20128.5T480-298Zm-42-355q10.5-3%2021-4.5t21-1.5q10.5%200%2021%201.5t21%204.5v-127h-84v127Zm42.12%20295q50.88%200%2086.38-35.62%2035.5-35.62%2035.5-86.5t-35.62-86.38q-35.62-35.5-86.5-35.5t-86.38%2035.62q-35.5%2035.62-35.5%2086.5t35.62%2086.38q35.62%2035.5%2086.5%2035.5ZM480-480Z'/%3e%3c/svg%3e",e={validation:"validation",error:"error",warning:"warning",information:"information",neutral:"neutral"},_=n=>({[e.validation]:b,[e.error]:A,[e.neutral]:f,[e.warning]:y,[e.information]:l})[n]||l,M=({type:n=e.information,title:r,children:v,action:o,iconSize:s=24,heading:g="h4"})=>{const q=T.useMemo(()=>_(n),[n]);return t.jsxs("div",{className:`af-alert af-alert--${n}`,role:"alert",children:[t.jsx(x,{src:q,width:s,height:s,className:"af-alert__icon","aria-hidden":!0}),t.jsxs("div",{className:"af-alert-client__content",children:[r&&t.jsx(g,{className:"af-alert__title",children:r}),v,o&&t.jsx("div",{className:"af-alert__action",children:o})]})]})},S=["information","neutral","error","validation","warning"],j={title:"Components/Alert",component:M},i={args:{title:"My Alert title",type:"information",children:"Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",action:t.jsx(Z,{openInNewTab:!0,href:"https://fakelink.com",children:"Plus de détails"}),iconSize:24},argTypes:{type:{options:S,control:{type:"select"},defaultValue:"information"}}},a={name:"Alert with Button action",args:{title:"My Alert title",type:"information",children:"Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",action:t.jsx(w,{variant:"ghost",children:"Actualiser"}),iconSize:24}};var c,m,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: "My Alert title",
    type: "information",
    children: "Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",
    action: <Link openInNewTab href="https://fakelink.com">
        Plus de détails
      </Link>,
    iconSize: 24
  },
  argTypes: {
    type: {
      options: MODIFIERS,
      control: {
        type: "select"
      },
      defaultValue: "information"
    }
  }
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,h,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Alert with Button action",
  args: {
    title: "My Alert title",
    type: "information",
    children: "Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",
    action: <Button variant="ghost">Actualiser</Button>,
    iconSize: 24
  }
}`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const B=["Default","WithButtonAction"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithButtonAction:a,__namedExportsOrder:B,default:j},Symbol.toStringTag,{value:"Module"}));export{C as A,i as D};
