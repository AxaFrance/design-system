import type { SVGProps } from "react";

const SvgWorkOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 4h4v2h-3.6L22 17.6V6h-6V4c0-1.1-.9-2-2-2h-4c-.98 0-1.79.71-1.96 1.64L10 5.6zM3.4 1.84 1.99 3.25 4.74 6H2.01L2 21h17.74l2 2 1.41-1.41z" />
  </svg>
);

export { SvgWorkOff };
