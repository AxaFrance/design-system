import{j as e}from"./index-DK-fRI8B.js";import{useMDXComponents as l}from"./index-G7nTXt62.js";import"./index-CnBEjnho.js";import{SelectStory as n}from"./Select.stories-B3fxhuav.js";import{S as h,a as i,b as d}from"./SelectInput.stories-BW7r-kBy.js";import{M as a,C as o,a as r}from"./index-C6lFaN6O.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./preview-BRC5GF1X.js";import"./iframe-DcKxmfME.js";import"./DocsRenderer-CFRXHY34-CeNdqmu-.js";import"./react-18-DOac64BB.js";/* empty css              */import"./Loader-D6y4K9Ud.js";import"./index-C2cC0QQF.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function c(s){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
`,e.jsx(t.h1,{id:"select",children:"Select"}),`
`,e.jsxs(t.p,{children:["The select component comes in two variants: ",e.jsxs(t.a,{href:"#inputselect--with-label",children:[e.jsx(t.strong,{children:"with layout"})," ",e.jsx(t.code,{children:"InputSelect"})]})," and ",e.jsxs(t.a,{href:"#select-without-label",children:[e.jsx(t.strong,{children:"without"})," label ",e.jsx(t.code,{children:"Select"})]}),`.
`,e.jsx(t.code,{children:"SelectBase"})," also exists, but is just the ",e.jsx(t.code,{children:"Select"})," component in ",e.jsx(t.code,{children:'mode="base"'}),", and will be deprecated in the future."]}),`
`,e.jsx(t.p,{children:`In most cases you will want to use the version with the label. However, in some cases, the default layout will not work for you.
In that case, you can use the version without the label.`}),`
`,e.jsxs(t.h2,{id:"inputselect--with-label",children:[e.jsx(t.code,{children:"InputSelect"})," — With label"]}),`
`,e.jsx(t.p,{children:"This is the complete component, with label, description, and error message."}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(t.h3,{id:"required",children:"Required"}),`
`,e.jsxs(t.p,{children:["The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the ",e.jsx(t.code,{children:"required"})," prop to ",e.jsx(t.code,{children:"true"}),"."]}),`
`,e.jsxs(t.p,{children:["Alternatively you can to add to the ",e.jsx(t.code,{children:"classModifier"})," the value ",e.jsx(t.code,{children:"required"}),". This behaviour exists to keep backward compatibility but might disapear in the future."]}),`
`,e.jsx(t.h3,{id:"status-messages",children:"Status messages"}),`
`,e.jsxs(t.p,{children:["The component can be in one of 4 states: the default one which will display the help message, ",e.jsx(t.code,{children:"success"}),", ",e.jsx(t.code,{children:"error"}),", and ",e.jsx(t.code,{children:"warning"}),`.
In order to display the message and color the component, you need to pass the `,e.jsx(t.code,{children:"message"}),", ",e.jsx(t.code,{children:"messageType"})," props and set ",e.jsx(t.code,{children:"forceDisplayMessage"})," to ",e.jsx(t.code,{children:"true"}),"."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(t.h3,{id:"placeholders",children:"Placeholders"}),`
`,e.jsxs(t.p,{children:["The component comes with 2 modes : ",e.jsx(t.code,{children:"base"})," and ",e.jsx(t.code,{children:"default"}),". The only difference is that the ",e.jsx(t.code,{children:"base"})," mode ",e.jsx(t.strong,{children:"never"}),` displays the placeholder.
If you are not sure which mode to use, use the `,e.jsx(t.code,{children:"default"})," mode."]}),`
`,e.jsxs(t.h2,{id:"select-without-label",children:[e.jsx(t.code,{children:"Select"})," Without label"]}),`
`,e.jsx(t.p,{children:"The component without the label is a bare-bones version of the component. It is useful when you need to customize the layout of the component."}),`
`,e.jsx(o,{of:n}),`
`,e.jsx(r,{of:n})]})}function D(s={}){const{wrapper:t}={...l(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(c,{...s})}):c(s)}export{D as default};
