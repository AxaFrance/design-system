import {
  Button,
  Link,
  TextInput,
  Title,
} from "@axa-fr/canopee-react/distributeur";
import { ReactElement } from "react";
import preview from "../.storybook/preview";

const MODIFIERS = ["", "content"];
const CONTENTS = ["Button", "Link", "None"] as const;

type StoryProps = Omit<
  React.ComponentProps<typeof Title>,
  "className" | "children" | "contentLeft" | "contentRight"
> & {
  children: string;
  className: string;
  contentLeft?: (typeof CONTENTS)[number];
  contentRight?: (typeof CONTENTS)[number];
};

const meta = preview.type<{ args: StoryProps }>().meta({
  title: "Components/Title",
  args: {
    children: "Sample Title",
    className: "",
    heading: "h2",
    withDivider: true,
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
    className: {
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
  render: ({ children: text, className, ...args }) => (
    <>
      <Title
        className={className}
        {...args}
        contentLeft={undefined}
        contentRight={undefined}
      >
        {text}
      </Title>

      <TextInput label="Sample Input to illustrate bottom margin" required />
    </>
  ),
  args: {
    children: "Sample Title",
    className: "",
    heading: "h2",
    withDivider: true,
  },
  argTypes: {
    contentLeft: { control: false },
    contentRight: { control: false },
  },
});

export const TitleWithContent = meta.story({
  render: ({ children, contentLeft, contentRight, heading, withDivider }) => {
    return (
      <Title
        heading={heading}
        withDivider={withDivider}
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
    withDivider: true,
    contentLeft: "Button",
    contentRight: "Link",
  },
});

export const WithoutDivider = meta.story({
  render: ({ children, heading }) => (
    <Title heading={heading} withDivider={false}>
      {children}
    </Title>
  ),
  args: {
    children: "Title without divider",
    heading: "h2",
    withDivider: false,
  },
  argTypes: {
    className: { control: false },
    contentLeft: { control: false },
    contentRight: { control: false },
  },
});
