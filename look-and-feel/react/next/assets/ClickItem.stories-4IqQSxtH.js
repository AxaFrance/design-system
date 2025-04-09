import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./BasePictureLF-BtFgcJX6.js";import{S as n,e as l}from"./constants-BVoGTR4d.js";import"./index-DuZrfDUH.js";import{o}from"./open_in_new-UmJTibTG.js";import{C as t}from"./ClickItem-DpzCkIFS.js";import{c as y}from"./ClickItem.helpers-CDlaBFDl.js";import{L as b}from"./List-CCLqPyTU.js";const N={title:"Components/List/ClickItem",component:t,argTypes:{onClick:{action:"onClick"}}},r={name:"ClickItem with icon",render:i=>e.jsx(t,{...i}),args:{icon:e.jsx(n,{src:l,"aria-hidden":!0}),children:"Texte principal",classModifier:"small",actionIcon:e.jsx(n,{src:o,"aria-hidden":!0})},argTypes:{classModifier:{options:["","small","large"],control:{type:"select"},defaultValue:""}}},a={name:"ClickItem without icon",render:i=>e.jsx(t,{...i}),args:{children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"af-click-item__title",children:"Fiche Orias précontractuelle"}),e.jsx("p",{className:"af-click-item__subtitle",children:"30 novembre 2021"}),e.jsx("p",{className:"af-click-item__secondary",children:"Signé électroniquement"})]}),classModifier:""},argTypes:{classModifier:{options:["","small","large"],control:{type:"select"},defaultValue:""}}},c={name:"ClickItem link without icon",render:i=>e.jsx(t,{...i}),args:{children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"af-click-item__title",children:"Fiche Orias précontractuelle"}),e.jsx("p",{className:"af-click-item__subtitle",children:"30 novembre 2021"}),e.jsx("p",{className:"af-click-item__secondary",children:"Signé électroniquement"})]}),parentClickComponent:y("a",{href:"https://github.com/AxaFrance/design-system",target:"_blank",rel:"noreferrer"}),classModifier:""},argTypes:{classModifier:{options:["","small","large"],control:{type:"select"},defaultValue:""}}},s={name:"ClickItem list",render:({items:i})=>e.jsx(b,{classModifier:"click-list",children:i.map(m=>e.jsx(t,{...m},m.id))}),args:{items:[{id:"1",icon:e.jsx(n,{src:l,"aria-hidden":!0}),children:"Texte principal",classModifier:"small",actionIcon:e.jsx(n,{src:o,"aria-hidden":!0})},{id:"2",icon:e.jsx(n,{src:l,"aria-hidden":!0}),children:"Texte principal",classModifier:"small",actionIcon:e.jsx(n,{src:o,"aria-hidden":!0}),disabled:!0},{id:"3",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"af-click-item__title",children:"Fiche Orias précontractuelle"}),e.jsx("p",{className:"af-click-item__subtitle",children:"30 novembre 2021"}),e.jsx("p",{className:"af-click-item__secondary",children:"Signé électroniquement"})]})}]}};var d,p,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "ClickItem with icon",
  render: args => <ClickItem {...args} />,
  args: {
    icon: <Svg src={error} aria-hidden />,
    children: "Texte principal",
    classModifier: "small",
    actionIcon: <Svg src={openInNew} aria-hidden />
  },
  argTypes: {
    classModifier: {
      options: ["", "small", "large"],
      control: {
        type: "select"
      },
      defaultValue: ""
    }
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,k,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "ClickItem without icon",
  render: args => <ClickItem {...args} />,
  args: {
    children: <>
        <h3 className="af-click-item__title">Fiche Orias précontractuelle</h3>
        <p className="af-click-item__subtitle">30 novembre 2021</p>
        <p className="af-click-item__secondary">Signé électroniquement</p>
      </>,
    classModifier: ""
  },
  argTypes: {
    classModifier: {
      options: ["", "small", "large"],
      control: {
        type: "select"
      },
      defaultValue: ""
    }
  }
}`,...(f=(k=a.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var g,_,I;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "ClickItem link without icon",
  render: args => <ClickItem {...args} />,
  args: {
    children: <>
        <h3 className="af-click-item__title">Fiche Orias précontractuelle</h3>
        <p className="af-click-item__subtitle">30 novembre 2021</p>
        <p className="af-click-item__secondary">Signé électroniquement</p>
      </>,
    parentClickComponent: createClickItemParent("a", {
      href: "https://github.com/AxaFrance/design-system",
      target: "_blank",
      rel: "noreferrer"
    }),
    classModifier: ""
  },
  argTypes: {
    classModifier: {
      options: ["", "small", "large"],
      control: {
        type: "select"
      },
      defaultValue: ""
    }
  }
}`,...(I=(_=c.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var x,C,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "ClickItem list",
  render: ({
    items
  }) => <List classModifier="click-list">
      {items.map(props => <ClickItem key={props.id} {...props} />)}
    </List>,
  args: {
    items: [{
      id: "1",
      icon: <Svg src={error} aria-hidden />,
      children: "Texte principal",
      classModifier: "small",
      actionIcon: <Svg src={openInNew} aria-hidden />
    }, {
      id: "2",
      icon: <Svg src={error} aria-hidden />,
      children: "Texte principal",
      classModifier: "small",
      actionIcon: <Svg src={openInNew} aria-hidden />,
      disabled: true
    }, {
      id: "3",
      children: <>
            <h3 className="af-click-item__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-click-item__subtitle">30 novembre 2021</p>
            <p className="af-click-item__secondary">Signé électroniquement</p>
          </>
    }]
  }
}`,...(j=(C=s.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const S=["ClickItemWithIcons","ClickItemWithoutIcon","ClickItemLinkWithoutIcon","ClickItemList"],V=Object.freeze(Object.defineProperty({__proto__:null,ClickItemLinkWithoutIcon:c,ClickItemList:s,ClickItemWithIcons:r,ClickItemWithoutIcon:a,__namedExportsOrder:S,default:N},Symbol.toStringTag,{value:"Module"}));export{V as C,r as a,a as b,c,s as d};
