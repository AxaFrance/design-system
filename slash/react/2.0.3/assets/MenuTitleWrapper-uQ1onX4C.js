import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-G7nTXt62.js";import"./index-CQDJKAO1.js";import{M as i,D as t}from"./MenuTitleWrapper.stories-DmUNK7HM.js";import{M as l,C as o,a as m}from"./index-DB_TeI63.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-qh3Ydpad.js";import"./iframe-BnWqHKAE.js";import"./DocsRenderer-CFRXHY34-C--B7PM0.js";import"./react-18-Cg43Tkb0.js";import"./index-BOKuxaB8.js";/* empty css               */import"./CardData-BEMxqxpw.js";import"./index-CG6JzWRx.js";import"./HeaderTitle-J5wVfXXE.js";import"./NavBar-Ds23QLSP.js";import"./NavBarItem-Ce189k8I.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(e){const a={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:i}),`
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
`,n.jsx(m,{of:t})]})}function C(e={}){const{wrapper:a}={...s(),...e.components};return a?n.jsx(a,{...e,children:n.jsx(r,{...e})}):r(e)}export{C as default};
