import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as m}from"./index-FeUjBnvO.js";import{ae as p,af as i,ag as e}from"./index-Cb73D1Ps.js";import{C as c,a as r,b as s}from"./ContentTabList.stories-Dzufkfxf.js";import"./index-uubelm5h.js";import"./iframe-D-IgPWKx.js";import"../sb-preview/runtime.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./index-C_FWhylE.js";/* empty css               */import"./Title-5HvLqByk.js";import"./getComponentClassName-BDlozEvX.js";import"./index-vAxXS4R5.js";import"./useIsSmallScreen-BMz0fP8s.js";import"./Tag-PCUeqJ0K.js";import"./Alert-yYw8AEPN.js";import"./error-BHKM2E7q.js";import"./Svg-C4poEASt.js";import"./Button-GV2C7V7f.js";import"./Card-FCi1q2IJ.js";import"./Checkbox-B4MiBKMF.js";import"./check_box_outline_blank-BvMHvB9Z.js";import"./CheckboxSelect-Dq6IwaT4.js";import"./Loader-DTzMALSS.js";import"./Radio-CYDN5Meu.js";import"./radio_button_unchecked-hw5p0x-H.js";import"./InputError-BsZAaKA6.js";import"./RadioSelect-CY_JYun0.js";import"./Select-DPf08Y0e.js";import"./IconBg-cuWLDUjJ.js";import"./Footer-Bbkzdz5M.js";import"./NavBar-DFgCLS-S.js";import"./PreviousLink-D5jlWA8o.js";import"./arrow_back-DnyUknY1.js";import"./Link-BQTbBxg2.js";import"./close-DqeJ9fK5.js";import"./Modal-CD3ho01h.js";import"./Pagination-R-Zl63vI.js";import"./Skeleton-_BHz5ywW.js";import"./Stepper-Br4-c7GM.js";import"./Tabs-uQNR_BBt.js";function a(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...m(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:c,name:"ContentTabList"}),`
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
                variant={ButtonVariants.ghost}
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
                variant={ButtonVariants.ghost}
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
                variant={ButtonVariants.ghost}
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
`,n.jsx(i,{of:r}),`
`,n.jsx(e,{of:r}),`
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
`,n.jsx(i,{of:s}),`
`,n.jsx(e,{of:s})]})}function on(o={}){const{wrapper:t}={...m(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(a,{...o})}):a(o)}export{on as default};
