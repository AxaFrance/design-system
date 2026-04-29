import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{o as s}from"./LoaderApollo-ChRXmG2Q.js";/* empty css               */import"./index-CtOEgLBf.js";const b={title:"Components/Form/FileUpload/InputFile",component:s,argTypes:{label:{control:"text"},description:{control:"text"},required:{control:"boolean"},helper:{control:"text"},message:{control:"text"},dropzoneLabels:{control:"object"},messageType:{control:"select",options:["error","success","warning"]},moreButtonLabel:{table:{disable:!0}},sideButtonLabel:{table:{disable:!0}},onSideButtonClick:{table:{disable:!0}},onMoreButtonClick:{table:{disable:!0}},labelProps:{table:{disable:!0}}},args:{label:"Joindre un justificatif de domicile",description:"Description",required:!1,helper:"2 fichiers max. / pdf, png, jpg, jpeg, gif / 19 Mo par fichier",message:"",dropzoneLabels:{dropzone:"",or:"",button:""}}},n={render:({description:l,helper:a,label:d,message:p,dropzoneLabels:e,...c})=>{const o={};return e!=null&&e.dropzone&&(o.dropzone=e.dropzone),e!=null&&e.or&&(o.or=e.or),e!=null&&e.button&&(o.button=e.button),u.jsx(s,{...c,dropzoneLabels:Object.keys(o).length>0?o:void 0,description:l||void 0,helper:a||void 0,label:d||void 0,message:p||void 0})}};var r,t,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(t=n.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const m=["Playground"],x=Object.freeze(Object.defineProperty({__proto__:null,Playground:n,__namedExportsOrder:m,default:b},Symbol.toStringTag,{value:"Module"}));export{x as I,n as P};
