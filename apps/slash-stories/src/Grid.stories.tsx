import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "@axa-fr/design-system-slash-react";

const meta: Meta<typeof Grid> = {
  title: "Fondations/Breakpoints/Grid",
  component: Grid,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const GridStory: StoryObj<typeof Grid> = {
  name: "Grid",
  render: ({ ...props }) => {
    return (
      <div style={{ backgroundColor: "orange", opacity: 0.4 }}>
        <Grid {...props}>
          <div
            style={{
              height: 200,
              width: "100%",
              backgroundColor: "red",
              opacity: 0.5,
            }}
          />
        </Grid>
      </div>
    );
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    component: {
      table: {
        disable: true,
      },
    },
  },
};
