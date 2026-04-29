import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "@axa-fr/canopee-react/client";
import { useEffect, useRef } from "react";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "desktop" },
  },
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
  decorators: [
    (Story, { args: { isDialog = false, ...args } }) => {
      const modalRef = useRef<HTMLDialogElement>(null);

      useEffect(() => {
        if (isDialog) {
          modalRef.current?.showModal();
          return;
        }
        modalRef.current?.close();
      }, [isDialog]);

      return <Story args={{ ...args, isDialog, ref: modalRef }} />;
    },
  ],
  args: {
    title: "Chargement en cours",
    subtitle: "Veuillez patienter",
    isDialog: false,
  },
};
