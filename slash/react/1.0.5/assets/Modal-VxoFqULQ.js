import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as m}from"./index-DSkyVWTJ.js";import"./chunk-NUUEMKO5-C_AwhAE5.js";import{ae as d,af as t,ag as r}from"./index-021qulNS.js";import{M as p,D as i,C as a,B as l}from"./Modal.stories-BUbrOG_y.js";import"./index-CTjT7uj6.js";import"./iframe-C9InCBWq.js";import"../sb-preview/runtime.js";import"./react-18-BWpgF8Jy.js";import"./index-vZN_Bsf0.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./isNativeReflectConstruct-C8FKUi4c.js";import"./index-B-hWQ5ss.js";import"./index-DrFu-skq.js";import"./BooleanModal-Dj1PVHEr.js";/* empty css              */import"./Action-Db5uwabH.js";/* empty css               */import"./getComponentClassName-BBtdTm69.js";import"./Alert-Bvh5wFmz.js";import"./Badge-cmZORplw.js";import"./Button-0cvIXeUj.js";import"./CheckboxInput-wXZh7tec.js";import"./HelpMessage-IVok9Gud.js";import"./useOptionsWithId-BhtwyMuM.js";import"./getOptionClassName-C-PokU6N.js";import"./Choice-DwfIdKqD.js";import"./Radio-CQP4-0qJ.js";import"./RadioItem-BqdDckBA.js";import"./RadioInput-TIE-3deB.js";import"./useInputClassModifier-B4SXY78l.js";import"./ChoiceInput-gP13tvqR.js";import"./DateInput-CfP0cjmP.js";import"./Date-Byq2VvYR.js";import"./FileInput-C46Njg0G.js";import"./index-BzjuzjN8.js";import"./tslib.es6-Duv2rsQ1.js";import"./MultiSelectInput-BQgRu7IR.js";import"./toConsumableArray-DStN4ZWv.js";import"./NumberInput-DPLqAUdG.js";/* empty css                 */import"./Number-mDHl-xrJ.js";/* empty css             */import"./PassInput-xEdAmVqz.js";import"./Pass-CWGvtTSX.js";import"./Select-CXnKzse7.js";import"./SelectInput-D3BH00C2.js";import"./SliderInput-VL7pgBVN.js";import"./TextInput-wKRNpiIy.js";import"./Text-DCfUCUFU.js";import"./TextareaInput-NVugRJ0N.js";import"./Textarea-CUwSUjbB.js";import"./Footer-8NFPxx48.js";import"./logo-axa-Cqr9fAkX.js";import"./Header-C-O2thZm.js";import"./Infos-CFhLNnqv.js";import"./Name-Bfy7J7Lv.js";import"./HeaderTitle-DIC4ySBt.js";import"./ToggleButton-DLNPKGs4.js";import"./User-Cu7BV8N5.js";/* empty css               */import"./NavBarItem-DOGuL4OY.js";import"./RestitutionList-D4wmRsTI.js";import"./index-Dkgk0g15.js";import"./Svg-DdivJcec.js";import"./Title-B1OEM1uB.js";import"./Accordion-CTc0Popn.js";import"./Popover-UZP0ueis.js";import"./index-gLz9y_GM.js";import"./Loader-CX0sWZNv.js";import"./index-C_FWhylE.js";function s(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...m(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:p,name:"Docs"}),`
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
`,o.jsx(r,{of:l})]})}function No(e={}){const{wrapper:n}={...m(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(s,{...e})}):s(e)}export{No as default};
