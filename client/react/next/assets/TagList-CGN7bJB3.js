import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-BgokyfJG.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-DBqXnspb.js";import{a as c,i as l,n as u,r as d,t as f}from"./TagList.stories-aDCNsdo7.js";function p(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...s(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{of:d,name:`TagList`}),`
`,(0,h.jsx)(n.h1,{id:`taglist`,children:`TagList`}),`
`,(0,h.jsxs)(n.p,{children:[`Displays a list of `,(0,h.jsx)(n.code,{children:`Tag`}),` components. When the number of tags exceeds the `,(0,h.jsx)(n.code,{children:`hideThreshold`}),` (default: 2), only the first tags are shown and a `,(0,h.jsx)(n.code,{children:`+N`}),` tag indicates the number of hidden tags.`]}),`
`,(0,h.jsx)(n.h3,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`import { Tag, TagList } from "@axa-fr/canopee-react/client";
`})}),`
`,(0,h.jsx)(n.h3,{id:`use`,children:`Use`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-tsx`,children:`export const TagListComponent = () => (
  <TagList>
    <Tag>Remboursement</Tag>
    <Tag>Santé</Tag>
    <Tag>Auto</Tag>
  </TagList>
);
`})}),`
`,(0,h.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,h.jsx)(r,{of:u}),`
`,(0,h.jsx)(t,{of:u}),`
`,(0,h.jsx)(n.h2,{id:`with-overflow`,children:`With overflow`}),`
`,(0,h.jsxs)(n.p,{children:[`When the number of `,(0,h.jsx)(n.code,{children:`Tag`}),` components exceeds `,(0,h.jsx)(n.code,{children:`hideThreshold`}),`, the extra tags are hidden and replaced by a `,(0,h.jsx)(n.code,{children:`+N`}),` tag.`]}),`
`,(0,h.jsx)(r,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`custom-threshold`,children:`Custom threshold`}),`
`,(0,h.jsx)(r,{of:f}),`
`,(0,h.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsxs)(n.table,{children:[(0,h.jsx)(n.thead,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.th,{children:`Prop`}),(0,h.jsx)(n.th,{children:`Type`}),(0,h.jsx)(n.th,{children:`Default`}),(0,h.jsx)(n.th,{children:`Description`})]})}),(0,h.jsxs)(n.tbody,{children:[(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`children`})}),(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`ReactNode`})}),(0,h.jsx)(n.td,{children:`-`}),(0,h.jsxs)(n.td,{children:[`Child `,(0,h.jsx)(n.code,{children:`Tag`}),` components to display`]})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`hideThreshold`})}),(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`number`})}),(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`2`})}),(0,h.jsxs)(n.td,{children:[`Max number of visible tags before showing the `,(0,h.jsx)(n.code,{children:`+N`}),` tag`]})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`className`})}),(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`string`})}),(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`''`})}),(0,h.jsx)(n.td,{children:`Custom CSS classes added to the container`})]})]})]})]})}function m(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=a(),o(),n(),c()})))()}g();export{m as default};