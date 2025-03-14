import "@axa-fr/design-system-apollo-css/dist/Button/ButtonLF.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/Form/InputError/InputError.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/Form/Text/Text.scss";
import type { Meta, StoryObj } from "@storybook/html";
import { render } from "./TextRender";

const meta: Meta = {
  args: {
    value: "John Doe",
    label: "Label",
    placeholder: "Your name",
    disabled: false,
    required: true,
    helper: "Do you need help ?",
  },
  argTypes: {
    label: {
      control: { type: "text" },
    },
  },
  title: "Components/Form/Input/Text",
};

export default meta;

export const TextStory: StoryObj = {
  name: "Text",
  render,
};

export const TextWithDescriptionStory: StoryObj = {
  name: "Text with description",
  render,
  args: {
    description: "Description",
  },
};

export const TextOnErrorStory: StoryObj = {
  name: "Text on error",
  render,
  args: {
    description: "Description",
    error: "Error Message",
  },
};

export const TextWithKnowMore: StoryObj = {
  name: "Text with know more",
  render,
  args: {
    description: "Description",
    buttonLabel: "En savoir plus",
  },
};

export const TextWithModify: StoryObj = {
  name: "Text with modify",
  render,
  args: {
    description: "Description",
    sideButtonLabel: "Modifier",
  },
};

export const TextWithFull: StoryObj = {
  name: "Text Full",
  render,
  args: {
    description: "Description",
    buttonLabel: "En savoir plus",
    sideButtonLabel: "Modifier",
    error: "Error Message",
  },
};
