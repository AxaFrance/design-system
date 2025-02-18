import "@axa-fr/design-system-look-and-feel-css/dist/Loader/Loader.scss";
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Loader",
};

export default meta;

export const Loader: StoryObj = {
  render: (args) => {
    const loader = document.createElement("div");
    loader.classList.add("af-loader__container");
    loader.role = "alert";
    loader.ariaLabel = "Chargement en cours";
    loader.ariaBusy = "true";
    loader.ariaLive = "assertive";
    loader.style.width = `${args.size}px`;
    loader.style.height = `${args.size}px`;
    loader.style.border = `${args.borderSize}px solid #f3f3f3`;
    loader.style.borderTop = `${args.borderSize}px solid #00008f`;

    loader.innerHTML = ` 
        <div class"af-loader__container-spin" aria-hidden="true" />
    `;

    return loader;
  },
  args: {
    size: 60,
    borderSize: 5,
  },
};
