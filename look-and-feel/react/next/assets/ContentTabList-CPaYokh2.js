import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-BJaai1kI.js";import{M as c,C as e,a as i}from"./index-DLFloqVR.js";import{C as l,a as s,b as a}from"./ContentTabList.stories-BEjgnDMw.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-HVBtkH1G.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./TimelineVerticalLF-O2KxY7rd.js";import"./constants-CITlLZqO.js";import"./Svg-05NOb1LW.js";import"./List-l8zSpEo-.js";import"./Card-B5PHZWEA.js";import"./useIsSmallScreen-B3lIGOTq.js";import"./TagCommon-Ds1MXiOS.js";import"./index-C2cC0QQF.js";function r(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...m(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:l,name:"ContentTabList"}),`
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
`,n.jsx(e,{of:s}),`
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
`,n.jsx(e,{of:a}),`
`,n.jsx(i,{of:a})]})}function _(o={}){const{wrapper:t}={...m(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(r,{...o})}):r(o)}export{_ as default};
