import{j as r}from"./index-C-iqcyhV.js";import{F as s}from"./ClickIconApollo-BCBKEBAR.js";import"./index-ZnYipkzV.js";import{I as t}from"./ItemFileLF-GlIkVuH0.js";const m={title:"Components/Form/FileUpload/FileUpload",component:s,argTypes:{label:{control:"text"},description:{control:"text"},required:{control:"boolean"},helper:{control:"text"},message:{control:"text"},dropzoneLabels:{control:"object"},messageType:{control:"select",options:["error","success","warning"]},moreButtonLabel:{table:{disable:!0}},sideButtonLabel:{table:{disable:!0}},onSideButtonClick:{table:{disable:!0}},onMoreButtonClick:{table:{disable:!0}},labelProps:{table:{disable:!0}},children:{table:{disable:!0}},fileListLabel:{control:"text"}},args:{label:"Joindre un justificatif de domicile",description:"Description",required:!1,helper:"2 fichiers max. / pdf, png, jpg, jpeg, gif / 5 Mo par fichier",message:"",dropzoneLabels:{dropzone:"",or:"",button:""},fileListLabel:""}},o={render:({fileListLabel:p,description:d,helper:u,label:c,message:b,dropzoneLabels:e,...f})=>{const n={};return e!=null&&e.dropzone&&(n.dropzone=e.dropzone),e!=null&&e.or&&(n.or=e.or),e!=null&&e.button&&(n.button=e.button),r.jsxs(s,{...f,dropzoneLabels:Object.keys(n).length>0?n:void 0,fileListLabel:p||void 0,description:d||void 0,helper:u||void 0,label:c||void 0,message:b||void 0,children:[r.jsx(t,{file:new File([new Uint8Array(1496)],"Wallpaper.jpg",{type:"image/jpg"})}),r.jsx(t,{file:new File([new Uint8Array(5159852)],"Document.pdf",{type:"application/pdf"}),errorMessage:"Le fichier que vous souhaitez importer est supérieur à 5 Mo."})]})}};var i,l,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: ({
    fileListLabel,
    description,
    helper,
    label,
    message,
    dropzoneLabels,
    ...arg
  }) => {
    const innerDropzoneLabels = {} as Record<"dropzone" | "or" | "button", ReactNode>;
    if (dropzoneLabels?.dropzone) {
      innerDropzoneLabels.dropzone = dropzoneLabels.dropzone;
    }
    if (dropzoneLabels?.or) {
      innerDropzoneLabels.or = dropzoneLabels.or;
    }
    if (dropzoneLabels?.button) {
      innerDropzoneLabels.button = dropzoneLabels.button;
    }
    return <FileUpload {...arg} dropzoneLabels={Object.keys(innerDropzoneLabels).length > 0 ? innerDropzoneLabels : undefined} fileListLabel={fileListLabel || undefined} description={description || undefined} helper={helper || undefined} label={label || undefined} message={message || undefined}>
        <ItemFile file={new File([new Uint8Array(1_496)], "Wallpaper.jpg", {
        type: "image/jpg"
      })} />
        <ItemFile file={new File([new Uint8Array(5_159_852)], "Document.pdf", {
        type: "application/pdf"
      })} errorMessage="Le fichier que vous souhaitez importer est supérieur à 5 Mo." />
      </FileUpload>;
  }
}`,...(a=(l=o.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const g=["Playground"],F=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:g,default:m},Symbol.toStringTag,{value:"Module"}));export{F,o as P};
