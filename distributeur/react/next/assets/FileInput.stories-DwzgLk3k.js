import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as y,F as x,i as l,j as v,k as I}from"./EditorialMessage-DERao45K.js";import"./getClassName-C9dUI_Mz.js";import"./index-CtOEgLBf.js";import{fn as S}from"./index-CH2Su9EI.js";const t=[{id:"000003",file:{name:"error-file.jpg",size:100,preview:"https://via.placeholder.com/150Cx50",type:"image"}},{id:"000004",file:{name:"fichier.png",size:100,preview:"https://via.placeholder.com/150Cx50",type:"image"}},{id:"000005",file:{name:"fichier.csv",preview:"https://via.placeholder.com/150Cx50",size:100}}],M={component:x,title:"Components/Form/Input/File",argTypes:{onChange:{action:"onChange"}},args:{onChange:S()}},r={name:"FileInput",render:({onChange:a,...n})=>e.jsx(x,{onChange:a,...n}),args:{required:!0,label:"Image",fileLabel:"Browse",name:"placeImage",id:"inputuniqueid",accept:"image/jpeg, image/png, application/*",helpMessage:"Take a photo af a place",messageType:y.error,multiple:!0,isVisible:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10",values:t}},s={name:"File",render:({onChange:a,...n})=>e.jsx(l,{onChange:a,...n}),args:{label:"Image",name:"placeImage",id:"inputuniqueid",accept:"image/jpeg, image/png, application/*",multiple:!0,isVisible:!0,icon:"open"}},w=[{file:{name:"refused-extension-file.svg",preview:"",size:100}},{file:{name:"too-big-file.jpg",size:100},errors:{}},{file:{name:"error-file.jpg",preview:"",size:100}}],i={name:"File with values",render:({onChange:a,...n})=>e.jsxs(e.Fragment,{children:[e.jsx(l,{onChange:a,...n}),e.jsx(v,{message:"Enter the place name, ex : Webcenter"}),e.jsx(I,{errors:[],values:t,onClick:()=>{},classModifier:""})]})},o={name:"File with errors",render:({onChange:a,...n})=>e.jsxs(e.Fragment,{children:[e.jsx(l,{onChange:a,...n}),e.jsx(v,{message:"Enter the place name, ex : Webcenter"}),e.jsx(I,{errors:w,values:t,onClick:()=>{},classModifier:""})]})};var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "FileInput",
  render: ({
    onChange,
    ...args
  }) => <FileInput onChange={onChange} {...args} />,
  args: {
    required: true,
    label: "Image",
    fileLabel: "Browse",
    name: "placeImage",
    id: "inputuniqueid",
    accept: "image/jpeg, image/png, application/*",
    helpMessage: "Take a photo af a place",
    messageType: MessageTypes.error,
    multiple: true,
    isVisible: true,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    values
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var g,u,d;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "File",
  render: ({
    onChange,
    ...args
  }) => <File onChange={onChange} {...args} />,
  args: {
    label: "Image",
    name: "placeImage",
    id: "inputuniqueid",
    accept: "image/jpeg, image/png, application/*",
    multiple: true,
    isVisible: true,
    icon: "open"
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,F,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "File with values",
  render: ({
    onChange,
    ...args
  }) => <>
      <File onChange={onChange} {...args} />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
      <FileTable errors={[]} values={values} onClick={() => {}} classModifier="" />
    </>
}`,...(f=(F=i.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var C,b,j;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "File with errors",
  render: ({
    onChange,
    ...args
  }) => <>
      <File onChange={onChange} {...args} />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
      <FileTable errors={errors} values={values} onClick={() => {}} classModifier="" />
    </>
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const T=["FileInputStory","FileStory","FileWithValuesStory","FileWithErrorsStory"],V=Object.freeze(Object.defineProperty({__proto__:null,FileInputStory:r,FileStory:s,FileWithErrorsStory:o,FileWithValuesStory:i,__namedExportsOrder:T,default:M},Symbol.toStringTag,{value:"Module"}));export{V as F,r as a,s as b,i as c,o as d};
