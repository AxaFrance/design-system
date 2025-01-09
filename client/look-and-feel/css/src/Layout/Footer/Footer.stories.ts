import type { Meta, StoryObj } from "@storybook/html";
import "./Footer.scss";
import { render } from "./render";

const meta: Meta = {
  title: "Components/Footer",
};

export default meta;

export const Footer: StoryObj = {
  render,
};
