import { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Fondations/Typography",
  component: Typography,
  args: {
    children: "Content",
  },
  argTypes: {
    component: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  tags: ["!dev"],
  render: (args) => {
    return <Typography {...args} />;
  },
};

export default meta;

export const TypographyStory: StoryObj<typeof Typography> = {
  name: "Typography",
  tags: ["dev"],
};

export const CustomElement: StoryObj<typeof Typography> = {
  args: {
    variant: "text",
    children: "Content text into main element",
    component: "main",
  },
};

export const H1: StoryObj<typeof Typography> = {
  args: {
    variant: "h1",
    children: "title h1",
  },
};

export const H2: StoryObj<typeof Typography> = {
  args: {
    variant: "h2",
    children: "title h2",
  },
};

export const H3: StoryObj<typeof Typography> = {
  args: {
    variant: "h3",
    children: "title h3",
  },
};

export const H4: StoryObj<typeof Typography> = {
  args: {
    variant: "h4",
    children: "title h4",
  },
};

export const Text: StoryObj<typeof Typography> = {
  args: {
    variant: "text",
    children: "Content text",
  },
};

export const Label: StoryObj<typeof Typography> = {
  args: {
    variant: "label",
    children: "Content label",
  },
};

export const TextStatic: StoryObj<typeof Typography> = {
  args: {
    variant: "text-static",
    children: "Content text static",
  },
};

export const LabelRestitution: StoryObj<typeof Typography> = {
  args: {
    variant: "label-restitution",
    children: "Content label restitution",
  },
};

export const ValueRestitution: StoryObj<typeof Typography> = {
  args: {
    variant: "value-restitution",
    children: "Content value restitution",
  },
};

export const Button: StoryObj<typeof Typography> = {
  args: {
    variant: "button",
    children: "Content button",
  },
};

export const Link: StoryObj<typeof Typography> = {
  args: {
    variant: "link",
    children: "Content link",
  },
};

export const Tag: StoryObj<typeof Typography> = {
  args: {
    variant: "tag",
    children: "Content tag",
  },
};

export const FormError: StoryObj<typeof Typography> = {
  args: {
    variant: "form-error",
    children: "Content form error",
  },
};

export const AppName: StoryObj<typeof Typography> = {
  args: {
    variant: "app-name",
    children: "Content app name",
  },
};

export const AppSubtitle: StoryObj<typeof Typography> = {
  args: {
    variant: "app-subtitle",
    children: "Content app subtitle",
  },
};

export const User: StoryObj<typeof Typography> = {
  args: {
    variant: "user",
    children: "Content user",
  },
};

export const Copyright: StoryObj<typeof Typography> = {
  args: {
    variant: "copyright",
    children: "Content copyright",
  },
};

export const StepTrain: StoryObj<typeof Typography> = {
  args: {
    variant: "step-train",
    children: "Content step train",
  },
};
