import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as m}from"./index-FeUjBnvO.js";import{ae as e,af as s,ag as p}from"./index-DpqKoUO0.js";import{L as a,D as r}from"./List.stories-CJMa_tka.js";import"./index-uubelm5h.js";import"./iframe-DKPei0sB.js";import"../sb-preview/runtime.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./Svg-CUaNRA4q.js";import"./Title-BfgsK-DC.js";/* empty css               */import"./getComponentClassName-BDlozEvX.js";import"./index-vAxXS4R5.js";import"./useIsSmallScreen-BMz0fP8s.js";import"./Tag-PCUeqJ0K.js";import"./Alert-k29qJE5v.js";import"./error-BHKM2E7q.js";import"./Button-BjcwjKsb.js";import"./Card-FCi1q2IJ.js";import"./Checkbox-C_sWxrJ4.js";import"./check_box_outline_blank-C3eXZyiA.js";import"./CheckboxSelect-POhRhbxH.js";import"./Loader-Demby5uR.js";import"./Radio-Dr4VedCr.js";import"./radio_button_unchecked-hw5p0x-H.js";import"./InputError-CNP8Ih8u.js";import"./RadioSelect-DCZA--Gb.js";import"./Select-DMz3sUqq.js";import"./IconBg-cuWLDUjJ.js";import"./Footer-C8dAt6XO.js";import"./NavBar-DFgCLS-S.js";import"./PreviousLink-2zi3iYT3.js";import"./arrow_back-DnyUknY1.js";import"./Link-CnMWJ9ii.js";import"./close-DqeJ9fK5.js";import"./Modal-DMFJEU_j.js";import"./Pagination-BC_blc0d.js";import"./Skeleton-_BHz5ywW.js";import"./Stepper-Br4-c7GM.js";import"./Tabs-uQNR_BBt.js";import"./DebugGrid-Cic2SHJb.js";function n(i){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(e,{of:a,name:"List"}),`
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
`,t.jsx(p,{of:r})]})}function ot(i={}){const{wrapper:o}={...m(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(n,{...i})}):n(i)}export{ot as default};
