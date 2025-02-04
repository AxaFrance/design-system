import "@axa-fr/design-system-slash-css/dist/common/icons.scss";
import "@fontsource/source-sans-pro";
import type { Preview } from "@storybook/react";
// eslint-disable-next-line import/no-unresolved
import { viewPorts } from "./viewports";

const preview: Preview = {
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
    options: {
      storySort: {
        order: ["Fondations", "Components"],
      },
    },
  },
};

// eslint-disable-next-line import/no-default-export
export default preview;
