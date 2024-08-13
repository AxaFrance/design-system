import type { Meta, StoryObj } from "@storybook/html";
import "./Action.scss";

const meta: Meta = {
  title: "Slash/Components/Action",
};

export default meta;

export const Primary: StoryObj = {
  name: "Action with link",
  render: (args) => {
    const action = document.createElement("a");

    action.className += [
      "btn af-btn--circle",
      args.classModifier ? `btn af-btn--${args.classModifier}` : "",
    ].join(" ");

    action.href = args.href;
    action.target = args.target;
    action.title = args.title;
    action.id = args.id;
    action.innerHTML = `<i class="glyphicon glyphicon-${args.icon}"></i>`;

    return action;
  },
  args: {
    href: "http://www.axa.fr",
    icon: "link",
    title: "Lien de test",
    target: "_blank",
    id: "1",
    classModifier: "",
  },
};

export const Button: StoryObj = {
  name: "Action Button",
  render: (args) => {
    const action = document.createElement("a");

    action.className += [
      "btn af-btn--circle",
      args.classModifier ? `btn af-btn--${args.classModifier}` : "",
    ].join(" ");

    action.title = args.title;
    action.id = args.id;
    action.innerHTML = `<i class="glyphicon glyphicon-${args.icon}"></i>`;

    return action;
  },
  args: {
    icon: "floppy-disk",
    title: "Enregistrer",
    id: "2",
    classModifier: "",
  },
};
