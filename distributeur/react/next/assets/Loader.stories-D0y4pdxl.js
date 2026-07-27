import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{n,t as r,w as i}from"./iframe-Cq757aCd.js";import{Ot as a,Tt as o,X as s,_ as c,n as l,o as u,s as d}from"./distributeur-Dy1QNIrM.js";var f=t({ContentVariant:()=>g,FullScreenVariant:()=>_,InlineVariant:()=>h,SquareLoaderComponent:()=>v,__namedExportsOrder:()=>y,default:()=>m}),p,m,h,g,_,v,y,b=e((()=>{l(),r(),p=i(),m=n.meta({component:d,title:`Components/Loader`,parameters:{layout:`fullscreen`}}),h=m.story({name:`Loader - variant inline`,render:({...e})=>(0,p.jsx)(d,{...e}),args:{variant:`inline`,text:`Recherche en cours`}}),g=m.story({name:`Loader - variant content`,render:()=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(c,{children:`Contenu secondaire en cours de chargement`}),(0,p.jsx)(d,{variant:`content`,text:`Recherche en cours`})]})}),_=m.story({name:`Loader - variant fullscreen`,render:()=>(0,p.jsx)(d,{variant:`fullscreen`,text:`Recherche en cours`,children:(0,p.jsxs)(`form`,{children:[(0,p.jsx)(c,{children:`A form asking for your name`}),(0,p.jsx)(s,{label:`name`,message:`error`,messageType:o.error}),(0,p.jsx)(a,{children:`Send`})]})})}),v=m.story({name:`SquareLoader (deprecated)`,render:()=>(0,p.jsx)(u,{mode:`get`,children:(0,p.jsxs)(`form`,{children:[(0,p.jsx)(c,{children:`A form asking for your name`}),(0,p.jsx)(s,{label:`name`,message:`error`,messageType:o.error}),(0,p.jsx)(a,{children:`Send`})]})})}),h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Loader - variant inline",
  render: ({
    ...args
  }) => <Loader {...args} />,
  args: {
    variant: "inline",
    text: "Recherche en cours"
  }
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Loader - variant content",
  render: () => <div>
      <Title>Contenu secondaire en cours de chargement</Title>
      <Loader variant="content" text="Recherche en cours" />
    </div>
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Loader - variant fullscreen",
  render: () => <Loader variant="fullscreen" text="Recherche en cours">
      <form>
        <Title>A form asking for your name</Title>
        <TextInput label="name" message="error" messageType={MessageTypes.error} />
        <Button>Send</Button>
      </form>
    </Loader>
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "SquareLoader (deprecated)",
  render: () => <SquareLoader mode="get">
      <form>
        <Title>A form asking for your name</Title>
        <TextInput label="name" message="error" messageType={MessageTypes.error} />
        <Button>Send</Button>
      </form>
    </SquareLoader>
})`,...v.input.parameters?.docs?.source}}},y=[`InlineVariant`,`ContentVariant`,`FullScreenVariant`,`SquareLoaderComponent`]}));b();export{g as ContentVariant,_ as FullScreenVariant,h as InlineVariant,v as SquareLoaderComponent,y as __namedExportsOrder,m as default,b as n,f as t};