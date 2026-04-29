import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-D3yXdDgY.js";import"./index--O5gABiX.js";import{P as i,a}from"./Pagination.stories-CjaHUfMd.js";import{M as s,C as m,a as p}from"./index-_3DQXssf.js";import"./index-CtOEgLBf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-D_nHgV4M.js";import"./iframe-BhUT-97Z.js";import"./DocsRenderer-CFRXHY34-BgCCJmre.js";import"./client-D_5VEMwZ.js";import"./index-xQ9y_n2y.js";import"./LoaderLF-DMgW7sdR.js";import"./LoaderCommon-Cyryc8cA.js";import"./index-BjCk13Vd.js";/* empty css               */import"./PaginationLF-DxnQpBi7.js";import"./ItemPaginationLF-Cmu0_Wjt.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(t){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:i,name:"Pagination"}),`
`,n.jsx(e.h1,{id:"pagination",children:"Pagination"}),`
`,n.jsx(e.p,{children:"To use the Pagination import it like that:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Pagination } from "@axa-fr/canopee-react/client";

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
`,n.jsx(m,{of:a}),`
`,n.jsx(p,{of:a})]})}function D(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{D as default};
