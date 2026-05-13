import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-BkDSX2uU.js";import{t as r}from"./mdx-react-shim-ByL6om5n.js";import{i,l as a,n as o,s}from"./blocks-BXnQ6LPM.js";import{Playground as c,n as l,t as u}from"./ItemFile.stories-DjMxosC2.js";function d(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{of:u,name:`ItemFile`}),`
`,(0,p.jsx)(t.h1,{id:`itemfile`,children:`ItemFile`}),`
`,(0,p.jsxs)(t.p,{children:[`The `,(0,p.jsx)(t.code,{children:`ItemFile`}),` component displays information about a single uploaded file: name, size, a validation or error icon,
optional actions (preview / remove) and an inline message. It is intended to be used together with list components
(for example within an upload list) and with `,(0,p.jsx)(t.code,{children:`ItemMessage`}),` for consistent feedback.`]}),`
`,(0,p.jsx)(t.p,{children:`Usage example:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { ItemFile } from "@axa-fr/canopee-react/client";

const MyComponent = () => {
  const file = new File(["content"], "document.pdf", {
    type: "application/pdf",
  });

  return (
    <ItemFile
      file={file}
      isLoading={false}
      errorMessage={undefined}
      onPreview={(f) => console.log("preview", f)}
      onRemove={(f) => console.log("remove", f)}
    />
  );
};
`})}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsxs)(`table`,{children:[(0,p.jsx)(`thead`,{children:(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`th`,{scope:`col`,children:`Prop`}),(0,p.jsx)(`th`,{scope:`col`,children:`Type`}),(0,p.jsx)(`th`,{scope:`col`,children:`Default`}),(0,p.jsx)(`th`,{scope:`col`,children:`Description`})]})}),(0,p.jsxs)(`tbody`,{children:[(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`file`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`File`})}),(0,p.jsx)(`td`,{children:`—`}),(0,p.jsx)(`td`,{children:(0,p.jsxs)(t.p,{children:[`The JavaScript `,(0,p.jsx)(`code`,{children:`File`}),` object representing the uploaded file.
(required)`]})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`isLoading`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`boolean`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`false`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(t.p,{children:`When true, a spinner is shown instead of the validation icon and actions
may be disabled.`})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`errorMessage`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`string`})}),(0,p.jsx)(`td`,{children:`—`}),(0,p.jsx)(`td`,{children:(0,p.jsx)(t.p,{children:`An optional error message shown below the file. If present, the item is
rendered in an error state.`})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`onRemove`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:(0,p.jsx)(t.p,{children:`(file: File, event: MouseEvent<HTMLButtonElement>) => void`})})}),(0,p.jsx)(`td`,{children:`—`}),(0,p.jsx)(`td`,{children:(0,p.jsx)(t.p,{children:`Callback invoked when the remove action is triggered. Receives the file
and the click event.`})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`onPreview`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:(0,p.jsx)(t.p,{children:`(file: File, event: MouseEvent<HTMLButtonElement>) => void`})})}),(0,p.jsx)(`td`,{children:`—`}),(0,p.jsx)(`td`,{children:(0,p.jsx)(t.p,{children:`Callback invoked when the preview action is triggered. Receives the file
and the click event.`})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`previewProps`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:(0,p.jsx)(t.p,{children:`Partial<Omit<ClickIconProps, 'src' | 'onClick'>>`})})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:(0,p.jsx)(t.code,{children:`{}`})})}),(0,p.jsx)(`td`,{children:(0,p.jsxs)(t.p,{children:[`Optional props forwarded to the preview icon button (except`,` `,`
`,(0,p.jsx)(`code`,{children:`src`}),` and `,(0,p.jsx)(`code`,{children:`onClick`}),`).`]})})]}),(0,p.jsxs)(`tr`,{children:[(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:`removeProps`})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:(0,p.jsx)(t.p,{children:`Partial<Omit<ClickIconProps, 'src' | 'onClick'>>`})})}),(0,p.jsx)(`td`,{children:(0,p.jsx)(`code`,{children:(0,p.jsx)(t.code,{children:`{}`})})}),(0,p.jsx)(`td`,{children:(0,p.jsxs)(t.p,{children:[`Optional props forwarded to the remove icon button (except`,` `,`
`,(0,p.jsx)(`code`,{children:`src`}),` and `,(0,p.jsx)(`code`,{children:`onClick`}),`).`]})})]})]})]}),`
`,(0,p.jsxs)(t.blockquote,{children:[`
`,(0,p.jsxs)(t.p,{children:[`Note: The visual icons and spinner are provided by the design system internally; you can customize button props via `,(0,p.jsx)(t.code,{children:`previewProps`}),` and `,(0,p.jsx)(t.code,{children:`removeProps`}),`.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(o,{of:c}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(t.h2,{id:`best-practices-and-accessibility`,children:`Best practices and accessibility`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`Ensure the `,(0,p.jsx)(t.code,{children:`file`}),` prop is a valid `,(0,p.jsx)(t.code,{children:`File`}),` object and that file names are sanitized if displayed in untrusted contexts.`]}),`
`,(0,p.jsxs)(t.li,{children:[`The component sets `,(0,p.jsx)(t.code,{children:`aria-busy`}),` when `,(0,p.jsx)(t.code,{children:`isLoading`}),` is true and uses `,(0,p.jsx)(t.code,{children:`aria-live="polite"`}),` for the message area so screen readers are notified of status changes.`]}),`
`,(0,p.jsxs)(t.li,{children:[`Action icon buttons (preview / remove) must have a clear accessible name. By default the component provides `,(0,p.jsx)(t.code,{children:`aria-label`}),` attributes (e.g. "Preview file `,name,`", "Remove file `,name,`"). If you override button props, keep or provide an `,(0,p.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[`Do not rely on color alone to indicate an error. Provide an explicit `,(0,p.jsx)(t.code,{children:`errorMessage`}),` text which is announced to assistive technologies.`]}),`
`,(0,p.jsx)(t.li,{children:`If your list of files is interactive, ensure focus is handled appropriately when an item is removed (move focus to a sensible next element).`}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Example: basic file item`}),`
`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const ExampleBasic = () => {
  const file = new File(["x"], "photo.jpg", { type: "image/jpeg" });
  return <ItemFile file={file} />;
};
`})}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`Example: loading + preview/remove handlers`}),`
`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const ExampleHandlers = () => {
  const file = new File(["x"], "photo.jpg", { type: "image/jpeg" });
  return (
    <ItemFile
      file={file}
      isLoading={true}
      onPreview={(f) => window.open(URL.createObjectURL(f))}
      onRemove={(f) => console.log("remove", f.name)}
    />
  );
};
`})})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),r(),a(),l()}))();export{f as default};