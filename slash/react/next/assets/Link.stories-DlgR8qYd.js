import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{L as o,x as a}from"./Loader-D6LPEE5j.js";import"./index-DbaA8R3S.js";import"./index-CG6JzWRx.js";import{s as f}from"./save-Dn7C8GKk.js";import{f as v}from"./index-28pPPJTf.js";const I="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M180-180h44l472-471-44-44-472%20471v44Zm-60%2060v-128l575-574q8-8%2019-12.5t23-4.5q11%200%2022%204.5t20%2012.5l44%2044q9%209%2013%2020t4%2022q0%2011-4.5%2022.5T823-694L248-120H120Zm659-617-41-41%2041%2041Zm-105%2064-22-22%2044%2044-22-22Z'/%3e%3c/svg%3e",i={"(none)":"none","/public/save.svg":f,"/public/edit.svg":I},x={title:"Components/Link",component:o,args:{onClick:v()}},n={name:"Link",render:({rightIcon:s,leftIcon:b,...h})=>{const r=c=>{if(c==="/public/save.svg")return e.jsx(a,{src:f});if(c==="/public/edit.svg")return e.jsx(a,{src:I})},k=r(b),y=r(s);return e.jsx(o,{...h,target:"_blank",leftIcon:k,rightIcon:y})},args:{href:"https://www.axa.fr",children:"axa.fr",leftIcon:"(none)",rightIcon:"(none)",disabled:!1},argTypes:{leftIcon:{options:Object.keys(i),control:{type:"select"}},rightIcon:{options:Object.keys(i),control:{type:"select"}},className:{table:{disable:!0}}}},t={name:"Custom Link, using a button",render:()=>e.jsx(o,{render:({className:s})=>e.jsx("button",{type:"button",className:s,onClick:()=>alert("Button clicked!"),children:"This link is actually a button 🤯"})}),args:{},argTypes:{}};var l,p,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Link",
  render: ({
    rightIcon,
    leftIcon,
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
    }
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,m,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const L=["LinkAsAnchorStory","CustomLinkStory"],P=Object.freeze(Object.defineProperty({__proto__:null,CustomLinkStory:t,LinkAsAnchorStory:n,__namedExportsOrder:L,default:x},Symbol.toStringTag,{value:"Module"}));export{P as L};
