import{j as m}from"./index-C-iqcyhV.js";import"./FileUploadApollo-mKF1Nije.js";import"./index-ZnYipkzV.js";import{I as s}from"./ItemFileApollo-Cd7W4hjC.js";import{f as n}from"./index-VGPHIPc6.js";const o=[new File([new Uint8Array(1496)],"Wallpaper.jpg",{type:"image/jpg"}),new File([new Uint8Array(154896756)],"Document.pdf",{type:"application/pdf"}),new File([new Uint8Array(5741256)],"Presentation.pptx",{type:"application/vnd.openxmlformats-officedocument.presentationml.presentation"})],f={title:"Components/Form/FileUpload/ItemFile",component:s,argTypes:{file:{control:{type:"select"},options:o.map(({name:r})=>r)},isLoading:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},onRemove:{table:{disable:!0}},onPreview:{table:{disable:!0}},previewProps:{control:{type:"object"}},removeProps:{control:{type:"object"}}}},e={args:{file:o[0].name,isLoading:!1,errorMessage:"",previewProps:{"aria-label":"Preview file"},removeProps:{"aria-label":"Remove file"},onRemove:n(),onPreview:n()},render:({file:r,...l})=>m.jsx(s,{...l,file:o.find(({name:p})=>p===r)})};var t,i,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    file: fileLists[0].name,
    isLoading: false,
    errorMessage: "",
    previewProps: {
      "aria-label": "Preview file"
    },
    removeProps: {
      "aria-label": "Remove file"
    },
    onRemove: fn(),
    onPreview: fn()
  },
  render: ({
    file,
    ...args
  }) => <ItemFile {...args} file={fileLists.find(({
    name
  }) => name === file) as File} />
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const c=["Playground"],b=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:c,default:f},Symbol.toStringTag,{value:"Module"}));export{b as I,e as P};
