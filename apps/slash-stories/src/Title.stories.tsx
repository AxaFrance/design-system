import { Button, Link, Title } from "@axa-fr/canopee-react/distributeur";
import { ReactElement } from "react";
import preview from "../.storybook/preview";

const MODIFIERS = ["", "content"];
const CONTENTS = ["Button", "Link", "None"] as const;

type StoryProps = Omit<
  React.ComponentProps<typeof Title>,
  "classModifier" | "children" | "contentLeft" | "contentRight"
> & {
  children: string;
  classModifier: string;
  contentLeft?: (typeof CONTENTS)[number];
  contentRight?: (typeof CONTENTS)[number];
};

const meta = preview.type<{ args: StoryProps }>().meta({
  title: "Components/Title",
  args: {
    children: "Sample Title",
    classModifier: "",
    className: "",
    heading: "h2",
    contentLeft: "None",
    contentRight: "None",
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
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
    },
  },
});
export default meta;

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

export const Template = meta.story({
  name: "Title",
  render: ({ children: text, classModifier, ...args }) => (
    <Title
      classModifier={classModifier}
      {...args}
      contentLeft={undefined}
      contentRight={undefined}
    >
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
    contentLeft: { control: false },
    contentRight: { control: false },
  },
});

export const TitleWithContent = meta.story({
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
});
