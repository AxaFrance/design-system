import type { Meta, StoryObj } from "@storybook/html";
import "@axa-fr/design-system-slash-css/dist/Grid/Grid.scss";

const meta: Meta = {
  title: "Fondations/Breakpoints/Grid",
};

export default meta;

export const Grid: StoryObj = {
  render: () => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="af-grid">
<div style="height: 200px;width: 100%;background-color: red;opacity: 0.5"></div>
</div>`;

    div.style.backgroundColor = "orange";
    div.style.opacity = "0.4";

    return div;
  },
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};
