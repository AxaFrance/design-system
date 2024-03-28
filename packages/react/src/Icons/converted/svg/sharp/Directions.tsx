import type { SVGProps } from "react";

const SvgDirections = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M22.41 12 12 1.59 1.59 11.99 12 22.41zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5z" />
  </svg>
);

export { SvgDirections };
