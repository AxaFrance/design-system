import type { Meta, StoryObj } from "@storybook/html";
import "./colors.scss";
import "./colors.stories.css";

const meta: Meta = {
  title: "Fondations/Colors",
};

export default meta;

const brandColorsList = [
  {
    name: "axa blue",
    color: "#00008F",
  },
  {
    name: "axa red",
    color: "#FF1721",
  },
  {
    name: "white",
    color: "#FFFFFF",
  },
];

const grayColorsList = [
  {
    name: "gray 900",
    color: "#333333",
  },
  {
    name: "gray 700",
    color: "#5F5F5F",
  },
  {
    name: "gray 500",
    color: "#999999",
  },
  {
    name: "gray 400",
    color: "#E5E5E5",
  },
  {
    name: "gray 300",
    color: "#E9ECF2",
  },
  {
    name: "gray 200",
    color: "#F3F3F3",
  },
  {
    name: "gray 100",
    color: "#FAFAFA",
  },
];

const blueColorsList = [
  {
    name: "blue 900",
    color: "#000072",
  },
  {
    name: "blue 800",
    color: "#00008F",
  },
  {
    name: "blue 700",
    color: "#3333A5",
  },
  {
    name: "blue 500",
    color: "#4976BA",
  },
  {
    name: "blue 300",
    color: "#E4E4FF",
  },
  {
    name: "blue 200",
    color: "#EEEEFF",
  },
  {
    name: "blue 100",
    color: "#F8F8FF",
  },
];

const errorColorsList = [
  {
    name: "red 800",
    color: "#A11028",
  },
  {
    name: "red 700",
    color: "#C91432",
  },
  {
    name: "red 600",
    color: "#D4435B",
  },
  {
    name: "red 100",
    color: "#FFF3F5",
  },
];

const businessColorsList = [
  {
    name: "orange 800",
    color: "#A8391C",
  },
  {
    name: "orange 700",
    color: "#C94E14",
  },
  {
    name: "orange 600",
    color: "#DF7E65",
  },
];

const successColorsList = [
  {
    name: "green 600",
    color: "#118635",
  },
];

const focusColorsList = [
  {
    name: "focus 600",
    color: "#3366FF",
  },
];

const secondaryColorsList = [
  {
    name: "yellow 100",
    color: "#FAEEB0",
  },
  {
    name: "green 100",
    color: "#D4F4BA",
  },
  {
    name: "emerald 100",
    color: "#BAF4DC",
  },
  {
    name: "cyan 100",
    color: "#BAE6F4",
  },
  {
    name: "purple 100",
    color: "#D0C4F1",
  },
  {
    name: "pink 100",
    color: "#F1C4E7",
  },
  {
    name: "indigo 100",
    color: "#BAC0DD",
  },
  {
    name: "sky 100",
    color: "#BAD2F4",
  },
];

const tertiaryColorsList = [
  {
    name: "pacific 400",
    color: "#33BDD1",
  },
];

const createColor = (name: string, color: string) => {
  const colorEl = document.createElement("li");
  colorEl.innerHTML = `
    <figure class="colors__list--figure" style="background-color: ${color}">
      <figcaption class="colors__list--figcaption">${name}</figcaption>
    </figure>
  `;

  return colorEl;
};

const createCategory = (
  title: string,
  colors: { name: string; color: string }[],
) => {
  const container = document.createElement("div");
  container.innerHTML = `
    <h2>${title}</h2>
  `;
  const colorsList = document.createElement("ul");
  colorsList.classList.add("colors__list");
  for (const color of colors) {
    colorsList.appendChild(createColor(color.name, color.color));
  }
  container.appendChild(colorsList);
  return container;
};

export const Colors: StoryObj = {
  render: () => {
    const wrapper = document.createElement("div");
    wrapper.appendChild(createCategory("BRAND", brandColorsList));
    wrapper.appendChild(createCategory("GRIS", grayColorsList));
    wrapper.appendChild(createCategory("BLEU", blueColorsList));
    wrapper.appendChild(createCategory("COULEURS ERREURS", errorColorsList));
    wrapper.appendChild(
      createCategory("COULEURS BUSINESS", businessColorsList),
    );
    wrapper.appendChild(createCategory("COULEURS SUCCES", successColorsList));
    wrapper.appendChild(createCategory("COULEURS FOCUS", focusColorsList));
    wrapper.appendChild(
      createCategory("COULEURS SECONDAIRES", secondaryColorsList),
    );
    wrapper.appendChild(
      createCategory("COULEURS TERTIAIRES", tertiaryColorsList),
    );
    return wrapper;
  },
};
