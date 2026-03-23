import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-DSfWgH82.js";import{M as s,C as m,a as p}from"./index-DhUfrXKa.js";import{L as c,D as e}from"./List.stories-DZrJI8pZ.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D5kUCSEW.js";import"./index-63p0MazF.js";import"./index-CLcWwD1i.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./LoaderApollo-wL3_WN5a.js";/* empty css               */import"./ContentItemDuoActionApollo-D4VkuowX.js";import"./ContentItemMonoApollo-CHFbQXgt.js";import"./ContentItemMonoCore-CppiWBgH.js";import"./ClickItemApollo-NbcZqkzH.js";import"./delete-DPxhdlbV.js";import"./ContentItemDuoApollo-CxSN4EEY.js";import"./ListApollo-TMJrM6yi.js";import"./CardCommon-BxeKwXf2.js";function i(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c,name:"List"}),`
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
