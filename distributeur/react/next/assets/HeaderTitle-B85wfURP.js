import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as c}from"./index-DSfWgH82.js";import"./index-b_Ilb_r1.js";import{H as d,D as r,C as a,a as l,b as s}from"./HeaderTitle.stories-D0bFtnzS.js";import{M as p,C as o,a as i}from"./index-U_wVezuW.js";import"./index-ZnYipkzV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview--60-oUw0.js";import"./iframe-Ccjd76Ym.js";import"./DocsRenderer-CFRXHY34-MsTpbIfc.js";import"./react-18-C_RNIbSA.js";import"./index-CLcWwD1i.js";import"./distributeur-DrD0LPr-.js";import"./CardData-CisLDHWb.js";import"./index-63p0MazF.js";import"./save-Dn7C8GKk.js";import"./home-BuLaEOyh.js";import"./index-VGPHIPc6.js";import"./HeaderTitle-CsyRwXxz.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function h(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:d}),`
`,e.jsx(t.h1,{id:"headertitle",children:"HeaderTitle"}),`
`,e.jsxs(t.p,{children:["By default, the title bar is sticky on the top when you scroll down the page. If you want to disable that behavior you can set to false the ",e.jsx(t.code,{children:"isSticky"})," property of the component."]}),`
`,e.jsx(t.h2,{id:"import",children:"Import"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { HeaderTitle } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,e.jsx(t.h2,{id:"use",children:"Use"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const TitleComponent = () => (
  <HeaderTitle
    isSticky
    title="Toolkit Axa"
    subtitle="Info complémentaire"
    toggleMenu={() => {}}
  />
);
export default TitleComponent;
`})}),`
`,e.jsxs(t.p,{children:["If you need to have a navbar with anchors, you can use the ",e.jsx(t.code,{children:"anchorNavBarItems"})," property. The ",e.jsx(t.code,{children:"HeaderTitle"})," component will then show the ",e.jsx(t.code,{children:"AnchorNavBar"})," component with the items you provide. You should update the ",e.jsx(t.code,{children:"isActive"})," property of the items when the user clicks on them to highlight the active item. The ",e.jsx(t.code,{children:"onClick"}),` function will be called when the item is clicked, allowing you to handle navigation or other actions.
The `,e.jsx(t.code,{children:"anchorNavBarItems"})," property is an array of objects with the following structure:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`interface AnchorNavBarItem {
  name: string; // The name of the item
  isActive?: boolean; // Optional, if true, the item will be highlighted as active
  onClick?: () => void; // Optional, if provided, will be called when the item is clicked
  link?: string; // The link to navigate to
  externalLink?: boolean; // Optional, if true, an icon will be displayed to indicate that the link is external
  render?: (props: any) => React.ReactNode; // Optional, if provided, will render the item using the provided function
}
`})}),`
`,e.jsx(t.h2,{id:"use-1",children:"Use"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const TitleComponent = () => (
  <HeaderTitle
    isSticky
    title="Toolkit Axa"
    subtitle="Info complémentaire"
    toggleMenu={() => {}}
    anchorNavBarItems={[
      { name: "Home", link: "#home" },
      { name: "About", link: "#about" },
      { name: "Services", link: "/services", externalLink: true },
      {
        name: "Contact",
        render: (props) => (
          <a {...props} href="#contact">
            Contact
          </a>
        ),
      },
    ]}
  />
);
export default TitleComponent;
`})}),`
`,e.jsx(t.h2,{id:"stories",children:"Stories"}),`
`,e.jsx(t.h3,{id:"default-title",children:"Default Title"}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(t.h3,{id:"complex-title",children:"Complex Title"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(t.h3,{id:"complex-title-with-content-and-children",children:"Complex Title with Content and Children"}),`
`,e.jsxs(t.p,{children:["When you need to handle a navigation action , a back button for example, you can use the ",e.jsx(t.code,{children:"contentLeft"})," property. For other others actions you should put them the right side of the title bar with the ",e.jsx(t.code,{children:"contentRight"}),` property. Passing children allows you to add additional content after the title and subtitle.
The properties accepts a ReactNode to give you the flexibility to add any content you want.`]}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(t.h3,{id:"title-with-anchornavbar",children:"Title with AnchorNavBar"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(i,{of:s})]})}function R(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(h,{...n})}):h(n)}export{R as default};
