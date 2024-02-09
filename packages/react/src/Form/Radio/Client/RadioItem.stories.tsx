import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { RadioItem } from "./RadioItem";

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
  render: ({ classModifier, onChange, ...args }) => (
    <RadioItem
      classModifier={classModifier?.join(" ")}
      onChange={onChange}
      {...args}
    />
  ),
  args: {
    icon: <HomeIcon />,
    choice: "Lille",
    description: "Hauts-de-France",
    value: "",
    isChecked: false,
    disabled: false,
    name: "placeName",
    id: "where-are-you",
  },
  argTypes: {
    onChange: { action: "onChange" },
    classModifier: {
      options: ["disabled"],
      control: { type: "inline-check" },
    },
  },
};

export const WithOnlyLabel: StoryObj<typeof RadioItem> = {
  name: "Radio with only a label",
  args: {
    choice: "Lille",
  },
};

export const WithIcon: StoryObj<typeof RadioItem> = {
  name: "Radio with an icon",
  args: {
    icon: <HomeIcon />,
    choice: "Lille",
    value: "",
    isChecked: false,
    disabled: false,
    name: "placeName",
    id: "where-are-you",
  },
};

export const WithDescription: StoryObj<typeof RadioItem> = {
  name: "Radio with a description",
  args: {
    choice: "Lille",
    description: "Hauts-de-France",
  },
};
