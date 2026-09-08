import {
  Card,
  ExitLayout,
  ExitLayoutSkeleton,
} from "@axa-fr/canopee-react/client";
import type { Meta, StoryObj } from "@storybook/react";
import check from "@material-symbols/svg-400/rounded/check.svg";
import type { ComponentProps } from "react";
import { LayoutDemo } from "../LayoutDemo/LayoutDemo";

type ExitLayoutProps = ComponentProps<typeof ExitLayout>;
type ExitLayoutSkeletonProps = ComponentProps<typeof ExitLayoutSkeleton>;

type StoryProps = ExitLayoutSkeletonProps & {
  isLoading: boolean;
  actions?: number;
  content?: number;
  heightAgent?: number;
};

const meta: Meta<StoryProps> = {
  title: "Layouts/Exit Layout",
  parameters: { layout: "fullscreen" },
  argTypes: {
    isLoading: { control: "boolean" },
    actions: {
      control: "number",
      min: 1,
    },
    content: {
      control: "number",
      min: 1,
    },
    heightAgent: {
      control: "number",
      min: 120,
      step: 20,
    },
    hasAction: { control: "boolean" },
    hasAgent: { control: "boolean" },
    hasContent: { control: "boolean" },
    hasHeading: { control: "boolean" },
    hasIcon: { control: "boolean" },
  },
};

export default meta;

const headingProps: ExitLayoutProps["headingProps"] = {
  title: "Title",
  firstSubtitle: "firstSubtitle",
};

const iconProps: ExitLayoutProps["iconProps"] = {
  src: check,
  hasBackground: true,
  variant: "success",
};

const Demo = ({
  isLoading,
  hasAction = true,
  hasAgent = true,
  hasContent = true,
  hasHeading = true,
  hasIcon = true,
  actions = 1,
  content = 4,
  heightAgent = 400,
}: StoryProps) => (
  <LayoutDemo title="Exit Layout Skeleton Demo">
    {isLoading ? (
      <ExitLayoutSkeleton
        hasAction={hasAction}
        hasAgent={hasAgent}
        hasContent={hasContent}
        hasHeading={hasHeading}
        hasIcon={hasIcon}
      />
    ) : (
      <ExitLayout
        headingProps={hasHeading ? headingProps : undefined}
        iconProps={hasIcon ? iconProps : undefined}
      >
        <ExitLayout.Content>
          {hasContent
            ? Array.from({ length: content }, (_, index) => (
                <Card key={index}>Slot CONTENT</Card>
              ))
            : null}
        </ExitLayout.Content>

        <ExitLayout.Agent>
          {hasAgent ? <Card style={{ height: heightAgent }}>AGENT</Card> : null}
        </ExitLayout.Agent>

        <ExitLayout.Action>
          {hasAction
            ? Array.from({ length: actions }, (_, index) => (
                <Card key={index}>Slot ACTION</Card>
              ))
            : null}
        </ExitLayout.Action>
      </ExitLayout>
    )}
  </LayoutDemo>
);

export const ExitLayoutSkeletonDemo: StoryObj<StoryProps> = {
  render: Demo,
  args: {
    isLoading: true,
    hasAction: true,
    hasAgent: true,
    hasContent: true,
    hasHeading: true,
    hasIcon: true,
    actions: 1,
    content: 4,
    heightAgent: 400,
  },
};
