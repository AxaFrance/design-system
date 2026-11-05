import {
  CheckboxButton,
  CheckboxCard,
  CheckboxGroup,
  type CheckboxGroupProps,
  CheckboxText,
} from "@axa-fr/canopee-react/distributeur/experimental";
import { fn } from "storybook/test";
import preview from "../../../../.storybook/preview";

type StoryProps = Omit<CheckboxGroupProps, "children">;

const onChange = fn();

const renderGroup = ({
  orientation = "horizontal",
  variant = "button",
  ...args
}: StoryProps) => (
  <CheckboxGroup {...args} orientation={orientation} variant={variant}>
    {["option1", "option2", "option3"].map((value, index) => {
      const props = {
        id: `checkbox-group-${orientation}-${variant}-${value}`,
        name: "group-example",
        value,
        label: `Option ${index + 1}`,
        onChange,
      };

      if (variant === "card") {
        return (
          <CheckboxCard key={value} {...props} orientation={orientation} />
        );
      }

      if (variant === "text") {
        return <CheckboxText key={value} {...props} />;
      }

      return <CheckboxButton key={value} {...props} />;
    })}
  </CheckboxGroup>
);

const meta = preview.meta({
  title: "Experimental/Form/Checkbox/CheckboxGroup",
  component: renderGroup,
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
    variant: {
      control: "inline-radio",
      options: ["button", "text", "card"],
    },
  },
  args: { orientation: "horizontal", variant: "button" },
});

export default meta;

export const HorizontalStory = meta.story({
  name: "Horizontal",
  render: renderGroup,
});

export const VerticalStory = meta.story({
  name: "Vertical",
  render: renderGroup,
  args: { orientation: "vertical" },
});

export const TextStory = meta.story({
  name: "Text",
  render: renderGroup,
  args: { variant: "text" },
});

export const CardsStory = meta.story({
  name: "Cards",
  render: renderGroup,
  args: { variant: "card" },
});

export const VerticalCardsStory = meta.story({
  name: "Stacked cards",
  render: renderGroup,
  args: { variant: "card", orientation: "vertical" },
});
