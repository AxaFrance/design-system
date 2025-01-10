/* eslint-disable import/no-default-export */
import "../src/common/icons.scss";
import "../src/common/tokens.scss";

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
