import type { Decorator, Meta, StoryObj } from "@storybook/react";
import { Loader } from "@axa-fr/canopee-react/prospect";
import { useEffect, useRef } from "react";

const withDialogState: Decorator = (
  Story,
  { args: { isDialog = false, ...args } },
) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = modalRef.current;
    if (!dialog) {
      return;
    }

    if (isDialog) {
      if (!dialog.open) {
        dialog.showModal();
      }
      return;
    }

    if (dialog.open) {
      dialog.close();
    }
  }, [isDialog]);

  return <Story args={{ ...args, isDialog, ref: modalRef }} />;
};

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "desktop" },
  },
  decorators: [withDialogState],
  argTypes: {
    title: {
      control: "text",
      description: "Titre du loader (obligatoire)",
    },
    subtitle: {
      control: "text",
      description: "Sous-titre du loader (optionnel)",
    },
    isDialog: {
      control: "boolean",
      description: "Affiche le loader dans un <dialog> modal",
    },
    spinnerProps: {
      control: "object",
      description: "Props à passer au Spinner",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    title: "Chargement en cours",
    subtitle: "Veuillez patienter",
    isDialog: false,
  },
};
