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

const sizeOptions = [
  { label: "Default", value: "" },
  { label: "Large (lg)", value: "lg" },
  { label: "Small (sm)", value: "sm" },
];

const meta = preview.type<{ args: CustomTitleModalStoryProps }>().meta({
  title: "Components/Modal",
  argTypes: {
    size: {
      options: sizeOptions.map((m) => m.value),
      control: { type: "radio" },
    },
  },
});
export default meta;

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
      'Voici une version avec un header customisé à l\'aide du composant Modal.HeaderBase. La prop size="lg" permet d’afficher une modale plus large, et size="sm" une modale plus petite.',
    cancelButtonText: "Annuler",
    saveButtonText: "Valider",
    size: undefined,
  },
});
