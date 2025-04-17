import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-G7nTXt62.js";import"./index-DhI-Sn3D.js";import{M as u,D as l,C as r,B as s}from"./Modal.stories-B25KOriq.js";import{M as c,C as t,a}from"./index-BrVhguK9.js";import"./index-DbaA8R3S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-BIbG5IXh.js";import"./iframe-C8JO7UR6.js";import"./DocsRenderer-CFRXHY34-1CV7KBOc.js";import"./react-18-DOac64BB.js";import"./index-BOKuxaB8.js";import"./Loader-C1uJHYLx.js";/* empty css              */import"./index-BdSKqQiB.js";import"./index-C2cC0QQF.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function i(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...d(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:u,name:"Docs"}),`
`,n.jsx(e.h1,{id:"modal",children:"Modal"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#default-modal",children:"Default Modal"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#custom-title-modal",children:"Custom Title Modal"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#boolean-modal",children:"Boolean Modal"})}),`
`]}),`
`,n.jsx(e.p,{children:`The default modal is the component to use if you want to fully configure your
modal.`}),`
`,n.jsxs(e.p,{children:["With the ",n.jsx(e.code,{children:"HeaderBase"})," you can configure the header of the modal. With the ",n.jsx(e.code,{children:"Body"}),`
you can configure the body of the modal. And with the `,n.jsx(e.code,{children:"Footer"}),` you can configure
the footer of the modal.`]}),`
`,n.jsxs(e.p,{children:["You need to pass a ",n.jsx(e.code,{children:"ref"})," to the ",n.jsx(e.code,{children:"BooleanModal"}),` component in order to call the
`,n.jsx(e.code,{children:"showModal"})," function when you want to open the modal and the ",n.jsx(e.code,{children:"close"}),` function
for closing it.`]}),`
`,n.jsx(e.h2,{id:"default-modal",children:"Default Modal"}),`
`,n.jsx(e.p,{children:"Example of usage of Modal component :"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useRef } from "react";

export const YourComponent = () => {
  const ref = useRef < HTMLDialogElement > null;

  return (
    <>
      <button type="button" onClick={() => ref.current?.showModal()}>
        Ouvrir la modal
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
`,n.jsx(t,{of:l}),`
`,n.jsx(a,{of:l}),`
`,n.jsx(e.h2,{id:"custom-title-modal",children:"Custom Title Modal"}),`
`,n.jsx(e.p,{children:"Example of usage of Modal component with custom title:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { useRef } from "react";

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
`,n.jsx(t,{of:r}),`
`,n.jsx(a,{of:r}),`
`,n.jsx(e.h2,{id:"boolean-modal",children:"Boolean Modal"}),`
`,n.jsx(e.p,{children:"Example of usage of BooleanModal component :"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<button type="button" onClick={() => ref.current?.showModal()}>
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
`,n.jsx(t,{of:s}),`
`,n.jsx(a,{of:s})]})}function H(o={}){const{wrapper:e}={...d(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{H as default};
