import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-C8Tw6Lm5.js";import{t as r}from"./mdx-react-shim-B5BYO_WN.js";import{i,l as a,n as o,s}from"./blocks-B2Oe2WTt.js";import{Playground as c,n as l,t as u}from"./ItemLabel.stories-BrycwWL4.js";function d(e){let t={blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{of:u,name:`ItemLabel`}),`
`,(0,p.jsx)(t.h1,{id:`itemlabel`,children:`ItemLabel`}),`
`,(0,p.jsxs)(t.p,{children:[`The ItemLabel component renders an accessible form label with optional description text and optional action buttons.
It is designed to closely follow native `,(0,p.jsx)(t.code,{children:`<label>`}),` semantics so that it integrates naturally with form controls and assistive technologies.`]}),`
`,(0,p.jsx)(t.p,{children:`Example usage:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { ItemLabel } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <ItemLabel description="Description Text">Label Text</ItemLabel>
);
`})}),`
`,(0,p.jsx)(t.h3,{id:`props`,children:`Props`}),`
`,(0,p.jsxs)(t.p,{children:[`The ItemLabel inherits all native `,(0,p.jsx)(t.code,{children:`<label>`}),` props and in addition exposes the following component-specific props:`]}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`Prop`}),(0,p.jsx)(t.th,{children:`Type`}),(0,p.jsx)(t.th,{children:`Default`}),(0,p.jsx)(t.th,{children:`Description`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`children`})}),(0,p.jsx)(t.td,{children:`ReactNode`}),(0,p.jsx)(t.td,{children:`-`}),(0,p.jsxs)(t.td,{children:[`Label content (preferred over deprecated `,(0,p.jsx)(t.code,{children:`label`}),`).`]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`label`}),` (deprecated)`]}),(0,p.jsx)(t.td,{children:`ReactNode`}),(0,p.jsx)(t.td,{children:`-`}),(0,p.jsxs)(t.td,{children:[`Deprecated: use `,(0,p.jsx)(t.code,{children:`children`}),` instead.`]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`description`})}),(0,p.jsx)(t.td,{children:`ReactNode`}),(0,p.jsx)(t.td,{children:`-`}),(0,p.jsx)(t.td,{children:`Additional descriptive text displayed below/next to the label.`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`required`})}),(0,p.jsx)(t.td,{children:`boolean`}),(0,p.jsx)(t.td,{children:`false`}),(0,p.jsx)(t.td,{children:`When true, shows a visual required indicator (asterisk).`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`htmlFor`})}),(0,p.jsx)(t.td,{children:`string`}),(0,p.jsx)(t.td,{children:`-`}),(0,p.jsx)(t.td,{children:`Native label attribute linking the label to a control's id. Inherited from native label props.`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`inputId`}),` (deprecated)`]}),(0,p.jsx)(t.td,{children:`string`}),(0,p.jsx)(t.td,{children:`-`}),(0,p.jsxs)(t.td,{children:[`Deprecated: use `,(0,p.jsx)(t.code,{children:`htmlFor`}),` instead.`]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`sideButtonLabel`})}),(0,p.jsx)(t.td,{children:`ReactNode`}),(0,p.jsx)(t.td,{children:`-`}),(0,p.jsx)(t.td,{children:`Label/content for the optional side action button.`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`onSideButtonClick`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`MouseEventHandler<HTMLButtonElement>`})}),(0,p.jsx)(t.td,{children:`-`}),(0,p.jsx)(t.td,{children:`Click handler for the side button.`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`sideButtonProps`})}),(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`Partial<ButtonProps>`}),` (omitted keys: children,onClick,variant,className)`]}),(0,p.jsx)(t.td,{children:`-`}),(0,p.jsx)(t.td,{children:`Additional props forwarded to the side button (use for ARIA attributes, keyboard handlers, etc.).`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`moreButtonLabel`})}),(0,p.jsx)(t.td,{children:`ReactNode`}),(0,p.jsx)(t.td,{children:`-`}),(0,p.jsxs)(t.td,{children:[`Label/content for the optional more/info button (preferred over deprecated `,(0,p.jsx)(t.code,{children:`buttonLabel`}),`).`]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`onMoreButtonClick`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`MouseEventHandler<HTMLButtonElement>`})}),(0,p.jsx)(t.td,{children:`-`}),(0,p.jsxs)(t.td,{children:[`Click handler for the more/info button (preferred over deprecated `,(0,p.jsx)(t.code,{children:`onButtonClick`}),`).`]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`moreButtonProps`})}),(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`Partial<ButtonProps>`}),` (omitted keys: children,onClick,variant,className)`]}),(0,p.jsx)(t.td,{children:`-`}),(0,p.jsx)(t.td,{children:`Additional props forwarded to the more/info button (use for ARIA attributes, aria-haspopup, aria-controls, etc.).`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`buttonLabel`}),` (deprecated)`]}),(0,p.jsx)(t.td,{children:`ReactNode`}),(0,p.jsx)(t.td,{children:`-`}),(0,p.jsxs)(t.td,{children:[`Deprecated: use `,(0,p.jsx)(t.code,{children:`moreButtonLabel`}),` instead.`]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`onButtonClick`}),` (deprecated)`]}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`MouseEventHandler<HTMLButtonElement>`})}),(0,p.jsx)(t.td,{children:`-`}),(0,p.jsxs)(t.td,{children:[`Deprecated: use `,(0,p.jsx)(t.code,{children:`onMoreButtonClick`}),` instead.`]})]})]})]}),`
`,(0,p.jsxs)(t.blockquote,{children:[`
`,(0,p.jsxs)(t.p,{children:[`Note: most native `,(0,p.jsx)(t.code,{children:`<label>`}),` attributes (for example `,(0,p.jsx)(t.code,{children:`htmlFor`}),`, `,(0,p.jsx)(t.code,{children:`onClick`}),`, etc.) are forwarded to the internal `,(0,p.jsx)(t.code,{children:`<label>`}),` element.`,(0,p.jsx)(t.br,{}),`
`,`However, `,(0,p.jsx)(t.code,{children:`className`}),` and `,(0,p.jsx)(t.code,{children:`style`}),` passed to `,(0,p.jsx)(t.code,{children:`ItemLabel`}),` are applied to the outer container `,(0,p.jsx)(t.code,{children:`<div>`}),` (the component wrapper), not to the inner `,(0,p.jsx)(t.code,{children:`<label>`}),`.
To target the inner label for styling, use the `,(0,p.jsx)(t.code,{children:`.af-item-label__label`}),` selector or a wrapper selector (for example `,(0,p.jsx)(t.code,{children:`.af-item-label .af-item-label__label`}),`).`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(o,{of:c}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsxs)(t.h2,{id:`using-sidebuttonprops-and-morebuttonprops-accessibility-focused-examples`,children:[`Using `,(0,p.jsx)(t.code,{children:`sideButtonProps`}),` and `,(0,p.jsx)(t.code,{children:`moreButtonProps`}),` (accessibility-focused examples)`]}),`
`,(0,p.jsxs)(t.p,{children:[`The `,(0,p.jsx)(t.code,{children:`ItemLabel`}),` supports optional action buttons next to the label: a side action (`,(0,p.jsx)(t.code,{children:`sideButtonLabel`}),` / `,(0,p.jsx)(t.code,{children:`sideButtonProps`}),`) and a more/info action (`,(0,p.jsx)(t.code,{children:`moreButtonLabel`}),` / `,(0,p.jsx)(t.code,{children:`moreButtonProps`}),`). Use the `,(0,p.jsx)(t.code,{children:`*ButtonProps`}),` objects to add accessibility attributes and keyboard behavior to these buttons.`]}),`
`,(0,p.jsx)(t.p,{children:`Best practices:`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`Ensure each button has an accessible name (prefer the visible label or an explicit `,(0,p.jsx)(t.code,{children:`aria-label`}),`).`]}),`
`,(0,p.jsxs)(t.li,{children:[`If the button toggles a popup or menu, include `,(0,p.jsx)(t.code,{children:`aria-haspopup`}),` and maintain `,(0,p.jsx)(t.code,{children:`aria-expanded`}),` on the button.`]}),`
`,(0,p.jsxs)(t.li,{children:[`Use `,(0,p.jsx)(t.code,{children:`aria-controls`}),` to point to the id of a controlled popup region.`]}),`
`,(0,p.jsxs)(t.li,{children:[`Keep interactive behavior keyboard-friendly (`,(0,p.jsx)(t.code,{children:`onKeyDown`}),` handlers for Enter/Space if necessary).`]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`Examples`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Simple side button with explicit aria-label`}),`
`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<ItemLabel
  htmlFor="file-input"
  sideButtonLabel="Browse"
  sideButtonProps={{ "aria-label": "Browse files" }}
>
  Upload file
</ItemLabel>
`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`More button that toggles a help panel (aria-expanded + aria-controls)`}),`
`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<ItemLabel
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
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Example with keyboard handler on side button (in MDX examples this is illustrative):`}),`
`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<ItemLabel
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
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Example to usage description with multiline`}),`
`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { ItemLabel } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <ItemLabel
    label="Label Text"
    description={
      <>
        une description
        <br />
        sur 2 lignes
      </>
    }
  />
);
`})}),`
`,(0,p.jsxs)(t.p,{children:[`Notes about `,(0,p.jsx)(t.code,{children:`Button`}),` accessibility`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`The ItemLabel forwards `,(0,p.jsx)(t.code,{children:`sideButtonProps`}),` and `,(0,p.jsx)(t.code,{children:`moreButtonProps`}),` to the underlying Button component. Use these props to supply ARIA attributes and event handlers.`]}),`
`,(0,p.jsxs)(t.li,{children:[`Prefer visible button text as the accessible name. If you use an icon-only button, provide `,(0,p.jsx)(t.code,{children:`aria-label`}),` or `,(0,p.jsx)(t.code,{children:`aria-labelledby`}),` that contains the same text a sighted user would read.`]}),`
`,(0,p.jsxs)(t.li,{children:[`Avoid using `,(0,p.jsx)(t.code,{children:`tabIndex`}),` to force focusability for non-interactive elements; buttons are focusable by default.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`migration-guide--deprecated-props`,children:`Migration guide — deprecated props`}),`
`,(0,p.jsx)(t.p,{children:`The ItemLabel component has evolved to follow native HTML label semantics more closely. Some props were deprecated to encourage clearer, more standard usage. Below is a mapping of deprecated props and how to migrate.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`label`}),` -> use `,(0,p.jsx)(t.code,{children:`children`}),` (pass the label text as children of `,(0,p.jsx)(t.code,{children:`<ItemLabel>`}),`)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`inputId`}),` -> `,(0,p.jsx)(t.code,{children:`htmlFor`}),` (mirrors the native `,(0,p.jsx)(t.code,{children:`label`}),` attribute pointing to the input's id)`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`buttonLabel`}),` -> `,(0,p.jsx)(t.code,{children:`moreButtonLabel`})]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`onButtonClick`}),` -> `,(0,p.jsx)(t.code,{children:`onMoreButtonClick`})]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`Why change?`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`Using `,(0,p.jsx)(t.code,{children:`children`}),` for the label content matches how a native `,(0,p.jsx)(t.code,{children:`<label>`}),` is used and avoids confusion between presentation vs content props.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`htmlFor`}),` is the native attribute name and directly maps to the `,(0,p.jsx)(t.code,{children:`for`}),` attribute on a `,(0,p.jsx)(t.code,{children:`<label>`}),`, which is what assistive tech expects.`]}),`
`,(0,p.jsxs)(t.li,{children:[`More explicit prop names (`,(0,p.jsx)(t.code,{children:`moreButtonLabel`}),`, `,(0,p.jsx)(t.code,{children:`onMoreButtonClick`}),`) clarify intent and reduce ambiguity.`]}),`
`]}),`
`,(0,p.jsx)(t.p,{children:`Migration examples`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Before (deprecated)`}),`
`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<ItemLabel
  label="Email address"
  inputId="email-input"
  buttonLabel="Info"
  onButtonClick={handleInfo}
/>
`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`After (current)`}),`
`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<ItemLabel
  htmlFor="email-input"
  moreButtonLabel="Info"
  onMoreButtonClick={handleInfo}
>
  Email address
</ItemLabel>
`})})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),r(),a(),l()}))();export{f as default};