import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-B6pS4pdr.js";import{Tt as a,n as o}from"./distributeur-DmtDXCQS.js";import{a as s}from"./getClassName-CR6lB2oi.js";var c,l=e((()=>{c=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='m274-450%20248%20248-42%2042-320-320%20320-320%2042%2042-248%20248h526v60H274Z'/%3e%3c/svg%3e`})),u,d=e((()=>{u=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M686-450H160v-60h526L438-758l42-42%20320%20320-320%20320-42-42%20248-248Z'/%3e%3c/svg%3e`})),f=t({Danger:()=>x,Ghost:()=>S,GhostReverse:()=>C,Playground:()=>_,Primary:()=>v,Secondary:()=>y,Small:()=>E,Validated:()=>b,WithIconLeft:()=>T,WithIconRight:()=>w,__namedExportsOrder:()=>D,default:()=>g}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=e((()=>{o(),l(),d(),r(),p=i(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={"(none)":`none`,"/public/arrow_back.svg":c,"/public/arrow_forward.svg":u,"glyphicon arrow-left":`arrow-left`,"glyphicon arrow-right":`arrow-right`},g=n.type().meta({component:a,title:`Components/Button`,parameters:{layout:`centered`},tags:[`!autodocs`,`!dev`],args:{onClick:m(),children:`Button`,variant:`primary`,small:!1,disabled:!1,leftIcon:`(none)`,rightIcon:`(none)`},argTypes:{onClick:{table:{disable:!0}},variant:{options:[`primary`,`secondary`,`validated`,`danger`,`ghost`,`ghost-reverse`],control:{type:`select`}},leftIcon:{options:Object.keys(h),control:{type:`select`}},rightIcon:{options:Object.keys(h),control:{type:`select`}}}}),_=g.story({tags:[`dev`],render:({leftIcon:e,rightIcon:t,...n})=>{let r=e=>{switch(e){case`/public/arrow_forward.svg`:case`/public/arrow_back.svg`:return(0,p.jsx)(s,{src:h[e]});case`glyphicon arrow-left`:case`glyphicon arrow-right`:return(0,p.jsx)(`i`,{className:`glyphicon glyphicon-${h[e]}`});default:return}};return(0,p.jsx)(a,{leftIcon:r(e),rightIcon:r(t),...n})}}),v=g.story({name:`Button Primary`,render:_.input.render,args:{children:`Button Primary`,onClick:void 0,variant:void 0}}),y=g.story({name:`Button Secondary`,render:_.input.render,args:{...v.input.args,children:`Button Secondary`,variant:`secondary`}}),b=g.story({name:`Button Validated`,render:_.input.render,args:{...v.input.args,children:`Button Validated`,variant:`validated`}}),x=g.story({name:`Button danger`,render:_.input.render,args:{...v.input.args,children:`Button Danger`,variant:`danger`}}),S=g.story({name:`Button ghost`,render:_.input.render,args:{...v.input.args,children:`Button ghost`,variant:`ghost`}}),C=g.story({name:`Button ghost-reverse`,render:_.input.render,decorators:[e=>(0,p.jsx)(`div`,{style:{backgroundColor:`var(--axablue90)`,padding:`1rem`},children:(0,p.jsx)(e,{})})],args:{...v.input.args,children:`Button ghost-reverse`,variant:`ghost-reverse`}}),w=g.story({name:`Button with right svg icon`,render:_.input.render,args:{...v.input.args,children:`With right svg icon`,rightIcon:`/public/arrow_forward.svg`}}),T=g.story({name:`Button with left glyphicon icon`,render:_.input.render,args:{...v.input.args,children:`With left glyphicon icon`,leftIcon:`glyphicon arrow-left`}}),E=g.story({name:`Button small`,render:_.input.render,args:{...v.input.args,children:`Button Small`,small:!0}}),_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ["dev"],
  render: ({
    leftIcon,
    rightIcon,
    ...props
  }) => {
    const getIcon = (type: string) => {
      switch (type) {
        case "/public/arrow_forward.svg":
        case "/public/arrow_back.svg":
          return <Svg src={CssIcons[type]} />;
        case "glyphicon arrow-left":
        case "glyphicon arrow-right":
          return <i className={\`glyphicon glyphicon-\${CssIcons[type]}\`} />;
        default:
          return undefined;
      }
    };
    const leftIconProps = getIcon(leftIcon);
    const rightIconProps = getIcon(rightIcon);
    return <Button leftIcon={leftIconProps} rightIcon={rightIconProps} {...props} />;
  }
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Button Primary",
  render: Playground.input.render,
  args: {
    children: "Button Primary",
    onClick: undefined,
    variant: undefined
  }
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Button Secondary",
  render: Playground.input.render,
  args: {
    ...Primary.input.args,
    children: "Button Secondary",
    variant: "secondary"
  }
})`,...y.input.parameters?.docs?.source}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Button Validated",
  render: Playground.input.render,
  args: {
    ...Primary.input.args,
    children: "Button Validated",
    variant: "validated"
  }
})`,...b.input.parameters?.docs?.source}}},x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Button danger",
  render: Playground.input.render,
  args: {
    ...Primary.input.args,
    children: "Button Danger",
    variant: "danger"
  }
})`,...x.input.parameters?.docs?.source}}},S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Button ghost",
  render: Playground.input.render,
  args: {
    ...Primary.input.args,
    children: "Button ghost",
    variant: "ghost"
  }
})`,...S.input.parameters?.docs?.source}}},C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Button ghost-reverse",
  render: Playground.input.render,
  decorators: [Story => <div style={{
    backgroundColor: "var(--axablue90)",
    padding: "1rem"
  }}>
        <Story />
      </div>],
  args: {
    ...Primary.input.args,
    children: "Button ghost-reverse",
    variant: "ghost-reverse"
  }
})`,...C.input.parameters?.docs?.source}}},w.input.parameters={...w.input.parameters,docs:{...w.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Button with right svg icon",
  render: Playground.input.render,
  args: {
    ...Primary.input.args,
    children: "With right svg icon",
    rightIcon: "/public/arrow_forward.svg"
  }
})`,...w.input.parameters?.docs?.source}}},T.input.parameters={...T.input.parameters,docs:{...T.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Button with left glyphicon icon",
  render: Playground.input.render,
  args: {
    ...Primary.input.args,
    children: "With left glyphicon icon",
    leftIcon: "glyphicon arrow-left"
  }
})`,...T.input.parameters?.docs?.source}}},E.input.parameters={...E.input.parameters,docs:{...E.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Button small",
  render: Playground.input.render,
  args: {
    ...Primary.input.args,
    children: "Button Small",
    small: true
  }
})`,...E.input.parameters?.docs?.source}}},D=[`Playground`,`Primary`,`Secondary`,`Validated`,`Danger`,`Ghost`,`GhostReverse`,`WithIconRight`,`WithIconLeft`,`Small`]}));O();export{x as Danger,S as Ghost,C as GhostReverse,_ as Playground,v as Primary,y as Secondary,E as Small,b as Validated,T as WithIconLeft,w as WithIconRight,D as __namedExportsOrder,g as default,O as n,f as t};