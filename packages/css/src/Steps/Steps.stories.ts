import type { Meta, StoryObj } from "@storybook/html";
import "./Steps-new.scss";
import "./Steps.scss";

const meta: Meta = {
  title: "Agent/Components/Steps",
};

export default meta;

const MODES = ["past", "on", "disabled"];

export const NewStepsDesign: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");

    container.innerHTML = `
    <div class="af-steps-new">
        <ol class="af-steps-list">
            <li class="${args.mode} af-steps-list-step number" title="Previous step">
                <a class="af-steps-list-stepLabel" href="/etape1">
                    <div class="af-steps-list-stepNumber">1</div>
                    <div class="af-steps-list-stepTitle">Previous step</div>
                </a>
            </li>
            <li class="past af-steps-list-step number" title="Previous step">
                <a class="af-steps-list-stepLabel" href="/etape2">
                    <div class="af-steps-list-stepNumber">2</div>
                    <div class="af-steps-list-stepTitle">Previous step</div>
                </a>
            </li>
            <li class="on af-steps-list-step number" title="Current step">
                <div class="af-steps-list-stepLabel">
                    <div class="af-steps-list-stepNumber">3</div>
                    <div class="af-steps-list-stepTitle">Current step</div>
                </div>
            </li>
            <li class="af-steps-list-step" title="Un titre">
                <a class="af-steps-list-stepLabel" href="#/">
                    <span class="af-steps-list-stepNumber">
                        <i class="glyphicon glyphicon-ok"></i>
                    </span>
                    <span class="af-steps-list-stepTitle">Custom</span>
                </a>
            </li>
            <li class="disabled af-steps-list-step number" title="Final step">
                <div class="af-steps-list-stepLabel">
                    <div class="af-steps-list-stepNumber">5</div>
                    <div class="af-steps-list-stepTitle">Final step</div>
                </div>
            </li>
        </ol>
    </div>`;

    return container;
  },
  args: {
    mode: "past",
  },
  argTypes: {
    mode: {
      options: MODES,
      control: { type: "select" },
    },
  },
};

export const OldStepsDesign: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");

    container.innerHTML = `
    <div class="af-steps">
        <ol class="af-steps-list">
            <li class="${args.mode} af-steps-list-step number" title="Previous step">
                <div class="af-steps-list-stepLabel">
                    <div class="af-steps-list-stepNumber">1</div>
                    <div class="af-steps-list-stepTitle">Previous step</div>
                </div>
            </li>
            <li class="past af-steps-list-step number" title="Previous step">
                <a class="af-steps-list-stepLabel" href="/etape2">
                    <div class="af-steps-list-stepNumber">2</div>
                    <div class="af-steps-list-stepTitle">Previous step</div>
                </a>
            </li>
            <li class="on af-steps-list-step number" title="Current step">
                <div class="af-steps-list-stepLabel">
                    <div class="af-steps-list-stepNumber">3</div>
                    <div class="af-steps-list-stepTitle">Current step</div>
                </div>
            </li>
            <li class="af-steps-list-step" title="Un titre">
                <a class="af-steps-list-stepLabel" href="#/">
                    <span class="af-steps-list-stepNumber">
                        <i class="glyphicon glyphicon-ok"></i>
                    </span>
                    <span class="af-steps-list-stepTitle">Custom</span>
                </a>
            </li>
            <li class="disabled af-steps-list-step number" title="Final step">
                <div class="af-steps-list-stepLabel">
                    <div class="af-steps-list-stepNumber">5</div>
                    <div class="af-steps-list-stepTitle">Final step</div>
                </div>
            </li>
        </ol>
    </div>`;

    return container;
  },
  args: {
    mode: "past",
  },
  argTypes: {
    mode: {
      options: MODES,
      control: { type: "select" },
    },
  },
};
