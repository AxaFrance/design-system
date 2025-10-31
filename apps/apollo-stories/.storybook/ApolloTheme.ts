// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from "@storybook/theming";

export const ApolloTheme = create({
  base: "dark",
  brandTitle: `<div style="display: grid; grid-template-columns: auto 1fr; align-items: end; column-gap: 1rem;"><img src="./axa_logo.svg" width="32" height="32" /> <span style="font-family: 'Publico Headline'; font-weight: 700; font-size: 1.2rem;">Canopée / Prospect</span></div>`,
  brandUrl: "https://github.com/AxaFrance/design-system/",
  brandTarget: "_self",
  colorPrimary: "#FF4E56",
  colorSecondary: "#6574F8",
  appBg: "#0C0E45",
  appContentBg: "#333",
  appBorderColor: "#FFFFFF",
  appBorderRadius: 4,
  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: "monospace",
  textColor: "#FFFFFF",
  textInverseColor: "#FFFFFF",
  textMutedColor: "#adadfc",
  barTextColor: "#6574F8",
  barSelectedColor: "#FFFFFF",
  barBg: "#0C0E45",
  inputBg: "#FFFFFF",
  inputBorder: "#FFFFFF",
  inputTextColor: "#333333",
  inputBorderRadius: 4,
});
