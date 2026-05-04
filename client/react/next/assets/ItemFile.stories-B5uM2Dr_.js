import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{t as n}from"./jsx-runtime-CXZ2plg1.js";import{O as r,t as i}from"./client-D92F0iso.js";var a=t({Playground:()=>u,__namedExportsOrder:()=>d,default:()=>l}),o,s,c,l,u,d,f=e((()=>{i(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=[new File([new Uint8Array(1496)],`Wallpaper.jpg`,{type:`image/jpg`}),new File([new Uint8Array(154896756)],`Document.pdf`,{type:`application/pdf`}),new File([new Uint8Array(5741256)],`Presentation.pptx`,{type:`application/vnd.openxmlformats-officedocument.presentationml.presentation`})],l={title:`Components/Form/FileUpload/ItemFile`,component:r,argTypes:{file:{control:{type:`select`},options:c.map(({name:e})=>e)},isLoading:{control:{type:`boolean`}},errorMessage:{control:{type:`text`}},onRemove:{table:{disable:!0}},onPreview:{table:{disable:!0}},previewProps:{control:{type:`object`}},removeProps:{control:{type:`object`}}}},u={args:{file:c[0].name,isLoading:!1,errorMessage:``,previewProps:{"aria-label":`Preview file`},removeProps:{"aria-label":`Remove file`},onRemove:s(),onPreview:s()},render:({file:e,...t})=>(0,o.jsx)(r,{...t,file:c.find(({name:t})=>t===e)})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Playground`]}));f();export{u as Playground,d as __namedExportsOrder,l as default,f as n,a as t};