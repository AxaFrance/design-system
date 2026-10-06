import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n,w as r}from"./iframe-CjYPSWt0.js";import{H as i,t as a}from"./distributeur-CBX4AbFh.js";var o,s,c,l,u,d,f,p;e((()=>{a(),n(),o=r(),s=(0,o.jsx)(`a`,{className:`af-nav__link`,href:`/home`,children:`Home`}),c=t.meta({title:`Components/NavBar/NavBarItem`,component:i,args:{hasFocus:!1,actionElt:s}}),l=e=>(0,o.jsx)(`ul`,{style:{listStyle:`none`},children:(0,o.jsx)(i,{...e,style:{width:`100px`}})}),u=c.story({name:`Default`,render:l}),d=c.story({name:`Active`,render:l,args:{active:!0}}),f=c.story({name:`Active with children`,render:e=>(0,o.jsx)(`div`,{style:{height:`300px`},children:(0,o.jsxs)(i,{style:{width:`100px`},"aria-haspopup":`true`,"aria-expanded":`false`,ariaLabel:`Table`,className:`af-nav__item--haschild af-nav__item af-nav__item--open`,...e,actionElt:(0,o.jsx)(`a`,{className:`af-nav__link`,href:`/doc`,children:`Doc`}),children:[(0,o.jsx)(i,{actionElt:(0,o.jsx)(`a`,{className:`af-nav__link`,href:`/doc/sous-lien`,children:`Sous lien`})},`doc-1`),(0,o.jsx)(i,{actionElt:(0,o.jsx)(`a`,{className:`af-nav__link`,href:`/doc/sous-lien2`,children:`Sous lien2`})},`doc-2`),(0,o.jsx)(i,{actionElt:(0,o.jsx)(`a`,{className:`af-nav__link`,href:`/doc/sous-lien3`,children:`Sous lien3`})},`doc-3`),(0,o.jsx)(i,{actionElt:(0,o.jsx)(`a`,{className:`af-nav__link`,href:`/doc/sous-lien4`,children:`Sous lien4`})},`doc-4`)]})}),args:{className:``}}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Default",
  render: Template
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Active",
  render: Template,
  args: {
    active: true
  }
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  name: "Active with children",
  render: args => <div style={{
    height: "300px"
  }}>
      <NavBarItem style={{
      width: "100px"
    }} aria-haspopup="true" aria-expanded="false" ariaLabel="Table" className="af-nav__item--haschild af-nav__item af-nav__item--open" {...args} actionElt={<a className="af-nav__link" href="/doc">
            Doc
          </a>}>
        <NavBarItem key="doc-1" actionElt={<a className="af-nav__link" href="/doc/sous-lien">
              Sous lien
            </a>} />
        <NavBarItem key="doc-2" actionElt={<a className="af-nav__link" href="/doc/sous-lien2">
              Sous lien2
            </a>} />
        <NavBarItem key="doc-3" actionElt={<a className="af-nav__link" href="/doc/sous-lien3">
              Sous lien3
            </a>} />
        <NavBarItem key="doc-4" actionElt={<a className="af-nav__link" href="/doc/sous-lien4">
              Sous lien4
            </a>} />
      </NavBarItem>
    </div>,
  args: {
    className: ""
  }
})`,...f.input.parameters?.docs?.source}}},p=[`NavBarItemDefaultStory`,`ActiveNavBarItemStory`,`NavBarItemWithChildrenStory`]}))();export{d as ActiveNavBarItemStory,u as NavBarItemDefaultStory,f as NavBarItemWithChildrenStory,p as __namedExportsOrder,c as default};