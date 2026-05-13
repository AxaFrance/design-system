import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Cp_Q2h7u.js";import{c as n,m as r,s as i,u as a,w as o}from"./iframe-De-9TtK1.js";import{t as s}from"./mdx-react-shim-BooHXHLT.js";import{BooleanModalStory as c,t as l}from"./BooleanModal.stories-UcCyVdIa.js";import{CustomTitleModalStory as u,t as d}from"./CustomModal.stories-DvnzWRmN.js";import{DefaultModalStory as f,n as p,t as m}from"./Modal.stories-DRyz6sFo.js";function h(e){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:m,name:`Docs`}),`
`,(0,_.jsx)(r.h1,{id:`modal`,children:`Modal`}),`
`,(0,_.jsx)(r.h2,{id:`components`,children:`Components`}),`
`,(0,_.jsx)(r.p,{children:`Modals are built of composable components:`}),`
`,(0,_.jsxs)(r.ul,{children:[`
`,(0,_.jsxs)(r.li,{children:[(0,_.jsx)(r.code,{children:`Modal`}),`: The main component that wraps the modal.`]}),`
`,(0,_.jsxs)(r.li,{children:[(0,_.jsx)(r.code,{children:`ModalHeader`}),`: A component for the header of the modal, which includes a title and a close button.`]}),`
`,(0,_.jsxs)(r.li,{children:[(0,_.jsx)(r.code,{children:`ModalHeaderBase`}),`: A component for a custom header, allowing full control over the content.`]}),`
`,(0,_.jsxs)(r.li,{children:[(0,_.jsx)(r.code,{children:`ModalBody`}),`: A component for the body of the modal, where you can place your content.`]}),`
`,(0,_.jsxs)(r.li,{children:[(0,_.jsx)(r.code,{children:`ModalFooter`}),`: A component for the footer of the modal, typically containing action buttons.`]}),`
`]}),`
`,(0,_.jsx)(r.p,{children:`The default modal is the component to use if you want to fully configure your
modal.`}),`
`,(0,_.jsxs)(r.p,{children:[`With the `,(0,_.jsx)(r.code,{children:`HeaderBase`}),` you can configure the header of the modal. With the `,(0,_.jsx)(r.code,{children:`Body`}),`
you can configure the body of the modal. And with the `,(0,_.jsx)(r.code,{children:`Footer`}),` you can configure
the footer of the modal.`]}),`
`,(0,_.jsx)(r.h2,{id:`programmatically-opening-and-closing-the-modal`,children:`Programmatically opening and closing the Modal`}),`
`,(0,_.jsxs)(r.p,{children:[`You need to pass a `,(0,_.jsx)(r.code,{children:`ref`}),` to the `,(0,_.jsx)(r.code,{children:`BooleanModal`}),` component in order to call the
`,(0,_.jsx)(r.code,{children:`showModal`}),` function when you want to open the modal and the `,(0,_.jsx)(r.code,{children:`close`}),` function
for closing it.`]}),`
`,(0,_.jsx)(r.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,_.jsxs)(r.p,{children:[`Using the property `,(0,_.jsx)(r.code,{children:`size`}),` you can set the size of the modal. The available sizes are:`]}),`
`,(0,_.jsxs)(r.ul,{children:[`
`,(0,_.jsxs)(r.li,{children:[(0,_.jsx)(r.code,{children:`sm`}),`: Small modal`]}),`
`,(0,_.jsxs)(r.li,{children:[(0,_.jsx)(r.code,{children:`lg`}),`: Large modal`]}),`
`]}),`
`,(0,_.jsx)(r.p,{children:`By default, the modal will be rendered with a medium size.`}),`
`,(0,_.jsx)(r.p,{children:`| Size    | Width |
| ------- | ----- |
| sm      | 300px |
| lg      | 800px |
| default | 460px |`}),`
`,(0,_.jsx)(r.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,_.jsx)(r.p,{children:`Example of usage of Modal component :`}),`
`,(0,_.jsx)(r.pre,{children:(0,_.jsx)(r.code,{className:`language-tsx`,children:`import { useRef } from "react";

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
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(n,{of:f}),`
`,(0,_.jsx)(r.h2,{id:`custom-title-modal`,children:`Custom Title Modal`}),`
`,(0,_.jsx)(r.p,{children:`Example of usage of Modal component with custom title:`}),`
`,(0,_.jsx)(r.pre,{children:(0,_.jsx)(r.code,{className:`language-tsx`,children:`import { useRef } from "react";

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
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsx)(n,{of:u}),`
`,(0,_.jsx)(r.h2,{id:`boolean-modal`,children:`Boolean Modal`}),`
`,(0,_.jsxs)(r.p,{children:[`The `,(0,_.jsx)(r.code,{children:`BooleanModal`}),` component is a specialized modal that provides a simple yes/no
interaction pattern. It is designed to be used when you need a confirmation dialog or a simple decision-making modal.`]}),`
`,(0,_.jsxs)(r.p,{children:[`You don't need to compose the `,(0,_.jsx)(r.code,{children:`BooleanModal`}),` with `,(0,_.jsx)(r.code,{children:`ModalHeader`}),`, `,(0,_.jsx)(r.code,{children:`ModalBody`}),`, and `,(0,_.jsx)(r.code,{children:`ModalFooter`}),` components. Instead, you can pass the content directly as children.`]}),`
`,(0,_.jsx)(r.p,{children:`Example of usage of BooleanModal component :`}),`
`,(0,_.jsx)(r.pre,{children:(0,_.jsx)(r.code,{className:`language-tsx`,children:`<button type="button" onClick={() => ref.current?.showModal()}>
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
`,(0,_.jsx)(i,{of:c}),`
`,(0,_.jsx)(n,{of:c})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=o(),s(),r(),l(),d(),p()}))();export{g as default};