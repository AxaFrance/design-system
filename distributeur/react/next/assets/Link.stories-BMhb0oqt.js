import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as r,p as i}from"./CardData-ma-i57UJ.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";import{s as h}from"./save-Dn7C8GKk.js";import{f as L}from"./index-VGPHIPc6.js";const v="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M180-180h44l472-471-44-44-472%20471v44Zm-60%2060v-128l575-574q8-8%2019-12.5t23-4.5q11%200%2022%204.5t20%2012.5l44%2044q9%209%2013%2020t4%2022q0%2011-4.5%2022.5T823-694L248-120H120Zm659-617-41-41%2041%2041Zm-105%2064-22-22%2044%2044-22-22Z'/%3e%3c/svg%3e",l={"(none)":"none","/public/save.svg":h,"/public/edit.svg":v},C={title:"Components/Link",component:r,args:{onClick:L()}},t={name:"Link",render:({rightIcon:o,leftIcon:b,variant:s,...I})=>{const a=c=>{if(c==="/public/save.svg")return e.jsx(i,{src:h});if(c==="/public/edit.svg")return e.jsx(i,{src:v})},k=a(b),y=a(o),x=s==="reverse"?"#00008f":"#ffffff";return e.jsx("div",{style:{maxWidth:"150px",height:"50px",padding:"10px",backgroundColor:x},children:e.jsx(r,{...I,target:"_blank",leftIcon:k,rightIcon:y,variant:s})})},args:{href:"https://www.axa.fr",children:"axa.fr",leftIcon:"(none)",rightIcon:"(none)",disabled:!1,variant:"default"},argTypes:{leftIcon:{options:Object.keys(l),control:{type:"select"}},rightIcon:{options:Object.keys(l),control:{type:"select"}},className:{table:{disable:!0}},variant:{options:["default","reverse"],control:{type:"radio"},description:"Use 'reverse' to change the color of the link"}}},n={name:"Custom Link, using a button",render:()=>e.jsx(r,{render:({className:o})=>e.jsx("button",{type:"button",className:o,onClick:()=>alert("Button clicked!"),children:"This link is actually a button 🤯"})}),args:{},argTypes:{}};var p,d,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Link",
  render: ({
    rightIcon,
    leftIcon,
    variant,
    ...args
  }) => {
    const getIcon = (type: keyof typeof CssIcons) => {
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
    const backgroundColor = variant === "reverse" ? "#00008f" : "#ffffff";
    return <div style={{
      maxWidth: "150px",
      height: "50px",
      padding: "10px",
      backgroundColor
    }}>
        <Link {...args} target="_blank" leftIcon={leftIconProps} rightIcon={rightIconProps} variant={variant} />
      </div>;
  },
  args: {
    href: "https://www.axa.fr",
    children: "axa.fr",
    leftIcon: "(none)",
    rightIcon: "(none)",
    disabled: false,
    variant: "default"
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
    variant: {
      options: ["default", "reverse"],
      control: {
        type: "radio"
      },
      description: "Use 'reverse' to change the color of the link"
    }
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,u,m;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Custom Link, using a button",
  render: () => <Link render={({
    className
  }) => <button type="button" className={className}
  // eslint-disable-next-line no-alert
  onClick={() => alert("Button clicked!")}>
          This link is actually a button 🤯
        </button>} />,
  args: {},
  argTypes: {}
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const j=["LinkAsAnchorStory","CustomLinkStory"],N=Object.freeze(Object.defineProperty({__proto__:null,CustomLinkStory:n,LinkAsAnchorStory:t,__namedExportsOrder:j,default:C},Symbol.toStringTag,{value:"Module"}));export{N as L,t as a};
