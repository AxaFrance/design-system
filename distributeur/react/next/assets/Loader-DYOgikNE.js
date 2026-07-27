import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-BKxccJTd.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-Cq757aCd.js";import{t as s}from"./mdx-react-shim-B5dYPjcP.js";import{ContentVariant as c,FullScreenVariant as l,InlineVariant as u,SquareLoaderComponent as d,n as f,t as p}from"./Loader.stories-D0y4pdxl.js";function m(e){let r={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(r.h1,{id:`loader`,children:`Loader`}),`
`,(0,g.jsxs)(r.blockquote,{children:[`
`,(0,g.jsxs)(r.p,{children:[(0,g.jsx)(r.strong,{children:`Breaking-change safe migration`}),`: `,(0,g.jsx)(r.code,{children:`Loader`}),` now supports variants. The default variant keeps the historical Loader behavior.`]}),`
`,(0,g.jsxs)(r.p,{children:[(0,g.jsx)(r.strong,{children:`Deprecated component`}),`: `,(0,g.jsx)(r.code,{children:`SquareLoader`}),` is still exported for compatibility but is deprecated. Prefer `,(0,g.jsx)(r.code,{children:`Loader`}),` with `,(0,g.jsx)(r.code,{children:`variant="fullscreen"`}),`.`]}),`
`,(0,g.jsxs)(r.p,{children:[(0,g.jsx)(r.strong,{children:`Deprecated prop`}),`: The `,(0,g.jsx)(r.code,{children:`classModifier`}),` prop is deprecated. Use `,(0,g.jsx)(r.code,{children:`className`}),` to add custom CSS modifier classes instead.`]}),`
`]}),`
`,(0,g.jsx)(r.p,{children:`The loader is a component to disable part of your application to express an unspecified wait time or display the length of a process.`}),`
`,(0,g.jsxs)(r.p,{children:[`The default variant is the `,(0,g.jsx)(r.code,{children:`fullscreen`}),` variant, which is a fullscreen overlay spinner. The `,(0,g.jsx)(r.code,{children:`inline`}),` and `,(0,g.jsx)(r.code,{children:`content`}),` variants are also available for inline and content area spinners.`]}),`
`,(0,g.jsxs)(r.p,{children:[`For `,(0,g.jsx)(r.code,{children:`fullscreen`}),`, you can pass `,(0,g.jsx)(r.code,{children:`children`}),` to wrap page content and display the loader overlay above it (same usage pattern as `,(0,g.jsx)(r.code,{children:`SquareLoader`}),`).`]}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`import { Loader } from "@axa-fr/canopee-react/distributeur";

const MyComponent = () => (
  <>
    <Loader variant="fullscreen" text="Chargement en cours">
      My Content
    </Loader>
    <Loader variant="inline" text="Recherche en cours" />
  </>
);
`})}),`
`,(0,g.jsx)(r.h2,{id:`playground`,children:`Playground`}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(n,{of:u}),`
`,(0,g.jsx)(r.h2,{id:`variants`,children:`Variants`}),`
`,(0,g.jsxs)(r.p,{children:[(0,g.jsx)(r.code,{children:`Loader`}),` supports 3 variants:`]}),`
`,(0,g.jsxs)(r.ul,{children:[`
`,(0,g.jsxs)(r.li,{children:[(0,g.jsx)(r.code,{children:`inline`}),`: spinner displayed inline`]}),`
`,(0,g.jsxs)(r.li,{children:[(0,g.jsx)(r.code,{children:`content`}),`: compact spinner for content areas`]}),`
`,(0,g.jsxs)(r.li,{children:[(0,g.jsx)(r.code,{children:`fullscreen`}),`: fullscreen overlay spinner`]}),`
`]}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(r.h2,{id:`deprecated-component`,children:`Deprecated Component`}),`
`,(0,g.jsxs)(r.p,{children:[(0,g.jsx)(r.code,{children:`SquareLoader`}),` is still available and behaves exactly like the previous Loader implementation.`]}),`
`,(0,g.jsx)(r.h3,{id:`modes`,children:`Modes`}),`
`,(0,g.jsxs)(r.p,{children:[`The square loader has 6 modes and a `,(0,g.jsx)(r.code,{children:`none`}),` mode to disable it. Each mode will display a different text, which can be overloaded via the `,(0,g.jsx)(r.code,{children:`text`}),` prop.`]}),`
`,(0,g.jsxs)(`table`,{children:[(0,g.jsx)(`thead`,{children:(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`th`,{children:`Mode`}),(0,g.jsx)(`th`,{children:`Text`})]})}),(0,g.jsxs)(`tbody`,{children:[(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:`none`}),(0,g.jsx)(`td`,{})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:`get`}),(0,g.jsx)(`td`,{children:`Chargement en cours`})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:`post`}),(0,g.jsx)(`td`,{children:`Sauvegarde en cours`})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:`delete`}),(0,g.jsx)(`td`,{children:`Suppression en cours`})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:`update`}),(0,g.jsx)(`td`,{children:`Mise à jour en cours`})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:`error`}),(0,g.jsx)(`td`,{children:`Une erreur est survenue lors du chargement du composant`})]})]})]}),`
`,(0,g.jsx)(i,{of:d})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=o(),s(),r(),f()}))();export{h as default};