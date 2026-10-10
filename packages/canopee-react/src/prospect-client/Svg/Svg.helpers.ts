import type { SVGAttributes } from "react";

type AccessibilityInput = Pick<
  SVGAttributes<SVGSVGElement>,
  "aria-label" | "aria-labelledby"
> & {
  alt?: string;
};

/**
 * An icon with a non-empty alt is an image named by it; an icon without alt,
 * aria-label or aria-labelledby is decorative and hidden from assistive
 * technologies. Explicit props are spread afterwards and take precedence.
 */
export const getAccessibilityProps = ({
  alt,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: AccessibilityInput) => {
  if (alt) {
    return { role: "img", "aria-label": alt };
  }

  if (ariaLabel || ariaLabelledBy) {
    return {};
  }

  return { "aria-hidden": true, focusable: false };
};

export const cloneAttributes = (
  from: HTMLElement | SVGSVGElement,
  to: HTMLElement | SVGSVGElement,
) => {
  const attributes = from.getAttributeNames();
  attributes.forEach((attribute) => {
    to.setAttribute(attribute, from.getAttribute(attribute) as string);
  });
};
