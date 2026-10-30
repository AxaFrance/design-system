import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,r}from"./iframe-CjUrzS1v.js";import{Et as i,Ot as a,t as o}from"./distributeur-BzQs3Sl2.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{o(),n(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l=r.type().meta({title:`Components/NavBar`,argTypes:{onClick:{action:`onClick`},positionInit:{control:{type:`number`,min:0,max:3}}},args:{onClick:c(),isVisible:!0}}),u=e=>t=>{t.preventDefault(),e?.(t)},d=({children:e,onClick:t,...n})=>(0,s.jsxs)(a,{onClick:u(t),...n,children:[(0,s.jsx)(i,{actionElt:(0,s.jsx)(`a`,{className:`af-nav__link`,href:`/home`,onClick:u(t),children:`Home`})}),e,(0,s.jsxs)(i,{className:`af-nav__item--haschild af-nav__item`,"aria-haspopup":`true`,"aria-expanded":`false`,ariaLabel:`Table`,actionElt:(0,s.jsx)(`span`,{className:`af-nav__link`,children:`Table`}),children:[(0,s.jsx)(i,{actionElt:(0,s.jsx)(`a`,{className:`af-nav__link`,href:`/table/sous-lien`,onClick:u(t),children:`Sous lien`})},`table-1`),(0,s.jsx)(i,{actionElt:(0,s.jsx)(`a`,{className:`af-nav__link`,href:`/table/sous-lien-2`,onClick:u(t),children:`Sous lien 2`})},`table-2`)]}),(0,s.jsx)(i,{actionElt:(0,s.jsx)(`a`,{className:`af-nav__link`,href:`/collapse`,onClick:u(t),children:`Accordions`})}),(0,s.jsxs)(i,{className:`af-nav__item--haschild af-nav__item`,"aria-haspopup":`true`,"aria-expanded":`false`,ariaLabel:`Table`,actionElt:(0,s.jsx)(`a`,{className:`af-nav__link`,href:`/doc`,onClick:u(t),children:`Doc`}),children:[(0,s.jsx)(i,{actionElt:(0,s.jsx)(`a`,{className:`af-nav__link`,href:`/doc/sous-lien`,onClick:u(t),children:`Sous lien`})},`doc-1`),(0,s.jsx)(i,{actionElt:(0,s.jsx)(`a`,{className:`af-nav__link`,href:`/doc/sous-lien-2`,onClick:u(t),children:`Sous lien 2`})},`doc-2`)]})]}),f=l.story({name:`NavBarBase`,args:{positionInit:2,children:null},render:e=>(0,s.jsx)(d,{...e,children:null})}),p=l.story({name:`NavBarBase with customable children`,args:{positionInit:-1},render:e=>(0,s.jsx)(d,{...e,children:(0,s.jsx)(i,{actionElt:(0,s.jsx)(`a`,{className:`af-nav__link`,href:`/forms`,onClick:u(),children:`Forms`})},1)}),argTypes:{positionInit:{control:{type:`number`,min:0,max:4}}}}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "NavBarBase",
  args: {
    positionInit: 2,
    children: null
  },
  render: args => <Template {...args}>{null}</Template>
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "NavBarBase with customable children",
  args: {
    positionInit: -1
  },
  render: args => <Template {...args}>
      <NavBarItem key={1} actionElt={<a className="af-nav__link" href="/forms" onClick={withPreventDefaultClick()}>
            Forms
          </a>} />
    </Template>,
  argTypes: {
    positionInit: {
      control: {
        type: "number",
        min: 0,
        max: 4
      }
    }
  }
})`,...p.input.parameters?.docs?.source}}},m=[`NavBarBaseStory`,`NavBarBaseWithCustomableChildrenStory`]})))()}h();export{f as NavBarBaseStory,p as NavBarBaseWithCustomableChildrenStory,m as __namedExportsOrder,l as default};