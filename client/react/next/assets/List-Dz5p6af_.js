import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DSfWgH82.js";import{M as s,C as m,a as p}from"./index-BIZjljOG.js";import{L as c,D as e}from"./List.stories-D5bBW2pD.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DWU-u64B.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./FormLayout-Dpb6mS7Y.js";/* empty css               */import"./ContentItemDuoActionLF-BbXimjZc.js";import"./ContentItemMonoLF-BgwiMwkC.js";import"./ContentItemMonoCore-DUQcqM2j.js";import"./ClickItemLF-BH-mL3Qn.js";import"./ContentItemDuoLF-CfCPBXVg.js";import"./ListLF-B_cJ9nXZ.js";import"./CardCommon-CKiXIYBb.js";function i(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c,name:"List"}),`
`,t.jsx(o.h1,{id:"list",children:"List"}),`
`,t.jsx(o.h2,{id:"how-to-use",children:"How to use"}),`
`,t.jsx(o.p,{children:"To use the List component import it like that:"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import {
  ClickItem,
  ContentItemMono,
  List,
  Svg,
} from "@axa-fr/canopee-react/client";
import trashIcon from "@material-symbols/svg-400/outlined/delete.svg";
import publishedWithChangesIcon from "@material-symbols/svg-400/outlined/published_with_changes-fill.svg";

const MyComponent = () => (
  <List>
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
`,t.jsx(m,{of:e}),`
`,t.jsx(p,{of:e})]})}function _(n={}){const{wrapper:o}={...r(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(i,{...n})}):i(n)}export{_ as default};
