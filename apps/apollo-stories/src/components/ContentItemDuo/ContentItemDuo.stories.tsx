import { ContentItemDuo } from "@axa-fr/canopee-react/prospect";
import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

const meta: Meta<typeof ContentItemDuo> = {
  title: "Components/ContentItemDuo",
  component: ContentItemDuo,
  args: {
    label: "Label",
    value: "Value",
    buttonText: "Learn more",
  },
  argTypes: {
    className: { control: "text" },
    classModifier: { control: "text" },
    position: {
      options: ["horizontal", "vertical"],
      control: {
        type: "select",
      },
    },
    isVertical: { control: "boolean" },
    size: {
      options: ["small", "large"],
      control: {
        type: "select",
      },
    },
    onButtonClick: { action: "onButtonClick" },
  },
  decorators: [
    (Story) => (
      <dl>
        <Story />
      </dl>
    ),
  ],
};

export default meta;

export const ContentItemDuoHorizontal: StoryObj<
  ComponentProps<typeof ContentItemDuo>
> = {
  args: {
    position: "horizontal",
    label: "Label",
    value: "Value",
    size: "large",
  },
};

export const ContentItemDuoVertical: StoryObj<
  ComponentProps<typeof ContentItemDuo>
> = {
  args: {
    position: "vertical",
    label:
      "Collision of motor vehicles (car, electric scooter, etc.) or crash of aircraft (planes, helicopters, etc.) with an identified owner of the other vehicle?",
    value: "Fires, explosions, implosions, smoke, and lightning",
  },
  argTypes: {
    size: { control: false },
  },
};
