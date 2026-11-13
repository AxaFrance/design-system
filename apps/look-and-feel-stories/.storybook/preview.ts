import type { Preview } from "@storybook/react";

import "@axa-fr/canopee-css/client/common/tokens.css";
import "@axa-fr/canopee-css/client/common/design-tokens.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
