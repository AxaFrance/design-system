import type { SVGProps } from "react";

const SvgNavigateBefore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m14.2 6-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
  </svg>
);

export { SvgNavigateBefore };
