import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as m}from"./index-FeUjBnvO.js";import{ae as l,af as t,ag as r}from"./index-DpqKoUO0.js";import{H as p,D as a,a as o,b as s,c as d}from"./Header.stories-DvigWnbU.js";import"./index-uubelm5h.js";import"./iframe-DKPei0sB.js";import"../sb-preview/runtime.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./lock-fill-4Bb7ZXSH.js";import"./Svg-CUaNRA4q.js";/* empty css               */import"./Title-BfgsK-DC.js";import"./getComponentClassName-BDlozEvX.js";import"./index-vAxXS4R5.js";import"./useIsSmallScreen-BMz0fP8s.js";import"./Tag-PCUeqJ0K.js";import"./Alert-k29qJE5v.js";import"./error-BHKM2E7q.js";import"./Button-BjcwjKsb.js";import"./Card-FCi1q2IJ.js";import"./Checkbox-C_sWxrJ4.js";import"./check_box_outline_blank-C3eXZyiA.js";import"./CheckboxSelect-POhRhbxH.js";import"./Loader-Demby5uR.js";import"./Radio-Dr4VedCr.js";import"./radio_button_unchecked-hw5p0x-H.js";import"./InputError-CNP8Ih8u.js";import"./RadioSelect-DCZA--Gb.js";import"./Select-DMz3sUqq.js";import"./IconBg-cuWLDUjJ.js";import"./Footer-C8dAt6XO.js";import"./NavBar-DFgCLS-S.js";import"./PreviousLink-2zi3iYT3.js";import"./arrow_back-DnyUknY1.js";import"./Link-CnMWJ9ii.js";import"./close-DqeJ9fK5.js";import"./Modal-DMFJEU_j.js";import"./Pagination-BC_blc0d.js";import"./Skeleton-_BHz5ywW.js";import"./Stepper-Br4-c7GM.js";import"./Tabs-uQNR_BBt.js";import"./DebugGrid-Cic2SHJb.js";function h(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...m(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:p,name:"Header Client"}),`
`,n.jsx(i.h1,{id:"header-client",children:"Header Client"}),`
`,n.jsx(i.h2,{id:"import",children:"Import"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`import { Header } from "@axa-fr/design-system-look-and-feel-react";
`})}),`
`,n.jsx(i.h2,{id:"use",children:"Use"}),`
`,n.jsx(i.h3,{id:"use-default-header",children:"Use Default Header"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`const DefaultHeader = () => <Header />;
`})}),`
`,n.jsx(i.h3,{id:"use-header-with-navigation-bar",children:"Use Header with Navigation Bar"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`const HeaderWithNavBar = () => <Header links={links} />;
`})}),`
`,n.jsx(i.h3,{id:"use-header-with-navigation-bar-and-right-item",children:"Use Header with Navigation Bar and right item"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`const HeaderWithNavBarAndRightItem = () => (
  <Header
    links={links}
    rightItem={[
      <Button
        key="Banking Space Button"
        iconLeft={<Svg src={lock} fill="#00008f" />}
        variant={ButtonVariants.secondary}
      >
        Espace Banque
      </Button>,
      <Button
        key="Profile Button"
        iconLeft={<Svg src={person} fill="#00008f" />}
        variant={ButtonVariants.ghost}
      >
        Mon Profil
      </Button>,
    ]}
  />
);
`})}),`
`,n.jsx(i.h3,{id:"use-header-with-navigation-bar-right-item-and-previous-link",children:"Use Header with Navigation Bar, right item and previous link"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-tsx",children:`const HeaderWithLinksAndRightItemAndHomeLink = () =>
<Header
    links={links}
    rightItem={
    [
        <Button
            key="Banking Space Button"
            iconLeft={<Svg src={lock} fill="#00008f" />}
            variant={ButtonVariants.secondary}
        >
            Espace Banque
        </Button>,
        <Button
            key="Profile Button"
            iconLeft={<Svg src={person} fill="#00008f" />}
            variant={ButtonVariants.ghost}
        >
            Mon Profil
        </Button>,
    ]
    previousLink={previousLink}
}/>;
`})}),`
`,n.jsx(i.h2,{id:"playground",children:"Playground"}),`
`,n.jsx(i.h3,{id:"default-header",children:"Default Header"}),`
`,n.jsx(t,{of:a}),`
`,n.jsx(r,{of:a}),`
`,n.jsx(i.h3,{id:"header-with-navigation-bar",children:"Header with Navigation Bar"}),`
`,n.jsx(t,{of:o}),`
`,n.jsx(r,{of:o}),`
`,n.jsx(i.h3,{id:"header-with-navigation-bar-and-right-item",children:"Header with Navigation Bar and right item"}),`
`,n.jsx(t,{of:s}),`
`,n.jsx(r,{of:s}),`
`,n.jsx(i.h3,{id:"header-with-navigation-bar-right-item-and-previous-link",children:"Header with Navigation Bar, right item and previous link"}),`
`,n.jsx(t,{of:d}),`
`,n.jsx(r,{of:d})]})}function on(e={}){const{wrapper:i}={...m(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(h,{...e})}):h(e)}export{on as default};
