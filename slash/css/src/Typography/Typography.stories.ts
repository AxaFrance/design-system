import type { Meta, StoryObj } from "@storybook/html";
import "./Typography.scss";

const meta: Meta = {
  title: "Fondations/Typography",
  args: {
    class: "af-typography__h1",
    text: "Content",
    element: "p",
  },
  argTypes: {
    class: {
      options: [
        "af-typography--h1",
        "af-typography--h2",
        "af-typography--h3",
        "af-typography--h4",
        "af-typography--text",
        "af-typography--label",
        "af-typography--text-static",
        "af-typography--label-restitution",
        "af-typography--value-restitution",
        "af-typography--button",
        "af-typography--link",
        "af-typography--tag",
        "af-typography--form-error",
        "af-typography--app-name",
        "af-typography--app-subtitle",
        "af-typography--user",
        "af-typography--copyright",
        "af-typography--step-train",
      ],
      control: { type: "select" },
    },
    element: {
      table: {
        disable: true,
      },
    },
  },
  tags: ["!dev"],
  render: (args) => {
    const text = document.createElement(args.element);
    text.innerHTML = args.text;

    text.className = args.class;

    return text;
  },
};

export default meta;

export const Typography: StoryObj = {
  args: {
    class: "af-typography--text",
  },
  tags: ["dev"],
};

export const H1: StoryObj = {
  args: {
    class: "af-typography--h1",
    text: "title h1",
    element: "h1",
  },
};

export const H2: StoryObj = {
  args: {
    class: "af-typography--h2",
    text: "title h2",
    element: "h2",
  },
};

export const H3: StoryObj = {
  args: {
    class: "af-typography--h3",
    text: "title h3",
    element: "h3",
  },
};

export const H4: StoryObj = {
  args: {
    class: "af-typography--h4",
    text: "title h4",
    element: "h4",
  },
};

export const Text: StoryObj = {
  args: {
    class: "af-typography--text",
    text: "Content text",
  },
};

export const Label: StoryObj = {
  args: {
    class: "af-typography--label",
    text: "Content label",
    element: "label",
  },
};

export const TextStatic: StoryObj = {
  args: {
    class: "af-typography--text-static",
    text: "Content text static",
  },
};

export const LabelRestitution: StoryObj = {
  args: {
    class: "af-typography--label-restitution",
    text: "Content label restitution",
  },
};

export const ValueRestitution: StoryObj = {
  args: {
    class: "af-typography--value-restitution",
    text: "Content calue restitution",
  },
};

export const Button: StoryObj = {
  args: {
    class: "af-typography--button",
    text: "Content button",
    element: "button",
  },
};

export const Link: StoryObj = {
  args: {
    class: "af-typography--link",
    text: "Content link",
    element: "a",
  },
};

export const Tag: StoryObj = {
  args: {
    class: "af-typography--tag",
    text: "Content tag",
  },
};

export const FormError: StoryObj = {
  args: {
    class: "af-typography--form-error",
    text: "Content form error",
    element: "small",
  },
};

export const AppName: StoryObj = {
  args: {
    class: "af-typography--app-name",
    text: "Content app name",
  },
};

export const AppSubtitle: StoryObj = {
  args: {
    class: "af-typography--app-subtitle",
    text: "Content app subtitle",
  },
};

export const User: StoryObj = {
  args: {
    class: "af-typography--user",
    text: "Content user",
  },
};

export const Copyright: StoryObj = {
  args: {
    class: "af-typography--copyright",
    text: "Content copyright",
  },
};

export const StepTrain: StoryObj = {
  args: {
    class: "af-typography--step-train",
    text: "Content step train",
  },
};
