import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-C2j8J_ep.js";import{t as r}from"./mdx-react-shim-ClDwrFgh.js";import{i,l as a,n as o,s}from"./blocks-CxV6LTim.js";import{Playground as c,n as l,t as u}from"./MenuBurger.stories-BDai_7zd.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{of:u,name:`MenuBurger`}),`
`,(0,p.jsx)(t.h1,{id:`menuburger`,children:`MenuBurger`}),`
`,(0,p.jsx)(t.p,{children:`A burger-style account menu that opens a popover panel containing navigation items and custom actions.`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`On `,(0,p.jsx)(t.strong,{children:`mobile`}),`: the trigger button is hidden; the panel is always visible inline.`]}),`
`,(0,p.jsxs)(t.li,{children:[`On `,(0,p.jsx)(t.strong,{children:`desktop`}),`: a trigger button opens/closes the panel via the native `,(0,p.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Popover_API`,rel:`nofollow`,children:`Popover API`}),`.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { MenuBurger } from "@axa-fr/canopee-react/prospect";
`})}),`
`,(0,p.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { MenuBurger, Button, Icon } from "@axa-fr/canopee-react/prospect";
import logout from "@material-symbols/svg-400/rounded/logout.svg";
import settings from "@material-symbols/svg-400/rounded/settings-fill.svg";

<MenuBurger
  buttonLabel="My account"
  clickItems={[
    {
      icon: settings,
      title: "My profile",
      subtitle: "Personal information",
      state: "default",
      ariaLabelForActionIcon: "Go to my profile",
      onClick: () => {},
    },
  ]}
>
  {/* Optional extra content rendered below the click items */}
  <Button
    variant="tertiary"
    iconLeft={<Icon src={logout} size="S" />}
    onClick={() => {}}
  >
    Log out
  </Button>
</MenuBurger>;
`})}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsxs)(t.table,{children:[(0,p.jsx)(t.thead,{children:(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.th,{children:`Prop`}),(0,p.jsx)(t.th,{children:`Type`}),(0,p.jsx)(t.th,{children:`Default`}),(0,p.jsx)(t.th,{children:`Description`})]})}),(0,p.jsxs)(t.tbody,{children:[(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`buttonLabel`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`string`})}),(0,p.jsx)(t.td,{children:`—`}),(0,p.jsxs)(t.td,{children:[`Label displayed in the desktop trigger button. `,(0,p.jsx)(t.strong,{children:`Required.`})]})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`icon`})}),(0,p.jsxs)(t.td,{children:[(0,p.jsx)(t.code,{children:`string`}),` (SVG src)`]}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`person`})}),(0,p.jsx)(t.td,{children:`Icon displayed on the left of the trigger button.`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`variant`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`"primary" | "secondary"`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`"primary"`})}),(0,p.jsx)(t.td,{children:`Visual variant of the trigger button.`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`clickItems`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`MenuBurgerClickItemProps[]`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`undefined`})}),(0,p.jsx)(t.td,{children:`List of navigation items rendered inside the panel.`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`children`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`ReactNode`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`undefined`})}),(0,p.jsx)(t.td,{children:`Extra content rendered below the click item list (e.g. a logout button).`})]}),(0,p.jsxs)(t.tr,{children:[(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`className`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`string`})}),(0,p.jsx)(t.td,{children:(0,p.jsx)(t.code,{children:`undefined`})}),(0,p.jsx)(t.td,{children:`Additional CSS class applied to the root element.`})]})]})]}),`
`,(0,p.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(o,{of:c}),`
`,(0,p.jsx)(i,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),r(),a(),l()}))();export{f as default};