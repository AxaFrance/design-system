import{j as n}from"./index-DK-fRI8B.js";import{useMDXComponents as s}from"./index-G7nTXt62.js";import"./index-CnBEjnho.js";import{M as i,D as t}from"./MenuTitleWrapper.stories-CRZ5rTIV.js";import{M as l,C as o,a as m}from"./index-C6lFaN6O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./preview-BRC5GF1X.js";import"./iframe-DcKxmfME.js";import"./DocsRenderer-CFRXHY34-CeNdqmu-.js";import"./react-18-DOac64BB.js";/* empty css              */import"./Loader-D6y4K9Ud.js";import"./HeaderTitle-BrCgs9Z0.js";import"./NavBar-BYdT49Qk.js";import"./NavBarItem-Bh4df2W8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(e){const a={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:i}),`
`,n.jsx(a.h1,{id:"menu-title-wrapper",children:"Menu Title Wrapper"}),`
`,n.jsx(a.h2,{id:"import",children:"Import"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-tsx",children:`import {
  MenuTitleWrapper,
  NavBarItem,
} from "@axa-fr/design-system-slash-react";
`})}),`
`,n.jsx(a.h2,{id:"use",children:"Use"}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-tsx",children:`const MenuTitleWrapperComponent = () => (
  <MenuTitleWrapper
    menuVisible={false}
    title="Toolkit Axa"
    subtitle="Info complémentaire"
  >
    <NavBarItem
      actionElt={
        <a className="af-nav__link" href="https://axa.fr">
          Home
        </a>
      }
    />

    <NavBarItem
      actionElt={
        <a className="af-nav__link" href="https://axa.fr">
          Form
        </a>
      }
    />

    <NavBarItem
      actionElt={
        <a className="af-nav__link" href="https://axa.fr">
          Fielupload
        </a>
      }
    />

    <NavBarItem
      className="af-nav__item--haschild af-nav__item"
      aria-haspopup="true"
      aria-expanded="false"
      ariaLabel="Table"
      actionElt={<span className="af-nav__link">Table</span>}
    >
      <NavBarItem
        key="table-1"
        actionElt={
          <a className="af-nav__link" href="https://axa.fr">
            Sous lien 1
          </a>
        }
      />
      <NavBarItem
        key="table-2"
        actionElt={
          <a className="af-nav__link" href="https://axa.fr">
            Sous lien 2
          </a>
        }
      />

      <NavBarItem
        key="table-3"
        actionElt={
          <a className="af-nav__link" href="https://axa.fr">
            Sous lien 3
          </a>
        }
      />
    </NavBarItem>

    <NavBarItem
      actionElt={
        <a className="af-nav__link" href="https://axa.fr">
          Accordions
        </a>
      }
    />

    <NavBarItem
      actionElt={
        <a className="af-nav__link" href="https://axa.fr">
          Alert
        </a>
      }
    />

    <NavBarItem
      actionElt={
        <a className="af-nav__link" href="https://axa.fr">
          Validation
        </a>
      }
    />

    <NavBarItem
      className="af-nav__item--haschild af-nav__item"
      aria-haspopup="true"
      aria-expanded="false"
      ariaLabel="Table"
      actionElt={<span className="af-nav__link">Doc</span>}
    >
      <NavBarItem
        key="table-1"
        actionElt={
          <a className="af-nav__link" href="https://axa.fr">
            Sous lien 1
          </a>
        }
      />
      <NavBarItem
        key="table-2"
        actionElt={
          <a className="af-nav__link" href="https://axa.fr">
            Sous lien 2
          </a>
        }
      />

      <NavBarItem
        key="table-3"
        actionElt={
          <a className="af-nav__link" href="https://axa.fr">
            Sous lien 3
          </a>
        }
      />
    </NavBarItem>
  </MenuTitleWrapper>
);
export default MenuTitleWrapper;
`})}),`
`,n.jsx(a.h2,{id:"stories",children:"Stories"}),`
`,n.jsx(o,{of:t}),`
`,n.jsx(m,{of:t})]})}function S(e={}){const{wrapper:a}={...s(),...e.components};return a?n.jsx(a,{...e,children:n.jsx(r,{...e})}):r(e)}export{S as default};
