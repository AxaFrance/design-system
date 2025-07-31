import { CardRadio } from "@axa-fr/design-system-apollo-react/lf";
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const optionsDefault = [
  {
    label: "option 1",
    description: "description 1",
    subtitle: "subtitle 1",
    value: "1",
    icon: homeIcon,
  },
  {
    label: "option 2",
    description: "description 2",
    subtitle: "subtitle 2",
    value: "2",
    icon: homeIcon,
  },
  {
    label: "option 3",
    description: "description 3",
    subtitle: "subtitle 3",
    value: "3",
    icon: homeIcon,
  },
];

const meta: Meta = {
  title: "Components/Form/Radio/CardRadio",
  component: CardRadio,
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
      table: {
        defaultValue: { summary: "vertical" },
        type: { summary: '"vertical" | "horizontal"' },
      },
    },
    label: {
      control: "text",
    },
    description: {
      control: "text",
    },
    options: {
      control: { type: "object" },
      description: "Radio card options",
    },
    required: {
      control: "boolean",
    },
    error: {
      control: "text",
    },
    labelGroup: {
      table: {
        disable: true,
      },
    },
    descriptionGroup: {
      table: {
        disable: true,
      },
    },
    isRequired: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "vertical",
    label: "Label",
    description: "Description",
    name: "name",
    options: optionsDefault,
    required: false,
    error: "",
  },
};

export default meta;

export const CardRadioStory: StoryObj<ComponentProps<typeof CardRadio>> = {
  name: "Playground",
  render: ({ description, error, name, type, ...args }) => (
    <CardRadio
      {...args}
      description={description !== "" ? description : undefined}
      error={error !== "" ? error : undefined}
      name={name !== "" ? name : undefined}
      type={type === "horizontal" ? type : undefined}
    />
  ),
};
