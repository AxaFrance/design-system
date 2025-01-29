import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as m}from"./index-Ch4n-_Zu.js";import"./DocsRenderer-CFRXHY34-11Y2Aw13.js";import{M as d,C as t,a as r}from"./index-XUrgFtkI.js";import{M as p,D as i,C as a,B as l}from"./Modal.stories-BSFi6Q0M.js";import"./index-C33_amOP.js";import"./iframe-BOPNIBYJ.js";import"./react-18-EAsyrTGL.js";import"./index-fOfmBfwh.js";import"./index-D-8MO0q_.js";import"./index-CuAC1KVG.js";import"./index-DrFu-skq.js";import"./BooleanModal-F7T7dgE9.js";/* empty css              */import"./Action-iSZr0U9F.js";/* empty css               */import"./getComponentClassName-CfMiunrP.js";import"./Alert-CuYko3ZB.js";import"./Badge-jSL_F_Be.js";import"./Button-DUnKpr_8.js";import"./CheckboxInput-BAKRpjgP.js";import"./HelpMessage-D9o_4RmS.js";import"./useOptionsWithId-aTvNHBF1.js";import"./getOptionClassName-DxuJt0H1.js";import"./Choice-CUOzbXId.js";import"./Radio-CJcO5WkX.js";import"./RadioItem-QFzOzOYt.js";import"./RadioInput-_ZEfJbsU.js";import"./useInputClassModifier-B4SXY78l.js";import"./ChoiceInput-DSJTTGzc.js";import"./DateInput-zgPeNuLI.js";import"./Date-CoOJGVJg.js";import"./FileInput-DDN3d1tw.js";import"./tslib.es6-Duv2rsQ1.js";import"./MultiSelectInput-QawoVd3T.js";import"./toConsumableArray-gD4wPUN4.js";import"./floating-ui.dom-0axdaRjh.js";import"./NumberInput-BjEiOah5.js";/* empty css                 */import"./Number-D_W1P_YM.js";/* empty css             */import"./PassInput-D3K5k_IG.js";import"./Pass-MYMwzsS2.js";import"./Select-DzbiRRMD.js";import"./SelectInput-B1sfdLXr.js";import"./SliderInput-CzEEKE1k.js";import"./TextInput-CQrD1Xf9.js";import"./Text-Cr7kBUdz.js";import"./TextareaInput-CYppWOX7.js";import"./Textarea-D5K0SVgm.js";import"./Footer-Dv9LlA7P.js";import"./logo-axa-Cqr9fAkX.js";import"./Header-CwnqavnG.js";import"./Infos-CM2pjgWN.js";import"./Name-D5hpi6xU.js";import"./HeaderTitle-BijrBPtn.js";import"./ToggleButton-DJUWYCJn.js";import"./User-CwYsLH-c.js";/* empty css               */import"./NavBarItem-CCXfAJDV.js";import"./RestitutionList-CPp8xLms.js";import"./index-CLdFrMM3.js";import"./Svg--5bcOtmC.js";import"./Title-BuCMnsOi.js";import"./Accordion-kUkYouRU.js";import"./Popover-Bayy7GvK.js";import"./index-CgAjiT6A.js";import"./Loader-DYaTTH3B.js";import"./index-Bm9fFANh.js";function s(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...m(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:p,name:"Docs"}),`
`,o.jsx(n.h1,{id:"modal",children:"Modal"}),`
`,o.jsxs(n.ol,{children:[`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#default-modal",children:"Default Modal"})}),`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#custom-title-modal",children:"Custom Title Modal"})}),`
`,o.jsx(n.li,{children:o.jsx(n.a,{href:"#boolean-modal",children:"Boolean Modal"})}),`
`]}),`
`,o.jsx(n.p,{children:"The default modal is the component to use if you want to fully configure your modal."}),`
`,o.jsxs(n.p,{children:["With the ",o.jsx(n.code,{children:"HeaderBase"})," you can configure the header of the modal. With the ",o.jsx(n.code,{children:"Body"})," you can configure the body of the modal. And with the ",o.jsx(n.code,{children:"Footer"})," you can configure the footer of the modal."]}),`
`,o.jsxs(n.p,{children:["You need to pass a ",o.jsx(n.code,{children:"ref"})," to the ",o.jsx(n.code,{children:"BooleanModal"})," component in order to call the ",o.jsx(n.code,{children:"showModal"})," function when you want to open the modal and the ",o.jsx(n.code,{children:"close"})," function for closing it."]}),`
`,o.jsx(n.h2,{id:"default-modal",children:"Default Modal"}),`
`,o.jsx(n.p,{children:"Example of usage of Modal component :"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-javascript",children:`import { useRef } from "react";

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
`,o.jsx(t,{of:i}),`
`,o.jsx(r,{of:i}),`
`,o.jsx(n.h2,{id:"custom-title-modal",children:"Custom Title Modal"}),`
`,o.jsx(n.p,{children:"Example of usage of Modal component with custom title:"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-javascript",children:`import { useRef } from "react";

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
`,o.jsx(t,{of:a}),`
`,o.jsx(r,{of:a}),`
`,o.jsx(n.h2,{id:"boolean-modal",children:"Boolean Modal"}),`
`,o.jsx(n.p,{children:"Example of usage of BooleanModal component :"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`<button type="button" onClick={() => ref.current?.showModal()}>
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
`,o.jsx(t,{of:l}),`
`,o.jsx(r,{of:l})]})}function So(e={}){const{wrapper:n}={...m(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(s,{...e})}):s(e)}export{So as default};
