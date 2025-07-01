import{j as n}from"./index-DK-fRI8B.js";import{useMDXComponents as m}from"./index-G7nTXt62.js";import{M as c,C as e,a as i}from"./index-RU_G7xFh.js";import{C as l,a as s,b as a}from"./ContentTabList.stories-C2yCr-Hl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./iframe-Dc8Qj9GP.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./DropdownCommon-BQ-N1CqO.js";import"./constants-DE2Ow0mC.js";import"./List-DY4JrPNC.js";import"./Card-D0Pdf394.js";import"./getComponentClassName-hkpoMsGh.js";import"./useIsSmallScreen-74Di-Iib.js";import"./TagCommon-BUG3P8Yc.js";import"./index-28pPPJTf.js";function r(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...m(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:l,name:"ContentTabList"}),`
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
