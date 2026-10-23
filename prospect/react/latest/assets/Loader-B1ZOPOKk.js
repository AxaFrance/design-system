import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-DwCjzDam.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-BYpdgX0H.js";import{n as c,r as l,t as u}from"./Loader.stories-DbvM5ovO.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u,name:`Loader`}),`
`,(0,p.jsx)(n.h1,{id:`loader`,children:`Loader`}),`
`,(0,p.jsx)(n.p,{children:`Animated loading indicator with a required title and an optional subtitle. Uses the Design System's internal Spinner component.`}),`
`,(0,p.jsx)(n.h2,{id:`import`,children:`Import`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Loader } from "@axa-fr/canopee-react/prospect";

const App = () => <Loader title="Loading" subtitle="Please wait" />;
`})}),`
`,(0,p.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(t,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsxs)(n.table,{children:[(0,p.jsx)(n.thead,{children:(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.th,{children:`Prop`}),(0,p.jsx)(n.th,{children:`Type`}),(0,p.jsx)(n.th,{children:`Default`}),(0,p.jsx)(n.th,{children:`Description`})]})}),(0,p.jsxs)(n.tbody,{children:[(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`title`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`string`})}),(0,p.jsx)(n.td,{children:`-`}),(0,p.jsx)(n.td,{children:`Loader title (required)`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`subtitle`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`string`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`undefined`})}),(0,p.jsx)(n.td,{children:`Loader subtitle (optional)`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`spinnerProps`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`SpinnerProps`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`{}`})}),(0,p.jsx)(n.td,{children:`Props passed to the Spinner`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`className`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`string`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`undefined`})}),(0,p.jsx)(n.td,{children:`Custom CSS classes`})]})]})]}),`
`,(0,p.jsx)(n.h2,{id:`bem-classes`,children:`BEM Classes`}),`
`,(0,p.jsxs)(n.table,{children:[(0,p.jsx)(n.thead,{children:(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.th,{children:`Class`}),(0,p.jsx)(n.th,{children:`Description`})]})}),(0,p.jsxs)(n.tbody,{children:[(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`.af-loader`})}),(0,p.jsx)(n.td,{children:`Main block`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`.af-loader__content`})}),(0,p.jsx)(n.td,{children:`Text container`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`.af-loader__title`})}),(0,p.jsx)(n.td,{children:`Title`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`.af-loader__subtitle`})}),(0,p.jsx)(n.td,{children:`Subtitle`})]})]})]}),`
`,(0,p.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[`✅ `,(0,p.jsx)(n.code,{children:`status`}),` role to notify assistive technologies of loading state`]}),`
`,(0,p.jsxs)(n.li,{children:[`✅ Accessible title via `,(0,p.jsx)(n.code,{children:`aria-label`})]}),`
`,(0,p.jsx)(n.li,{children:`✅ Minimum 4.5:1 contrast ratio for text`}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`technical-notes`,children:`Technical Notes`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsx)(n.li,{children:`The component reuses the Design System's Spinner`}),`
`,(0,p.jsxs)(n.li,{children:[`Spinner props can be customized via `,(0,p.jsx)(n.code,{children:`spinnerProps`})]}),`
`,(0,p.jsxs)(n.li,{children:[`Strict BEM with `,(0,p.jsx)(n.code,{children:`af-`}),` prefix`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=a(),o(),n(),l()})))()}m();export{f as default};