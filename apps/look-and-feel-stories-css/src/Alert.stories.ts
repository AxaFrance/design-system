import "@axa-fr/design-system-look-and-feel-css/dist/Alert/Alert.scss";
import "@axa-fr/design-system-apollo-css/dist/Button/ButtonLF.scss";
import "@axa-fr/design-system-apollo-css/dist/Link/LinkLF.scss";
import type { Args, Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Alert",
};

export default meta;

const alertTypes = {
  validation: "validation",
  error: "error",
  warning: "warning",
  information: "information",
  neutral: "neutral",
} as const;

const MODIFIERS = [...Object.values(alertTypes)];

type AlertType = keyof typeof alertTypes;

const setSvg = (path: string) =>
  `<svg class="af-alert__icon" width="24" height="24" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="${path}"></path></svg>`;

function getIconFromType(type: AlertType) {
  switch (type) {
    case "information":
      return setSvg(
        "m3.55 19.09 1.41 1.41 1.79-1.8-1.41-1.41zM11 20h2v3h-2zM1 11h3v2H1zm12-6.95v3.96l1 .58c1.24.72 2 2.04 2 3.46 0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.42.77-2.74 2-3.46l1-.58V4.05zm2-2H9v4.81C7.21 7.9 6 9.83 6 12.05c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zM20 11h3v2h-3zm-2.76 7.71 1.79 1.8 1.41-1.41-1.8-1.79z",
      );
    case "neutral":
      return setSvg(
        "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8",
      );
    case "warning":
      return setSvg(
        'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z',
      );
    case "validation":
      return setSvg(
        "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8",
      );
    case "error":
      return setSvg(
        "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8",
      );
    default:
      return setSvg(
        "m3.55 19.09 1.41 1.41 1.79-1.8-1.41-1.41zM11 20h2v3h-2zM1 11h3v2H1zm12-6.95v3.96l1 .58c1.24.72 2 2.04 2 3.46 0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.42.77-2.74 2-3.46l1-.58V4.05zm2-2H9v4.81C7.21 7.9 6 9.83 6 12.05c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zM20 11h3v2h-3zm-2.76 7.71 1.79 1.8 1.41-1.41-1.8-1.79z",
      );
  }
}

const commonProps: Pick<StoryObj, "render" | "argTypes"> = {
  render: (args: Args) => {
    const alert = document.createElement("div");

    alert.className = `af-alert af-alert--${args.type}`;
    alert.role = "alert";

    alert.innerHTML = `
      ${getIconFromType(args.type)}
      <div class="af-alert-client__content">
        ${args.title ? `<h4 class="af-alert__title">${args.title}</h4>` : ""}
        ${args.children}
      </div>
    `;
    return alert;
  },
  argTypes: {
    type: {
      options: MODIFIERS,
      control: { type: "select" },
      defaultValue: "information",
    },
  },
};

export const Default: StoryObj = {
  ...commonProps,
  name: "Alert",
  args: {
    title: "My Alert title",
    type: "information",
    children: `Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.
      <div class="af-alert__action"><a class="af-link  af-link--openInNewTab" href="https://fakelink.com" target="_blank" rel="noopener noreferrer">Plus de détails<svg data-src="/@fs/Users/a770ml/Documents/DEV/GITHUB%20AXAFRANCE/design-system/node_modules/@material-symbols/svg-400/outlined/open_in_new.svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="injected-svg" viewBox="0 -960 960 960" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z"></path></svg></a></div>
      `,
  },
};

export const WithButtonAction: StoryObj = {
  ...commonProps,
  name: "Alert with Button action",
  args: {
    title: "My Alert title",
    type: "information",
    children: `Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.
      <div class="af-alert__action"><button class="af-btn-client af-btn-client--ghost" type="button">Button Ghost</button></div>
      `,
  },
};
