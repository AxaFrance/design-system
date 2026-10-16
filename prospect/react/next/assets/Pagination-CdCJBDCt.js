import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,l as n,n as r,s as i}from"./blocks-DDTDys2q.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,r as s}from"./lib-CT2AKoo-.js";import{n as c,r as l,t as u}from"./Pagination.stories-DbAWH1ZL.js";function d(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u,name:`Pagination`}),`
`,(0,p.jsx)(n.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,p.jsx)(n.p,{children:`To use the Pagination import it like that:`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`import { Pagination } from "@axa-fr/canopee-react/prospect";

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
`,(0,p.jsx)(n.h2,{id:`asitem`,children:`asItem`}),`
`,(0,p.jsx)(n.p,{children:`If you want to use buttons or React Router Link components, you can do so by using the asItem prop.`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`<Pagination
  numberPages={10}
  currentPage={1}
  asItem={"button"}
  onChangePage={(page) => console.log(page)}
/>
`})}),`
`,(0,p.jsx)(n.h2,{id:`hideprevnext`,children:`hidePrevNext`}),`
`,(0,p.jsx)(n.p,{children:`By default, the "Previous" and "Next" buttons are displayed. If you want to hide them, use the hidePrevNext prop.`}),`
`,(0,p.jsxs)(n.blockquote,{children:[`
`,(0,p.jsx)(n.p,{children:`The "Previous" and "Next" buttons will always be displayed on mobile devices to ensure optimal navigation on small screens.`}),`
`]}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-tsx`,children:`<Pagination
  numberPages={10}
  currentPage={1}
  onChangePage={(page) => console.log(page)}
  hidePrevNext
/>
`})}),`
`,(0,p.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,p.jsx)(r,{of:c}),`
`,(0,p.jsx)(t,{of:c})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=a(),o(),n(),l()})))()}m();export{f as default};