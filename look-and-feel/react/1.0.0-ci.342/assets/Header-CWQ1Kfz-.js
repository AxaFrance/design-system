import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as m}from"./index-FeUjBnvO.js";import{ae as l,af as t,ag as r}from"./index-Cb73D1Ps.js";import{H as p,D as a,a as o,b as s,c as d}from"./Header.stories-UER_UvOb.js";import"./index-uubelm5h.js";import"./iframe-D-IgPWKx.js";import"../sb-preview/runtime.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./Svg-C4poEASt.js";/* empty css               */import"./Title-5HvLqByk.js";import"./getComponentClassName-BDlozEvX.js";import"./index-vAxXS4R5.js";import"./useIsSmallScreen-BMz0fP8s.js";import"./Tag-PCUeqJ0K.js";import"./Alert-yYw8AEPN.js";import"./error-BHKM2E7q.js";import"./Button-GV2C7V7f.js";import"./Card-FCi1q2IJ.js";import"./Checkbox-B4MiBKMF.js";import"./check_box_outline_blank-BvMHvB9Z.js";import"./CheckboxSelect-Dq6IwaT4.js";import"./Loader-DTzMALSS.js";import"./Radio-CYDN5Meu.js";import"./radio_button_unchecked-hw5p0x-H.js";import"./InputError-BsZAaKA6.js";import"./RadioSelect-CY_JYun0.js";import"./Select-DPf08Y0e.js";import"./IconBg-cuWLDUjJ.js";import"./Footer-Bbkzdz5M.js";import"./NavBar-DFgCLS-S.js";import"./PreviousLink-D5jlWA8o.js";import"./arrow_back-DnyUknY1.js";import"./Link-BQTbBxg2.js";import"./close-DqeJ9fK5.js";import"./Modal-CD3ho01h.js";import"./Pagination-R-Zl63vI.js";import"./Skeleton-_BHz5ywW.js";import"./Stepper-Br4-c7GM.js";import"./Tabs-uQNR_BBt.js";function h(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...m(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:p,name:"Header Client"}),`
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
`,n.jsx(r,{of:d})]})}function rn(e={}){const{wrapper:i}={...m(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(h,{...e})}):h(e)}export{rn as default};
