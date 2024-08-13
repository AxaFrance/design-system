import { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "Look-and-feel/Components/Accordion",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type StoryProps = {
  numberOfItems: number;
};

export const AccordionStory: StoryObj<StoryProps> = {
  name: "Accordion",
  render: ({ numberOfItems }) => {
    return (
      <Accordion>
        {Array.from({ length: numberOfItems }, (_, i) => (
          <Accordion.Item key={i} title={`Title ${i + 1}`}>
            Content {i + 1}
          </Accordion.Item>
        ))}
      </Accordion>
    );
  },

  args: {
    numberOfItems: 3,
  },
  argTypes: {
    numberOfItems: {
      control: { type: "range", min: 1, max: 10 },
    },
  },
};
