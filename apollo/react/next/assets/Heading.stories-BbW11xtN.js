import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{l as m,f}from"./ToggleCommon-CvrkvLLp.js";import"./index-DuZrfDUH.js";import{T as q}from"./TagCommon-CLNsgkC5.js";const T=({title:a,firstSubtitle:s,secondSubtitle:n,titleComponent:o="h1"})=>e.jsxs("div",{className:"af-heading__title-container",children:[e.jsx(o,{className:"af-heading__title",children:a}),s&&e.jsx("span",{className:"af-heading__subtitle",children:s}),o==="h1"&&n&&e.jsx("span",{className:"af-heading__subtitle",children:n})]}),b={variant:"neutral"},S=({children:a,className:s,firstSubtitle:n,secondSubtitle:o,level:i=1,icon:l,iconProps:c={},tag:g})=>e.jsxs("header",{className:m("af-heading",s),children:[g&&i<3&&e.jsx("div",{className:"af-heading__label",children:g}),l&&i===1&&e.jsx(f,{src:l,size:"L",hasBackground:!0,variant:"secondary",...c,className:m("af-heading__icon",c.className)}),e.jsx(T,{title:a,firstSubtitle:n,titleComponent:`h${i}`,secondSubtitle:o})]}),d=({tag:a,tagProps:s={},...n})=>e.jsx(S,{...n,tag:a&&e.jsx(q,{...b,...s,children:a})}),H="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M189-275v-256q0-16.75%2012.18-28.88%2012.17-12.12%2030-12.12%2017.82%200%2029.32%2012.12Q272-547.75%20272-531v257q0%2017.75-11.68%2029.37Q248.65-233%20230.82-233%20213-233%20201-245.13q-12-12.12-12-29.87Zm254%201v-257q0-16.75%2012.18-28.88%2012.17-12.12%2029-12.12Q501-572%20513-559.88q12%2012.13%2012%2028.88v257q0%2016.75-12.18%2028.87-12.17%2012.13-29%2012.13Q467-233%20455-245.13q-12-12.12-12-28.87ZM102-102q-19.75%200-33.37-13.68Q55-129.35%2055-149.18%2055-169%2068.63-182.5%2082.25-196%20102-196h756q19.75%200%2033.88%2013.68Q906-168.65%20906-148.82q0%2019.82-14.12%2033.32Q877.75-102%20858-102H102Zm586-173v-256q0-16.75%2012.18-28.88%2012.17-12.12%2030-12.12%2017.82%200%2029.32%2012.12Q771-547.75%20771-531v257q0%2017.75-11.68%2029.37Q747.65-233%20729.82-233%20712-233%20700-245.13q-12-12.12-12-29.87Zm171-334H96q-17.58%200-29.29-12.21T55-650v-29q0-11%205.5-21T76-716l359-204q20.17-11%2045-11t45%2011l356%20202q11%207%2018%2018t7%2024.5v18.23q0%2020.59-13.47%2034.43Q879.05-609%20859-609Zm-606-95h454-454Zm0%200h454L480-836%20253-704Z'/%3e%3c/svg%3e",v=a=>e.jsx("div",{className:"af-heading-client-demo",children:[1,2,3].map(s=>e.jsx(d,{...a,level:s},`story-heading-${s}`))});v.__docgenInfo={description:"",methods:[],displayName:"renderAllHeading"};const y={component:d,title:"Components/Heading",args:{children:"Titre de la page"},argTypes:{className:{type:"string"},iconProps:{control:"object"},tagProps:{control:"object"}}},r={render:a=>e.jsx(d,{...a}),args:{firstSubtitle:"Sous Titre 1",secondSubtitle:"Sous Titre 2",tag:"Texte",icon:H},argTypes:{level:{options:[1,2,3],control:"inline-radio"}}},t={args:{...r.args},render:v};var h,p,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Heading {...args} />,
  args: {
    firstSubtitle: "Sous Titre 1",
    secondSubtitle: "Sous Titre 2",
    tag: "Texte",
    icon: bank
  },
  argTypes: {
    level: {
      options: [1, 2, 3] as HeadingLevel[],
      control: "inline-radio"
    }
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,_,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Playground.args
  },
  render: renderAllHeading
}`,...(j=(_=t.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const N=["Playground","All"],w=Object.freeze(Object.defineProperty({__proto__:null,All:t,Playground:r,__namedExportsOrder:N,default:y},Symbol.toStringTag,{value:"Module"}));export{w as H,r as P};
