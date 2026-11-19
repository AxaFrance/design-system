import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{St as r,t as i}from"./client-BKGFy6MN.js";var a=t({Disabled:()=>p,Empty:()=>u,Playground:()=>l,RequiredOption:()=>d,WithMessage:()=>f,__namedExportsOrder:()=>m,default:()=>c}),o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{i(),o=n(),s=[{id:`option-1`,label:`Option 1`},{id:`option-2`,label:`Option 2`},{id:`option-3`,label:`Option 3`},{id:`option-4`,label:`Option 4`},{id:`option-5`,label:`Option 5`},{id:`option-6`,label:`Option 6`}],c={title:`Components/Form/DropdownMultiSelect`,component:r,render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(r,{...e})}),args:{label:`Choix multiples`,description:`Description`,moreButtonLabel:`En savoir plus`,placeholder:`Sélectionner`,helper:`Sélectionnez une ou plusieurs options`,items:s,required:!1},argTypes:{onChange:{action:`onChange`}}},l={},u={args:{items:[]}},d={args:{required:!0}},f={args:{message:`Champ obligatoire`,messageType:`error`,defaultValue:[`option-2`,`option-5`],items:s.map(e=>({...e,checked:[`option-2`,`option-5`].includes(e.id)}))},render:e=>(0,o.jsx)(r,{...e})},p={args:{disabled:!0}},m=[`Playground`,`Empty`,`RequiredOption`,`WithMessage`,`Disabled`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Champ obligatoire",
    messageType: "error",
    defaultValue: ["option-2", "option-5"],
    items: items.map(item => ({
      ...item,
      checked: ["option-2", "option-5"].includes(item.id)
    }))
  },
  render: args => <DropdownMultiSelect {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...p.parameters?.docs?.source}}}})))()}export{f as a,l as i,a as n,h as o,u as r,p as t};