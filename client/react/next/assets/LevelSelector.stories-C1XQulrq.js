import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{nt as n}from"./iframe-DsAcgqzN.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{R as i,t as a}from"./client-2r8I_y7l.js";var o=t({Default:()=>u,__namedExportsOrder:()=>d,default:()=>l}),s,c,l,u,d;function f(){return(f=e((()=>{a(),s=n(),c=r(),l={title:`Components/LevelSelector`,component:i},u={render:({...e})=>{let[t,n]=(0,s.useState)(e.value||0);return(0,c.jsx)(`div`,{style:{maxWidth:500},children:(0,c.jsx)(i,{...e,value:t,onChange:n})})},args:{stepsCount:3,title:`Titre du niveau actif`,description:`Texte secondaire dynamique sur le niveau actif avec un contenu plus ou moins long selon le besoin`,value:0},argTypes:{onChange:{action:`onClick`}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Default`]})))()}export{o as n,f as r,u as t};