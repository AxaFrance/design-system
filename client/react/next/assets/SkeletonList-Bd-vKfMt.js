import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as s}from"./index-DSfWgH82.js";import{M as a,C as l,a as r}from"./index-eTXP7Kgg.js";import{S as m,D as i}from"./SkeletonList.stories-CanErSHX.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-xk5kyPer.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./SkeletonLF-ByPLQ7Mf.js";import"./SkeletonCommon-C7KfA8Qf.js";import"./ListLF-zci_9D2n.js";import"./CardCommon-BgdYCE32.js";import"./ContentItemMonoLF-CsiLp2sB.js";import"./ContentItemDuoLF-Ej8GG2sg.js";function o(t){const n={code:"code",h2:"h2",h3:"h3",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
`,e.jsx(n.h2,{id:"skeletonlist",children:"SkeletonList"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SkeletonList } from "@axa-fr/canopee-react/client";
`})}),`
`,e.jsx(n.h3,{id:"use",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const lists = [
  { grid: [[3, 9]], lines: 10 },
  { grid: [[3, 9]], lines: 3 },
  { grid: [[6], [12], [12], [12]] },
];
const isLoading = true;

<SkeletonList {...props} lists={lists} isLoading={isLoading}>
  <List>
    <ContentItemDuo label="Nom" value="Doe" size="large" />
    <ContentItemDuo label="Prénom" value="John" size="large" />
    <ContentItemDuo
      label="Adresse"
      value="4 allée du Châteaux blanc"
      size="large"
    />
    <ContentItemDuo label="Ville" value="Wasquehal" size="large" />
    <ContentItemDuo label="Code postal" value="59290" size="large" />
    <ContentItemDuo label="Pays" value="France" size="large" />
    <ContentItemDuo label="Date de naissance" value="01/01/1970" size="large" />
    <ContentItemDuo label="Poste" value="Développeur" size="large" />
    <ContentItemDuo label="Ancienneté" value="10 ans" size="large" />
  </List>
  <List>
    <ContentItemDuo
      label="Infos complémentaires"
      value="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      classModifier="large"
    />
    <ContentItemDuo
      label="Infos complémentaires"
      value="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      classModifier="large"
    />
    <ContentItemDuo
      label="Infos complémentaires"
      value="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      classModifier="large"
    />
  </List>
  <List>
    <ContentItemMono
      title="Commentaire"
      type="stick"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque aspernatur ullam officia deserunt temporibus sapiente nam reiciendis iste fugiat harum exercitationem placeat, explicabo aperiam ab nemo aliquam eaque ipsa!"
    />
  </List>
</SkeletonList>;
`})}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(r,{of:i})]})}function z(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{z as default};
