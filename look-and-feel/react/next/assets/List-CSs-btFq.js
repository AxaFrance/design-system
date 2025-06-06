import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BJaai1kI.js";import{M as s,C as m,a}from"./index-O9rthSed.js";import{L as l,D as e}from"./List.stories-BZIMUp9d.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BjETdGLf.js";import"./index-BsNqBstw.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./ToggleCommon-BxTyBn2B.js";import"./constants-BQWpf6rL.js";import"./ContentItemMonoLF-1006wlWA.js";import"./BasePictureCommon-D6PbXJ_x.js";import"./ClickItem-BvW7AqwL.js";import"./getComponentClassName-Reqv4vLZ.js";import"./List-XSeAZ377.js";import"./Card-DupwBo3v.js";function i(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:l,name:"List"}),`
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
