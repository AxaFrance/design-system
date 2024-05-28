import type { Meta, StoryObj } from "@storybook/html";
import logo from "../../common/assets/logo-axa.svg";
import "./Header.client.scss";

const meta: Meta = {
  title: "Client/Components/Header",
};

export default meta;

export const Header: StoryObj = {
  render: () => {
    const header = document.createElement("header");
    header.innerHTML = `
      <div class="af-header-container">
        <img class="af-logo" src="${logo}" alt="Logo Axa">
      </div>
    `;

    return header;
  },
};
