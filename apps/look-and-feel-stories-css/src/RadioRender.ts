import type { Args } from "@storybook/html";
import { TRadioValue } from "./Radio.stories";
import {
  createNode,
  div,
  input,
  label,
  span,
  svg,
  type Tattributes,
  Tchildren,
} from "./utils";

export const getInput = (args: Args) => {
  return input({
    id: args.id,
    name: args.name,
    type: "radio",
    value: args.value,
    disabled: args.disabled,
    checked: args.checked,
  } as Tattributes);
};

export const getIconDiv = () => {
  const svgUnchecked = svg({
    class: "af-radio__unchecked",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
  });
  const svgChecked = svg({
    class: "af-radio__checked",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
  });

  svgChecked.innerHTML += `<circle r="5" cy="12" cx="12"></circle>`;

  const iconContainer = div([], {
    class: "af-radio__icons",
  });

  iconContainer.innerHTML = `${svgUnchecked.outerHTML}${svgChecked.outerHTML}`;
  return iconContainer;
};

export const getSpan = (spanLabel: string, attributes?: Tattributes) => {
  return createNode({ node: "span", children: [spanLabel], attributes });
};

export const getDescriptionDiv = (children: Tchildren) => {
  return div(children, {
    class: "af-radio__content-description",
  });
};

export const renderLabelBasic = (args: Args) => {
  const inputRadio = getInput({
    id: `id-${args.name}`,
    name: args.name,
    error: !!args.error,
    disabled: args.disabled && !args.error,
    checked: args.checked && !args.error,
  });
  const iconDiv = getIconDiv();
  return label([inputRadio, iconDiv, args.label], {
    htmlFor: `id-${args.name}`,
  });
};

export const renderLabel = (args: Args, isError: boolean) => {
  const inputRadio = getInput({
    id: `id-${args.name}`,
    name: args.name,
    error: isError,
    disabled: args.disabled && !args.error,
    checked: args.checked && !args.error,
  });
  const iconDiv = getIconDiv();
  const description: (string | Node)[] = [];

  if (args.labelGroup.title) {
    description.push(getSpan(args.labelGroup.title));
  }
  if (args.labelGroup.subtitle) {
    description.push(getSpan(args.labelGroup.subtitle));
  }
  if (args.labelGroup.description) {
    description.push(getSpan(args.labelGroup.description));
  }
  const descriptionGroup = getDescriptionDiv(description);

  const group = div([], {
    class: "af-radio__content",
  });
  if (args.withIcon) {
    const icon = svg({
      class: "af-radio__icon",
      path: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
    });
    group.innerHTML = `${icon.outerHTML}`;
  }
  group.innerHTML += `${(descriptionGroup as HTMLElement).outerHTML}`;

  return label([inputRadio, iconDiv, group]);
};

export const renderError = (error: string) => {
  const errorDiv = div([], { class: "af-input-error", ariaLive: "assertive" });
  const icon = svg({
    path: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8",
    class: "af-input-error__icon",
  });
  const spanLabel = getSpan(error, { class: "af-input-error__message" });
  errorDiv.innerHTML = `${icon.outerHTML}${spanLabel.outerHTML}`;
  return errorDiv;
};
export const renderBasic = (args: Args) => {
  const children = [
    div([renderLabelBasic(args)], {
      class: "af-radio",
      "aria-invalid": `${Boolean(args.error)}`,
    }),
  ];
  if (args.error) {
    children.push(renderError(args.error));
  }
  return div(children);
};

export const render = (args: Args) => {
  const positionClass = args.vertical
    ? "af-radio-select--vertical"
    : "af-radio-select--horizontal";
  const attributes: Tattributes = {
    role: "group",
    class: `af-radio af-radio-select ${positionClass} ${args.class}`,
    "aria-invalid": `${Boolean(args.error)}`,
  };
  const radioLabels: (string | Node)[] = [];
  args.radioList.forEach((radioLabel: TRadioValue) => {
    radioLabels.push(renderLabel(radioLabel, !!args.error));
  });

  const container = div(radioLabels, attributes);
  const childrenContainer = [];
  if (args.label) {
    const spanLabelChildren: (string | Node)[] = [args.label];
    if (args.isRequired) {
      spanLabelChildren.push(span([" *"], { ariaHidden: "true" }));
    }
    childrenContainer.push(
      span(spanLabelChildren, { class: "af-radio__label" }),
    );
  }
  childrenContainer.push(container);

  if (args.error) {
    childrenContainer.push(renderError(args.error));
  }

  return div(childrenContainer, { class: `af-radio__container ${args.class}` });
};
