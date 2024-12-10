import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import"./chunk-NUUEMKO5-CNSpK2ZE.js";import{ae as c,af as t,ag as l}from"./index-D2yU0SMs.js";import{B as d,P as s,M as a,W as h,a as x,C as j}from"./Button.stories-Bc6e5ltU.js";import"./index-CTjT7uj6.js";import"./iframe-ftST9Wrr.js";import"../sb-preview/runtime.js";import"./react-18-BWpgF8Jy.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./index-C_FWhylE.js";import"./Button-BPtTpx5t.js";import"./index-CCQ3W5xA.js";function i(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d,name:"Button"}),`
`,e.jsx(n.h1,{id:"button",children:"Button"}),`
`,e.jsx(n.p,{children:"To use the button import it like that:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button } from "@axa-fr/design-system-slash-react";

const MyComponent = () => (
  <Button classModifier="reverse" type="submit">
    My button
  </Button>
);
`})}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.h2,{id:"classmodifier",children:"ClassModifier"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"classModifier"})," prop to change the look of the button. ",e.jsx(n.a,{href:"#examples-of-class-modifiers",children:"See the examples"}),"."]}),`
`,e.jsx(n.p,{children:"Its value is a list of space separated values which can be:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hasiconLeft"}),"/",e.jsx(n.code,{children:"hasiconRight"})," to add an icon on the left or right of the text"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"disabled"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"success"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"danger"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"reverse"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"small"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"circle"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"circle-menu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"circle-reverse"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"circle-small"})}),`
`]}),`
`,e.jsxs(n.p,{children:["You can also add your own modifier, and the output will be a custom class called ",e.jsx(n.code,{children:"af-btn--<yourModifier>"}),` that you can target in your css
The rest of the props (eg: `,e.jsx(n.code,{children:"type"}),", ",e.jsx(n.code,{children:"title"}),") will be passed down to the actual ",e.jsx(n.code,{children:"button"})," HTML element."]}),`
`,e.jsx(n.h2,{id:"examples-of-class-modifiers",children:"Examples of class modifiers"}),`
`,e.jsx(t,{of:a,layout:"fullscreen"}),`
`,e.jsx(n.h2,{id:"with-icons",children:"With icons"}),`
`,e.jsxs(n.p,{children:["To add an icon you need to add a ",e.jsx(n.code,{children:"classModifier"}),", either ",e.jsx(n.code,{children:"hasiconLeft"})," or ",e.jsx(n.code,{children:"hasiconRight"}),` whether you want the icon on the left of or on the right.
The text of the button needs to be wrapped in a `,e.jsx(n.code,{children:"span"})," with the class ",e.jsx(n.code,{children:"af-btn__text"}),"."]}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h2,{id:"circle-button-with-no-text",children:"Circle button with no text"}),`
`,e.jsxs(n.p,{children:["You can make small round buttons, but do not forget to add a ",e.jsx(n.code,{children:"title"}),", or an ",e.jsx(n.code,{children:"aria-label"})," to make your button accessible!"]}),`
`,e.jsx(t,{of:j})]})}function D(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{D as default};
