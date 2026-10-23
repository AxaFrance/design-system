import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i}from"./iframe-DBecIi7S.js";import{Jt as a,P as o,Un as s,Yn as c,t as l,u}from"./distributeur-wY98V-UD.js";var d=t({ContentVariant:()=>h,FullScreenVariant:()=>g,InlineVariant:()=>m,__namedExportsOrder:()=>_,default:()=>p}),f,p,m,h,g,_;function v(){return(v=e((()=>{l(),r(),f=n(),p=i.meta({component:u,title:`Components/Loader`,parameters:{layout:`fullscreen`}}),m=p.story({name:`Loader - variant inline`,render:({...e})=>(0,f.jsx)(u,{...e}),args:{variant:`inline`,text:`Recherche en cours`}}),h=p.story({name:`Loader - variant content`,render:()=>(0,f.jsxs)(`div`,{children:[(0,f.jsx)(o,{children:`Contenu secondaire en cours de chargement`}),(0,f.jsx)(u,{variant:`content`,text:`Recherche en cours`})]})}),g=p.story({name:`Loader - variant fullscreen`,render:()=>(0,f.jsx)(u,{variant:`fullscreen`,text:`Recherche en cours`,children:(0,f.jsxs)(`form`,{children:[(0,f.jsx)(o,{children:`A form asking for your name`}),(0,f.jsx)(a,{label:`name`,message:`error`,messageType:s.error}),(0,f.jsx)(c,{children:`Send`})]})})}),m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Loader - variant inline",
  render: ({
    ...args
  }) => <Loader {...args} />,
  args: {
    variant: "inline",
    text: "Recherche en cours"
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Loader - variant content",
  render: () => <div>
      <Title>Contenu secondaire en cours de chargement</Title>
      <Loader variant="content" text="Recherche en cours" />
    </div>
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Loader - variant fullscreen",
  render: () => <Loader variant="fullscreen" text="Recherche en cours">
      <form>
        <Title>A form asking for your name</Title>
        <TextInput label="name" message="error" messageType={MessageTypes.error} />
        <Button>Send</Button>
      </form>
    </Loader>
})`,...g.input.parameters?.docs?.source}}},_=[`InlineVariant`,`ContentVariant`,`FullScreenVariant`]})))()}export{v as a,d as i,g as n,m as r,h as t};