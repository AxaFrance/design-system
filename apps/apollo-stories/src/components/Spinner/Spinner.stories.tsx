import { Spinner } from "@axa-fr/canopee-react/prospect";
import type { Meta, StoryObj } from "@storybook/react";
import { render, renderAll } from "./render";
import "./Spinner.story.scss";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: "Components/Spinner",
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const SpinnerStory: Story = {
  name: "Spinner",
  render,
  args: {
    size: 40,
  },
};

export const SpinnerGrayStory: Story = {
  name: "Spinner gray",
  render,
  args: {
    size: 40,
    variant: "gray",
  },
};

export const SpinnerWhiteStory: Story = {
  name: "Spinner white",
  render,
  args: {
    size: 40,
    variant: "white",
  },
};

export const MultiExamples: StoryObj<typeof Spinner> = {
  name: "Spinner examples",
  render: renderAll,
};
