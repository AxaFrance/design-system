import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-DBecIi7S.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./HeaderTitle.stories-CBdebF6C.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(t.h1,{id:`headertitle`,children:`HeaderTitle`}),`
`,(0,g.jsxs)(t.p,{children:[`By default, the title bar is sticky on the top when you scroll down the page. If you want to disable that behavior you can set to false the `,(0,g.jsx)(t.code,{children:`isSticky`}),` property of the component.`]}),`
`,(0,g.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`import { HeaderTitle } from "@axa-fr/canopee-react/distributeur";
`})}),`
`,(0,g.jsx)(t.h2,{id:`use`,children:`Use`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`const TitleComponent = () => (
  <HeaderTitle
    isSticky
    title="Toolkit Axa"
    subtitle="Info complémentaire"
    toggleMenu={() => {}}
  />
);
export default TitleComponent;
`})}),`
`,(0,g.jsxs)(t.p,{children:[`If you need to have a navbar with anchors, you can use the `,(0,g.jsx)(t.code,{children:`anchorNavBarItems`}),` property. The `,(0,g.jsx)(t.code,{children:`HeaderTitle`}),` component will then show the `,(0,g.jsx)(t.code,{children:`AnchorNavBar`}),` component with the items you provide. You should update the `,(0,g.jsx)(t.code,{children:`isActive`}),` property of the items when the user clicks on them to highlight the active item. The `,(0,g.jsx)(t.code,{children:`onClick`}),` function will be called when the item is clicked, allowing you to handle navigation or other actions.
The `,(0,g.jsx)(t.code,{children:`anchorNavBarItems`}),` property is an array of objects with the following structure:`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`interface AnchorNavBarItem {
  name: string; // The name of the item
  isActive?: boolean; // Optional, if true, the item will be highlighted as active
  onClick?: () => void; // Optional, if provided, will be called when the item is clicked
  link?: string; // The link to navigate to
  externalLink?: boolean; // Optional, if true, an icon will be displayed to indicate that the link is external
  render?: (props: any) => React.ReactNode; // Optional, if provided, will render the item using the provided function
}
`})}),`
`,(0,g.jsx)(t.h2,{id:`use-1`,children:`Use`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`const TitleComponent = () => (
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
`,(0,g.jsx)(t.h2,{id:`stories`,children:`Stories`}),`
`,(0,g.jsx)(t.h3,{id:`default-title`,children:`Default Title`}),`
`,(0,g.jsx)(r,{of:f}),`
`,(0,g.jsx)(s,{of:f}),`
`,(0,g.jsx)(t.h3,{id:`complex-title`,children:`Complex Title`}),`
`,(0,g.jsx)(r,{of:p}),`
`,(0,g.jsx)(s,{of:p}),`
`,(0,g.jsx)(t.h3,{id:`complex-title-with-content-and-children`,children:`Complex Title with Content and Children`}),`
`,(0,g.jsxs)(t.p,{children:[`When you need to handle a navigation action , a back button for example, you can use the `,(0,g.jsx)(t.code,{children:`contentLeft`}),` property. For other others actions you should put them the right side of the title bar with the `,(0,g.jsx)(t.code,{children:`contentRight`}),` property. Passing children allows you to add additional content after the title and subtitle.
The properties accepts a ReactNode to give you the flexibility to add any content you want.`]}),`
`,(0,g.jsx)(r,{of:u}),`
`,(0,g.jsx)(s,{of:u}),`
`,(0,g.jsx)(t.h3,{id:`title-with-anchornavbar`,children:`Title with AnchorNavBar`}),`
`,(0,g.jsx)(r,{of:l}),`
`,(0,g.jsx)(s,{of:l})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),a(),o(),d()})))()}_();export{h as default};