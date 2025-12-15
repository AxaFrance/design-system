import{j as n}from"./index-C-iqcyhV.js";import{useMDXComponents as r}from"./index-DSfWgH82.js";import{M as s,C as m,a as c}from"./index-Cj33uzRq.js";import{L as p,D as e}from"./List.stories-B0NY8EZz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-BLG79sZX.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./LevelSelectorLF-BOPJTp8z.js";import"./ContentItemDuoActionLF-DpU7HRTq.js";import"./ContentItemMonoLF-qzYBBmIP.js";import"./ClickItemLF-I-LB0Hc3.js";import"./ContentItemDuoLF-B21BzJgx.js";import"./CardCommon-B64bu8Z2.js";function i(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:p,name:"List"}),`
`,n.jsx(t.h1,{id:"list",children:"List"}),`
`,n.jsx(t.h2,{id:"how-to-use",children:"How to use"}),`
`,n.jsx(t.p,{children:"To use the List component import it like that:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import {
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
`,n.jsx(m,{of:e}),`
`,n.jsx(c,{of:e})]})}function y(o={}){const{wrapper:t}={...r(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(i,{...o})}):i(o)}export{y as default};
