/* eslint-disable import/no-extraneous-dependencies */
import "@axa-fr/design-system-slash-css/dist/common/icons.scss";
import "@axa-fr/design-system-slash-css/dist/common/tokens.scss";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";

import type { Preview } from "@storybook/react";

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

// eslint-disable-next-line import/no-default-export
export default preview;
