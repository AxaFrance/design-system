import "@axa-fr/design-system-slash-css/dist/common/icons.scss";
import "@fontsource/source-sans-pro";
import type { Preview } from "@storybook/react";
import { viewPorts } from "./viewPorts";

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
  },
  tags: ["autodocs"],
};

export default preview;
