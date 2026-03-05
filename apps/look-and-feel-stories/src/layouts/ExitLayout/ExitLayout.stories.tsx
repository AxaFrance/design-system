import type { Meta, StoryObj } from "@storybook/react";
import { Card, ExitLayout } from "@axa-fr/canopee-react/client";
import check from "@material-symbols/svg-400/rounded/check.svg";
import type { ComponentProps } from "react";
import { LayoutDemo } from "../LayoutDemo/LayoutDemo";

const meta: Meta = {
  title: "Layouts/Exit Layout",
  parameters: { layout: "fullscreen" },
  argTypes: {
    title: { control: "text" },
    firstSubtitle: { control: "text" },
    showAgent: { control: "boolean" },
    actions: {
      control: "number",
      min: 1,
    },
    content: {
      control: "number",
      min: 1,
    },
  },
};

export default meta;

type StoryProps = ComponentProps<typeof ExitLayout> & {
  showAgent: boolean;
  actions?: number;
  content?: number;
  heightAgent?: number;
};

const Demo = ({
  headingProps,
  showAgent,
  iconProps,
  actions = 1,
  content = 4,
  heightAgent = 400,
}: StoryProps) => (
  <LayoutDemo title="Form Layout Title">
    <ExitLayout headingProps={headingProps} iconProps={iconProps}>
      <ExitLayout.Content>
        {Array.from({ length: content }, (_, i) => (
          <Card key={i}>Slot CONTENT</Card>
        ))}
      </ExitLayout.Content>

      <ExitLayout.Agent>
        {showAgent ? <Card style={{ height: heightAgent }}>AGENT</Card> : null}
      </ExitLayout.Agent>

      <ExitLayout.Action>
        {Array.from({ length: actions }, (_, i) => (
          <Card key={i}>Slot ACTION</Card>
        ))}
      </ExitLayout.Action>
    </ExitLayout>
  </LayoutDemo>
);

export const ExitLayoutStory: StoryObj<StoryProps> = {
  name: "ExitLayout",
  render: Demo,
  args: {
    headingProps: {
      title: "Title",
      firstSubtitle: "firstSubtitle",
    },
    showAgent: true,
    iconProps: {
      src: check,
      hasBackground: true,
      variant: "success",
    },
  },
};
