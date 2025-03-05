import "@axa-fr/design-system-apollo-css/dist/common/tokens.scss";
import "@axa-fr/design-system-apollo-css/dist/apollo.scss";

import type { Preview } from "@storybook/html";

const preview: Preview = {
  parameters: {
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
