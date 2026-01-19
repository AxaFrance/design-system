import{j as t}from"./index-C-iqcyhV.js";import{useMDXComponents as r}from"./index-DSfWgH82.js";import{M as s,C as m,a as p}from"./index-B1nZeUU3.js";import{L as c,D as e}from"./List.stories-C70hzJ_w.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-VomLaZ5N.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./FieldsetLF-DbaQRN_4.js";import"./ContentItemDuoActionLF-C70OeGgh.js";import"./ContentItemMonoLF-gs-deVxJ.js";import"./ContentItemMonoCore-CvLSPxTC.js";import"./ClickItemLF-BRknEWpW.js";import"./ContentItemDuoLF-CqSeCbfD.js";import"./ListLF-BcABrP2J.js";import"./CardCommon-BRkdXImA.js";function i(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c,name:"List"}),`
`,t.jsx(n.h1,{id:"list",children:"List"}),`
`,t.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,t.jsx(n.p,{children:"To use the List component import it like that:"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import {
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
`,t.jsx(p,{of:e})]})}function S(o={}){const{wrapper:n}={...r(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(i,{...o})}):i(o)}export{S as default};
