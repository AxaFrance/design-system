import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-BTc3SoZK.js";import{t as r}from"./mdx-react-shim-CprXMtO8.js";import{l as i,n as a,s as o}from"./blocks-DTUWMSZh.js";import{Playground as s,n as c,t as l}from"./TabMenu.stories-DR-PEQEM.js";function u(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{of:l,name:`TabMenu`}),`
`,(0,f.jsx)(t.h2,{id:`tabmenu`,children:`TabMenu`}),`
`,(0,f.jsx)(t.p,{children:`Horizontal navigation component presented as a list of elements. Handles keyboard navigation with arrow key support.`}),`
`,(0,f.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`import { TabMenu, type TabMenuItemProps } from "@axa-fr/canopee-react/prospect";
`})}),`
`,(0,f.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`export const TabMenuComponent = () => {
  const items: TabMenuItemProps[] = [
    { href: "#contracts", label: "My contracts", isActive: true },
    { href: "#claims", label: "My claims" },
    { href: "#documents", label: "My documents" },
  ];

  return <TabMenu items={items} />;
};
`})}),`
`,(0,f.jsx)(t.h3,{id:`props`,children:`Props`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`items`}),`: `,(0,f.jsx)(t.code,{children:`TabMenuItemProps[]`}),` (optional) - Array of items to display`,`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`href`}),`: Destination URL`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`label`}),`: Text displayed in the menu`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`isActive`}),`: Boolean indicating the active element`]}),`
`]}),`
`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`initialPosition`}),`: `,(0,f.jsx)(t.code,{children:`number`}),` (optional) - Initial position (default: 0)`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`className`}),`: Custom CSS class (optional)`]}),`
`]}),`
`,(0,f.jsx)(t.h3,{id:`keyboard-navigation`,children:`Keyboard Navigation`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`ArrowRight / ArrowDown`}),`: Next element`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.strong,{children:`ArrowLeft / ArrowUp`}),`: Previous element`]}),`
`,(0,f.jsx)(t.li,{children:`Elements are cyclic (last → first)`}),`
`]}),`
`,(0,f.jsx)(t.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[`Returns `,(0,f.jsx)(t.code,{children:`null`}),` if no items are provided`]}),`
`,(0,f.jsx)(t.li,{children:`The first element is focusable by default (tabIndex="0")`}),`
`,(0,f.jsx)(t.li,{children:`Other elements have tabIndex="-1"`}),`
`,(0,f.jsx)(t.li,{children:`Keyboard accessible navigation for better accessibility`}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,f.jsx)(a,{of:s})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),r(),i(),c()}))();export{d as default};