import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{g as d}from"./DividerApollo-Dfpzuo7L.js";import{r as v}from"./index-DuZrfDUH.js";import{S as q}from"./Svg-BS6GMEzY.js";const u={primary:"primary",secondary:"secondary",tertiary:"tertiary"},i={L:"large",M:"medium",S:"small",XS:"extra-small"},l=({variant:n="primary",size:o="S",hasBackground:s=!1,...m})=>{const p=v.useMemo(()=>{const g=[n,i[o],s&&"has-background"].filter(Boolean).join(" ");return d("af-icon","",g)},[n,s,o]);return t.jsx("div",{className:p,children:t.jsx(q,{...m})})},y="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M189-275v-256q0-16.75%2012.18-28.88%2012.17-12.12%2030-12.12%2017.82%200%2029.32%2012.12Q272-547.75%20272-531v257q0%2017.75-11.68%2029.37Q248.65-233%20230.82-233%20213-233%20201-245.13q-12-12.12-12-29.87Zm254%201v-257q0-16.75%2012.18-28.88%2012.17-12.12%2029-12.12Q501-572%20513-559.88q12%2012.13%2012%2028.88v257q0%2016.75-12.18%2028.87-12.17%2012.13-29%2012.13Q467-233%20455-245.13q-12-12.12-12-28.87ZM102-102q-19.75%200-33.37-13.68Q55-129.35%2055-149.18%2055-169%2068.63-182.5%2082.25-196%20102-196h756q19.75%200%2033.88%2013.68Q906-168.65%20906-148.82q0%2019.82-14.12%2033.32Q877.75-102%20858-102H102Zm586-173v-256q0-16.75%2012.18-28.88%2012.17-12.12%2030-12.12%2017.82%200%2029.32%2012.12Q771-547.75%20771-531v257q0%2017.75-11.68%2029.37Q747.65-233%20729.82-233%20712-233%20700-245.13q-12-12.12-12-29.87Zm171-334H96q-17.58%200-29.29-12.21T55-650v-29q0-11%205.5-21T76-716l359-204q20.17-11%2045-11t45%2011l356%20202q11%207%2018%2018t7%2024.5v18.23q0%2020.59-13.47%2034.43Q879.05-609%20859-609Z'/%3e%3c/svg%3e",f={component:l,title:"Components/Icon"},e={name:"Icon",render:({...n})=>t.jsx(l,{...n}),args:{src:y,hasBackground:!1},argTypes:{variant:{options:Object.values(u),control:{type:"select"}},size:{options:Object.keys(i),control:{type:"select"}}}};var r,a,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Icon",
  render: ({
    ...args
  }) => <Icon {...args} />,
  args: {
    src: bank,
    hasBackground: false
  },
  argTypes: {
    variant: {
      options: Object.values(iconVariants),
      control: {
        type: "select"
      }
    },
    size: {
      options: Object.keys(iconSizeVariants),
      control: {
        type: "select"
      }
    }
  }
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const j=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:j,default:f},Symbol.toStringTag,{value:"Module"}));export{e as D,h as I};
