import type { SVGProps } from "react";

const SvgKeyboardArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
  </svg>
);

export { SvgKeyboardArrowLeft };
