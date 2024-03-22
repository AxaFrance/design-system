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
  render: ({ ...args }) => <RadioItem {...args} />,
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
