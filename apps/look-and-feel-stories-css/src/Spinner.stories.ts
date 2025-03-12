import "@axa-fr/design-system-apollo-css/dist/Spinner/SpinnerLF.scss";
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Spinner",
};

export default meta;

export const Spinner: StoryObj = {
  render: (args) => {
    const spinner = document.createElement("div");
    spinner.classList.add("af-spinner__container");
    spinner.role = "alert";
    spinner.ariaLabel = "Chargement en cours";
    spinner.ariaBusy = "true";
    spinner.ariaLive = "assertive";
    spinner.style.width = `${args.size}px`;
    spinner.style.height = `${args.size}px`;
    spinner.style.border = `${args.borderSize}px solid #f3f3f3`;
    spinner.style.borderTop = `${args.borderSize}px solid #00008f`;

    spinner.innerHTML = ` 
        <div class"af-spinner__container-spin" aria-hidden="true" />
    `;

    return spinner;
  },
  args: {
    size: 60,
    borderSize: 5,
  },
};
