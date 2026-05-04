import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-B6pS4pdr.js";import{St as a,ct as o,n as s,ot as c,st as l,xt as u}from"./distributeur-DmtDXCQS.js";var d=t({FileInputStory:()=>g,FileStory:()=>_,FileWithErrorsStory:()=>b,FileWithValuesStory:()=>y,__namedExportsOrder:()=>x,default:()=>h}),f,p,m,h,g,_,v,y,b,x,S=e((()=>{s(),r(),f=i(),{fn:p}=__STORYBOOK_MODULE_TEST__,m=[{id:`000003`,file:{name:`error-file.jpg`,size:100,preview:`https://via.placeholder.com/150Cx50`,type:`image`}},{id:`000004`,file:{name:`fichier.png`,size:100,preview:`https://via.placeholder.com/150Cx50`,type:`image`}},{id:`000005`,file:{name:`fichier.csv`,preview:`https://via.placeholder.com/150Cx50`,size:100}}],h=n.meta({component:c,title:`Components/Form/Input/File`,argTypes:{onChange:{action:`onChange`}},args:{onChange:p()}}),g=h.story({name:`FileInput`,render:({onChange:e,...t})=>(0,f.jsx)(c,{onChange:e,...t}),args:{required:!0,label:`Image`,fileLabel:`Browse`,name:`placeImage`,id:`inputuniqueid`,accept:`image/jpeg, image/png, application/*`,helpMessage:`Take a photo af a place`,messageType:a.error,multiple:!0,isVisible:!0,classNameContainerLabel:`col-md-2`,classNameContainerInput:`col-md-10`,values:m}}),_=h.story({name:`File`,render:({onChange:e,...t})=>(0,f.jsx)(o,{onChange:e,...t}),args:{label:`Image`,name:`placeImage`,id:`inputuniqueid`,accept:`image/jpeg, image/png, application/*`,multiple:!0,isVisible:!0,icon:`open`}}),v=[{file:{name:`refused-extension-file.svg`,preview:``,size:100}},{file:{name:`too-big-file.jpg`,size:100},errors:{}},{file:{name:`error-file.jpg`,preview:``,size:100}}],y=h.story({name:`File with values`,render:({onChange:e,...t})=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{onChange:e,...t}),(0,f.jsx)(u,{message:`Enter the place name, ex : Webcenter`}),(0,f.jsx)(l,{errors:[],values:m,onClick:()=>{},classModifier:``})]}),args:{label:`Image`}}),b=h.story({name:`File with errors`,render:({onChange:e,...t})=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{onChange:e,...t}),(0,f.jsx)(u,{message:`Enter the place name, ex : Webcenter`}),(0,f.jsx)(l,{errors:v,values:m,onClick:()=>{},classModifier:``})]}),args:{label:`Image`}}),g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,..._.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "File with values",
  render: ({
    onChange,
    ...args
  }) => <>
      <File onChange={onChange} {...args} />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
      <FileTable errors={[]} values={values} onClick={() => {}} classModifier="" />
    </>,
  args: {
    label: "Image"
  }
})`,...y.input.parameters?.docs?.source}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "File with errors",
  render: ({
    onChange,
    ...args
  }) => <>
      <File onChange={onChange} {...args} />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
      <FileTable errors={errors} values={values} onClick={() => {}} classModifier="" />
    </>,
  args: {
    label: "Image"
  }
})`,...b.input.parameters?.docs?.source}}},x=[`FileInputStory`,`FileStory`,`FileWithValuesStory`,`FileWithErrorsStory`]}));S();export{g as FileInputStory,_ as FileStory,b as FileWithErrorsStory,y as FileWithValuesStory,x as __namedExportsOrder,h as default,S as n,d as t};