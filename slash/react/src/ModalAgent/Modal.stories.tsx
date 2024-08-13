import "@axa-fr/design-system-slash-css/dist/Modal/Modal.agent.scss";
import type { Meta, StoryObj } from "@storybook/react";
import type { ReactElement, ReactNode } from "react";
import { BooleanModal } from "./BooleanModal";
import { Modal } from "./Modal";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeaderBase } from "./components/HeaderBase";

const MODIFIERS = [
  { label: "Default", value: "" },
  { label: "Large (lg)", value: "lg" },
  { label: "Small (sm)", value: "sm" },
];

const meta: Meta<typeof Modal> = {
  title: "Slash/Components/Modal",
  component: Modal,
  parameters: {
    options: {},
  },
};
export default meta;

type DefaultModalStoryProps = Omit<
  React.ComponentProps<typeof Modal>,
  "children"
> & {
  children: string;
  bodyContent: string;
  cancelButtonText: string;
  saveButtonText: string;
};
type TDefaultModalStory = StoryObj<DefaultModalStoryProps>;

export const DefaultModalStory: TDefaultModalStory = {
  name: "Default Modal",
  render: ({ bodyContent, cancelButtonText, saveButtonText, ...args }) => {
    const selectClassModifier =
      MODIFIERS.find((m) => m.label === args.classModifier) ?? MODIFIERS[0];

    return (
      <Modal
        {...args}
        classModifier={selectClassModifier.value}
        onOutsideTap={() => {}}
      >
        <Header title={args.title} onCancel={() => {}} />
        <Body>
          <p>{bodyContent}</p>
        </Body>
        <Footer>
          {selectClassModifier.value !== "sm" && (
            <button className="btn af-btn af-btn--reverse" type="button">
              {cancelButtonText}
            </button>
          )}
          <button className="btn af-btn" type="button">
            {saveButtonText}
          </button>
        </Footer>
      </Modal>
    );
  },
  args: {
    open: true,
    title: "Modal title",
    bodyContent:
      'Voici une version avec un header classique Modal.Header. Un classModifier "lg" a été mis pour montrer une version plus large d\'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d\'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.',
    cancelButtonText: "Annuler",
    saveButtonText: "Valider",
    classModifier: MODIFIERS[0].label,
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS.map((m) => m.label),
      control: { type: "radio" },
    },
  },
};

type CustomTitleModalStoryProps = Omit<
  React.ComponentProps<typeof Modal>,
  "title" | "children"
> & {
  title: ReactNode;
  children: string;
  bodyContent: string;
  cancelButtonText: string;
  saveButtonText: string;
};
type TCustomTitleModalStory = StoryObj<CustomTitleModalStoryProps>;

export const CustomTitleModalStory: TCustomTitleModalStory = {
  name: "Custom Title Modal",
  render: ({ bodyContent, cancelButtonText, saveButtonText, ...args }) => {
    const selectClassModifier =
      MODIFIERS.find((m) => m.label === args.classModifier) ?? MODIFIERS[0];

    return (
      <div>
        <Modal
          {...args}
          title={undefined}
          classModifier={selectClassModifier.value}
          onOutsideTap={() => {}}
        >
          <HeaderBase id="headerId">{args.title}</HeaderBase>
          <Body>
            <p>{bodyContent}</p>
          </Body>
          <Footer>
            {selectClassModifier.value !== "sm" && (
              <button className="btn af-btn af-btn--reverse" type="button">
                {cancelButtonText}
              </button>
            )}
            <button className="btn af-btn" type="button">
              {saveButtonText}
            </button>
          </Footer>
        </Modal>
      </div>
    );
  },
  args: {
    open: true,
    title: (
      <p>
        Ici je contrôle complètement
        <b> le contenu</b>
      </p>
    ),
    bodyContent:
      'Voici une version avec un header customisé à l\'aide du composant Modal.HeaderBase. Un classModifier "lg" a été mis pour montrer une version plus large d\'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d\'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.',
    cancelButtonText: "Annuler",
    saveButtonText: "Valider",
    classModifier: MODIFIERS[0].label,
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS.map((m) => m.label),
      control: { type: "radio" },
    },
  },
};

type BooleanModalStoryProps = React.ComponentProps<typeof BooleanModal> & {
  bodyContent: ReactElement;
  cancelButtonText: string;
  saveButtonText: string;
};
type TBooleanModalStory = StoryObj<BooleanModalStoryProps>;

export const BooleanModalStory: TBooleanModalStory = {
  name: "Boolean Modal",
  render: ({ classModifier, ...args }) => {
    const selectClassModifier =
      MODIFIERS.find((m) => m.label === classModifier) ?? MODIFIERS[0];

    return (
      <BooleanModal
        classModifier={selectClassModifier.value}
        {...args}
        onCancel={() => {}}
      >
        {args.bodyContent}
      </BooleanModal>
    );
  },
  args: {
    open: true,
    title: "Boolean Modal title",
    bodyContent: (
      <p>
        Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo in
        aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea eu
        laborum culpa laboris. Labore labore irure ipsum consequat enim officia
        anim ipsum aliqua excepteur qui sint. Duis sint do culpa adipisicing
        dolor adipisicing ea dolore aute nisi quis ullamco aliquip occaecat.
        Aute ut mollit amet.
      </p>
    ),
    cancelTitle: "Annuler",
    submitTitle: "Valider",
    classModifier: MODIFIERS[0].label,
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS.map((m) => m.label),
      control: { type: "radio" },
    },
  },
};
