import type { Meta, StoryObj } from "@storybook/html";
import "./Infos.scss";

const meta: Meta = {
  title: "Slash/Components/Header/Infos",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `
        <div class="${args.className}">
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
    className: "af-contrat",
    infos: [
      {
        word: "Client :",
        definition: "0123456789 - NOM",
      },
      {
        word: "Portefeuille :",
        definition: "000123456789",
      },
      {
        word: "Status :",
        definition: "Affaire nouvelle",
      },
    ],
  },
};
