import{j as t}from"./index-C-iqcyhV.js";import{useMDXComponents as r}from"./index-DSfWgH82.js";import{M as s,C as m,a as p}from"./index-B9oP-U0u.js";import{L as c,D as e}from"./List.stories-B5tzfzlD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-CNa9wdvT.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./SkeletonApollo-Cce1vNXK.js";import"./ContentItemDuoActionApollo-CjTxFTsK.js";import"./ContentItemMonoApollo-CAMuCG1s.js";import"./ClickItemApollo-CZ0PqBqx.js";import"./delete-DPxhdlbV.js";import"./ContentItemDuoApollo-BbsypO3D.js";import"./ListApollo-mP8TbdXY.js";import"./CardCommon-GdXXfDcw.js";function i(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c,name:"List"}),`
`,t.jsx(o.h1,{id:"list",children:"List"}),`
`,t.jsx(o.h2,{id:"how-to-use",children:"How to use"}),`
`,t.jsx(o.p,{children:"To use the List component import it like that:"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-tsx",children:`import {
  ClickItem,
  ContentItemMono,
  List,
  Svg,
} from "@axa-fr/canopee-react/prospect";
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
`,t.jsx(p,{of:e})]})}function S(n={}){const{wrapper:o}={...r(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(i,{...n})}):i(n)}export{S as default};
