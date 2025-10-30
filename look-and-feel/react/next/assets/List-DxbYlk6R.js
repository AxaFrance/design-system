import{j as t}from"./index-C-iqcyhV.js";import{useMDXComponents as r}from"./index-DSfWgH82.js";import{M as s,C as m,a}from"./index-mInoV_8_.js";import{L as l,D as e}from"./List.stories-BI55keHA.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-ncOtqyVE.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Skeleton-CojCj7Cx.js";import"./ProgressBarCommon-9RdXjFip.js";import"./TimelineVerticalLF-BxTEzNOM.js";import"./ContentItemMono-CC6pUcy4.js";import"./ContentItemMonoLF-9Z_3rson.js";import"./ClickItem-DHAL1CSJ.js";import"./List-0EWMsylt.js";import"./Card-CZdgvvIl.js";function i(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:l,name:"List"}),`
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
`,t.jsx(m,{of:e}),`
`,t.jsx(a,{of:e})]})}function D(n={}){const{wrapper:o}={...r(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(i,{...n})}):i(n)}export{D as default};
