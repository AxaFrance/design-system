import{j as n}from"./index-C1mcBe1y.js";import{useMDXComponents as s}from"./index-G7nTXt62.js";import"./index-DjFtvknZ.js";import{M as d,P as t}from"./Modal.stories-D6Eg9LC_.js";import{ModalCore as r}from"./ModalCore.stories-FOz29MjB.js";import{M as u,C as i,a}from"./index-ChzX3ivq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BOKuxaB8.js";import"./index-DbaA8R3S.js";import"./preview-C6WF-Rjf.js";import"./iframe-BPC8YhhL.js";import"./DocsRenderer-CFRXHY34-BBaTVLeN.js";import"./react-18-Cg43Tkb0.js";/* empty css                    */import"./DropdownCommon-D6oJrpXC.js";import"./account_balance-B8UiBJSK.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./index-28pPPJTf.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function l(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:d,name:"Docs"}),`
`,n.jsx(e.h1,{id:"modal",children:"Modal"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#modalcore",children:"ModalCore"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#modal",children:"Modal"})}),`
`]}),`
`,n.jsx(e.p,{children:"The ModalCore is the component to use if you want to fully configure your modal."}),`
`,n.jsxs(e.p,{children:["With the ",n.jsx(e.code,{children:"ModalCoreHeader"})," you can configure the header of the modal."]}),`
`,n.jsxs(e.p,{children:["With the ",n.jsx(e.code,{children:"ModalCoreBody"})," you can configure the body of the modal."]}),`
`,n.jsxs(e.p,{children:["And with the ",n.jsx(e.code,{children:"ModalCoreFooter"})," you can configure the footer of the modal."]}),`
`,n.jsxs(e.p,{children:["You need to pass a ",n.jsx(e.code,{children:"ref"})," to the ",n.jsx(e.code,{children:"Modal"})," component in order to call the ",n.jsx(e.code,{children:"showModal"})," function when you want to open the modal and the ",n.jsx(e.code,{children:"close"})," function for closing it."]}),`
`,n.jsx(e.h2,{id:"modalcore",children:"ModalCore"}),`
`,n.jsx(e.p,{children:"Example of usage of ModalCore component :"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useRef } from "react";

export const YourComponent = () => {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <ButtonClient onClick={() => ref.current?.showModal()}>
        Open the modal
      </ButtonClient>

      <ModalCore
        onCancel={() => {}}
        onClose={() => {}}
        onSubmit={() => {}}
        title="Modal title"
        ref={ref}
      >
        <ModalCoreHeader
          headingProps={{
            children: "Modal title",
          }}
          iconProps={{ src: iconSrc }}
          onClose={() => {}}
        />
        <ModalCoreBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          consectetur urna a tellus semper, id elementum ligula fermentum. In
          semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque
          purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam
          dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus
          at nulla fermentum semper. In ipsum urna, tempus vel lorem vel,
          venenatis malesuada dui. Cras massa ipsum, accumsan et scelerisque ut,
          vulputate at elit.
        </ModalCoreBody>
        <ModalCoreFooter
          primaryButtonProps={{
            children: "Valider",
          }}
          secondaryButtonProps={{
            children: "Annuler",
          }}
        />
      </ModalCore>
    </>
  );
};
`})}),`
`,n.jsx(i,{of:r}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(e.h2,{id:"modal-1",children:"Modal"}),`
`,n.jsx(e.p,{children:"Example of usage of Modal component :"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { useRef } from "react";

export const YourComponent = () => {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button type="button" onClick={() => ref.current?.showModal()}>
        Open modal
      </button>

      <Modal
        ref={ref}
        headingProps={{
          firstSubtitle: "Modal subtitle",
        }}
        icon={iconSrc}
        iconProps={{
          variant: "primary",
        }}
        onCancel={() => {}}
        onClose={() => {}}
        primaryButtonProps={{
          children: "Submit",
          onClick: () => {},
        }}
        secondaryButtonProps={{
          children: "Cancel",
          onClick: () => {},
        }}
        title="Modal title"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla
        gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros
        bibendum elit, nec luctus magna felis sollicitudin mauris
      </Modal>
    </>
  );
};
`})}),`
`,n.jsx(i,{of:t}),`
`,n.jsx(a,{of:t})]})}function N(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(l,{...o})}):l(o)}export{N as default};
