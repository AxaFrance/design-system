import "@axa-fr/design-system-slash-css/dist/common/icons.scss";
import type { Preview } from "@storybook/html";
import { viewPorts } from "./viewPorts";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: viewPorts,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Fondations", "Components"],
      },
    },
  },
  tags: ["autodocs"],
};

// eslint-disable-next-line import/no-default-export
export default preview;
