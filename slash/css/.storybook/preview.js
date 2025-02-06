import "../src/common/icons.scss";
// eslint-disable-next-line import/no-unresolved
import { viewPorts } from "./viewports";

/** @type { import('@storybook/html').Preview } */
const preview = {
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
        order: ["Fondations", "Components", ["✅ Footer"]],
      },
    },
  },
  tags: ["autodocs"],
};

// eslint-disable-next-line import/no-default-export
export default preview;
