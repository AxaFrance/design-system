import type { Preview } from "@storybook/react";

import "@axa-fr/canopee-css/prospect/common/tokens.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["*", ["Tokens", "Font Style", "*"]],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      canvas: {
        layout: "fullscreen",
      },
    },
  },
};

export default preview;
