import{j as s}from"./jsx-runtime-QvZ8i92b.js";import{r as o}from"./index-uubelm5h.js";import{b as R}from"./bluetooth_searching-BicIGu-i.js";import{f as i}from"./index-C_FWhylE.js";import{M as _}from"./Modal-DMFJEU_j.js";import{r as L}from"./index-CfOt2XX2.js";import{S as T}from"./Svg-CUaNRA4q.js";const q=({setIsOpen:e,onClose:n,onClickOutside:a})=>{const r=o.useCallback(()=>{n==null||n(),e(!1)},[n,e]),u=o.useCallback(l=>{l.target.tagName==="DIALOG"&&(a?(a(),e(!1)):r())},[r,a,e]),d=o.useCallback(l=>{l.key==="Escape"&&r()},[r]);return{handleClickOutside:u,handleKeyDown:d,handleCloseModal:r}},C=({open:e,setIsOpen:n,hasCloseButton:a=!0,onClose:r,onClickOutside:u,children:d,title:l,subtitle:g,iconTitle:k,actions:M,fullWidthButtons:j})=>{const{handleClickOutside:m,handleKeyDown:f,handleCloseModal:S}=q({setIsOpen:n,onClose:r,onClickOutside:u}),b=o.useRef(null),w=o.useId(),E=o.useId(),P=t=>{t==null||t(),n(!1)};return o.useEffect(()=>{var p,y;const t=b.current;return t&&(e?(document.body.style.overflow="hidden",(p=t.showModal)==null||p.call(t)):(document.body.style.overflow="inherit",(y=t.close)==null||y.call(t))),()=>{document.body.style.overflow="inherit"}},[e]),o.useEffect(()=>(document.body.addEventListener("keydown",f),document.body.addEventListener("click",m),()=>{document.body.removeEventListener("keydown",f),document.body.removeEventListener("click",m)}),[m,f]),L.createPortal(s.jsx(_,{modalRef:b,idTitle:w,idContent:E,iconTitle:k,title:l,subtitle:g,hasCloseButton:a,handleCloseModal:S,actionCallback:P,actions:M,fullWidthButtons:j,children:d}),document.body)},B={title:"Components/Modal",component:C,parameters:{layout:"centered",actions:{argTypesRegex:"^on.*|^callback*"}}},D=e=>{const[n,a]=o.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button",onClick:()=>a(!0),children:"open modal"}),s.jsx(C,{...e,open:n,setIsOpen:a})]})},c={name:"Modal",render:e=>s.jsx(D,{...e}),args:{hasCloseButton:!0,title:"Modal title",children:"Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",iconTitle:s.jsx(T,{src:R}),subtitle:"Info complémentaire",fullWidthButtons:!1,onClose:i(),onClickOutside:i(),actions:{primary:{text:"Save",callback:i()},secondary:{text:"Cancel",callback:i()},tertiary:{text:"Reset",callback:i(),disabled:!0}}}};var h,x,v;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Modal",
  render: args => <Container {...args} />,
  args: {
    hasCloseButton: true,
    title: "Modal title",
    children: "Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",
    iconTitle: <Svg src={bluetoothAudio} />,
    subtitle: "Info complémentaire",
    fullWidthButtons: false,
    onClose: fn(),
    onClickOutside: fn(),
    actions: {
      primary: {
        text: "Save",
        callback: fn()
      },
      secondary: {
        text: "Cancel",
        callback: fn()
      },
      tertiary: {
        text: "Reset",
        callback: fn(),
        disabled: true
      }
    }
  }
}`,...(v=(x=c.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const O=["Playground"],G=Object.freeze(Object.defineProperty({__proto__:null,Playground:c,__namedExportsOrder:O,default:B},Symbol.toStringTag,{value:"Module"}));export{G as M,c as P};
