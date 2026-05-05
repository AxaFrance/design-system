import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-C8Tw6Lm5.js";import{t as r}from"./mdx-react-shim-B5BYO_WN.js";import{i,l as a,n as o,s}from"./blocks-B2Oe2WTt.js";import{ColGap as c,Default as l,MaxCol as u,Mixed as d,RowGap as f,n as p,t as m}from"./Skeleton.stories-DNar06ad.js";import{WrapperMode as h,t as g}from"./SkeletonWrapper.stories-ChFvv4tP.js";function _(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`skeleton`,children:`Skeleton`}),`
`,(0,y.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`import { Skeleton } from "@axa-fr/canopee-react/prospect";
`})}),`
`,(0,y.jsx)(t.h3,{id:`use`,children:`Use`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`export const SkeletonComponent = () => <Skeleton grid={[[12]]} />;
`})}),`
`,(0,y.jsx)(t.h3,{id:`grid-props`,children:`grid props`}),`
`,(0,y.jsx)(t.p,{children:`The 'grid' property receives an array of numbers. The first level of the array corresponds to the number of lines.`}),`
`,(0,y.jsx)(t.p,{children:`For a line to be 100%, it must be given a value of 12, which corresponds to the default max value (modifiable by another property);`}),`
`,(0,y.jsx)(t.p,{children:`For example, if you want 3 full lines :`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`export const SkeletonComponent = () => <Skeleton grid={[[12], [12], [12]]} />;
`})}),`
`,(0,y.jsx)(t.p,{children:`If you want 2 lines at 100% and the 3rd at 50% :`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`export const SkeletonComponent = () => <Skeleton grid={[[12], [12], [6]]} />;
`})}),`
`,(0,y.jsx)(t.p,{children:`Multiple cells can be defined within a single line.`}),`
`,(0,y.jsx)(t.p,{children:`If you want 2 rows at 100% and on the 3rd row, 2 cells at 50% :`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`export const SkeletonComponent = () => <Skeleton grid={[[12], [12], [6, 6]]} />;
`})}),`
`,(0,y.jsx)(t.h2,{id:`default`,children:`Default`}),`
`,(0,y.jsx)(t.p,{children:`You can define cols or lines :`}),`
`,(0,y.jsx)(o,{of:l}),`
`,(0,y.jsx)(i,{of:l}),`
`,(0,y.jsx)(t.h2,{id:`mixed`,children:`Mixed`}),`
`,(0,y.jsx)(o,{of:d}),`
`,(0,y.jsx)(i,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`maxcol`,children:`MaxCol`}),`
`,(0,y.jsx)(t.p,{children:`This property defines the maximum number of columns, with a default value of 12.`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`export const SkeletonComponent = () => (
  <Skeleton maxCols={8} grid={[[8], [8], [4, 4]]} />
);
`})}),`
`,(0,y.jsxs)(t.blockquote,{children:[`
`,(0,y.jsx)(t.p,{children:`Note that by changing the max value of columns to 8, to obtain 100% of the value is 8 and no longer 12.`}),`
`]}),`
`,(0,y.jsx)(o,{of:u}),`
`,(0,y.jsx)(i,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`colgap`,children:`ColGap`}),`
`,(0,y.jsx)(t.p,{children:`This property defines the spacing between columns (gutters), with a default value of 1. (rem)`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`export const SkeletonComponent = () => (
  <Skeleton colGap={2} grid={[[12], [12], [6, 6]]} />
);
`})}),`
`,(0,y.jsx)(o,{of:c}),`
`,(0,y.jsx)(i,{of:c}),`
`,(0,y.jsx)(t.h2,{id:`rowgap`,children:`RowGap`}),`
`,(0,y.jsx)(t.p,{children:`This property defines the vertical spacing between lines (gutters), with a default value of 0.5. (rem)`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`export const SkeletonComponent = () => (
  <Skeleton rowGap={1} grid={[[12], [12], [6, 6]]} />
);
`})}),`
`,(0,y.jsx)(o,{of:f}),`
`,(0,y.jsx)(i,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`wrapper-mode`,children:`Wrapper mode`}),`
`,(0,y.jsx)(t.p,{children:`You can use the Skeleton like a wrapper with the isLoading prop.`}),`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`<Skeleton {...props} isLoading={isLoading}>
  <div className="skeleton-wrapper-content">
    <p>Ceci est mon contenu à charger</p>
    <p>Ceci est mon contenu à charger</p>
    <p>mon contenu</p>
  </div>
</Skeleton>
`})}),`
`,(0,y.jsx)(o,{of:h}),`
`,(0,y.jsx)(i,{of:h})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),r(),a(),p(),g()}))();export{v as default};