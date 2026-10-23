import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-DwCjzDam.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-BYpdgX0H.js";import{n as c,r as l,t as u}from"./ItemLabel.stories-CUkitvzb.js";function d(e){let n={blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u,name:`ItemLabel`}),`
`,(0,p.jsx)(n.h1,{id:`itemlabel`,children:`ItemLabel`}),`
`,(0,p.jsxs)(n.p,{children:[`The ItemLabel component renders an accessible form label with optional description text and optional action buttons.
It is designed to closely follow native `,(0,p.jsx)(n.code,{children:`<label>`}),` semantics so that it integrates naturally with form controls and assistive technologies.`]}),`
`,(0,p.jsx)(n.p,{children:`Example usage:`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { ItemLabel } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <ItemLabel description="Description Text">Label Text</ItemLabel>
);
`})}),`
`,(0,p.jsx)(n.h3,{id:`props`,children:`Props`}),`
`,(0,p.jsxs)(n.p,{children:[`The ItemLabel inherits all native `,(0,p.jsx)(n.code,{children:`<label>`}),` props and in addition exposes the following component-specific props:`]}),`
`,(0,p.jsxs)(n.table,{children:[(0,p.jsx)(n.thead,{children:(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.th,{children:`Prop`}),(0,p.jsx)(n.th,{children:`Type`}),(0,p.jsx)(n.th,{children:`Default`}),(0,p.jsx)(n.th,{children:`Description`})]})}),(0,p.jsxs)(n.tbody,{children:[(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`children`})}),(0,p.jsx)(n.td,{children:`ReactNode`}),(0,p.jsx)(n.td,{children:`-`}),(0,p.jsx)(n.td,{children:`Label content.`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`description`})}),(0,p.jsx)(n.td,{children:`ReactNode`}),(0,p.jsx)(n.td,{children:`-`}),(0,p.jsx)(n.td,{children:`Additional descriptive text displayed below/next to the label.`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`required`})}),(0,p.jsx)(n.td,{children:`boolean`}),(0,p.jsx)(n.td,{children:`false`}),(0,p.jsx)(n.td,{children:`When true, shows a visual required indicator (asterisk).`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`htmlFor`})}),(0,p.jsx)(n.td,{children:`string`}),(0,p.jsx)(n.td,{children:`-`}),(0,p.jsx)(n.td,{children:`Native label attribute linking the label to a control's id. Inherited from native label props.`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`sideButtonLabel`})}),(0,p.jsx)(n.td,{children:`ReactNode`}),(0,p.jsx)(n.td,{children:`-`}),(0,p.jsx)(n.td,{children:`Label/content for the optional side action button.`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`onSideButtonClick`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`MouseEventHandler<HTMLButtonElement>`})}),(0,p.jsx)(n.td,{children:`-`}),(0,p.jsx)(n.td,{children:`Click handler for the side button.`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`sideButtonProps`})}),(0,p.jsxs)(n.td,{children:[(0,p.jsx)(n.code,{children:`Partial<ButtonProps>`}),` (omitted keys: children,onClick,variant,className)`]}),(0,p.jsx)(n.td,{children:`-`}),(0,p.jsx)(n.td,{children:`Additional props forwarded to the side button (use for ARIA attributes, keyboard handlers, etc.).`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`moreButtonLabel`})}),(0,p.jsx)(n.td,{children:`ReactNode`}),(0,p.jsx)(n.td,{children:`-`}),(0,p.jsx)(n.td,{children:`Label/content for the optional more/info button.`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`onMoreButtonClick`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`MouseEventHandler<HTMLButtonElement>`})}),(0,p.jsx)(n.td,{children:`-`}),(0,p.jsx)(n.td,{children:`Click handler for the more/info button.`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`moreButtonProps`})}),(0,p.jsxs)(n.td,{children:[(0,p.jsx)(n.code,{children:`Partial<ButtonProps>`}),` (omitted keys: children,onClick,variant,className)`]}),(0,p.jsx)(n.td,{children:`-`}),(0,p.jsx)(n.td,{children:`Additional props forwarded to the more/info button (use for ARIA attributes, aria-haspopup, aria-controls, etc.).`})]})]})]}),`
`,(0,p.jsxs)(n.blockquote,{children:[`
`,(0,p.jsxs)(n.p,{children:[`Note: most native `,(0,p.jsx)(n.code,{children:`<label>`}),` attributes (for example `,(0,p.jsx)(n.code,{children:`htmlFor`}),`, `,(0,p.jsx)(n.code,{children:`onClick`}),`, etc.) are forwarded to the internal `,(0,p.jsx)(n.code,{children:`<label>`}),` element.`,(0,p.jsx)(n.br,{}),`
`,`However, `,(0,p.jsx)(n.code,{children:`className`}),` and `,(0,p.jsx)(n.code,{children:`style`}),` passed to `,(0,p.jsx)(n.code,{children:`ItemLabel`}),` are applied to the outer container `,(0,p.jsx)(n.code,{children:`<div>`}),` (the component wrapper), not to the inner `,(0,p.jsx)(n.code,{children:`<label>`}),`.
To target the inner label for styling, use the `,(0,p.jsx)(n.code,{children:`.af-item-label__label`}),` selector or a wrapper selector (for example `,(0,p.jsx)(n.code,{children:`.af-item-label .af-item-label__label`}),`).`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(t,{of:c}),`
`,(0,p.jsxs)(n.h2,{id:`using-sidebuttonprops-and-morebuttonprops-accessibility-focused-examples`,children:[`Using `,(0,p.jsx)(n.code,{children:`sideButtonProps`}),` and `,(0,p.jsx)(n.code,{children:`moreButtonProps`}),` (accessibility-focused examples)`]}),`
`,(0,p.jsxs)(n.p,{children:[`The `,(0,p.jsx)(n.code,{children:`ItemLabel`}),` supports optional action buttons next to the label: a side action (`,(0,p.jsx)(n.code,{children:`sideButtonLabel`}),` / `,(0,p.jsx)(n.code,{children:`sideButtonProps`}),`) and a more/info action (`,(0,p.jsx)(n.code,{children:`moreButtonLabel`}),` / `,(0,p.jsx)(n.code,{children:`moreButtonProps`}),`). Use the `,(0,p.jsx)(n.code,{children:`*ButtonProps`}),` objects to add accessibility attributes and keyboard behavior to these buttons.`]}),`
`,(0,p.jsx)(n.p,{children:`Best practices:`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[`Ensure each button has an accessible name (prefer the visible label or an explicit `,(0,p.jsx)(n.code,{children:`aria-label`}),`).`]}),`
`,(0,p.jsxs)(n.li,{children:[`If the button toggles a popup or menu, include `,(0,p.jsx)(n.code,{children:`aria-haspopup`}),` and maintain `,(0,p.jsx)(n.code,{children:`aria-expanded`}),` on the button.`]}),`
`,(0,p.jsxs)(n.li,{children:[`Use `,(0,p.jsx)(n.code,{children:`aria-controls`}),` to point to the id of a controlled popup region.`]}),`
`,(0,p.jsxs)(n.li,{children:[`Keep interactive behavior keyboard-friendly (`,(0,p.jsx)(n.code,{children:`onKeyDown`}),` handlers for Enter/Space if necessary).`]}),`
`]}),`
`,(0,p.jsx)(n.p,{children:`Examples`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsx)(n.li,{children:`Simple side button with explicit aria-label`}),`
`]}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`<ItemLabel
  htmlFor="file-input"
  sideButtonLabel="Browse"
  sideButtonProps={{ "aria-label": "Browse files" }}
>
  Upload file
</ItemLabel>
`})}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsx)(n.li,{children:`More button that toggles a help panel (aria-expanded + aria-controls)`}),`
`]}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`<ItemLabel
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
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsx)(n.li,{children:`Example with keyboard handler on side button (in MDX examples this is illustrative):`}),`
`]}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`<ItemLabel
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
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsx)(n.li,{children:`Example to usage description with multiline`}),`
`]}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { ItemLabel } from "@axa-fr/canopee-react/prospect";

const MyComponent = () => (
  <ItemLabel
    description={
      <>
        une description
        <br />
        sur 2 lignes
      </>
    }
  >
    Label Text
  </ItemLabel>
);
`})}),`
`,(0,p.jsxs)(n.p,{children:[`Notes about `,(0,p.jsx)(n.code,{children:`Button`}),` accessibility`]}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[`The ItemLabel forwards `,(0,p.jsx)(n.code,{children:`sideButtonProps`}),` and `,(0,p.jsx)(n.code,{children:`moreButtonProps`}),` to the underlying Button component. Use these props to supply ARIA attributes and event handlers.`]}),`
`,(0,p.jsxs)(n.li,{children:[`Prefer visible button text as the accessible name. If you use an icon-only button, provide `,(0,p.jsx)(n.code,{children:`aria-label`}),` or `,(0,p.jsx)(n.code,{children:`aria-labelledby`}),` that contains the same text a sighted user would read.`]}),`
`,(0,p.jsxs)(n.li,{children:[`Avoid using `,(0,p.jsx)(n.code,{children:`tabIndex`}),` to force focusability for non-interactive elements; buttons are focusable by default.`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=a(),o(),n(),l()})))()}m();export{f as default};