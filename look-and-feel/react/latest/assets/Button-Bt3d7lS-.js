import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as r}from"./index-FeUjBnvO.js";import"./chunk-NUUEMKO5-DbbnU3pO.js";import{ae as a,af as e,ag as c}from"./index-D8rK9ShE.js";import{B as d,P as i,M as l,W as h,a as p}from"./Button.stories-B5OQnv8k.js";import"./index-uubelm5h.js";import"./iframe-CrMwjsPT.js";import"../sb-preview/runtime.js";import"./react-18-CtsMCmcS.js";import"./index-CfOt2XX2.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-DULPOR7A.js";import"./index-DmeKSGxc.js";import"./index-DrFu-skq.js";import"./arrow_back-DnyUknY1.js";import"./Svg-C4poEASt.js";import"./Button-GV2C7V7f.js";import"./index-vAxXS4R5.js";function s(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:d,name:"Button"}),`
`,t.jsx(n.h1,{id:"button",children:"Button"}),`
`,t.jsx(n.p,{children:"To use the button import it like that:"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import {
  ButtonClient,
  Variants,
} from "@axa-fr/design-system-look-and-feel-react";

const MyComponent = () => (
  <ButtonClient variant={Variants.secondary}>My button</ButtonClient>
);
`})}),`
`,t.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,t.jsx(e,{of:i}),`
`,t.jsx(c,{of:i}),`
`,t.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,t.jsxs(n.p,{children:["Use the ",t.jsx(n.code,{children:"variant"})," prop to change the look of the button. ",t.jsx(n.a,{href:"#examples-of-class-modifiers",children:"See the examples"}),"."]}),`
`,t.jsxs(n.p,{children:["You can also add your own modifier, and the output will be a custom class called ",t.jsx(n.code,{children:"af-btn-client--<yourModifier>"}),` that you can target in your css
The rest of the props (eg: `,t.jsx(n.code,{children:"type"}),", ",t.jsx(n.code,{children:"title"}),") will be passed down to the actual ",t.jsx(n.code,{children:"button"})," HTML element."]}),`
`,t.jsx(n.h2,{id:"examples-of-class-modifiers",children:"Examples of class modifiers"}),`
`,t.jsx(e,{of:l,layout:"fullscreen"}),`
`,t.jsx(n.h2,{id:"with-icons",children:"With icons"}),`
`,t.jsxs(n.p,{children:["To add an icon you need to add the prop, either ",t.jsx(n.code,{children:"iconLeft"})," or ",t.jsx(n.code,{children:"iconRight"})," whether you want the icon on the left of or on the right."]}),`
`,t.jsx(e,{of:h}),`
`,t.jsx(e,{of:p})]})}function E(o={}){const{wrapper:n}={...r(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(s,{...o})}):s(o)}export{E as default};
