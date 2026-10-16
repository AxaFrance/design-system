import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-C2Y_FAIX.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-DrPFjFh3.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./Header.stories-CoYNnSt9.js";function v(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...s(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i,{of:f,name:`Header`}),`
`,(0,b.jsx)(n.h1,{id:`header`,children:`Header`}),`
`,(0,b.jsxs)(n.p,{children:[`Responsive page header composed of an `,(0,b.jsx)(n.code,{children:`AppName`}),`, an optional `,(0,b.jsx)(n.code,{children:`TabMenu`}),`, an optional `,(0,b.jsx)(n.code,{children:`MenuBurger`}),`, and optional action children.`]}),`
`,(0,b.jsxs)(n.ul,{children:[`
`,(0,b.jsxs)(n.li,{children:[(0,b.jsx)(n.strong,{children:`Mobile`}),`: the hamburger icon (`,(0,b.jsx)(n.code,{children:`ClickIcon`}),`) toggles the menu panel. The `,(0,b.jsx)(n.code,{children:`TabMenu`}),` and actions slide in as a full-height overlay.`]}),`
`,(0,b.jsxs)(n.li,{children:[(0,b.jsx)(n.strong,{children:`Desktop`}),`: the menu is always visible inline; the icon is hidden. The `,(0,b.jsx)(n.code,{children:`MenuBurger`}),` uses the native `,(0,b.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Popover_API`,rel:`nofollow`,children:`Popover API`}),`.`]}),`
`]}),`
`,(0,b.jsx)(n.h2,{id:`import`,children:`Import`}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-tsx`,children:`import { Header } from "@axa-fr/canopee-react/client";
`})}),`
`,(0,b.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,b.jsx)(n.pre,{children:(0,b.jsx)(n.code,{className:`language-tsx`,children:`import {
  Header,
  Button,
  Icon,
  type MenuBurgerProps,
  type TabMenuProps,
} from "@axa-fr/canopee-react/client";
import logout from "@material-symbols/svg-400/rounded/logout.svg";
import settings from "@material-symbols/svg-400/rounded/settings-fill.svg";

const tabMenuProps: TabMenuProps = {
  items: [
    { href: "#accueil", label: "Accueil" },
    { href: "#contrats", label: "Contrats" },
  ],
};

const menuBurgerProps: MenuBurgerProps = {
  buttonLabel: "Mon espace",
  clickItems: [
    {
      icon: settings,
      title: "Mon profil",
      subtitle: "Informations personnelles",
      state: "default",
      ariaLabelForActionIcon: "Aller à mon profil",
      onClick: () => {},
    },
  ],
  children: (
    <Button
      variant="tertiary"
      iconLeft={<Icon src={logout} size="S" />}
      onClick={() => {}}
    >
      Déconnexion
    </Button>
  ),
};

<Header
  appNameProps={{ label: "Mon application", logoLinkProps: { href: "/" } }}
  tabMenuProps={tabMenuProps}
  menuBurgerProps={menuBurgerProps}
/>;
`})}),`
`,(0,b.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,b.jsxs)(n.table,{children:[(0,b.jsx)(n.thead,{children:(0,b.jsxs)(n.tr,{children:[(0,b.jsx)(n.th,{children:`Prop`}),(0,b.jsx)(n.th,{children:`Type`}),(0,b.jsx)(n.th,{children:`Default`}),(0,b.jsx)(n.th,{children:`Description`})]})}),(0,b.jsxs)(n.tbody,{children:[(0,b.jsxs)(n.tr,{children:[(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`appNameProps`})}),(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`AppNameProps`})}),(0,b.jsx)(n.td,{children:`—`}),(0,b.jsxs)(n.td,{children:[`Props forwarded to the `,(0,b.jsx)(n.code,{children:`AppName`}),` component. `,(0,b.jsx)(n.strong,{children:`Required.`})]})]}),(0,b.jsxs)(n.tr,{children:[(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`tabMenuProps`})}),(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`TabMenuProps`})}),(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`undefined`})}),(0,b.jsx)(n.td,{children:`Navigation items rendered as a tab menu.`})]}),(0,b.jsxs)(n.tr,{children:[(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`menuBurgerProps`})}),(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`MenuBurgerProps`})}),(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`undefined`})}),(0,b.jsx)(n.td,{children:`Account menu rendered as a burger button on desktop.`})]}),(0,b.jsxs)(n.tr,{children:[(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`clickIconProps`})}),(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`ClickIconProps`})}),(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`undefined`})}),(0,b.jsx)(n.td,{children:`Props forwarded to the mobile hamburger trigger icon.`})]}),(0,b.jsxs)(n.tr,{children:[(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`title`})}),(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`string`})}),(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`undefined`})}),(0,b.jsx)(n.td,{children:`Title displayed in the actions zone (desktop only).`})]}),(0,b.jsxs)(n.tr,{children:[(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`actionChildren`})}),(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`ReactNode`})}),(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`undefined`})}),(0,b.jsx)(n.td,{children:`Free content rendered in the actions zone (e.g. a CTA button).`})]}),(0,b.jsxs)(n.tr,{children:[(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`className`})}),(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`string`})}),(0,b.jsx)(n.td,{children:(0,b.jsx)(n.code,{children:`undefined`})}),(0,b.jsxs)(n.td,{children:[`Additional CSS class on the `,(0,b.jsx)(n.code,{children:`<header>`}),` element.`]})]})]})]}),`
`,(0,b.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(n.h3,{id:`default-all-props`,children:`Default (all props)`}),`
`,(0,b.jsx)(r,{of:g}),`
`,(0,b.jsx)(t,{of:g}),`
`,(0,b.jsx)(n.h3,{id:`logo-only`,children:`Logo only`}),`
`,(0,b.jsx)(r,{of:m}),`
`,(0,b.jsx)(n.h3,{id:`logo--tabmenu`,children:`Logo + TabMenu`}),`
`,(0,b.jsx)(r,{of:p}),`
`,(0,b.jsx)(n.h3,{id:`logo--action-children`,children:`Logo + action children`}),`
`,(0,b.jsx)(r,{of:u}),`
`,(0,b.jsx)(n.h3,{id:`logo--action-children--menuburger`,children:`Logo + action children + MenuBurger`}),`
`,(0,b.jsx)(r,{of:c}),`
`,(0,b.jsx)(n.h3,{id:`logo--menuburger`,children:`Logo + MenuBurger`}),`
`,(0,b.jsx)(r,{of:h}),`
`,(0,b.jsx)(n.h3,{id:`logo--tabmenu--title`,children:`Logo + TabMenu + title`}),`
`,(0,b.jsx)(r,{of:l}),`
`,(0,b.jsx)(n.h3,{id:`logo--title`,children:`Logo + title`}),`
`,(0,b.jsx)(r,{of:d})]})}function y(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=a(),o(),n(),_()})))()}x();export{y as default};