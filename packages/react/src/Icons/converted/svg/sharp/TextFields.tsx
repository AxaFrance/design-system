import type { SVGProps } from "react";

const SvgTextFields = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M2.5 4v3h5v12h3V7h5V4zm19 5h-9v3h3v7h3v-7h3z" />
  </svg>
);

export { SvgTextFields };
