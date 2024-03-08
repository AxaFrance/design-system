import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { CheckboxItem } from "./CheckboxItem";

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
    icon: <HomeIcon />,
    label: "Lille",
    description: "Hauts-de-France",
    value: "",
    checked: false,
    disabled: false,
    name: "placeName",
    id: "where-are-you",
  },
};

export const WithOnlyLabel: StoryObj<typeof CheckboxItem> = {
  name: "Checkbox with only a label",
  args: {
    label: "Lille",
  },
};

export const WithIcon: StoryObj<typeof CheckboxItem> = {
  name: "Checkbox with an icon",
  args: {
    icon: <HomeIcon />,
    label: "Lille",
    value: "Lille",
    disabled: false,
    name: "placeName",
    id: "where-are-you",
  },
};

export const WithDescription: StoryObj<typeof CheckboxItem> = {
  name: "Checkbox with a description",
  args: {
    label: "Lille",
    description: "Hauts-de-France",
  },
};
