import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-BJaai1kI.js";import{M as d,C as i,a as c}from"./index-X6tsnV8b.js";import{C as h,a as s,b as o,c as r,d as l}from"./ClickItem.stories-BYmQCulU.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B1f9BxiM.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./CheckboxCardLF-pbGr9dcP.js";import"./constants-BH0okeVp.js";import"./open_in_new-UmJTibTG.js";import"./ClickItem-Cs2EMvr7.js";import"./ClickItem.helpers-CDlaBFDl.js";import"./List-BiNfa-XV.js";import"./Card-CiTs2l_h.js";function a(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...m(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h,name:"ClickItem"}),`
`,e.jsx(n.h1,{id:"clickitem",children:"ClickItem"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Warning:"})," The ClickList component has been replaced by using directly the ClickItem component. See ",e.jsx(n.a,{href:"#use-a-list-of-items",children:"this example"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ClickItem } from "@axa-fr/design-system-look-and-feel-react";
`})}),`
`,e.jsx(n.h2,{id:"use",children:"Use"}),`
`,e.jsx(n.h3,{id:"use-with-icons",children:"Use with icons"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const MyComponentWithIcons = () => (
  <ClickItem
    icon={<Svg src={error} />}
    actionIcon={<Svg src={openInNew} aria-hidden />}
    classModifier="small"
  >
    Texte principal
  </ClickItem>
);
`})}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(n.h3,{id:"use-without-left-icon",children:"Use without left icon"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const MyComponentWithoutIcon = () => (
  <ClickItem>
    <h3 className="af-click-item__title">Fiche Orias précontractuelle</h3>
    <p className="af-click-item__subtitle">30 novembre 2021</p>
    <p className="af-click-item__secondary">Signé électroniquement</p>
  </ClickItem>
);
`})}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(n.h3,{id:"use-with-link-and-without-left-icon",children:"Use with link and without left icon"}),`
`,e.jsxs(n.p,{children:["You can override the default parent component by passing a ",e.jsx(n.code,{children:"parentClickComponent"})," prop to the item."]}),`
`,e.jsxs(n.p,{children:["A function named ",e.jsx(n.code,{children:"createClickItemParent"})," is provided to create a parent component with the desired props easier."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const MyComponentWithoutIcon = () => (
  <ClickItem
    parentClickComponent={createClickItemParent("a", {
      href: "https://github.com/AxaFrance/design-system",
      target: "_blank",
      rel: "noreferrer",
    })}
  >
    <h3 className="af-list-item-content-label__title">
      Fiche Orias précontractuelle
    </h3>
    <p className="af-list-item-content-label__subtitle">30 novembre 2021</p>
    <p className="af-list-item-content-label__secondary">
      Signé électroniquement
    </p>
  </ClickItem>
);
`})}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(n.h3,{id:"use-a-list-of-items",children:"Use a list of items"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const MyComponentWithClickItemList = () => (
  <List classModifier="click-list">
    <ClickItem
      id="1"
      icon={<Svg src={error} aria-hidden />}
      actionIcon={<Svg src={openInNew} aria-hidden />}
      classModifier="small"
    >
      Texte principal
    </ClickItem>
    <ClickItem
      id="2"
      icon={<Svg src={error} aria-hidden />}
      actionIcon={<Svg src={openInNew} aria-hidden />}
      classModifier="small"
      disabled
    >
      Texte principal
    </ClickItem>
    <ClickItem id="3">
      <h3 className="af-click-item__title">Fiche Orias précontractuelle</h3>
      <p className="af-click-item__subtitle">30 novembre 2021</p>
      <p className="af-click-item__secondary">Signé électroniquement</p>
    </ClickItem>
  </List>
);
`})}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(c,{of:l})]})}function W(t={}){const{wrapper:n}={...m(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{W as default};
