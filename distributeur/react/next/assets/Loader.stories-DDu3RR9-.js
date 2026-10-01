import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-C1_elBxI.js";import{Ot as a,Tt as o,et as s,o as c,t as l,v as u}from"./distributeur-ntzzdXqx.js";var d=t({ContentVariant:()=>h,FullScreenVariant:()=>g,InlineVariant:()=>m,__namedExportsOrder:()=>_,default:()=>p}),f,p,m,h,g,_,v=e((()=>{l(),r(),f=i(),p=n.meta({component:c,title:`Components/Loader`,parameters:{layout:`fullscreen`}}),m=p.story({name:`Loader - variant inline`,render:({...e})=>(0,f.jsx)(c,{...e}),args:{variant:`inline`,text:`Recherche en cours`}}),h=p.story({name:`Loader - variant content`,render:()=>(0,f.jsxs)(`div`,{children:[(0,f.jsx)(u,{children:`Contenu secondaire en cours de chargement`}),(0,f.jsx)(c,{variant:`content`,text:`Recherche en cours`})]})}),g=p.story({name:`Loader - variant fullscreen`,render:()=>(0,f.jsx)(c,{variant:`fullscreen`,text:`Recherche en cours`,children:(0,f.jsxs)(`form`,{children:[(0,f.jsx)(u,{children:`A form asking for your name`}),(0,f.jsx)(s,{label:`name`,message:`error`,messageType:o.error}),(0,f.jsx)(a,{children:`Send`})]})})}),m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...g.input.parameters?.docs?.source}}},_=[`InlineVariant`,`ContentVariant`,`FullScreenVariant`]}));v();export{h as ContentVariant,g as FullScreenVariant,m as InlineVariant,_ as __namedExportsOrder,p as default,v as n,d as t};