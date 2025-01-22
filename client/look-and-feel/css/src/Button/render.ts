import type { Args } from "@storybook/html";

export const render = (args: Args) => {
  const { label, variant, iconLeft, iconRight, disabled, ...restAttributes } =
    args;
  const btn = document.createElement("button");
  btn.innerHTML = label;
  if (iconLeft) {
    btn.innerHTML = `${iconLeft}${btn.innerHTML}`;
  }
  if (iconRight) {
    btn.innerHTML = `${btn.innerHTML}${args.iconRight}`;
  }

  btn.className = [
    "af-btn-client",
    variant ? `af-btn-client--${variant}` : "",
  ].join(" ");

  if (disabled) {
    btn.setAttribute("disabled", disabled);
  }

  for (const attr in restAttributes) {
    if (restAttributes[attr]) {
      btn.setAttribute(attr, restAttributes[attr]);
    }
  }

  return btn;
};
