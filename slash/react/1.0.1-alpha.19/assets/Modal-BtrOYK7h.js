import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as m}from"./index-DSkyVWTJ.js";import"./chunk-NUUEMKO5--uebJwpZ.js";import{ae as d,af as t,ag as r}from"./index-DlaHDkdi.js";import{M as p,D as i,C as a,B as l}from"./Modal.stories-Bz5NGkhG.js";import"./index-CTjT7uj6.js";import"./iframe-CFkRSHzr.js";import"../sb-preview/runtime.js";import"./react-18-BWpgF8Jy.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./BooleanModal-Bt38x26C.js";/* empty css              */import"./Action-fIeEoHxC.js";/* empty css               */import"./getComponentClassName-C7V7Z2-u.js";import"./index-CCQ3W5xA.js";import"./Alert-D2MQI0tE.js";import"./Badge-CAZ-Dv6m.js";import"./Button-BPtTpx5t.js";import"./CheckboxInput-D0GgcQ-9.js";import"./HelpMessage-8RhooMOY.js";import"./useOptionsWithId-BhtwyMuM.js";import"./getOptionClassName-B6m0JZo2.js";import"./Choice-D7sDQVe0.js";import"./Radio-DweL7mc7.js";import"./RadioItem-CQo6a_RZ.js";import"./RadioInput-CG2q86-n.js";import"./useInputClassModifier-B4SXY78l.js";import"./ChoiceInput-B-AiHzmE.js";import"./DateInput-7tWwjpkj.js";import"./Date-CI641rXz.js";import"./FileInput-63Red2rh.js";import"./index-BzjuzjN8.js";import"./tslib.es6-Duv2rsQ1.js";import"./MultiSelectInput-TeiEc6w8.js";import"./toConsumableArray-DStN4ZWv.js";import"./NumberInput-wWY9ob04.js";/* empty css                 */import"./Number-WwFhZtHt.js";/* empty css             */import"./PassInput-CjTuF9FG.js";import"./Pass-CDmUB5MI.js";import"./Select-C7bS84k5.js";import"./SelectInput-DEISmcG3.js";import"./SliderInput-gg5DWQFL.js";import"./TextInput-D2YwgqYz.js";import"./Text-BENtgf5_.js";import"./TextareaInput-Ddz1NUI-.js";import"./Textarea-CaJXX67o.js";import"./Footer-8NFPxx48.js";import"./logo-axa-Cqr9fAkX.js";import"./Header-BGmuWOFX.js";import"./Infos-7lKZNez9.js";import"./Name-CFpboyKI.js";import"./HeaderTitle-C1Bc2C2J.js";import"./ToggleButton-DLNPKGs4.js";import"./User-Dp_UfuiD.js";/* empty css               */import"./NavBarItem-CQcEEDln.js";import"./RestitutionList-BavUYh03.js";import"./index-12yj6lRe.js";import"./Svg-DdivJcec.js";import"./Title-Cxy8eqVz.js";import"./Accordion-p8j4MHcs.js";import"./Popover-CVInVo-0.js";import"./index-BAAoBoSU.js";import"./Loader-BYKmsk4U.js";import"./index-C_FWhylE.js";function s(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...m(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:p,name:"Docs"}),`
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
`,o.jsx(r,{of:l})]})}function Eo(e={}){const{wrapper:n}={...m(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(s,{...e})}):s(e)}export{Eo as default};
