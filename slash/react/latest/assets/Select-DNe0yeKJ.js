import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as l}from"./index-Ch4n-_Zu.js";import"./DocsRenderer-CFRXHY34-11Y2Aw13.js";import{M as h,C as s,a as n}from"./index-XUrgFtkI.js";import{SelectStory as i}from"./Select.stories-BThG7vUO.js";import{S as d,a as r,b as a}from"./SelectInput.stories-C95tUV3-.js";import"./index-C33_amOP.js";import"./iframe-BOPNIBYJ.js";import"./react-18-EAsyrTGL.js";import"./index-fOfmBfwh.js";import"./index-D-8MO0q_.js";import"./index-CuAC1KVG.js";import"./index-DrFu-skq.js";import"./index-Bm9fFANh.js";import"./Select-DzbiRRMD.js";import"./getComponentClassName-CfMiunrP.js";import"./HelpMessage-D9o_4RmS.js";import"./SelectInput-B1sfdLXr.js";import"./useInputClassModifier-B4SXY78l.js";function c(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:d}),`
`,e.jsx(t.h1,{id:"select",children:"Select"}),`
`,e.jsxs(t.p,{children:["The select component comes in two variants: ",e.jsxs(t.a,{href:"#inputselect--with-label",children:[e.jsx(t.strong,{children:"with layout"})," ",e.jsx(t.code,{children:"InputSelect"})]})," and ",e.jsxs(t.a,{href:"#select-without-label",children:[e.jsx(t.strong,{children:"without"})," label ",e.jsx(t.code,{children:"Select"})]}),`.
`,e.jsx(t.code,{children:"SelectBase"})," also exists, but is just the ",e.jsx(t.code,{children:"Select"})," component in ",e.jsx(t.code,{children:'mode="base"'}),", and will be deprecated in the future."]}),`
`,e.jsx(t.p,{children:`In most cases you will want to use the version with the label. However, in some cases, the default layout will not work for you.
In that case, you can use the version without the label.`}),`
`,e.jsxs(t.h2,{id:"inputselect--with-label",children:[e.jsx(t.code,{children:"InputSelect"})," — With label"]}),`
`,e.jsx(t.p,{children:"This is the complete component, with label, description, and error message."}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(t.h3,{id:"required",children:"Required"}),`
`,e.jsxs(t.p,{children:["The component can be required. In that case, the label will be followed by a red asterisk. In order to make the component required, set the ",e.jsx(t.code,{children:"required"})," prop to ",e.jsx(t.code,{children:"true"}),"."]}),`
`,e.jsxs(t.p,{children:["Alternatively you can to add to the ",e.jsx(t.code,{children:"classModifier"})," the value ",e.jsx(t.code,{children:"required"}),". This behaviour exists to keep backward compatibility but might disapear in the future."]}),`
`,e.jsx(t.h3,{id:"status-messages",children:"Status messages"}),`
`,e.jsxs(t.p,{children:["The component can be in one of 4 states: the default one which will display the help message, ",e.jsx(t.code,{children:"success"}),", ",e.jsx(t.code,{children:"error"}),", and ",e.jsx(t.code,{children:"warning"}),`.
In order to display the message and color the component, you need to pass the `,e.jsx(t.code,{children:"message"}),", ",e.jsx(t.code,{children:"messageType"})," props and set ",e.jsx(t.code,{children:"forceDisplayMessage"})," to ",e.jsx(t.code,{children:"true"}),"."]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(t.h3,{id:"placeholders",children:"Placeholders"}),`
`,e.jsxs(t.p,{children:["The component comes with 2 modes : ",e.jsx(t.code,{children:"base"})," and ",e.jsx(t.code,{children:"default"}),". The only difference is that the ",e.jsx(t.code,{children:"base"})," mode ",e.jsx(t.strong,{children:"never"}),` displays the placeholder.
If you are not sure which mode to use, use the `,e.jsx(t.code,{children:"default"})," mode."]}),`
`,e.jsxs(t.h2,{id:"select-without-label",children:[e.jsx(t.code,{children:"Select"})," Without label"]}),`
`,e.jsx(t.p,{children:"The component without the label is a bare-bones version of the component. It is useful when you need to customize the layout of the component."}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(n,{of:i})]})}function W(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(c,{...o})}):c(o)}export{W as default};
