import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./jsx-runtime-CXZ2plg1.js";import{G as r,t as i}from"./prospect-DFDSrotB.js";var a=t({Playground:()=>c,__namedExportsOrder:()=>l,default:()=>s}),o,s,c,l,u=e((()=>{i(),o=n(),s={title:`Components/Form/FileUpload/InputFile`,component:r,argTypes:{label:{control:`text`},description:{control:`text`},required:{control:`boolean`},helper:{control:`text`},message:{control:`text`},dropzoneLabels:{control:`object`},messageType:{control:`select`,options:[`error`,`success`,`warning`]},moreButtonLabel:{table:{disable:!0}},sideButtonLabel:{table:{disable:!0}},onSideButtonClick:{table:{disable:!0}},onMoreButtonClick:{table:{disable:!0}},labelProps:{table:{disable:!0}}},args:{label:`Joindre un justificatif de domicile`,description:`Description`,required:!1,helper:`2 fichiers max. / pdf, png, jpg, jpeg, gif / 19 Mo par fichier`,message:``,dropzoneLabels:{dropzone:``,or:``,button:``}}},c={render:({description:e,helper:t,label:n,message:i,dropzoneLabels:a,...s})=>{let c={};return a?.dropzone&&(c.dropzone=a.dropzone),a?.or&&(c.or=a.or),a?.button&&(c.button=a.button),(0,o.jsx)(r,{...s,dropzoneLabels:Object.keys(c).length>0?c:void 0,description:e||void 0,helper:t||void 0,label:n||void 0,message:i||void 0})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Playground`]}));u();export{c as Playground,l as __namedExportsOrder,s as default,u as n,a as t};