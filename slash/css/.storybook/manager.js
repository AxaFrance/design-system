import { addons } from "@storybook/manager-api";
import { SlashCssTheme } from "./SlashCssTheme";

addons.setConfig({
  theme: SlashCssTheme,
});
