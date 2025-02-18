// eslint-disable-next-line import/no-extraneous-dependencies
import { addons } from "@storybook/manager-api";
import { LookAndFeelCssTheme } from "./LFCssTheme";

addons.setConfig({
  theme: LookAndFeelCssTheme,
});
