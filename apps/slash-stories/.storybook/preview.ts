import addonChromatic from "@chromatic-com/storybook";
import addonA11y from "@storybook/addon-a11y";
import addonDocs from "@storybook/addon-docs";
import { definePreview } from "@storybook/react-vite";
import whitespaceStorybookAddonHtml from "@whitespace/storybook-addon-html/preview";

export default definePreview({
  addons: [
    addonA11y(),
    addonChromatic(),
    addonDocs(),
    whitespaceStorybookAddonHtml,
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on.*" },
    options: {
      storySort: {
        order: ["Fondations", ["Icons"], "Layout", "Components"],
      },
    },
  },
  tags: ["autodocs"],
});
