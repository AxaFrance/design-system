import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BJaai1kI.js";import{M as r,C as m,a}from"./index-CA53O-li.js";import{L as l,D as e}from"./List.stories-4xhB3Jwg.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C__wJnQ2.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./DateInputCommon-CchFfvOR.js";import"./constants-CJQF7C1m.js";import"./Svg-jPI5jc0k.js";import"./ClickItem-Cxr_-ne4.js";import"./List-CtnuI9_-.js";import"./Card-ByuLyr-6.js";import"./ContentItemMono-CpP4iZ2k.js";function i(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:l,name:"List"}),`
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
`,t.jsx(a,{of:e})]})}function w(n={}){const{wrapper:o}={...s(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(i,{...n})}):i(n)}export{w as default};
