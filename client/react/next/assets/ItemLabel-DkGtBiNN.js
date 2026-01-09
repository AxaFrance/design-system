import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as d}from"./index-DSfWgH82.js";import"./index-CPudGdng.js";import{I as i,P as r}from"./ItemLabel.stories-6esGilB1.js";import{M as s,C as o,a as c}from"./index-BakQPdb8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./preview-CAdxMTzd.js";import"./iframe-DcMxSSFy.js";import"./DocsRenderer-CFRXHY34-if4cGxP_.js";import"./react-18-C_RNIbSA.js";import"./SkeletonLF-DuPY_heS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function l(t){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i,name:"ItemLabel"}),`
`,e.jsx(n.h1,{id:"itemlabel",children:"ItemLabel"}),`
`,e.jsxs(n.p,{children:[`The ItemLabel component renders an accessible form label with optional description text and optional action buttons.
It is designed to closely follow native `,e.jsx(n.code,{children:"<label>"})," semantics so that it integrates naturally with form controls and assistive technologies."]}),`
`,e.jsx(n.p,{children:"Example usage:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ItemLabel } from "@axa-fr/canopee-react/client";

const MyComponent = () => (
  <ItemLabel description="Description Text">Label Text</ItemLabel>
);
`})}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:["The ItemLabel inherits all native ",e.jsx(n.code,{children:"<label>"})," props and in addition exposes the following component-specific props:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"children"})}),e.jsx(n.td,{children:"ReactNode"}),e.jsx(n.td,{children:"-"}),e.jsxs(n.td,{children:["Label content (preferred over deprecated ",e.jsx(n.code,{children:"label"}),")."]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"label"})," (deprecated)"]}),e.jsx(n.td,{children:"ReactNode"}),e.jsx(n.td,{children:"-"}),e.jsxs(n.td,{children:["Deprecated: use ",e.jsx(n.code,{children:"children"})," instead."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"description"})}),e.jsx(n.td,{children:"ReactNode"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Additional descriptive text displayed below/next to the label."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"required"})}),e.jsx(n.td,{children:"boolean"}),e.jsx(n.td,{children:"false"}),e.jsx(n.td,{children:"When true, shows a visual required indicator (asterisk)."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"htmlFor"})}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Native label attribute linking the label to a control's id. Inherited from native label props."})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"inputId"})," (deprecated)"]}),e.jsx(n.td,{children:"string"}),e.jsx(n.td,{children:"-"}),e.jsxs(n.td,{children:["Deprecated: use ",e.jsx(n.code,{children:"htmlFor"})," instead."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sideButtonLabel"})}),e.jsx(n.td,{children:"ReactNode"}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Label/content for the optional side action button."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onSideButtonClick"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"MouseEventHandler<HTMLButtonElement>"})}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Click handler for the side button."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sideButtonProps"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Partial<ButtonProps>"})," (omitted keys: children,onClick,variant,className)"]}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Additional props forwarded to the side button (use for ARIA attributes, keyboard handlers, etc.)."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"moreButtonLabel"})}),e.jsx(n.td,{children:"ReactNode"}),e.jsx(n.td,{children:"-"}),e.jsxs(n.td,{children:["Label/content for the optional more/info button (preferred over deprecated ",e.jsx(n.code,{children:"buttonLabel"}),")."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onMoreButtonClick"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"MouseEventHandler<HTMLButtonElement>"})}),e.jsx(n.td,{children:"-"}),e.jsxs(n.td,{children:["Click handler for the more/info button (preferred over deprecated ",e.jsx(n.code,{children:"onButtonClick"}),")."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"moreButtonProps"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"Partial<ButtonProps>"})," (omitted keys: children,onClick,variant,className)"]}),e.jsx(n.td,{children:"-"}),e.jsx(n.td,{children:"Additional props forwarded to the more/info button (use for ARIA attributes, aria-haspopup, aria-controls, etc.)."})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"buttonLabel"})," (deprecated)"]}),e.jsx(n.td,{children:"ReactNode"}),e.jsx(n.td,{children:"-"}),e.jsxs(n.td,{children:["Deprecated: use ",e.jsx(n.code,{children:"moreButtonLabel"})," instead."]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"onButtonClick"})," (deprecated)"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"MouseEventHandler<HTMLButtonElement>"})}),e.jsx(n.td,{children:"-"}),e.jsxs(n.td,{children:["Deprecated: use ",e.jsx(n.code,{children:"onMoreButtonClick"})," instead."]})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: most native ",e.jsx(n.code,{children:"<label>"})," attributes (for example ",e.jsx(n.code,{children:"htmlFor"}),", ",e.jsx(n.code,{children:"onClick"}),", etc.) are forwarded to the internal ",e.jsx(n.code,{children:"<label>"})," element.",e.jsx(n.br,{}),`
`,"However, ",e.jsx(n.code,{children:"className"})," and ",e.jsx(n.code,{children:"style"})," passed to ",e.jsx(n.code,{children:"ItemLabel"})," are applied to the outer container ",e.jsx(n.code,{children:"<div>"})," (the component wrapper), not to the inner ",e.jsx(n.code,{children:"<label>"}),`.
To target the inner label for styling, use the `,e.jsx(n.code,{children:".af-item-label__label"})," selector or a wrapper selector (for example ",e.jsx(n.code,{children:".af-item-label .af-item-label__label"}),")."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(c,{of:r}),`
`,e.jsxs(n.h2,{id:"using-sidebuttonprops-and-morebuttonprops-accessibility-focused-examples",children:["Using ",e.jsx(n.code,{children:"sideButtonProps"})," and ",e.jsx(n.code,{children:"moreButtonProps"})," (accessibility-focused examples)"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ItemLabel"})," supports optional action buttons next to the label: a side action (",e.jsx(n.code,{children:"sideButtonLabel"})," / ",e.jsx(n.code,{children:"sideButtonProps"}),") and a more/info action (",e.jsx(n.code,{children:"moreButtonLabel"})," / ",e.jsx(n.code,{children:"moreButtonProps"}),"). Use the ",e.jsx(n.code,{children:"*ButtonProps"})," objects to add accessibility attributes and keyboard behavior to these buttons."]}),`
`,e.jsx(n.p,{children:"Best practices:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ensure each button has an accessible name (prefer the visible label or an explicit ",e.jsx(n.code,{children:"aria-label"}),")."]}),`
`,e.jsxs(n.li,{children:["If the button toggles a popup or menu, include ",e.jsx(n.code,{children:"aria-haspopup"})," and maintain ",e.jsx(n.code,{children:"aria-expanded"})," on the button."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"aria-controls"})," to point to the id of a controlled popup region."]}),`
`,e.jsxs(n.li,{children:["Keep interactive behavior keyboard-friendly (",e.jsx(n.code,{children:"onKeyDown"})," handlers for Enter/Space if necessary)."]}),`
`]}),`
`,e.jsx(n.p,{children:"Examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Simple side button with explicit aria-label"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ItemLabel
  htmlFor="file-input"
  sideButtonLabel="Browse"
  sideButtonProps={{ "aria-label": "Browse files" }}
>
  Upload file
</ItemLabel>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"More button that toggles a help panel (aria-expanded + aria-controls)"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ItemLabel
  htmlFor="file-input"
  moreButtonLabel="Help"
  moreButtonProps={{
    "aria-label": "More information about the file input",
    "aria-haspopup": "dialog",
    "aria-expanded": false,
    "aria-controls": "file-input-help",
  }}
>
  Upload file
</ItemLabel>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Example with keyboard handler on side button (in MDX examples this is illustrative):"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ItemLabel
  htmlFor="file-input"
  sideButtonLabel="Browse"
  sideButtonProps={{
    "aria-label": "Browse files",
    onKeyDown: (e) => {
      // Activate on Enter or Space to match button semantics
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        // call whatever function opens the file picker
      }
    },
  }}
>
  Upload file
</ItemLabel>
`})}),`
`,e.jsxs(n.p,{children:["Notes about ",e.jsx(n.code,{children:"Button"})," accessibility"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ItemLabel forwards ",e.jsx(n.code,{children:"sideButtonProps"})," and ",e.jsx(n.code,{children:"moreButtonProps"})," to the underlying Button component. Use these props to supply ARIA attributes and event handlers."]}),`
`,e.jsxs(n.li,{children:["Prefer visible button text as the accessible name. If you use an icon-only button, provide ",e.jsx(n.code,{children:"aria-label"})," or ",e.jsx(n.code,{children:"aria-labelledby"})," that contains the same text a sighted user would read."]}),`
`,e.jsxs(n.li,{children:["Avoid using ",e.jsx(n.code,{children:"tabIndex"})," to force focusability for non-interactive elements; buttons are focusable by default."]}),`
`]}),`
`,e.jsx(n.h2,{id:"migration-guide--deprecated-props",children:"Migration guide — deprecated props"}),`
`,e.jsx(n.p,{children:"The ItemLabel component has evolved to follow native HTML label semantics more closely. Some props were deprecated to encourage clearer, more standard usage. Below is a mapping of deprecated props and how to migrate."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label"})," -> use ",e.jsx(n.code,{children:"children"})," (pass the label text as children of ",e.jsx(n.code,{children:"<ItemLabel>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"inputId"})," -> ",e.jsx(n.code,{children:"htmlFor"})," (mirrors the native ",e.jsx(n.code,{children:"label"})," attribute pointing to the input's id)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"buttonLabel"})," -> ",e.jsx(n.code,{children:"moreButtonLabel"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"onButtonClick"})," -> ",e.jsx(n.code,{children:"onMoreButtonClick"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Why change?"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Using ",e.jsx(n.code,{children:"children"})," for the label content matches how a native ",e.jsx(n.code,{children:"<label>"})," is used and avoids confusion between presentation vs content props."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"htmlFor"})," is the native attribute name and directly maps to the ",e.jsx(n.code,{children:"for"})," attribute on a ",e.jsx(n.code,{children:"<label>"}),", which is what assistive tech expects."]}),`
`,e.jsxs(n.li,{children:["More explicit prop names (",e.jsx(n.code,{children:"moreButtonLabel"}),", ",e.jsx(n.code,{children:"onMoreButtonClick"}),") clarify intent and reduce ambiguity."]}),`
`]}),`
`,e.jsx(n.p,{children:"Migration examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Before (deprecated)"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ItemLabel
  label="Email address"
  inputId="email-input"
  buttonLabel="Info"
  onButtonClick={handleInfo}
/>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"After (current)"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ItemLabel
  htmlFor="email-input"
  moreButtonLabel="Info"
  onMoreButtonClick={handleInfo}
>
  Email address
</ItemLabel>
`})})]})}function w(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{w as default};
