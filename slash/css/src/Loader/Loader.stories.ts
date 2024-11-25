import type { Meta, StoryObj } from "@storybook/html";
import "./Loader.scss";

const meta: Meta = {
  title: "Components/Loader",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: StoryObj = {
  name: "Loader",
  render: ({ error, message }) => {
    const context = document.createElement("div");
    context.style.width = "75vw";
    context.style.height = "10rem";
    context.style.border = "1px solid rebeccapurple";

    const html = `<div class="af-loader">
        <div class="af-loader-on">
        <div style="width:75%; margin: 2rem auto;">stuff in the background</div>
          <div
            class="af-spinner"
            role="alert"
            aria-live="assertive"
            aria-busy
            aria-label="Loading">
            ${!error ? `<div class="af-spinner__animation"></div>` : ``}
            <div class="af-spinner__caption">${message}</div>
          </div>
        </div>
    </div>
    `;

    context.innerHTML = html;

    return context;
  },
  args: {
    error: false,
    message: "Loading",
  },
  argTypes: {
    error: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
};
