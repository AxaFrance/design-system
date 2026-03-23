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
  },
};

export const Dialog: Story = {
  decorators: [
    (Story, { args: { open = true, isDialog = true, ...args } }) => {
      const modalRef = useRef<HTMLDialogElement>(null);

      useEffect(() => {
        if (open && isDialog) {
          modalRef.current?.showModal();
          return;
        }

        modalRef.current?.close();
      }, [open, isDialog]);

      return <Story args={{ ...args, isDialog, ref: modalRef }} />;
    },
  ],
  args: {
    title: "Chargement en cours",
    subtitle: "Merci de patienter quelques instants",
  },
};
