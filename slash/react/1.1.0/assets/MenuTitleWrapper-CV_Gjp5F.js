import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as s}from"./index-Ch4n-_Zu.js";import"./DocsRenderer-CFRXHY34-11Y2Aw13.js";import{M as l,C as i,a as o}from"./index-XUrgFtkI.js";import{M as m,D as t}from"./MenuTitleWrapper.stories-DOwSmadL.js";import"./index-C33_amOP.js";import"./iframe-BOPNIBYJ.js";import"./react-18-EAsyrTGL.js";import"./index-fOfmBfwh.js";import"./index-D-8MO0q_.js";import"./index-CuAC1KVG.js";import"./index-DrFu-skq.js";import"./NavBarItem-CCXfAJDV.js";import"./getComponentClassName-CfMiunrP.js";function r(e){const a={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:m}),`
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
`,n.jsx(i,{of:t}),`
`,n.jsx(o,{of:t})]})}function E(e={}){const{wrapper:a}={...s(),...e.components};return a?n.jsx(a,{...e,children:n.jsx(r,{...e})}):r(e)}export{E as default};
