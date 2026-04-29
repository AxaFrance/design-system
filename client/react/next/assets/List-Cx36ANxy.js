import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-D3yXdDgY.js";import{M as s,C as m,a as p}from"./index-CkyTZyS5.js";import{L as c,D as e}from"./List.stories-CqP9hQnf.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CVdno84P.js";import"./index-BjCk13Vd.js";import"./index-xQ9y_n2y.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./LoaderLF-BnufgKOz.js";import"./LoaderCommon-Ci0GL7sh.js";/* empty css               */import"./ContentItemDuoActionLF-DDkDwf-s.js";import"./ContentItemMonoLF-DSirg6d2.js";import"./ContentItemMonoCore-B8oedj3H.js";import"./ClickItemLF-CZRhyGuN.js";import"./ContentItemDuoLF-ayuyzCSc.js";import"./ListLF-agL7T6H9.js";import"./CardCommon-Ch1zZ_V6.js";function i(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c,name:"List"}),`
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
`,t.jsx(p,{of:e})]})}function X(n={}){const{wrapper:o}={...r(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(i,{...n})}):i(n)}export{X as default};
