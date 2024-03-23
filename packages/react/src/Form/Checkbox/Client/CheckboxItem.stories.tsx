import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import { CheckboxItem } from "./CheckboxItem";
import { Icon } from "../../../Icons/Icon.client";

const meta: Meta<typeof CheckboxItem> = {
  component: CheckboxItem,
  title: "Client/Components/Form/Input/Checkbox",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

type CheckboxItemProps = ComponentPropsWithRef<typeof CheckboxItem>;
export const CheckboxItemStory: StoryObj<CheckboxItemProps> = {
  name: "CheckboxItem",
  render: ({ ...args }) => <CheckboxItem {...args} />,
  args: {
    icon: <Icon name="Home" />,
    title: "Lille",
    subtitle: "Hauts-de-France",
    description: "Nord",
    value: "",
    checked: false,
    disabled: false,
    erroneous: false,
    centerContent: false,
    name: "placeName",
    id: "where-are-you",
  },
};
