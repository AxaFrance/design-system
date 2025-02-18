import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Footer/Footer.scss";
import type { Meta, StoryObj } from "@storybook/html";
import { render } from "./FooterRender";

const meta: Meta = {
  title: "Components/Footer",
};

export default meta;

export const Footer: StoryObj = {
  render,
};
