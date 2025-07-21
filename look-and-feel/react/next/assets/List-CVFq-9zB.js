import{j as t}from"./index-C1mcBe1y.js";import{useMDXComponents as r}from"./index-G7nTXt62.js";import{M as s,C as m,a}from"./index-BhscWjJC.js";import{L as l,D as e}from"./List.stories-CMh7P_Vg.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./iframe-Cu3uHIfd.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./DropdownCommon-DhTvOb8d.js";import"./constants-QFv--U7F.js";import"./ContentItemMonoLF-D__drRXu.js";import"./BasePictureCommon-CYyrgkj2.js";import"./ClickItem-C_rVQKg8.js";import"./getComponentClassName-3qYBOmCl.js";import"./List-BEQeyxEY.js";import"./Card-BUAGc_W-.js";function i(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:l,name:"List"}),`
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
