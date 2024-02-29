import type { Meta, StoryObj } from "@storybook/html";
import "./Infos.scss";
import { infos } from "./constants";

const meta: Meta = {
  title: "Agent/Components/Header/Infos",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `
        <div class="${args.className}${args.classModifier !== "" ? ` ${args.className}--${args.classModifier}` : ""}">
            <i class="glyphicon glyphicon-info-sign"></i>
            <dl class="${args.className}__list">
                <dt class="${args.className}__word">${args.infos[0].word}</dt>
                <dd class="${args.className}__def">${args.infos[0].definition}</dd>
                <dt class="${args.className}__word">${args.infos[1].word}</dt>
                <dd class="${args.className}__def">${args.infos[1].definition}</dd>
                <dt class="${args.className}__word">${args.infos[2].word}</dt>
                <dd class="${args.className}__def">${args.infos[2].definition}</dd>
            </dl>
        </div>
      `;

    return container;
  },
  args: {
    classModifier: "",
    className: "af-contrat",
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
