import {
  RadioButton,
  RadioCard,
  RadioGroup,
} from "@axa-fr/canopee-react/distributeur/experimental";
import preview from "../../../../.storybook/preview";

type Story = {
  orientation: "vertical" | "horizontal" | undefined;
  variant?: "button" | "card";
};

const meta = preview.type<{ args: Story }>().meta({
  title: "Experimental/Form/Radio/RadioGroup",
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
    variant: {
      control: "inline-radio",
      options: ["button", "card"],
    },
  },
  args: {
    variant: "button",
  },
});

export default meta;

export const HorizontalStory = meta.story({
  name: "Horizontal",
  render: ({ orientation, variant }) => (
    <RadioGroup orientation={orientation} variant={variant}>
      {variant === "button" ? (
        <>
          <RadioButton
            id="horizontal-radio1"
            name="horizontal-example"
            value="option1"
            label="Option 1"
          />
          <RadioButton
            id="horizontal-radio2"
            name="horizontal-example"
            value="option2"
            label="Option 2"
          />
          <RadioButton
            id="horizontal-radio3"
            name="horizontal-example"
            value="option3"
            label="Option 3"
          />
        </>
      ) : (
        <>
          <RadioCard
            id="horizontal-radio1-card"
            name="horizontal-example-card"
            value="option1"
            label="Option 1"
          />
          <RadioCard
            id="horizontal-radio2-card"
            name="horizontal-example-card"
            value="option2"
            label="Option 2"
          />
          <RadioCard
            id="horizontal-radio3-card"
            name="horizontal-example-card"
            value="option3"
            label="Option 3"
          />
        </>
      )}
    </RadioGroup>
  ),
  args: {
    orientation: "horizontal",
  },
});

export const VerticalStory = meta.story({
  name: "Vertical",
  render: (args) => (
    <RadioGroup {...args}>
      <RadioButton
        id="vertical-radio1"
        name="vertical-example"
        value="option1"
        label="Option 1"
      />
      <RadioButton
        id="vertical-radio2"
        name="vertical-example"
        value="option2"
        label="Option 2"
        checked
      />
      <RadioButton
        id="vertical-radio3"
        name="vertical-example"
        value="option3"
        label="Option 3"
        disabled
      />
      <RadioButton
        id="vertical-radio4"
        name="vertical-example"
        value="option4"
        label="Option 4"
        aria-invalid
      />
    </RadioGroup>
  ),
  args: {
    orientation: "vertical",
  },
});
