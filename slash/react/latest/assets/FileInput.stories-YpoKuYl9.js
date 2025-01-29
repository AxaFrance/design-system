import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{f as y}from"./index-Bm9fFANh.js";import{M as S,H as x}from"./HelpMessage-D9o_4RmS.js";import"./getComponentClassName-CfMiunrP.js";import"./index-C33_amOP.js";import{F as j,a as t,b as v}from"./FileInput-DDN3d1tw.js";const M={component:j,title:"Components/Form/Input/File",argTypes:{onChange:{action:"onChange"}},args:{onChange:y()}},n={name:"FileInput",render:({onChange:a,...r})=>e.jsx(j,{onChange:a,...r}),args:{required:!0,label:"Image",fileLabel:"Browse",name:"placeImage",id:"inputuniqueid",accept:"image/jpeg, image/png, application/*",helpMessage:"Take a photo af a place",messageType:S.error,multiple:!0,isVisible:!0,classNameContainerLabel:"col-md-2",classNameContainerInput:"col-md-10"}},s={name:"File",render:({onChange:a,...r})=>e.jsx(t,{onChange:a,...r}),args:{label:"Image",name:"placeImage",id:"inputuniqueid",accept:"image/jpeg, image/png, application/*",multiple:!0,isVisible:!0,icon:"open"}},w=[{file:{name:"refused-extension-file.svg",preview:"",size:100}},{file:{name:"too-big-file.jpg",size:100},errors:{}},{file:{name:"error-file.jpg",preview:"",size:100}}],I=[{id:"000003",file:{name:"error-file.jpg",size:100,preview:"https://via.placeholder.com/150Cx50",type:"image"}},{id:"000004",file:{name:"fichier.png",size:100,preview:"https://via.placeholder.com/150Cx50",type:"image"}},{id:"000005",file:{name:"fichier.csv",preview:"https://via.placeholder.com/150Cx50",size:100}}],i={name:"File with values",render:({onChange:a,...r})=>e.jsxs(e.Fragment,{children:[e.jsx(t,{onChange:a,...r}),e.jsx(x,{message:"Enter the place name, ex : Webcenter"}),e.jsx(v,{errors:[],values:I,onClick:()=>{},classModifier:""})]})},o={name:"File with errors",render:({onChange:a,...r})=>e.jsxs(e.Fragment,{children:[e.jsx(t,{onChange:a,...r}),e.jsx(x,{message:"Enter the place name, ex : Webcenter"}),e.jsx(v,{errors:w,values:I,onClick:()=>{},classModifier:""})]})};var l,p,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    classNameContainerInput: "col-md-10"
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,g,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var d,h,F;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "File with values",
  render: ({
    onChange,
    ...args
  }) => <>
      <File onChange={onChange} {...args} />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
      <FileTable errors={[]} values={values} onClick={() => {}} classModifier="" />
    </>
}`,...(F=(h=i.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var f,C,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "File with errors",
  render: ({
    onChange,
    ...args
  }) => <>
      <File onChange={onChange} {...args} />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
      <FileTable errors={errors} values={values} onClick={() => {}} classModifier="" />
    </>
}`,...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const T=["FileInputStory","FileStory","FileWithValuesStory","FileWithErrorsStory"],_=Object.freeze(Object.defineProperty({__proto__:null,FileInputStory:n,FileStory:s,FileWithErrorsStory:o,FileWithValuesStory:i,__namedExportsOrder:T,default:M},Symbol.toStringTag,{value:"Module"}));export{_ as F,n as a,s as b,i as c,o as d};
