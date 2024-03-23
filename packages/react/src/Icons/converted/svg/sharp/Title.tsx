import type { SVGProps } from "react";

const SvgTitle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M5 4v3h5.5v12h3V7H19V4z" />
  </svg>
);

export { SvgTitle };
