import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "@axa-fr/canopee-react/prospect";
import { type ComponentProps, type Ref, useEffect, useRef } from "react";

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

// `ref` is forwarded to the root element but is missing from the Loader props
type DialogStory = StoryObj<
  ComponentProps<typeof Loader> & { ref?: Ref<HTMLDialogElement> }
>;

export const Playground: Story = {
  args: {
    title: "Chargement en cours",
    subtitle: "Veuillez patienter",
  },
};

export const Dialog: DialogStory = {
  decorators: [
    (Story, { args: { isDialog = true, ...args } }) => {
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
    subtitle: "Merci de patienter quelques instants",
  },
};
