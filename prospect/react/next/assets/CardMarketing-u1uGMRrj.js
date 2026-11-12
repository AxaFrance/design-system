import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r}from"./lib-tv3KQEW_.js";import{i,l as a,n as o,s}from"./blocks-D74w0bgk.js";import{a as c,i as l,n as u,r as d,t as f}from"./CardMarketing.stories-B0U3TVxY.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...r(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:f}),`
`,(0,h.jsx)(t.h1,{id:`cardmarketing`,children:`CardMarketing`}),`
`,(0,h.jsxs)(t.p,{children:[`A marketing card composed of `,(0,h.jsx)(t.code,{children:`Card`}),`, a responsive image, a title, a description
and a `,(0,h.jsx)(t.code,{children:`Link`}),`. Content is left-aligned with a 16px spacing token.`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { CardMarketing } from "@axa-fr/canopee-react/prospect";

<CardMarketing
  image={{ src: "/offer.jpg", alt: "" }}
  sources={[
    { srcSet: "/offer.avif", type: "image/avif" },
    { srcSet: "/offer.webp", type: "image/webp" },
  ]}
  title="Discover our insurance"
  text="Cover tailored to your needs."
  linkProps={{ href: "/offer", children: "Discover the offer" }}
/>;
`})}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`image`}),` accepts native image attributes, including `,(0,h.jsx)(t.code,{children:`srcSet`}),`, `,(0,h.jsx)(t.code,{children:`sizes`}),`, `,(0,h.jsx)(t.code,{children:`loading`}),`,
`,(0,h.jsx)(t.code,{children:`width`}),` and `,(0,h.jsx)(t.code,{children:`height`}),`. Provide meaningful alternative text, or `,(0,h.jsx)(t.code,{children:`alt=""`}),` when the
image is decorative. Sources are evaluated in declaration order before the
fallback image.`]}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`variant="vertical"`}),` places the image above the content. `,(0,h.jsx)(t.code,{children:`variant="horizontal"`}),`
places it on the left from the small desktop breakpoint (1024px); below that
breakpoint the image remains above the content.`]}),`
`,(0,h.jsxs)(t.p,{children:[`The link's accessible name combines the card title and link label by default.
An `,(0,h.jsx)(t.code,{children:`aria-label`}),` provided through `,(0,h.jsx)(t.code,{children:`linkProps`}),` overrides this name. Keep the
visible link label at the start of any custom `,(0,h.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,h.jsxs)(t.p,{children:[`Other `,(0,h.jsx)(t.code,{children:`Card`}),` props, including `,(0,h.jsx)(t.code,{children:`style`}),`, `,(0,h.jsx)(t.code,{children:`className`}),`, event handlers and ARIA
attributes, are forwarded to the root. `,(0,h.jsx)(t.code,{children:`title`}),`, `,(0,h.jsx)(t.code,{children:`variant`}),` and `,(0,h.jsx)(t.code,{children:`children`}),` are
reserved for the marketing card's content and layout.`]}),`
`,(0,h.jsx)(i,{}),`
`,(0,h.jsx)(t.h2,{id:`vertical`,children:`Vertical`}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.h2,{id:`horizontal`,children:`Horizontal`}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`primary-business-link`,children:`Primary business link`}),`
`,(0,h.jsx)(t.p,{children:`The link keeps its anchor semantics while using the primary business button style.`}),`
`,(0,h.jsx)(o,{of:d})]})}function m(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),n(),a(),c()})))()}g();export{m as default};