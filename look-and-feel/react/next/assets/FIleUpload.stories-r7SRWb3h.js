import{j as d}from"./jsx-runtime-D_zvdyIk.js";import"./ToggleCommon-CsLwYdtA.js";import{F as c}from"./constants-Cnbanz1t.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";const b={title:"Components/Form/Input/FileUpload"},p=({...l})=>d.jsx(c,{...l}),e={name:"FileUpload",render:p,args:{id:"file-input",className:"",label:"Label",filesListLabel:"Vos fichiers",files:[{id:"1",name:" IMG_8904587880.jpg",size:109936,isLoading:!1},{id:"2",name:" IMG_465510680.jpg",size:5010,isLoading:!0},{id:"3",name:" IMG_8904587880.jpg",size:23e6,isLoading:!0}],globalError:"Erreur",errors:[{id:"3",message:"Votre fichier fait plus de 19 Mo."}],accept:"image/jpeg, image/png, application/*",buttonLabel:"Importer fichier",instructions:"2 fichiers max. / pdf, png, jpg, jpeg, gif / 19 Mo par fichier",dropzoneDescription:"Glissez/déposez vos fichiers",required:!1,isMobile:!1,multiple:!1},argTypes:{onChange:{action:"onChange"},onView:{action:"onView"},onDelete:{action:"onDelete"}}},i={name:"FileUpload without drag&drop description and with padding",render:p,args:{buttonLabel:"Importer fichier",withPadding:!0,files:[]}};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "FileUpload",
  render,
  args: {
    id: "file-input",
    className: "",
    label: "Label",
    filesListLabel: "Vos fichiers",
    files: [{
      id: "1",
      name: " IMG_8904587880.jpg",
      size: 109936,
      isLoading: false
    }, {
      id: "2",
      name: " IMG_465510680.jpg",
      size: 5010,
      isLoading: true
    }, {
      id: "3",
      name: " IMG_8904587880.jpg",
      size: 23000000,
      isLoading: true
    }],
    globalError: "Erreur",
    errors: [{
      id: "3",
      message: "Votre fichier fait plus de 19 Mo."
    }],
    accept: "image/jpeg, image/png, application/*",
    buttonLabel: "Importer fichier",
    instructions: "2 fichiers max. / pdf, png, jpg, jpeg, gif / 19 Mo par fichier",
    dropzoneDescription: "Glissez/déposez vos fichiers",
    required: false,
    isMobile: false,
    multiple: false
  },
  argTypes: {
    onChange: {
      action: "onChange"
    },
    onView: {
      action: "onView"
    },
    onDelete: {
      action: "onDelete"
    }
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var o,s,t;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "FileUpload without drag&drop description and with padding",
  render,
  args: {
    buttonLabel: "Importer fichier",
    withPadding: true,
    files: []
  }
}`,...(t=(s=i.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const L=["FileUploadStory","FileUploadWithPaddingAndWithoutDescription"];export{e as FileUploadStory,i as FileUploadWithPaddingAndWithoutDescription,L as __namedExportsOrder,b as default};
