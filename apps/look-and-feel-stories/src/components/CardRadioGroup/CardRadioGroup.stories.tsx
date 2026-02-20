import {
  CardRadioGroup,
  itemMessageVariants,
} from "@axa-fr/canopee-react/client";
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const optionsDefault = [
  {
    label: "Paris",
    value: "paris",
    icon: homeIcon,
    description: "Capitale de la France",
  },
  {
    label: "Bruxelles",
    value: "bruxelles",
    icon: homeIcon,
    description: "Capitale de la Belgique",
  },
  {
    label: "Lille",
    value: "lille",
    icon: homeIcon,
    description: "Chef-lieu de la région Hauts-de-France",
  },
];

const meta: Meta = {
  title: "Components/Form/Radio/CardRadioGroup",
  component: CardRadioGroup,
  argTypes: {
    name: {
      description: "Form field name",
      table: { category: "Field" },
    },
    label: {
      description: "Form field label",
      table: { category: "Field" },
    },
    description: {
      control: "text",
      description: "Form field description",
      table: { category: "Field" },
    },
    cardStyle: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
      description:
        "Radio cards layout (corresponds to `CardRadioOption` `position` prop)",
      table: {
        category: "Layout",
        defaultValue: { summary: "vertical" },
        type: { summary: '"vertical" | "horizontal"' },
      },
    },
    position: {
      control: { type: "inline-radio" },
      options: ["column", "line"],
      description: "Radio cards layout position in the group",
      table: {
        category: "Layout",
        defaultValue: { summary: "column" },
        type: { summary: '"column" | "line"' },
      },
    },
    options: {
      control: { type: "object" },
      description: "Radio card options",
      table: {
        category: "Options",
        type: { summary: "CardRadioOptionProps[]" },
      },
    },
    required: {
      control: "boolean",
      description: "Whether the field is required or not",
      table: {
        category: "Validation",
        defaultValue: { summary: "false" },
      },
    },
    message: {
      control: "text",
      description:
        "Error, validation or warning message displayed below the group (depends on the `messageType`)",
      table: { category: "Validation" },
    },
    messageType: {
      options: Object.values(itemMessageVariants),
      control: { type: "select" },
      description:
        "Type of the message displayed (error, validation or warning)",
      table: {
        category: "Validation",
        defaultValue: { summary: "error" },
        type: { summary: '"error" | "validation" | "warning"' },
      },
    },
    className: {
      control: "text",
      description: "Class name for custom styling",
      table: {
        category: "Customization",
        type: { summary: "string" },
      },
    },
    labelGroup: {
      table: {
        disable: true,
        category: "Internal",
      },
    },
    descriptionGroup: {
      table: {
        disable: true,
        category: "Internal",
      },
    },
    isRequired: {
      table: {
        disable: true,
        category: "Internal",
      },
    },
    value: {
      table: {
        disable: true,
        category: "Internal",
      },
    },
  },
  args: {
    name: "city",
    label: "Choose a city",
    description: "This is a description for the card radio group",
    cardStyle: "vertical",
    position: "column",
    options: optionsDefault,
    required: false,
    messageType: "error",
  },
};

export default meta;

export const CardRadioStory: StoryObj<ComponentProps<typeof CardRadioGroup>> = {
  name: "Playground",
  render: ({ description, error, name, ...args }) => (
    <CardRadioGroup
      description={description !== "" ? description : undefined}
      error={error !== "" ? error : undefined}
      name={name !== "" ? name : undefined}
      {...args}
    />
  ),
};
