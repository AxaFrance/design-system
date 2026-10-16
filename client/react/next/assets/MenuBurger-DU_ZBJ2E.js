import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-C2Y_FAIX.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-DrPFjFh3.js";import{n as c,r as l,t as u}from"./MenuBurger.stories-B9x_ikgD.js";function d(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u,name:`MenuBurger`}),`
`,(0,p.jsx)(n.h1,{id:`menuburger`,children:`MenuBurger`}),`
`,(0,p.jsx)(n.p,{children:`A burger-style account menu that opens a popover panel containing navigation items and custom actions.`}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[`On `,(0,p.jsx)(n.strong,{children:`mobile`}),`: the trigger button is hidden; the panel is always visible inline.`]}),`
`,(0,p.jsxs)(n.li,{children:[`On `,(0,p.jsx)(n.strong,{children:`desktop`}),`: a trigger button opens/closes the panel via the native `,(0,p.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Popover_API`,rel:`nofollow`,children:`Popover API`}),`.`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`import`,children:`Import`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { MenuBurger } from "@axa-fr/canopee-react/client";
`})}),`
`,(0,p.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { MenuBurger, Button, Icon } from "@axa-fr/canopee-react/client";
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
`,(0,p.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsxs)(n.table,{children:[(0,p.jsx)(n.thead,{children:(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.th,{children:`Prop`}),(0,p.jsx)(n.th,{children:`Type`}),(0,p.jsx)(n.th,{children:`Default`}),(0,p.jsx)(n.th,{children:`Description`})]})}),(0,p.jsxs)(n.tbody,{children:[(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`buttonLabel`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`string`})}),(0,p.jsx)(n.td,{children:`—`}),(0,p.jsxs)(n.td,{children:[`Label displayed in the desktop trigger button. `,(0,p.jsx)(n.strong,{children:`Required.`})]})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`icon`})}),(0,p.jsxs)(n.td,{children:[(0,p.jsx)(n.code,{children:`string`}),` (SVG src)`]}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`person`})}),(0,p.jsx)(n.td,{children:`Icon displayed on the left of the trigger button.`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`variant`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`"primary" | "secondary"`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`"primary"`})}),(0,p.jsx)(n.td,{children:`Visual variant of the trigger button.`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`clickItems`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`MenuBurgerClickItemProps[]`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`undefined`})}),(0,p.jsx)(n.td,{children:`List of navigation items rendered inside the panel.`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`children`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`ReactNode`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`undefined`})}),(0,p.jsx)(n.td,{children:`Extra content rendered below the click item list (e.g. a logout button).`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`className`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`string`})}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`undefined`})}),(0,p.jsx)(n.td,{children:`Additional CSS class applied to the root element.`})]})]})]}),`
`,(0,p.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(t,{of:c})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=a(),o(),n(),l()})))()}m();export{f as default};