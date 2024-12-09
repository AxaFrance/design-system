import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{f as s,g as a}from"./Title-EKhrPoNf.js";import{S as c}from"./Svg-C4poEASt.js";const l=(i,_)=>({children:x,...b})=>e.jsx(i,{..._,...b,children:x}),C="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20viewBox='0%20-960%20960%20960'%3e%3cpath%20d='m734-120-42-42%2074-74H504v-60h262l-74-74%2042-42%20146%20146-146%20146Zm106-352h-60v-308h-60v90H240v-90h-60v600h264v60H180q-26%200-43-17t-17-43v-600q0-26%2017-43t43-17h202q7-35%2034.5-57.5T480-920q36%200%2063.5%2022.5T578-840h202q26%200%2043%2017t17%2043v308ZM480-780q17%200%2028.5-11.5T520-820q0-17-11.5-28.5T480-860q-17%200-28.5%2011.5T440-820q0%2017%2011.5%2028.5T480-780Z'/%3e%3c/svg%3e",j={title:"Components/List/ClickList",component:s},n={name:"ClickList with icon",render:i=>e.jsx(s,{...i}),args:{items:[{id:"1",icon:e.jsx(c,{src:a,"aria-hidden":!0}),children:"Texte principal",classModifier:"small"},{id:"2",icon:e.jsx(c,{src:a,"aria-hidden":!0}),children:"Texte principal"},{id:"3",icon:e.jsx(c,{src:a,"aria-hidden":!0}),children:"Texte principal",classModifier:"large"},{id:"4",icon:e.jsx(c,{src:C,"aria-hidden":!0}),children:"Texte principal",isDisabled:!0}],classModifier:""},argTypes:{classModifier:{options:["","large"],control:{type:"select"},defaultValue:""}}},r={name:"ClickList without icon",render:i=>e.jsx(s,{...i}),args:{items:[{id:"1",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"af-click-item__title",children:"Fiche Orias précontractuelle"}),e.jsx("p",{className:"af-click-item__subtitle",children:"30 novembre 2021"}),e.jsx("p",{className:"af-click-item__secondary",children:"Signé électroniquement"})]})},{id:"2",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"af-click-item__title",children:"Fiche Orias précontractuelle"}),e.jsx("p",{className:"af-click-item__subtitle",children:"30 novembre 2021"}),e.jsx("p",{className:"af-click-item__secondary",children:"Signé électroniquement"})]}),isDisabled:!0}],classModifier:""},argTypes:{classModifier:{options:["","large"],control:{type:"select"},defaultValue:""}}},t={name:"ClickList link without icon",render:i=>e.jsx(s,{...i}),args:{items:[{id:"1",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"af-click-item__title",children:"Fiche Orias précontractuelle"}),e.jsx("p",{className:"af-click-item__subtitle",children:"30 novembre 2021"}),e.jsx("p",{className:"af-click-item__secondary",children:"Signé électroniquement"})]}),parentClickComponent:l("a",{href:"https://github.com/AxaFrance/design-system",target:"_blank",rel:"noreferrer"})},{id:"2",children:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"af-click-item__title",children:"Fiche Orias précontractuelle"}),e.jsx("p",{className:"af-click-item__subtitle",children:"30 novembre 2021"}),e.jsx("p",{className:"af-click-item__secondary",children:"Signé électroniquement"})]}),parentClickComponent:l("a",{href:"https://github.com/AxaFrance/design-system",target:"_blank",rel:"noreferrer"}),isDisabled:!0}],classModifier:""},argTypes:{classModifier:{options:["","large"],control:{type:"select"},defaultValue:""}}};var o,m,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "ClickList with icon",
  render: args => <ClickList {...args} />,
  args: {
    items: [{
      id: "1",
      icon: <Svg src={error} aria-hidden />,
      children: "Texte principal",
      classModifier: "small"
    }, {
      id: "2",
      icon: <Svg src={error} aria-hidden />,
      children: "Texte principal"
    }, {
      id: "3",
      icon: <Svg src={error} aria-hidden />,
      children: "Texte principal",
      classModifier: "large"
    }, {
      id: "4",
      icon: <Svg src={contentPasteGo} aria-hidden />,
      children: "Texte principal",
      isDisabled: true
    }],
    classModifier: ""
  },
  argTypes: {
    classModifier: {
      options: ["", "large"],
      control: {
        type: "select"
      },
      defaultValue: ""
    }
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,h,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "ClickList without icon",
  render: args => <ClickList {...args} />,
  args: {
    items: [{
      id: "1",
      children: <>
            <h3 className="af-click-item__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-click-item__subtitle">30 novembre 2021</p>
            <p className="af-click-item__secondary">Signé électroniquement</p>
          </>
    }, {
      id: "2",
      children: <>
            <h3 className="af-click-item__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-click-item__subtitle">30 novembre 2021</p>
            <p className="af-click-item__secondary">Signé électroniquement</p>
          </>,
      isDisabled: true
    }],
    classModifier: ""
  },
  argTypes: {
    classModifier: {
      options: ["", "large"],
      control: {
        type: "select"
      },
      defaultValue: ""
    }
  }
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,f,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "ClickList link without icon",
  render: args => <ClickList {...args} />,
  args: {
    items: [{
      id: "1",
      children: <>
            <h3 className="af-click-item__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-click-item__subtitle">30 novembre 2021</p>
            <p className="af-click-item__secondary">Signé électroniquement</p>
          </>,
      parentClickComponent: createClickItemParent("a", {
        href: "https://github.com/AxaFrance/design-system",
        target: "_blank",
        rel: "noreferrer"
      })
    }, {
      id: "2",
      children: <>
            <h3 className="af-click-item__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-click-item__subtitle">30 novembre 2021</p>
            <p className="af-click-item__secondary">Signé électroniquement</p>
          </>,
      parentClickComponent: createClickItemParent("a", {
        href: "https://github.com/AxaFrance/design-system",
        target: "_blank",
        rel: "noreferrer"
      }),
      isDisabled: true
    }],
    classModifier: ""
  },
  argTypes: {
    classModifier: {
      options: ["", "large"],
      control: {
        type: "select"
      },
      defaultValue: ""
    }
  }
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const v=["ClickListWithIcon","ClickListWithoutIcon","ClickListLinkWithoutIcon"],S=Object.freeze(Object.defineProperty({__proto__:null,ClickListLinkWithoutIcon:t,ClickListWithIcon:n,ClickListWithoutIcon:r,__namedExportsOrder:v,default:j},Symbol.toStringTag,{value:"Module"}));export{S as C,n as a,r as b,t as c};
