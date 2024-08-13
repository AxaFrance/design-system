import type { Meta, StoryObj } from "@storybook/html";
import "./Stepper.client.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/Stepper",
};

export default meta;

export const Stepper: StoryObj = {
  render: () => {
    const stepper = document.createElement("div");
    stepper.innerHTML = `
    <div class="af-stepper-client">
      <h2 class="af-stepper-client__title" aria-describedby=":r4:">Step 1</h2>
      <p class="af-stepper-client__subtitle">Step subtitle</p>
      <div
        id=":r4:"
        role="group"
        aria-label="Step 1"
        class="af-stepper-client__content"
      >
        <div
          class="af-stepper-client__progressbar"
          aria-current="true"
          aria-hidden="false"
          aria-label="50%"
        >
          <div
            class="af-stepper-client__progress"
            style="width: 50%"
          ></div>
        </div>
        <div
          class="af-stepper-client__progressbar"
          aria-current="false"
          aria-hidden="true"
          aria-label="0%"
        >
          <div
            class="af-stepper-client__progress"
            style="width: 0%"
          ></div>
        </div>
        <div
          class="af-stepper-client__progressbar"
          aria-current="false"
          aria-hidden="true"
          aria-label="0%"
        >
          <div
            class="af-stepper-client__progress"
            style="width: 0%"
          ></div>
        </div>
      </div>
    </div>
    `;

    return stepper;
  },
};
