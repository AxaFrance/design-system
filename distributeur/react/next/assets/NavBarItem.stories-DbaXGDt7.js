import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-De-9TtK1.js";import{F as i,n as a}from"./distributeur-Ct4qDp97.js";var o,s,c,l,u,d,f,p;e((()=>{a(),n(),o=r(),s=t.meta({title:`Components/NavBar/NavBarItem`,component:i,args:{hasFocus:!1},argTypes:{onClick:{action:`onClick`},classModifier:{control:{type:`select`,options:[``,`active`]}}}}),c=e=>t=>{t.preventDefault(),e?.(t)},l=({onClick:e,...t})=>(0,o.jsx)(`ul`,{style:{listStyle:`none`},children:(0,o.jsx)(i,{...t,onClick:c(e),style:{width:`100px`},actionElt:(0,o.jsx)(`a`,{className:`af-nav__link`,href:`/home`,onClick:c(e),children:`Home`})})}),u=s.story({name:`Default`,render:l,args:{classModifier:``}}),d=s.story({name:`Active`,render:l,args:{classModifier:`active`}}),f=s.story({name:`Active with children`,render:({onClick:e,...t})=>(0,o.jsx)(`div`,{style:{height:`300px`},children:(0,o.jsxs)(i,{style:{width:`100px`},"aria-haspopup":`true`,"aria-expanded":`false`,ariaLabel:`Table`,className:`af-nav__item--haschild af-nav__item af-nav__item--open`,...t,onClick:c(e),actionElt:(0,o.jsx)(`a`,{className:`af-nav__link`,href:`/doc`,children:`Doc`}),children:[(0,o.jsx)(i,{actionElt:(0,o.jsx)(`a`,{className:`af-nav__link`,href:`/doc/sous-lien`,onClick:c(e),children:`Sous lien`})},`doc-1`),(0,o.jsx)(i,{actionElt:(0,o.jsx)(`a`,{className:`af-nav__link`,href:`/doc/sous-lien2`,onClick:c(e),children:`Sous lien2`})},`doc-2`),(0,o.jsx)(i,{actionElt:(0,o.jsx)(`a`,{className:`af-nav__link`,href:`/doc/sous-lien3`,onClick:c(e),children:`Sous lien3`})},`doc-3`),(0,o.jsx)(i,{actionElt:(0,o.jsx)(`a`,{className:`af-nav__link`,href:`/doc/sous-lien4`,onClick:c(e),children:`Sous lien4`})},`doc-4`)]})}),args:{classModifier:``}}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Default",
  render: template,
  args: {
    classModifier: ""
  }
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Active",
  render: template,
  args: {
    classModifier: "active"
  }
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Active with children",
  render: ({
    onClick,
    ...args
  }) => <div style={{
    height: "300px"
  }}>
      <NavBarItem style={{
      width: "100px"
    }} aria-haspopup="true" aria-expanded="false" ariaLabel="Table" className="af-nav__item--haschild af-nav__item af-nav__item--open" {...args} onClick={withPreventDefaultClick(onClick)} actionElt={<a className="af-nav__link" href="/doc">
            Doc
          </a>}>
        <NavBarItem key="doc-1" actionElt={<a className="af-nav__link" href="/doc/sous-lien" onClick={withPreventDefaultClick(onClick)}>
              Sous lien
            </a>} />
        <NavBarItem key="doc-2" actionElt={<a className="af-nav__link" href="/doc/sous-lien2" onClick={withPreventDefaultClick(onClick)}>
              Sous lien2
            </a>} />
        <NavBarItem key="doc-3" actionElt={<a className="af-nav__link" href="/doc/sous-lien3" onClick={withPreventDefaultClick(onClick)}>
              Sous lien3
            </a>} />
        <NavBarItem key="doc-4" actionElt={<a className="af-nav__link" href="/doc/sous-lien4" onClick={withPreventDefaultClick(onClick)}>
              Sous lien4
            </a>} />
      </NavBarItem>
    </div>,
  args: {
    classModifier: ""
  }
})`,...f.input.parameters?.docs?.source}}},p=[`NavBarItemDefaultStory`,`ActiveNavBarItemStory`,`NavBarItemWithChildrenStory`]}))();export{d as ActiveNavBarItemStory,u as NavBarItemDefaultStory,f as NavBarItemWithChildrenStory,p as __namedExportsOrder,s as default};