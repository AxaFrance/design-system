import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BJaai1kI.js";import{M as r,C as m,a}from"./index-DNRNybxY.js";import{L as l,D as e}from"./List.stories-CJM695zb.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-VMttnCwA.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./DateInputCommon-beB_KQhA.js";import"./constants-DfZl1nqi.js";import"./ClickItem-ChTUcGL8.js";import"./List-DMnNSDRb.js";import"./Card-EvXQE1H2.js";import"./ContentItemMono-B2pfvYvn.js";function i(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:l,name:"List"}),`
`,t.jsx(n.h1,{id:"list",children:"List"}),`
`,t.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,t.jsx(n.p,{children:"To use the List component import it like that:"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import {
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
`,t.jsx(a,{of:e})]})}function b(o={}){const{wrapper:n}={...s(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(i,{...o})}):i(o)}export{b as default};
