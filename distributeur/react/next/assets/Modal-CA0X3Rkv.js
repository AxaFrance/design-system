import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{_ as n,c as r,d as i,g as a,h as o,l as s}from"./iframe-CUw-2XJG.js";import{r as c,t as l}from"./BooleanModal.stories-tRlcX8yc.js";import{n as u,r as d}from"./CustomModal.stories-ZsBTynQj.js";import{n as f,r as p,t as m}from"./Modal.stories-DFbaRpQQ.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i,{of:f,name:`Docs`}),`
`,(0,_.jsx)(t.h1,{id:`modal`,children:`Modal`}),`
`,(0,_.jsx)(t.h2,{id:`components`,children:`Components`}),`
`,(0,_.jsx)(t.p,{children:`Modals are built of composable components:`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`Modal`}),`: The main component that wraps the modal.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`ModalHeader`}),`: A component for the header of the modal, which includes a title and a close button.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`ModalHeaderBase`}),`: A component for a custom header, allowing full control over the content.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`ModalBody`}),`: A component for the body of the modal, where you can place your content.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`ModalFooter`}),`: A component for the footer of the modal, typically containing action buttons.`]}),`
`]}),`
`,(0,_.jsx)(t.p,{children:`The default modal is the component to use if you want to fully configure your
modal.`}),`
`,(0,_.jsxs)(t.p,{children:[`With the `,(0,_.jsx)(t.code,{children:`HeaderBase`}),` you can configure the header of the modal. With the `,(0,_.jsx)(t.code,{children:`Body`}),`
you can configure the body of the modal. And with the `,(0,_.jsx)(t.code,{children:`Footer`}),` you can configure
the footer of the modal.`]}),`
`,(0,_.jsx)(t.h2,{id:`programmatically-opening-and-closing-the-modal`,children:`Programmatically opening and closing the Modal`}),`
`,(0,_.jsxs)(t.p,{children:[`You need to pass a `,(0,_.jsx)(t.code,{children:`ref`}),` to the `,(0,_.jsx)(t.code,{children:`BooleanModal`}),` component in order to call the
`,(0,_.jsx)(t.code,{children:`showModal`}),` function when you want to open the modal and the `,(0,_.jsx)(t.code,{children:`close`}),` function
for closing it.`]}),`
`,(0,_.jsx)(t.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,_.jsxs)(t.p,{children:[`Using the property `,(0,_.jsx)(t.code,{children:`size`}),` you can set the size of the modal. The available sizes are:`]}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`sm`}),`: Small modal`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`lg`}),`: Large modal`]}),`
`]}),`
`,(0,_.jsx)(t.p,{children:`By default, the modal will be rendered with a medium size.`}),`
`,(0,_.jsx)(t.p,{children:`| Size    | Width |
| ------- | ----- |
| sm      | 300px |
| lg      | 800px |
| default | 460px |`}),`
`,(0,_.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,_.jsx)(t.p,{children:`Example of usage of Modal component :`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import { useRef } from "react";

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
            Voici une version avec un header classique du composant Modal. La
            propriété \`size="lg"\` a été mise pour montrer une version plus large
            d'une modale. Il existe également la valeur \`size="sm"\` pour les
            modales plus petites.
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
`,(0,_.jsx)(r,{of:m}),`
`,(0,_.jsx)(s,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`custom-title-modal`,children:`Custom Title Modal`}),`
`,(0,_.jsx)(t.p,{children:`Example of usage of Modal component with custom title:`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`import { useRef } from "react";

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
            Modal.HeaderBase. La propriété \`size="lg"\` a été mise pour montrer
            une version plus large d'une modale. Il est existe également un
            \`size="sm"\` pour les modales plus petites.
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
`,(0,_.jsx)(r,{of:u}),`
`,(0,_.jsx)(s,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`boolean-modal`,children:`Boolean Modal`}),`
`,(0,_.jsxs)(t.p,{children:[`The `,(0,_.jsx)(t.code,{children:`BooleanModal`}),` component is a specialized modal that provides a simple yes/no
interaction pattern. It is designed to be used when you need a confirmation dialog or a simple decision-making modal.`]}),`
`,(0,_.jsxs)(t.p,{children:[`You don't need to compose the `,(0,_.jsx)(t.code,{children:`BooleanModal`}),` with `,(0,_.jsx)(t.code,{children:`ModalHeader`}),`, `,(0,_.jsx)(t.code,{children:`ModalBody`}),`, and `,(0,_.jsx)(t.code,{children:`ModalFooter`}),` components. Instead, you can pass the content directly as children.`]}),`
`,(0,_.jsx)(t.p,{children:`Example of usage of BooleanModal component :`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-tsx`,children:`<button type="button" onClick={() => ref.current?.showModal()}>
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
`,(0,_.jsx)(r,{of:l}),`
`,(0,_.jsx)(s,{of:l})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),a(),o(),c(),d(),p()})))()}v();export{g as default};