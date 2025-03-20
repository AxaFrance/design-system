import { CheckboxText } from "@axa-fr/design-system-apollo-react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta = {
  title: "Components/Form/Checkbox/CheckboxText",
  component: CheckboxText,
  argTypes: {},
};

export default meta;

export const CheckboxTextStory: StoryObj<ComponentProps<typeof CheckboxText>> =
  {
    name: "CheckboxText",

    render: ({ ...args }) => <CheckboxText {...args} />,
    args: {
      label:
        "J'accepte de fournir à AXA mes coordonnées ainsi que les données  relatives à mon projet et ma situation. Ces dernières seront transmises à mon conseiller AXA qui pourra  me contacter pour m'accompagner.",
      name: "option1",
      value: "option1",
    },
    argTypes: {
      label: {
        control: { type: "text" },
      },
      name: {
        control: { type: "text" },
      },
      value: {
        control: { type: "text" },
      },
      errorMessage: {
        control: { type: "text" },
      },
      checked: {
        control: { type: "boolean" },
      },
      onChange: { action: "onChange" },
    },
  };
