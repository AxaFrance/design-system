import "@axa-fr/design-system-look-and-feel-css/dist/look-and-feel.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/Modal/Modal.scss";
import type { Meta, StoryObj } from "@storybook/html";
import { render } from "./ModalRender";

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
