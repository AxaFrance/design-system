import {
  Step,
  Steps,
  type StepLinkOnClickHandler,
} from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../.storybook/preview";

type StoryProps = React.ComponentProps<typeof Steps> & {
  onClick: StepLinkOnClickHandler;
  mode?: "link" | "active" | "disabled";
};

const meta = preview.meta({
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
});

export const NewStepsStory = meta.story({
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
});

export const StepsValidated = meta.story({
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
});
