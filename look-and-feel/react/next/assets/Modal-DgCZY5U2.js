import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-BJaai1kI.js";import"./index-C0kEEIGN.js";import{M as d,D as t}from"./Modal.stories-CEUeYp2E.js";import{DefaultModalStory as i}from"./ModalCore.stories-BeqEqB6J.js";import{M as c,C as r,a}from"./index-BwKM4IGv.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-BbI-MzFh.js";import"./iframe-DiflKJQz.js";import"./DocsRenderer-CFRXHY34-DHQbpU0k.js";import"./react-18-D2JjEoAS.js";import"./index-BsNqBstw.js";import"./TimelineVerticalLF-O2KxY7rd.js";import"./constants-CITlLZqO.js";import"./Svg-05NOb1LW.js";import"./home-fill-DE-f0Phy.js";import"./index-28pPPJTf.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:d,name:"Docs"}),`
`,o.jsx(n.h1,{id:"modal",children:"Modal"}),`
`,o.jsxs(n.ol,{children:[`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#modalcore",children:"ModalCore"})}),`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#modal",children:"Modal"})}),`
`]}),`
`,o.jsx(n.p,{children:"The ModalCore is the component to use if you want to fully configure your modal."}),`
`,o.jsxs(n.p,{children:["With the ",o.jsx(n.code,{children:"ModalCoreHeader"})," you can configure the header of the modal."]}),`
`,o.jsxs(n.p,{children:["With the ",o.jsx(n.code,{children:"ModalCoreBody"})," you can configure the body of the modal."]}),`
`,o.jsxs(n.p,{children:["And with the ",o.jsx(n.code,{children:"ModalCoreFooter"})," you can configure the footer of the modal."]}),`
`,o.jsxs(n.p,{children:["You need to pass a ",o.jsx(n.code,{children:"ref"})," to the ",o.jsx(n.code,{children:"Modal"})," component in order to call the ",o.jsx(n.code,{children:"showModal"})," function when you want to open the modal and the ",o.jsx(n.code,{children:"close"})," function for closing it."]}),`
`,o.jsx(n.h2,{id:"modalcore",children:"ModalCore"}),`
`,o.jsx(n.p,{children:"Example of usage of ModalCore component :"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-javascript",children:`import { useRef } from "react";

export const YourComponent = () => {
  const ref = useRef < HTMLDialogElement > null;

  return (
    <>
      <ButtonClient onClick={() => ref.current?.showModal()}>
        Open the modal
      </ButtonClient>

      <ModalCore onOutsideTap={() => ref.current?.close()} ref={ref}>
        <ModalCoreHeader title="Modal Title" onCancel={() => {}} />
        <ModalCoreBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Curabitur
            pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
            turpis et commodo pharetra, est eros bibendum elit, nec luctus magna
            felis sollicitudin mauris
          </p>
        </ModalCoreBody>
        <ModalCoreFooter>
          <ButtonClient
            variant={ButtonVariants.secondary}
            onClick={() => ref.current?.close()}
          >
            Annuler
          </ButtonClient>
          <ButtonClient variant={ButtonVariants.primary}>Valider</ButtonClient>
        </ModalCoreFooter>
      </ModalCore>
    </>
  );
};
`})}),`
`,o.jsx(r,{of:i}),`
`,o.jsx(a,{of:i}),`
`,o.jsx(n.h2,{id:"modal-1",children:"Modal"}),`
`,o.jsx(n.p,{children:"Example of usage of Modal component :"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`<button type="button" onClick={() => ref.current?.showModal()}>
  Open modal
</button>

<Modal ref={ref} {...args}
    onCancel={() => ref.current?.close()}
    onSubmit={() => ref.current?.close()}
>
  <p>
    Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo in
    aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea eu
    laborum culpa laboris. Labore labore irure ipsum consequat enim officia anim
    ipsum aliqua excepteur qui sint. Duis sint do culpa adipisicing dolor
    adipisicing ea dolore aute nisi quis ullamco aliquip occaecat. Aute ut
    mollit amet.
  </p>
</BooleanModal>
`})}),`
`,o.jsx(r,{of:t}),`
`,o.jsx(a,{of:t})]})}function L(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(l,{...e})}):l(e)}export{L as default};
