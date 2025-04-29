import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-BJaai1kI.js";import{M as c,C as o,a as i}from"./index-X6tsnV8b.js";import{C as l,a as s,b as a}from"./ContentTabList.stories-0oIXuxes.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B1f9BxiM.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./CheckboxCardLF-pbGr9dcP.js";import"./constants-BH0okeVp.js";import"./List-BiNfa-XV.js";import"./Card-CiTs2l_h.js";import"./useIsSmallScreen-B3lIGOTq.js";import"./TagCommon-DmDRML-B.js";import"./index-28pPPJTf.js";function r(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...m(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:l,name:"ContentTabList"}),`
`,n.jsx(t.h1,{id:"contenttablist",children:"ContentTabList"}),`
`,n.jsx(t.h2,{id:"import",children:"Import"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { ContentTabList } from "@axa-fr/design-system-look-and-feel-react";
`})}),`
`,n.jsx(t.h2,{id:"use",children:"Use"}),`
`,n.jsx(t.h3,{id:"use-with-buttons",children:"Use with buttons"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`const MyComponentWithButtons = () => (
  <ContentTabList
    items={[
      {
        id: "1",
        title: "Remboursement soins",
        subtitle: "Titre onglet",
        tag: "En attente",
        date: "01/01/2024",
        actions: [
          {
            id: "download_button",
            component: (
              <Button
                variant="ghost"
                iconLeft={<Svg src={download} />}
                onClick={fn()}
              >
                Télécharger
              </Button>
            ),
          },
        ],
      },
      {
        id: "2",
        title: "Remboursement soins",
        tag: "En attente",
        actions: [
          {
            id: "download_button",
            component: (
              <Button
                variant="ghost"
                iconLeft={<Svg src={download} />}
                onClick={fn()}
              >
                Télécharger
              </Button>
            ),
          },
          {
            id: "display_button",
            component: (
              <Button
                variant="ghost"
                iconLeft={<Svg src={visibility} />}
                onClick={fn()}
              >
                Afficher
              </Button>
            ),
          },
        ],
      },
    ]}
  />
);
`})}),`
`,n.jsx(o,{of:s}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(t.h3,{id:"use-with-value",children:"Use with value"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`const MyComponentWithValue = () => (
  <ContentTabList
    items={[
      {
        id: "1",
        title: "Remboursement soins",
        subtitle: "Titre onglet",
        date: "01/01/2024",
        value: "+ 11,86 €",
      },
      {
        id: "2",
        title: "Remboursement soins",
        tag: "En attente",
        value: "+ 11,86 €",
      },
    ]}
  />
);
`})}),`
`,n.jsx(o,{of:a}),`
`,n.jsx(i,{of:a})]})}function R(e={}){const{wrapper:t}={...m(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{R as default};
