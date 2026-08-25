import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-BOfD6C1_.js";import{t as r}from"./mdx-react-shim-DCU1h1tn.js";import{i,l as a,n as o,s}from"./blocks-qnNbQgKB.js";import{Playground as c,n as l,t as u}from"./AppName.stories-BfLsFqlW.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{of:u,name:`AppName`}),`
`,(0,p.jsx)(t.h1,{id:`appname`,children:`AppName`}),`
`,(0,p.jsxs)(t.p,{children:[`Displays the application name alongside the AXA logo. Typically placed inside the `,(0,p.jsx)(t.code,{children:`Header`}),` component.`]}),`
`,(0,p.jsx)(t.p,{children:`To use it, import it from the prospect package:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { AppName } from "@axa-fr/canopee-react/prospect";

// Logo only (no link)
const MyComponent = () => <AppName label="My application" />;

// Logo wrapped in a native anchor
const WithLink = () => (
  <AppName label="My application" logoLinkProps={{ href: "/" }} />
);

// Logo wrapped in a custom link component (e.g. React Router)
import { Link } from "react-router-dom";

const WithRouterLink = () => (
  <AppName
    label="My application"
    LogoLinkComponent={Link}
    logoLinkProps={{ to: "/" }}
  />
);
`})}),`
`,(0,p.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(o,{of:c}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`Prop`}),(0,p.jsx)(t.th,{children:`Type`}),(0,p.jsx)(t.th,{children:`Default`}),(0,p.jsx)(t.th,{children:`Description`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`label`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`string`})}),(0,p.jsx)(t.td,{children:`—`}),(0,p.jsxs)(t.td,{children:[`Application name displayed next to the logo. `,(0,p.jsx)(t.strong,{children:`Required.`})]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`logoAlt`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`string`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`"Logo AXA"`})}),(0,p.jsx)(t.td,{children:`Alt text for the AXA logo image.`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`logoLinkProps`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`Record<string, unknown>`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`undefined`})}),(0,p.jsxs)(t.td,{children:[`Props forwarded to the wrapping `,(0,p.jsx)(t.code,{children:`<a>`}),` tag (or `,(0,p.jsx)(t.code,{children:`LogoLinkComponent`}),`). When provided without `,(0,p.jsx)(t.code,{children:`LogoLinkComponent`}),`, a native `,(0,p.jsx)(t.code,{children:`<a>`}),` is rendered.`]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`LogoLinkComponent`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`ComponentType`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`undefined`})}),(0,p.jsxs)(t.td,{children:[`Custom link component (e.g. `,(0,p.jsx)(t.code,{children:`Link`}),` from React Router) used to wrap the logo.`]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`className`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`string`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`undefined`})}),(0,p.jsxs)(t.td,{children:[`Additional CSS class applied to the root `,(0,p.jsx)(t.code,{children:`div`}),`.`]})]})]})]}),`
`,(0,p.jsxs)(t.p,{children:[`Any other prop is forwarded to the root `,(0,p.jsx)(t.code,{children:`<div>`}),` element.`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),r(),a(),l()}))();export{f as default};