import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{b as n}from"./Loader-gVPQVOjI.js";import"./index-DbaA8R3S.js";import"./index-BdSKqQiB.js";import{f as A}from"./index-28pPPJTf.js";const G=["success","info","danger","reverse","disabled","small","hasiconLeft","hasiconRight"],H={component:n,title:"Components/Button",parameters:{layout:"centered"},args:{onClick:A()}},r={name:"Button",render:({children:s,classModifier:T,onClick:z,...q})=>e.jsx(n,{classModifier:T.join(" "),onClick:z,...q,children:s}),args:{children:"Button",classModifier:[],className:""},argTypes:{classModifier:{options:G,control:{type:"multi-select"}}}},a={name:"Button with modifiers",render:({onClick:s})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-evenly",padding:"2rem",flexWrap:"wrap",gap:"2rem"},children:[e.jsx(n,{classModifier:"reverse",onClick:s,children:"Button Reverse"}),e.jsx(n,{classModifier:"success",onClick:s,children:"Button Success"}),e.jsx(n,{classModifier:"danger",onClick:s,children:"Button Danger"}),e.jsx(n,{classModifier:"small",onClick:s,children:"Button Small"}),e.jsx(n,{classModifier:"disabled",onClick:s,children:"Button disabled"})]})},t={name:"Button reverse",args:{children:"Button Reverse",classModifier:"reverse"}},o={name:"Button success",args:{children:"Button success",classModifier:"success"}},c={name:"Button danger",args:{children:"Button Danger",classModifier:"danger"}},i={name:"Button with right icon",args:{children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"glyphicon glyphicon-arrow-right"}),e.jsx("span",{className:"af-btn__text",children:"With icon"})]}),classModifier:"hasiconRight"}},l={name:"Button with left icon",args:{children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"glyphicon glyphicon-arrow-left"}),e.jsx("span",{className:"af-btn__text",children:"With icon"})]}),classModifier:"hasiconLeft"}},d={name:"Button small",args:{children:"Button Small",classModifier:"small"}},u={name:"Button circle",args:{classModifier:"circle",title:"Save",children:e.jsx("span",{className:"glyphicon glyphicon-floppy-disk"})}};var m,p,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Button",
  render: ({
    children: text,
    classModifier,
    onClick,
    ...args
  }) => <Button classModifier={classModifier.join(" ")} onClick={onClick} {...args}>
      {text}
    </Button>,
  args: {
    children: "Button",
    classModifier: [] as string[],
    className: ""
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: {
        type: "multi-select"
      }
    }
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,f,B;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Button with modifiers",
  render: ({
    onClick
  }) => {
    return <div style={{
      display: "flex",
      justifyContent: "space-evenly",
      padding: "2rem",
      flexWrap: "wrap",
      gap: "2rem"
    }}>
        <Button classModifier="reverse" onClick={onClick}>
          Button Reverse
        </Button>
        <Button classModifier="success" onClick={onClick}>
          Button Success
        </Button>
        <Button classModifier="danger" onClick={onClick}>
          Button Danger
        </Button>
        <Button classModifier="small" onClick={onClick}>
          Button Small
        </Button>
        <Button classModifier="disabled" onClick={onClick}>
          Button disabled
        </Button>
      </div>;
  }
}`,...(B=(f=a.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var M,y,x;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Button reverse",
  args: {
    children: "Button Reverse",
    classModifier: "reverse"
  }
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var S,j,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Button success",
  args: {
    children: "Button success",
    classModifier: "success"
  }
}`,...(v=(j=o.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var C,R,_;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Button danger",
  args: {
    children: "Button Danger",
    classModifier: "danger"
  }
}`,...(_=(R=c.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var b,k,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Button with right icon",
  args: {
    children: <>
        <span className="glyphicon glyphicon-arrow-right" />
        <span className="af-btn__text">With icon</span>
      </>,
    classModifier: "hasiconRight"
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var N,W,D;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Button with left icon",
  args: {
    children: <>
        <span className="glyphicon glyphicon-arrow-left" />
        <span className="af-btn__text">With icon</span>
      </>,
    classModifier: "hasiconLeft"
  }
}`,...(D=(W=l.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var I,E,L;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Button small",
  args: {
    children: "Button Small",
    classModifier: "small"
  }
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var O,F,P;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Button circle",
  args: {
    classModifier: "circle",
    title: "Save",
    children: <span className="glyphicon glyphicon-floppy-disk" />
  }
}`,...(P=(F=u.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const J=["Playground","MultiExamples","Reverse","Success","Danger","WithIconRight","WithIconLeft","Small","Circle"],Z=Object.freeze(Object.defineProperty({__proto__:null,Circle:u,Danger:c,MultiExamples:a,Playground:r,Reverse:t,Small:d,Success:o,WithIconLeft:l,WithIconRight:i,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{Z as B,u as C,a as M,r as P,l as W,i as a};
