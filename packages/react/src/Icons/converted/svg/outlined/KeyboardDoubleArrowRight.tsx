import type { SVGProps } from "react";

const SvgKeyboardDoubleArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
  </svg>
);

export { SvgKeyboardDoubleArrowRight };
