import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{g as d,S as u}from"./DividerLF-CGkXvTAL.js";import{r as y}from"./index-DuZrfDUH.js";const v={primary:"primary",secondary:"secondary",tertiary:"tertiary"},i={L:"large",M:"medium",S:"small",XS:"extra-small"},l=({variant:n="primary",size:t="S",hasBackground:o=!1,...m})=>{const p=y.useMemo(()=>{const g=[n,i[t],o&&"has-background"].filter(Boolean).join(" ");return d("af-icon","",g)},[n,o,t]);return s.jsx("div",{className:p,children:s.jsx(u,{...m})})},f="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M189-95q-38.05%200-66.03-27.47Q95-149.95%2095-189v-582q0-38.46%2027.97-66.73Q150.95-866%20189-866h582q39.46%200%2067.23%2028.27Q866-809.46%20866-771v54H540q-54%200-90.5%2036.56Q413-643.89%20413-592v226q0%2053%2036.5%2088.5T540-242h326v53q0%2039-27.77%2066.5T771-95H189Zm351-198q-33%200-54.5-20.57-21.5-20.58-21.5-52.68V-592q0-32%2021.5-53t54.5-21h291q33%200%2054.5%2021t21.5%2053v225.75q0%2032.1-21.5%2052.68Q864-293%20831-293H540Zm112-123q25%200%2044.5-19.5T716-481q0-25-19.5-44T652-544q-25%200-44.5%2019T588-481q0%2026%2019.5%2045.5T652-416Z'/%3e%3c/svg%3e",q={component:l,title:"Components/Icon"},e={name:"Icon",render:({...n})=>s.jsx(l,{...n}),args:{src:f,hasBackground:!1},argTypes:{variant:{options:Object.values(v),control:{type:"select"}},size:{options:Object.keys(i),control:{type:"select"}}}};var r,a,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const j=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:j,default:q},Symbol.toStringTag,{value:"Module"}));export{e as D,b as I};
