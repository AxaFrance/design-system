import{j as e}from"./index-DK-fRI8B.js";import{e as l}from"./DropdownCommon-4Q54LZ3p.js";import{S as n}from"./constants-BTX1ITMg.js";import"./index-DbaA8R3S.js";import{o}from"./open_in_new-UmJTibTG.js";import{C as t}from"./ClickItem-CovBDLqw.js";import{c as y}from"./ClickItem.helpers-pp1xozP-.js";import{L as b}from"./List-CTsEofZk.js";const N={title:"Components/List/ClickItem",component:t,argTypes:{onClick:{action:"onClick"}}},r={name:"ClickItem with icon",render:i=>e.jsx(t,{...i}),args:{icon:e.jsx(n,{src:l,"aria-hidden":!0}),children:"Texte principal",classModifier:"small",actionIcon:e.jsx(n,{src:o,"aria-hidden":!0})},argTypes:{classModifier:{options:["","small","large"],control:{type:"select"},defaultValue:""}}},s={name:"ClickItem without icon",render:i=>e.jsx(t,{...i}),args:{children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"af-click-item__title",children:"Fiche Orias précontractuelle"}),e.jsx("p",{className:"af-click-item__subtitle",children:"30 novembre 2021"}),e.jsx("p",{className:"af-click-item__secondary",children:"Signé électroniquement"})]}),classModifier:""},argTypes:{classModifier:{options:["","small","large"],control:{type:"select"},defaultValue:""}}},a={name:"ClickItem link without icon",render:i=>e.jsx(t,{...i}),args:{children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"af-click-item__title",children:"Fiche Orias précontractuelle"}),e.jsx("p",{className:"af-click-item__subtitle",children:"30 novembre 2021"}),e.jsx("p",{className:"af-click-item__secondary",children:"Signé électroniquement"})]}),parentClickComponent:y("a",{href:"https://github.com/AxaFrance/design-system",target:"_blank",rel:"noreferrer"}),classModifier:""},argTypes:{classModifier:{options:["","small","large"],control:{type:"select"},defaultValue:""}}},c={name:"ClickItem list",render:({items:i})=>e.jsx(b,{classModifier:"click-list",children:i.map(m=>e.jsx(t,{...m},m.id))}),args:{items:[{id:"1",icon:e.jsx(n,{src:l,"aria-hidden":!0}),children:"Texte principal",classModifier:"small",actionIcon:e.jsx(n,{src:o,"aria-hidden":!0})},{id:"2",icon:e.jsx(n,{src:l,"aria-hidden":!0}),children:"Texte principal",classModifier:"small",actionIcon:e.jsx(n,{src:o,"aria-hidden":!0}),disabled:!0},{id:"3",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"af-click-item__title",children:"Fiche Orias précontractuelle"}),e.jsx("p",{className:"af-click-item__subtitle",children:"30 novembre 2021"}),e.jsx("p",{className:"af-click-item__secondary",children:"Signé électroniquement"})]})}]}};var d,p,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "ClickItem with icon",
  render: (args: Args) => <ClickItem {...args} />,
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
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "ClickItem without icon",
  render: (args: Args) => <ClickItem {...args} />,
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
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var k,_,I;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "ClickItem link without icon",
  render: (args: Args) => <ClickItem {...args} />,
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
}`,...(I=(_=a.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var x,C,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "ClickItem list",
  render: ({
    items
  }: Args) => <List classModifier="click-list">
      {items.map((props: Args) => <ClickItem key={props.id} {...props} />)}
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
}`,...(j=(C=c.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const S=["ClickItemWithIcons","ClickItemWithoutIcon","ClickItemLinkWithoutIcon","ClickItemList"],q=Object.freeze(Object.defineProperty({__proto__:null,ClickItemLinkWithoutIcon:a,ClickItemList:c,ClickItemWithIcons:r,ClickItemWithoutIcon:s,__namedExportsOrder:S,default:N},Symbol.toStringTag,{value:"Module"}));export{q as C,r as a,s as b,a as c,c as d};
