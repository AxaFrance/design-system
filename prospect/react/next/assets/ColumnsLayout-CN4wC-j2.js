import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-tv3KQEW_.js";import{i,l as a,n as o,s}from"./blocks-D74w0bgk.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./ColumnsLayout.stories-ic0wniXT.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...r(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:m,name:`Columns Layout`}),`
`,(0,_.jsx)(t.h1,{id:`columns-layout`,children:`Columns Layout`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`ColumnsLayout`}),` arranges page content into a main column and optional side
columns. An optional top area spans the grid above the heading and columns.`]}),`
`,(0,_.jsx)(t.h2,{id:`import`,children:`Import`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import { ColumnsLayout } from "@axa-fr/canopee-react/prospect";

export const MyPage = () => (
  <main className="grid">
    <ColumnsLayout
      headingProps={{
        children: "Choose your cover",
        firstSubtitle: "Your car insurance quote",
      }}
    >
      <ColumnsLayout.Top>
        <p>Your quote / Your cover</p>
      </ColumnsLayout.Top>
      <ColumnsLayout.Left>
        <p>Your vehicle and driver details</p>
      </ColumnsLayout.Left>
      <ColumnsLayout.Content>
        <p>Your available cover options</p>
      </ColumnsLayout.Content>
      <ColumnsLayout.Right>
        <p>Your quote summary</p>
      </ColumnsLayout.Right>
    </ColumnsLayout>
  </main>
);
`})}),`
`,(0,_.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,_.jsxs)(t.p,{children:[`Place `,(0,_.jsx)(t.code,{children:`ColumnsLayout`}),` inside `,(0,_.jsx)(t.code,{children:`<main className="grid">`}),` to apply its grid and
responsive styles. The stories use `,(0,_.jsx)(t.code,{children:`LayoutDemo`}),` to provide this container,
along with the page header and footer.`]}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Subcomponent`}),(0,_.jsx)(t.th,{children:`Purpose`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`ColumnsLayout.Top`})}),(0,_.jsx)(t.td,{children:`Full-width content above the heading and columns.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`ColumnsLayout.Left`})}),(0,_.jsx)(t.td,{children:`Supporting content on the left.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`ColumnsLayout.Content`})}),(0,_.jsx)(t.td,{children:`Main content in the center.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`ColumnsLayout.Right`})}),(0,_.jsx)(t.td,{children:`Supporting content on the right.`})]})]})]}),`
`,(0,_.jsxs)(t.p,{children:[`Slots may be repeated and nested in fragments. Loose children and
`,(0,_.jsx)(t.code,{children:`ColumnsLayout.Content`}),` are rendered in the Content zone. Slots returned by a
custom component are treated as ordinary content because the layout cannot
inspect a component's rendered output.`]}),`
`,(0,_.jsx)(t.p,{children:`Omit a subcomponent when its zone is not needed. Zone visibility is controlled
by composition, not by boolean props.`}),`
`,(0,_.jsx)(t.p,{children:`The rendering order is always Top, heading, Left, Content, Right, regardless
of the order in which the subcomponents are declared.`}),`
`,(0,_.jsxs)(t.h3,{id:`centered-content-with-isfit`,children:[`Centered Content With `,(0,_.jsx)(t.code,{children:`isFit`})]}),`
`,(0,_.jsxs)(t.p,{children:[`Use `,(0,_.jsx)(t.code,{children:`isFit`}),` only when `,(0,_.jsxs)(t.strong,{children:[`neither `,(0,_.jsx)(t.code,{children:`ColumnsLayout.Left`}),` nor
`,(0,_.jsx)(t.code,{children:`ColumnsLayout.Right`}),` is present`]}),`. It centers the heading and main content
on 8 columns of the 12-column grid from the small desktop breakpoint.
On mobile and tablet, the content still uses the available width.`]}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.code,{children:`ColumnsLayout.Top`}),` remains optional and spans the full grid width, even when
`,(0,_.jsx)(t.code,{children:`isFit`}),` is enabled. If a recognized Left or Right slot is present, `,(0,_.jsx)(t.code,{children:`isFit`}),` is
ignored and all content remains visible. Slots returned by custom components remain ordinary
content and cannot be inspected by this guard.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`<main className="grid">
  <ColumnsLayout isFit headingProps={{ children: "Choose your cover" }}>
    <ColumnsLayout.Content>
      <p>Your available cover options</p>
    </ColumnsLayout.Content>
  </ColumnsLayout>
</main>
`})}),`
`,(0,_.jsxs)(t.p,{children:[`Omit `,(0,_.jsx)(t.code,{children:`isFit`}),`, or set it to `,(0,_.jsx)(t.code,{children:`false`}),`, to keep the default width. The fit example
below provides a toggle to compare both widths without adding side columns.`]}),`
`,(0,_.jsx)(t.h2,{id:`responsive-behavior`,children:`Responsive Behavior`}),`
`,(0,_.jsx)(t.p,{children:`On mobile and tablet, the columns stack vertically in Left, Content, Right
order. From the small desktop breakpoint, the layout uses the 12-column grid:`}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Combination`}),(0,_.jsx)(t.th,{children:`Left`}),(0,_.jsx)(t.th,{children:`Content`}),(0,_.jsx)(t.th,{children:`Right`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:`Left + Content`}),(0,_.jsx)(t.td,{children:`3 columns`}),(0,_.jsx)(t.td,{children:`9 columns`}),(0,_.jsx)(t.td,{children:`Not rendered`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:`Content + Right`}),(0,_.jsx)(t.td,{children:`Not rendered`}),(0,_.jsx)(t.td,{children:`9 columns`}),(0,_.jsx)(t.td,{children:`3 columns`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:`Left + Content + Right`}),(0,_.jsx)(t.td,{children:`3 columns`}),(0,_.jsx)(t.td,{children:`6 columns`}),(0,_.jsx)(t.td,{children:`3 columns`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:`Content only`}),(0,_.jsx)(t.td,{children:`Not rendered`}),(0,_.jsx)(t.td,{children:`12 columns`}),(0,_.jsx)(t.td,{children:`Not rendered`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsxs)(t.td,{children:[`Content only + `,(0,_.jsx)(t.code,{children:`isFit`})]}),(0,_.jsx)(t.td,{children:`Not rendered`}),(0,_.jsx)(t.td,{children:`8 centered columns`}),(0,_.jsx)(t.td,{children:`Not rendered`})]})]})]}),`
`,(0,_.jsx)(t.p,{children:`The Top zone remains above the heading and columns when present.`}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsxs)(t.p,{children:[`Native section props, including `,(0,_.jsx)(t.code,{children:`id`}),`, `,(0,_.jsx)(t.code,{children:`ref`}),`, `,(0,_.jsx)(t.code,{children:`aria-*`}),`, `,(0,_.jsx)(t.code,{children:`style`}),` and event handlers,
are forwarded to the columns section, not the separate `,(0,_.jsx)(t.code,{children:`ColumnsLayout.Top`}),` area.`]}),`
`,(0,_.jsxs)(t.table,{children:[(0,_.jsx)(t.thead,{children:(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.th,{children:`Prop`}),(0,_.jsx)(t.th,{children:`Type`}),(0,_.jsx)(t.th,{children:`Description`})]})}),(0,_.jsxs)(t.tbody,{children:[(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`children`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`ReactNode`})}),(0,_.jsx)(t.td,{children:`Layout zones composed with the subcomponents above.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`headingProps`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`HeadingProps`})}),(0,_.jsxs)(t.td,{children:[`Optional heading configuration. Set its text with `,(0,_.jsx)(t.code,{children:`headingProps.children`}),`. Omit it to render no heading.`]})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`className`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`string`})}),(0,_.jsx)(t.td,{children:`Additional class applied to the columns section.`})]}),(0,_.jsxs)(t.tr,{children:[(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`isFit`})}),(0,_.jsx)(t.td,{children:(0,_.jsx)(t.code,{children:`boolean`})}),(0,_.jsx)(t.td,{children:`Centers the heading and content on 8 columns from small desktop. Use only without Left and Right. Disabled when omitted.`})]})]})]}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,_.jsx)(t.h3,{id:`top--left--center`,children:`Top + Left + Center`}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(t.h3,{id:`top--center--right`,children:`Top + Center + Right`}),`
`,(0,_.jsx)(o,{of:l}),`
`,(0,_.jsx)(t.h3,{id:`top--left--center--right`,children:`Top + Left + Center + Right`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h3,{id:`left--center--right`,children:`Left + Center + Right`}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsxs)(t.h3,{id:`center-only--isfit`,children:[`Center Only + `,(0,_.jsx)(t.code,{children:`isFit`})]}),`
`,(0,_.jsxs)(t.p,{children:[`This example contains only `,(0,_.jsx)(t.code,{children:`ColumnsLayout.Content`}),`, with no Left or Right zone.
Toggle `,(0,_.jsx)(t.code,{children:`isFit`}),` to compare the centered width with the default full width.`]}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(i,{of:u})]})}function g(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),n(),a(),p()})))()}v();export{g as default};