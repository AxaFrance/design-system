/* eslint-disable import/no-default-export */
import "../src/common/tokens.css";

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Guidelines", "Components"],
      },
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

export default preview;
