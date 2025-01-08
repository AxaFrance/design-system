import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as l}from"./index-FeUjBnvO.js";import{ae as m,af as i,ag as r}from"./index-DpqKoUO0.js";import{C as p,a as o,b as s,c}from"./ClickList.stories-Dnn_UK-H.js";import"./index-uubelm5h.js";import"./iframe-DKPei0sB.js";import"../sb-preview/runtime.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./Title-BfgsK-DC.js";/* empty css               */import"./getComponentClassName-BDlozEvX.js";import"./index-vAxXS4R5.js";import"./useIsSmallScreen-BMz0fP8s.js";import"./Tag-PCUeqJ0K.js";import"./Alert-k29qJE5v.js";import"./error-BHKM2E7q.js";import"./Svg-CUaNRA4q.js";import"./Button-BjcwjKsb.js";import"./Card-FCi1q2IJ.js";import"./Checkbox-C_sWxrJ4.js";import"./check_box_outline_blank-C3eXZyiA.js";import"./CheckboxSelect-POhRhbxH.js";import"./Loader-Demby5uR.js";import"./Radio-Dr4VedCr.js";import"./radio_button_unchecked-hw5p0x-H.js";import"./InputError-CNP8Ih8u.js";import"./RadioSelect-DCZA--Gb.js";import"./Select-DMz3sUqq.js";import"./IconBg-cuWLDUjJ.js";import"./Footer-C8dAt6XO.js";import"./NavBar-DFgCLS-S.js";import"./PreviousLink-2zi3iYT3.js";import"./arrow_back-DnyUknY1.js";import"./Link-CnMWJ9ii.js";import"./close-DqeJ9fK5.js";import"./Modal-DMFJEU_j.js";import"./Pagination-BC_blc0d.js";import"./Skeleton-_BHz5ywW.js";import"./Stepper-Br4-c7GM.js";import"./Tabs-uQNR_BBt.js";import"./DebugGrid-Cic2SHJb.js";import"./ClickItem.helpers-C2HGWcJo.js";function a(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(m,{of:p,name:"ClickList"}),`
`,n.jsx(e.h1,{id:"clicklist",children:"ClickList"}),`
`,n.jsx(e.h2,{id:"import",children:"Import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ClickList } from "@axa-fr/design-system-look-and-feel-react";
`})}),`
`,n.jsx(e.h2,{id:"use",children:"Use"}),`
`,n.jsx(e.h3,{id:"use-with-left-icon",children:"Use with left icon"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MyComponentWithIcon = () => (
  <ClickList
    items={[
      {
        id: "1",
        icon: <Svg src={error} />,
        children: "Texte principal",
        classModifier: "small",
      },
      {
        id: "2",
        icon: <Svg src={contentPasteGo} />,
        children: "Texte principal",
      },
      {
        id: "3",
        icon: <Svg src={contentPasteGo} />,
        children: "Texte principal",
        classModifier: "large",
      },
      {
        id: "4",
        icon: <Svg src={contentPasteGo} />,
        children: "Texte principal",
        disabled: true,
      },
    ]}
  />
);
`})}),`
`,n.jsx(i,{of:o}),`
`,n.jsx(r,{of:o}),`
`,n.jsx(e.h3,{id:"use-without-left-icon",children:"Use without left icon"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MyComponentWithoutIcon = () => (
  <ClickList
    items={[
      {
        id: "pre-contractual_Orias_sheet",
        children: (
          <>
            <h3 className="af-list-item-content-label__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-list-item-content-label__subtitle">
              30 novembre 2021
            </p>
            <p className="af-list-item-content-label__secondary">
              Signé électroniquement
            </p>
          </>
        ),
      },
      {
        id: "contractual_Orias_sheet-2",
        children: (
          <>
            <h3 className="af-list-item-content-label__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-list-item-content-label__subtitle">
              30 novembre 2021
            </p>
            <p className="af-list-item-content-label__secondary">
              Signé électroniquement
            </p>
          </>
        ),
        disabled: true,
      },
    ]}
  />
);
`})}),`
`,n.jsx(i,{of:s}),`
`,n.jsx(r,{of:s}),`
`,n.jsx(e.h3,{id:"use-with-link-and-without-left-icon",children:"Use with link and without left icon"}),`
`,n.jsxs(e.p,{children:["You can override the default parent component by passing a ",n.jsx(e.code,{children:"parentClickComponent"})," prop to the item."]}),`
`,n.jsxs(e.p,{children:["A function named ",n.jsx(e.code,{children:"createClickItemParent"})," is provided to create a parent component with the desired props easier."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`const MyComponentWithoutIcon = () => (
  <ClickList
    items={[
      {
        id: "pre-contractual_Orias_sheet",
        children: (
          <>
            <h3 className="af-list-item-content-label__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-list-item-content-label__subtitle">
              30 novembre 2021
            </p>
            <p className="af-list-item-content-label__secondary">
              Signé électroniquement
            </p>
          </>
        ),
        parentClickComponent: createClickItemParent("a", {
          href: "https://github.com/AxaFrance/design-system",
          target: "_blank",
          rel: "noreferrer",
        }),
      },
      {
        id: "contractual_Orias_sheet-2",
        children: (
          <>
            <h3 className="af-list-item-content-label__title">
              Fiche Orias précontractuelle
            </h3>
            <p className="af-list-item-content-label__subtitle">
              30 novembre 2021
            </p>
            <p className="af-list-item-content-label__secondary">
              Signé électroniquement
            </p>
          </>
        ),
        parentClickComponent: createClickItemParent("a", {
          href: "https://github.com/AxaFrance/design-system",
          target: "_blank",
          rel: "noreferrer",
        }),
        isDisabled: true,
      },
    ]}
  />
);
`})}),`
`,n.jsx(i,{of:c}),`
`,n.jsx(r,{of:c})]})}function on(t={}){const{wrapper:e}={...l(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{on as default};
