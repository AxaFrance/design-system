import{j as u}from"./index-C-iqcyhV.js";import{l as s}from"./ItemPaginationApollo-BfQktbo0.js";import"./index-ZnYipkzV.js";const b={title:"Components/Form/FileUpload/InputFile",component:s,argTypes:{label:{control:"text"},description:{control:"text"},required:{control:"boolean"},helper:{control:"text"},message:{control:"text"},dropzoneLabels:{control:"object"},messageType:{control:"select",options:["error","success","warning"]},moreButtonLabel:{table:{disable:!0}},sideButtonLabel:{table:{disable:!0}},onSideButtonClick:{table:{disable:!0}},onMoreButtonClick:{table:{disable:!0}},labelProps:{table:{disable:!0}}},args:{label:"Joindre un justificatif de domicile",description:"Description",required:!1,helper:"2 fichiers max. / pdf, png, jpg, jpeg, gif / 19 Mo par fichier",message:"",dropzoneLabels:{dropzone:"",or:"",button:""}}},o={render:({description:l,helper:a,label:d,message:p,dropzoneLabels:e,...c})=>{const n={};return e!=null&&e.dropzone&&(n.dropzone=e.dropzone),e!=null&&e.or&&(n.or=e.or),e!=null&&e.button&&(n.button=e.button),u.jsx(s,{...c,dropzoneLabels:Object.keys(n).length>0?n:void 0,description:l||void 0,helper:a||void 0,label:d||void 0,message:p||void 0})}};var r,t,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: ({
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
    return <InputFile {...arg} dropzoneLabels={Object.keys(innerDropzoneLabels).length > 0 ? innerDropzoneLabels : undefined} description={description || undefined} helper={helper || undefined} label={label || undefined} message={message || undefined} />;
  }
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const m=["Playground"],h=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:m,default:b},Symbol.toStringTag,{value:"Module"}));export{h as I,o as P};
