import type { Preview } from "@storybook/react";

import "@axa-fr/canopee-css/prospect/common/tokens.css";
import "@axa-fr/canopee-css/prospect/common/design-tokens.css";

const preview: Preview = {
  parameters: {
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
