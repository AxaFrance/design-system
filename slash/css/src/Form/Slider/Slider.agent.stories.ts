import type { Meta, StoryObj } from "@storybook/html";
import "./Slider.agent.scss";

const meta: Meta = {
  title: "Slash/Components/Form/Input/Slider",
};

export default meta;

const options = [
  { label: "64", value: 64 },
  { label: "128", value: 128 },
  { label: "256", value: 256 },
  { label: "1024", value: 1024 },
  { label: "2048", value: 2048 },
  { label: "4096", value: 4096 },
];

export const Default: StoryObj = {
  name: "Slider",
  render: (args) => {
    const container = document.createElement("div");
    container.className = "rc-slider rc-slider-with-marks";

    let percentage;
    let valueIndex = options.findIndex((opt) => opt.value === args.value);
    valueIndex = valueIndex !== -1 ? valueIndex : 0;

    if (valueIndex <= 0 || options.length < 0) {
      percentage = 0;
    } else if (valueIndex > options.length - 1) {
      percentage = 100;
    } else {
      percentage = (valueIndex / (options.length - 1)) * 100;
    }

    container.innerHTML = `
    <div class="rc-slider-rail"></div>
    <div class="rc-slider-track" style="left: 0%; right: auto; width: ${percentage}%;"></div>
    <div class="rc-slider-step">
      <span class="rc-slider-dot rc-slider-dot-active" style="left: 0%;"></span>
      <span class="rc-slider-dot rc-slider-dot-active" style="left: 20%;"></span>
      <span class="rc-slider-dot rc-slider-dot-active" style="left: 40%;"></span>
      <span class="rc-slider-dot rc-slider-dot-active" style="left: 60%;"></span>
      <span class="rc-slider-dot" style="left: 80%;"></span>
      <span class="rc-slider-dot" style="left: 100%;"></span>
    </div>
    <div tabindex="0" class="rc-slider-handle" style="left: ${percentage}%; right: auto; transform: translateX(-50%);" role="slider" aria-valuemin="0" aria-valuemax="5" aria-valuenow="3" aria-disabled="false"></div>
    <div class="rc-slider-mark">
      <span class="rc-slider-mark-text rc-slider-mark-text-active" style="transform: translateX(-50%); left: 0%;">${args.options[0].label}</span>
      <span class="rc-slider-mark-text${percentage >= 20 ? " rc-slider-mark-text-active" : ""}" style="transform: translateX(-50%); left: 20%;">${args.options[1].label}</span>
      <span class="rc-slider-mark-text${percentage >= 40 ? " rc-slider-mark-text-active" : ""}" style="transform: translateX(-50%); left: 40%;">${args.options[2].label}</span>
      <span class="rc-slider-mark-text${percentage >= 60 ? " rc-slider-mark-text-active" : ""}" style="transform: translateX(-50%); left: 60%;">${args.options[3].label}</span>
      <span class="rc-slider-mark-text${percentage >= 80 ? " rc-slider-mark-text-active" : ""}" style="transform: translateX(-50%); left: 80%;">${args.options[4].label}</span>
      <span class="rc-slider-mark-text${percentage >= 100 ? " rc-slider-mark-text-active" : ""}" style="transform: translateX(-50%); left: 100%;">${args.options[5].label}</span>
    </div>`;

    return container;
  },
  args: {
    value: 2048,
    options,
  },
};
