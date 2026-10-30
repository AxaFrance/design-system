import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o}from"./iframe-CjUrzS1v.js";import{i as s,r as c,t as l}from"./ExperimentalRestitution.stories-CEzJUtkB.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(t.h1,{id:`️-restitution`,children:`⚠️ Restitution`}),`
`,(0,f.jsx)(t.h2,{id:`experimental-disclaimer`,children:`Experimental disclaimer`}),`
`,(0,f.jsx)(t.p,{children:`This component is currently in an experimental phase, which means that its API and design are not yet finalized and may undergo significant changes. We encourage you to try it out and provide feedback, but please be aware that it may not be stable and should not be used in production environments.`}),`
`,(0,f.jsx)(t.p,{children:(0,f.jsxs)(t.strong,{children:[`Imports for the demo component and the component tree sections are from the `,(0,f.jsx)(t.code,{children:`distributeur-experimental`}),` entry point, which is a separate entry point from the main `,(0,f.jsx)(t.code,{children:`distributeur`}),` entry point. This allows us to keep the experimental components separate from the stable components and avoid breaking changes in the main entry point.`]})}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-ts`,children:`import {
  ExperimentalRestitution,
  ExperimentalRestitutionColumn,
  ExperimentalRestitutionLabelValue,
  ExperimentalRestitutionListDef,
  ExperimentalRestitutionRow,
  ExperimentalRestitutionSection,
  ExperimentalRestitutionValueList,
} from "@axa-fr/canopee-react/distributeur-experimental";
`})}),`
`,(0,f.jsx)(t.h2,{id:`introduction`,children:`Introduction`}),`
`,(0,f.jsx)(t.p,{children:`The restitution component is a layout component that allows you to display data in a structured way.
It is composed of several components:`}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`ExperimentalRestitution`}),`: The main container for the restitution layout.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`ExperimentalRestitutionRow`}),`: A row of the restitution layout that can contain multiple columns`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`ExperimentalRestitutionSection`}),`: A section within a row that can contain multiple columns`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`ExperimentalRestitutionColumn`}),`: A column of content`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`ExperimentalRestitutionListDef`}),`: A component that can be used to display a definition list in a column`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`ExperimentalRestitutionLabelValue`}),`: A component that can be used to display a label/value pair inside a ListDef`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`ExperimentalRestitutionValueList`}),`: A component that can be used to display a value as a list of items inside a ListDef`]}),`
`]}),`
`,(0,f.jsx)(t.h2,{id:`demo-component`,children:`Demo component`}),`
`,(0,f.jsx)(r,{of:c}),`
`,(0,f.jsx)(t.h2,{id:`component-tree`,children:`Component tree`}),`
`,(0,f.jsx)(t.p,{children:`The components are expected to be used in a specific order, as shown in the following tree. Other combinations may not be supported and may lead to unexpected results.`}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`<ExperimentalRestitution>
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
`,(0,f.jsx)(t.h3,{id:`experimentalrestitution`,children:`ExperimentalRestitution`}),`
`,(0,f.jsxs)(t.p,{children:[`The `,(0,f.jsx)(t.code,{children:`ExperimentalRestitution`}),` component is the main container for the restitution layout. It `,(0,f.jsx)(t.strong,{children:`may`}),` have a header, and contains one or more `,(0,f.jsx)(t.code,{children:`ExperimentalRestitutionRow`}),` components.
It accepts the following props:`]}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`title`}),`: The title of the restitution, which will be displayed in the header. If this prop is not provided, the header will not be displayed.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`subtitle`}),`: The subtitle of the restitution, which will be displayed in the header. This prop is optional and will only be displayed if the `,(0,f.jsx)(t.code,{children:`title`}),` prop is provided.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`rightElement`}),`: An element that will be displayed on the right side of the header. This prop is optional and will only be displayed if the `,(0,f.jsx)(t.code,{children:`title`}),` prop is provided.`]}),`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`children`}),`: The content of the restitution, which should be composed of `,(0,f.jsx)(t.code,{children:`ExperimentalRestitutionRow`}),` components.`]}),`
`]}),`
`,(0,f.jsx)(t.h3,{id:`experimentalrestitutionrow`,children:`ExperimentalRestitutionRow`}),`
`,(0,f.jsxs)(t.p,{children:[`The `,(0,f.jsx)(t.code,{children:`ExperimentalRestitutionRow`}),` component represents a row in the restitution layout. It can contain one or more `,(0,f.jsx)(t.code,{children:`ExperimentalRestitutionSection`}),` components. If the container shrinks too much, the sections will wrap to the next line.`]}),`
`,(0,f.jsx)(t.h3,{id:`experimentalrestitutionsection`,children:`ExperimentalRestitutionSection`}),`
`,(0,f.jsxs)(t.p,{children:[`A group of columns with a title. The title is optional, but if provided, it will be displayed above the columns. It can contain one or more `,(0,f.jsx)(t.code,{children:`ExperimentalRestitutionColumn`}),` components.`]}),`
`,(0,f.jsx)(t.h3,{id:`experimentalrestitutioncolumn`,children:`ExperimentalRestitutionColumn`}),`
`,(0,f.jsxs)(t.p,{children:[`A column of content. It can contain any content, but it is recommended to use `,(0,f.jsx)(t.code,{children:`ExperimentalRestitutionListDef`}),` to display data in a structured way.`]}),`
`,(0,f.jsx)(t.h3,{id:`experimentalrestitutionlistdef`,children:`ExperimentalRestitutionListDef`}),`
`,(0,f.jsxs)(t.p,{children:[`The `,(0,f.jsx)(t.code,{children:`ExperimentalRestitutionListDef`}),` component is used to display a definition list in a column. It should contain `,(0,f.jsx)(t.code,{children:`ExperimentalRestitutionLabelValue`}),` components. It uses a `,(0,f.jsx)(t.code,{children:`dl`}),` element under the hood, so it is important to use the correct components to ensure proper semantics and accessibility.`]}),`
`,(0,f.jsx)(t.h3,{id:`experimentalrestitutionlabelvalue`,children:`ExperimentalRestitutionLabelValue`}),`
`,(0,f.jsxs)(t.p,{children:[`The `,(0,f.jsx)(t.code,{children:`ExperimentalRestitutionLabelValue`}),` component is used to display a label/value pair inside a `,(0,f.jsx)(t.code,{children:`ExperimentalRestitutionListDef`}),`. It wraps `,(0,f.jsx)(t.code,{children:`ExperimentalRestitutionItem`}),` and `,(0,f.jsx)(t.code,{children:`ExperimentalRestitutionValue`}),` under the hood to preserve `,(0,f.jsx)(t.code,{children:`dt`}),`/`,(0,f.jsx)(t.code,{children:`dd`}),` semantics while simplifying usage.`]}),`
`,(0,f.jsx)(t.h3,{id:`experimentalrestitutionvaluelist`,children:`ExperimentalRestitutionValueList`}),`
`,(0,f.jsxs)(t.p,{children:[`The `,(0,f.jsx)(t.code,{children:`ExperimentalRestitutionValueList`}),` component is used to display a value as a list of items inside `,(0,f.jsx)(t.code,{children:`ExperimentalRestitutionLabelValue`}),` (through its `,(0,f.jsx)(t.code,{children:`value`}),` prop). It allows to properly align the items in the list with the label. It uses a `,(0,f.jsx)(t.code,{children:`ul`}),` element under the hood.
It takes the following props:`]}),`
`,(0,f.jsxs)(t.ul,{children:[`
`,(0,f.jsxs)(t.li,{children:[(0,f.jsx)(t.code,{children:`items`}),`: An array of `,(0,f.jsx)(t.code,{children:`ReactNode`}),`s to display as list items. Each item will be rendered as a `,(0,f.jsx)(t.code,{children:`li`}),` element inside the `,(0,f.jsx)(t.code,{children:`ul`}),`.`]}),`
`]})]})}function d(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=t(),a(),o(),s()})))()}p();export{d as default};