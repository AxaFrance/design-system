/* empty css                      */import{d as o,a as n,e as v,s as x,k as H,m as C,p as i,n as B,o as D}from"./utils-DJsnTcQJ.js";import{r as l}from"./TitleRender-tSWyE4Rs.js";const L=t=>{const a=n({class:"injected-svg",width:"32",height:"32",viewBox:"0 -960 960 960",xmlns:"http://www.w3.org/2000/svg",path:"m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"}),m=n({width:"32",height:"32",viewBox:"0 -960 960 960",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"graphics-document",path:"M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"}),u=l({label:a.outerHTML}),p=v([t.title],{class:"af-modal__header-title-heading"}),h=x([t.subtitle],{class:"af-modal__header-title-subtitle"}),s=o([p,h],{class:"af-modal__header-title"});s.innerHTML=m.outerHTML+s.innerHTML;const f=H([u,s],{class:"af-modal__header"}),_=C([i(),i()],{class:"af-modal__body"}),b=l({label:t.cancelTitle}),g=l({label:t.submitTitle}),w=B([b,g],{class:"af-modal__footer"}),M=o([f,_,w],{class:"af-modal__content"}),T=o([M],{class:"af-modal__dialog"});return D([T],{class:"af-modal"})},k=t=>{const a=l({});return o([a,L(t)])},y={title:"Components/Modal"},e={render:k,args:{open:!0,onClose:()=>!0,title:"Modal title",iconTitle:null,subtitle:"Modal subtitle",cancelTitle:"Cancel",submitTitle:"Submit"}};var r,c,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render,
  args: {
    open: true,
    onClose: () => true,
    title: "Modal title",
    iconTitle: null,
    subtitle: "Modal subtitle",
    cancelTitle: "Cancel",
    submitTitle: "Submit"
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const E=["Default"];export{e as Default,E as __namedExportsOrder,y as default};
