import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{g}from"./CheckboxCardLF-B4cx2AQD.js";import"./constants-DMAsfsdn.js";import{r as P}from"./index-DuZrfDUH.js";import{l as B}from"./logo-axa-Cqr9fAkX.js";const a=({className:e,src:u,...d})=>{const l=P.useMemo(()=>g("af-basepicture",e),[e]);return t.jsx("img",{className:l,alt:"",src:u||B,...d})},f={title:"Components/BasePicture",component:a},r={name:"BasePicture",render:e=>t.jsx("div",{children:t.jsx(a,{...e})})},s={name:"BasePicture with pic",render:e=>t.jsx("div",{children:t.jsx(a,{...e})}),args:{src:"https://picsum.photos/48",alt:"random image"}};var o,n,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "BasePicture",
  render: args => <div>
      <BasePicture {...args} />
    </div>
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,m,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "BasePicture with pic",
  render: args => <div>
      <BasePicture {...args} />
    </div>,
  args: {
    src: "https://picsum.photos/48",
    alt: "random image"
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const h=["Default","BasePictureWithPic"],b=Object.freeze(Object.defineProperty({__proto__:null,BasePictureWithPic:s,Default:r,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{b as B,r as D};
