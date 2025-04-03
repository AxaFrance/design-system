import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-BJaai1kI.js";import{M as c,C as t,a}from"./index-iHBxfcbg.js";import{H as m,D as r,a as o,b as s,c as d}from"./Header.stories-CM7ypVrO.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BQ2JjsQF.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./DividerLF-CGkXvTAL.js";import"./constants-CfWbtzFy.js";import"./person-fill-DbQhN4Aa.js";import"./NavBar-CKSQ4VZP.js";import"./PreviousLink--97ywOY_.js";import"./arrow_back-DnyUknY1.js";import"./IconBg-CdsIK7UO.js";import"./ClickItem-AkwFIkpr.js";import"./ClickItem.helpers-CDlaBFDl.js";function h(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:m,name:"Header Client"}),`
`,n.jsx(e.h1,{id:"header-client",children:"Header Client"}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Header } from "@axa-fr/design-system-look-and-feel-react";
`})}),`
`,n.jsx(e.h2,{id:"use",children:"Use"}),`
`,n.jsx(e.h3,{id:"use-default-header",children:"Use Default Header"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const DefaultHeader = () => <Header />;
`})}),`
`,n.jsx(e.h3,{id:"use-header-with-navigation-bar",children:"Use Header with Navigation Bar"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const HeaderWithNavBar = () => <Header links={links} />;
`})}),`
`,n.jsx(e.h3,{id:"use-header-with-navigation-bar-and-right-item",children:"Use Header with Navigation Bar and right item"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const HeaderWithNavBarAndRightItem = () => (
  <Header
    links={links}
    rightItem={[
      <Button
        key="Banking Space Button"
        iconLeft={<Svg src={lock} fill="#00008f" />}
        variant="secondary"
      >
        Espace Banque
      </Button>,
      <Button
        key="Profile Button"
        iconLeft={<Svg src={person} fill="#00008f" />}
        variant="ghost"
      >
        Mon Profil
      </Button>,
    ]}
  />
);
`})}),`
`,n.jsx(e.h3,{id:"use-header-with-navigation-bar-right-item-and-previous-link",children:"Use Header with Navigation Bar, right item and previous link"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const HeaderWithLinksAndRightItemAndHomeLink = () =>
<Header
    links={links}
    rightItem={
    [
        <Button
            key="Banking Space Button"
            iconLeft={<Svg src={lock} fill="#00008f" />}
            variant="secondary"
        >
            Espace Banque
        </Button>,
        <Button
            key="Profile Button"
            iconLeft={<Svg src={person} fill="#00008f" />}
            variant="ghost"
        >
            Mon Profil
        </Button>,
    ]
    previousLink={previousLink}
}/>;
`})}),`
`,n.jsx(e.h2,{id:"playground",children:"Playground"}),`
`,n.jsx(e.h3,{id:"default-header",children:"Default Header"}),`
`,n.jsx(t,{of:r}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(e.h3,{id:"header-with-navigation-bar",children:"Header with Navigation Bar"}),`
`,n.jsx(t,{of:o}),`
`,n.jsx(a,{of:o}),`
`,n.jsx(e.h3,{id:"header-with-navigation-bar-and-right-item",children:"Header with Navigation Bar and right item"}),`
`,n.jsx(t,{of:s}),`
`,n.jsx(a,{of:s}),`
`,n.jsx(e.h3,{id:"header-with-navigation-bar-right-item-and-previous-link",children:"Header with Navigation Bar, right item and previous link"}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(a,{of:d})]})}function S(i={}){const{wrapper:e}={...l(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(h,{...i})}):h(i)}export{S as default};
