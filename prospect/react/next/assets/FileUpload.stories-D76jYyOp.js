import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./jsx-runtime-CXZ2plg1.js";import{V as r,W as i,t as a}from"./prospect-DFDSrotB.js";var o=t({Playground:()=>l,__namedExportsOrder:()=>u,default:()=>c}),s,c,l,u,d=e((()=>{a(),s=n(),c={title:`Components/Form/FileUpload/FileUpload`,component:i,argTypes:{label:{control:`text`},description:{control:`text`},required:{control:`boolean`},helper:{control:`text`},message:{control:`text`},dropzoneLabels:{control:`object`},messageType:{control:`select`,options:[`error`,`success`,`warning`]},moreButtonLabel:{table:{disable:!0}},sideButtonLabel:{table:{disable:!0}},onSideButtonClick:{table:{disable:!0}},onMoreButtonClick:{table:{disable:!0}},labelProps:{table:{disable:!0}},children:{table:{disable:!0}},fileListLabel:{control:`text`}},args:{label:`Joindre un justificatif de domicile`,description:`Description`,required:!1,helper:`2 fichiers max. / pdf, png, jpg, jpeg, gif / 5 Mo par fichier`,message:``,dropzoneLabels:{dropzone:``,or:``,button:``},fileListLabel:``}},l={render:({fileListLabel:e,description:t,helper:n,label:a,message:o,dropzoneLabels:c,...l})=>{let u={};return c?.dropzone&&(u.dropzone=c.dropzone),c?.or&&(u.or=c.or),c?.button&&(u.button=c.button),(0,s.jsxs)(i,{...l,dropzoneLabels:Object.keys(u).length>0?u:void 0,fileListLabel:e||void 0,description:t||void 0,helper:n||void 0,label:a||void 0,message:o||void 0,children:[(0,s.jsx)(r,{file:new File([new Uint8Array(1496)],`Wallpaper.jpg`,{type:`image/jpg`})}),(0,s.jsx)(r,{file:new File([new Uint8Array(5159852)],`Document.pdf`,{type:`application/pdf`}),errorMessage:`Le fichier que vous souhaitez importer est supérieur à 5 Mo.`})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Playground`]}));d();export{l as Playground,u as __namedExportsOrder,c as default,d as n,o as t};