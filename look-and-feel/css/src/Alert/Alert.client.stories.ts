import type { Meta, StoryObj } from "@storybook/html";
import "./Alert.client.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/Alert",
};

export default meta;

const MODIFIERS = ["information", "neutral", "error", "validation", "warning"];

export type AlertType =
  | "validation"
  | "error"
  | "warning"
  | "information"
  | "neutral";

function getIconFromType(type: AlertType) {
  switch (type) {
    case "information":
      return '<svg class="af-alert__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WbIncandescentOutlinedIcon"><path d="m3.55 19.09 1.41 1.41 1.79-1.8-1.41-1.41zM11 20h2v3h-2zM1 11h3v2H1zm12-6.95v3.96l1 .58c1.24.72 2 2.04 2 3.46 0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.42.77-2.74 2-3.46l1-.58V4.05zm2-2H9v4.81C7.21 7.9 6 9.83 6 12.05c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zM20 11h3v2h-3zm-2.76 7.71 1.79 1.8 1.41-1.41-1.8-1.79z"></path></svg>';
    case "neutral":
      return '<svg class="af-alert__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path></svg>';
    case "warning":
      return '<svg class="af-alert__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>';
    case "validation":
      return '<svg class="af-alert__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckCircleOutlineIcon"><path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path></svg>';
    case "error":
      return '<svg class="af-alert__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path></svg>';
    default:
      return '<svg class="af-alert__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WbIncandescentOutlinedIcon"><path d="m3.55 19.09 1.41 1.41 1.79-1.8-1.41-1.41zM11 20h2v3h-2zM1 11h3v2H1zm12-6.95v3.96l1 .58c1.24.72 2 2.04 2 3.46 0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.42.77-2.74 2-3.46l1-.58V4.05zm2-2H9v4.81C7.21 7.9 6 9.83 6 12.05c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zM20 11h3v2h-3zm-2.76 7.71 1.79 1.8 1.41-1.41-1.8-1.79z"></path></svg>';
  }
}

export const Default: StoryObj = {
  name: "Alert",
  render: (args) => {
    const alert = document.createElement("div");

    alert.className = `af-alert af-alert--${args.type}`;

    alert.innerHTML = `
      ${getIconFromType(args.type)}
      <div>
        ${args.title ? `<p class="af-alert__title">${args.title}</p>` : ""}
        ${args.children}
      </div>
    `;
    return alert;
  },
  args: {
    title: "My Alert title",
    type: "information",
    children:
      "Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",
  },
  argTypes: {
    type: {
      options: MODIFIERS,
      control: { type: "select" },
      defaultValue: "information",
    },
  },
};
