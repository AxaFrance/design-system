import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{cn as r,t as i}from"./prospect-CtK1YRhd.js";var a=t({Disabled:()=>d,Empty:()=>l,ErrorInForm:()=>u,Playground:()=>c,__namedExportsOrder:()=>f,default:()=>s}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{i(),o=n(),s={title:`Components/Form/DropdownMultiSelect`,component:r,args:{label:`Choix multiples`,description:`Description`,moreButtonLabel:`En savoir plus`,placeholder:`Sélectionner`,helper:`Sélectionnez une ou plusieurs options`,items:[{id:`option-1`,label:`Option 1`},{id:`option-2`,label:`Option 2`,checked:!0},{id:`option-3`,label:`Option 3`},{id:`option-4`,label:`Option 4`},{id:`option-5`,label:`Option 5`},{id:`option-6`,label:`Option 6`}],defaultValue:[`option-2`,`option-5`]},argTypes:{onChange:{action:`onChange`}}},c={},l={args:{defaultValue:[]}},u={render:e=>(0,o.jsx)(`form`,{children:(0,o.jsx)(r,{...e,message:`Champ obligatoire`,messageType:`error`})})},d={args:{disabled:!0}},f=[`Playground`,`Empty`,`ErrorInForm`,`Disabled`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: []
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <form>
      <DropdownMultiSelect {...args} message="Champ obligatoire" messageType="error" />
    </form>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}}})))()}export{c as a,u as i,a as n,p as o,l as r,d as t};