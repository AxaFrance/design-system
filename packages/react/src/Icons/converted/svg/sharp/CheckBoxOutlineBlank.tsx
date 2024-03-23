import type { SVGProps } from "react";

const SvgCheckBoxOutlineBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 5v14H5V5zm2-2H3v18h18z" />
  </svg>
);

export { SvgCheckBoxOutlineBlank };
