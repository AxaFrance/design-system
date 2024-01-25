import { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title.agent";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
};
export default meta;

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
  },
};

export const MultiExamples: StoryObj<typeof Title> = {
  name: "Title with modifiers",
  render: () => {
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
        <Title classModifier="af-title">Default Title</Title>
        <Title classModifier="af-title--content">Content Title</Title>
        <Title classModifier="af-title--bigTitle">Big Title</Title>
        <Title classModifier="af-subtitle">Sub-Title</Title>
      </div>
    );
  },
};

export const DefaultTitle: StoryObj<typeof Title> = {
  name: "Default Title",
  args: {
    children: "Default Title",
    classModifier: "af-title",
  },
};

export const BigTitle: StoryObj<typeof Title> = {
  name: "Big Title",
  args: {
    children: "Big Title",
    classModifier: "af-title--bigTitle",
  },
};

export const SubTitle: StoryObj<typeof Title> = {
  name: "Sub-Title",
  args: {
    children: "Sub-Title",
    classModifier: "af-subtitle",
  },
};

export const contentTitle: StoryObj<typeof Title> = {
  name: "Content Title",
  args: {
    children: "Content Title",
    classModifier: "af-title--content",
  },
};
