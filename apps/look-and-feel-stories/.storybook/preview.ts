import type { Preview } from "@storybook/react";

// eslint-disable-next-line import/no-extraneous-dependencies
import "@axa-fr/design-system-apollo-css/dist/common/tokens.scss";

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
