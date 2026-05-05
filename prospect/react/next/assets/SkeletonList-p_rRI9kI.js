import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-C8Tw6Lm5.js";import{t as r}from"./mdx-react-shim-B5BYO_WN.js";import{i,l as a,n as o,s}from"./blocks-B2Oe2WTt.js";import{Default as c,n as l,t as u}from"./SkeletonList.stories-SlSxhaXB.js";function d(e){let t={code:`code`,h2:`h2`,h3:`h3`,pre:`pre`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{of:u}),`
`,(0,p.jsx)(t.h2,{id:`skeletonlist`,children:`SkeletonList`}),`
`,(0,p.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { SkeletonList } from "@axa-fr/canopee-react/client";
`})}),`
`,(0,p.jsx)(t.h3,{id:`use`,children:`Use`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const lists = [
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
`,(0,p.jsx)(o,{of:c}),`
`,(0,p.jsx)(i,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),r(),a(),l()}))();export{f as default};