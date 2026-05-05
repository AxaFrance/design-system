import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-De-9TtK1.js";import{B as a,n as o}from"./distributeur-Ct4qDp97.js";import{a as s}from"./getClassName-BqLacNYG.js";import{n as c,t as l}from"./save-KJo_R0Gr.js";var u,d=e((()=>{u=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M180-180h44l472-471-44-44-472%20471v44Zm-60%2060v-128l575-574q8-8%2019-12.5t23-4.5q11%200%2022%204.5t20%2012.5l44%2044q9%209%2013%2020t4%2022q0%2011-4.5%2022.5T823-694L248-120H120Zm659-617-41-41%2041%2041Zm-105%2064-22-22%2044%2044-22-22Z'/%3e%3c/svg%3e`})),f=t({CustomLinkStory:()=>_,LinkAsAnchorStory:()=>g,__namedExportsOrder:()=>v,default:()=>h}),p,m,h,g,_,v,y=e((()=>{o(),d(),l(),r(),p=i(),m={"(none)":`none`,"/public/save.svg":c,"/public/edit.svg":u},h=n.type().meta({title:`Components/Link`}),g=h.story({name:`Link`,render:({rightIcon:e,leftIcon:t,variant:n,...r})=>{let i=e=>{if(e===`/public/save.svg`)return(0,p.jsx)(s,{src:c});if(e===`/public/edit.svg`)return(0,p.jsx)(s,{src:u})},o=i(t),l=i(e);return(0,p.jsx)(`div`,{style:{maxWidth:`150px`,height:`50px`,padding:`10px`,backgroundColor:n===`reverse`?`#00008f`:`#ffffff`},children:(0,p.jsx)(a,{...r,target:`_blank`,leftIcon:o,rightIcon:l,variant:n})})},args:{href:`https://www.axa.fr`,children:`axa.fr`,leftIcon:`(none)`,rightIcon:`(none)`,disabled:!1,variant:`default`},argTypes:{leftIcon:{options:Object.keys(m),control:{type:`select`}},rightIcon:{options:Object.keys(m),control:{type:`select`}},className:{table:{disable:!0}},variant:{options:[`default`,`reverse`],control:{type:`radio`},description:`Use 'reverse' to change the color of the link`}}}),_=h.story({name:`Custom Link, using a button`,render:()=>(0,p.jsx)(a,{render:({className:e})=>(0,p.jsx)(`button`,{type:`button`,className:e,onClick:()=>alert(`Button clicked!`),children:`This link is actually a button 🤯`})}),args:{},argTypes:{}}),g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,..._.input.parameters?.docs?.source}}},v=[`LinkAsAnchorStory`,`CustomLinkStory`]}));y();export{_ as CustomLinkStory,g as LinkAsAnchorStory,v as __namedExportsOrder,h as default,y as n,f as t};