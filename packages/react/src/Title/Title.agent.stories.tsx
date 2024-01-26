import { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title.agent";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
};
export default meta;

const MODIFIERS = ["", "content", "bigTitle"];

type StoryProps = Omit<
  React.ComponentProps<typeof Title>,
  "classModifier" | "children"
> & {
  children: string;
  classModifier: string;
};
type Story = StoryObj<StoryProps>;

export const Template: Story = {
  name: "Title",
  render: ({ children: text, classModifier, ...args }) => (
    <Title classModifier={classModifier} {...args}>
      {text}
    </Title>
  ),
  args: {
    children: "Sample Title",
    classModifier: "",
    className: "",
    heading: "h2",
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
    },
  },
};

export const MultiExamples: StoryObj<typeof Title> = {
  name: "Title with modifiers",
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <Title heading={args.heading} classModifier="af-title">
          Default Title
        </Title>
        <Title heading={args.heading} classModifier="content">
          Content Title
        </Title>
        <Title heading={args.heading} classModifier="bigTitle">
          Big Title
        </Title>
        <Title heading={args.heading} className="af-subtitle">
          Sub-Title
        </Title>
      </div>
    );
  },
  args: {
    heading: "h2",
  },
  argTypes: {
    heading: {
      options: ["h2", "h3", "h4"],
      control: { type: "radio" },
    },
  },
};

export const DefaultTitle: StoryObj<typeof Title> = {
  name: "Default Title",
  args: {
    children: "Default Title",
    classModifier: "",
    heading: "h2",
  },
};

export const BigTitle: StoryObj<typeof Title> = {
  name: "Big Title",
  args: {
    children: "Big Title",
    classModifier: "bigTitle",
    heading: "h2",
  },
};

export const SubTitle: StoryObj<typeof Title> = {
  name: "Sub-Title",
  args: {
    children: "Sub-Title",
    classModifier: "",
    className: "af-subtitle",
    heading: "h2",
  },
};

export const contentTitle: StoryObj<typeof Title> = {
  name: "Content Title",
  args: {
    children: "Content Title",
    classModifier: "content",
    className: "",
    heading: "h2",
  },
};
