import type { Args } from "@storybook/html";
import { TCheckboxValue } from "./Checkbox.stories";
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
    "aria-invalid": `${Boolean(args.error)}`,
    type: "checkbox",
    value: args.value,
    disabled: args.disabled,
    checked: args.checked,
  } as Tattributes);
};

export const getIconDiv = () => {
  const svgUnchecked = svg({
    class: "af-checkbox__unchecked",
    path: "M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2",
  });
  const svgChecked = svg({
    class: "af-checkbox__checked",
    path: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z",
  });

  const iconContainer = div([], {
    class: "af-checkbox__icons",
  });

  iconContainer.innerHTML = `${svgUnchecked.outerHTML}${svgChecked.outerHTML}`;
  return iconContainer;
};

export const getSpan = (spanLabel: string) => {
  return createNode({ node: "span", children: [spanLabel] });
};

export const getDescriptionDiv = (children: Tchildren) => {
  return div(children, {
    class: "af-checkbox__content-description",
  });
};

export const renderLabelBasic = (args: Args) => {
  const inputCheckbox = getInput({
    id: `id-${args.name}`,
    name: args.name,
    error: !!args.error,
    disabled: args.disabled && !args.error,
    checked: args.checked && !args.error,
  });
  const iconDiv = getIconDiv();
  return label([inputCheckbox, iconDiv, args.label], {
    htmlFor: `id-${args.name}`,
  });
};

export const renderLabel = (args: Args, isError: boolean) => {
  const inputCheckbox = getInput({
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
    class: "af-checkbox__content",
  });
  if (args.withIcon) {
    const icon = svg({
      class: "af-checkbox__icon",
      path: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
    });
    group.innerHTML = `${icon.outerHTML}`;
  }
  group.innerHTML += `${(descriptionGroup as HTMLElement).outerHTML}`;

  return label([inputCheckbox, iconDiv, group]);
};

export const renderError = (error: string) => {
  const errorDiv = div([], {
    class: "af-checkbox__error",
    ariaLive: "assertive",
  });
  const icon = svg({
    path: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8",
  });
  errorDiv.innerHTML = `${icon.outerHTML}${error}`;
  return errorDiv;
};
export const renderBasic = (args: Args) => {
  const children = [div([renderLabelBasic(args)], { class: "af-checkbox" })];
  if (args.error) {
    children.push(renderError(args.error));
  }
  return div(children);
};

export const render = (args: Args) => {
  const positionClass = args.vertical
    ? "af-checkbox-select--vertical"
    : "af-checkbox-select--horizontal";
  const attributes: Tattributes = {
    role: "group",
    class: `af-checkbox af-checkbox-select ${positionClass} ${args.class}`,
  };
  const checkboxLabels: (string | Node)[] = [];
  args.checkboxList.forEach((checkboxLabel: TCheckboxValue) => {
    checkboxLabels.push(renderLabel(checkboxLabel, !!args.error));
  });

  const container = div(checkboxLabels, attributes);
  const childrenContainer = [];
  if (args.label) {
    const spanLabelChildren: (string | Node)[] = [args.label];
    if (args.isRequired) {
      spanLabelChildren.push(span([" *"], { ariaHidden: "true" }));
    }
    childrenContainer.push(
      span(spanLabelChildren, { class: "af-checkbox__label" }),
    );
  }
  childrenContainer.push(container);

  if (args.error) {
    childrenContainer.push(renderError(args.error));
  }

  return div(childrenContainer, {
    class: `af-checkbox__container ${args.class}`,
  });
};
