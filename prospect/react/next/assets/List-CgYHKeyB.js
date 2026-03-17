import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DSfWgH82.js";import{M as s,C as m,a as p}from"./index-DVVtKEpS.js";import{L as c,D as e}from"./List.stories-DMB7ixsn.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bda-aYZ0.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./FormLayout-B6E5v8AY.js";/* empty css               */import"./ContentItemDuoActionApollo-BqNlvc5-.js";import"./ContentItemMonoApollo-C_EAUkdW.js";import"./ContentItemMonoCore-D-loEYZg.js";import"./ClickItemApollo-BkIK3gJH.js";import"./delete-DPxhdlbV.js";import"./ContentItemDuoApollo-D__gePVO.js";import"./ListApollo-Bpr3VT7R.js";import"./CardCommon-DER6EpLf.js";function i(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c,name:"List"}),`
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
`,t.jsx(p,{of:e})]})}function X(n={}){const{wrapper:o}={...r(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(i,{...n})}):i(n)}export{X as default};
