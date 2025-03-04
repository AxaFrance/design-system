// eslint-disable-next-line import/no-extraneous-dependencies
import { addons } from "@storybook/manager-api";
import { ApolloCssTheme } from "./ApolloCssTheme";

addons.setConfig({
  theme: ApolloCssTheme,
});
