import {
  Step,
  Steps,
  type StepLinkOnClickHandler,
} from "@axa-fr/canopee-react/distributeur";
import { Meta, type StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

type StoryProps = React.ComponentProps<typeof Steps> & {
  onClick: StepLinkOnClickHandler;
  mode?: "link" | "active" | "disabled";
};

const meta: Meta<StoryProps> = {
  component: Steps,
  title: "Components/Steps/Step",
  args: {
    mode: "link",
    onClick: fn(),
  },
  argTypes: {
    onClick: { action: "onClick" },
    mode: {
      options: ["link", "active", "disabled"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const NewStepsStory: Story = {
  name: "Horizontal Stepper",
  render: ({ classModifier, className, mode, onClick }: StoryProps) => (
    <Steps classModifier={classModifier} className={className}>
      <Step
        id="id1"
        href="/etape1"
        onClick={onClick}
        number="1"
        mode={mode}
        title="First Step"
      />
      <Step
        id="id2"
        href="/etape2"
        number="2"
        onClick={onClick}
        title="Second step"
        mode="link"
      />
      <Step
        id="id3"
        number="3"
        onClick={onClick}
        title="Current step"
        mode="active"
      />
      <Step id="idf4" title="Future Step" mode="disabled" />
      <Step id="id5" title="Final step" mode="disabled" />
    </Steps>
  ),
  args: {
    classModifier: "",
    className: "",
  },
};

export const StepsValidated: Story = {
  name: "Final step is active",
  render: ({ classModifier, className, mode, onClick }: StoryProps) => (
    <Steps classModifier={classModifier} className={className}>
      <Step
        id="id1"
        href="/etape1"
        onClick={onClick}
        number="1"
        mode={mode}
        title="Previous step"
      />
      <Step
        id="id2"
        href="/etape2"
        number="2"
        onClick={onClick}
        title="Previous step"
        mode="link"
      />
      <Step
        id="id3"
        href="/etape3"
        number="3"
        onClick={onClick}
        title="Previous step"
        mode="link"
      />
      <Step
        id="id3"
        href="/etape3"
        number="3"
        onClick={onClick}
        title="Previous step"
        mode="link"
      />
      <Step id="id5" title="Final step" mode="active" />
    </Steps>
  ),
  args: {
    classModifier: "",
    className: "",
  },
};
