import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-BmTal37z.js";import{W as a,n as o}from"./distributeur-DhKxp596.js";import{c as s}from"./CardButton-BjG1B7T-.js";import{n as c,t as l}from"./edit-DpabryaA.js";import{n as u,t as d}from"./save-B6dPfmSB.js";var f=t({CustomLinkStory:()=>_,LinkAsAnchorStory:()=>g,__namedExportsOrder:()=>v,default:()=>h}),p,m,h,g,_,v,y=e((()=>{o(),c(),d(),r(),p=i(),m={"(none)":`none`,"/public/save.svg":u,"/public/edit.svg":l},h=n.type().meta({title:`Components/Link`}),g=h.story({name:`Link`,render:({rightIcon:e,leftIcon:t,variant:n,...r})=>{let i=e=>{if(e===`/public/save.svg`)return(0,p.jsx)(s,{src:u});if(e===`/public/edit.svg`)return(0,p.jsx)(s,{src:l})},o=i(t),c=i(e);return(0,p.jsx)(`div`,{style:{maxWidth:`150px`,height:`50px`,padding:`10px`,backgroundColor:n===`reverse`?`#00008f`:`#ffffff`},children:(0,p.jsx)(a,{...r,target:`_blank`,leftIcon:o,rightIcon:c,variant:n})})},args:{href:`https://www.axa.fr`,children:`axa.fr`,leftIcon:`(none)`,rightIcon:`(none)`,disabled:!1,variant:`default`},argTypes:{leftIcon:{options:Object.keys(m),control:{type:`select`}},rightIcon:{options:Object.keys(m),control:{type:`select`}},className:{table:{disable:!0}},variant:{options:[`default`,`reverse`],control:{type:`radio`},description:`Use 'reverse' to change the color of the link`}}}),_=h.story({name:`Custom Link, using a button`,render:()=>(0,p.jsx)(a,{render:({className:e})=>(0,p.jsx)(`button`,{type:`button`,className:e,onClick:()=>alert(`Button clicked!`),children:`This link is actually a button 🤯`})}),args:{},argTypes:{}}),g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
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