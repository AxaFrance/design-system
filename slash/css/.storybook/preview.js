import "../src/common/icons.scss";
// eslint-disable-next-line import/no-unresolved
import { viewPorts } from "./viewPorts";

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
  },
  tags: ["autodocs"],
};

// eslint-disable-next-line import/no-default-export
export default preview;
