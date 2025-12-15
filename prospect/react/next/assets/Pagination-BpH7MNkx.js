import{j as n}from"./index-C-iqcyhV.js";import{useMDXComponents as r}from"./index-DSfWgH82.js";import"./index-BGXfDTqz.js";import{P as s,a}from"./Pagination.stories-C_j0FsTp.js";import{M as i,C as c,a as u}from"./index-Ch_Xbr7H.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CLcWwD1i.js";import"./index-ZnYipkzV.js";import"./preview-DW0FANUf.js";import"./iframe-pwVRX_U1.js";import"./DocsRenderer-CFRXHY34-aNUyxbE6.js";import"./react-18-C_RNIbSA.js";import"./ListApollo-V3A-K0tZ.js";import"./ItemPaginationApollo-CXZythXz.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(t){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:s,name:"Pagination"}),`
`,n.jsx(e.h1,{id:"pagination",children:"Pagination"}),`
`,n.jsx(e.p,{children:"To use the Pagination import it like that:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Pagination } from "@axa-fr/canopee-react/prospect";

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
`,n.jsx(e.h2,{id:"asitem",children:"asItem"}),`
`,n.jsx(e.p,{children:"If you want to use buttons or React Router Link components, you can do so by using the asItem prop."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Pagination
  numberPages={10}
  currentPage={1}
  asItem={"button"}
  onChangePage={(page) => console.log(page)}
/>
`})}),`
`,n.jsx(e.h2,{id:"hideprevnext",children:"hidePrevNext"}),`
`,n.jsx(e.p,{children:'By default, the "Previous" and "Next" buttons are displayed. If you want to hide them, use the hidePrevNext prop.'}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:'The "Previous" and "Next" buttons will always be displayed on mobile devices to ensure optimal navigation on small screens.'}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Pagination
  numberPages={10}
  currentPage={1}
  onChangePage={(page) => console.log(page)}
  hidePrevNext
/>
`})}),`
`,n.jsx(e.h2,{id:"playground",children:"Playground"}),`
`,n.jsx(c,{of:a}),`
`,n.jsx(u,{of:a})]})}function M(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{M as default};
