import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Zn as r,_r as i,et as a,t as o}from"./prospect-DDREKc4X.js";import"./Button.story-BujtXYHD.js";import{n as s,t as c}from"./arrow_left_alt-CU9g4vVv.js";var l;function u(){return(u=e((()=>{l=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M372-523q-42-42-42-108t42-108q42-42%20108-42t108%2042q42%2042%2042%20108t-42%20108q-42%2042-108%2042t-108-42ZM160-220v-34q0-38%2019-65t49-41q67-30%20128.5-45T480-420q62%200%20123%2015.5T731-360q31%2014%2050%2041t19%2065v34q0%2025-17.5%2042.5T740-160H220q-25%200-42.5-17.5T160-220Z'/%3e%3c/svg%3e`})))()}var d=t({LinkButtonStory:()=>v,LinkInverse:()=>h,LinkOpenInNewTab:()=>g,LinkWithIcons:()=>_,Playground:()=>m,__namedExportsOrder:()=>y,default:()=>p}),f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{o(),s(),u(),f=n(),p={title:`Components/Link`,component:a},m={args:{href:`https://fakelink.com`,children:`My link`}},h={args:{href:`https://fakelink.com`,children:`My link`,variant:`inverse`},decorators:[e=>(0,f.jsx)(`div`,{style:{padding:`var(--rem-16)`,backgroundColor:`var(--blue-1000)`},children:(0,f.jsx)(e,{})})]},g={args:{href:`https://fakelink.com`,children:`My link`,openInNewTab:!0,rightIcon:(0,f.jsx)(i,{src:l})}},_={args:{href:`https://fakelink.com`,children:`My link`,leftIcon:(0,f.jsx)(i,{src:c}),rightIcon:(0,f.jsx)(i,{src:l})}},v={name:`Link button`,render:({href:e,children:t})=>(0,f.jsx)(`div`,{className:`af-btn-client-demo`,children:Object.values(r).map(n=>{let r=`button-${n}`;return(0,f.jsx)(`div`,{className:`af-btn-client-demo-variant`,children:(0,f.jsxs)(`div`,{className:[`af-btn-client-demo__bloc`,n.includes(`inverse`)?`af-btn-client-demo__bloc--blue`:``].filter(Boolean).join(` `),children:[(0,f.jsx)(`h2`,{className:`af-title`,children:n}),(0,f.jsxs)(a,{href:e,variant:r,children:[t,` `,n]}),(0,f.jsxs)(a,{variant:r,role:`link`,"aria-disabled":`true`,children:[t,` `,n]}),(0,f.jsxs)(a,{href:e,variant:r,leftIcon:(0,f.jsx)(i,{src:c}),children:[t,` `,n]}),(0,f.jsxs)(a,{href:e,variant:r,rightIcon:(0,f.jsx)(i,{src:l}),children:[t,` `,n]})]})},n)})}),args:{href:`https://fakelink.com`,children:`LinkButton`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://fakelink.com",
    children: "My link"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://fakelink.com",
    children: "My link",
    variant: "inverse"
  },
  decorators: [Story => <div style={{
    padding: "var(--rem-16)",
    backgroundColor: "var(--blue-1000)"
  }}>
        <Story />
      </div>]
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://fakelink.com",
    children: "My link",
    openInNewTab: true,
    rightIcon: <Icon src={personFill} />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://fakelink.com",
    children: "My link",
    leftIcon: <Icon src={arrowLeftAlt} />,
    rightIcon: <Icon src={personFill} />
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Link button",
  render: ({
    href,
    children
  }) => <div className="af-btn-client-demo">
      {Object.values(buttonVariants).map(variant => {
      const linkVariant = \`button-\${variant}\` as const;
      return <div key={variant} className="af-btn-client-demo-variant">
            <div className={["af-btn-client-demo__bloc", variant.includes("inverse") ? "af-btn-client-demo__bloc--blue" : ""].filter(Boolean).join(" ")}>
              <h2 className="af-title">{variant}</h2>
              <Link href={href} variant={linkVariant}>
                {children} {variant}
              </Link>
              <Link variant={linkVariant} role="link" aria-disabled="true">
                {children} {variant}
              </Link>
              <Link href={href} variant={linkVariant} leftIcon={<Icon src={arrowLeftAlt} />}>
                {children} {variant}
              </Link>
              <Link href={href} variant={linkVariant} rightIcon={<Icon src={personFill} />}>
                {children} {variant}
              </Link>
            </div>
          </div>;
    })}
    </div>,
  args: {
    href: "https://fakelink.com",
    children: "LinkButton"
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`LinkInverse`,`LinkOpenInNewTab`,`LinkWithIcons`,`LinkButtonStory`]})))()}export{b as i,d as n,m as r,v as t};