import{j as e}from"./index-C-iqcyhV.js";import{useMDXComponents as o}from"./index-DSfWgH82.js";import"./index-ykz7Cxcq.js";import{I as d,P as s}from"./ItemFile.stories-D9-3IEfg.js";import{M as l,C as c,a as t}from"./index-OvxmUjYi.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./preview-D23qtQ4M.js";import"./iframe-C6wyc9_-.js";import"./DocsRenderer-CFRXHY34-Cp1Zd3kU.js";import"./react-18-C_RNIbSA.js";import"./FieldsetApollo-y-LFfrsI.js";import"./ItemFileApollo-C-pP0gS9.js";import"./delete-DPxhdlbV.js";import"./index-VGPHIPc6.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function r(i){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d,name:"ItemFile"}),`
`,e.jsx(n.h1,{id:"itemfile",children:"ItemFile"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ItemFile"}),` component displays information about a single uploaded file: name, size, a validation or error icon,
optional actions (preview / remove) and an inline message. It is intended to be used together with list components
(for example within an upload list) and with `,e.jsx(n.code,{children:"ItemMessage"})," for consistent feedback."]}),`
`,e.jsx(n.p,{children:"Usage example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ItemFile } from "@axa-fr/canopee-react/prospect";

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
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Prop"}),e.jsx("th",{scope:"col",children:"Type"}),e.jsx("th",{scope:"col",children:"Default"}),e.jsx("th",{scope:"col",children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"file"})}),e.jsx("td",{children:e.jsx("code",{children:"File"})}),e.jsx("td",{children:"—"}),e.jsx("td",{children:e.jsxs(n.p,{children:["The JavaScript ",e.jsx("code",{children:"File"}),` object representing the uploaded file.
(required)`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isLoading"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:e.jsx(n.p,{children:`When true, a spinner is shown instead of the validation icon and actions
may be disabled.`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"errorMessage"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"—"}),e.jsx("td",{children:e.jsx(n.p,{children:`An optional error message shown below the file. If present, the item is
rendered in an error state.`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onRemove"})}),e.jsx("td",{children:e.jsx("code",{children:e.jsx(n.p,{children:"(file: File, event: MouseEvent<HTMLButtonElement>) => void"})})}),e.jsx("td",{children:"—"}),e.jsx("td",{children:e.jsx(n.p,{children:`Callback invoked when the remove action is triggered. Receives the file
and the click event.`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onPreview"})}),e.jsx("td",{children:e.jsx("code",{children:e.jsx(n.p,{children:"(file: File, event: MouseEvent<HTMLButtonElement>) => void"})})}),e.jsx("td",{children:"—"}),e.jsx("td",{children:e.jsx(n.p,{children:`Callback invoked when the preview action is triggered. Receives the file
and the click event.`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"previewProps"})}),e.jsx("td",{children:e.jsx("code",{children:e.jsx(n.p,{children:"Partial<Omit<ClickIconProps, 'src' | 'onClick'>>"})})}),e.jsx("td",{children:e.jsx("code",{children:e.jsx(n.code,{children:"{}"})})}),e.jsx("td",{children:e.jsxs(n.p,{children:["Optional props forwarded to the preview icon button (except"," ",`
`,e.jsx("code",{children:"src"})," and ",e.jsx("code",{children:"onClick"}),")."]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"removeProps"})}),e.jsx("td",{children:e.jsx("code",{children:e.jsx(n.p,{children:"Partial<Omit<ClickIconProps, 'src' | 'onClick'>>"})})}),e.jsx("td",{children:e.jsx("code",{children:e.jsx(n.code,{children:"{}"})})}),e.jsx("td",{children:e.jsxs(n.p,{children:["Optional props forwarded to the remove icon button (except"," ",`
`,e.jsx("code",{children:"src"})," and ",e.jsx("code",{children:"onClick"}),")."]})})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: The visual icons and spinner are provided by the design system internally; you can customize button props via ",e.jsx(n.code,{children:"previewProps"})," and ",e.jsx(n.code,{children:"removeProps"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(n.h2,{id:"best-practices-and-accessibility",children:"Best practices and accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Ensure the ",e.jsx(n.code,{children:"file"})," prop is a valid ",e.jsx(n.code,{children:"File"})," object and that file names are sanitized if displayed in untrusted contexts."]}),`
`,e.jsxs(n.li,{children:["The component sets ",e.jsx(n.code,{children:"aria-busy"})," when ",e.jsx(n.code,{children:"isLoading"})," is true and uses ",e.jsx(n.code,{children:'aria-live="polite"'})," for the message area so screen readers are notified of status changes."]}),`
`,e.jsxs(n.li,{children:["Action icon buttons (preview / remove) must have a clear accessible name. By default the component provides ",e.jsx(n.code,{children:"aria-label"}),' attributes (e.g. "Preview file ',name,'", "Remove file ',name,'"). If you override button props, keep or provide an ',e.jsx(n.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(n.li,{children:["Do not rely on color alone to indicate an error. Provide an explicit ",e.jsx(n.code,{children:"errorMessage"})," text which is announced to assistive technologies."]}),`
`,e.jsx(n.li,{children:"If your list of files is interactive, ensure focus is handled appropriately when an item is removed (move focus to a sensible next element)."}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Example: basic file item"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const ExampleBasic = () => {
  const file = new File(["x"], "photo.jpg", { type: "image/jpeg" });
  return <ItemFile file={file} />;
};
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Example: loading + preview/remove handlers"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const ExampleHandlers = () => {
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
`})})]})}function M(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{M as default};
