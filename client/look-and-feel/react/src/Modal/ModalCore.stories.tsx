import type { Meta, StoryObj } from "@storybook/react";
import home from "@material-symbols/svg-400/outlined/home-fill.svg";
import { fn } from "@storybook/test";
import { useRef } from "react";
import { ModalCore } from "./ModalCore";
import { ButtonClient } from "../Button/Button";
import { ButtonVariants } from "..";

const meta: Meta<typeof ModalCore> = {
  title: "Components/Modal/ModalCore",
  component: ModalCore,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onSubmit: fn(),
    onCancel: fn(),
    onOutsideTap: fn(),
    onClose: fn(),
  },
};
export default meta;

type DefaultModalStoryProps = Omit<
  React.ComponentProps<typeof ModalCore>,
  "children"
> & {
  children: string;
  bodyContent: string;
  cancelButtonText: string;
  saveButtonText: string;
  onSubmit: () => void;
  onCancel: () => void;
  onOutsideTap: () => void;
};
type TDefaultModalStory = StoryObj<DefaultModalStoryProps>;

export const DefaultModalStory: TDefaultModalStory = {
  name: "Default Modal",
  render: ({ bodyContent, cancelButtonText, saveButtonText, ...args }) => {
    const ref = useRef<HTMLDialogElement>(null);
    return (
      <>
        <ButtonClient onClick={() => ref.current?.showModal()}>
          Open the modal
        </ButtonClient>
        <ModalCore
          {...args}
          ref={ref}
          onClose={() => ref.current?.close()}
          onOutsideTap={() => {
            args.onOutsideTap();
            ref.current?.close();
          }}
        >
          <ModalCore.Header
            title={args.title}
            subtitle="Modal subtitle"
            iconTitle={home}
            onCancel={() => {
              args.onCancel();
              ref.current?.close();
            }}
          />
          <ModalCore.Body>
            <p>{bodyContent}</p>
          </ModalCore.Body>
          <ModalCore.Footer>
            <ButtonClient
              variant={ButtonVariants.secondary}
              onClick={() => {
                args.onCancel();
                ref.current?.close();
              }}
            >
              {cancelButtonText}
            </ButtonClient>

            <ButtonClient
              variant={ButtonVariants.primary}
              onClick={() => {
                args.onSubmit();
                ref.current?.close();
              }}
            >
              {saveButtonText}
            </ButtonClient>
          </ModalCore.Footer>
        </ModalCore>
      </>
    );
  },
  args: {
    open: false,
    title: "Modal title",
    bodyContent:
      'Voici une version avec un header classique Modal.Header. Un classModifier "lg" a été mis pour montrer une version plus large d\'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d\'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.',
    cancelButtonText: "Annuler",
    saveButtonText: "Valider",
  },
};
