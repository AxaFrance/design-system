import { Button, Link, Title } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";
import { ReactElement } from "react";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
};
export default meta;

const MODIFIERS = ["", "content"];
const CONTENTS = ["Button", "Link", "None"];

type StoryProps = Omit<
  React.ComponentProps<typeof Title>,
  "classModifier" | "children"
> & {
  children: string;
  classModifier: string;
};
type Story = StoryObj<StoryProps>;

const getContent = (content?: string) => {
  switch (content) {
    case "Link": {
      return (<Link href="/">Click me</Link>) as ReactElement;
    }
    case "Button": {
      return (<Button>Click me</Button>) as ReactElement;
    }
    default: {
      return undefined;
    }
  }
};

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

export const TitleWithContent: StoryObj<
  Omit<StoryProps, "contentLeft" | "contentRight"> & {
    contentLeft?: string;
    contentRight?: string;
  }
> = {
  render: ({ children, contentLeft, contentRight, heading }) => {
    return (
      <Title
        heading={heading}
        contentLeft={getContent(contentLeft)}
        contentRight={getContent(contentRight)}
      >
        {children}
      </Title>
    );
  },
  args: {
    children: "Title with content",
    heading: "h2",
    contentLeft: "Button",
    contentRight: "Link",
  },
  argTypes: {
    contentLeft: {
      options: CONTENTS,
      control: { type: "select" },
    },
    contentRight: {
      options: CONTENTS,
      control: { type: "select" },
    },
  },
};
