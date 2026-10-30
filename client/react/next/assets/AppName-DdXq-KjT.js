import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-BgokyfJG.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-DBqXnspb.js";import{n as c,r as l,t as u}from"./AppName.stories-BOme-nsj.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u,name:`AppName`}),`
`,(0,p.jsx)(n.h1,{id:`appname`,children:`AppName`}),`
`,(0,p.jsxs)(n.p,{children:[`Displays the application name alongside the AXA logo. Typically placed inside the `,(0,p.jsx)(n.code,{children:`Header`}),` component.`]}),`
`,(0,p.jsx)(n.p,{children:`To use it, import it from the client package:`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { AppName } from "@axa-fr/canopee-react/client";

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
`,(0,p.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(t,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsxs)(n.table,{children:[(0,p.jsx)(n.thead,{children:(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.th,{children:`Prop`}),(0,p.jsx)(n.th,{children:`Type`}),(0,p.jsx)(n.th,{children:`Default`}),(0,p.jsx)(n.th,{children:`Description`})]})}),(0,p.jsxs)(n.tbody,{children:[(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`label`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`string`})}),(0,p.jsx)(n.td,{children:`—`}),(0,p.jsxs)(n.td,{children:[`Application name displayed next to the logo. `,(0,p.jsx)(n.strong,{children:`Required.`})]})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`logoAlt`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`string`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`"Logo AXA"`})}),(0,p.jsx)(n.td,{children:`Alt text for the AXA logo image.`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`logoLinkProps`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`Record<string, unknown>`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`undefined`})}),(0,p.jsxs)(n.td,{children:[`Props forwarded to the wrapping `,(0,p.jsx)(n.code,{children:`<a>`}),` tag (or `,(0,p.jsx)(n.code,{children:`LogoLinkComponent`}),`). When provided without `,(0,p.jsx)(n.code,{children:`LogoLinkComponent`}),`, a native `,(0,p.jsx)(n.code,{children:`<a>`}),` is rendered.`]})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`LogoLinkComponent`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`ComponentType`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`undefined`})}),(0,p.jsxs)(n.td,{children:[`Custom link component (e.g. `,(0,p.jsx)(n.code,{children:`Link`}),` from React Router) used to wrap the logo.`]})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`className`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`string`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`undefined`})}),(0,p.jsxs)(n.td,{children:[`Additional CSS class applied to the root `,(0,p.jsx)(n.code,{children:`div`}),`.`]})]})]})]}),`
`,(0,p.jsxs)(n.p,{children:[`Any other prop is forwarded to the root `,(0,p.jsx)(n.code,{children:`<div>`}),` element.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=a(),o(),n(),l()})))()}m();export{f as default};