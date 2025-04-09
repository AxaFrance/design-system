import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as j}from"./ToggleCommon-x6OPe-9S.js";import{r as y}from"./index-DuZrfDUH.js";import{S as a}from"./Svg-DzhV6gij.js";const L="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M180-120q-24%200-42-18t-18-42v-600q0-24%2018-42t42-18h279v60H180v600h600v-279h60v279q0%2024-18%2042t-42%2018H180Zm202-219-42-43%20398-398H519v-60h321v321h-60v-218L382-339Z'/%3e%3c/svg%3e",T={default:"default",underline:"underline",inverse:"inverse"},u=({href:s,variant:i="underline",openInNewTab:r=!1,leftIcon:f,rightIcon:c,children:w,className:o,classModifier:l="",...k})=>{const x=r&&{target:"_blank",rel:"noopener noreferrer"},q=y.useMemo(()=>j("af-link",o,`${l}${!o&&r?" openInNewTab":""} ${i}`),[l,o,r,i]);return e.jsxs("a",{className:q,href:s,...x,...k,children:[f,w,(r||!!c)&&(c??e.jsx(a,{src:L}))]})},b="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M400-240%20160-480l241-241%2043%2042-169%20169h526v60H275l168%20168-43%2042Z'/%3e%3c/svg%3e",M="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M480-481q-66%200-108-42t-42-108q0-66%2042-108t108-42q66%200%20108%2042t42%20108q0%2066-42%20108t-108%2042ZM160-220v-34q0-38%2019-65t49-41q67-30%20128.5-45T480-420q62%200%20123%2015.5T731-360q31%2014%2050%2041t19%2065v34q0%2025-17.5%2042.5T740-160H220q-25%200-42.5-17.5T160-220Z'/%3e%3c/svg%3e",S={title:"Components/Link",component:u},n={render:({...s})=>e.jsx("div",{children:e.jsx(u,{...s})}),args:{href:"https://fakelink.com",children:"My link",openInNewTab:!0},argTypes:{variant:{options:Object.values(T),control:{type:"select"}}}},t={args:{href:"https://fakelink.com",children:"My link",openInNewTab:!0,leftIcon:e.jsx(a,{src:b}),rightIcon:e.jsx(a,{src:M})}};var p,m,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <div>
      <Link {...args} />
    </div>,
  args: {
    href: "https://fakelink.com",
    children: "My link",
    openInNewTab: true
  },
  argTypes: {
    variant: {
      options: Object.values(linkVariants),
      control: {
        type: "select"
      }
    }
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,v,d;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    href: "https://fakelink.com",
    children: "My link",
    openInNewTab: true,
    leftIcon: <Svg src={arrowLeftAlt} />,
    rightIcon: <Svg src={personFill} />
  }
}`,...(d=(v=t.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};const I=["Default","LinkWithCustomIcons"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:n,LinkWithCustomIcons:t,__namedExportsOrder:I,default:S},Symbol.toStringTag,{value:"Module"}));export{n as D,Z as L};
