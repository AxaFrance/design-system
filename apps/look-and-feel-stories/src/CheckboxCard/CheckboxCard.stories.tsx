import { CheckboxCard } from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import homeIcons from "@material-symbols/svg-400/outlined/home.svg";

const meta: Meta = {
  title: "Components/Form/Checkbox/CheckboxCard",
  component: CheckboxCard,
  argTypes: {},
};

export default meta;

export const CheckboxCardStory: StoryObj<ComponentProps<typeof CheckboxCard>> =
  {
    name: "CheckboxCard",
    render: ({ ...args }) => <CheckboxCard {...args} />,
    args: {
      type: "vertical",
      isRequired: true,
      options: [
        {
          label: "Paris",
          description: "Capitale de la France",
          subtitle: "Nord",
          name: "paris",
          value: "paris",
          icon: homeIcons,
        },
        {
          label: "Bruxelles",
          description: "Capitale de la Belgique",
          name: "bruxelles",
          value: "bruxelles",
          hasError: true,
          icon: homeIcons,
        },
        {
          label: "Lille",
          name: "lille",
          value: "lille",
          icon: homeIcons,
          checked: true,
        },
      ],
    },
    argTypes: {
      type: {
        control: { type: "inline-radio" },
        options: ["vertical", "horizontal"],
      },
      options: {
        control: { type: "object" },
      },
      onChange: { action: "onChange" },
    },
  };

export const CheckboxCardWithLabel: StoryObj<
  ComponentProps<typeof CheckboxCard>
> = {
  name: "CheckboxCardWithLabel",
  render: ({ ...args }) => <CheckboxCard {...args} />,
  args: {
    type: "vertical",
    labelGroup: "Quelle ville ?",
    descriptionGroup: "Choisissez une ville",
    isRequired: true,
    options: [
      {
        label: "Paris",
        description: "Capitale de la France",
        subtitle: "Nord",
        name: "paris",
        value: "paris",
        icon: homeIcons,
      },
      {
        label: "Bruxelles",
        description: "Capitale de la Belgique",
        name: "bruxelles",
        value: "bruxelles",
        hasError: true,
        icon: homeIcons,
      },
      {
        label: "Lille",
        name: "lille",
        value: "lille",
        icon: homeIcons,
        checked: true,
      },
    ],
  },
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
    },
    options: {
      control: { type: "object" },
    },
    onChange: { action: "onChange" },
  },
};
