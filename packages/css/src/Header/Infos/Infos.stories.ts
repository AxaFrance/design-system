import type { Meta, StoryObj } from "@storybook/html";
import "./Infos.scss";
import { infos } from "./constants";

const meta: Meta = {
  title: "Components/Header/Infos",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `
        <div class="af-contrat">
            <i class="glyphicon glyphicon-info-sign"></i>
            <dl class="af-contrat__list">
                <dt class="af-contrat__word">${args.infos[0].word}</dt>
                <dd class="af-contrat__def">${args.infos[0].definition}</dd>
                <dt class="af-contrat__word">${args.infos[1].word}</dt>
                <dd class="af-contrat__def">${args.infos[1].definition}</dd>
                <dt class="af-contrat__word">${args.infos[2].word}</dt>
                <dd class="af-contrat__def">${args.infos[2].definition}</dd>
            </dl>
        </div>
      `;

    return container;
  },
  args: {
    infos,
  },
  argTypes: {
    infos: {
      control: "object",
      table: {
        type: { summary: "object" },
      },
    },
    classModifier: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    className: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
  },
};
