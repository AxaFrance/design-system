import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Cp_Q2h7u.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-De-9TtK1.js";import{t as s}from"./mdx-react-shim-BooHXHLT.js";import{ComplexTitle as c,ComplexTitleWithContentAndChildren as l,DefaultTitle as u,HeaderTitleWithAnchorNavBar as d,n as f,t as p}from"./HeaderTitle.stories-BvUJVEIK.js";function m(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(r.h1,{id:`headertitle`,children:`HeaderTitle`}),`
`,(0,g.jsxs)(r.p,{children:[`By default, the title bar is sticky on the top when you scroll down the page. If you want to disable that behavior you can set to false the `,(0,g.jsx)(r.code,{children:`isSticky`}),` property of the component.`]}),`
`,(0,g.jsx)(r.h2,{id:`import`,children:`Import`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`import { HeaderTitle } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,g.jsx)(r.h2,{id:`use`,children:`Use`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`const TitleComponent = () => (
  <HeaderTitle
    isSticky
    title="Toolkit Axa"
    subtitle="Info complémentaire"
    toggleMenu={() => {}}
  />
);
export default TitleComponent;
`})}),`
`,(0,g.jsxs)(r.p,{children:[`If you need to have a navbar with anchors, you can use the `,(0,g.jsx)(r.code,{children:`anchorNavBarItems`}),` property. The `,(0,g.jsx)(r.code,{children:`HeaderTitle`}),` component will then show the `,(0,g.jsx)(r.code,{children:`AnchorNavBar`}),` component with the items you provide. You should update the `,(0,g.jsx)(r.code,{children:`isActive`}),` property of the items when the user clicks on them to highlight the active item. The `,(0,g.jsx)(r.code,{children:`onClick`}),` function will be called when the item is clicked, allowing you to handle navigation or other actions.
The `,(0,g.jsx)(r.code,{children:`anchorNavBarItems`}),` property is an array of objects with the following structure:`]}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`interface AnchorNavBarItem {
  name: string; // The name of the item
  isActive?: boolean; // Optional, if true, the item will be highlighted as active
  onClick?: () => void; // Optional, if provided, will be called when the item is clicked
  link?: string; // The link to navigate to
  externalLink?: boolean; // Optional, if true, an icon will be displayed to indicate that the link is external
  render?: (props: any) => React.ReactNode; // Optional, if provided, will render the item using the provided function
}
`})}),`
`,(0,g.jsx)(r.h2,{id:`use-1`,children:`Use`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-tsx`,children:`const TitleComponent = () => (
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
`,(0,g.jsx)(r.h2,{id:`stories`,children:`Stories`}),`
`,(0,g.jsx)(r.h3,{id:`default-title`,children:`Default Title`}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(n,{of:u}),`
`,(0,g.jsx)(r.h3,{id:`complex-title`,children:`Complex Title`}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(n,{of:c}),`
`,(0,g.jsx)(r.h3,{id:`complex-title-with-content-and-children`,children:`Complex Title with Content and Children`}),`
`,(0,g.jsxs)(r.p,{children:[`When you need to handle a navigation action , a back button for example, you can use the `,(0,g.jsx)(r.code,{children:`contentLeft`}),` property. For other others actions you should put them the right side of the title bar with the `,(0,g.jsx)(r.code,{children:`contentRight`}),` property. Passing children allows you to add additional content after the title and subtitle.
The properties accepts a ReactNode to give you the flexibility to add any content you want.`]}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(n,{of:l}),`
`,(0,g.jsx)(r.h3,{id:`title-with-anchornavbar`,children:`Title with AnchorNavBar`}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(n,{of:d})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=o(),s(),r(),f()}))();export{h as default};