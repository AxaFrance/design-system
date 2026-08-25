import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-DWCiFk9d.js";import{t as r}from"./mdx-react-shim-CMP1i0xQ.js";import{i,l as a,n as o,s}from"./blocks-CClg69oA.js";import{Default as c,Logo as l,LogoAndActionChildren as u,LogoAndActionChildrenAndMenuBurger as d,LogoAndMenu as f,LogoAndMenuBurger as p,LogoAndMenuWithTitle as m,LogoWithTitle as h,n as g,t as _}from"./Header.stories-vZTjlH_s.js";function v(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s,{of:_,name:`Header`}),`
`,(0,b.jsx)(t.h1,{id:`header`,children:`Header`}),`
`,(0,b.jsxs)(t.p,{children:[`Responsive page header composed of an `,(0,b.jsx)(t.code,{children:`AppName`}),`, an optional `,(0,b.jsx)(t.code,{children:`TabMenu`}),`, an optional `,(0,b.jsx)(t.code,{children:`MenuBurger`}),`, and optional action children.`]}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Mobile`}),`: the hamburger icon (`,(0,b.jsx)(t.code,{children:`ClickIcon`}),`) toggles the menu panel. The `,(0,b.jsx)(t.code,{children:`TabMenu`}),` and actions slide in as a full-height overlay.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Desktop`}),`: the menu is always visible inline; the icon is hidden. The `,(0,b.jsx)(t.code,{children:`MenuBurger`}),` uses the native `,(0,b.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/Popover_API`,rel:`nofollow`,children:`Popover API`}),`.`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import { Header } from "@axa-fr/canopee-react/client";
`})}),`
`,(0,b.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import {
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
`,(0,b.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,b.jsxs)(t.table,{children:[(0,b.jsx)(t.thead,{children:(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.th,{children:`Prop`}),(0,b.jsx)(t.th,{children:`Type`}),(0,b.jsx)(t.th,{children:`Default`}),(0,b.jsx)(t.th,{children:`Description`})]})}),(0,b.jsxs)(t.tbody,{children:[(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`appNameProps`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`AppNameProps`})}),(0,b.jsx)(t.td,{children:`—`}),(0,b.jsxs)(t.td,{children:[`Props forwarded to the `,(0,b.jsx)(t.code,{children:`AppName`}),` component. `,(0,b.jsx)(t.strong,{children:`Required.`})]})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`tabMenuProps`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`TabMenuProps`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`undefined`})}),(0,b.jsx)(t.td,{children:`Navigation items rendered as a tab menu.`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`menuBurgerProps`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`MenuBurgerProps`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`undefined`})}),(0,b.jsx)(t.td,{children:`Account menu rendered as a burger button on desktop.`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`clickIconProps`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`ClickIconProps`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`undefined`})}),(0,b.jsx)(t.td,{children:`Props forwarded to the mobile hamburger trigger icon.`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`title`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`string`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`undefined`})}),(0,b.jsx)(t.td,{children:`Title displayed in the actions zone (desktop only).`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`actionChildren`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`ReactNode`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`undefined`})}),(0,b.jsx)(t.td,{children:`Free content rendered in the actions zone (e.g. a CTA button).`})]}),(0,b.jsxs)(t.tr,{children:[(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`className`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`string`})}),(0,b.jsx)(t.td,{children:(0,b.jsx)(t.code,{children:`undefined`})}),(0,b.jsxs)(t.td,{children:[`Additional CSS class on the `,(0,b.jsx)(t.code,{children:`<header>`}),` element.`]})]})]})]}),`
`,(0,b.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,b.jsx)(t.h3,{id:`default-all-props`,children:`Default (all props)`}),`
`,(0,b.jsx)(o,{of:c}),`
`,(0,b.jsx)(i,{of:c}),`
`,(0,b.jsx)(t.h3,{id:`logo-only`,children:`Logo only`}),`
`,(0,b.jsx)(o,{of:l}),`
`,(0,b.jsx)(t.h3,{id:`logo--tabmenu`,children:`Logo + TabMenu`}),`
`,(0,b.jsx)(o,{of:f}),`
`,(0,b.jsx)(t.h3,{id:`logo--action-children`,children:`Logo + action children`}),`
`,(0,b.jsx)(o,{of:u}),`
`,(0,b.jsx)(t.h3,{id:`logo--action-children--menuburger`,children:`Logo + action children + MenuBurger`}),`
`,(0,b.jsx)(o,{of:d}),`
`,(0,b.jsx)(t.h3,{id:`logo--menuburger`,children:`Logo + MenuBurger`}),`
`,(0,b.jsx)(o,{of:p}),`
`,(0,b.jsx)(t.h3,{id:`logo--tabmenu--title`,children:`Logo + TabMenu + title`}),`
`,(0,b.jsx)(o,{of:m}),`
`,(0,b.jsx)(t.h3,{id:`logo--title`,children:`Logo + title`}),`
`,(0,b.jsx)(o,{of:h})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=t(),r(),a(),g()}))();export{y as default};