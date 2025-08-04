import{j as t}from"./index-C1mcBe1y.js";import{useMDXComponents as s}from"./index-G7nTXt62.js";import{M as r,C as m,a}from"./index-CaxqTsMM.js";import{L as l,D as e}from"./List.stories-0K3qxLIH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./iframe-BcRCzTKo.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./DropdownCommon-CTBU8xVl.js";import"./constants-DwY0Y1A6.js";import"./ContentItemMonoLF-BRlUGtig.js";import"./BasePictureCommon-6MqWrcgD.js";import"./ClickItem-BMIAEUtp.js";import"./List-BWl_7PKu.js";import"./Card-BlX6WtZ6.js";function i(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:l,name:"List"}),`
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
