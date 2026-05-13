import{a as e,n as t,r as n}from"./chunk-DnJy8xQt.js";import{k as r}from"./iframe-DboDNVKR.js";import{t as i}from"./jsx-runtime-CXZ2plg1.js";import{t as a,y as o}from"./client-DKDZiWM3.js";var s=n({Default:()=>d,__namedExportsOrder:()=>f,default:()=>u}),c,l,u,d,f,p=t((()=>{a(),c=e(r(),1),l=i(),u={title:`Components/LevelSelector`,component:o},d={render:({...e})=>{let[t,n]=(0,c.useState)(e.value||0);return(0,l.jsx)(`div`,{style:{maxWidth:500},children:(0,l.jsx)(o,{...e,value:t,onChange:n})})},args:{stepsCount:3,title:`Titre du niveau actif`,description:`Texte secondaire dynamique sur le niveau actif avec un contenu plus ou moins long selon le besoin`,value:0},argTypes:{onChange:{action:`onClick`}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    const [value, setValue] = useState(args.value || 0);
    return <div style={{
      maxWidth: 500
    }}>
        <LevelSelector {...args} value={value} onChange={setValue} />
      </div>;
  },
  args: {
    stepsCount: 3,
    title: "Titre du niveau actif",
    description: "Texte secondaire dynamique sur le niveau actif avec un contenu plus ou moins long selon le besoin",
    value: 0
  },
  argTypes: {
    onChange: {
      action: "onClick"
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`]}));p();export{d as Default,f as __namedExportsOrder,u as default,p as n,s as t};