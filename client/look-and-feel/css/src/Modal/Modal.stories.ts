import type { Meta, StoryObj } from "@storybook/html";
import "../look-and-feel.scss";
import "./Modal.scss";
import { render } from "./render";

const meta: Meta = {
  title: "Components/Modal",
};

export default meta;

export const Default: StoryObj = {
  render,
  args: {
    open: true,
    onClose: () => true,
    title: "Modal title",
    iconTitle: null,
    subtitle: "Modal subtitle",
    cancelTitle: "Cancel",
    submitTitle: "Submit",
  },
};
