import { addons } from "@storybook/manager-api";
import { LookAndFeelTheme } from "./LookAndFeelTheme";

addons.setConfig({
  theme: LookAndFeelTheme,
});
