import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{j as q}from"./ToggleCommon-DsA6apC2.js";import"./index-DuZrfDUH.js";import{B as v}from"./BasePictureCommon-BYI3t9dF.js";const M=({size:e="medium",leftComponent:m,title:c,primarySubtitle:n,subtitle:p})=>t.jsxs("div",{"data-testid":"container",className:`af-content-item-mono ${e}`,children:[m??t.jsx("div",{className:"stick"}),t.jsxs("div",{className:"text-content",children:[t.jsx("span",{className:"title",children:c}),n&&t.jsx("span",{className:"subtitle-primary",children:n}),p&&t.jsx("span",{className:"subtitle",children:p})]})]}),k=({IconComponent:e,BasePictureComponent:m,type:c,...n})=>{if(c==="icon"){const{icon:p,title:h,subtitle1:P,subtitle2:S}=n;return{title:h,primarySubtitle:P,subtitle:S,leftComponent:t.jsx(e,{"data-testid":"icon",src:p})}}return c==="picture"?{...n,leftComponent:t.jsx(m,{src:n.picture,alt:n.title})}:n},w=e=>t.jsx(M,{...k(e)}),a=e=>t.jsx(w,{...e,BasePictureComponent:v,IconComponent:q}),N="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='M189-95q-38.05%200-66.03-27.47Q95-149.95%2095-189v-582q0-38.46%2027.97-66.73Q150.95-866%20189-866h582q39.46%200%2067.23%2028.27Q866-809.46%20866-771v54H540q-54%200-90.5%2036.56Q413-643.89%20413-592v226q0%2053%2036.5%2088.5T540-242h326v53q0%2039-27.77%2066.5T771-95H189Zm351-198q-33%200-54.5-20.57-21.5-20.58-21.5-52.68V-592q0-32%2021.5-53t54.5-21h291q33%200%2054.5%2021t21.5%2053v225.75q0%2032.1-21.5%2052.68Q864-293%20831-293H540Zm112-123q25%200%2044.5-19.5T716-481q0-25-19.5-44T652-544q-25%200-44.5%2019T588-481q0%2026%2019.5%2045.5T652-416Z'/%3e%3c/svg%3e",_={component:a,title:"Components/ContentItemMono"},r={name:"Picture",render:e=>t.jsx(a,{...e}),args:{type:"picture",picture:"https://i.pinimg.com/originals/c4/28/f1/c428f1822d619e3ce4ad0ef7fa30d009.jpg",title:"Texte principale",subtitle:"Texte secondaire"}},o={name:"PictureLarge",render:e=>t.jsx(a,{...e}),args:{type:"picture",picture:"https://i.pinimg.com/originals/c4/28/f1/c428f1822d619e3ce4ad0ef7fa30d009.jpg",title:"Texte principale",subtitle:"Texte secondaire",size:"large"}},s={name:"Icon",render:e=>t.jsx(a,{...e}),args:{type:"icon",icon:N,title:"Texte principale",subtitle1:"Texte secondaire",subtitle2:"Texte tertiare"}},i={name:"Stick",render:e=>t.jsx(a,{...e}),args:{type:"stick",title:"Texte principale",subtitle:"Texte secondaire"}};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Picture",
  render: (props: ContentItemProps) => <ContentItemMono {...props} />,
  args: {
    type: "picture",
    picture: "https://i.pinimg.com/originals/c4/28/f1/c428f1822d619e3ce4ad0ef7fa30d009.jpg",
    title: "Texte principale",
    subtitle: "Texte secondaire"
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,x,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "PictureLarge",
  render: (props: ContentItemProps) => <ContentItemMono {...props} />,
  args: {
    type: "picture",
    picture: "https://i.pinimg.com/originals/c4/28/f1/c428f1822d619e3ce4ad0ef7fa30d009.jpg",
    title: "Texte principale",
    subtitle: "Texte secondaire",
    size: "large"
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var T,j,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Icon",
  render: (props: ContentItemProps) => <ContentItemMono {...props} />,
  args: {
    type: "icon",
    icon: bank,
    title: "Texte principale",
    subtitle1: "Texte secondaire",
    subtitle2: "Texte tertiare"
  }
}`,...(C=(j=s.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var I,b,y;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Stick",
  render: (props: ContentItemProps) => <ContentItemMono {...props} />,
  args: {
    type: "stick",
    title: "Texte principale",
    subtitle: "Texte secondaire"
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const Q=["Playground","PictureLStory","IconStory","StickStory"],O=Object.freeze(Object.defineProperty({__proto__:null,IconStory:s,PictureLStory:o,Playground:r,StickStory:i,__namedExportsOrder:Q,default:_},Symbol.toStringTag,{value:"Module"}));export{O as C,r as P};
