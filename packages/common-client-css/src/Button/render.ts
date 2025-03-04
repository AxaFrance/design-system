import type { Args } from "@storybook/html";
import { button, div, h2 } from "../../utils";
import {
  buttonVariants,
  type ButtonVariants,
} from "@axa-fr/design-system-common-client-react";

export const VARIANTS = Object.values(buttonVariants);

export const render = (args: Args) => {
  const { label, variant, iconLeft, iconRight, ...restAttributes } = args;

  const className = [
    "af-btn-client",
    variant ? `af-btn-client--${variant}` : "",
  ].join(" ");

  const btn = button([`${label}`], {
    class: className,
    ...restAttributes,
  });

  if (iconLeft) {
    btn.innerHTML = `${iconLeft}${btn.innerHTML}`;
  }
  if (iconRight) {
    btn.innerHTML = `${btn.innerHTML}${args.iconRight}`;
  }

  return btn;
};

const buttonBlock = ({
  variant,
  modifier,
}: {
  variant: ButtonVariants;
  modifier?: string;
}) => {
  const basicButton = render({ variant, label: variant });
  const disabledButton = render({ variant, label: variant, disabled: true });
  const iconLeftButton = render({
    variant,
    label: variant,
    iconLeft: `<svg width="24" height="24" viewBox="0 0 24 24" ><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path></svg>`,
  });
  const iconRightButton = render({
    variant,
    label: variant,
    iconRight: `<svg width="24" height="24" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg"><path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z"></path></svg>`,
  });
  const title = h2([variant]);
  return div(
    [title, basicButton, disabledButton, iconLeftButton, iconRightButton],
    {
      class: [
        "af-btn-client-demo__bloc",
        modifier ? `af-btn-client-demo__bloc--${modifier}` : "",
      ]
        .filter(Boolean)
        .join(" "),
    },
  );
};

const buttonBlockVariants = (variant: ButtonVariants) =>
  div([buttonBlock({ variant }), buttonBlock({ variant, modifier: "blue" })], {
    class: "af-btn-client-demo-variant",
  });

export const renderAll = (args: Args) =>
  div([...VARIANTS.map((variant) => buttonBlockVariants(variant))], {
    class: "af-btn-client-demo",
  });
