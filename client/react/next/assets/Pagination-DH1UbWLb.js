import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-BkDSX2uU.js";import{t as r}from"./mdx-react-shim-ByL6om5n.js";import{i,l as a,n as o,s}from"./blocks-BXnQ6LPM.js";import{Playground as c,n as l,t as u}from"./Pagination.stories-cGIfj9Y7.js";function d(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{of:u,name:`Pagination`}),`
`,(0,p.jsx)(t.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,p.jsx)(t.p,{children:`To use the Pagination import it like that:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { Pagination } from "@axa-fr/canopee-react/client";

const MyStateFullPagination = ({
  numberPages,
  currentPage: defaultCurrentPage,
  asItem,
  hidePrevNext,
}: ComponentProps<typeof Pagination>) => {
  const [currentPage, setCurrentPage] = useState<number>(
    defaultCurrentPage || 1,
  );

  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      numberPages={numberPages}
      onChangePage={handleChange}
      currentPage={currentPage}
      asItem={asItem}
      hidePrevNext={hidePrevNext}
    />
  );
};
`})}),`
`,(0,p.jsx)(t.h2,{id:`asitem`,children:`asItem`}),`
`,(0,p.jsx)(t.p,{children:`If you want to use buttons or React Router Link components, you can do so by using the asItem prop.`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Pagination
  numberPages={10}
  currentPage={1}
  asItem={"button"}
  onChangePage={(page) => console.log(page)}
/>
`})}),`
`,(0,p.jsx)(t.h2,{id:`hideprevnext`,children:`hidePrevNext`}),`
`,(0,p.jsx)(t.p,{children:`By default, the "Previous" and "Next" buttons are displayed. If you want to hide them, use the hidePrevNext prop.`}),`
`,(0,p.jsxs)(t.blockquote,{children:[`
`,(0,p.jsx)(t.p,{children:`The "Previous" and "Next" buttons will always be displayed on mobile devices to ensure optimal navigation on small screens.`}),`
`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Pagination
  numberPages={10}
  currentPage={1}
  onChangePage={(page) => console.log(page)}
  hidePrevNext
/>
`})}),`
`,(0,p.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(o,{of:c}),`
`,(0,p.jsx)(i,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),r(),a(),l()}))();export{f as default};