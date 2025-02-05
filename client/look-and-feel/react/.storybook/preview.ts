import "@axa-fr/design-system-look-and-feel-css/dist/common/icons.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/common/tokens.scss";
import type { Preview } from "@storybook/react";

const preview: Preview = {
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
};

// eslint-disable-next-line import/no-default-export
export default preview;
