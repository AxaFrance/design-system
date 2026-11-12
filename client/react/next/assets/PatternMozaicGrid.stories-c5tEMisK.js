import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{Jt as r,nt as i,t as a}from"./client-BA4V0FF1.js";import{dt as o,yr as s}from"./MessageBarCommon-Bs3XJyGc.js";import"./layout-D-szCo83.js";var c=t({AllBreakpoints:()=>f,ContentZones:()=>p,Responsive:()=>d,WithCardMarketing:()=>m,__namedExportsOrder:()=>h,default:()=>u}),l,u,d,f,p,m,h;function g(){return(g=e((()=>{a(),l=n(),u={title:`Layouts/Pattern Mozaic Grid`,component:o,parameters:{layout:`fullscreen`},decorators:[e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{isCheckedByDefault:!0,forceVisible:!0}),(0,l.jsx)(`main`,{className:`grid`,children:(0,l.jsx)(e,{})})]})],args:{"data-cols-mobile":4,"data-cols-desktop-small":3,children:Array.from({length:6},(e,t)=>(0,l.jsxs)(s,{children:[`Card `,t+1]},t))},argTypes:{children:{control:!1},cols:{control:{type:`range`,min:1,max:12,step:1}},"data-cols-mobile":{control:{type:`range`,min:1,max:4,step:1}},"data-cols-tablet":{control:{type:`range`,min:1,max:8,step:1}},"data-cols-desktop-small":{control:{type:`range`,min:1,max:12,step:1}},"data-cols-desktop-medium":{control:{type:`range`,min:1,max:12,step:1}},"data-cols-desktop-large":{control:{type:`range`,min:1,max:12,step:1}}}},d={},f={args:{"data-cols-mobile":4,"data-cols-tablet":4,"data-cols-desktop-small":6,"data-cols-desktop-medium":4,"data-cols-desktop-large":3}},p={args:{...f.args,className:`layout-demo`,children:Array.from({length:6},(e,t)=>(0,l.jsxs)(s,{className:`af-card--layout`,children:[`Content `,t+1]},t))}},m={args:{children:Array.from({length:4},(e,t)=>(0,l.jsx)(r,{image:{src:`./hero-client.jpg`,alt:``},title:`Découvrez nos offres`,text:`Des garanties adaptées à votre quotidien.`,linkProps:{href:`https://www.axa.fr/`,children:`Découvrir l'offre`}},t))}},h=[`Responsive`,`AllBreakpoints`,`ContentZones`,`WithCardMarketing`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-cols-mobile": 4,
    "data-cols-tablet": 4,
    "data-cols-desktop-small": 6,
    "data-cols-desktop-medium": 4,
    "data-cols-desktop-large": 3
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...AllBreakpoints.args,
    className: "layout-demo",
    children: Array.from({
      length: 6
    }, (_, index) => <Card key={index} className="af-card--layout">
        Content {index + 1}
      </Card>)
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: Array.from({
      length: 4
    }, (_, index) => <CardMarketing key={index} image={{
      src: "./hero-client.jpg",
      alt: ""
    }} title="Découvrez nos offres" text="Des garanties adaptées à votre quotidien." linkProps={{
      href: "https://www.axa.fr/",
      children: "Découvrir l'offre"
    }} />)
  }
}`,...m.parameters?.docs?.source}}}})))()}export{g as a,m as i,c as n,d as r,f as t};