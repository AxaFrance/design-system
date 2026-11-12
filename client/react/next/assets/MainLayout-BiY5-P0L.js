import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-D1Cs0fwN.js";import{i,l as a,n as o,s}from"./blocks-Bz77zPe8.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./MainLayout.stories-CpBybwol.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...r(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:l,name:`Main Layout`}),`
`,(0,g.jsx)(t.h1,{id:`main-layout`,children:`Main Layout`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`MainLayout`}),` provides the page skeleton of an application: a header, optional
areas above and below the main content, the `,(0,g.jsx)(t.code,{children:`<main>`}),` element and a footer.`]}),`
`,(0,g.jsxs)(t.p,{children:[`Like `,(0,g.jsx)(t.a,{href:`?path=/docs/layouts-columns-layout--docs`,children:(0,g.jsx)(t.code,{children:`ColumnsLayout`})}),`, the areas are
placed around the main content with subcomponents: `,(0,g.jsx)(t.code,{children:`MainLayout.Top`}),` and
`,(0,g.jsx)(t.code,{children:`MainLayout.Bottom`}),`. The other children are the main content.`]}),`
`,(0,g.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`import { MainLayout } from "@axa-fr/canopee-react/client";

export const MyPage = () => (
  <MainLayout
    headerProps={{ appNameProps: { label: "Car insurance" } }}
    footerProps={{ copyright: "@AXA - Tous droits réservés" }}
  >
    <MainLayout.Top>
      <p>Your quote / Your cover</p>
    </MainLayout.Top>
    <p>Your available cover options</p>
    <MainLayout.Bottom>
      <p>Need help?</p>
    </MainLayout.Bottom>
  </MainLayout>
);
`})}),`
`,(0,g.jsx)(t.h2,{id:`structure`,children:`Structure`}),`
`,(0,g.jsxs)(t.p,{children:[`The areas are always rendered in the following order, whatever the order of
the subcomponents in `,(0,g.jsx)(t.code,{children:`children`}),`. Slots may be repeated and nested in fragments.
Children outside `,(0,g.jsx)(t.code,{children:`Top`}),` and `,(0,g.jsx)(t.code,{children:`Bottom`}),` are rendered in `,(0,g.jsx)(t.code,{children:`<main>`}),`. Slots returned by
a custom component are treated as ordinary main content because the layout
cannot inspect a component's rendered output.`]}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Order`}),(0,g.jsx)(t.th,{children:`Area`}),(0,g.jsx)(t.th,{children:`Provided by`}),(0,g.jsx)(t.th,{children:`Rendered element`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`1`}),(0,g.jsx)(t.td,{children:`Debug grid`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`debugGridProps`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`DebugGrid`})})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`2`}),(0,g.jsx)(t.td,{children:`Header`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`headerProps`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`Header`})})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`3`}),(0,g.jsx)(t.td,{children:`Back link`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`backLinkProps`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`<div className="af-main-layout__back-link grid">`})})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`4`}),(0,g.jsx)(t.td,{children:`Top area`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`MainLayout.Top`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`<div className="af-main-layout__top">`})})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`5`}),(0,g.jsx)(t.td,{children:`Main content`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`children`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`<main className="af-main-layout__center grid">`})})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`6`}),(0,g.jsx)(t.td,{children:`Bottom area`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`MainLayout.Bottom`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`<div className="af-main-layout__bottom">`})})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:`7`}),(0,g.jsx)(t.td,{children:`Footer`}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`footerProps`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`Footer`})})]})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`Use `,(0,g.jsx)(t.code,{children:`MainLayout.Top`}),` for content placed before the page content, such as a
breadcrumb or a message, and `,(0,g.jsx)(t.code,{children:`MainLayout.Bottom`}),` for content placed after it,
outside the `,(0,g.jsx)(t.code,{children:`<main>`}),` landmark.
For urgent messages outside `,(0,g.jsx)(t.code,{children:`<main>`}),`, give the message itself `,(0,g.jsx)(t.code,{children:`role="alert"`}),` so
assistive technology announces it without changing the slot's placement.`]}),`
`,(0,g.jsxs)(t.p,{children:[`All children that are not wrapped in `,(0,g.jsx)(t.code,{children:`MainLayout.Top`}),` or `,(0,g.jsx)(t.code,{children:`MainLayout.Bottom`}),`
are rendered in the main content: a page layout such as `,(0,g.jsx)(t.code,{children:`ColumnsLayout`}),` can be
passed directly, without adding another `,(0,g.jsx)(t.code,{children:`<main>`}),` element.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`<MainLayout headerProps={headerProps}>
  <MainLayout.Top>
    <CardMessage title="Information" text="…" />
  </MainLayout.Top>
  <ColumnsLayout headingProps={{ children: "Hello" }}>…</ColumnsLayout>
</MainLayout>
`})}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsx)(t.h3,{id:`mainlayout`,children:`MainLayout`}),`
`,(0,g.jsxs)(t.p,{children:[`Use `,(0,g.jsx)(t.code,{children:`mainProps`}),` to pass native attributes and a `,(0,g.jsx)(t.code,{children:`ref`}),` to the main element, for
example `,(0,g.jsx)(t.code,{children:`mainProps={{ id: "page-content", tabIndex: -1 }}`}),` as the target of a
skip link to `,(0,g.jsx)(t.code,{children:`#page-content`}),`. `,(0,g.jsx)(t.code,{children:`mainProps.className`}),` is merged with the internal
main classes. Only `,(0,g.jsx)(t.code,{children:`children`}),` is excluded: use layout children instead. These
props do not force an empty main element to render when there is no main content.`]}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Type`}),(0,g.jsx)(t.th,{children:`Description`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`children`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsxs)(t.td,{children:[`Main content. `,(0,g.jsx)(t.code,{children:`MainLayout.Top`}),` and `,(0,g.jsx)(t.code,{children:`MainLayout.Bottom`}),` are rendered around it.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`headerProps`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`HeaderProps`})}),(0,g.jsxs)(t.td,{children:[`Props passed to `,(0,g.jsx)(t.code,{children:`Header`}),`. Omit it to render no header.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`footerProps`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`FooterProps`})}),(0,g.jsxs)(t.td,{children:[`Props passed to `,(0,g.jsx)(t.code,{children:`Footer`}),`. Omit it to render no footer.`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`backLinkProps`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`LinkProps`})}),(0,g.jsx)(t.td,{children:`Props of the back link displayed under the header. Omit it to render none.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`debugGridProps`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`DebugGridProps`})}),(0,g.jsxs)(t.td,{children:[`Development-only grid options (`,(0,g.jsx)(t.code,{children:`cols`}),`, `,(0,g.jsx)(t.code,{children:`isCheckedByDefault`}),`).`]})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`className`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`string`})}),(0,g.jsx)(t.td,{children:`Additional class applied to the layout root element.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`mainProps`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`Omit<ComponentProps<"main">, "children">`})}),(0,g.jsxs)(t.td,{children:[`Native props passed to `,(0,g.jsx)(t.code,{children:`<main>`}),`, including `,(0,g.jsx)(t.code,{children:`className`}),` and `,(0,g.jsx)(t.code,{children:`ref`}),`.`]})]})]})]}),`
`,(0,g.jsx)(t.h3,{id:`mainlayouttop-mainlayoutbottom`,children:`MainLayout.Top, MainLayout.Bottom`}),`
`,(0,g.jsxs)(t.table,{children:[(0,g.jsx)(t.thead,{children:(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.th,{children:`Prop`}),(0,g.jsx)(t.th,{children:`Type`}),(0,g.jsx)(t.th,{children:`Description`})]})}),(0,g.jsxs)(t.tbody,{children:[(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`children`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`ReactNode`})}),(0,g.jsx)(t.td,{children:`Content of the area.`})]}),(0,g.jsxs)(t.tr,{children:[(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`className`})}),(0,g.jsx)(t.td,{children:(0,g.jsx)(t.code,{children:`string`})}),(0,g.jsx)(t.td,{children:`Additional class applied to the area wrapper.`})]})]})]}),`
`,(0,g.jsx)(i,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,g.jsx)(t.h3,{id:`top--children--bottom`,children:`Top + Children + Bottom`}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h3,{id:`top--children`,children:`Top + Children`}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(t.h3,{id:`children--bottom`,children:`Children + Bottom`}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(t.h3,{id:`children-only`,children:`Children only`}),`
`,(0,g.jsx)(o,{of:u})]})}function h(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),n(),a(),d()})))()}_();export{h as default};