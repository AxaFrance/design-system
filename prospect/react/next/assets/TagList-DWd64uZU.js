import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-Bp1SkCPw.js";import{t as r}from"./mdx-react-shim-BfBOEbVV.js";import{i,l as a,n as o,s}from"./blocks-RzAW8Fvc.js";import{CustomThreshold as c,Default as l,WithOverflow as u,n as d,t as f}from"./TagList.stories-DLhkDUg5.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:f,name:`TagList`}),`
`,(0,h.jsx)(t.h1,{id:`taglist`,children:`TagList`}),`
`,(0,h.jsxs)(t.p,{children:[`Displays a list of `,(0,h.jsx)(t.code,{children:`Tag`}),` components. When the number of tags exceeds the `,(0,h.jsx)(t.code,{children:`hideThreshold`}),` (default: 2), only the first tags are shown and a `,(0,h.jsx)(t.code,{children:`+N`}),` tag indicates the number of hidden tags.`]}),`
`,(0,h.jsx)(t.h3,{id:`import`,children:`Import`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { Tag, TagList } from "@axa-fr/canopee-react/prospect";
`})}),`
`,(0,h.jsx)(t.h3,{id:`use`,children:`Use`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`export const TagListComponent = () => (
  <TagList>
    <Tag>Remboursement</Tag>
    <Tag>Santé</Tag>
    <Tag>Auto</Tag>
  </TagList>
);
`})}),`
`,(0,h.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(t.h2,{id:`with-overflow`,children:`With overflow`}),`
`,(0,h.jsxs)(t.p,{children:[`When the number of `,(0,h.jsx)(t.code,{children:`Tag`}),` components exceeds `,(0,h.jsx)(t.code,{children:`hideThreshold`}),`, the extra tags are hidden and replaced by a `,(0,h.jsx)(t.code,{children:`+N`}),` tag.`]}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`custom-threshold`,children:`Custom threshold`}),`
`,(0,h.jsx)(o,{of:c}),`
`,(0,h.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,h.jsxs)(t.table,{children:[(0,h.jsx)(t.thead,{children:(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.th,{children:`Prop`}),(0,h.jsx)(t.th,{children:`Type`}),(0,h.jsx)(t.th,{children:`Default`}),(0,h.jsx)(t.th,{children:`Description`})]})}),(0,h.jsxs)(t.tbody,{children:[(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`children`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`ReactNode`})}),(0,h.jsx)(t.td,{children:`-`}),(0,h.jsxs)(t.td,{children:[`Child `,(0,h.jsx)(t.code,{children:`Tag`}),` components to display`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`hideThreshold`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`number`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`2`})}),(0,h.jsxs)(t.td,{children:[`Max number of visible tags before showing the `,(0,h.jsx)(t.code,{children:`+N`}),` tag`]})]}),(0,h.jsxs)(t.tr,{children:[(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`className`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`string`})}),(0,h.jsx)(t.td,{children:(0,h.jsx)(t.code,{children:`''`})}),(0,h.jsx)(t.td,{children:`Custom CSS classes added to the container`})]})]})]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),r(),a(),d()}))();export{m as default};