import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-C8Tw6Lm5.js";import{t as r}from"./mdx-react-shim-B5BYO_WN.js";import{i,l as a,n as o,s}from"./blocks-B2Oe2WTt.js";import{Playground as c,n as l,t as u}from"./Modal.stories-D0gktzLn.js";import{ModalCore as d,t as f}from"./ModalCore.stories-C0WfD3d9.js";function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:u,name:`Docs`}),`
`,(0,h.jsx)(t.h1,{id:`modal`,children:`Modal`}),`
`,(0,h.jsxs)(t.ol,{children:[`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#modalcore`,children:`ModalCore`})}),`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`#modal`,children:`Modal`})}),`
`]}),`
`,(0,h.jsx)(t.p,{children:`The ModalCore is the component to use if you want to fully configure your modal.`}),`
`,(0,h.jsxs)(t.p,{children:[`With the `,(0,h.jsx)(t.code,{children:`ModalCoreHeader`}),` you can configure the header of the modal.`]}),`
`,(0,h.jsxs)(t.p,{children:[`With the `,(0,h.jsx)(t.code,{children:`ModalCoreBody`}),` you can configure the body of the modal.`]}),`
`,(0,h.jsxs)(t.p,{children:[`And with the `,(0,h.jsx)(t.code,{children:`ModalCoreFooter`}),` you can configure the footer of the modal.`]}),`
`,(0,h.jsxs)(t.p,{children:[`You need to pass a `,(0,h.jsx)(t.code,{children:`ref`}),` to the `,(0,h.jsx)(t.code,{children:`Modal`}),` component in order to call the `,(0,h.jsx)(t.code,{children:`showModal`}),` function when you want to open the modal and the `,(0,h.jsx)(t.code,{children:`close`}),` function for closing it.`]}),`
`,(0,h.jsx)(t.h2,{id:`modalcore`,children:`ModalCore`}),`
`,(0,h.jsx)(t.p,{children:`Example of usage of ModalCore component :`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { useRef } from "react";

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
            icon: iconSrc,
          }}
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
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`modal-1`,children:`Modal`}),`
`,(0,h.jsx)(t.p,{children:`Example of usage of Modal component :`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`import { useRef } from "react";

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
          icon: iconSrc,
          iconProps: {
            variant: "primary",
          },
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
`,(0,h.jsx)(o,{of:c}),`
`,(0,h.jsx)(i,{of:c})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),r(),a(),l(),f()}))();export{m as default};