import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{f as Q}from"./index-VGPHIPc6.js";/* empty css               */import{B as F,p as U}from"./CardData-B-EetlV8.js";import"./index-ZnYipkzV.js";import"./index-63p0MazF.js";const X="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M686-450H160v-60h526L438-758l42-42%20320%20320-320%20320-42-42%20248-248Z'/%3e%3c/svg%3e",Y="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='m274-450%20248%20248-42%2042-320-320%20320-320%2042%2042-248%20248h526v60H274Z'/%3e%3c/svg%3e",l={"(none)":"none","/public/arrow_back.svg":Y,"/public/arrow_forward.svg":X,"glyphicon arrow-left":"arrow-left","glyphicon arrow-right":"arrow-right"},rr={component:F,title:"Components/Button",parameters:{layout:"centered"},tags:["!autodocs","!dev"],args:{onClick:Q(),children:"Button",variant:"primary",small:!1,disabled:!1,leftIcon:"(none)",rightIcon:"(none)"},argTypes:{onClick:{table:{disable:!0}},variant:{options:["primary","secondary","validated","danger","ghost","ghost-reverse"],control:{type:"select"}},leftIcon:{options:Object.keys(l),control:{type:"select"}},rightIcon:{options:Object.keys(l),control:{type:"select"}}}},r={tags:["dev"],render:({leftIcon:u,rightIcon:q,...A})=>{const p=m=>{switch(m){case"/public/arrow_forward.svg":case"/public/arrow_back.svg":return g.jsx(U,{src:l[m]});case"glyphicon arrow-left":case"glyphicon arrow-right":return g.jsx("i",{className:`glyphicon glyphicon-${l[m]}`});default:return}},J=p(u),K=p(q);return g.jsx(F,{leftIcon:J,rightIcon:K,...A})}},e={name:"Button Primary",render:r.render,args:{children:"Button Primary",onClick:void 0,variant:void 0}},n={name:"Button Secondary",render:r.render,args:{...e.args,children:"Button Secondary",variant:"secondary"}},a={name:"Button Validated",render:r.render,args:{...e.args,children:"Button Validated",variant:"validated"}},o={name:"Button danger",render:r.render,args:{...e.args,children:"Button Danger",variant:"danger"}},t={name:"Button ghost",render:r.render,args:{...e.args,children:"Button ghost",variant:"ghost"}},s={name:"Button ghost-reverse",render:r.render,decorators:[u=>g.jsx("div",{style:{backgroundColor:"var(--axablue90)",padding:"1rem"},children:g.jsx(u,{})})],args:{...e.args,children:"Button ghost-reverse",variant:"ghost-reverse"}},c={name:"Button with right svg icon",render:r.render,args:{...e.args,children:"With right svg icon",rightIcon:"/public/arrow_forward.svg"}},i={name:"Button with left glyphicon icon",render:r.render,args:{...e.args,children:"With left glyphicon icon",leftIcon:"glyphicon arrow-left"}},d={name:"Button small",render:r.render,args:{...e.args,children:"Button Small",small:!0}};var h,y,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,f,B;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Button Primary",
  render: Playground.render,
  args: {
    children: "Button Primary",
    onClick: undefined,
    variant: undefined
  }
}`,...(B=(f=e.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var I,P,S;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Button Secondary",
  render: Playground.render,
  args: {
    ...Primary.args,
    children: "Button Secondary",
    variant: "secondary"
  }
}`,...(S=(P=n.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var b,x,_;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Button Validated",
  render: Playground.render,
  args: {
    ...Primary.args,
    children: "Button Validated",
    variant: "validated"
  }
}`,...(_=(x=a.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var k,j,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Button danger",
  render: Playground.render,
  args: {
    ...Primary.args,
    children: "Button Danger",
    variant: "danger"
  }
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var W,V,D;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Button ghost",
  render: Playground.render,
  args: {
    ...Primary.args,
    children: "Button ghost",
    variant: "ghost"
  }
}`,...(D=(V=t.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var G,O,R;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Button ghost-reverse",
  render: Playground.render,
  decorators: [Story => <div style={{
    backgroundColor: "var(--axablue90)",
    padding: "1rem"
  }}>
        <Story />
      </div>],
  args: {
    ...Primary.args,
    children: "Button ghost-reverse",
    variant: "ghost-reverse"
  }
}`,...(R=(O=s.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var L,E,H;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Button with right svg icon",
  render: Playground.render,
  args: {
    ...Primary.args,
    children: "With right svg icon",
    rightIcon: "/public/arrow_forward.svg"
  }
}`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var M,N,T;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Button with left glyphicon icon",
  render: Playground.render,
  args: {
    ...Primary.args,
    children: "With left glyphicon icon",
    leftIcon: "glyphicon arrow-left"
  }
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var Z,$,z;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Button small",
  render: Playground.render,
  args: {
    ...Primary.args,
    children: "Button Small",
    small: true
  }
}`,...(z=($=d.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const er=["Playground","Primary","Secondary","Validated","Danger","Ghost","GhostReverse","WithIconRight","WithIconLeft","Small"],ir=Object.freeze(Object.defineProperty({__proto__:null,Danger:o,Ghost:t,GhostReverse:s,Playground:r,Primary:e,Secondary:n,Small:d,Validated:a,WithIconLeft:i,WithIconRight:c,__namedExportsOrder:er,default:rr},Symbol.toStringTag,{value:"Module"}));export{ir as B,o as D,t as G,r as P,n as S,a as V,i as W,e as a,s as b,d as c,c as d};
