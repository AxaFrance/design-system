import type { Meta, StoryObj } from "@storybook/react";
import { ButtonAgent } from "./Button.agent";

const MODIFIERS = [
  "success",
  "info",
  "danger",
  "reverse",
  "disabled",
  "small",
  "hasiconLeft",
  "hasiconRight",
];

const meta: Meta<typeof ButtonAgent> = {
  component: ButtonAgent,
  title: "Slash/Components/Button",
  parameters: {
    layout: "centered",
  },
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof ButtonAgent>,
  "classModifier" | "children"
> & {
  children: string;
  classModifier: string[];
};
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Button",
  render: ({ children: text, classModifier, onClick, ...args }) => (
    <ButtonAgent
      classModifier={classModifier.join(" ")}
      onClick={onClick}
      {...args}
    >
      {text}
    </ButtonAgent>
  ),
  args: {
    children: "Button",
    classModifier: [] as string[],
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "multi-select" },
    },
  },
};

export const MultiExamples: StoryObj<typeof ButtonAgent> = {
  name: "Button with modifiers",
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "2rem",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <ButtonAgent classModifier="reverse">Button Reverse</ButtonAgent>
        <ButtonAgent classModifier="success">Button Success</ButtonAgent>
        <ButtonAgent classModifier="danger">Button Danger</ButtonAgent>
        <ButtonAgent classModifier="small">Button Small</ButtonAgent>
        <ButtonAgent classModifier="disabled">Button disabled</ButtonAgent>
      </div>
    );
  },
};

export const Reverse: StoryObj<typeof ButtonAgent> = {
  name: "Button reverse",
  args: {
    children: "Button Reverse",
    classModifier: "reverse",
  },
};

export const Success: StoryObj<typeof ButtonAgent> = {
  name: "Button success",
  args: {
    children: "Button success",
    classModifier: "success",
  },
};

export const Danger: StoryObj<typeof ButtonAgent> = {
  name: "Button danger",
  args: {
    children: "Button Danger",
    classModifier: "danger",
  },
};

export const WithIconRight: StoryObj<typeof ButtonAgent> = {
  name: "Button with right icon",
  args: {
    children: (
      <>
        <span className="glyphicon glyphicon-arrow-right" />
        <span className="af-btn__text">With icon</span>
      </>
    ),
    classModifier: "hasiconRight",
  },
};

export const WithIconLeft: StoryObj<typeof ButtonAgent> = {
  name: "Button with left icon",
  args: {
    children: (
      <>
        <span className="glyphicon glyphicon-arrow-left" />
        <span className="af-btn__text">With icon</span>
      </>
    ),
    classModifier: "hasiconLeft",
  },
};

export const Small: StoryObj<typeof ButtonAgent> = {
  name: "Button small",
  args: {
    children: "Button Small",
    classModifier: "small",
  },
};

export const Circle: StoryObj<typeof ButtonAgent> = {
  name: "Button circle",
  args: {
    classModifier: "circle",
    title: "Save",
    children: <span className="glyphicon glyphicon-floppy-disk" />,
  },
};
