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
