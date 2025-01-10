import type { Args } from "@storybook/html";

export const render = (args: Args) => {
  const btn = document.createElement("button");
  btn.innerHTML = args.label;
  if (args.iconLeft) {
    btn.innerHTML = `${args.iconLeft}${btn.innerHTML}`;
  }
  if (args.iconRight) {
    btn.innerHTML = `${btn.innerHTML}${args.iconRight}`;
  }

  btn.className = [
    "af-btn-client",
    args.variant ? `af-btn-client--${args.variant}` : "",
  ].join(" ");

  if (args.disabled) {
    btn.setAttribute("disabled", args.disabled);
  }

  return btn;
};
