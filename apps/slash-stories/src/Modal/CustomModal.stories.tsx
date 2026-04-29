import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeaderBase,
} from "@axa-fr/canopee-react/distributeur";
import preview from "../../.storybook/preview";

type CustomTitleModalStoryProps = Omit<
  React.ComponentProps<typeof Modal>,
  "title" | "children"
> & {
  title: React.ReactNode;
  children: string;
  cancelButtonText: string;
  saveButtonText: string;
};

const MODIFIERS = [
  { label: "Default", value: "" },
  { label: "Large (lg)", value: "lg" },
  { label: "Small (sm)", value: "sm" },
];

const meta = preview.type<{ args: CustomTitleModalStoryProps }>().meta({
  title: "Components/Modal",
  argTypes: {
    classModifier: {
      options: MODIFIERS.map((m) => m.label),
      control: { type: "radio" },
    },
  },
});

export const CustomTitleModalStory = meta.story({
  name: "Custom Title Modal",
  render: ({ children, cancelButtonText, saveButtonText, ...args }) => {
    return (
      <div>
        <Modal {...args} title={undefined} onOutsideTap={() => {}}>
          <ModalHeaderBase id="headerId">{args.title}</ModalHeaderBase>
          <ModalBody>
            <p>{children}</p>
          </ModalBody>
          <ModalFooter>
            {args.size !== "sm" && (
              <button className="btn af-btn af-btn--reverse" type="button">
                {cancelButtonText}
              </button>
            )}
            <button className="btn af-btn" type="button">
              {saveButtonText}
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  },
  args: {
    open: true,
    title: (
      <p>
        Ici je contrôle complètement
        <strong> le contenu</strong>
      </p>
    ),
    bodyContent:
      'Voici une version avec un header customisé à l\'aide du composant Modal.HeaderBase. Un classModifier "lg" a été mis pour montrer une version plus large d\'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d\'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.',
    cancelButtonText: "Annuler",
    saveButtonText: "Valider",
    classModifier: MODIFIERS[0].label,
  },
});
