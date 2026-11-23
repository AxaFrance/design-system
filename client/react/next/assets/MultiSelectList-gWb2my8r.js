import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-CZv_J0c4.js";import{i,l as a,n as o,s}from"./blocks-D6-m19dr.js";import{i as c,n as l,r as u,t as d}from"./MultiSelectList.stories-CBC8KjO-.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...r(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{of:d,name:`MultiSelectList`}),`
`,(0,m.jsx)(t.h1,{id:`multiselectlist`,children:`MultiSelectList`}),`
`,(0,m.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { MultiSelectList } from "@axa-fr/canopee-react/client";
`})}),`
`,(0,m.jsx)(t.h2,{id:`uses`,children:`Uses`}),`
`,(0,m.jsxs)(t.p,{children:[`The `,(0,m.jsx)(t.code,{children:`MultiSelectList`}),` component displays a list of `,(0,m.jsx)(t.code,{children:`ItemMultiSelect`}),`
checkboxes. The items alternate between the `,(0,m.jsx)(t.code,{children:`primary`}),` and `,(0,m.jsx)(t.code,{children:`secondary`}),`
variants.`]}),`
`,(0,m.jsxs)(t.p,{children:[`Each item requires an `,(0,m.jsx)(t.code,{children:`id`}),` and a `,(0,m.jsx)(t.code,{children:`label`}),`. Items also accept the native input
props of an HTML checkbox, such as `,(0,m.jsx)(t.code,{children:`checked`}),`, `,(0,m.jsx)(t.code,{children:`disabled`}),`, `,(0,m.jsx)(t.code,{children:`name`}),`,
`,(0,m.jsx)(t.code,{children:`aria-*`}),`, `,(0,m.jsx)(t.code,{children:`className`}),` and `,(0,m.jsx)(t.code,{children:`onChange`}),`. These item-level props allow the input
configuration to be customized for each option.`]}),`
`,(0,m.jsx)(t.h3,{id:`item-type`,children:`Item type`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`type MultiSelectListItem = Omit<
  React.ComponentProps<"input">,
  "type" | "id"
> & {
  id: string;
  label: React.ReactNode;
  variant?: "primary" | "secondary";
};

type MultiSelectListProps = {
  items: MultiSelectListItem[];
};
`})}),`
`,(0,m.jsx)(t.h3,{id:`multiselectlist-1`,children:`MultiSelectList`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`const items = [
  {
    id: "option-1",
    label: "Option 1",
    name: "options",
    "aria-label": "Select Option 1",
  },
  {
    id: "option-2",
    label: "Option 2",
    checked: true,
    disabled: false,
  },
];

<MultiSelectList items={items} />;
`})}),`
`,(0,m.jsx)(t.h3,{id:`multiselectlist-3-items`,children:`MultiSelectList 3 items`}),`
`,(0,m.jsx)(o,{of:u}),`
`,(0,m.jsx)(i,{of:u}),`
`,(0,m.jsx)(t.h3,{id:`multiselectlist-6-items`,children:`MultiSelectList 6 items`}),`
`,(0,m.jsx)(o,{of:l}),`
`,(0,m.jsx)(i,{of:l})]})}function p(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=t(),n(),a(),c()})))()}h();export{p as default};