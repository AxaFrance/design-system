import{j as e}from"./index-DK-fRI8B.js";/* empty css              */import{x as l}from"./Loader-Cc92k9M2.js";import"./index-DbaA8R3S.js";import{s as p,S as s}from"./save-BW6ljTmu.js";import{f as b}from"./index-C2cC0QQF.js";const g="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M180-180h44l472-471-44-44-472%20471v44Zm-60%2060v-128l575-574q8-8%2019-12.5t23-4.5q11%200%2022%204.5t20%2012.5l44%2044q9%209%2013%2020t4%2022q0%2011-4.5%2022.5T823-694L248-120H120Zm659-617-41-41%2041%2041Zm-105%2064-22-22%2044%2044-22-22Z'/%3e%3c/svg%3e",r={"(none)":"none","/public/save.svg":p,"/public/edit.svg":g},h={title:"Components/Link",component:l,args:{onClick:b()}},n={name:"Link",render:({rightIcon:f,leftIcon:I,...m})=>{const t=o=>{if(o==="/public/save.svg")return e.jsx(s,{src:p});if(o==="/public/edit.svg")return e.jsx(s,{src:g})},d=t(I),u=t(f);return e.jsx(l,{...m,target:"_blank",leftIcon:d,rightIcon:u})},args:{href:"https://www.axa.fr",children:"axa.fr",leftIcon:"(none)",rightIcon:"(none)",disabled:!1},argTypes:{leftIcon:{options:Object.keys(r),control:{type:"select"}},rightIcon:{options:Object.keys(r),control:{type:"select"}},className:{table:{disable:!0}},component:{table:{disable:!0}}}};var c,a,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Link",
  render: ({
    rightIcon,
    leftIcon,
    ...args
  }) => {
    const getIcon = (type: string) => {
      if (type === "/public/save.svg") {
        return <Svg src={saveIcons} />;
      }
      if (type === "/public/edit.svg") {
        return <Svg src={editIcons} />;
      }
      return undefined;
    };
    const leftIconProps = getIcon(leftIcon);
    const rightIconProps = getIcon(rightIcon);
    return <Link {...args} target="_blank" leftIcon={leftIconProps} rightIcon={rightIconProps} />;
  },
  args: {
    href: "https://www.axa.fr",
    children: "axa.fr",
    leftIcon: "(none)",
    rightIcon: "(none)",
    disabled: false
  },
  argTypes: {
    leftIcon: {
      options: Object.keys(CssIcons),
      control: {
        type: "select"
      }
    },
    rightIcon: {
      options: Object.keys(CssIcons),
      control: {
        type: "select"
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    component: {
      table: {
        disable: true
      }
    }
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const v=["LinkStory"],S=Object.freeze(Object.defineProperty({__proto__:null,LinkStory:n,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{S as L,n as a};
