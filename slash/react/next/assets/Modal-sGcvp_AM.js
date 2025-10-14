import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-G7nTXt62.js";import"./index-8UbDzTxF.js";import{M as c,D as a,C as s,B as i}from"./Modal.stories-CtKp7Szn.js";import{M as u,C as t,a as l}from"./index-BOzEygAx.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-D_k3fx-X.js";import"./iframe-ulfpOQxB.js";import"./DocsRenderer-CFRXHY34-DEUVkVRL.js";import"./react-18-Cg43Tkb0.js";import"./index-BOKuxaB8.js";import"./CardData-w-idiBop.js";/* empty css               */import"./index-CG6JzWRx.js";import"./index-28pPPJTf.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(o){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:c,name:"Docs"}),`
`,e.jsx(n.h1,{id:"modal",children:"Modal"}),`
`,e.jsx(n.h2,{id:"components",children:"Components"}),`
`,e.jsx(n.p,{children:"Modals are built of composable components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Modal"}),": The main component that wraps the modal."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ModalHeader"}),": A component for the header of the modal, which includes a title and a close button."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ModalHeaderBase"}),": A component for a custom header, allowing full control over the content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ModalBody"}),": A component for the body of the modal, where you can place your content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ModalFooter"}),": A component for the footer of the modal, typically containing action buttons."]}),`
`]}),`
`,e.jsx(n.p,{children:`The default modal is the component to use if you want to fully configure your
modal.`}),`
`,e.jsxs(n.p,{children:["With the ",e.jsx(n.code,{children:"HeaderBase"})," you can configure the header of the modal. With the ",e.jsx(n.code,{children:"Body"}),`
you can configure the body of the modal. And with the `,e.jsx(n.code,{children:"Footer"}),` you can configure
the footer of the modal.`]}),`
`,e.jsx(n.h2,{id:"programmatically-opening-and-closing-the-modal",children:"Programmatically opening and closing the Modal"}),`
`,e.jsxs(n.p,{children:["You need to pass a ",e.jsx(n.code,{children:"ref"})," to the ",e.jsx(n.code,{children:"BooleanModal"}),` component in order to call the
`,e.jsx(n.code,{children:"showModal"})," function when you want to open the modal and the ",e.jsx(n.code,{children:"close"}),` function
for closing it.`]}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Using the property ",e.jsx(n.code,{children:"size"})," you can set the size of the modal. The available sizes are:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sm"}),": Small modal"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lg"}),": Large modal"]}),`
`]}),`
`,e.jsx(n.p,{children:"By default, the modal will be rendered with a medium size."}),`
`,e.jsx(n.p,{children:`| Size    | Width |
| ------- | ----- |
| sm      | 300px |
| lg      | 800px |
| default | 460px |`}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.p,{children:"Example of usage of Modal component :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useRef } from "react";

export const YourComponent = () => {
  const ref = useRef < HTMLDialogElement > null;

  return (
    <>
      <button type="button" onClick={() => ref.current?.showModal()}>
        Open modal
      </button>

      <Modal onOutsideTap={() => ref.current?.close()} ref={ref}>
        <ModalHeader title="Modal Title" onCancel={() => {}} />
        <ModalBody>
          <p>
            Voici une version avec un header classique du composant Modal. Un
            classModifier "lg" a été mis pour montrer une version plus large
            d'une modale. Il est existe également un modifier "sm", pour les
            modales plus petites. Mais il est possible d'ajouter son propre
            modifier pour personnaliser selon ses besoins avec un peu de CSS.
          </p>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn af-btn af-btn--reverse"
            type="button"
            onClick={() => ref.current?.close()}
          >
            Annuler
          </button>
          <button className="btn af-btn" type="button">
            Valider
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};
`})}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h2,{id:"custom-title-modal",children:"Custom Title Modal"}),`
`,e.jsx(n.p,{children:"Example of usage of Modal component with custom title:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useRef } from "react";

export const YourComponent = () => {
  const ref = useRef < HTMLDialogElement > null;

  return (
    <>
      <button type="button" onClick={() => ref.current?.showModal()}>
        Open modal
      </button>

      <Modal onOutsideTap={() => ref.current?.close()} ref={ref}>
        <ModalHeaderBase id="headerId">
          <p>
            Ici je contrôle complètement
            <b>le contenu</b>
          </p>
        </ModalHeaderBase>
        <ModalBody>
          <p>
            Voici une version avec un header customisé à l'aide du composant
            Modal.HeaderBase. Un classModifier "lg" a été mis pour montrer une
            version plus large d'une modale. Il est existe également un modifier
            "sm", pour les modales plus petites. Mais il est possible d'ajouter
            son propre modifier pour personnaliser selon ses besoins avec un peu
            de CSS.
          </p>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn af-btn af-btn--reverse"
            type="button"
            onClick={() => ref.current?.close()}
          >
            Annuler
          </button>
          <button className="btn af-btn" type="button">
            Valider
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};
`})}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(n.h2,{id:"boolean-modal",children:"Boolean Modal"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"BooleanModal"}),` component is a specialized modal that provides a simple yes/no
interaction pattern. It is designed to be used when you need a confirmation dialog or a simple decision-making modal.`]}),`
`,e.jsxs(n.p,{children:["You don't need to compose the ",e.jsx(n.code,{children:"BooleanModal"})," with ",e.jsx(n.code,{children:"ModalHeader"}),", ",e.jsx(n.code,{children:"ModalBody"}),", and ",e.jsx(n.code,{children:"ModalFooter"})," components. Instead, you can pass the content directly as children."]}),`
`,e.jsx(n.p,{children:"Example of usage of BooleanModal component :"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<button type="button" onClick={() => ref.current?.showModal()}>
  Open modal
</button>

<BooleanModal ref={ref} {...args}
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
`,e.jsx(t,{of:i}),`
`,e.jsx(l,{of:i})]})}function D(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{D as default};
