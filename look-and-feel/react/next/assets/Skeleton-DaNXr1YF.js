import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as x}from"./index-DSfWgH82.js";import{M as h,C as r,a as s}from"./index-CQX_Rv1K.js";import{S as m,D as t,M as l,a,C as i,R as d}from"./Skeleton.stories-vWTeKkgw.js";import{WrapperMode as c}from"./SkeletonWrapper.stories-B6njrwLw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./iframe-Dm37zgm8.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./Skeleton-BjhhPFem.js";import"./TimelineVerticalLF-B91_N-Td.js";import"./Skeleton-B2N1Yads.js";function p(o){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...x(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:m}),`
`,e.jsx(n.h2,{id:"skeleton",children:"Skeleton"}),`
`,e.jsx(n.h3,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Skeleton } from "@axa-fr/design-system-look-and-feel-react";
`})}),`
`,e.jsx(n.h3,{id:"use",children:"Use"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const SkeletonComponent = () => <Skeleton grid={[[12]]} />;
`})}),`
`,e.jsx(n.h3,{id:"grid-props",children:"grid props"}),`
`,e.jsx(n.p,{children:"The 'grid' property receives an array of numbers. The first level of the array corresponds to the number of lines."}),`
`,e.jsx(n.p,{children:"For a line to be 100%, it must be given a value of 12, which corresponds to the default max value (modifiable by another property);"}),`
`,e.jsx(n.p,{children:"For example, if you want 3 full lines :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const SkeletonComponent = () => <Skeleton grid={[[12], [12], [12]]} />;
`})}),`
`,e.jsx(n.p,{children:"If you want 2 lines at 100% and the 3rd at 50% :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const SkeletonComponent = () => <Skeleton grid={[[12], [12], [6]]} />;
`})}),`
`,e.jsx(n.p,{children:"Multiple cells can be defined within a single line."}),`
`,e.jsx(n.p,{children:"If you want 2 rows at 100% and on the 3rd row, 2 cells at 50% :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const SkeletonComponent = () => <Skeleton grid={[[12], [12], [6, 6]]} />;
`})}),`
`,e.jsx(n.h2,{id:"default",children:"Default"}),`
`,e.jsx(n.p,{children:"You can define cols or lines :"}),`
`,e.jsx(r,{of:t}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(n.h2,{id:"mixed",children:"Mixed"}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h2,{id:"maxcol",children:"MaxCol"}),`
`,e.jsx(n.p,{children:"This property defines the maximum number of columns, with a default value of 12."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const SkeletonComponent = () => (
  <Skeleton maxCols={8} grid={[[8], [8], [4, 4]]} />
);
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Note that by changing the max value of columns to 8, to obtain 100% of the value is 8 and no longer 12."}),`
`]}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"colgap",children:"ColGap"}),`
`,e.jsx(n.p,{children:"This property defines the spacing between columns (gutters), with a default value of 1. (rem)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const SkeletonComponent = () => (
  <Skeleton colGap={2} grid={[[12], [12], [6, 6]]} />
);
`})}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(n.h2,{id:"rowgap",children:"RowGap"}),`
`,e.jsx(n.p,{children:"This property defines the vertical spacing between lines (gutters), with a default value of 0.5. (rem)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const SkeletonComponent = () => (
  <Skeleton rowGap={1} grid={[[12], [12], [6, 6]]} />
);
`})}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h2,{id:"wrapper-mode",children:"Wrapper mode"}),`
`,e.jsx(n.p,{children:"You can use the Skeleton like a wrapper"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const SkeletonComponent = () => (
  <Skeleton rowGap={1} grid={[[12], [12], [6, 6]]} />
);
`})}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(s,{of:c})]})}function D(o={}){const{wrapper:n}={...x(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(p,{...o})}):p(o)}export{D as default};
