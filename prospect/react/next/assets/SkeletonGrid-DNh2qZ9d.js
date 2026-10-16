import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-CxnOZA08.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-DO_PX2D8.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./SkeletonGrid.stories-RWyZJ7r0.js";import{n as h,r as g}from"./SkeletonGridWrapper.stories-D60nILlx.js";function _(e){let n={blockquote:`blockquote`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...s(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{of:d}),`
`,(0,y.jsx)(n.h2,{id:`skeletongrid`,children:`SkeletonGrid`}),`
`,(0,y.jsx)(n.h3,{id:`import`,children:`Import`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`import { SkeletonGrid } from "@axa-fr/canopee-react/prospect";
`})}),`
`,(0,y.jsx)(n.h3,{id:`use`,children:`Use`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`export const SkeletonComponent = () => (
  <SkeletonGrid grid={[[{ colSize: 12 }]]} />
);
`})}),`
`,(0,y.jsx)(n.h3,{id:`grid-props`,children:`grid props`}),`
`,(0,y.jsxs)(n.p,{children:[`The `,(0,y.jsx)(n.code,{children:`grid`}),` property receives a two-level array of `,(0,y.jsx)(n.code,{children:`SkeletonProps`}),`.`]}),`
`,(0,y.jsx)(n.p,{children:`The first level corresponds to rows. The second level corresponds to the skeleton cells rendered in each row.`}),`
`,(0,y.jsxs)(n.p,{children:[`To make a row full width with the default `,(0,y.jsx)(n.code,{children:`maxCols={12}`}),`, use `,(0,y.jsx)(n.code,{children:`colSize: 12`}),`.`]}),`
`,(0,y.jsx)(n.p,{children:`For example, if you want 3 full lines :`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`export const SkeletonComponent = () => (
  <SkeletonGrid
    grid={[[{ colSize: 12 }], [{ colSize: 12 }], [{ colSize: 12 }]]}
  />
);
`})}),`
`,(0,y.jsx)(n.p,{children:`If you want 2 lines at 100% and the 3rd at 50% :`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`export const SkeletonComponent = () => (
  <SkeletonGrid
    grid={[[{ colSize: 12 }], [{ colSize: 12 }], [{ colSize: 6 }]]}
  />
);
`})}),`
`,(0,y.jsxs)(n.p,{children:[`Multiple cells can be defined within a single row, and each cell can receive the full set of `,(0,y.jsx)(n.code,{children:`Skeleton`}),` props.`]}),`
`,(0,y.jsx)(n.p,{children:`If you want 2 rows at 100% and on the 3rd row, 2 cells at 50% :`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`export const SkeletonComponent = () => (
  <SkeletonGrid
    grid={[
      [{ colSize: 12 }],
      [{ colSize: 12 }],
      [
        { colSize: 6, variant: "circle", size: "S" },
        { colSize: 6, variant: "rectangle", size: "L" },
      ],
    ]}
  />
);
`})}),`
`,(0,y.jsx)(n.h2,{id:`default`,children:`Default`}),`
`,(0,y.jsx)(n.p,{children:`You can define cols or lines :`}),`
`,(0,y.jsx)(r,{of:u}),`
`,(0,y.jsx)(t,{of:u}),`
`,(0,y.jsx)(n.h2,{id:`mixed`,children:`Mixed`}),`
`,(0,y.jsx)(r,{of:l}),`
`,(0,y.jsx)(t,{of:l}),`
`,(0,y.jsx)(n.h2,{id:`maxcolumns`,children:`MaxColumns`}),`
`,(0,y.jsx)(n.p,{children:`This property defines the maximum number of columns, with a default value of 12.`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`export const SkeletonComponent = () => (
  <SkeletonGrid
    maxCols={8}
    grid={[
      [{ colSize: 8 }],
      [{ colSize: 8 }],
      [{ colSize: 4 }, { colSize: 4 }],
    ]}
  />
);
`})}),`
`,(0,y.jsxs)(n.blockquote,{children:[`
`,(0,y.jsx)(n.p,{children:`Note that by changing the max value of columns to 8, to obtain 100% of the value is 8 and no longer 12.`}),`
`]}),`
`,(0,y.jsx)(r,{of:f}),`
`,(0,y.jsx)(t,{of:f}),`
`,(0,y.jsx)(n.h2,{id:`columngap`,children:`ColumnGap`}),`
`,(0,y.jsx)(n.p,{children:`This property defines the spacing between columns (gutters), with a default value of 1. (rem)`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`export const SkeletonComponent = () => (
  <SkeletonGrid
    colGap={2}
    grid={[
      [{ colSize: 12 }],
      [{ colSize: 12 }],
      [{ colSize: 6 }, { colSize: 6 }],
    ]}
  />
);
`})}),`
`,(0,y.jsx)(r,{of:m}),`
`,(0,y.jsx)(t,{of:m}),`
`,(0,y.jsx)(n.h2,{id:`rowgapspacing`,children:`RowGapSpacing`}),`
`,(0,y.jsx)(n.p,{children:`This property defines the vertical spacing between lines (gutters), with a default value of 0.5. (rem)`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`export const SkeletonComponent = () => (
  <SkeletonGrid
    rowGap={1}
    grid={[
      [{ colSize: 12 }],
      [{ colSize: 12 }],
      [{ colSize: 6 }, { colSize: 6 }],
    ]}
  />
);
`})}),`
`,(0,y.jsx)(r,{of:c}),`
`,(0,y.jsx)(t,{of:c}),`
`,(0,y.jsx)(n.h2,{id:`wrapper-mode`,children:`Wrapper mode`}),`
`,(0,y.jsx)(n.p,{children:`You can use the SkeletonGrid like a wrapper with the isLoading prop.`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<SkeletonGrid {...props} isLoading={isLoading}>
  <div className="skeleton-wrapper-content">
    <p>Ceci est mon contenu à charger</p>
    <p>Ceci est mon contenu à charger</p>
    <p>mon contenu</p>
  </div>
</SkeletonGrid>
`})}),`
`,(0,y.jsx)(r,{of:h}),`
`,(0,y.jsx)(t,{of:h})]})}function v(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=a(),o(),n(),p(),g()})))()}b();export{v as default};