import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Djx0JYQN.js";import{m as n,s as r,u as i,w as a}from"./iframe-CKcycv95.js";import{t as o}from"./mdx-react-shim-DffEUA3Y.js";import s,{Restitution4x1 as c,t as l}from"./ExperimentalRestitution.stories-DsFpdWkz.js";function u(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:s}),`
`,(0,f.jsx)(n.h1,{id:`️-restitution`,children:`⚠️ Restitution`}),`
`,(0,f.jsx)(n.h2,{id:`experimental-disclaimer`,children:`Experimental disclaimer`}),`
`,(0,f.jsx)(n.p,{children:`This component is currently in an experimental phase, which means that its API and design are not yet finalized and may undergo significant changes. We encourage you to try it out and provide feedback, but please be aware that it may not be stable and should not be used in production environments.`}),`
`,(0,f.jsx)(n.p,{children:(0,f.jsxs)(n.strong,{children:[`Imports for the demo component and the component tree sections are from the `,(0,f.jsx)(n.code,{children:`distributeur-experimental`}),` entry point, which is a separate entry point from the main `,(0,f.jsx)(n.code,{children:`distributeur`}),` entry point. This allows us to keep the experimental components separate from the stable components and avoid breaking changes in the main entry point.`]})}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-ts`,children:`import {
  ExperimentalRestitution,
  ExperimentalRestitutionColumn,
  ExperimentalRestitutionLabelValue,
  ExperimentalRestitutionListDef,
  ExperimentalRestitutionRow,
  ExperimentalRestitutionSection,
  ExperimentalRestitutionValueList,
} from "@axa-fr/canopee-react/distributeur-experimental";
`})}),`
`,(0,f.jsx)(n.h2,{id:`introduction`,children:`Introduction`}),`
`,(0,f.jsx)(n.p,{children:`The restitution component is a layout component that allows you to display data in a structured way.
It is composed of several components:`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`ExperimentalRestitution`}),`: The main container for the restitution layout.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`ExperimentalRestitutionRow`}),`: A row of the restitution layout that can contain multiple columns`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`ExperimentalRestitutionSection`}),`: A section within a row that can contain multiple columns`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`ExperimentalRestitutionColumn`}),`: A column of content`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`ExperimentalRestitutionListDef`}),`: A component that can be used to display a definition list in a column`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`ExperimentalRestitutionLabelValue`}),`: A component that can be used to display a label/value pair inside a ListDef`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`ExperimentalRestitutionValueList`}),`: A component that can be used to display a value as a list of items inside a ListDef`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`demo-component`,children:`Demo component`}),`
`,(0,f.jsx)(r,{of:c}),`
`,(0,f.jsx)(n.h2,{id:`component-tree`,children:`Component tree`}),`
`,(0,f.jsx)(n.p,{children:`The components are expected to be used in a specific order, as shown in the following tree. Other combinations may not be supported and may lead to unexpected results.`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`<ExperimentalRestitution>
  <ExperimentalRestitutionRow>
    <ExperimentalRestitutionSection>
      <ExperimentalRestitutionColumn>
        <ExperimentalRestitutionListDef>
          <ExperimentalRestitutionLabelValue label="..." value="..." />
          <ExperimentalRestitutionLabelValue
            label="..."
            value={<ExperimentalRestitutionValueList />}
          />
        </ExperimentalRestitutionListDef>
      </ExperimentalRestitutionColumn>
    </ExperimentalRestitutionSection>
  </ExperimentalRestitutionRow>
</ExperimentalRestitution>
`})}),`
`,(0,f.jsx)(n.h3,{id:`experimentalrestitution`,children:`ExperimentalRestitution`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`ExperimentalRestitution`}),` component is the main container for the restitution layout. It `,(0,f.jsx)(n.strong,{children:`may`}),` have a header, and contains one or more `,(0,f.jsx)(n.code,{children:`ExperimentalRestitutionRow`}),` components.
It accepts the following props:`]}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`title`}),`: The title of the restitution, which will be displayed in the header. If this prop is not provided, the header will not be displayed.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`subtitle`}),`: The subtitle of the restitution, which will be displayed in the header. This prop is optional and will only be displayed if the `,(0,f.jsx)(n.code,{children:`title`}),` prop is provided.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`rightElement`}),`: An element that will be displayed on the right side of the header. This prop is optional and will only be displayed if the `,(0,f.jsx)(n.code,{children:`title`}),` prop is provided.`]}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`children`}),`: The content of the restitution, which should be composed of `,(0,f.jsx)(n.code,{children:`ExperimentalRestitutionRow`}),` components.`]}),`
`]}),`
`,(0,f.jsx)(n.h3,{id:`experimentalrestitutionrow`,children:`ExperimentalRestitutionRow`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`ExperimentalRestitutionRow`}),` component represents a row in the restitution layout. It can contain one or more `,(0,f.jsx)(n.code,{children:`ExperimentalRestitutionSection`}),` components. If the container shrinks too much, the sections will wrap to the next line.`]}),`
`,(0,f.jsx)(n.h3,{id:`experimentalrestitutionsection`,children:`ExperimentalRestitutionSection`}),`
`,(0,f.jsxs)(n.p,{children:[`A group of columns with a title. The title is optional, but if provided, it will be displayed above the columns. It can contain one or more `,(0,f.jsx)(n.code,{children:`ExperimentalRestitutionColumn`}),` components.`]}),`
`,(0,f.jsx)(n.h3,{id:`experimentalrestitutioncolumn`,children:`ExperimentalRestitutionColumn`}),`
`,(0,f.jsxs)(n.p,{children:[`A column of content. It can contain any content, but it is recommended to use `,(0,f.jsx)(n.code,{children:`ExperimentalRestitutionListDef`}),` to display data in a structured way.`]}),`
`,(0,f.jsx)(n.h3,{id:`experimentalrestitutionlistdef`,children:`ExperimentalRestitutionListDef`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`ExperimentalRestitutionListDef`}),` component is used to display a definition list in a column. It should contain `,(0,f.jsx)(n.code,{children:`ExperimentalRestitutionLabelValue`}),` components. It uses a `,(0,f.jsx)(n.code,{children:`dl`}),` element under the hood, so it is important to use the correct components to ensure proper semantics and accessibility.`]}),`
`,(0,f.jsx)(n.h3,{id:`experimentalrestitutionlabelvalue`,children:`ExperimentalRestitutionLabelValue`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`ExperimentalRestitutionLabelValue`}),` component is used to display a label/value pair inside a `,(0,f.jsx)(n.code,{children:`ExperimentalRestitutionListDef`}),`. It wraps `,(0,f.jsx)(n.code,{children:`ExperimentalRestitutionItem`}),` and `,(0,f.jsx)(n.code,{children:`ExperimentalRestitutionValue`}),` under the hood to preserve `,(0,f.jsx)(n.code,{children:`dt`}),`/`,(0,f.jsx)(n.code,{children:`dd`}),` semantics while simplifying usage.`]}),`
`,(0,f.jsx)(n.h3,{id:`experimentalrestitutionvaluelist`,children:`ExperimentalRestitutionValueList`}),`
`,(0,f.jsxs)(n.p,{children:[`The `,(0,f.jsx)(n.code,{children:`ExperimentalRestitutionValueList`}),` component is used to display a value as a list of items inside `,(0,f.jsx)(n.code,{children:`ExperimentalRestitutionLabelValue`}),` (through its `,(0,f.jsx)(n.code,{children:`value`}),` prop). It allows to properly align the items in the list with the label. It uses a `,(0,f.jsx)(n.code,{children:`ul`}),` element under the hood.
It takes the following props:`]}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`items`}),`: An array of `,(0,f.jsx)(n.code,{children:`ReactNode`}),`s to display as list items. Each item will be rendered as a `,(0,f.jsx)(n.code,{children:`li`}),` element inside the `,(0,f.jsx)(n.code,{children:`ul`}),`.`]}),`
`]})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=a(),o(),n(),l()}))();export{d as default};