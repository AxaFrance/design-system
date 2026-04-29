import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@axa-fr/canopee-react/distributeur";
import { useRef } from "react";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

const MODIFIERS = [
  { label: "Default", value: "" },
  { label: "Large (lg)", value: "lg" },
  { label: "Small (sm)", value: "sm" },
];

const meta = preview.meta({
  title: "Components/Modal",
  component: Modal,
  parameters: {
    options: {},
  },
  args: {
    onSubmit: fn(),
    onCancel: fn(),
    onOutsideTap: fn(),
  },
  argTypes: {
    size: {
      control: {
        type: "radio",
        labels: { lg: "Large (lg)", sm: "Small (sm)", "": "Default" },
      },
      options: MODIFIERS.map((m) => m.value),
    },
    classModifier: {
      options: MODIFIERS.map((m) => m.value),
      control: {
        type: "radio",
        labels: { "": "Default", lg: "Large (lg)", sm: "Small (sm)" },
      },
    },
    onClose: {
      table: {
        disable: true,
      },
    },
    open: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
});

export const DefaultModalStory = meta.story({
  name: "Default Modal",
  render: ({ children, ...args }) => {
    const ref = useRef<HTMLDialogElement>(null);
    return (
      <>
        <button type="button" onClick={() => ref.current?.showModal()}>
          Open the modal
        </button>
        <Modal
          {...args}
          ref={ref}
          onClose={(e) => {
            args.onClose?.(e);
            ref.current?.close();
          }}
          onCancel={(e) => {
            args.onCancel?.(e);
          }}
          onOutsideTap={(e) => {
            args.onOutsideTap(e);
            ref.current?.close();
          }}
          onSubmit={(e) => args.onSubmit?.(e)}
        >
          <ModalHeader
            title={args.title}
            onCancel={() => {
              ref.current?.close();
            }}
          />
          <ModalBody>
            <p>{children}</p>
          </ModalBody>
          <ModalFooter>
            {args.size !== "sm" && (
              <Button
                variant="secondary"
                type="button"
                onClick={() => {
                  ref.current?.close();
                }}
              >
                Cancel
              </Button>
            )}
            <Button
              variant="validated"
              type="button"
              onClick={() => {
                ref.current?.close();
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
  args: {
    open: false,
    title: "Modal title",
    children:
      'Voici une version avec un header classique Modal.Header. Un classModifier "lg" a été mis pour montrer une version plus large d\'une modale. Il est existe également un modifier "sm", pour les modales plus petites. Mais il est possible d\'ajouter son propre modifier pour personnaliser selon ses besoins avec un peu de CSS.',
    size: undefined,
  },
});
