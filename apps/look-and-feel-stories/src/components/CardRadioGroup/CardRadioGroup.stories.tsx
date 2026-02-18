import {
  CardRadioGroup,
  itemMessageVariants,
} from "@axa-fr/canopee-react/client";
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
  title: "Components/Form/Radio/CardRadioGroup",
  component: CardRadioGroup,
  argTypes: {
    cardStyle: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
      table: {
        defaultValue: { summary: "vertical" },
        type: { summary: '"vertical" | "horizontal"' },
      },
    },
    position: {
      control: { type: "inline-radio" },
      options: ["column", "line"],
      table: {
        type: { summary: '"column" | "line"' },
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
    messageType: {
      options: Object.values(itemMessageVariants),
      control: { type: "select" },
    },
  },
  args: {
    cardStyle: "vertical",
    position: "column",
    label: "Label",
    description: "Description",
    name: "name",
    options: optionsDefault,
    required: false,
    error: "",
    message: "",
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
