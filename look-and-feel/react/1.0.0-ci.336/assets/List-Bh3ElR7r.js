import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as m}from"./index-FeUjBnvO.js";import{ae as e,af as s,ag as p}from"./index-Cb73D1Ps.js";import{L as a,D as r}from"./List.stories-D51Lf3v5.js";import"./index-uubelm5h.js";import"./iframe-D-IgPWKx.js";import"../sb-preview/runtime.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./Svg-C4poEASt.js";import"./Title-5HvLqByk.js";/* empty css               */import"./getComponentClassName-BDlozEvX.js";import"./index-vAxXS4R5.js";import"./useIsSmallScreen-BMz0fP8s.js";import"./Tag-PCUeqJ0K.js";import"./Alert-yYw8AEPN.js";import"./error-BHKM2E7q.js";import"./Button-GV2C7V7f.js";import"./Card-FCi1q2IJ.js";import"./Checkbox-B4MiBKMF.js";import"./check_box_outline_blank-BvMHvB9Z.js";import"./CheckboxSelect-Dq6IwaT4.js";import"./Loader-DTzMALSS.js";import"./Radio-CYDN5Meu.js";import"./radio_button_unchecked-hw5p0x-H.js";import"./InputError-BsZAaKA6.js";import"./RadioSelect-CY_JYun0.js";import"./Select-DPf08Y0e.js";import"./IconBg-cuWLDUjJ.js";import"./Footer-Bbkzdz5M.js";import"./NavBar-DFgCLS-S.js";import"./PreviousLink-D5jlWA8o.js";import"./arrow_back-DnyUknY1.js";import"./Link-BQTbBxg2.js";import"./close-DqeJ9fK5.js";import"./Modal-CD3ho01h.js";import"./Pagination-R-Zl63vI.js";import"./Skeleton-_BHz5ywW.js";import"./Stepper-Br4-c7GM.js";import"./Tabs-uQNR_BBt.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(e,{of:a,name:"List"}),`
`,t.jsx(o.h1,{id:"list",children:"List"}),`
`,t.jsx(o.h2,{id:"how-to-use",children:"How to use"}),`
`,t.jsx(o.p,{children:"To use the List component import it like that:"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import {
  ClickItem,
  ContentItemMono,
  List,
  Svg,
} from "@axa-fr/design-system-look-and-feel-react";
import trashIcon from "@material-symbols/svg-400/outlined/delete.svg";
import publishedWithChangesIcon from "@material-symbols/svg-400/outlined/published_with_changes-fill.svg";

const MyComponent = () => (
  <List classModifier="first-separator-full-width">
    <ContentItemMono secondaryText="nom.prénom@mail.fr">
      Prénom NOM
    </ContentItemMono>
    <ClickItem icon={<Svg src={publishedWithChangesIcon} />}>
      Modifier le profil
    </ClickItem>
    <ClickItem icon={<Svg src={trashIcon} />}>Supprimer le profil</ClickItem>
  </List>
);
`})}),`
`,t.jsx(s,{of:r}),`
`,t.jsx(p,{of:r})]})}function tt(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{tt as default};
