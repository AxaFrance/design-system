import "@axa-fr/design-system-look-and-feel-css/dist/common/icons.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/common/tokens.scss";
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
