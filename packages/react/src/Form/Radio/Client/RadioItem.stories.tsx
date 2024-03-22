import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import { RadioItem } from "./RadioItem";
import { Icon } from "../../../Icons/icons.client";

const meta: Meta<typeof RadioItem> = {
  component: RadioItem,
  title: "Client/Components/Form/Input/Radio",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

type RadioItemProps = Omit<
  ComponentPropsWithRef<typeof RadioItem>,
  "classModifier"
> & {
  classModifier?: string[];
};
export const RadioItemStory: StoryObj<RadioItemProps> = {
  name: "RadioItem",
  render: ({ ...args }) => <RadioItem {...args} />,
  args: {
    icon: <Icon name="home" />,
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
